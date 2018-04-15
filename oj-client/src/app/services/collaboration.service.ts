import { Injectable } from '@angular/core';

declare var io: any;

@Injectable()
export class CollaborationService {

  collaborationSocket: any;
  constructor() { }

  // initialize a client socket, listening on change event
  init(editor: any, sessionId: string): void {

    // initialize a socket on current addr:port, pass query to server side
    this.collaborationSocket = io(window.location.origin,
    {query: 'sessionId=' + sessionId});
    // socket receive change: update editor view
    this.collaborationSocket.on("change", (delta: string) => {
      console.log('editor change: ' + delta);
      delta = JSON.parse(delta); // reverse of stringify
      // record and apply changes
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    })
  }
  // socket emit change, triggered by editor's change event
  change(delta: string): void {
    this.collaborationSocket.emit("change", delta);
  }

}
