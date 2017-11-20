(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["ng2-dnd"] = factory(require("@angular/core"));
	else
		root["ng2-dnd"] = factory(root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTransferEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DragImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DragDropConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dnd_utils__ = __webpack_require__(7);
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

var DataTransferEffect = /** @class */ (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    return DataTransferEffect;
}());

var DragImage = /** @class */ (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["b" /* isString */])(this.imageElement)) {
            // Create real image from string source
            var imgScr = this.imageElement;
            this.imageElement = new HTMLImageElement();
            this.imageElement.src = imgScr;
        }
    }
    return DragImage;
}());

var DragDropConfig = /** @class */ (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
        this.defaultCursor = "pointer";
    }
    return DragDropConfig;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropData; });
/* harmony export (immutable) */ __webpack_exports__["b"] = dragDropServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DragDropService; });
/* harmony export (immutable) */ __webpack_exports__["d"] = dragDropSortableServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DragDropSortableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_utils__ = __webpack_require__(7);
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DragDropData = /** @class */ (function () {
    function DragDropData() {
    }
    return DragDropData;
}());

function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DragDropService);
    return DragDropService;
}());

function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = /** @class */ (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["a" /* isPresent */])(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_utils__["a" /* isPresent */])(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dnd_config__["c" /* DragDropConfig */]])
    ], DragDropSortableService);
    return DragDropSortableService;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AbstractHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_utils__ = __webpack_require__(7);
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbstractComponent = /** @class */ (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        // Assign default cursor unless overridden
        this._defaultCursor = _config.defaultCursor;
        this._elem = elemRef.nativeElement;
        this._elem.style.cursor = this._defaultCursor; // set default cursor on our element
        //
        // DROP events
        //
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.onmousedown = function (event) {
            _this._target = event.target;
        };
        this._elem.ondragstart = function (event) {
            if (_this._dragHandle) {
                if (!_this._dragHandle.contains(_this._target)) {
                    event.preventDefault();
                    return;
                }
            }
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["a" /* isPresent */])(_this.dragImage)) {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["b" /* isString */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["c" /* createImage */])(_this.dragImage));
                    }
                    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["d" /* isFunction */])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["e" /* callFun */])(_this.dragImage));
                    }
                    else {
                        var img = _this.dragImage;
                        event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_utils__["a" /* isPresent */])(_this._config.dragImage)) {
                    var dragImage = _this._config.dragImage;
                    event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = _this._elem.cloneNode(true);
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                if (_this._dragEnabled) {
                    cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            // Restore style of dragged element
            var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
            cursorelem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        set: function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    AbstractComponent.prototype.setDragHandle = function (elem) {
        this._dragHandle = elem;
    };
    /******* Change detection ******/
    AbstractComponent.prototype.detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            _this._cdr.detectChanges();
        }, 250);
    };
    //****** Droppable *******//
    AbstractComponent.prototype._onDragEnter = function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    AbstractComponent.prototype._onDragOver = function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    AbstractComponent.prototype._onDragLeave = function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    AbstractComponent.prototype._onDrop = function (event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // Necessary. Allows us to drop.
            this._preventAndStop(event);
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    AbstractComponent.prototype._isDropAllowed = function (event) {
        if ((this._dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (this.allowDrop) {
                return this.allowDrop(this._dragDropService.dragData);
            }
            // Otherwise, use dropZones if they are set.
            if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                var dragZone = this._dragDropService.allowedDropZones[i];
                if (this.dropZones.indexOf(dragZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    };
    AbstractComponent.prototype._preventAndStop = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    //*********** Draggable **********//
    AbstractComponent.prototype._onDragStart = function (event) {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    AbstractComponent.prototype._onDragEnd = function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    AbstractComponent.prototype._onDragEnterCallback = function (event) { };
    AbstractComponent.prototype._onDragOverCallback = function (event) { };
    AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
    AbstractComponent.prototype._onDropCallback = function (event) { };
    //**** Drag Callbacks ****//
    AbstractComponent.prototype._onDragStartCallback = function (event) { };
    AbstractComponent.prototype._onDragEndCallback = function (event) { };
    AbstractComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__dnd_service__["c" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_1__dnd_config__["c" /* DragDropConfig */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], AbstractComponent);
    return AbstractComponent;
}());

var AbstractHandleComponent = /** @class */ (function () {
    function AbstractHandleComponent(elemRef, _dragDropService, _config, _Component, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._Component = _Component;
        this._cdr = _cdr;
        this._elem = elemRef.nativeElement;
        this._Component.setDragHandle(this._elem);
    }
    return AbstractHandleComponent;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DraggableHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(2);
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DraggableComponent = /** @class */ (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drag actions happened.
         */
        _this.onDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._defaultCursor = _this._elem.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DraggableComponent.prototype, "draggable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DraggableComponent.prototype, "onDragStart", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DraggableComponent.prototype, "onDragEnd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableComponent.prototype, "dragData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragSuccess"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DraggableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DraggableComponent.prototype, "dropzones", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DraggableComponent.prototype, "effectallowed", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DraggableComponent.prototype, "effectcursor", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableComponent.prototype, "dragImage", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DraggableComponent.prototype, "cloneItem", void 0);
    DraggableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-draggable]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], DraggableComponent);
    return DraggableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));

var DraggableHandleComponent = /** @class */ (function (_super) {
    __extends(DraggableHandleComponent, _super);
    function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    DraggableHandleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-draggable-handle]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */], DraggableComponent,
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], DraggableHandleComponent);
    return DraggableHandleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["b" /* AbstractHandleComponent */]));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DroppableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(2);
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DroppableComponent = /** @class */ (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        _this.onDropSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDragEnter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDragOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDragLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    DroppableComponent.prototype._onDragOverCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function (event) {
        var dataTransfer = event.dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DroppableComponent.prototype, "droppable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DroppableComponent.prototype, "onDropSuccess", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DroppableComponent.prototype, "onDragEnter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DroppableComponent.prototype, "onDragOver", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DroppableComponent.prototype, "onDragLeave", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("allowDrop"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], DroppableComponent.prototype, "allowdrop", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DroppableComponent.prototype, "dropzones", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DroppableComponent.prototype, "effectallowed", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DroppableComponent.prototype, "effectcursor", null);
    DroppableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-droppable]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], DroppableComponent);
    return DroppableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SortableHandleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_service__ = __webpack_require__(2);
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SortableContainer = /** @class */ (function (_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableDataService = _sortableDataService;
        _this._sortableData = [];
        _this.dragEnabled = false;
        return _this;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: function () {
            return this._sortableData;
        },
        set: function (sortableData) {
            this._sortableData = sortableData;
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableContainer.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            var item = this._sortableDataService.sortableContainer._sortableData[this._sortableDataService.index];
            // Check does element exist in sortableData of this Container
            if (this._sortableData.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list
                this._sortableDataService.sortableContainer._sortableData.splice(this._sortableDataService.index, 1);
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableData.unshift(item);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableContainer.prototype, "draggable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SortableContainer.prototype, "sortableData", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SortableContainer.prototype, "dropzones", null);
    SortableContainer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-sortable-container]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_3__dnd_service__["e" /* DragDropSortableService */]])
    ], SortableContainer);
    return SortableContainer;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));

