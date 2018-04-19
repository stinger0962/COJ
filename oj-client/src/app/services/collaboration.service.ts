import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

declare var io: any;

@Injectable()
export class CollaborationService {

  collaborationSocket: any;
  private _users$ = new Subject<string>();

  constructor() { }

  // initialize a client socket,
  // listening on change, userChange event
  // return user list as observable
  init(editor: any, sessionId: string): Observable<string> {

    // initialize a socket on current addr:port, pass query to server side
    this.collaborationSocket = io(window.location.origin,
    {query: 'sessionId=' + sessionId});


    // socket receives a single change: update editor view
    this.collaborationSocket.on("change", (delta: string) => {
      console.log('editor change: ' + delta);
      delta = JSON.parse(delta); // reverse of stringify
      // record and apply changes
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    })


    // socket receives a list of users: return list as observable
    this.collaborationSocket.on("userChange", (users: string[]) => {
      console.log("client socket receives userChange: " + users);
      this._users$.next(users.toString());
    })
    return this._users$.asObservable();
  }
  // socket emit change, triggered by editor's change event
  change(delta: string): void {
    this.collaborationSocket.emit("change", delta);
  }

  // socket emit restore content, triggered by enter page
  restoreBuffer(): void {
    this.collaborationSocket.emit("restoreBuffer");
  }

}
