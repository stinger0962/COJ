webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"container\">\n  <nav class=\"navbar navbar-light bg-light\">\n    <a routerLink=\"newproblem\">Add Problem</a>\n    <span>|</span>\n    <a routerLink=\"problems\">Problems List</a>\n  </nav>\n</div>-->\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
var new_problem_component_1 = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
var angular2_markdown_1 = __webpack_require__("./node_modules/angular2-markdown/index.js");
var editor_component_1 = __webpack_require__("./src/app/components/editor/editor.component.ts");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var navbar_component_1 = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
var search_pipe_1 = __webpack_require__("./src/app/pipes/search.pipe.ts");
var input_service_1 = __webpack_require__("./src/app/services/input.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                problem_detail_component_1.ProblemDetailComponent,
                new_problem_component_1.NewProblemComponent,
                editor_component_1.EditorComponent,
                navbar_component_1.NavbarComponent,
                search_pipe_1.SearchPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.routing,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                angular2_markdown_1.MarkdownModule.forRoot()
            ],
            providers: [
                data_service_1.DataService,
                collaboration_service_1.CollaborationService,
                input_service_1.InputService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var new_problem_component_1 = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
var routes = [
    { path: '', redirectTo: 'problems', pathMatch: 'full' },
    { path: 'problems', component: problem_list_component_1.ProblemListComponent },
    { path: 'problems/:id', component: problem_detail_component_1.ProblemDetailComponent },
    { path: 'newproblem', component: new_problem_component_1.NewProblemComponent },
    { path: '**', redirectTo: 'problems' },
];
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen {\n  #editor {\n    height: 600px;\n  }\n}\n\n.lang-select {\n  width: 100px;\n  margin-right: 10px;\n}\n\nheader .btn {\n  margin: 0 5px;\n}\n\nfooter .btn {\n  margin: 0 5px;\n}\n\n.editor-header, .editor-footer {\n  margin: 10px 0;\n}\n\n.cursor {\n  background: rgba(0, 250, 0, 0.5);\n  z-index: 40;\n  width: 2px !important;\n}\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <!-- header includes language selection and reset -->\n  <header class=\"editor-header\">\n    <div class=\"row\">\n      <select class=\"form-control pull-left lang-select\"\n       name=\"language\" [(ngModel)]=\"language\"\n       (change)=\"setLanguage(language)\">\n      <option *ngFor=\"let language of languages\"\n      [value]=\"language\">\n      {{language}}\n      </select>\n\n      <!-- reset button and its modal -->\n      <button type=\"button\" class=\"btn btn-primary\"\n      data-toggle=\"modal\" data-target=\"#myModal\">\n        reset\n      </button>\n\n      <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\"\n      role=\"dialog\" aria-labelledby=\"modalLabel\"\n      aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"modalLabel\">\n              Are you sure\n              </h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n              aria-label=\"close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n\n            <div class=\"modal-body\">\n              You will lose current code in the editor, are you sure?\n            </div>\n\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\"\n              data-dismiss=\"modal\">\n                Cancel\n              </button>\n              <button type=\"button\" class=\"btn btn-primary\"\n              data-dismiss=\"modal\" (click)=\"resetEditor()\">\n                reset\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <!-- body: editor-->\n  <div id=\"editor\"></div>\n\n  <div>\n    {{users}}\n  </div>\n\n  <!-- footer: submit button-->\n  <footer class=\"editor-footer\">\n    <button type=\"button\" class=\"btn btn-success pull-right\"\n    (click)=\"submit()\">Submit Sulution</button>\n  </footer>\n\n</section>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route, dataService) {
        this.collaboration = collaboration;
        this.route = route;
        this.dataService = dataService;
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            'Java': "public class Solution {\n      public static void main(String[] args) {\n        // Type your code here.\n      }\n    }",
            'Python': "class Solution:\n    def example():\n      # Type your code here.",
            'C++': "int main()\n    {\n      return 0;\n    }"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fire these events each time redirect to/refresh page
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
            _this.collaboration.restoreBuffer();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        // "editor" is the element id in html
        this.editor = ace.edit("editor");
        // set default properties for the editor
        this.editor.setTheme("ace/theme/chrome");
        this.resetEditor();
        // initialize collaboration service
        this.subscriptionUsers = this.collaboration.init(this.editor, this.sessionId)
            .subscribe(function (users) { return _this.users = users; });
        this.editor.lastAppliedChange = null;
        // editor's change event will trigger socket's emit change
        this.editor.on("change", function (e) {
            console.log('editor change ' + JSON.stringify(e));
            // prevent loop on the same change
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent[this.language], 1);
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.submit = function () {
        var user_code = this.editor.getValue();
        console.log(user_code);
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor',
            template: __webpack_require__("./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("./src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService,
            router_1.ActivatedRoute,
            data_service_1.DataService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown-menu li:hover {\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style=\"background-color: #563d7c;\">\n  <div class=\"container-fluid\">\n    <!-- toggle button and brand -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle Navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/\">\n        {{title}}\n      </a>\n    </div>\n\n    <!-- collapsable navbar -->\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"problems\">Problems</a></li>\n        <li><a routerLink=\"newproblem\">Add Problem</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">Difficulty <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu dropdown-menu-rightshow\">\n            <li *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\" (click)=filterDiff(difficulty)>\n              <a class=\"dropdown-item\">{{difficulty}}</a>\n            </li>\n          </ul>\n        </li>\n        <form class=\"navbar-form navbar-left\">\n          <div class=\"form-group\">\n            <input type=\"search\" class=\"form-control\" placeholder=\"problem title, description...\" aria-label=\"Search\"\n            [formControl]=\"searchBox\">\n          </div>\n        </form>\n      </ul>\n\n    </div>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var input_service_1 = __webpack_require__("./src/app/services/input.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(input, router) {
        this.input = input;
        this.router = router;
        this.title = "COOJ";
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
        this.selectedDiff = '';
        this.searchBox = new forms_1.FormControl();
    }
    // subscribe to searchbox value change, on change, call input service
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.searchBox.valueChanges.debounceTime(200)
            .subscribe(function (terms) { return _this.input.changeInput(terms); });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavbarComponent.prototype.filterDiff = function (diff) {
        // trigger difficulty on/off
        this.selectedDiff = this.selectedDiff === diff ? '' : diff;
        // console.log("selected diff: " + this.selectedDiff);
        this.input.changeDifficulty(this.selectedDiff);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [input_service_1.InputService,
            router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemName\"\n        name=\"problemName\" placeholder=\"Input problem name\" required\n        [(ngModel)]=\"newProblem.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <textarea class=\"form-control\" id=\"problemDesc\" rows=\"4\"\n        name=\"problemDesc\" placeholder=\"Input problem description\" required\n        [(ngModel)]=\"newProblem.desc\">\n      </textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\"\n        [(ngModel)]=\"newProblem.difficulty\">\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n          {{difficulty}}\n        </option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"button\" class=\"btn btn-primary pull-right\"\n          (click)=\"addProblem()\">Add Problem</button>\n      </div>\n    </div>\n  </form>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem);
        // reset newProblem instance to avoid overwriting the lastest added problem next time addProblem() is called
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        // redirect to problem list component
        this.router.navigateByUrl('/problems');
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("./src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.Router])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <br>\n      <button class=\"btn btn-primary pull-left\"\n        (click)=\"goBack()\">Go Back</button>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-4\">\n    <div>\n      <h2>\n        {{problem.id}}. {{problem.name}}\n      </h2>\n      <p>\n        <markdown>\n        {{problem.desc}}\n        </markdown>\n      </p>\n    </div>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-editor></app-editor>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        this.getProblem();
    };
    // subscribe to route.params, call getProblem on new params
    // route.params : Observable
    ProblemDetailComponent.prototype.getProblem = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; })
                .catch(function (err) { return Promise.reject(err); });
        });
    };
    ProblemDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
            template: __webpack_require__("./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports) {

module.exports = ".difficulty {\n    min-width: 65px;\n    margin-right: 10px;\n  }\n\n  .badge.difficulty {\n    padding-top: 0.3em;\n    padding-bottom: 0.4em;\n    color: #fbfdfa;\n    font-size: 12px;\n  }\n\n  .title {\n    font-size: 1.2em;\n  }\n\n  .diff-easy {\n    background-color: #89D5C9;\n  }\n\n  .diff-medium {\n    background-color: #FAC172;\n  }\n\n  .diff-hard {\n    background-color: #E25B45;\n  }\n\n  .diff-super {\n    background-color: #8869A5;\n  }\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of (problems | search: searchTerm: difficulty)\"\n      routerLink=\"/problems/{{problem.id}}\">\n      <span class=\"{{'pull-left badge difficulty diff-' +\n        problem.difficulty.toLocaleLowerCase()}}\">\n        {{problem.difficulty}}\n      </span>\n      <strong class=\"title\">{{problem.id}}. {{problem.name}}\n      </strong>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var input_service_1 = __webpack_require__("./src/app/services/input.service.ts");
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService, inputService) {
        this.dataService = dataService;
        this.inputService = inputService;
        this.searchTerm = '';
        this.difficulty = '';
    }
    // subscribe to both problems and filter conditions
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
        this.getSearchTerm();
        this.getDifficulty();
    };
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProblems.unsubscribe();
    };
    // service getProblems return Observable
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionSearchTerm = this.inputService.getInput()
            .subscribe(function (terms) { return _this.searchTerm = terms; });
    };
    ProblemListComponent.prototype.getDifficulty = function () {
        var _this = this;
        this.subscriptionDifficulty = this.inputService.getDifficulty()
            .subscribe(function (difficulty) { return _this.difficulty = difficulty; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            input_service_1.InputService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "./src/app/mock-problems.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// use a mock data structure to essemble a real database
exports.PROBLEMS = [
    {
        "id": 1,
        "name": "Two Sum",
        "desc": "Given an array of integers, find two numbers such that they add up to a specific target number.\n\nThe function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
        "difficulty": "easy"
    },
    {
        "id": 2,
        "name": "3Sum",
        "desc": "Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
        "difficulty": "medium"
    },
    {
        "id": 3,
        "name": "4Sum",
        "desc": "Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?\n\nFind all unique quadruplets in the array which gives the sum of target.",
        "difficulty": "medium"
    },
    {
        "id": 4,
        "name": "Triangle Count",
        "desc": "Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose three edges length is the three numbers that we find?",
        "difficulty": "hard"
    },
    {
        "id": 5,
        "name": "Sliding Window Maximum",
        "desc": "Given an array of n integer with duplicate number, and a moving window(size k), move the window at each iteration from the start of the array, find the maximum number inside the window at each moving.",
        "difficulty": "super"
    }
];


/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    // add a filter to problems on search term and an optional difficulty
    SearchPipe.prototype.transform = function (problems, terms, difficulty) {
        console.log("term: " + terms + ", diff: " + difficulty + " ");
        if (difficulty != '') {
            return problems.filter(function (problem) { return (problem.difficulty === difficulty) && (problem.name.toLowerCase().includes(terms) || problem.desc.toLowerCase().includes(terms)); });
        }
        else {
            return problems.filter(function (problem) { return problem.name.toLowerCase().includes(terms) || problem.desc.toLowerCase().includes(terms); });
        }
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;


/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
        this._users$ = new Subject_1.Subject();
    }
    // initialize a client socket,
    // listening on change, userChange event
    // return user list as observable
    CollaborationService.prototype.init = function (editor, sessionId) {
        var _this = this;
        // initialize a socket on current addr:port, pass query to server side
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        // socket receives a single change: update editor view
        this.collaborationSocket.on("change", function (delta) {
            console.log('editor change: ' + delta);
            delta = JSON.parse(delta); // reverse of stringify
            // record and apply changes
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        // socket receives a list of users: return list as observable
        this.collaborationSocket.on("userChange", function (users) {
            console.log("client socket receives userChange: " + users);
            _this._users$.next(users.toString());
        });
        return this._users$.asObservable();
    };
    // socket emit change, triggered by editor's change event
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
    };
    // socket emit restore content, triggered by enter page
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit("restoreBuffer");
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var mock_problems_1 = __webpack_require__("./src/app/mock-problems.ts");
var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this.problems = mock_problems_1.PROBLEMS;
        // BehaviorSubject needs an initial value --> empty list
        this._problemSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    // caller can subscribe to get problems
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.httpClient.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res);
        })
            .catch(this.handleError);
        // hide Observer from caller
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.httpClient.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        // auto generate problem id
        var options = { headers: new http_1.HttpHeaders({
                'Content-type': 'application/json'
            }) };
        this.httpClient.post('api/v1/problems', problem, options)
            .toPromise()
            .then(function (res) {
            // update problem list
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (err) {
        // console.error('an error occured, info:', err.stack)
        return Promise.reject(err.body || err);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/app/services/input.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var InputService = /** @class */ (function () {
    function InputService() {
        // BehaviorSubject needs an initialized value
        this.inputSubject$ = new BehaviorSubject_1.BehaviorSubject('');
        this.diffSubject$ = new BehaviorSubject_1.BehaviorSubject('');
    }
    // push data to stream
    InputService.prototype.changeInput = function (term) {
        this.inputSubject$.next(term);
    };
    InputService.prototype.changeDifficulty = function (diff) {
        this.diffSubject$.next(diff);
    };
    // return as Observable
    InputService.prototype.getInput = function () {
        return this.inputSubject$.asObservable();
    };
    InputService.prototype.getDifficulty = function () {
        return this.diffSubject$.asObservable();
    };
    InputService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], InputService);
    return InputService;
}());
exports.InputService = InputService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map