var SortableComponent = /** @class */ (function (_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDragStartCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDragOverCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDragEndCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onDropSuccessCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = true;
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    SortableComponent.prototype._onDragEndCallback = function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                // Get item
                var item = this._sortableDataService.sortableContainer.sortableData[this._sortableDataService.index];
                // Remove item from previouse list
                this._sortableDataService.sortableContainer.sortableData.splice(this._sortableDataService.index, 1);
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.sortableData.splice(this.index, 0, item);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
            }
        }
    };
    SortableComponent.prototype._onDropCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('sortableIndex'),
        __metadata("design:type", Number)
    ], SortableComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableComponent.prototype, "draggable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("dropEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableComponent.prototype, "droppable", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SortableComponent.prototype, "dragData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SortableComponent.prototype, "effectallowed", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SortableComponent.prototype, "effectcursor", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragSuccess"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SortableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragStart"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SortableComponent.prototype, "onDragStartCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragOver"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SortableComponent.prototype, "onDragOverCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDragEnd"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SortableComponent.prototype, "onDragEndCallback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("onDropSuccess"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SortableComponent.prototype, "onDropSuccessCallback", void 0);
    SortableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-sortable]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */],
            SortableContainer,
            __WEBPACK_IMPORTED_MODULE_3__dnd_service__["e" /* DragDropSortableService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SortableComponent);
    return SortableComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["a" /* AbstractComponent */]));

var SortableHandleComponent = /** @class */ (function (_super) {
    __extends(SortableHandleComponent, _super);
    function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    SortableHandleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[dnd-sortable-handle]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__dnd_service__["c" /* DragDropService */], __WEBPACK_IMPORTED_MODULE_2__dnd_config__["c" /* DragDropConfig */], SortableComponent,
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SortableHandleComponent);
    return SortableHandleComponent;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_component__["b" /* AbstractHandleComponent */]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isString;
/* harmony export (immutable) */ __webpack_exports__["a"] = isPresent;
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["c"] = createImage;
/* harmony export (immutable) */ __webpack_exports__["e"] = callFun;
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 */
function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 */
function callFun(fun) {
    return fun();
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndModule", function() { return DndModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_abstract_component__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_abstract_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AbstractHandleComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_abstract_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataTransferEffect", function() { return __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragImage", function() { return __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDropConfig", function() { return __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDropData", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dragDropServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDropService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dragDropSortableServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DragDropSortableService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DraggableComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DraggableHandleComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DroppableComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SortableHandleComponent", function() { return __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["c"]; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var providers = [
    __WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["c" /* DragDropConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["c" /* DragDropService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["b" /* dragDropServiceFactory */] },
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["e" /* DragDropSortableService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_dnd_service__["d" /* dragDropSortableServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_dnd_config__["c" /* DragDropConfig */]] }
];
var DndModule = /** @class */ (function () {
    function DndModule() {
    }
    DndModule_1 = DndModule;
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule_1,
            providers: providers
        };
    };
    DndModule = DndModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["b" /* DraggableHandleComponent */], __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b" /* SortableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["c" /* SortableHandleComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["a" /* DraggableComponent */], __WEBPACK_IMPORTED_MODULE_3__src_draggable_component__["b" /* DraggableHandleComponent */], __WEBPACK_IMPORTED_MODULE_4__src_droppable_component__["a" /* DroppableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["a" /* SortableContainer */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["b" /* SortableComponent */], __WEBPACK_IMPORTED_MODULE_5__src_sortable_component__["c" /* SortableHandleComponent */]],
        })
    ], DndModule);
    return DndModule;
    var DndModule_1;
}());



