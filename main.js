(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <todo-list></todo-list>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_autofocus_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-autofocus-fix */ "./node_modules/angular-autofocus-fix/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_7__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_autofocus_fix__WEBPACK_IMPORTED_MODULE_3__["AutofocusModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"logo\" width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n<input type=\"text\" class=\"todo-input\" placeholder=\"What needs to be done\" [(ngModel)]=\"todoTitle\" (keyup.enter)=\"addTodo()\">\n\n<div class=\"todo-item\" *ngFor=\"let todo of todosFiltered()\" @fade>\n  <div class=\"todo-item-left\">\n    <input type=\"checkbox\" [(ngModel)]=\"todo.completed\" (change)=\"doneEdit(todo)\">\n    <div *ngIf=\"!todo.editing; else editingTodo\" class=\"todo-item-label\" [ngClass]=\"{ 'completed' : todo.completed }\" (dblclick)=\"editTodo(todo)\">{{ todo.title }}</div>\n    <ng-template #editingTodo>\n      <input type=\"text\" class=\"todo-item-edit\" [(ngModel)]=\"todo.title\" (blur)=\"doneEdit(todo)\" (keyup.enter)=\"doneEdit(todo)\" (keyup.esc)=\"cancelEdit(todo)\"autofocus>\n    </ng-template>\n  </div>\n  <div class=\"remove-item\" (click)=\"deleteTodo(todo.id)\">\n    &times;\n  </div>\n</div>\n\n<div class=\"extra-container\">\n  <div><label><input type=\"checkbox\" (change)=\"checkAllTodos()\"  [(ngModel)]=\"!anyRemainingModel\"> Check All</label></div>\n  <div>{{ remaining() }} items left</div>\n</div>\n\n<div class=\"extra-container\">\n  <div>\n    <button [ngClass]=\"{'active': filter === 'all'}\" (click)=\"filter='all'\">All</button>\n    <button [ngClass]=\"{'active': filter === 'active'}\" (click)=\"filter='active'\">Active</button>\n    <button [ngClass]=\"{'active': filter === 'completed'}\" (click)=\"filter='completed'\">Completed</button>\n  </div>\n\n  <div *ngIf=\"atLeastOneCompleted()\">\n    <button (click)=\"clearCompleted()\">Clear Completed</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-input {\n  width: 100%;\n  padding: 10px 18px;\n  font-size: 18px;\n  margin-bottom: 16px; }\n  .todo-input:focus {\n    outline: 0; }\n  .todo-item {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s; }\n  .remove-item {\n  cursor: pointer;\n  margin-left: 14px; }\n  .remove-item:hover {\n    color: black; }\n  .todo-item-left {\n  display: flex;\n  align-items: center; }\n  .todo-item-label {\n  padding: 10px;\n  border: 1px solid white;\n  margin-left: 12px; }\n  .todo-item-edit {\n  font-size: 24px;\n  color: #2c3e50;\n  margin-left: 12px;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  font-family: 'Avenir', Helvetica, Arial, sans-serif; }\n  .todo-item-edit:focus {\n    outline: none; }\n  .completed {\n  text-decoration: line-through;\n  color: grey; }\n  .extra-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  border-top: 1px solid lightgrey;\n  padding-top: 14px;\n  margin-bottom: 14px; }\n  button {\n  font-size: 14px;\n  background-color: white;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  button:hover {\n    background: lightgreen; }\n  button:focus {\n    outline: none; }\n  .active {\n  background: lightgreen; }\n  .fade-enter-active, .fade-leave-active {\n  transition: opacity .2s; }\n  .fade-enter, .fade-leave-to {\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvQzpcXFVzZXJzXFxTdXJhaiBBbmJ1bWFuaVxcRG9jdW1lbnRzXFxhbmd1bGFyX3Byb2plY3RzXFx0b2RvLWFuZ3VsYXItbWFzdGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0b2RvLWxpc3RcXHRvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixvQkFBbUIsRUFLcEI7RUFURDtJQU9JLFdBQVUsRUFDWDtFQUdIO0VBQ0Usb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLGlDQUF3QjtVQUF4Qix5QkFBd0IsRUFDekI7RUFFRDtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBSWxCO0VBTkQ7SUFJSSxhQUFZLEVBQ2I7RUFHSDtFQUNFLGNBQWE7RUFDYixvQkFBbUIsRUFDcEI7RUFFRDtFQUNFLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsa0JBQWlCLEVBQ2xCO0VBRUQ7RUFDRSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0RBQW1ELEVBS3BEO0VBWkQ7SUFVSSxjQUFhLEVBQ2Q7RUFHSDtFQUNFLDhCQUE2QjtFQUM3QixZQUFXLEVBQ1o7RUFFRDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLGdCQUFlO0VBQ2YsZ0NBQStCO0VBQy9CLGtCQUFpQjtFQUNqQixvQkFBbUIsRUFDcEI7RUFFRDtFQUNFLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLHlCQUFnQjtLQUFoQixzQkFBZ0I7VUFBaEIsaUJBQWdCLEVBU2pCO0VBWkQ7SUFNSSx1QkFBc0IsRUFDdkI7RUFQSDtJQVVJLGNBQWEsRUFDZDtFQUdIO0VBQ0UsdUJBQXNCLEVBQ3ZCO0VBR0Q7RUFDRSx3QkFBdUIsRUFDeEI7RUFFRDtFQUNFLFdBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMThweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbn1cblxuLnRvZG8taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuXG4ucmVtb3ZlLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuLnRvZG8taXRlbS1sZWZ0IHsgLy8gbGF0ZXJcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8taXRlbS1sYWJlbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLnRvZG8taXRlbS1lZGl0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvL292ZXJyaWRlIGRlZmF1bHRzXG4gIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5jb21wbGV0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5leHRyYS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG59XG5cbi8vIENTUyBUcmFuc2l0aW9uc1xuLmZhZGUtZW50ZXItYWN0aXZlLCAuZmFkZS1sZWF2ZS1hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcbn1cblxuLmZhZGUtZW50ZXIsIC5mYWRlLWxlYXZlLXRvIHtcbiAgb3BhY2l0eTogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.anyRemainingModel = true;
        this.filter = 'all';
        this.beforeEditCache = '';
        this.idForTodo = 4;
        this.todoTitle = '';
        this.todos = [
            {
                'id': 1,
                'title': 'Buy groceries',
                'completed': false,
                'editing': false,
            },
            {
                'id': 2,
                'title': 'Do laundry',
                'completed': false,
                'editing': false,
            },
            {
                'id': 3,
                'title': 'Book tickets',
                'completed': false,
                'editing': false,
            },
        ];
    };
    TodoListComponent.prototype.addTodo = function () {
        if (this.todoTitle.trim().length === 0) {
            return;
        }
        this.todos.push({
            id: this.idForTodo,
            title: this.todoTitle,
            completed: false,
            editing: false
        });
        this.todoTitle = '';
        this.idForTodo++;
    };
    TodoListComponent.prototype.editTodo = function (todo) {
        this.beforeEditCache = todo.title;
        todo.editing = true;
    };
    TodoListComponent.prototype.doneEdit = function (todo) {
        if (todo.title.trim().length === 0) {
            todo.title = this.beforeEditCache;
        }
        this.anyRemainingModel = this.anyRemaining();
        todo.editing = false;
    };
    TodoListComponent.prototype.cancelEdit = function (todo) {
        todo.title = this.beforeEditCache;
        todo.editing = false;
    };
    TodoListComponent.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoListComponent.prototype.remaining = function () {
        return this.todos.filter(function (todo) { return !todo.completed; }).length;
    };
    TodoListComponent.prototype.atLeastOneCompleted = function () {
        return this.todos.filter(function (todo) { return todo.completed; }).length > 0;
    };
    TodoListComponent.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
    };
    TodoListComponent.prototype.checkAllTodos = function () {
        this.todos.forEach(function (todo) { return todo.completed = event.target.checked; });
        this.anyRemainingModel = this.anyRemaining();
    };
    TodoListComponent.prototype.anyRemaining = function () {
        return this.remaining() !== 0;
    };
    TodoListComponent.prototype.todosFiltered = function () {
        if (this.filter === 'all') {
            return this.todos;
        }
        else if (this.filter === 'active') {
            return this.todos.filter(function (todo) { return !todo.completed; });
        }
        else if (this.filter === 'completed') {
            return this.todos.filter(function (todo) { return todo.completed; });
        }
        return this.todos;
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/components/todo-list/todo-list.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(30px)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0px)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(30px)' }))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Suraj Anbumani\Documents\angular_projects\todo-angular-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map