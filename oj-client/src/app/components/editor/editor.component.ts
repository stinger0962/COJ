import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollaborationService } from '../../services/collaboration.service';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs/Subscription';

// use declare since ace is not devlared anywhere in .ts
declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  public languages: string[] = ['Java', 'Python'];
  language: string = 'Java';

  defaultContent = {
    'Java': `public class Solution {
      public static void main(String[] args) {
        // Type your code here.
      }
    }`,
    'Python': `class Solution:
    def example():
      # Type your code here.`,
    'C++': `int main()
    {
      return 0;
    }`
  };
  // sessionId equals to problemId, it is the room id for sockets to join
  sessionId: string;
  users: string;
  subscriptionUsers: Subscription;

  constructor(private collaboration: CollaborationService,
              private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    // fire these events each time redirect to/refresh page
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
      this.initEditor();
      this.collaboration.restoreBuffer();
    });


  }

  initEditor(): void {
    // "editor" is the element id in html
    this.editor = ace.edit("editor");
    // set default properties for the editor
    this.editor.setTheme("ace/theme/chrome");
    this.resetEditor();
    // initialize collaboration service
    this.subscriptionUsers = this.collaboration.init(this.editor, this.sessionId)
                            .subscribe(users => this.users = users);
    this.editor.lastAppliedChange = null;
    // editor's change event will trigger socket's emit change
    this.editor.on("change", e => {
      console.log('editor change ' + JSON.stringify(e));
      // prevent loop on the same change
      if (this.editor.lastAppliedChange != e) {
        this.collaboration.change(JSON.stringify(e));
      }
    })
  }

  resetEditor(): void {
    this.editor.setValue(this.defaultContent[this.language], 1);
    this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
  }

  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }

  submit(): void {
    let user_code = this.editor.getValue();
    console.log(user_code);
  }



}
