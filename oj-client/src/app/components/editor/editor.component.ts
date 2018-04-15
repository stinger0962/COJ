import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollaborationService } from '../../services/collaboration.service';

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
      # Type your code here.`
  };
  // sessionId is a room id for sockets to join
  sessionId: string;

  constructor(private collaboration: CollaborationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // initialize editor
    this.initEditor();
    // get session(room) id for this problem
    this.getSessionId();
    // initialize collaboration service
    this.collaboration.init(this.editor, this.sessionId);
  }

  initEditor(): void {
    // "editor" is the element id in html
    this.editor = ace.edit("editor");
    // set default properties for the editor
    this.editor.setTheme("ace/theme/chrome");
    this.editor.session.setMode("ace/mode/java");
    this.editor.setValue(this.defaultContent["Java"], 1);
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

  getSessionId(): void {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
    })
  }

}