/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNjdlZDVmMjU1ZDZiYjJkNDgzMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RuZC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RuZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hYnN0cmFjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYWdnYWJsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Ryb3BwYWJsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvcnRhYmxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG5kLnV0aWxzLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7Ozs7QUNB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RyxDQUFDO0FBT0Y7SUFBQTtJQU9BLENBQUM7a0JBUFksU0FBUztJQUNiLGlCQUFPLEdBQWQ7UUFDTSxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUUsU0FBUztTQUN2QixDQUFDO0lBQ04sQ0FBQztJQU5RLFNBQVM7UUFMckIsOEVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLG9GQUFrQixFQUFFLDBGQUF3QixFQUFFLG9GQUFrQixFQUFFLGtGQUFpQixFQUFFLGtGQUFpQixFQUFFLHdGQUF1QixDQUFDO1lBQy9JLE9BQU8sRUFBRyxDQUFDLG9GQUFrQixFQUFFLDBGQUF3QixFQUFFLG9GQUFrQixFQUFFLGtGQUFpQixFQUFFLGtGQUFpQixFQUFFLHdGQUF1QixDQUFDO1NBRTVJLENBQUM7T0FDVyxTQUFTLENBT3JCO0lBQUQsZ0JBQUM7O0NBQUE7QUFQcUIiLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nMi1kbmRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZzItZG5kXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNjdlZDVmMjU1ZDZiYjJkNDgzMyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICcuL2RuZC51dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRhVHJhbnNmZXJFZmZlY3Qge1xuXG4gICAgc3RhdGljIENPUFkgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdjb3B5Jyk7XG4gICAgc3RhdGljIExJTksgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdsaW5rJyk7XG4gICAgc3RhdGljIE1PVkUgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdtb3ZlJyk7XG4gICAgc3RhdGljIE5PTkUgPSBuZXcgRGF0YVRyYW5zZmVyRWZmZWN0KCdub25lJyk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYWdJbWFnZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpbWFnZUVsZW1lbnQ6IGFueSxcbiAgICAgICAgcHVibGljIHhfb2Zmc2V0OiBudW1iZXIgPSAwLFxuICAgICAgICBwdWJsaWMgeV9vZmZzZXQ6IG51bWJlciA9IDApIHtcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh0aGlzLmltYWdlRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgcmVhbCBpbWFnZSBmcm9tIHN0cmluZyBzb3VyY2VcbiAgICAgICAgICAgICAgICBsZXQgaW1nU2NyOiBzdHJpbmcgPSA8c3RyaW5nPnRoaXMuaW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VFbGVtZW50ID0gbmV3IEhUTUxJbWFnZUVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAoPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5pbWFnZUVsZW1lbnQpLnNyYyA9IGltZ1NjcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BDb25maWcge1xuICAgIHB1YmxpYyBvbkRyYWdTdGFydENsYXNzOiBzdHJpbmcgPSBcImRuZC1kcmFnLXN0YXJ0XCI7XG4gICAgcHVibGljIG9uRHJhZ0VudGVyQ2xhc3M6IHN0cmluZyA9IFwiZG5kLWRyYWctZW50ZXJcIjtcbiAgICBwdWJsaWMgb25EcmFnT3ZlckNsYXNzOiBzdHJpbmcgPSBcImRuZC1kcmFnLW92ZXJcIjtcbiAgICBwdWJsaWMgb25Tb3J0YWJsZURyYWdDbGFzczogc3RyaW5nID0gXCJkbmQtc29ydGFibGUtZHJhZ1wiO1xuXG4gICAgcHVibGljIGRyYWdFZmZlY3Q6IERhdGFUcmFuc2ZlckVmZmVjdCA9IERhdGFUcmFuc2ZlckVmZmVjdC5NT1ZFO1xuICAgIHB1YmxpYyBkcm9wRWZmZWN0OiBEYXRhVHJhbnNmZXJFZmZlY3QgPSBEYXRhVHJhbnNmZXJFZmZlY3QuTU9WRTtcbiAgICBwdWJsaWMgZHJhZ0N1cnNvcjogc3RyaW5nID0gXCJtb3ZlXCI7XG4gICAgcHVibGljIGRyYWdJbWFnZTogRHJhZ0ltYWdlO1xuICAgIHB1YmxpYyBkZWZhdWx0Q3Vyc29yOiBzdHJpbmcgPSBcInBvaW50ZXJcIjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZG5kLmNvbmZpZy50cyIsIi8vIENvcHlyaWdodCAoQykgMjAxNiBTZXJnZXkgQWtvcGtva2h5YW50c1xuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi1kbmRcblxuaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuL2RuZC5jb25maWcnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJy4vZG5kLnV0aWxzJztcbmltcG9ydCB7U29ydGFibGVDb250YWluZXJ9IGZyb20gJy4vc29ydGFibGUuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIERyYWdEcm9wRGF0YSB7XG4gICAgZHJhZ0RhdGE6IGFueTtcbiAgICBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSgpOiBEcmFnRHJvcFNlcnZpY2UgIHtcbiAgICByZXR1cm4gbmV3IERyYWdEcm9wU2VydmljZSgpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BTZXJ2aWNlIHtcbiAgICBhbGxvd2VkRHJvcFpvbmVzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgb25EcmFnU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPjtcbiAgICBkcmFnRGF0YTogYW55O1xuICAgIGlzRHJhZ2dlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeShjb25maWc6IERyYWdEcm9wQ29uZmlnKTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UgIHtcbiAgICByZXR1cm4gbmV3IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKGNvbmZpZyk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSB7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBzb3J0YWJsZUNvbnRhaW5lcjogU29ydGFibGVDb250YWluZXI7XG4gICAgaXNEcmFnZ2VkOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgcHVibGljIGdldCBlbGVtKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOkRyYWdEcm9wQ29uZmlnKSB7fVxuXG4gICAgbWFya1NvcnRhYmxlKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5fZWxlbSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25Tb3J0YWJsZURyYWdDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJlc2VudChlbGVtKSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW07XG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5fY29uZmlnLm9uU29ydGFibGVEcmFnQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RuZC5zZXJ2aWNlLnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEcmFnRHJvcENvbmZpZywgRHJhZ0ltYWdlIH0gZnJvbSAnLi9kbmQuY29uZmlnJztcbmltcG9ydCB7IERyYWdEcm9wU2VydmljZSB9IGZyb20gJy4vZG5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzRnVuY3Rpb24sIGlzUHJlc2VudCwgY3JlYXRlSW1hZ2UsIGNhbGxGdW4gfSBmcm9tICcuL2RuZC51dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbXBvbmVudCB7XG4gICAgX2VsZW06IEhUTUxFbGVtZW50O1xuICAgIF9kcmFnSGFuZGxlOiBIVE1MRWxlbWVudDtcbiAgICBfZHJhZ0hlbHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgX2RlZmF1bHRDdXJzb3I6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIExhc3QgZWxlbWVudCB0aGF0IHdhcyBtb3VzZWRvd24nZWRcbiAgICAgKi9cbiAgICBfdGFyZ2V0OiBFdmVudFRhcmdldDtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIG9iamVjdCBpcyBkcmFnZ2FibGUuIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9kcmFnRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNldCBkcmFnRW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2RyYWdFbmFibGVkID0gISFlbmFibGVkO1xuICAgICAgICB0aGlzLl9lbGVtLmRyYWdnYWJsZSA9IHRoaXMuX2RyYWdFbmFibGVkO1xuICAgIH1cbiAgICBnZXQgZHJhZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcmFnRW5hYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZHJvcCBvbiB0aGlzIGVsZW1lbnRcbiAgICAgKi9cbiAgICBkcm9wRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIERyYWcgZWZmZWN0XG4gICAgICovXG4gICAgZWZmZWN0QWxsb3dlZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIERyYWcgY3Vyc29yXG4gICAgICovXG4gICAgZWZmZWN0Q3Vyc29yOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBSZXN0cmljdCBwbGFjZXMgd2hlcmUgYSBkcmFnZ2FibGUgZWxlbWVudCBjYW4gYmUgZHJvcHBlZC4gRWl0aGVyIG9uZSBvZlxuICAgICAqIHRoZXNlIHR3byBtZWNoYW5pc21zIGNhbiBiZSB1c2VkOlxuICAgICAqXG4gICAgICogLSBkcm9wWm9uZXM6IGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBwZXJtaXRzIHRvIHNwZWNpZnkgdGhlIGRyb3Agem9uZXNcbiAgICAgKiAgIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbXBvbmVudC4gQnkgZGVmYXVsdCwgaWYgdGhlIGRyb3Atem9uZXMgYXR0cmlidXRlXG4gICAgICogICBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgZHJvcHBhYmxlIGNvbXBvbmVudCBhY2NlcHRzIGRyb3Agb3BlcmF0aW9ucyBieVxuICAgICAqICAgYWxsIHRoZSBkcmFnZ2FibGUgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBzcGVjaWZ5IHRoZSBhbGxvd2VkLWRyb3Atem9uZXNcbiAgICAgKlxuICAgICAqIC0gYWxsb3dEcm9wOiBhIGJvb2xlYW4gZnVuY3Rpb24gZm9yIGRyb3BwYWJsZSBjb21wb25lbnRzLCB0aGF0IGlzIGNoZWNrZWRcbiAgICAgKiAgIHdoZW4gYW4gaXRlbSBpcyBkcmFnZ2VkLiBUaGUgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSBkcmFnRGF0YSBvZiB0aGlzXG4gICAgICogICBpdGVtLlxuICAgICAqICAgLSBpZiBpdCByZXR1cm5zIHRydWUsIHRoZSBpdGVtIGNhbiBiZSBkcm9wcGVkIGluIHRoaXMgY29tcG9uZW50XG4gICAgICogICAtIGlmIGl0IHJldHVybnMgZmFsc2UsIHRoZSBpdGVtIGNhbm5vdCBiZSBkcm9wcGVkIGhlcmVcbiAgICAgKi9cbiAgICBhbGxvd0Ryb3A6IChkcm9wRGF0YTogYW55KSA9PiBib29sZWFuO1xuICAgIGRyb3Bab25lczogc3RyaW5nW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEhlcmUgaXMgdGhlIHByb3BlcnR5IGRyYWdJbWFnZSB5b3UgY2FuIHVzZTpcbiAgICAgKiAtIFRoZSBzdHJpbmcgdmFsdWUgYXMgdXJsIHRvIHRoZSBpbWFnZVxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCIvaW1hZ2VzL3NpbXBsZXIucG5nXCI+XG4gICAgICogLi4uXG4gICAgICogLSBUaGUgRHJhZ0ltYWdlIHZhbHVlIHdpdGggSW1hZ2UgYW5kIG9wdGlvbmFsIG9mZnNldCBieSB4IGFuZCB5OlxuICAgICAqICAgbGV0IG15RHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSBuZXcgRHJhZ0ltYWdlKFwiL2ltYWdlcy9zaW1wbGVyMS5wbmdcIiwgMCwgMCk7XG4gICAgICogLi4uXG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cIm15RHJhZ0ltYWdlXCI+XG4gICAgICogLi4uXG4gICAgICogLSBUaGUgY3VzdG9tIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgdmFsdWUgb2YgZHJhZ0ltYWdlIHByb2dyYW1tYXRpY2FsbHk6XG4gICAgICogICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gICAgICogICAgICAgIGRuZC1kcmFnZ2FibGUgW2RyYWdFbmFibGVkXT1cInRydWVcIlxuICAgICAqICAgICAgICBbZHJhZ0ltYWdlXT1cImdldERyYWdJbWFnZShzb21lRGF0YSlcIj5cbiAgICAgKiAuLi5cbiAgICAgKiAgIGdldERyYWdJbWFnZSh2YWx1ZTphbnkpOiBzdHJpbmcge1xuICAgICAqICAgICByZXR1cm4gdmFsdWUgPyBcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIgOiBcIi9pbWFnZXMvc2ltcGxlcjIucG5nXCJcbiAgICAgKiAgIH1cbiAgICAgKi9cbiAgICBkcmFnSW1hZ2U6IHN0cmluZyB8IERyYWdJbWFnZSB8IEZ1bmN0aW9uO1xuXG4gICAgY2xvbmVJdGVtOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgX2RyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBwdWJsaWMgX2NvbmZpZzogRHJhZ0Ryb3BDb25maWcsXG4gICAgICAgIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgICAgICAvLyBBc3NpZ24gZGVmYXVsdCBjdXJzb3IgdW5sZXNzIG92ZXJyaWRkZW5cbiAgICAgICAgdGhpcy5fZGVmYXVsdEN1cnNvciA9IF9jb25maWcuZGVmYXVsdEN1cnNvcjtcbiAgICAgICAgdGhpcy5fZWxlbSA9IGVsZW1SZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5fZWxlbS5zdHlsZS5jdXJzb3IgPSB0aGlzLl9kZWZhdWx0Q3Vyc29yOyAgLy8gc2V0IGRlZmF1bHQgY3Vyc29yIG9uIG91ciBlbGVtZW50XG4gICAgICAgIC8vXG4gICAgICAgIC8vIERST1AgZXZlbnRzXG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnZW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdFbnRlcihldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnb3ZlciA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IHRoaXMuX2NvbmZpZy5kcm9wRWZmZWN0Lm5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdsZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0xlYXZlKGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbkRyb3AoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICAvL1xuICAgICAgICAvLyBEcmFnIGV2ZW50c1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLl9lbGVtLm9ubW91c2Vkb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2VsZW0ub25kcmFnc3RhcnQgPSAoZXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdIYW5kbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2RyYWdIYW5kbGUuY29udGFpbnMoPEVsZW1lbnQ+dGhpcy5fdGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdTdGFydChldmVudCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnJyk7XG4gICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGRyYWcgZWZmZWN0XG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSB0aGlzLmVmZmVjdEFsbG93ZWQgfHwgdGhpcy5fY29uZmlnLmRyYWdFZmZlY3QubmFtZTtcbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZHJhZyBpbWFnZVxuICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5kcmFnSW1hZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyh0aGlzLmRyYWdJbWFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICg8YW55PmV2ZW50LmRhdGFUcmFuc2Zlcikuc2V0RHJhZ0ltYWdlKGNyZWF0ZUltYWdlKDxzdHJpbmc+dGhpcy5kcmFnSW1hZ2UpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuZHJhZ0ltYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgKDxhbnk+ZXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREcmFnSW1hZ2UoY2FsbEZ1big8RnVuY3Rpb24+dGhpcy5kcmFnSW1hZ2UpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWc6IERyYWdJbWFnZSA9IDxEcmFnSW1hZ2U+dGhpcy5kcmFnSW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShpbWcuaW1hZ2VFbGVtZW50LCBpbWcueF9vZmZzZXQsIGltZy55X29mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJlc2VudCh0aGlzLl9jb25maWcuZHJhZ0ltYWdlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZHJhZ0ltYWdlOiBEcmFnSW1hZ2UgPSB0aGlzLl9jb25maWcuZHJhZ0ltYWdlO1xuICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZShkcmFnSW1hZ2UuaW1hZ2VFbGVtZW50LCBkcmFnSW1hZ2UueF9vZmZzZXQsIGRyYWdJbWFnZS55X29mZnNldCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNsb25lSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyID0gPEhUTUxFbGVtZW50PnRoaXMuX2VsZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLmNsYXNzTGlzdC5hZGQoJ2RuZC1kcmFnLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0hlbHBlci5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kcmFnSGVscGVyLnN0eWxlLmxlZnQgPSBcIi0xMDAwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2RyYWdIZWxwZXIpO1xuICAgICAgICAgICAgICAgICAgICAoPGFueT5ldmVudC5kYXRhVHJhbnNmZXIpLnNldERyYWdJbWFnZSh0aGlzLl9kcmFnSGVscGVyLCBldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgZHJhZyBjdXJzb3JcbiAgICAgICAgICAgICAgICBsZXQgY3Vyc29yZWxlbSA9ICh0aGlzLl9kcmFnSGFuZGxlKSA/IHRoaXMuX2RyYWdIYW5kbGUgOiB0aGlzLl9lbGVtO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5lZmZlY3RDdXJzb3IgPyB0aGlzLmVmZmVjdEN1cnNvciA6IHRoaXMuX2NvbmZpZy5kcmFnQ3Vyc29yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fZWxlbS5vbmRyYWdlbmQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZWxlbS5wYXJlbnRFbGVtZW50ICYmIHRoaXMuX2RyYWdIZWxwZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fZHJhZ0hlbHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25kcmFnZW5kJywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0VuZChldmVudCk7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIHN0eWxlIG9mIGRyYWdnZWQgZWxlbWVudFxuICAgICAgICAgICAgbGV0IGN1cnNvcmVsZW0gPSAodGhpcy5fZHJhZ0hhbmRsZSkgPyB0aGlzLl9kcmFnSGFuZGxlIDogdGhpcy5fZWxlbTtcbiAgICAgICAgICAgIGN1cnNvcmVsZW0uc3R5bGUuY3Vyc29yID0gdGhpcy5fZGVmYXVsdEN1cnNvcjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RHJhZ0hhbmRsZShlbGVtOiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9kcmFnSGFuZGxlID0gZWxlbTtcbiAgICB9XG4gICAgLyoqKioqKiogQ2hhbmdlIGRldGVjdGlvbiAqKioqKiovXG5cbiAgICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgICAgICAvLyBQcm9ncmFtbWF0aWNhbGx5IHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGZpeCBpc3N1ZSBpbiBTYWZhcmlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9LCAyNTApO1xuICAgIH1cblxuICAgIC8vKioqKioqIERyb3BwYWJsZSAqKioqKioqLy9cbiAgICBwcml2YXRlIF9vbkRyYWdFbnRlcihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJhZ2VudGVyLl9pc0Ryb3BBbGxvd2VkJywgdGhpcy5faXNEcm9wQWxsb3dlZCk7XG4gICAgICAgIGlmICh0aGlzLl9pc0Ryb3BBbGxvd2VkKGV2ZW50KSkge1xuICAgICAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25EcmFnT3ZlcihldmVudDogRXZlbnQpIHtcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coJ29uZHJhZ292ZXIuX2lzRHJvcEFsbG93ZWQnLCB0aGlzLl9pc0Ryb3BBbGxvd2VkKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzRHJvcEFsbG93ZWQoZXZlbnQpKSB7XG4gICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBpcyBvdmVyIHRoZSBzYW1lIHNvdXJjZSBlbGVtZW50IC0gZG8gbm90aGluZ1xuICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gTmVjZXNzYXJ5LiBBbGxvd3MgdXMgdG8gZHJvcC5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25EcmFnTGVhdmUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdsZWF2ZS5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLl9vbkRyYWdMZWF2ZUNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uRHJvcChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uZHJvcC5faXNEcm9wQWxsb3dlZCcsIHRoaXMuX2lzRHJvcEFsbG93ZWQpO1xuICAgICAgICBpZiAodGhpcy5faXNEcm9wQWxsb3dlZChldmVudCkpIHtcbiAgICAgICAgICAgIC8vIE5lY2Vzc2FyeS4gQWxsb3dzIHVzIHRvIGRyb3AuXG4gICAgICAgICAgICB0aGlzLl9wcmV2ZW50QW5kU3RvcChldmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuX29uRHJvcENhbGxiYWNrKGV2ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Ryb3BBbGxvd2VkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkIHx8IChldmVudC5kYXRhVHJhbnNmZXIgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKSkgJiYgdGhpcy5kcm9wRW5hYmxlZCkge1xuICAgICAgICAgICAgLy8gRmlyc3QsIGlmIGBhbGxvd0Ryb3BgIGlzIHNldCwgY2FsbCBpdCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGVcbiAgICAgICAgICAgIC8vIGRyYWdnZWQgZWxlbWVudCBjYW4gYmUgZHJvcHBlZCBoZXJlLlxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dEcm9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dEcm9wKHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgdXNlIGRyb3Bab25lcyBpZiB0aGV5IGFyZSBzZXQuXG4gICAgICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMubGVuZ3RoID09PSAwICYmIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRyYWdab25lOiBzdHJpbmcgPSB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuYWxsb3dlZERyb3Bab25lc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kcm9wWm9uZXMuaW5kZXhPZihkcmFnWm9uZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJldmVudEFuZFN0b3AoZXZlbnQ6IEV2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8qKioqKioqKioqKiBEcmFnZ2FibGUgKioqKioqKioqKi8vXG5cbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnb25kcmFnc3RhcnQuZHJhZ0VuYWJsZWQnLCB0aGlzLl9kcmFnRW5hYmxlZCk7XG4gICAgICAgIGlmICh0aGlzLl9kcmFnRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMgPSB0aGlzLmRyb3Bab25lcztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdzdGFydC5hbGxvd2VkRHJvcFpvbmVzJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmFsbG93ZWREcm9wWm9uZXMpO1xuICAgICAgICAgICAgdGhpcy5fb25EcmFnU3RhcnRDYWxsYmFjayhldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzID0gW107XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmRyYWdlbmQuYWxsb3dlZERyb3Bab25lcycsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5hbGxvd2VkRHJvcFpvbmVzKTtcbiAgICAgICAgdGhpcy5fb25EcmFnRW5kQ2FsbGJhY2soZXZlbnQpO1xuICAgIH1cblxuICAgIC8vKioqKiBEcm9wIENhbGxiYWNrcyAqKioqLy9cbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxuICAgIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7IH1cbiAgICBfb25EcmFnTGVhdmVDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxuICAgIF9vbkRyb3BDYWxsYmFjayhldmVudDogRXZlbnQpIHsgfVxuXG4gICAgLy8qKioqIERyYWcgQ2FsbGJhY2tzICoqKiovL1xuICAgIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XG4gICAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBFdmVudCkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudCB7XG4gICAgX2VsZW06IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBfZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIHB1YmxpYyBfY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcbiAgICAgICAgcHJpdmF0ZSBfQ29tcG9uZW50OiBBYnN0cmFjdENvbXBvbmVudCwgcHJpdmF0ZSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLl9lbGVtID0gZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9Db21wb25lbnQuc2V0RHJhZ0hhbmRsZSh0aGlzLl9lbGVtKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvYWJzdHJhY3QuY29tcG9uZW50LnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Fic3RyYWN0Q29tcG9uZW50LCBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudH0gZnJvbSAnLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtEcmFnRHJvcENvbmZpZywgRHJhZ0ltYWdlfSBmcm9tICcuL2RuZC5jb25maWcnO1xuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wRGF0YX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtZHJhZ2dhYmxlXScgfSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoXCJkcmFnRW5hYmxlZFwiKSBzZXQgZHJhZ2dhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9ucyBoYXBwZW5lZC5cbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgb25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XG4gICAgQE91dHB1dCgpIG9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHRoYXQgaGFzIHRvIGJlIGRyYWdnZWQuIEl0IGNhbiBiZSBhbnkgSlMgb2JqZWN0XG4gICAgICovXG4gICAgQElucHV0KCkgZHJhZ0RhdGE6IGFueTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBkcmFnIGFjdGlvbiBlbmRzIHdpdGggYSB2YWxpZCBkcm9wIGFjdGlvbi5cbiAgICAgKiBJdCBpcyBhY3RpdmF0ZWQgYWZ0ZXIgdGhlIG9uLWRyb3Atc3VjY2VzcyBjYWxsYmFja1xuICAgICAqL1xuICAgIEBPdXRwdXQoXCJvbkRyYWdTdWNjZXNzXCIpIG9uRHJhZ1N1Y2Nlc3NDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIEBJbnB1dChcImRyb3Bab25lc1wiKSBzZXQgZHJvcHpvbmVzKHZhbHVlOkFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFnIGFsbG93ZWQgZWZmZWN0XG4gICAgICovXG4gICAgQElucHV0KFwiZWZmZWN0QWxsb3dlZFwiKSBzZXQgZWZmZWN0YWxsb3dlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0QWxsb3dlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYWcgZWZmZWN0IGN1cnNvclxuICAgICAqL1xuICAgIEBJbnB1dChcImVmZmVjdEN1cnNvclwiKSBzZXQgZWZmZWN0Y3Vyc29yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RDdXJzb3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZXJlIGlzIHRoZSBwcm9wZXJ0eSBkcmFnSW1hZ2UgeW91IGNhbiB1c2U6XG4gICAgICogLSBUaGUgc3RyaW5nIHZhbHVlIGFzIHVybCB0byB0aGUgaW1hZ2VcbiAgICAgKiAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCJcbiAgICAgKiAgICAgICAgZG5kLWRyYWdnYWJsZSBbZHJhZ0VuYWJsZWRdPVwidHJ1ZVwiXG4gICAgICogICAgICAgIFtkcmFnSW1hZ2VdPVwiL2ltYWdlcy9zaW1wbGVyLnBuZ1wiPlxuICAgICAqIC4uLlxuICAgICAqIC0gVGhlIERyYWdJbWFnZSB2YWx1ZSB3aXRoIEltYWdlIGFuZCBvZmZzZXQgYnkgeCBhbmQgeTpcbiAgICAgKiAgIGxldCBteURyYWdJbWFnZTogRHJhZ0ltYWdlID0gbmV3IERyYWdJbWFnZShcIi9pbWFnZXMvc2ltcGxlcjEucG5nXCIsIDAsIDApO1xuICAgICAqIC4uLlxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJteURyYWdJbWFnZVwiPlxuICAgICAqIC4uLlxuICAgICAqIC0gVGhlIGN1c3RvbSBmdW5jdGlvbiB0byByZXR1cm4gdGhlIHZhbHVlIG9mIGRyYWdJbWFnZSBwcm9ncmFtbWF0aWNhbGx5OlxuICAgICAqICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICAgICAqICAgICAgICBkbmQtZHJhZ2dhYmxlIFtkcmFnRW5hYmxlZF09XCJ0cnVlXCJcbiAgICAgKiAgICAgICAgW2RyYWdJbWFnZV09XCJnZXREcmFnSW1hZ2Uoc29tZURhdGEpXCI+XG4gICAgICogLi4uXG4gICAgICogICBnZXREcmFnSW1hZ2UodmFsdWU6YW55KTogc3RyaW5nIHtcbiAgICAgKiAgICAgcmV0dXJuIHZhbHVlID8gXCIvaW1hZ2VzL3NpbXBsZXIxLnBuZ1wiIDogXCIvaW1hZ2VzL3NpbXBsZXIyLnBuZ1wiXG4gICAgICogICB9XG4gICAgICovXG4gICAgQElucHV0KCkgZHJhZ0ltYWdlOiBzdHJpbmcgfCBEcmFnSW1hZ2UgfCBGdW5jdGlvbjtcblxuICAgIFxuICAgIEBJbnB1dCgpIGNsb25lSXRlbTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIGRyYWdEcm9wU2VydmljZTogRHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWc6RHJhZ0Ryb3BDb25maWcsXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0Q3Vyc29yID0gdGhpcy5fZWxlbS5zdHlsZS5jdXJzb3I7XG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEgPSB0aGlzLmRyYWdEYXRhO1xuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrID0gdGhpcy5vbkRyYWdTdWNjZXNzQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgfVxuXG4gICAgX29uRHJhZ0VuZENhbGxiYWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jb25maWcub25EcmFnU3RhcnRDbGFzcyk7XG4gICAgICAgIC8vXG4gICAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoe2RyYWdEYXRhOiB0aGlzLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgIH1cbn1cblxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZG5kLWRyYWdnYWJsZS1oYW5kbGVdJyB9KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0SGFuZGxlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLCBfQ29tcG9uZW50OiBEcmFnZ2FibGVDb21wb25lbnQsXG4gICAgICAgIGNkcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBfQ29tcG9uZW50LCBjZHIpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kcmFnZ2FibGUuY29tcG9uZW50LnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Fic3RyYWN0Q29tcG9uZW50fSBmcm9tICcuL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0RyYWdEcm9wQ29uZmlnfSBmcm9tICcuL2RuZC5jb25maWcnO1xuaW1wb3J0IHtEcmFnRHJvcFNlcnZpY2UsIERyYWdEcm9wRGF0YX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtZHJvcHBhYmxlXScgfSlcbmV4cG9ydCBjbGFzcyBEcm9wcGFibGVDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoXCJkcm9wRW5hYmxlZFwiKSBzZXQgZHJvcHBhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyb3AgYWN0aW9uIGNvbXBsZXRlcyBjb3JyZWN0bHkuXG4gICAgICogSXQgaXMgYWN0aXZhdGVkIGJlZm9yZSB0aGUgb24tZHJhZy1zdWNjZXNzIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBvbkRyb3BTdWNjZXNzOiBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ0Ryb3BEYXRhPigpO1xuICAgIEBPdXRwdXQoKSBvbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcbiAgICBAT3V0cHV0KCkgb25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdEcm9wRGF0YT4oKTtcbiAgICBAT3V0cHV0KCkgb25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRHJvcERhdGE+KCk7XG5cbiAgICBASW5wdXQoXCJhbGxvd0Ryb3BcIikgc2V0IGFsbG93ZHJvcCh2YWx1ZTogKGRyb3BEYXRhOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hbGxvd0Ryb3AgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJkcm9wWm9uZXNcIikgc2V0IGRyb3B6b25lcyh2YWx1ZTpBcnJheTxzdHJpbmc+KSB7XG4gICAgICAgIHRoaXMuZHJvcFpvbmVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxuICAgICAqL1xuICAgIEBJbnB1dChcImVmZmVjdEFsbG93ZWRcIikgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcbiAgICAgKi9cbiAgICBASW5wdXQoXCJlZmZlY3RDdXJzb3JcIikgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZyxcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XG5cbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgX29uRHJhZ0VudGVyQ2FsbGJhY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jb25maWcub25EcmFnRW50ZXJDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLm9uRHJhZ0VudGVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25EcmFnT3ZlckNhbGxiYWNrIChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmlzRHJhZ2dlZCkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5vbkRyYWdPdmVyLmVtaXQoe2RyYWdEYXRhOiB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEsIG1vdXNlRXZlbnQ6IGV2ZW50fSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX29uRHJhZ0xlYXZlQ2FsbGJhY2sgKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ092ZXJDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY29uZmlnLm9uRHJhZ0VudGVyQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5vbkRyYWdMZWF2ZS5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIF9vbkRyb3BDYWxsYmFjayAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgbGV0IGRhdGFUcmFuc2ZlciA9IChldmVudCBhcyBhbnkpLmRhdGFUcmFuc2ZlcjtcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdEcm9wU2VydmljZS5pc0RyYWdnZWQgfHwgKGRhdGFUcmFuc2ZlciAmJiBkYXRhVHJhbnNmZXIuZmlsZXMpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRHJvcFN1Y2Nlc3MuZW1pdCh7ZHJhZ0RhdGE6IHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSwgbW91c2VFdmVudDogZXZlbnR9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5lbWl0KHtkcmFnRGF0YTogdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhLCBtb3VzZUV2ZW50OiBldmVudH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdPdmVyQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NvbmZpZy5vbkRyYWdFbnRlckNsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kcm9wcGFibGUuY29tcG9uZW50LnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLWRuZFxuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Fic3RyYWN0Q29tcG9uZW50LCBBYnN0cmFjdEhhbmRsZUNvbXBvbmVudH0gZnJvbSAnLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9kbmQuY29uZmlnJztcbmltcG9ydCB7RHJhZ0Ryb3BTZXJ2aWNlLCBEcmFnRHJvcFNvcnRhYmxlU2VydmljZX0gZnJvbSAnLi9kbmQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtY29udGFpbmVyXScgfSlcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbnRhaW5lciBleHRlbmRzIEFic3RyYWN0Q29tcG9uZW50IHtcblxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpIHNldCBkcmFnZ2FibGUodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zb3J0YWJsZURhdGE6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIEBJbnB1dCgpIHNldCBzb3J0YWJsZURhdGEoc29ydGFibGVEYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YSA9IHNvcnRhYmxlRGF0YTtcbiAgICAgICAgLy9cbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdGhpcy5fc29ydGFibGVEYXRhO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbGxlY3Rpb24gaXMgY2hhbmdlZCwgZHJvcCBlbmFibGVkOiBcIiArIHRoaXMuZHJvcEVuYWJsZWQpO1xuICAgIH1cbiAgICBnZXQgc29ydGFibGVEYXRhKCk6IEFycmF5PGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc29ydGFibGVEYXRhO1xuICAgIH1cblxuICAgIEBJbnB1dChcImRyb3Bab25lc1wiKSBzZXQgZHJvcHpvbmVzKHZhbHVlOkFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5kcm9wWm9uZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLCBjZHI6Q2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgX3NvcnRhYmxlRGF0YVNlcnZpY2U6IERyYWdEcm9wU29ydGFibGVTZXJ2aWNlKSB7XG5cbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIGNkcik7XG4gICAgICAgIHRoaXMuZHJhZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgICBsZXQgaXRlbTphbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLl9zb3J0YWJsZURhdGFbdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleF07XG4gICAgICAgICAgICAvLyBDaGVjayBkb2VzIGVsZW1lbnQgZXhpc3QgaW4gc29ydGFibGVEYXRhIG9mIHRoaXMgQ29udGFpbmVyXG4gICAgICAgICAgICBpZiAodGhpcy5fc29ydGFibGVEYXRhLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gTGV0J3MgYWRkIGl0XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbnRhaW5lci5fb25EcmFnRW50ZXJDYWxsYmFjay4gZHJhZyBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleC50b1N0cmluZygpICsgJ10gb3ZlciBwYXJlbnQgbm9kZScpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gcHJldmlvdXNlIGxpc3RcbiAgICAgICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLl9zb3J0YWJsZURhdGEuc3BsaWNlKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLl9zb3J0YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBuZXcgbGlzdFxuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YS51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVmcmVzaCBjaGFuZ2VzIGluIHByb3BlcnRpZXMgb2YgY29udGFpbmVyIGNvbXBvbmVudFxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtc29ydGFibGVdJyB9KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RDb21wb25lbnQge1xuXG4gICAgQElucHV0KCdzb3J0YWJsZUluZGV4JykgaW5kZXg6IG51bWJlcjtcblxuICAgIEBJbnB1dChcImRyYWdFbmFibGVkXCIpIHNldCBkcmFnZ2FibGUodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLmRyYWdFbmFibGVkID0gISF2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJkcm9wRW5hYmxlZFwiKSBzZXQgZHJvcHBhYmxlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcm9wRW5hYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgdGhhdCBoYXMgdG8gYmUgZHJhZ2dlZC4gSXQgY2FuIGJlIGFueSBKUyBvYmplY3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkcmFnRGF0YTogYW55O1xuXG4gICAgLyoqXG4gICAgICogRHJhZyBhbGxvd2VkIGVmZmVjdFxuICAgICAqL1xuICAgIEBJbnB1dChcImVmZmVjdEFsbG93ZWRcIikgc2V0IGVmZmVjdGFsbG93ZWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVmZmVjdEFsbG93ZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFnIGVmZmVjdCBjdXJzb3JcbiAgICAgKi9cbiAgICBASW5wdXQoXCJlZmZlY3RDdXJzb3JcIikgc2V0IGVmZmVjdGN1cnNvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0Q3Vyc29yID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGRyYWcgYWN0aW9uIGVuZHMgd2l0aCBhIHZhbGlkIGRyb3AgYWN0aW9uLlxuICAgICAqIEl0IGlzIGFjdGl2YXRlZCBhZnRlciB0aGUgb24tZHJvcC1zdWNjZXNzIGNhbGxiYWNrXG4gICAgICovXG4gICAgQE91dHB1dChcIm9uRHJhZ1N1Y2Nlc3NcIikgb25EcmFnU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgQE91dHB1dChcIm9uRHJhZ1N0YXJ0XCIpIG9uRHJhZ1N0YXJ0Q2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dChcIm9uRHJhZ092ZXJcIikgb25EcmFnT3ZlckNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoXCJvbkRyYWdFbmRcIikgb25EcmFnRW5kQ2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dChcIm9uRHJvcFN1Y2Nlc3NcIikgb25Ecm9wU3VjY2Vzc0NhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgZHJhZ0Ryb3BTZXJ2aWNlOiBEcmFnRHJvcFNlcnZpY2UsIGNvbmZpZzpEcmFnRHJvcENvbmZpZyxcbiAgICAgICAgcHJpdmF0ZSBfc29ydGFibGVDb250YWluZXI6IFNvcnRhYmxlQ29udGFpbmVyLFxuICAgICAgICBwcml2YXRlIF9zb3J0YWJsZURhdGFTZXJ2aWNlOiBEcmFnRHJvcFNvcnRhYmxlU2VydmljZSxcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKGVsZW1SZWYsIGRyYWdEcm9wU2VydmljZSwgY29uZmlnLCBjZHIpO1xuICAgICAgICB0aGlzLmRyb3Bab25lcyA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLmRyb3Bab25lcztcbiAgICAgICAgdGhpcy5kcmFnRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZHJvcEVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIF9vbkRyYWdTdGFydENhbGxiYWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ1N0YXJ0Q2FsbGJhY2suIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUodGhpcy5fZWxlbSk7XG4gICAgICAgIC8vIEFkZCBkcmFnRGF0YVxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhID0gdGhpcy5kcmFnRGF0YTtcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjayA9IHRoaXMub25EcmFnU3VjY2Vzc0NhbGxiYWNrO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLm9uRHJhZ1N0YXJ0Q2FsbGJhY2suZW1pdCh0aGlzLl9kcmFnRHJvcFNlcnZpY2UuZHJhZ0RhdGEpO1xuICAgIH1cblxuICAgIF9vbkRyYWdPdmVyQ2FsbGJhY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmlzRHJhZ2dlZCAmJiB0aGlzLl9lbGVtICE9PSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmVsZW0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdfb25EcmFnT3ZlckNhbGxiYWNrLiBkcmFnZ2luZyBlbGVtIHdpdGggaW5kZXggJyArIHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xuICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLl9lbGVtKTtcbiAgICAgICAgICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vbkRyYWdFbmRDYWxsYmFjayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdFbmRDYWxsYmFjay4gZW5kIGRyYWdnaW5nIGVsZW0gd2l0aCBpbmRleCAnICsgdGhpcy5pbmRleCk7XG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2Uuc29ydGFibGVDb250YWluZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5tYXJrU29ydGFibGUobnVsbCk7XG4gICAgICAgIC8vIEFkZCBkcmFnR2F0YVxuICAgICAgICB0aGlzLl9kcmFnRHJvcFNlcnZpY2UuaXNEcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wU2VydmljZS5vbkRyYWdTdWNjZXNzQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAvL1xuICAgICAgICB0aGlzLm9uRHJhZ0VuZENhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcbiAgICB9XG5cbiAgICBfb25EcmFnRW50ZXJDYWxsYmFjayhldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLm1hcmtTb3J0YWJsZSh0aGlzLl9lbGVtKTtcbiAgICAgICAgICAgIGlmICgodGhpcy5pbmRleCAhPT0gdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCkgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEgIT09IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcG9uZW50Ll9vbkRyYWdFbnRlckNhbGxiYWNrLiBkcmFnIG5vZGUgWycgKyB0aGlzLmluZGV4ICsgJ10gb3ZlciBub2RlIFsnICsgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5pbmRleCArICddJyk7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGl0ZW1cbiAgICAgICAgICAgICAgICBsZXQgaXRlbTphbnkgPSB0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YVt0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLmluZGV4XTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHByZXZpb3VzZSBsaXN0XG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5zb3J0YWJsZURhdGEuc3BsaWNlKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zb3J0YWJsZURhdGFTZXJ2aWNlLnNvcnRhYmxlQ29udGFpbmVyLnNvcnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lci5kcm9wRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBpdGVtIHRvIG5ldyBsaXN0XG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuc29ydGFibGVEYXRhLnNwbGljZSh0aGlzLmluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVDb250YWluZXIuZHJvcEVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fc29ydGFibGVEYXRhU2VydmljZS5zb3J0YWJsZUNvbnRhaW5lciA9IHRoaXMuX3NvcnRhYmxlQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uRHJvcENhbGxiYWNrIChldmVudDogRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvcnRhYmxlRGF0YVNlcnZpY2UuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Ecm9wQ2FsbGJhY2sub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmRyYWdEYXRhJywgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcbiAgICAgICAgICAgIHRoaXMub25Ecm9wU3VjY2Vzc0NhbGxiYWNrLmVtaXQodGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLmRyYWdEYXRhKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnRHJvcFNlcnZpY2Uub25EcmFnU3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uRHJvcENhbGxiYWNrLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5kcmFnRGF0YScsIHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ0Ryb3BTZXJ2aWNlLm9uRHJhZ1N1Y2Nlc3NDYWxsYmFjay5lbWl0KHRoaXMuX2RyYWdEcm9wU2VydmljZS5kcmFnRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZWZyZXNoIGNoYW5nZXMgaW4gcHJvcGVydGllcyBvZiBjb250YWluZXIgY29tcG9uZW50XG4gICAgICAgICAgICB0aGlzLl9zb3J0YWJsZUNvbnRhaW5lci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tkbmQtc29ydGFibGUtaGFuZGxlXScgfSlcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUhhbmRsZUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0SGFuZGxlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCBkcmFnRHJvcFNlcnZpY2U6IERyYWdEcm9wU2VydmljZSwgY29uZmlnOkRyYWdEcm9wQ29uZmlnLCBfQ29tcG9uZW50OiBTb3J0YWJsZUNvbXBvbmVudCxcbiAgICAgICAgY2RyOkNoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICAgICAgc3VwZXIoZWxlbVJlZiwgZHJhZ0Ryb3BTZXJ2aWNlLCBjb25maWcsIF9Db21wb25lbnQsIGNkcik7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3NvcnRhYmxlLmNvbXBvbmVudC50cyIsIi8qKlxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOmFueSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xufVxuXG4vKipcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3Qgbm90IHVuZGVmaW5lZCBvciBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByZXNlbnQob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsO1xufVxuXG4vKipcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBGdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmo6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbi8qKlxuICogQ3JlYXRlIEltYWdlIGVsZW1lbnQgd2l0aCBzcGVjaWZpZWQgdXJsIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3JjOiBzdHJpbmcpIHtcbiAgICBsZXQgaW1nOkhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSFRNTEltYWdlRWxlbWVudCgpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgcmV0dXJuIGltZztcbn1cblxuLyoqXG4gKiBDYWxsIHRoZSBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbEZ1bihmdW46IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bigpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kbmQudXRpbHMudHMiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItZG5kXG5cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtEcmFnRHJvcENvbmZpZ30gZnJvbSAnLi9zcmMvZG5kLmNvbmZpZyc7XG5pbXBvcnQge0RyYWdEcm9wU2VydmljZSwgRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsIGRyYWdEcm9wU2VydmljZUZhY3RvcnksIGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeX0gZnJvbSAnLi9zcmMvZG5kLnNlcnZpY2UnO1xuaW1wb3J0IHtEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudH0gZnJvbSAnLi9zcmMvZHJhZ2dhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0Ryb3BwYWJsZUNvbXBvbmVudH0gZnJvbSAnLi9zcmMvZHJvcHBhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUNvbXBvbmVudCwgU29ydGFibGVIYW5kbGVDb21wb25lbnR9IGZyb20gJy4vc3JjL3NvcnRhYmxlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9kbmQuY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RuZC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RyYWdnYWJsZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZHJvcHBhYmxlLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9zb3J0YWJsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgbGV0IHByb3ZpZGVycyA9IFtcbiAgICBEcmFnRHJvcENvbmZpZyxcbiAgICB7IHByb3ZpZGU6IERyYWdEcm9wU2VydmljZSwgdXNlRmFjdG9yeTogZHJhZ0Ryb3BTZXJ2aWNlRmFjdG9yeSB9LFxuICAgIHsgcHJvdmlkZTogRHJhZ0Ryb3BTb3J0YWJsZVNlcnZpY2UsIHVzZUZhY3Rvcnk6IGRyYWdEcm9wU29ydGFibGVTZXJ2aWNlRmFjdG9yeSwgZGVwczogW0RyYWdEcm9wQ29uZmlnXSB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCwgRHJvcHBhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50XSxcbiAgZXhwb3J0cyA6IFtEcmFnZ2FibGVDb21wb25lbnQsIERyYWdnYWJsZUhhbmRsZUNvbXBvbmVudCwgRHJvcHBhYmxlQ29tcG9uZW50LCBTb3J0YWJsZUNvbnRhaW5lciwgU29ydGFibGVDb21wb25lbnQsIFNvcnRhYmxlSGFuZGxlQ29tcG9uZW50XSxcblxufSlcbmV4cG9ydCBjbGFzcyBEbmRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBEbmRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==