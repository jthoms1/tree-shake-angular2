var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}(function(){'use strict';var globalScope;if(typeof window==='undefined'){if(typeof WorkerGlobalScope!=='undefined'&&self instanceof WorkerGlobalScope){// TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
globalScope=self;}else{globalScope=global;}}else{globalScope=window;}function scheduleMicroTask(fn){Zone.current.scheduleMicroTask('scheduleMicrotask',fn);}var IS_DART=false;// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var global$1=globalScope;var Type=Function;function getTypeNameForDebugging(type){if(type['name']){return type['name'];}return typeof type==='undefined'?'undefined':_typeof(type);}var Math=global$1.Math;// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
global$1.assert=function assert(condition){// TODO: to be fixed properly via #2830, noop for now
};function isPresent(obj){return obj!==undefined&&obj!==null;}function isBlank(obj){return obj===undefined||obj===null;}function isString(obj){return typeof obj==='string';}function isFunction(obj){return typeof obj==='function';}function isType(obj){return isFunction(obj);}function isPromise(obj){return obj instanceof global$1.Promise;}function isArray(obj){return Array.isArray(obj);}function noop(){}function stringify(token){if(typeof token==='string'){return token;}if(token===undefined||token===null){return''+token;}if(token.name){return token.name;}if(token.overriddenName){return token.overriddenName;}var res=token.toString();var newLineIndex=res.indexOf('\n');return newLineIndex===-1?res:res.substring(0,newLineIndex);}var StringWrapper=function(){function StringWrapper(){_classCallCheck(this,StringWrapper);}_createClass(StringWrapper,null,[{key:'fromCharCode',value:function fromCharCode(code){return String.fromCharCode(code);}},{key:'charCodeAt',value:function charCodeAt(s,index){return s.charCodeAt(index);}},{key:'split',value:function split(s,regExp){return s.split(regExp);}},{key:'equals',value:function equals(s,s2){return s===s2;}},{key:'stripLeft',value:function stripLeft(s,charVal){if(s&&s.length){var pos=0;for(var i=0;i<s.length;i++){if(s[i]!=charVal)break;pos++;}s=s.substring(pos);}return s;}},{key:'stripRight',value:function stripRight(s,charVal){if(s&&s.length){var pos=s.length;for(var i=s.length-1;i>=0;i--){if(s[i]!=charVal)break;pos--;}s=s.substring(0,pos);}return s;}},{key:'replace',value:function replace(s,from,_replace){return s.replace(from,_replace);}},{key:'replaceAll',value:function replaceAll(s,from,replace){return s.replace(from,replace);}},{key:'slice',value:function slice(s){var from=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var to=arguments.length<=2||arguments[2]===undefined?null:arguments[2];return s.slice(from,to===null?undefined:to);}},{key:'replaceAllMapped',value:function replaceAllMapped(s,from,cb){return s.replace(from,function(){for(var _len=arguments.length,matches=Array(_len),_key=0;_key<_len;_key++){matches[_key]=arguments[_key];}// Remove offset & string from the result array
matches.splice(-2,2);// The callback receives match, p1, ..., pn
return cb(matches);});}},{key:'contains',value:function contains(s,substr){return s.indexOf(substr)!=-1;}},{key:'compare',value:function compare(a,b){if(a<b){return-1;}else if(a>b){return 1;}else{return 0;}}}]);return StringWrapper;}();// JS has NaN !== NaN
function looseIdentical(a,b){return a===b||typeof a==='number'&&typeof b==='number'&&isNaN(a)&&isNaN(b);}// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
function getMapKey(value){return value;}function normalizeBool(obj){return isBlank(obj)?false:obj;}function isJsObject(o){return o!==null&&(typeof o==='function'||(typeof o==='undefined'?'undefined':_typeof(o))==='object');}function print(obj){console.log(obj);}function warn(obj){console.warn(obj);}var _symbolIterator=null;function getSymbolIterator(){if(isBlank(_symbolIterator)){if(isPresent(globalScope.Symbol)&&isPresent(Symbol.iterator)){_symbolIterator=Symbol.iterator;}else{// es6-shim specific logic
var keys=Object.getOwnPropertyNames(Map.prototype);for(var i=0;i<keys.length;++i){var key=keys[i];if(key!=='entries'&&key!=='size'&&Map.prototype[key]===Map.prototype['entries']){_symbolIterator=key;}}}}return _symbolIterator;}function isPrimitive(obj){return!isJsObject(obj);}/**
   * Allows to refer to references which are not yet defined.
   *
   * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
   * DI is declared,
   * but not yet defined. It is also used when the `token` which we use when creating a query is not
   * yet defined.
   *
   * ### Example
   * {@example core/di/ts/forward_ref/forward_ref.ts region='forward_ref'}
   * @experimental
   */function forwardRef(forwardRefFn){forwardRefFn.__forward_ref__=forwardRef;forwardRefFn.toString=function(){return stringify(this());};return forwardRefFn;}/**
   * Lazily retrieves the reference value from a forwardRef.
   *
   * Acts as the identity function when given a non-forward-ref value.
   *
   * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
   *
   * ```typescript
   * var ref = forwardRef(() => "refValue");
   * expect(resolveForwardRef(ref)).toEqual("refValue");
   * expect(resolveForwardRef("regularValue")).toEqual("regularValue");
   * ```
   *
   * See: {@link forwardRef}
   * @experimental
   */function resolveForwardRef(type){if(isFunction(type)&&type.hasOwnProperty('__forward_ref__')&&type.__forward_ref__===forwardRef){return type();}else{return type;}}/**
   * A parameter metadata that specifies a dependency.
   *
   * ### Example ([live demo](http://plnkr.co/edit/6uHYJK?p=preview))
   *
   * ```typescript
   * class Engine {}
   *
   * @Injectable()
   * class Car {
   *   engine;
   *   constructor(@Inject("MyEngine") engine:Engine) {
   *     this.engine = engine;
   *   }
   * }
   *
   * var injector = Injector.resolveAndCreate([
   *  {provide: "MyEngine", useClass: Engine},
   *  Car
   * ]);
   *
   * expect(injector.get(Car).engine instanceof Engine).toBe(true);
   * ```
   *
   * When `@Inject()` is not present, {@link Injector} will use the type annotation of the parameter.
   *
   * ### Example
   *
   * ```typescript
   * class Engine {}
   *
   * @Injectable()
   * class Car {
   *   constructor(public engine: Engine) {} //same as constructor(@Inject(Engine) engine:Engine)
   * }
   *
   * var injector = Injector.resolveAndCreate([Engine, Car]);
   * expect(injector.get(Car).engine instanceof Engine).toBe(true);
   * ```
   * @ts2dart_const
   * @stable
   */var InjectMetadata=function(){function InjectMetadata(token/** TODO #9100 */){_classCallCheck(this,InjectMetadata);this.token=token;}_createClass(InjectMetadata,[{key:'toString',value:function toString(){return'@Inject('+stringify(this.token)+')';}}]);return InjectMetadata;}();/**
   * A parameter metadata that marks a dependency as optional. {@link Injector} provides `null` if
   * the dependency is not found.
   *
   * ### Example ([live demo](http://plnkr.co/edit/AsryOm?p=preview))
   *
   * ```typescript
   * class Engine {}
   *
   * @Injectable()
   * class Car {
   *   engine;
   *   constructor(@Optional() engine:Engine) {
   *     this.engine = engine;
   *   }
   * }
   *
   * var injector = Injector.resolveAndCreate([Car]);
   * expect(injector.get(Car).engine).toBeNull();
   * ```
   * @ts2dart_const
   * @stable
   */var OptionalMetadata=function(){function OptionalMetadata(){_classCallCheck(this,OptionalMetadata);}_createClass(OptionalMetadata,[{key:'toString',value:function toString(){return'@Optional()';}}]);return OptionalMetadata;}();/**
   * `DependencyMetadata` is used by the framework to extend DI.
   * This is internal to Angular and should not be used directly.
   * @ts2dart_const
   * @stable
   */var DependencyMetadata=function(){function DependencyMetadata(){_classCallCheck(this,DependencyMetadata);}_createClass(DependencyMetadata,[{key:'token',get:function get(){return null;}}]);return DependencyMetadata;}();/**
   * A marker metadata that marks a class as available to {@link Injector} for creation.
   *
   * ### Example ([live demo](http://plnkr.co/edit/Wk4DMQ?p=preview))
   *
   * ```typescript
   * @Injectable()
   * class UsefulService {}
   *
   * @Injectable()
   * class NeedsService {
   *   constructor(public service:UsefulService) {}
   * }
   *
   * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
   * expect(injector.get(NeedsService).service instanceof UsefulService).toBe(true);
   * ```
   * {@link Injector} will throw {@link NoAnnotationError} when trying to instantiate a class that
   * does not have `@Injectable` marker, as shown in the example below.
   *
   * ```typescript
   * class UsefulService {}
   *
   * class NeedsService {
   *   constructor(public service:UsefulService) {}
   * }
   *
   * var injector = Injector.resolveAndCreate([NeedsService, UsefulService]);
   * expect(() => injector.get(NeedsService)).toThrowError();
   * ```
   * @ts2dart_const
   * @stable
   */var InjectableMetadata=function InjectableMetadata(){_classCallCheck(this,InjectableMetadata);};/**
   * Specifies that an {@link Injector} should retrieve a dependency only from itself.
   *
   * ### Example ([live demo](http://plnkr.co/edit/NeagAg?p=preview))
   *
   * ```typescript
   * class Dependency {
   * }
   *
   * @Injectable()
   * class NeedsDependency {
   *   dependency;
   *   constructor(@Self() dependency:Dependency) {
   *     this.dependency = dependency;
   *   }
   * }
   *
   * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
   * var nd = inj.get(NeedsDependency);
   *
   * expect(nd.dependency instanceof Dependency).toBe(true);
   *
   * var inj = Injector.resolveAndCreate([Dependency]);
   * var child = inj.resolveAndCreateChild([NeedsDependency]);
   * expect(() => child.get(NeedsDependency)).toThrowError();
   * ```
   * @ts2dart_const
   * @stable
   */var SelfMetadata=function(){function SelfMetadata(){_classCallCheck(this,SelfMetadata);}_createClass(SelfMetadata,[{key:'toString',value:function toString(){return'@Self()';}}]);return SelfMetadata;}();/**
   * Specifies that the dependency resolution should start from the parent injector.
   *
   * ### Example ([live demo](http://plnkr.co/edit/Wchdzb?p=preview))
   *
   * ```typescript
   * class Dependency {
   * }
   *
   * @Injectable()
   * class NeedsDependency {
   *   dependency;
   *   constructor(@SkipSelf() dependency:Dependency) {
   *     this.dependency = dependency;
   *   }
   * }
   *
   * var parent = Injector.resolveAndCreate([Dependency]);
   * var child = parent.resolveAndCreateChild([NeedsDependency]);
   * expect(child.get(NeedsDependency).dependency instanceof Depedency).toBe(true);
   *
   * var inj = Injector.resolveAndCreate([Dependency, NeedsDependency]);
   * expect(() => inj.get(NeedsDependency)).toThrowError();
   * ```
   * @ts2dart_const
   * @stable
   */var SkipSelfMetadata=function(){function SkipSelfMetadata(){_classCallCheck(this,SkipSelfMetadata);}_createClass(SkipSelfMetadata,[{key:'toString',value:function toString(){return'@SkipSelf()';}}]);return SkipSelfMetadata;}();/**
   * Specifies that an injector should retrieve a dependency from any injector until reaching the
   * closest host.
   *
   * In Angular, a component element is automatically declared as a host for all the injectors in
   * its view.
   *
   * ### Example ([live demo](http://plnkr.co/edit/GX79pV?p=preview))
   *
   * In the following example `App` contains `ParentCmp`, which contains `ChildDirective`.
   * So `ParentCmp` is the host of `ChildDirective`.
   *
   * `ChildDirective` depends on two services: `HostService` and `OtherService`.
   * `HostService` is defined at `ParentCmp`, and `OtherService` is defined at `App`.
   *
   *```typescript
   * class OtherService {}
   * class HostService {}
   *
   * @Directive({
   *   selector: 'child-directive'
   * })
   * class ChildDirective {
   *   constructor(@Optional() @Host() os:OtherService, @Optional() @Host() hs:HostService){
   *     console.log("os is null", os);
   *     console.log("hs is NOT null", hs);
   *   }
   * }
   *
   * @Component({
   *   selector: 'parent-cmp',
   *   providers: [HostService],
   *   template: `
   *     Dir: <child-directive></child-directive>
   *   `,
   *   directives: [ChildDirective]
   * })
   * class ParentCmp {
   * }
   *
   * @Component({
   *   selector: 'app',
   *   providers: [OtherService],
   *   template: `
   *     Parent: <parent-cmp></parent-cmp>
   *   `,
   *   directives: [ParentCmp]
   * })
   * class App {
   * }
   *
   * bootstrap(App);
   *```
   * @ts2dart_const
   * @stable
   */var HostMetadata=function(){function HostMetadata(){_classCallCheck(this,HostMetadata);}_createClass(HostMetadata,[{key:'toString',value:function toString(){return'@Host()';}}]);return HostMetadata;}();/**
   * Specifies that a constant attribute value should be injected.
   *
   * The directive can inject constant string literals of host element attributes.
   *
   * ### Example
   *
   * Suppose we have an `<input>` element and want to know its `type`.
   *
   * ```html
   * <input type="text">
   * ```
   *
   * A decorator can inject string literal `text` like so:
   *
   * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
   * @ts2dart_const
   * @stable
   */var AttributeMetadata=function(_DependencyMetadata){_inherits(AttributeMetadata,_DependencyMetadata);function AttributeMetadata(attributeName){_classCallCheck(this,AttributeMetadata);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(AttributeMetadata).call(this));_this.attributeName=attributeName;return _this;}_createClass(AttributeMetadata,[{key:'toString',value:function toString(){return'@Attribute('+stringify(this.attributeName)+')';}},{key:'token',get:function get(){// Normally one would default a token to a type of an injected value but here
// the type of a variable is "string" and we can't use primitive type as a return value
// so we use instance of Attribute instead. This doesn't matter much in practice as arguments
// with @Attribute annotation are injected by ElementInjector that doesn't take tokens into
// account.
return this;}}]);return AttributeMetadata;}(DependencyMetadata);/**
   * Describes the current state of the change detector.
   */var ChangeDetectorState;(function(ChangeDetectorState){/**
       * `NeverChecked` means that the change detector has not been checked yet, and
       * initialization methods should be called during detection.
       */ChangeDetectorState[ChangeDetectorState["NeverChecked"]=0]="NeverChecked";/**
       * `CheckedBefore` means that the change detector has successfully completed at least
       * one detection previously.
       */ChangeDetectorState[ChangeDetectorState["CheckedBefore"]=1]="CheckedBefore";/**
       * `Errored` means that the change detector encountered an error checking a binding
       * or calling a directive lifecycle method and is now in an inconsistent state. Change
       * detectors in this state will no longer detect changes.
       */ChangeDetectorState[ChangeDetectorState["Errored"]=2]="Errored";})(ChangeDetectorState||(ChangeDetectorState={}));/**
   * Describes within the change detector which strategy will be used the next time change
   * detection is triggered.
   * @stable
   */var ChangeDetectionStrategy;(function(ChangeDetectionStrategy){/**
       * `CheckedOnce` means that after calling detectChanges the mode of the change detector
       * will become `Checked`.
       */ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"]=0]="CheckOnce";/**
       * `Checked` means that the change detector should be skipped until its mode changes to
       * `CheckOnce`.
       */ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"]=1]="Checked";/**
       * `CheckAlways` means that after calling detectChanges the mode of the change detector
       * will remain `CheckAlways`.
       */ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"]=2]="CheckAlways";/**
       * `Detached` means that the change detector sub tree is not a part of the main tree and
       * should be skipped.
       */ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"]=3]="Detached";/**
       * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
       */ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"]=4]="OnPush";/**
       * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
       */ChangeDetectionStrategy[ChangeDetectionStrategy["Default"]=5]="Default";})(ChangeDetectionStrategy||(ChangeDetectionStrategy={}));/**
   * List of possible {@link ChangeDetectionStrategy} values.
   */var CHANGE_DETECTION_STRATEGY_VALUES=[ChangeDetectionStrategy.CheckOnce,ChangeDetectionStrategy.Checked,ChangeDetectionStrategy.CheckAlways,ChangeDetectionStrategy.Detached,ChangeDetectionStrategy.OnPush,ChangeDetectionStrategy.Default];function isDefaultChangeDetectionStrategy(changeDetectionStrategy){return isBlank(changeDetectionStrategy)||changeDetectionStrategy===ChangeDetectionStrategy.Default;}/**
   * Directives allow you to attach behavior to elements in the DOM.
   *
   * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
   *
   * A directive consists of a single directive annotation and a controller class. When the
   * directive's `selector` matches
   * elements in the DOM, the following steps occur:
   *
   * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
   * arguments.
   * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
   * depth-first order,
   *    as declared in the HTML.
   *
   * ## Understanding How Injection Works
   *
   * There are three stages of injection resolution.
   * - *Pre-existing Injectors*:
   *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
   * the dependency was
   *     specified as `@Optional`, returns `null`.
   *   - The platform injector resolves browser singleton resources, such as: cookies, title,
   * location, and others.
   * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
   * the same parent-child hierarchy
   *     as the component instances in the DOM.
   * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
   * element has an `ElementInjector`
   *     which follow the same parent-child hierarchy as the DOM elements themselves.
   *
   * When a template is instantiated, it also must instantiate the corresponding directives in a
   * depth-first order. The
   * current `ElementInjector` resolves the constructor dependencies for each directive.
   *
   * Angular then resolves dependencies as follows, according to the order in which they appear in the
   * {@link ViewMetadata}:
   *
   * 1. Dependencies on the current element
   * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
   * 3. Dependencies on component injectors and their parents until it encounters the root component
   * 4. Dependencies on pre-existing injectors
   *
   *
   * The `ElementInjector` can inject other directives, element-specific special objects, or it can
   * delegate to the parent
   * injector.
   *
   * To inject other directives, declare the constructor parameter as:
   * - `directive:DirectiveType`: a directive on the current element only
   * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
   * element and the
   *    Shadow DOM root.
   * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
   * directives.
   * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
   * child directives.
   *
   * To inject element-specific special objects, declare the constructor parameter as:
   * - `element: ElementRef` to obtain a reference to logical element in the view.
   * - `viewContainer: ViewContainerRef` to control child template instantiation, for
   * {@link DirectiveMetadata} directives only
   * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
   *
   * ### Example
   *
   * The following example demonstrates how dependency injection resolves constructor arguments in
   * practice.
   *
   *
   * Assume this HTML template:
   *
   * ```
   * <div dependency="1">
   *   <div dependency="2">
   *     <div dependency="3" my-directive>
   *       <div dependency="4">
   *         <div dependency="5"></div>
   *       </div>
   *       <div dependency="6"></div>
   *     </div>
   *   </div>
   * </div>
   * ```
   *
   * With the following `dependency` decorator and `SomeService` injectable class.
   *
   * ```
   * @Injectable()
   * class SomeService {
   * }
   *
   * @Directive({
   *   selector: '[dependency]',
   *   inputs: [
   *     'id: dependency'
   *   ]
   * })
   * class Dependency {
   *   id:string;
   * }
   * ```
   *
   * Let's step through the different ways in which `MyDirective` could be declared...
   *
   *
   * ### No injection
   *
   * Here the constructor is declared with no arguments, therefore nothing is injected into
   * `MyDirective`.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor() {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with no dependencies.
   *
   *
   * ### Component-level injection
   *
   * Directives can inject any injectable instance from the closest component injector or any of its
   * parents.
   *
   * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
   * from the parent
   * component's injector.
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(someService: SomeService) {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with a dependency on `SomeService`.
   *
   *
   * ### Injecting a directive from the current element
   *
   * Directives can inject other directives declared on the current element.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(dependency: Dependency) {
   *     expect(dependency.id).toEqual(3);
   *   }
   * }
   * ```
   * This directive would be instantiated with `Dependency` declared at the same element, in this case
   * `dependency="3"`.
   *
   * ### Injecting a directive from any ancestor elements
   *
   * Directives can inject other directives declared on any ancestor element (in the current Shadow
   * DOM), i.e. on the current element, the
   * parent element, or its parents.
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(@Host() dependency: Dependency) {
   *     expect(dependency.id).toEqual(2);
   *   }
   * }
   * ```
   *
   * `@Host` checks the current element, the parent, as well as its parents recursively. If
   * `dependency="2"` didn't
   * exist on the direct parent, this injection would
   * have returned
   * `dependency="1"`.
   *
   *
   * ### Injecting a live collection of direct child directives
   *
   *
   * A directive can also query for other child directives. Since parent directives are instantiated
   * before child directives, a directive can't simply inject the list of child directives. Instead,
   * the directive injects a {@link QueryList}, which updates its contents as children are added,
   * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
   * `ngIf`, or an `ngSwitch`.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
   * `Dependency` 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
   *
   * ### Injecting a live collection of descendant directives
   *
   * By passing the descendant flag to `@Query` above, we can include the children of the child
   * elements.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
   *
   * ### Optional injection
   *
   * The normal behavior of directives is to return an error when a specified dependency cannot be
   * resolved. If you
   * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
   * with `@Optional()`.
   * This explicitly permits the author of a template to treat some of the surrounding directives as
   * optional.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(@Optional() dependency:Dependency) {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with a `Dependency` directive found on the current element.
   * If none can be
   * found, the injector supplies `null` instead of throwing an error.
   *
   * ### Example
   *
   * Here we use a decorator directive to simply define basic tool-tip behavior.
   *
   * ```
   * @Directive({
   *   selector: '[tooltip]',
   *   inputs: [
   *     'text: tooltip'
   *   ],
   *   host: {
   *     '(mouseenter)': 'onMouseEnter()',
   *     '(mouseleave)': 'onMouseLeave()'
   *   }
   * })
   * class Tooltip{
   *   text:string;
   *   overlay:Overlay; // NOT YET IMPLEMENTED
   *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
   *
   *   constructor(overlayManager:OverlayManager) {
   *     this.overlay = overlay;
   *   }
   *
   *   onMouseEnter() {
   *     // exact signature to be determined
   *     this.overlay = this.overlayManager.open(text, ...);
   *   }
   *
   *   onMouseLeave() {
   *     this.overlay.close();
   *     this.overlay = null;
   *   }
   * }
   * ```
   * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
   * `tooltip` selector,
   * like so:
   *
   * ```
   * <div tooltip="some text here"></div>
   * ```
   *
   * Directives can also control the instantiation, destruction, and positioning of inline template
   * elements:
   *
   * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
   * runtime.
   * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
   * location in the current view
   * where these actions are performed.
   *
   * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
   * `<template>` element. Thus a
   * directive in a child view cannot inject the directive that created it.
   *
   * Since directives that create views via ViewContainers are common in Angular, and using the full
   * `<template>` element syntax is wordy, Angular
   * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
   * equivalent.
   *
   * Thus,
   *
   * ```
   * <ul>
   *   <li *foo="bar" title="text"></li>
   * </ul>
   * ```
   *
   * Expands in use to:
   *
   * ```
   * <ul>
   *   <template [foo]="bar">
   *     <li title="text"></li>
   *   </template>
   * </ul>
   * ```
   *
   * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
   * the directive
   * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
   *
   * ## Lifecycle hooks
   *
   * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
   * are called by the change detection at defined points in time during the life of the directive.
   *
   * ### Example
   *
   * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
   *
   * Here is a simple directive that triggers on an `unless` selector:
   *
   * ```
   * @Directive({
   *   selector: '[unless]',
   *   inputs: ['unless']
   * })
   * export class Unless {
   *   viewContainer: ViewContainerRef;
   *   templateRef: TemplateRef;
   *   prevCondition: boolean;
   *
   *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
   *     this.viewContainer = viewContainer;
   *     this.templateRef = templateRef;
   *     this.prevCondition = null;
   *   }
   *
   *   set unless(newCondition) {
   *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
   *       this.prevCondition = true;
   *       this.viewContainer.clear();
   *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
   *       this.prevCondition = false;
   *       this.viewContainer.create(this.templateRef);
   *     }
   *   }
   * }
   * ```
   *
   * We can then use this `unless` selector in a template:
   * ```
   * <ul>
   *   <li *unless="expr"></li>
   * </ul>
   * ```
   *
   * Once the directive instantiates the child view, the shorthand notation for the template expands
   * and the result is:
   *
   * ```
   * <ul>
   *   <template [unless]="exp">
   *     <li></li>
   *   </template>
   *   <li></li>
   * </ul>
   * ```
   *
   * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
   * the instantiated
   * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
   * @ts2dart_const
   * @stable
   */var DirectiveMetadata=function(_InjectableMetadata){_inherits(DirectiveMetadata,_InjectableMetadata);function DirectiveMetadata(){var _ref=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var selector=_ref.selector;var inputs=_ref.inputs;var outputs=_ref.outputs;var properties=_ref.properties;var events=_ref.events;var host=_ref.host;var providers=_ref.providers;var exportAs=_ref.exportAs;var queries=_ref.queries;_classCallCheck(this,DirectiveMetadata);var _this2=_possibleConstructorReturn(this,Object.getPrototypeOf(DirectiveMetadata).call(this));_this2.selector=selector;_this2._inputs=inputs;_this2._properties=properties;_this2._outputs=outputs;_this2._events=events;_this2.host=host;_this2.exportAs=exportAs;_this2.queries=queries;_this2._providers=providers;return _this2;}/**
       * Enumerates the set of data-bound input properties for a directive
       *
       * Angular automatically updates input properties during change detection.
       *
       * The `inputs` property defines a set of `directiveProperty` to `bindingProperty`
       * configuration:
       *
       * - `directiveProperty` specifies the component property where the value is written.
       * - `bindingProperty` specifies the DOM property where the value is read from.
       *
       * When `bindingProperty` is not provided, it is assumed to be equal to `directiveProperty`.
       *
       * ### Example ([live demo](http://plnkr.co/edit/ivhfXY?p=preview))
       *
       * The following example creates a component with two data-bound properties.
       *
       * ```typescript
       * @Component({
       *   selector: 'bank-account',
       *   inputs: ['bankName', 'id: account-id'],
       *   template: `
       *     Bank Name: {{bankName}}
       *     Account Id: {{id}}
       *   `
       * })
       * class BankAccount {
       *   bankName: string;
       *   id: string;
       *
       *   // this property is not bound, and won't be automatically updated by Angular
       *   normalizedBankName: string;
       * }
       *
       * @Component({
       *   selector: 'app',
       *   template: `
       *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
       *   `,
       *   directives: [BankAccount]
       * })
       * class App {}
       *
       * bootstrap(App);
       * ```
       *
       */_createClass(DirectiveMetadata,[{key:'inputs',get:function get(){return isPresent(this._properties)&&this._properties.length>0?this._properties:this._inputs;}/**
       * Use `inputs` instead
       *
       * @deprecated
       */},{key:'properties',get:function get(){return this.inputs;}/**
       * Enumerates the set of event-bound output properties.
       *
       * When an output property emits an event, an event handler attached to that event
       * the template is invoked.
       *
       * The `outputs` property defines a set of `directiveProperty` to `bindingProperty`
       * configuration:
       *
       * - `directiveProperty` specifies the component property that emits events.
       * - `bindingProperty` specifies the DOM property the event handler is attached to.
       *
       * ### Example ([live demo](http://plnkr.co/edit/d5CNq7?p=preview))
       *
       * ```typescript
       * @Directive({
       *   selector: 'interval-dir',
       *   outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
       * })
       * class IntervalDir {
       *   everySecond = new EventEmitter();
       *   five5Secs = new EventEmitter();
       *
       *   constructor() {
       *     setInterval(() => this.everySecond.emit("event"), 1000);
       *     setInterval(() => this.five5Secs.emit("event"), 5000);
       *   }
       * }
       *
       * @Component({
       *   selector: 'app',
       *   template: `
       *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
       *     </interval-dir>
       *   `,
       *   directives: [IntervalDir]
       * })
       * class App {
       *   everySecond() { console.log('second'); }
       *   everyFiveSeconds() { console.log('five seconds'); }
       * }
       * bootstrap(App);
       * ```
       *
       */},{key:'outputs',get:function get(){return isPresent(this._events)&&this._events.length>0?this._events:this._outputs;}/**
       * Use `outputs` instead
       *
       * @deprecated
       */},{key:'events',get:function get(){return this.outputs;}/**
       * Defines the set of injectable objects that are visible to a Directive and its light DOM
       * children.
       *
       * ## Simple Example
       *
       * Here is an example of a class that can be injected:
       *
       * ```
       * class Greeter {
       *    greet(name:string) {
       *      return 'Hello ' + name + '!';
       *    }
       * }
       *
       * @Directive({
       *   selector: 'greet',
       *   providers: [
       *     Greeter
       *   ]
       * })
       * class HelloWorld {
       *   greeter:Greeter;
       *
       *   constructor(greeter:Greeter) {
       *     this.greeter = greeter;
       *   }
       * }
       * ```
       */},{key:'providers',get:function get(){return this._providers;}}]);return DirectiveMetadata;}(InjectableMetadata);/**
   * Declare reusable UI building blocks for an application.
   *
   * Each Angular component requires a single `@Component` annotation. The
   * `@Component`
   * annotation specifies when a component is instantiated, and which properties and hostListeners it
   * binds to.
   *
   * When a component is instantiated, Angular
   * - creates a shadow DOM for the component.
   * - loads the selected template into the shadow DOM.
   * - creates all the injectable objects configured with `providers` and `viewProviders`.
   *
   * All template expressions and statements are then evaluated against the component instance.
   *
   * For details on the `@View` annotation, see {@link ViewMetadata}.
   *
   * ## Lifecycle hooks
   *
   * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
   * are called by the change detection at defined points in time during the life of the component.
   *
   * ### Example
   *
   * {@example core/ts/metadata/metadata.ts region='component'}
   * @ts2dart_const
   * @stable
   */var ComponentMetadata=function(_DirectiveMetadata){_inherits(ComponentMetadata,_DirectiveMetadata);function ComponentMetadata(){var _ref2=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var selector=_ref2.selector;var inputs=_ref2.inputs;var outputs=_ref2.outputs;var properties=_ref2.properties;var events=_ref2.events;var host=_ref2.host;var exportAs=_ref2.exportAs;var moduleId=_ref2.moduleId;var providers=_ref2.providers;var viewProviders=_ref2.viewProviders;var _ref2$changeDetection=_ref2.changeDetection;var changeDetection=_ref2$changeDetection===undefined?ChangeDetectionStrategy.Default:_ref2$changeDetection;var queries=_ref2.queries;var templateUrl=_ref2.templateUrl;var template=_ref2.template;var styleUrls=_ref2.styleUrls;var styles=_ref2.styles;var animations=_ref2.animations;var directives=_ref2.directives;var pipes=_ref2.pipes;var encapsulation=_ref2.encapsulation;var interpolation=_ref2.interpolation;_classCallCheck(this,ComponentMetadata);var _this3=_possibleConstructorReturn(this,Object.getPrototypeOf(ComponentMetadata).call(this,{selector:selector,inputs:inputs,outputs:outputs,properties:properties,events:events,host:host,exportAs:exportAs,providers:providers,queries:queries}));_this3.changeDetection=changeDetection;_this3._viewProviders=viewProviders;_this3.templateUrl=templateUrl;_this3.template=template;_this3.styleUrls=styleUrls;_this3.styles=styles;_this3.directives=directives;_this3.pipes=pipes;_this3.encapsulation=encapsulation;_this3.moduleId=moduleId;_this3.animations=animations;_this3.interpolation=interpolation;return _this3;}/**
       * Defines the set of injectable objects that are visible to its view DOM children.
       *
       * ## Simple Example
       *
       * Here is an example of a class that can be injected:
       *
       * ```
       * class Greeter {
       *    greet(name:string) {
       *      return 'Hello ' + name + '!';
       *    }
       * }
       *
       * @Directive({
       *   selector: 'needs-greeter'
       * })
       * class NeedsGreeter {
       *   greeter:Greeter;
       *
       *   constructor(greeter:Greeter) {
       *     this.greeter = greeter;
       *   }
       * }
       *
       * @Component({
       *   selector: 'greet',
       *   viewProviders: [
       *     Greeter
       *   ],
       *   template: `<needs-greeter></needs-greeter>`,
       *   directives: [NeedsGreeter]
       * })
       * class HelloWorld {
       * }
       *
       * ```
       */_createClass(ComponentMetadata,[{key:'viewProviders',get:function get(){return this._viewProviders;}}]);return ComponentMetadata;}(DirectiveMetadata);/**
   * Declares a data-bound input property.
   *
   * Angular automatically updates data-bound properties during change detection.
   *
   * `InputMetadata` takes an optional parameter that specifies the name
   * used when instantiating a component in the template. When not provided,
   * the name of the decorated property is used.
   *
   * ### Example
   *
   * The following example creates a component with two input properties.
   *
   * ```typescript
   * @Component({
   *   selector: 'bank-account',
   *   template: `
   *     Bank Name: {{bankName}}
   *     Account Id: {{id}}
   *   `
   * })
   * class BankAccount {
   *   @Input() bankName: string;
   *   @Input('account-id') id: string;
   *
   *   // this property is not bound, and won't be automatically updated by Angular
   *   normalizedBankName: string;
   * }
   *
   * @Component({
   *   selector: 'app',
   *   template: `
   *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
   *   `,
   *   directives: [BankAccount]
   * })
   * class App {}
   *
   * bootstrap(App);
   * ```
   * @ts2dart_const
   * @stable
   */var InputMetadata=function InputMetadata(/**
           * Name used when instantiating a component in the template.
           */bindingPropertyName){_classCallCheck(this,InputMetadata);this.bindingPropertyName=bindingPropertyName;};/**
   * Defines template and style encapsulation options available for Component's {@link View}.
   *
   * See {@link ViewMetadata#encapsulation}.
   * @stable
   */var ViewEncapsulation;(function(ViewEncapsulation){/**
       * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
       * Element and pre-processing the style rules provided via
       * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
       * attribute to all selectors.
       *
       * This is the default option.
       */ViewEncapsulation[ViewEncapsulation["Emulated"]=0]="Emulated";/**
       * Use the native encapsulation mechanism of the renderer.
       *
       * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
       * creating a ShadowRoot for Component's Host Element.
       */ViewEncapsulation[ViewEncapsulation["Native"]=1]="Native";/**
       * Don't provide any template or style encapsulation.
       */ViewEncapsulation[ViewEncapsulation["None"]=2]="None";})(ViewEncapsulation||(ViewEncapsulation={}));var VIEW_ENCAPSULATION_VALUES=[ViewEncapsulation.Emulated,ViewEncapsulation.Native,ViewEncapsulation.None];/**
   * Metadata properties available for configuring Views.
   *
   * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
   * `@View` annotation specifies the HTML template to use, and lists the directives that are active
   * within the template.
   *
   * When a component is instantiated, the template is loaded into the component's shadow root, and
   * the expressions and statements in the template are evaluated against the component.
   *
   * For details on the `@Component` annotation, see {@link ComponentMetadata}.
   *
   * ### Example
   *
   * ```
   * @Component({
   *   selector: 'greet',
   *   template: 'Hello {{name}}!',
   *   directives: [GreetUser, Bold]
   * })
   * class Greet {
   *   name: string;
   *
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   * ```
   * @ts2dart_const
   */var ViewMetadata=function ViewMetadata(){var _ref3=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var templateUrl=_ref3.templateUrl;var template=_ref3.template;var directives=_ref3.directives;var pipes=_ref3.pipes;var encapsulation=_ref3.encapsulation;var styles=_ref3.styles;var styleUrls=_ref3.styleUrls;var animations=_ref3.animations;var interpolation=_ref3.interpolation;_classCallCheck(this,ViewMetadata);this.templateUrl=templateUrl;this.template=template;this.styleUrls=styleUrls;this.styles=styles;this.directives=directives;this.pipes=pipes;this.encapsulation=encapsulation;this.animations=animations;this.interpolation=interpolation;};/**
   * @stable
   */var LifecycleHooks;(function(LifecycleHooks){LifecycleHooks[LifecycleHooks["OnInit"]=0]="OnInit";LifecycleHooks[LifecycleHooks["OnDestroy"]=1]="OnDestroy";LifecycleHooks[LifecycleHooks["DoCheck"]=2]="DoCheck";LifecycleHooks[LifecycleHooks["OnChanges"]=3]="OnChanges";LifecycleHooks[LifecycleHooks["AfterContentInit"]=4]="AfterContentInit";LifecycleHooks[LifecycleHooks["AfterContentChecked"]=5]="AfterContentChecked";LifecycleHooks[LifecycleHooks["AfterViewInit"]=6]="AfterViewInit";LifecycleHooks[LifecycleHooks["AfterViewChecked"]=7]="AfterViewChecked";})(LifecycleHooks||(LifecycleHooks={}));var LIFECYCLE_HOOKS_VALUES=[LifecycleHooks.OnInit,LifecycleHooks.OnDestroy,LifecycleHooks.DoCheck,LifecycleHooks.OnChanges,LifecycleHooks.AfterContentInit,LifecycleHooks.AfterContentChecked,LifecycleHooks.AfterViewInit,LifecycleHooks.AfterViewChecked];var _nextClassId=0;function extractAnnotation(annotation){if(isFunction(annotation)&&annotation.hasOwnProperty('annotation')){// it is a decorator, extract annotation
annotation=annotation.annotation;}return annotation;}function applyParams(fnOrArray,key){if(fnOrArray===Object||fnOrArray===String||fnOrArray===Function||fnOrArray===Number||fnOrArray===Array){throw new Error('Can not use native '+stringify(fnOrArray)+' as constructor');}if(isFunction(fnOrArray)){return fnOrArray;}else if(fnOrArray instanceof Array){var annotations=fnOrArray;var fn=fnOrArray[fnOrArray.length-1];if(!isFunction(fn)){throw new Error('Last position of Class method array must be Function in key '+key+' was \''+stringify(fn)+'\'');}var annoLength=annotations.length-1;if(annoLength!=fn.length){throw new Error('Number of annotations ('+annoLength+') does not match number of arguments ('+fn.length+') in the function: '+stringify(fn));}var paramsAnnotations=[];for(var i=0,ii=annotations.length-1;i<ii;i++){var paramAnnotations=[];paramsAnnotations.push(paramAnnotations);var annotation=annotations[i];if(annotation instanceof Array){for(var j=0;j<annotation.length;j++){paramAnnotations.push(extractAnnotation(annotation[j]));}}else if(isFunction(annotation)){paramAnnotations.push(extractAnnotation(annotation));}else{paramAnnotations.push(annotation);}}Reflect$1.defineMetadata('parameters',paramsAnnotations,fn);return fn;}else{throw new Error('Only Function or Array is supported in Class definition for key \''+key+'\' is \''+stringify(fnOrArray)+'\'');}}/**
   * Provides a way for expressing ES6 classes with parameter annotations in ES5.
   *
   * ## Basic Example
   *
   * ```
   * var Greeter = ng.Class({
   *   constructor: function(name) {
   *     this.name = name;
   *   },
   *
   *   greet: function() {
   *     alert('Hello ' + this.name + '!');
   *   }
   * });
   * ```
   *
   * is equivalent to ES6:
   *
   * ```
   * class Greeter {
   *   constructor(name) {
   *     this.name = name;
   *   }
   *
   *   greet() {
   *     alert('Hello ' + this.name + '!');
   *   }
   * }
   * ```
   *
   * or equivalent to ES5:
   *
   * ```
   * var Greeter = function (name) {
   *   this.name = name;
   * }
   *
   * Greeter.prototype.greet = function () {
   *   alert('Hello ' + this.name + '!');
   * }
   * ```
   *
   * ### Example with parameter annotations
   *
   * ```
   * var MyService = ng.Class({
   *   constructor: [String, [new Query(), QueryList], function(name, queryList) {
   *     ...
   *   }]
   * });
   * ```
   *
   * is equivalent to ES6:
   *
   * ```
   * class MyService {
   *   constructor(name: string, @Query() queryList: QueryList) {
   *     ...
   *   }
   * }
   * ```
   *
   * ### Example with inheritance
   *
   * ```
   * var Shape = ng.Class({
   *   constructor: (color) {
   *     this.color = color;
   *   }
   * });
   *
   * var Square = ng.Class({
   *   extends: Shape,
   *   constructor: function(color, size) {
   *     Shape.call(this, color);
   *     this.size = size;
   *   }
   * });
   * ```
   * @stable
   */function Class(clsDef){var constructor=applyParams(clsDef.hasOwnProperty('constructor')?clsDef.constructor:undefined,'constructor');var proto=constructor.prototype;if(clsDef.hasOwnProperty('extends')){if(isFunction(clsDef.extends)){constructor.prototype=proto=Object.create(clsDef.extends.prototype);}else{throw new Error('Class definition \'extends\' property must be a constructor function was: '+stringify(clsDef.extends));}}for(var key in clsDef){if(key!='extends'&&key!='prototype'&&clsDef.hasOwnProperty(key)){proto[key]=applyParams(clsDef[key],key);}}if(this&&this.annotations instanceof Array){Reflect$1.defineMetadata('annotations',this.annotations,constructor);}if(!constructor['name']){constructor['overriddenName']='class'+_nextClassId++;}return constructor;}var Reflect$1=global$1.Reflect;function makeDecorator(annotationCls/* TODO #9100 */){var chainFn=arguments.length<=1||arguments[1]===undefined?null:arguments[1];function DecoratorFactory(objOrType/** TODO #9100 */){var annotationInstance=new annotationCls(objOrType);if(this instanceof annotationCls){return annotationInstance;}else{var chainAnnotation=isFunction(this)&&this.annotations instanceof Array?this.annotations:[];chainAnnotation.push(annotationInstance);var TypeDecorator=function TypeDecorator(cls/** TODO #9100 */){var annotations=Reflect$1.getOwnMetadata('annotations',cls);annotations=annotations||[];annotations.push(annotationInstance);Reflect$1.defineMetadata('annotations',annotations,cls);return cls;};TypeDecorator.annotations=chainAnnotation;TypeDecorator.Class=Class;if(chainFn)chainFn(TypeDecorator);return TypeDecorator;}}DecoratorFactory.prototype=Object.create(annotationCls.prototype);DecoratorFactory.annotationCls=annotationCls;return DecoratorFactory;}function makeParamDecorator(annotationCls/** TODO #9100 */){function ParamDecoratorFactory()/** TODO #9100 */{var annotationInstance=Object.create(annotationCls.prototype);for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}annotationCls.apply(annotationInstance,args);if(this instanceof annotationCls){return annotationInstance;}else{ParamDecorator.annotation=annotationInstance;return ParamDecorator;}function ParamDecorator(cls/** TODO #9100 */,unusedKey/** TODO #9100 */,index/** TODO #9100 */){var parameters=Reflect$1.getMetadata('parameters',cls);parameters=parameters||[];// there might be gaps if some in between parameters do not have annotations.
// we pad with nulls.
while(parameters.length<=index){parameters.push(null);}parameters[index]=parameters[index]||[];var annotationsForParam=parameters[index];annotationsForParam.push(annotationInstance);Reflect$1.defineMetadata('parameters',parameters,cls);return cls;}}ParamDecoratorFactory.prototype=Object.create(annotationCls.prototype);ParamDecoratorFactory.annotationCls=annotationCls;return ParamDecoratorFactory;}function makePropDecorator(annotationCls/** TODO #9100 */){function PropDecoratorFactory()/** TODO #9100 */{var decoratorInstance=Object.create(annotationCls.prototype);for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}annotationCls.apply(decoratorInstance,args);if(this instanceof annotationCls){return decoratorInstance;}else{return function PropDecorator(target,name){var meta=Reflect$1.getOwnMetadata('propMetadata',target.constructor);meta=meta||{};meta[name]=meta[name]||[];meta[name].unshift(decoratorInstance);Reflect$1.defineMetadata('propMetadata',meta,target.constructor);};}}PropDecoratorFactory.prototype=Object.create(annotationCls.prototype);PropDecoratorFactory.annotationCls=annotationCls;return PropDecoratorFactory;}// TODO(alexeagle): remove the duplication of this doc. It is copied from ComponentMetadata.
/**
   * Declare reusable UI building blocks for an application.
   *
   * Each Angular component requires a single `@Component` annotation. The `@Component`
   * annotation specifies when a component is instantiated, and which properties and hostListeners it
   * binds to.
   *
   * When a component is instantiated, Angular
   * - creates a shadow DOM for the component.
   * - loads the selected template into the shadow DOM.
   * - creates all the injectable objects configured with `providers` and `viewProviders`.
   *
   * All template expressions and statements are then evaluated against the component instance.
   *
   * ## Lifecycle hooks
   *
   * When the component class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
   * are called by the change detection at defined points in time during the life of the component.
   *
   * ### Example
   *
   * {@example core/ts/metadata/metadata.ts region='component'}
   * @stable
   * @Annotation
   */var Component=makeDecorator(ComponentMetadata,function(fn){return fn.View=View;});// TODO(alexeagle): remove the duplication of this doc. It is copied from DirectiveMetadata.
/**
   * Directives allow you to attach behavior to elements in the DOM.
   *
   * {@link DirectiveMetadata}s with an embedded view are called {@link ComponentMetadata}s.
   *
   * A directive consists of a single directive annotation and a controller class. When the
   * directive's `selector` matches
   * elements in the DOM, the following steps occur:
   *
   * 1. For each directive, the `ElementInjector` attempts to resolve the directive's constructor
   * arguments.
   * 2. Angular instantiates directives for each matched element using `ElementInjector` in a
   * depth-first order,
   *    as declared in the HTML.
   *
   * ## Understanding How Injection Works
   *
   * There are three stages of injection resolution.
   * - *Pre-existing Injectors*:
   *   - The terminal {@link Injector} cannot resolve dependencies. It either throws an error or, if
   * the dependency was
   *     specified as `@Optional`, returns `null`.
   *   - The platform injector resolves browser singleton resources, such as: cookies, title,
   * location, and others.
   * - *Component Injectors*: Each component instance has its own {@link Injector}, and they follow
   * the same parent-child hierarchy
   *     as the component instances in the DOM.
   * - *Element Injectors*: Each component instance has a Shadow DOM. Within the Shadow DOM each
   * element has an `ElementInjector`
   *     which follow the same parent-child hierarchy as the DOM elements themselves.
   *
   * When a template is instantiated, it also must instantiate the corresponding directives in a
   * depth-first order. The
   * current `ElementInjector` resolves the constructor dependencies for each directive.
   *
   * Angular then resolves dependencies as follows, according to the order in which they appear in the
   * {@link ViewMetadata}:
   *
   * 1. Dependencies on the current element
   * 2. Dependencies on element injectors and their parents until it encounters a Shadow DOM boundary
   * 3. Dependencies on component injectors and their parents until it encounters the root component
   * 4. Dependencies on pre-existing injectors
   *
   *
   * The `ElementInjector` can inject other directives, element-specific special objects, or it can
   * delegate to the parent
   * injector.
   *
   * To inject other directives, declare the constructor parameter as:
   * - `directive:DirectiveType`: a directive on the current element only
   * - `@Host() directive:DirectiveType`: any directive that matches the type between the current
   * element and the
   *    Shadow DOM root.
   * - `@Query(DirectiveType) query:QueryList<DirectiveType>`: A live collection of direct child
   * directives.
   * - `@QueryDescendants(DirectiveType) query:QueryList<DirectiveType>`: A live collection of any
   * child directives.
   *
   * To inject element-specific special objects, declare the constructor parameter as:
   * - `element: ElementRef` to obtain a reference to logical element in the view.
   * - `viewContainer: ViewContainerRef` to control child template instantiation, for
   * {@link DirectiveMetadata} directives only
   * - `bindingPropagation: BindingPropagation` to control change detection in a more granular way.
   *
   * ### Example
   *
   * The following example demonstrates how dependency injection resolves constructor arguments in
   * practice.
   *
   *
   * Assume this HTML template:
   *
   * ```
   * <div dependency="1">
   *   <div dependency="2">
   *     <div dependency="3" my-directive>
   *       <div dependency="4">
   *         <div dependency="5"></div>
   *       </div>
   *       <div dependency="6"></div>
   *     </div>
   *   </div>
   * </div>
   * ```
   *
   * With the following `dependency` decorator and `SomeService` injectable class.
   *
   * ```
   * @Injectable()
   * class SomeService {
   * }
   *
   * @Directive({
   *   selector: '[dependency]',
   *   inputs: [
   *     'id: dependency'
   *   ]
   * })
   * class Dependency {
   *   id:string;
   * }
   * ```
   *
   * Let's step through the different ways in which `MyDirective` could be declared...
   *
   *
   * ### No injection
   *
   * Here the constructor is declared with no arguments, therefore nothing is injected into
   * `MyDirective`.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor() {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with no dependencies.
   *
   *
   * ### Component-level injection
   *
   * Directives can inject any injectable instance from the closest component injector or any of its
   * parents.
   *
   * Here, the constructor declares a parameter, `someService`, and injects the `SomeService` type
   * from the parent
   * component's injector.
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(someService: SomeService) {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with a dependency on `SomeService`.
   *
   *
   * ### Injecting a directive from the current element
   *
   * Directives can inject other directives declared on the current element.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(dependency: Dependency) {
   *     expect(dependency.id).toEqual(3);
   *   }
   * }
   * ```
   * This directive would be instantiated with `Dependency` declared at the same element, in this case
   * `dependency="3"`.
   *
   * ### Injecting a directive from any ancestor elements
   *
   * Directives can inject other directives declared on any ancestor element (in the current Shadow
   * DOM), i.e. on the current element, the
   * parent element, or its parents.
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(@Host() dependency: Dependency) {
   *     expect(dependency.id).toEqual(2);
   *   }
   * }
   * ```
   *
   * `@Host` checks the current element, the parent, as well as its parents recursively. If
   * `dependency="2"` didn't
   * exist on the direct parent, this injection would
   * have returned
   * `dependency="1"`.
   *
   *
   * ### Injecting a live collection of direct child directives
   *
   *
   * A directive can also query for other child directives. Since parent directives are instantiated
   * before child directives, a directive can't simply inject the list of child directives. Instead,
   * the directive injects a {@link QueryList}, which updates its contents as children are added,
   * removed, or moved by a directive that uses a {@link ViewContainerRef} such as a `ngFor`, an
   * `ngIf`, or an `ngSwitch`.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(@Query(Dependency) dependencies:QueryList<Dependency>) {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with a {@link QueryList} which contains `Dependency` 4 and
   * 6. Here, `Dependency` 5 would not be included, because it is not a direct child.
   *
   * ### Injecting a live collection of descendant directives
   *
   * By passing the descendant flag to `@Query` above, we can include the children of the child
   * elements.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(@Query(Dependency, {descendants: true}) dependencies:QueryList<Dependency>) {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with a Query which would contain `Dependency` 4, 5 and 6.
   *
   * ### Optional injection
   *
   * The normal behavior of directives is to return an error when a specified dependency cannot be
   * resolved. If you
   * would like to inject `null` on unresolved dependency instead, you can annotate that dependency
   * with `@Optional()`.
   * This explicitly permits the author of a template to treat some of the surrounding directives as
   * optional.
   *
   * ```
   * @Directive({ selector: '[my-directive]' })
   * class MyDirective {
   *   constructor(@Optional() dependency:Dependency) {
   *   }
   * }
   * ```
   *
   * This directive would be instantiated with a `Dependency` directive found on the current element.
   * If none can be
   * found, the injector supplies `null` instead of throwing an error.
   *
   * ### Example
   *
   * Here we use a decorator directive to simply define basic tool-tip behavior.
   *
   * ```
   * @Directive({
   *   selector: '[tooltip]',
   *   inputs: [
   *     'text: tooltip'
   *   ],
   *   host: {
   *     '(mouseenter)': 'onMouseEnter()',
   *     '(mouseleave)': 'onMouseLeave()'
   *   }
   * })
   * class Tooltip{
   *   text:string;
   *   overlay:Overlay; // NOT YET IMPLEMENTED
   *   overlayManager:OverlayManager; // NOT YET IMPLEMENTED
   *
   *   constructor(overlayManager:OverlayManager) {
   *     this.overlay = overlay;
   *   }
   *
   *   onMouseEnter() {
   *     // exact signature to be determined
   *     this.overlay = this.overlayManager.open(text, ...);
   *   }
   *
   *   onMouseLeave() {
   *     this.overlay.close();
   *     this.overlay = null;
   *   }
   * }
   * ```
   * In our HTML template, we can then add this behavior to a `<div>` or any other element with the
   * `tooltip` selector,
   * like so:
   *
   * ```
   * <div tooltip="some text here"></div>
   * ```
   *
   * Directives can also control the instantiation, destruction, and positioning of inline template
   * elements:
   *
   * A directive uses a {@link ViewContainerRef} to instantiate, insert, move, and destroy views at
   * runtime.
   * The {@link ViewContainerRef} is created as a result of `<template>` element, and represents a
   * location in the current view
   * where these actions are performed.
   *
   * Views are always created as children of the current {@link ViewMetadata}, and as siblings of the
   * `<template>` element. Thus a
   * directive in a child view cannot inject the directive that created it.
   *
   * Since directives that create views via ViewContainers are common in Angular, and using the full
   * `<template>` element syntax is wordy, Angular
   * also supports a shorthand notation: `<li *foo="bar">` and `<li template="foo: bar">` are
   * equivalent.
   *
   * Thus,
   *
   * ```
   * <ul>
   *   <li *foo="bar" title="text"></li>
   * </ul>
   * ```
   *
   * Expands in use to:
   *
   * ```
   * <ul>
   *   <template [foo]="bar">
   *     <li title="text"></li>
   *   </template>
   * </ul>
   * ```
   *
   * Notice that although the shorthand places `*foo="bar"` within the `<li>` element, the binding for
   * the directive
   * controller is correctly instantiated on the `<template>` element rather than the `<li>` element.
   *
   * ## Lifecycle hooks
   *
   * When the directive class implements some {@link ../../guide/lifecycle-hooks.html} the callbacks
   * are called by the change detection at defined points in time during the life of the directive.
   *
   * ### Example
   *
   * Let's suppose we want to implement the `unless` behavior, to conditionally include a template.
   *
   * Here is a simple directive that triggers on an `unless` selector:
   *
   * ```
   * @Directive({
   *   selector: '[unless]',
   *   inputs: ['unless']
   * })
   * export class Unless {
   *   viewContainer: ViewContainerRef;
   *   templateRef: TemplateRef;
   *   prevCondition: boolean;
   *
   *   constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef) {
   *     this.viewContainer = viewContainer;
   *     this.templateRef = templateRef;
   *     this.prevCondition = null;
   *   }
   *
   *   set unless(newCondition) {
   *     if (newCondition && (isBlank(this.prevCondition) || !this.prevCondition)) {
   *       this.prevCondition = true;
   *       this.viewContainer.clear();
   *     } else if (!newCondition && (isBlank(this.prevCondition) || this.prevCondition)) {
   *       this.prevCondition = false;
   *       this.viewContainer.create(this.templateRef);
   *     }
   *   }
   * }
   * ```
   *
   * We can then use this `unless` selector in a template:
   * ```
   * <ul>
   *   <li *unless="expr"></li>
   * </ul>
   * ```
   *
   * Once the directive instantiates the child view, the shorthand notation for the template expands
   * and the result is:
   *
   * ```
   * <ul>
   *   <template [unless]="exp">
   *     <li></li>
   *   </template>
   *   <li></li>
   * </ul>
   * ```
   *
   * Note also that although the `<li></li>` template still exists inside the `<template></template>`,
   * the instantiated
   * view occurs on the second `<li></li>` which is a sibling to the `<template>` element.
   * @stable
   * @Annotation
   */var Directive=makeDecorator(DirectiveMetadata);// TODO(alexeagle): remove the duplication of this doc. It is copied from ViewMetadata.
/**
   * Metadata properties available for configuring Views.
   *
   * Each Angular component requires a single `@Component` and at least one `@View` annotation. The
   * `@View` annotation specifies the HTML template to use, and lists the directives that are active
   * within the template.
   *
   * When a component is instantiated, the template is loaded into the component's shadow root, and
   * the expressions and statements in the template are evaluated against the component.
   *
   * For details on the `@Component` annotation, see {@link ComponentMetadata}.
   *
   * ### Example
   *
   * ```
   * @Component({
   *   selector: 'greet',
   *   template: 'Hello {{name}}!',
   *   directives: [GreetUser, Bold]
   * })
   * class Greet {
   *   name: string;
   *
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   * ```
   * @deprecated
   * @Annotation
   */var View=makeDecorator(ViewMetadata,function(fn){return fn.View=View;});/**
   * Specifies that a constant attribute value should be injected.
   *
   * The directive can inject constant string literals of host element attributes.
   *
   * ### Example
   *
   * Suppose we have an `<input>` element and want to know its `type`.
   *
   * ```html
   * <input type="text">
   * ```
   *
   * A decorator can inject string literal `text` like so:
   *
   * {@example core/ts/metadata/metadata.ts region='attributeMetadata'}
   * @stable
   * @Annotation
   */var Attribute=makeParamDecorator(AttributeMetadata);// TODO(alexeagle): remove the duplication of this doc. It is copied from InputMetadata.
/**
   * Declares a data-bound input property.
   *
   * Angular automatically updates data-bound properties during change detection.
   *
   * `InputMetadata` takes an optional parameter that specifies the name
   * used when instantiating a component in the template. When not provided,
   * the name of the decorated property is used.
   *
   * ### Example
   *
   * The following example creates a component with two input properties.
   *
   * ```typescript
   * @Component({
   *   selector: 'bank-account',
   *   template: `
   *     Bank Name: {{bankName}}
   *     Account Id: {{id}}
   *   `
   * })
   * class BankAccount {
   *   @Input() bankName: string;
   *   @Input('account-id') id: string;
   *
   *   // this property is not bound, and won't be automatically updated by Angular
   *   normalizedBankName: string;
   * }
   *
   * @Component({
   *   selector: 'app',
   *   template: `
   *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
   *   `,
   *   directives: [BankAccount]
   * })
   * class App {}
   *
   * bootstrap(App);
   * ```
   * @stable
   * @Annotation
   */var Input=makePropDecorator(InputMetadata);/**
   * Factory for creating {@link InjectMetadata}.
   * @stable
   * @Annotation
   */var Inject=makeParamDecorator(InjectMetadata);/**
   * Factory for creating {@link OptionalMetadata}.
   * @stable
   * @Annotation
   */var Optional=makeParamDecorator(OptionalMetadata);/**
   * Factory for creating {@link InjectableMetadata}.
   * @stable
   * @Annotation
   */var Injectable=makeDecorator(InjectableMetadata);/**
   * Factory for creating {@link SelfMetadata}.
   * @stable
   * @Annotation
   */var Self=makeParamDecorator(SelfMetadata);/**
   * Factory for creating {@link HostMetadata}.
   * @stable
   * @Annotation
   */var Host=makeParamDecorator(HostMetadata);/**
   * Factory for creating {@link SkipSelfMetadata}.
   * @stable
   * @Annotation
   */var SkipSelf=makeParamDecorator(SkipSelfMetadata);/**
   * A base class for the WrappedException that can be used to identify
   * a WrappedException from ExceptionHandler without adding circular
   * dependency.
   */var BaseWrappedException=function(_Error){_inherits(BaseWrappedException,_Error);function BaseWrappedException(message){_classCallCheck(this,BaseWrappedException);return _possibleConstructorReturn(this,Object.getPrototypeOf(BaseWrappedException).call(this,message));}_createClass(BaseWrappedException,[{key:'wrapperMessage',get:function get(){return'';}},{key:'wrapperStack',get:function get(){return null;}},{key:'originalException',get:function get(){return null;}},{key:'originalStack',get:function get(){return null;}},{key:'context',get:function get(){return null;}},{key:'message',get:function get(){return'';}}]);return BaseWrappedException;}(Error);var Map$1=global$1.Map;var Set$1=global$1.Set;// Safari and Internet Explorer do not support the iterable parameter to the
// Map constructor.  We work around that by manually adding the items.
var createMapFromPairs=function(){try{if(new Map$1([[1,2]]).size===1){return function createMapFromPairs(pairs){return new Map$1(pairs);};}}catch(e){}return function createMapAndPopulateFromPairs(pairs){var map=new Map$1();for(var i=0;i<pairs.length;i++){var pair=pairs[i];map.set(pair[0],pair[1]);}return map;};}();var createMapFromMap=function(){try{if(new Map$1(new Map$1())){return function createMapFromMap(m){return new Map$1(m);};}}catch(e){}return function createMapAndPopulateFromMap(m){var map=new Map$1();m.forEach(function(v,k){map.set(k,v);});return map;};}();var _clearValues=function(){if(new Map$1().keys().next){return function _clearValues(m){var keyIterator=m.keys();var k;while(!(k=keyIterator.next()).done){m.set(k.value,null);}};}else{return function _clearValuesWithForeEach(m){m.forEach(function(v,k){m.set(k,null);});};}}();// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
var _arrayFromMap=function(){try{if(new Map$1().values().next){return function createArrayFromMap(m,getValues){return getValues?Array.from(m.values()):Array.from(m.keys());};}}catch(e){}return function createArrayFromMapWithForeach(m,getValues){var res=ListWrapper.createFixedSize(m.size),i=0;m.forEach(function(v,k){res[i]=getValues?v:k;i++;});return res;};}();var MapWrapper=function(){function MapWrapper(){_classCallCheck(this,MapWrapper);}_createClass(MapWrapper,null,[{key:'clone',value:function clone(m){return createMapFromMap(m);}},{key:'createFromStringMap',value:function createFromStringMap(stringMap){var result=new Map$1();for(var prop in stringMap){result.set(prop,stringMap[prop]);}return result;}},{key:'toStringMap',value:function toStringMap(m){var r={};m.forEach(function(v,k){return r[k]=v;});return r;}},{key:'createFromPairs',value:function createFromPairs(pairs){return createMapFromPairs(pairs);}},{key:'clearValues',value:function clearValues(m){_clearValues(m);}},{key:'iterable',value:function iterable(m){return m;}},{key:'keys',value:function keys(m){return _arrayFromMap(m,false);}},{key:'values',value:function values(m){return _arrayFromMap(m,true);}}]);return MapWrapper;}();/**
   * Wraps Javascript Objects
   */var StringMapWrapper=function(){function StringMapWrapper(){_classCallCheck(this,StringMapWrapper);}_createClass(StringMapWrapper,null,[{key:'create',value:function create(){// Note: We are not using Object.create(null) here due to
// performance!
// http://jsperf.com/ng2-object-create-null
return{};}},{key:'contains',value:function contains(map,key){return map.hasOwnProperty(key);}},{key:'get',value:function get(map,key){return map.hasOwnProperty(key)?map[key]:undefined;}},{key:'set',value:function set(map,key,value){map[key]=value;}},{key:'keys',value:function keys(map){return Object.keys(map);}},{key:'values',value:function values(map){return Object.keys(map).reduce(function(r,a){r.push(map[a]);return r;},[]);}},{key:'isEmpty',value:function isEmpty(map){for(var prop in map){return false;}return true;}},{key:'delete',value:function _delete(map,key){delete map[key];}},{key:'forEach',value:function forEach(map,callback){for(var prop in map){if(map.hasOwnProperty(prop)){callback(map[prop],prop);}}}},{key:'merge',value:function merge(m1,m2){var m={};for(var attr in m1){if(m1.hasOwnProperty(attr)){m[attr]=m1[attr];}}for(var attr in m2){if(m2.hasOwnProperty(attr)){m[attr]=m2[attr];}}return m;}},{key:'equals',value:function equals(m1,m2){var k1=Object.keys(m1);var k2=Object.keys(m2);if(k1.length!=k2.length){return false;}var key;for(var i=0;i<k1.length;i++){key=k1[i];if(m1[key]!==m2[key]){return false;}}return true;}}]);return StringMapWrapper;}();var ListWrapper=function(){function ListWrapper(){_classCallCheck(this,ListWrapper);}_createClass(ListWrapper,null,[{key:'createFixedSize',// JS has no way to express a statically fixed size list, but dart does so we
// keep both methods.
value:function createFixedSize(size){return new Array(size);}},{key:'createGrowableSize',value:function createGrowableSize(size){return new Array(size);}},{key:'clone',value:function clone(array){return array.slice(0);}},{key:'forEachWithIndex',value:function forEachWithIndex(array,fn){for(var i=0;i<array.length;i++){fn(array[i],i);}}},{key:'first',value:function first(array){if(!array)return null;return array[0];}},{key:'last',value:function last(array){if(!array||array.length==0)return null;return array[array.length-1];}},{key:'indexOf',value:function indexOf(array,value){var startIndex=arguments.length<=2||arguments[2]===undefined?0:arguments[2];return array.indexOf(value,startIndex);}},{key:'contains',value:function contains(list,el){return list.indexOf(el)!==-1;}},{key:'reversed',value:function reversed(array){var a=ListWrapper.clone(array);return a.reverse();}},{key:'concat',value:function concat(a,b){return a.concat(b);}},{key:'insert',value:function insert(list,index,value){list.splice(index,0,value);}},{key:'removeAt',value:function removeAt(list,index){var res=list[index];list.splice(index,1);return res;}},{key:'removeAll',value:function removeAll(list,items){for(var i=0;i<items.length;++i){var index=list.indexOf(items[i]);list.splice(index,1);}}},{key:'remove',value:function remove(list,el){var index=list.indexOf(el);if(index>-1){list.splice(index,1);return true;}return false;}},{key:'clear',value:function clear(list){list.length=0;}},{key:'isEmpty',value:function isEmpty(list){return list.length==0;}},{key:'fill',value:function fill(list,value){var start=arguments.length<=2||arguments[2]===undefined?0:arguments[2];var end=arguments.length<=3||arguments[3]===undefined?null:arguments[3];list.fill(value,start,end===null?list.length:end);}},{key:'equals',value:function equals(a,b){if(a.length!=b.length)return false;for(var i=0;i<a.length;++i){if(a[i]!==b[i])return false;}return true;}},{key:'slice',value:function slice(l){var from=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var to=arguments.length<=2||arguments[2]===undefined?null:arguments[2];return l.slice(from,to===null?undefined:to);}},{key:'splice',value:function splice(l,from,length){return l.splice(from,length);}},{key:'sort',value:function sort(l,compareFn){if(isPresent(compareFn)){l.sort(compareFn);}else{l.sort();}}},{key:'toString',value:function toString(l){return l.toString();}},{key:'toJSON',value:function toJSON(l){return JSON.stringify(l);}},{key:'maximum',value:function maximum(list,predicate){if(list.length==0){return null;}var solution=null;var maxValue=-Infinity;for(var index=0;index<list.length;index++){var candidate=list[index];if(isBlank(candidate)){continue;}var candidateValue=predicate(candidate);if(candidateValue>maxValue){solution=candidate;maxValue=candidateValue;}}return solution;}},{key:'flatten',value:function flatten(list){var target=[];_flattenArray(list,target);return target;}},{key:'addAll',value:function addAll(list,source){for(var i=0;i<source.length;i++){list.push(source[i]);}}}]);return ListWrapper;}();function _flattenArray(source,target){if(isPresent(source)){for(var i=0;i<source.length;i++){var item=source[i];if(isArray(item)){_flattenArray(item,target);}else{target.push(item);}}}return target;}function isListLikeIterable(obj){if(!isJsObject(obj))return false;return isArray(obj)||!(obj instanceof Map$1)&&getSymbolIterator()in obj;// JS Iterable have a Symbol.iterator prop
}function areIterablesEqual(a,b,comparator){var iterator1=a[getSymbolIterator()]();var iterator2=b[getSymbolIterator()]();while(true){var item1=iterator1.next();var item2=iterator2.next();if(item1.done&&item2.done)return true;if(item1.done||item2.done)return false;if(!comparator(item1.value,item2.value))return false;}}function iterateListLike(obj,fn){if(isArray(obj)){for(var i=0;i<obj.length;i++){fn(obj[i]);}}else{var iterator=obj[getSymbolIterator()]();var item;while(!(item=iterator.next()).done){fn(item.value);}}}// Safari and Internet Explorer do not support the iterable parameter to the
// Set constructor.  We work around that by manually adding the items.
var createSetFromList=function(){var test=new Set$1([1,2,3]);if(test.size===3){return function createSetFromList(lst){return new Set$1(lst);};}else{return function createSetAndPopulateFromList(lst){var res=new Set$1(lst);if(res.size!==lst.length){for(var i=0;i<lst.length;i++){res.add(lst[i]);}}return res;};}}();var SetWrapper=function(){function SetWrapper(){_classCallCheck(this,SetWrapper);}_createClass(SetWrapper,null,[{key:'createFromList',value:function createFromList(lst){return createSetFromList(lst);}},{key:'has',value:function has(s,key){return s.has(key);}},{key:'delete',value:function _delete(m,k){m.delete(k);}}]);return SetWrapper;}();var _ArrayLogger=function(){function _ArrayLogger(){_classCallCheck(this,_ArrayLogger);this.res=[];}_createClass(_ArrayLogger,[{key:'log',value:function log(s){this.res.push(s);}},{key:'logError',value:function logError(s){this.res.push(s);}},{key:'logGroup',value:function logGroup(s){this.res.push(s);}},{key:'logGroupEnd',value:function logGroupEnd(){}}]);return _ArrayLogger;}();/**
   * Provides a hook for centralized exception handling.
   *
   * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
   * intercept error handling,
   * write a custom exception handler that replaces this default as appropriate for your app.
   *
   * ### Example
   *
   * ```javascript
   *
   * class MyExceptionHandler implements ExceptionHandler {
   *   call(error, stackTrace = null, reason = null) {
   *     // do something with the exception
   *   }
   * }
   *
   * bootstrap(MyApp, {provide: ExceptionHandler, useClass: MyExceptionHandler}])
   *
   * ```
   * @stable
   */var ExceptionHandler=function(){function ExceptionHandler(_logger){var _rethrowException=arguments.length<=1||arguments[1]===undefined?true:arguments[1];_classCallCheck(this,ExceptionHandler);this._logger=_logger;this._rethrowException=_rethrowException;}_createClass(ExceptionHandler,[{key:'call',value:function call(exception){var stackTrace=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var reason=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var originalException=this._findOriginalException(exception);var originalStack=this._findOriginalStack(exception);var context=this._findContext(exception);this._logger.logGroup('EXCEPTION: '+this._extractMessage(exception));if(isPresent(stackTrace)&&isBlank(originalStack)){this._logger.logError('STACKTRACE:');this._logger.logError(this._longStackTrace(stackTrace));}if(isPresent(reason)){this._logger.logError('REASON: '+reason);}if(isPresent(originalException)){this._logger.logError('ORIGINAL EXCEPTION: '+this._extractMessage(originalException));}if(isPresent(originalStack)){this._logger.logError('ORIGINAL STACKTRACE:');this._logger.logError(this._longStackTrace(originalStack));}if(isPresent(context)){this._logger.logError('ERROR CONTEXT:');this._logger.logError(context);}this._logger.logGroupEnd();// We rethrow exceptions, so operations like 'bootstrap' will result in an error
// when an exception happens. If we do not rethrow, bootstrap will always succeed.
if(this._rethrowException)throw exception;}/** @internal */},{key:'_extractMessage',value:function _extractMessage(exception){return exception instanceof BaseWrappedException?exception.wrapperMessage:exception.toString();}/** @internal */},{key:'_longStackTrace',value:function _longStackTrace(stackTrace){return isListLikeIterable(stackTrace)?stackTrace.join('\n\n-----async gap-----\n'):stackTrace.toString();}/** @internal */},{key:'_findContext',value:function _findContext(exception){try{if(!(exception instanceof BaseWrappedException))return null;return isPresent(exception.context)?exception.context:this._findContext(exception.originalException);}catch(e){// exception.context can throw an exception. if it happens, we ignore the context.
return null;}}/** @internal */},{key:'_findOriginalException',value:function _findOriginalException(exception){if(!(exception instanceof BaseWrappedException))return null;var e=exception.originalException;while(e instanceof BaseWrappedException&&isPresent(e.originalException)){e=e.originalException;}return e;}/** @internal */},{key:'_findOriginalStack',value:function _findOriginalStack(exception){if(!(exception instanceof BaseWrappedException))return null;var e=exception;var stack=exception.originalStack;while(e instanceof BaseWrappedException&&isPresent(e.originalException)){e=e.originalException;if(e instanceof BaseWrappedException&&isPresent(e.originalException)){stack=e.originalStack;}}return stack;}}],[{key:'exceptionToString',value:function exceptionToString(exception){var stackTrace=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var reason=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var l=new _ArrayLogger();var e=new ExceptionHandler(l,false);e.call(exception,stackTrace,reason);return l.res.join('\n');}}]);return ExceptionHandler;}();/**
   * @stable
   */var BaseException=function(_Error2){_inherits(BaseException,_Error2);function BaseException(){var message=arguments.length<=0||arguments[0]===undefined?'--':arguments[0];_classCallCheck(this,BaseException);var _this5=_possibleConstructorReturn(this,Object.getPrototypeOf(BaseException).call(this,message));_this5.message=message;_this5.stack=new Error(message).stack;return _this5;}_createClass(BaseException,[{key:'toString',value:function toString(){return this.message;}}]);return BaseException;}(Error);/**
   * Wraps an exception and provides additional context or information.
   * @stable
   */var WrappedException=function(_BaseWrappedException){_inherits(WrappedException,_BaseWrappedException);function WrappedException(_wrapperMessage,_originalException/** TODO #9100 */,_originalStack/** TODO #9100 */,_context/** TODO #9100 */){_classCallCheck(this,WrappedException);var _this6=_possibleConstructorReturn(this,Object.getPrototypeOf(WrappedException).call(this,_wrapperMessage));_this6._wrapperMessage=_wrapperMessage;_this6._originalException=_originalException;_this6._originalStack=_originalStack;_this6._context=_context;_this6._wrapperStack=new Error(_wrapperMessage).stack;return _this6;}_createClass(WrappedException,[{key:'toString',value:function toString(){return this.message;}},{key:'wrapperMessage',get:function get(){return this._wrapperMessage;}},{key:'wrapperStack',get:function get(){return this._wrapperStack;}},{key:'originalException',get:function get(){return this._originalException;}},{key:'originalStack',get:function get(){return this._originalStack;}},{key:'context',get:function get(){return this._context;}},{key:'message',get:function get(){return ExceptionHandler.exceptionToString(this);}}]);return WrappedException;}(BaseWrappedException);function unimplemented(){throw new BaseException('unimplemented');}var _THROW_IF_NOT_FOUND=new Object();var THROW_IF_NOT_FOUND=_THROW_IF_NOT_FOUND;/**
   * @stable
   */var Injector=function(){function Injector(){_classCallCheck(this,Injector);}_createClass(Injector,[{key:'get',/**
       * Retrieves an instance from the injector based on the provided token.
       * If not found:
       * - Throws {@link NoProviderError} if no `notFoundValue` that is not equal to
       * Injector.THROW_IF_NOT_FOUND is given
       * - Returns the `notFoundValue` otherwise
       *
       * ### Example ([live demo](http://plnkr.co/edit/HeXSHg?p=preview))
       *
       * ```typescript
       * var injector = ReflectiveInjector.resolveAndCreate([
       *   {provide: "validToken", useValue: "Value"}
       * ]);
       * expect(injector.get("validToken")).toEqual("Value");
       * expect(() => injector.get("invalidToken")).toThrowError();
       * ```
       *
       * `Injector` returns itself when given `Injector` as a token.
       *
       * ```typescript
       * var injector = ReflectiveInjector.resolveAndCreate([]);
       * expect(injector.get(Injector)).toBe(injector);
       * ```
       */value:function get(token,notFoundValue){return unimplemented();}}]);return Injector;}();Injector.THROW_IF_NOT_FOUND=_THROW_IF_NOT_FOUND;function findFirstClosedCycle(keys){var res=[];for(var i=0;i<keys.length;++i){if(ListWrapper.contains(res,keys[i])){res.push(keys[i]);return res;}else{res.push(keys[i]);}}return res;}function constructResolvingPath(keys){if(keys.length>1){var reversed=findFirstClosedCycle(ListWrapper.reversed(keys));var tokenStrs=reversed.map(function(k){return stringify(k.token);});return' ('+tokenStrs.join(' -> ')+')';}else{return'';}}/**
   * Base class for all errors arising from misconfigured providers.
   * @stable
   */var AbstractProviderError=function(_BaseException){_inherits(AbstractProviderError,_BaseException);function AbstractProviderError(injector,key,constructResolvingMessage){_classCallCheck(this,AbstractProviderError);var _this7=_possibleConstructorReturn(this,Object.getPrototypeOf(AbstractProviderError).call(this,'DI Exception'));_this7.keys=[key];_this7.injectors=[injector];_this7.constructResolvingMessage=constructResolvingMessage;_this7.message=_this7.constructResolvingMessage(_this7.keys);return _this7;}_createClass(AbstractProviderError,[{key:'addKey',value:function addKey(injector,key){this.injectors.push(injector);this.keys.push(key);this.message=this.constructResolvingMessage(this.keys);}},{key:'context',get:function get(){return this.injectors[this.injectors.length-1].debugContext();}}]);return AbstractProviderError;}(BaseException);/**
   * Thrown when trying to retrieve a dependency by `Key` from {@link Injector}, but the
   * {@link Injector} does not have a {@link Provider} for {@link Key}.
   *
   * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
   *
   * ```typescript
   * class A {
   *   constructor(b:B) {}
   * }
   *
   * expect(() => Injector.resolveAndCreate([A])).toThrowError();
   * ```
   * @stable
   */var NoProviderError=function(_AbstractProviderErro){_inherits(NoProviderError,_AbstractProviderErro);function NoProviderError(injector,key){_classCallCheck(this,NoProviderError);return _possibleConstructorReturn(this,Object.getPrototypeOf(NoProviderError).call(this,injector,key,function(keys){var first=stringify(ListWrapper.first(keys).token);return'No provider for '+first+'!'+constructResolvingPath(keys);}));}return NoProviderError;}(AbstractProviderError);/**
   * Thrown when dependencies form a cycle.
   *
   * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
   *
   * ```typescript
   * var injector = Injector.resolveAndCreate([
   *   {provide: "one", useFactory: (two) => "two", deps: [[new Inject("two")]]},
   *   {provide: "two", useFactory: (one) => "one", deps: [[new Inject("one")]]}
   * ]);
   *
   * expect(() => injector.get("one")).toThrowError();
   * ```
   *
   * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
   * @stable
   */var CyclicDependencyError=function(_AbstractProviderErro2){_inherits(CyclicDependencyError,_AbstractProviderErro2);function CyclicDependencyError(injector,key){_classCallCheck(this,CyclicDependencyError);return _possibleConstructorReturn(this,Object.getPrototypeOf(CyclicDependencyError).call(this,injector,key,function(keys){return'Cannot instantiate cyclic dependency!'+constructResolvingPath(keys);}));}return CyclicDependencyError;}(AbstractProviderError);/**
   * Thrown when a constructing type returns with an Error.
   *
   * The `InstantiationError` class contains the original error plus the dependency graph which caused
   * this object to be instantiated.
   *
   * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
   *
   * ```typescript
   * class A {
   *   constructor() {
   *     throw new Error('message');
   *   }
   * }
   *
   * var injector = Injector.resolveAndCreate([A]);

   * try {
   *   injector.get(A);
   * } catch (e) {
   *   expect(e instanceof InstantiationError).toBe(true);
   *   expect(e.originalException.message).toEqual("message");
   *   expect(e.originalStack).toBeDefined();
   * }
   * ```
   * @stable
   */var InstantiationError=function(_WrappedException){_inherits(InstantiationError,_WrappedException);function InstantiationError(injector,originalException/** TODO #9100 */,originalStack/** TODO #9100 */,key){_classCallCheck(this,InstantiationError);var _this10=_possibleConstructorReturn(this,Object.getPrototypeOf(InstantiationError).call(this,'DI Exception',originalException,originalStack,null));_this10.keys=[key];_this10.injectors=[injector];return _this10;}_createClass(InstantiationError,[{key:'addKey',value:function addKey(injector,key){this.injectors.push(injector);this.keys.push(key);}},{key:'wrapperMessage',get:function get(){var first=stringify(ListWrapper.first(this.keys).token);return'Error during instantiation of '+first+'!'+constructResolvingPath(this.keys)+'.';}},{key:'causeKey',get:function get(){return this.keys[0];}},{key:'context',get:function get(){return this.injectors[this.injectors.length-1].debugContext();}}]);return InstantiationError;}(WrappedException);/**
   * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
   * creation.
   *
   * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
   *
   * ```typescript
   * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
   * ```
   * @stable
   */var InvalidProviderError=function(_BaseException2){_inherits(InvalidProviderError,_BaseException2);function InvalidProviderError(provider/** TODO #9100 */){_classCallCheck(this,InvalidProviderError);return _possibleConstructorReturn(this,Object.getPrototypeOf(InvalidProviderError).call(this,'Invalid provider - only instances of Provider and Type are allowed, got: '+provider));}return InvalidProviderError;}(BaseException);/**
   * Thrown when the class has no annotation information.
   *
   * Lack of annotation information prevents the {@link Injector} from determining which dependencies
   * need to be injected into the constructor.
   *
   * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
   *
   * ```typescript
   * class A {
   *   constructor(b) {}
   * }
   *
   * expect(() => Injector.resolveAndCreate([A])).toThrowError();
   * ```
   *
   * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
   *
   * ```typescript
   * class B {}
   *
   * class A {
   *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
   * }
   *
   * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
   * ```
   * @stable
   */var NoAnnotationError=function(_BaseException3){_inherits(NoAnnotationError,_BaseException3);function NoAnnotationError(typeOrFunc/** TODO #9100 */,params){_classCallCheck(this,NoAnnotationError);return _possibleConstructorReturn(this,Object.getPrototypeOf(NoAnnotationError).call(this,NoAnnotationError._genMessage(typeOrFunc,params)));}_createClass(NoAnnotationError,null,[{key:'_genMessage',value:function _genMessage(typeOrFunc/** TODO #9100 */,params){var signature=[];for(var i=0,ii=params.length;i<ii;i++){var parameter=params[i];if(isBlank(parameter)||parameter.length==0){signature.push('?');}else{signature.push(parameter.map(stringify).join(' '));}}return'Cannot resolve all parameters for \''+stringify(typeOrFunc)+'\'('+signature.join(', ')+'). '+'Make sure that all the parameters are decorated with Inject or have valid type annotations and that \''+stringify(typeOrFunc)+'\' is decorated with Injectable.';}}]);return NoAnnotationError;}(BaseException);/**
   * Thrown when getting an object by index.
   *
   * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
   *
   * ```typescript
   * class A {}
   *
   * var injector = Injector.resolveAndCreate([A]);
   *
   * expect(() => injector.getAt(100)).toThrowError();
   * ```
   * @stable
   */var OutOfBoundsError=function(_BaseException4){_inherits(OutOfBoundsError,_BaseException4);function OutOfBoundsError(index/** TODO #9100 */){_classCallCheck(this,OutOfBoundsError);return _possibleConstructorReturn(this,Object.getPrototypeOf(OutOfBoundsError).call(this,'Index '+index+' is out-of-bounds.'));}return OutOfBoundsError;}(BaseException);// TODO: add a working example after alpha38 is released
/**
   * Thrown when a multi provider and a regular provider are bound to the same token.
   *
   * ### Example
   *
   * ```typescript
   * expect(() => Injector.resolveAndCreate([
   *   new Provider("Strings", {useValue: "string1", multi: true}),
   *   new Provider("Strings", {useValue: "string2", multi: false})
   * ])).toThrowError();
   * ```
   */var MixingMultiProvidersWithRegularProvidersError=function(_BaseException5){_inherits(MixingMultiProvidersWithRegularProvidersError,_BaseException5);function MixingMultiProvidersWithRegularProvidersError(provider1/** TODO #9100 */,provider2/** TODO #9100 */){_classCallCheck(this,MixingMultiProvidersWithRegularProvidersError);return _possibleConstructorReturn(this,Object.getPrototypeOf(MixingMultiProvidersWithRegularProvidersError).call(this,'Cannot mix multi providers and regular providers, got: '+provider1.toString()+' '+provider2.toString()));}return MixingMultiProvidersWithRegularProvidersError;}(BaseException);/**
   * A unique object used for retrieving items from the {@link ReflectiveInjector}.
   *
   * Keys have:
   * - a system-wide unique `id`.
   * - a `token`.
   *
   * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
   * the
   * injector to store created objects in a more efficient way.
   *
   * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
   * resolving
   * providers.
   * @experimental
   */var ReflectiveKey=function(){/**
       * Private
       */function ReflectiveKey(token,id){_classCallCheck(this,ReflectiveKey);this.token=token;this.id=id;if(isBlank(token)){throw new BaseException('Token must be defined!');}}/**
       * Returns a stringified token.
       */_createClass(ReflectiveKey,[{key:'displayName',get:function get(){return stringify(this.token);}/**
       * Retrieves a `Key` for a token.
       */}],[{key:'get',value:function get(token){return _globalKeyRegistry.get(resolveForwardRef(token));}/**
       * @returns the number of keys registered in the system.
       */},{key:'numberOfKeys',get:function get(){return _globalKeyRegistry.numberOfKeys;}}]);return ReflectiveKey;}();/**
   * @internal
   */var KeyRegistry=function(){function KeyRegistry(){_classCallCheck(this,KeyRegistry);this._allKeys=new Map();}_createClass(KeyRegistry,[{key:'get',value:function get(token){if(token instanceof ReflectiveKey)return token;if(this._allKeys.has(token)){return this._allKeys.get(token);}var newKey=new ReflectiveKey(token,ReflectiveKey.numberOfKeys);this._allKeys.set(token,newKey);return newKey;}},{key:'numberOfKeys',get:function get(){return this._allKeys.size;}}]);return KeyRegistry;}();var _globalKeyRegistry=new KeyRegistry();var ReflectionCapabilities=function(){function ReflectionCapabilities(reflect){_classCallCheck(this,ReflectionCapabilities);this._reflect=isPresent(reflect)?reflect:global$1.Reflect;}_createClass(ReflectionCapabilities,[{key:'isReflectionEnabled',value:function isReflectionEnabled(){return true;}},{key:'factory',value:function factory(t){switch(t.length){case 0:return function(){return new t();};case 1:return function(a1){return new t(a1);};case 2:return function(a1,a2){return new t(a1,a2);};case 3:return function(a1,a2,a3){return new t(a1,a2,a3);};case 4:return function(a1,a2,a3,a4){return new t(a1,a2,a3,a4);};case 5:return function(a1,a2,a3,a4,a5){return new t(a1,a2,a3,a4,a5);};case 6:return function(a1,a2,a3,a4,a5,a6){return new t(a1,a2,a3,a4,a5,a6);};case 7:return function(a1,a2,a3,a4,a5,a6,a7){return new t(a1,a2,a3,a4,a5,a6,a7);};case 8:return function(a1,a2,a3,a4,a5,a6,a7,a8){return new t(a1,a2,a3,a4,a5,a6,a7,a8);};case 9:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9);};case 10:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);};case 11:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);};case 12:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);};case 13:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13);};case 14:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14);};case 15:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15);};case 16:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16);};case 17:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17);};case 18:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18);};case 19:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19);};case 20:return function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20){return new t(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20);};};throw new Error('Cannot create a factory for \''+stringify(t)+'\' because its constructor has more than 20 arguments');}/** @internal */},{key:'_zipTypesAndAnnotations',value:function _zipTypesAndAnnotations(paramTypes/** TODO #9100 */,paramAnnotations/** TODO #9100 */){var result;if(typeof paramTypes==='undefined'){result=new Array(paramAnnotations.length);}else{result=new Array(paramTypes.length);}for(var i=0;i<result.length;i++){// TS outputs Object for parameters without types, while Traceur omits
// the annotations. For now we preserve the Traceur behavior to aid
// migration, but this can be revisited.
if(typeof paramTypes==='undefined'){result[i]=[];}else if(paramTypes[i]!=Object){result[i]=[paramTypes[i]];}else{result[i]=[];}if(isPresent(paramAnnotations)&&isPresent(paramAnnotations[i])){result[i]=result[i].concat(paramAnnotations[i]);}}return result;}},{key:'parameters',value:function parameters(typeOrFunc){// Prefer the direct API.
if(isPresent(typeOrFunc.parameters)){return typeOrFunc.parameters;}// API of tsickle for lowering decorators to properties on the class.
if(isPresent(typeOrFunc.ctorParameters)){var ctorParameters=typeOrFunc.ctorParameters;var _paramTypes=ctorParameters.map(function(ctorParam/** TODO #9100 */){return ctorParam&&ctorParam.type;});var _paramAnnotations=ctorParameters.map(function(ctorParam/** TODO #9100 */){return ctorParam&&convertTsickleDecoratorIntoMetadata(ctorParam.decorators);});return this._zipTypesAndAnnotations(_paramTypes,_paramAnnotations);}// API for metadata created by invoking the decorators.
if(isPresent(this._reflect)&&isPresent(this._reflect.getMetadata)){var paramAnnotations=this._reflect.getMetadata('parameters',typeOrFunc);var paramTypes=this._reflect.getMetadata('design:paramtypes',typeOrFunc);if(isPresent(paramTypes)||isPresent(paramAnnotations)){return this._zipTypesAndAnnotations(paramTypes,paramAnnotations);}}// The array has to be filled with `undefined` because holes would be skipped by `some`
var parameters=new Array(typeOrFunc.length);parameters.fill(undefined);return parameters;}},{key:'annotations',value:function annotations(typeOrFunc){// Prefer the direct API.
if(isPresent(typeOrFunc.annotations)){var annotations=typeOrFunc.annotations;if(isFunction(annotations)&&annotations.annotations){annotations=annotations.annotations;}return annotations;}// API of tsickle for lowering decorators to properties on the class.
if(isPresent(typeOrFunc.decorators)){return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);}// API for metadata created by invoking the decorators.
if(isPresent(this._reflect)&&isPresent(this._reflect.getMetadata)){var annotations=this._reflect.getMetadata('annotations',typeOrFunc);if(isPresent(annotations))return annotations;}return[];}},{key:'propMetadata',value:function propMetadata(typeOrFunc){// Prefer the direct API.
if(isPresent(typeOrFunc.propMetadata)){var propMetadata=typeOrFunc.propMetadata;if(isFunction(propMetadata)&&propMetadata.propMetadata){propMetadata=propMetadata.propMetadata;}return propMetadata;}// API of tsickle for lowering decorators to properties on the class.
if(isPresent(typeOrFunc.propDecorators)){var _ret=function(){var propDecorators=typeOrFunc.propDecorators;var propMetadata={};Object.keys(propDecorators).forEach(function(prop){propMetadata[prop]=convertTsickleDecoratorIntoMetadata(propDecorators[prop]);});return{v:propMetadata};}();if((typeof _ret==='undefined'?'undefined':_typeof(_ret))==="object")return _ret.v;}// API for metadata created by invoking the decorators.
if(isPresent(this._reflect)&&isPresent(this._reflect.getMetadata)){var propMetadata=this._reflect.getMetadata('propMetadata',typeOrFunc);if(isPresent(propMetadata))return propMetadata;}return{};}// Note: JavaScript does not support to query for interfaces during runtime.
// However, we can't throw here as the reflector will always call this method
// when asked for a lifecycle interface as this is what we check in Dart.
},{key:'interfaces',value:function interfaces(type){return[];}},{key:'hasLifecycleHook',value:function hasLifecycleHook(type,lcInterface,lcProperty){if(!(type instanceof Type))return false;var proto=type.prototype;return!!proto[lcProperty];}},{key:'getter',value:function getter(name){return new Function('o','return o.'+name+';');}},{key:'setter',value:function setter(name){return new Function('o','v','return o.'+name+' = v;');}},{key:'method',value:function method(name){var functionBody='if (!o.'+name+') throw new Error(\'"'+name+'" is undefined\');\n        return o.'+name+'.apply(o, args);';return new Function('o','args',functionBody);}// There is not a concept of import uri in Js, but this is useful in developing Dart applications.
},{key:'importUri',value:function importUri(type){// StaticSymbol
if((typeof type==='undefined'?'undefined':_typeof(type))==='object'&&type['filePath']){return type['filePath'];}// Runtime type
return'./'+stringify(type);}}]);return ReflectionCapabilities;}();function convertTsickleDecoratorIntoMetadata(decoratorInvocations){if(!decoratorInvocations){return[];}return decoratorInvocations.map(function(decoratorInvocation){var decoratorType=decoratorInvocation.type;var annotationCls=decoratorType.annotationCls;var annotationArgs=decoratorInvocation.args?decoratorInvocation.args:[];var annotation=Object.create(annotationCls.prototype);annotationCls.apply(annotation,annotationArgs);return annotation;});}/**
   * Provides read-only access to reflection data about symbols. Used internally by Angular
   * to power dependency injection and compilation.
   */var ReflectorReader=function ReflectorReader(){_classCallCheck(this,ReflectorReader);};/**
   * Provides access to reflection data about symbols. Used internally by Angular
   * to power dependency injection and compilation.
   */var Reflector=function(_ReflectorReader){_inherits(Reflector,_ReflectorReader);function Reflector(reflectionCapabilities){_classCallCheck(this,Reflector);/** @internal */var _this15=_possibleConstructorReturn(this,Object.getPrototypeOf(Reflector).call(this));_this15._injectableInfo=new Map$1();/** @internal */_this15._getters=new Map$1();/** @internal */_this15._setters=new Map$1();/** @internal */_this15._methods=new Map$1();_this15._usedKeys=null;_this15.reflectionCapabilities=reflectionCapabilities;return _this15;}_createClass(Reflector,[{key:'updateCapabilities',value:function updateCapabilities(caps){this.reflectionCapabilities=caps;}},{key:'isReflectionEnabled',value:function isReflectionEnabled(){return this.reflectionCapabilities.isReflectionEnabled();}/**
       * Causes `this` reflector to track keys used to access
       * {@link ReflectionInfo} objects.
       */},{key:'trackUsage',value:function trackUsage(){this._usedKeys=new Set$1();}/**
       * Lists types for which reflection information was not requested since
       * {@link #trackUsage} was called. This list could later be audited as
       * potential dead code.
       */},{key:'listUnusedKeys',value:function listUnusedKeys(){var _this16=this;if(this._usedKeys==null){throw new BaseException('Usage tracking is disabled');}var allTypes=MapWrapper.keys(this._injectableInfo);return allTypes.filter(function(key){return!SetWrapper.has(_this16._usedKeys,key);});}},{key:'registerFunction',value:function registerFunction(func,funcInfo){this._injectableInfo.set(func,funcInfo);}},{key:'registerType',value:function registerType(type,typeInfo){this._injectableInfo.set(type,typeInfo);}},{key:'registerGetters',value:function registerGetters(getters){_mergeMaps(this._getters,getters);}},{key:'registerSetters',value:function registerSetters(setters){_mergeMaps(this._setters,setters);}},{key:'registerMethods',value:function registerMethods(methods){_mergeMaps(this._methods,methods);}},{key:'factory',value:function factory(type){if(this._containsReflectionInfo(type)){var res=this._getReflectionInfo(type).factory;return isPresent(res)?res:null;}else{return this.reflectionCapabilities.factory(type);}}},{key:'parameters',value:function parameters(typeOrFunc){if(this._injectableInfo.has(typeOrFunc)){var res=this._getReflectionInfo(typeOrFunc).parameters;return isPresent(res)?res:[];}else{return this.reflectionCapabilities.parameters(typeOrFunc);}}},{key:'annotations',value:function annotations(typeOrFunc){if(this._injectableInfo.has(typeOrFunc)){var res=this._getReflectionInfo(typeOrFunc).annotations;return isPresent(res)?res:[];}else{return this.reflectionCapabilities.annotations(typeOrFunc);}}},{key:'propMetadata',value:function propMetadata(typeOrFunc){if(this._injectableInfo.has(typeOrFunc)){var res=this._getReflectionInfo(typeOrFunc).propMetadata;return isPresent(res)?res:{};}else{return this.reflectionCapabilities.propMetadata(typeOrFunc);}}},{key:'interfaces',value:function interfaces(type){if(this._injectableInfo.has(type)){var res=this._getReflectionInfo(type).interfaces;return isPresent(res)?res:[];}else{return this.reflectionCapabilities.interfaces(type);}}},{key:'hasLifecycleHook',value:function hasLifecycleHook(type,lcInterface,lcProperty){var interfaces=this.interfaces(type);if(interfaces.indexOf(lcInterface)!==-1){return true;}else{return this.reflectionCapabilities.hasLifecycleHook(type,lcInterface,lcProperty);}}},{key:'getter',value:function getter(name){if(this._getters.has(name)){return this._getters.get(name);}else{return this.reflectionCapabilities.getter(name);}}},{key:'setter',value:function setter(name){if(this._setters.has(name)){return this._setters.get(name);}else{return this.reflectionCapabilities.setter(name);}}},{key:'method',value:function method(name){if(this._methods.has(name)){return this._methods.get(name);}else{return this.reflectionCapabilities.method(name);}}/** @internal */},{key:'_getReflectionInfo',value:function _getReflectionInfo(typeOrFunc){if(isPresent(this._usedKeys)){this._usedKeys.add(typeOrFunc);}return this._injectableInfo.get(typeOrFunc);}/** @internal */},{key:'_containsReflectionInfo',value:function _containsReflectionInfo(typeOrFunc){return this._injectableInfo.has(typeOrFunc);}},{key:'importUri',value:function importUri(type){return this.reflectionCapabilities.importUri(type);}}]);return Reflector;}(ReflectorReader);function _mergeMaps(target,config){StringMapWrapper.forEach(config,function(v,k){return target.set(k,v);});}/**
   * The {@link Reflector} used internally in Angular to access metadata
   * about symbols.
   */var reflector=new Reflector(new ReflectionCapabilities());/**
   * Describes how the {@link Injector} should instantiate a given token.
   *
   * See {@link provide}.
   *
   * ### Example ([live demo](http://plnkr.co/edit/GNAyj6K6PfYg2NBzgwZ5?p%3Dpreview&p=preview))
   *
   * ```javascript
   * var injector = Injector.resolveAndCreate([
   *   new Provider("message", { useValue: 'Hello' })
   * ]);
   *
   * expect(injector.get("message")).toEqual('Hello');
   * ```
   * @ts2dart_const
   * @deprecated
   */var Provider=function(){function Provider(token/** TODO #9100 */,_ref4){var useClass=_ref4.useClass;var useValue=_ref4.useValue;var useExisting=_ref4.useExisting;var useFactory=_ref4.useFactory;var deps=_ref4.deps;var multi=_ref4.multi;_classCallCheck(this,Provider);this.token=token;this.useClass=useClass;this.useValue=useValue;this.useExisting=useExisting;this.useFactory=useFactory;this.dependencies=deps;this._multi=multi;}// TODO: Provide a full working example after alpha38 is released.
/**
       * Creates multiple providers matching the same token (a multi-provider).
       *
       * Multi-providers are used for creating pluggable service, where the system comes
       * with some default providers, and the user can register additional providers.
       * The combination of the default providers and the additional providers will be
       * used to drive the behavior of the system.
       *
       * ### Example
       *
       * ```typescript
       * var injector = Injector.resolveAndCreate([
       *   new Provider("Strings", { useValue: "String1", multi: true}),
       *   new Provider("Strings", { useValue: "String2", multi: true})
       * ]);
       *
       * expect(injector.get("Strings")).toEqual(["String1", "String2"]);
       * ```
       *
       * Multi-providers and regular providers cannot be mixed. The following
       * will throw an exception:
       *
       * ```typescript
       * var injector = Injector.resolveAndCreate([
       *   new Provider("Strings", { useValue: "String1", multi: true }),
       *   new Provider("Strings", { useValue: "String2"})
       * ]);
       * ```
       */_createClass(Provider,[{key:'multi',get:function get(){return normalizeBool(this._multi);}}]);return Provider;}();/**
   * Helper class for the {@link bind} function.
   * @deprecated
   */var ProviderBuilder=function(){function ProviderBuilder(token/** TODO #9100 */){_classCallCheck(this,ProviderBuilder);this.token=token;}/**
       * Binds a DI token to a class.
       *
       * ### Example ([live demo](http://plnkr.co/edit/ZpBCSYqv6e2ud5KXLdxQ?p=preview))
       *
       * Because `toAlias` and `toClass` are often confused, the example contains
       * both use cases for easy comparison.
       *
       * ```typescript
       * class Vehicle {}
       *
       * class Car extends Vehicle {}
       *
       * var injectorClass = Injector.resolveAndCreate([
       *   Car,
       *   {provide: Vehicle, useClass: Car}
       * ]);
       * var injectorAlias = Injector.resolveAndCreate([
       *   Car,
       *   {provide: Vehicle, useExisting: Car}
       * ]);
       *
       * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
       * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
       *
       * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
       * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
       * ```
       */_createClass(ProviderBuilder,[{key:'toClass',value:function toClass(type){if(!isType(type)){throw new BaseException('Trying to create a class provider but "'+stringify(type)+'" is not a class!');}return new Provider(this.token,{useClass:type});}/**
       * Binds a DI token to a value.
       *
       * ### Example ([live demo](http://plnkr.co/edit/G024PFHmDL0cJFgfZK8O?p=preview))
       *
       * ```typescript
       * var injector = Injector.resolveAndCreate([
       *   {provide: 'message', useValue: 'Hello'}
       * ]);
       *
       * expect(injector.get('message')).toEqual('Hello');
       * ```
       */},{key:'toValue',value:function toValue(value){return new Provider(this.token,{useValue:value});}/**
       * Binds a DI token to an existing token.
       *
       * Angular will return the same instance as if the provided token was used. (This is
       * in contrast to `useClass` where a separate instance of `useClass` will be returned.)
       *
       * ### Example ([live demo](http://plnkr.co/edit/uBaoF2pN5cfc5AfZapNw?p=preview))
       *
       * Because `toAlias` and `toClass` are often confused, the example contains
       * both use cases for easy comparison.
       *
       * ```typescript
       * class Vehicle {}
       *
       * class Car extends Vehicle {}
       *
       * var injectorAlias = Injector.resolveAndCreate([
       *   Car,
       *   {provide: Vehicle, useExisting: Car}
       * ]);
       * var injectorClass = Injector.resolveAndCreate([
       *   Car,
       *   {provide: Vehicle, useClass: Car})
       * ]);
       *
       * expect(injectorAlias.get(Vehicle)).toBe(injectorAlias.get(Car));
       * expect(injectorAlias.get(Vehicle) instanceof Car).toBe(true);
       *
       * expect(injectorClass.get(Vehicle)).not.toBe(injectorClass.get(Car));
       * expect(injectorClass.get(Vehicle) instanceof Car).toBe(true);
       * ```
       */},{key:'toAlias',value:function toAlias(aliasToken){if(isBlank(aliasToken)){throw new BaseException('Can not alias '+stringify(this.token)+' to a blank value!');}return new Provider(this.token,{useExisting:aliasToken});}/**
       * Binds a DI token to a function which computes the value.
       *
       * ### Example ([live demo](http://plnkr.co/edit/OejNIfTT3zb1iBxaIYOb?p=preview))
       *
       * ```typescript
       * var injector = Injector.resolveAndCreate([
       *   {provide: Number, useFactory: () => { return 1+2; }},
       *   {provide: String, useFactory: (v) => { return "Value: " + v; }, deps: [Number]}
       * ]);
       *
       * expect(injector.get(Number)).toEqual(3);
       * expect(injector.get(String)).toEqual('Value: 3');
       * ```
       */},{key:'toFactory',value:function toFactory(factory,dependencies){if(!isFunction(factory)){throw new BaseException('Trying to create a factory provider but "'+stringify(factory)+'" is not a function!');}return new Provider(this.token,{useFactory:factory,deps:dependencies});}}]);return ProviderBuilder;}();/**
   * Creates a {@link Provider}.
   *
   * See {@link Provider} for more details.
   *
   * <!-- TODO: improve the docs -->
   * @deprecated
   */function provide(token/** TODO #9100 */,_ref5){var useClass=_ref5.useClass;var useValue=_ref5.useValue;var useExisting=_ref5.useExisting;var useFactory=_ref5.useFactory;var deps=_ref5.deps;var multi=_ref5.multi;return new Provider(token,{useClass:useClass,useValue:useValue,useExisting:useExisting,useFactory:useFactory,deps:deps,multi:multi});}function isProviderLiteral(obj){return obj&&(typeof obj==='undefined'?'undefined':_typeof(obj))=='object'&&obj.provide;}function createProvider(obj){return new Provider(obj.provide,obj);}/**
   * `Dependency` is used by the framework to extend DI.
   * This is internal to Angular and should not be used directly.
   */var ReflectiveDependency=function(){function ReflectiveDependency(key,optional,lowerBoundVisibility,upperBoundVisibility,properties){_classCallCheck(this,ReflectiveDependency);this.key=key;this.optional=optional;this.lowerBoundVisibility=lowerBoundVisibility;this.upperBoundVisibility=upperBoundVisibility;this.properties=properties;}_createClass(ReflectiveDependency,null,[{key:'fromKey',value:function fromKey(key){return new ReflectiveDependency(key,false,null,null,[]);}}]);return ReflectiveDependency;}();var _EMPTY_LIST=[];var ResolvedReflectiveProvider_=function(){function ResolvedReflectiveProvider_(key,resolvedFactories,multiProvider){_classCallCheck(this,ResolvedReflectiveProvider_);this.key=key;this.resolvedFactories=resolvedFactories;this.multiProvider=multiProvider;}_createClass(ResolvedReflectiveProvider_,[{key:'resolvedFactory',get:function get(){return this.resolvedFactories[0];}}]);return ResolvedReflectiveProvider_;}();/**
   * An internal resolved representation of a factory function created by resolving {@link Provider}.
   * @experimental
   */var ResolvedReflectiveFactory=function ResolvedReflectiveFactory(/**
           * Factory function which can return an instance of an object represented by a key.
           */factory,/**
           * Arguments (dependencies) to the `factory` function.
           */dependencies){_classCallCheck(this,ResolvedReflectiveFactory);this.factory=factory;this.dependencies=dependencies;};/**
   * Resolve a single provider.
   */function resolveReflectiveFactory(provider){var factoryFn;var resolvedDeps;if(isPresent(provider.useClass)){var useClass=resolveForwardRef(provider.useClass);factoryFn=reflector.factory(useClass);resolvedDeps=_dependenciesFor(useClass);}else if(isPresent(provider.useExisting)){factoryFn=function factoryFn(aliasInstance/** TODO #9100 */){return aliasInstance;};resolvedDeps=[ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];}else if(isPresent(provider.useFactory)){factoryFn=provider.useFactory;resolvedDeps=constructDependencies(provider.useFactory,provider.dependencies);}else{factoryFn=function factoryFn(){return provider.useValue;};resolvedDeps=_EMPTY_LIST;}return new ResolvedReflectiveFactory(factoryFn,resolvedDeps);}/**
   * Converts the {@link Provider} into {@link ResolvedProvider}.
   *
   * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
   * convenience provider syntax.
   */function resolveReflectiveProvider(provider){return new ResolvedReflectiveProvider_(ReflectiveKey.get(provider.token),[resolveReflectiveFactory(provider)],provider.multi);}/**
   * Resolve a list of Providers.
   */function resolveReflectiveProviders(providers){var normalized=_normalizeProviders(providers,[]);var resolved=normalized.map(resolveReflectiveProvider);return MapWrapper.values(mergeResolvedReflectiveProviders(resolved,new Map()));}/**
   * Merges a list of ResolvedProviders into a list where
   * each key is contained exactly once and multi providers
   * have been merged.
   */function mergeResolvedReflectiveProviders(providers,normalizedProvidersMap){for(var i=0;i<providers.length;i++){var provider=providers[i];var existing=normalizedProvidersMap.get(provider.key.id);if(isPresent(existing)){if(provider.multiProvider!==existing.multiProvider){throw new MixingMultiProvidersWithRegularProvidersError(existing,provider);}if(provider.multiProvider){for(var j=0;j<provider.resolvedFactories.length;j++){existing.resolvedFactories.push(provider.resolvedFactories[j]);}}else{normalizedProvidersMap.set(provider.key.id,provider);}}else{var resolvedProvider;if(provider.multiProvider){resolvedProvider=new ResolvedReflectiveProvider_(provider.key,ListWrapper.clone(provider.resolvedFactories),provider.multiProvider);}else{resolvedProvider=provider;}normalizedProvidersMap.set(provider.key.id,resolvedProvider);}}return normalizedProvidersMap;}function _normalizeProviders(providers,res){providers.forEach(function(b){if(b instanceof Type){res.push(provide(b,{useClass:b}));}else if(b instanceof Provider){res.push(b);}else if(isProviderLiteral(b)){res.push(createProvider(b));}else if(b instanceof Array){_normalizeProviders(b,res);}else if(b instanceof ProviderBuilder){throw new InvalidProviderError(b.token);}else{throw new InvalidProviderError(b);}});return res;}function constructDependencies(typeOrFunc,dependencies){if(isBlank(dependencies)){return _dependenciesFor(typeOrFunc);}else{var params=dependencies.map(function(t){return[t];});return dependencies.map(function(t){return _extractToken(typeOrFunc,t,params);});}}function _dependenciesFor(typeOrFunc){var params=reflector.parameters(typeOrFunc);if(isBlank(params))return[];if(params.some(isBlank)){throw new NoAnnotationError(typeOrFunc,params);}return params.map(function(p){return _extractToken(typeOrFunc,p,params);});}function _extractToken(typeOrFunc/** TODO #9100 */,metadata/** TODO #9100 *//*any[] | any*/,params){var depProps=[];var token=null;var optional=false;if(!isArray(metadata)){if(metadata instanceof InjectMetadata){return _createDependency(metadata.token,optional,null,null,depProps);}else{return _createDependency(metadata,optional,null,null,depProps);}}var lowerBoundVisibility=null;var upperBoundVisibility=null;for(var i=0;i<metadata.length;++i){var paramMetadata=metadata[i];if(paramMetadata instanceof Type){token=paramMetadata;}else if(paramMetadata instanceof InjectMetadata){token=paramMetadata.token;}else if(paramMetadata instanceof OptionalMetadata){optional=true;}else if(paramMetadata instanceof SelfMetadata){upperBoundVisibility=paramMetadata;}else if(paramMetadata instanceof HostMetadata){upperBoundVisibility=paramMetadata;}else if(paramMetadata instanceof SkipSelfMetadata){lowerBoundVisibility=paramMetadata;}else if(paramMetadata instanceof DependencyMetadata){if(isPresent(paramMetadata.token)){token=paramMetadata.token;}depProps.push(paramMetadata);}}token=resolveForwardRef(token);if(isPresent(token)){return _createDependency(token,optional,lowerBoundVisibility,upperBoundVisibility,depProps);}else{throw new NoAnnotationError(typeOrFunc,params);}}function _createDependency(token/** TODO #9100 */,optional/** TODO #9100 */,lowerBoundVisibility/** TODO #9100 */,upperBoundVisibility/** TODO #9100 */,depProps/** TODO #9100 */){return new ReflectiveDependency(ReflectiveKey.get(token),optional,lowerBoundVisibility,upperBoundVisibility,depProps);}// avoid unused import when Type union types are erased
// Threshold for the dynamic version
var _MAX_CONSTRUCTION_COUNTER=10;var UNDEFINED=new Object();var ReflectiveProtoInjectorInlineStrategy=function(){function ReflectiveProtoInjectorInlineStrategy(protoEI,providers){_classCallCheck(this,ReflectiveProtoInjectorInlineStrategy);this.provider0=null;this.provider1=null;this.provider2=null;this.provider3=null;this.provider4=null;this.provider5=null;this.provider6=null;this.provider7=null;this.provider8=null;this.provider9=null;this.keyId0=null;this.keyId1=null;this.keyId2=null;this.keyId3=null;this.keyId4=null;this.keyId5=null;this.keyId6=null;this.keyId7=null;this.keyId8=null;this.keyId9=null;var length=providers.length;if(length>0){this.provider0=providers[0];this.keyId0=providers[0].key.id;}if(length>1){this.provider1=providers[1];this.keyId1=providers[1].key.id;}if(length>2){this.provider2=providers[2];this.keyId2=providers[2].key.id;}if(length>3){this.provider3=providers[3];this.keyId3=providers[3].key.id;}if(length>4){this.provider4=providers[4];this.keyId4=providers[4].key.id;}if(length>5){this.provider5=providers[5];this.keyId5=providers[5].key.id;}if(length>6){this.provider6=providers[6];this.keyId6=providers[6].key.id;}if(length>7){this.provider7=providers[7];this.keyId7=providers[7].key.id;}if(length>8){this.provider8=providers[8];this.keyId8=providers[8].key.id;}if(length>9){this.provider9=providers[9];this.keyId9=providers[9].key.id;}}_createClass(ReflectiveProtoInjectorInlineStrategy,[{key:'getProviderAtIndex',value:function getProviderAtIndex(index){if(index==0)return this.provider0;if(index==1)return this.provider1;if(index==2)return this.provider2;if(index==3)return this.provider3;if(index==4)return this.provider4;if(index==5)return this.provider5;if(index==6)return this.provider6;if(index==7)return this.provider7;if(index==8)return this.provider8;if(index==9)return this.provider9;throw new OutOfBoundsError(index);}},{key:'createInjectorStrategy',value:function createInjectorStrategy(injector){return new ReflectiveInjectorInlineStrategy(injector,this);}}]);return ReflectiveProtoInjectorInlineStrategy;}();var ReflectiveProtoInjectorDynamicStrategy=function(){function ReflectiveProtoInjectorDynamicStrategy(protoInj,providers){_classCallCheck(this,ReflectiveProtoInjectorDynamicStrategy);this.providers=providers;var len=providers.length;this.keyIds=ListWrapper.createFixedSize(len);for(var i=0;i<len;i++){this.keyIds[i]=providers[i].key.id;}}_createClass(ReflectiveProtoInjectorDynamicStrategy,[{key:'getProviderAtIndex',value:function getProviderAtIndex(index){if(index<0||index>=this.providers.length){throw new OutOfBoundsError(index);}return this.providers[index];}},{key:'createInjectorStrategy',value:function createInjectorStrategy(ei){return new ReflectiveInjectorDynamicStrategy(this,ei);}}]);return ReflectiveProtoInjectorDynamicStrategy;}();var ReflectiveProtoInjector=function(){function ReflectiveProtoInjector(providers){_classCallCheck(this,ReflectiveProtoInjector);this.numberOfProviders=providers.length;this._strategy=providers.length>_MAX_CONSTRUCTION_COUNTER?new ReflectiveProtoInjectorDynamicStrategy(this,providers):new ReflectiveProtoInjectorInlineStrategy(this,providers);}_createClass(ReflectiveProtoInjector,[{key:'getProviderAtIndex',value:function getProviderAtIndex(index){return this._strategy.getProviderAtIndex(index);}}],[{key:'fromResolvedProviders',value:function fromResolvedProviders(providers){return new ReflectiveProtoInjector(providers);}}]);return ReflectiveProtoInjector;}();var ReflectiveInjectorInlineStrategy=function(){function ReflectiveInjectorInlineStrategy(injector,protoStrategy){_classCallCheck(this,ReflectiveInjectorInlineStrategy);this.injector=injector;this.protoStrategy=protoStrategy;this.obj0=UNDEFINED;this.obj1=UNDEFINED;this.obj2=UNDEFINED;this.obj3=UNDEFINED;this.obj4=UNDEFINED;this.obj5=UNDEFINED;this.obj6=UNDEFINED;this.obj7=UNDEFINED;this.obj8=UNDEFINED;this.obj9=UNDEFINED;}_createClass(ReflectiveInjectorInlineStrategy,[{key:'resetConstructionCounter',value:function resetConstructionCounter(){this.injector._constructionCounter=0;}},{key:'instantiateProvider',value:function instantiateProvider(provider){return this.injector._new(provider);}},{key:'getObjByKeyId',value:function getObjByKeyId(keyId){var p=this.protoStrategy;var inj=this.injector;if(p.keyId0===keyId){if(this.obj0===UNDEFINED){this.obj0=inj._new(p.provider0);}return this.obj0;}if(p.keyId1===keyId){if(this.obj1===UNDEFINED){this.obj1=inj._new(p.provider1);}return this.obj1;}if(p.keyId2===keyId){if(this.obj2===UNDEFINED){this.obj2=inj._new(p.provider2);}return this.obj2;}if(p.keyId3===keyId){if(this.obj3===UNDEFINED){this.obj3=inj._new(p.provider3);}return this.obj3;}if(p.keyId4===keyId){if(this.obj4===UNDEFINED){this.obj4=inj._new(p.provider4);}return this.obj4;}if(p.keyId5===keyId){if(this.obj5===UNDEFINED){this.obj5=inj._new(p.provider5);}return this.obj5;}if(p.keyId6===keyId){if(this.obj6===UNDEFINED){this.obj6=inj._new(p.provider6);}return this.obj6;}if(p.keyId7===keyId){if(this.obj7===UNDEFINED){this.obj7=inj._new(p.provider7);}return this.obj7;}if(p.keyId8===keyId){if(this.obj8===UNDEFINED){this.obj8=inj._new(p.provider8);}return this.obj8;}if(p.keyId9===keyId){if(this.obj9===UNDEFINED){this.obj9=inj._new(p.provider9);}return this.obj9;}return UNDEFINED;}},{key:'getObjAtIndex',value:function getObjAtIndex(index){if(index==0)return this.obj0;if(index==1)return this.obj1;if(index==2)return this.obj2;if(index==3)return this.obj3;if(index==4)return this.obj4;if(index==5)return this.obj5;if(index==6)return this.obj6;if(index==7)return this.obj7;if(index==8)return this.obj8;if(index==9)return this.obj9;throw new OutOfBoundsError(index);}},{key:'getMaxNumberOfObjects',value:function getMaxNumberOfObjects(){return _MAX_CONSTRUCTION_COUNTER;}}]);return ReflectiveInjectorInlineStrategy;}();var ReflectiveInjectorDynamicStrategy=function(){function ReflectiveInjectorDynamicStrategy(protoStrategy,injector){_classCallCheck(this,ReflectiveInjectorDynamicStrategy);this.protoStrategy=protoStrategy;this.injector=injector;this.objs=ListWrapper.createFixedSize(protoStrategy.providers.length);ListWrapper.fill(this.objs,UNDEFINED);}_createClass(ReflectiveInjectorDynamicStrategy,[{key:'resetConstructionCounter',value:function resetConstructionCounter(){this.injector._constructionCounter=0;}},{key:'instantiateProvider',value:function instantiateProvider(provider){return this.injector._new(provider);}},{key:'getObjByKeyId',value:function getObjByKeyId(keyId){var p=this.protoStrategy;for(var i=0;i<p.keyIds.length;i++){if(p.keyIds[i]===keyId){if(this.objs[i]===UNDEFINED){this.objs[i]=this.injector._new(p.providers[i]);}return this.objs[i];}}return UNDEFINED;}},{key:'getObjAtIndex',value:function getObjAtIndex(index){if(index<0||index>=this.objs.length){throw new OutOfBoundsError(index);}return this.objs[index];}},{key:'getMaxNumberOfObjects',value:function getMaxNumberOfObjects(){return this.objs.length;}}]);return ReflectiveInjectorDynamicStrategy;}();/**
   * A ReflectiveDependency injection container used for instantiating objects and resolving
   * dependencies.
   *
   * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
   * constructor dependencies.
   *
   * In typical use, application code asks for the dependencies in the constructor and they are
   * resolved by the `Injector`.
   *
   * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
   *
   * The following example creates an `Injector` configured to create `Engine` and `Car`.
   *
   * ```typescript
   * @Injectable()
   * class Engine {
   * }
   *
   * @Injectable()
   * class Car {
   *   constructor(public engine:Engine) {}
   * }
   *
   * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
   * var car = injector.get(Car);
   * expect(car instanceof Car).toBe(true);
   * expect(car.engine instanceof Engine).toBe(true);
   * ```
   *
   * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
   * resolve all of the object's dependencies automatically.
   */var ReflectiveInjector=function(){function ReflectiveInjector(){_classCallCheck(this,ReflectiveInjector);}_createClass(ReflectiveInjector,[{key:'debugContext',/**
       * @internal
       */value:function debugContext(){return null;}/**
       * Resolves an array of providers and creates a child injector from those providers.
       *
       * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
       * -->
       *
       * The passed-in providers can be an array of `Type`, {@link Provider},
       * or a recursive array of more providers.
       *
       * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
       *
       * ```typescript
       * class ParentProvider {}
       * class ChildProvider {}
       *
       * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
       * var child = parent.resolveAndCreateChild([ChildProvider]);
       *
       * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
       * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
       * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
       * ```
       *
       * This function is slower than the corresponding `createChildFromResolved`
       * because it needs to resolve the passed-in providers first.
       * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
       */},{key:'resolveAndCreateChild',value:function resolveAndCreateChild(providers){return unimplemented();}/**
       * Creates a child injector from previously resolved providers.
       *
       * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
       * -->
       *
       * This API is the recommended way to construct injectors in performance-sensitive parts.
       *
       * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
       *
       * ```typescript
       * class ParentProvider {}
       * class ChildProvider {}
       *
       * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
       * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
       *
       * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
       * var child = parent.createChildFromResolved(childProviders);
       *
       * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
       * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
       * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
       * ```
       */},{key:'createChildFromResolved',value:function createChildFromResolved(providers){return unimplemented();}/**
       * Resolves a provider and instantiates an object in the context of the injector.
       *
       * The created object does not get cached by the injector.
       *
       * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
       *
       * ```typescript
       * @Injectable()
       * class Engine {
       * }
       *
       * @Injectable()
       * class Car {
       *   constructor(public engine:Engine) {}
       * }
       *
       * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
       *
       * var car = injector.resolveAndInstantiate(Car);
       * expect(car.engine).toBe(injector.get(Engine));
       * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
       * ```
       */},{key:'resolveAndInstantiate',value:function resolveAndInstantiate(provider){return unimplemented();}/**
       * Instantiates an object using a resolved provider in the context of the injector.
       *
       * The created object does not get cached by the injector.
       *
       * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
       *
       * ```typescript
       * @Injectable()
       * class Engine {
       * }
       *
       * @Injectable()
       * class Car {
       *   constructor(public engine:Engine) {}
       * }
       *
       * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
       * var carProvider = ReflectiveInjector.resolve([Car])[0];
       * var car = injector.instantiateResolved(carProvider);
       * expect(car.engine).toBe(injector.get(Engine));
       * expect(car).not.toBe(injector.instantiateResolved(carProvider));
       * ```
       */},{key:'instantiateResolved',value:function instantiateResolved(provider){return unimplemented();}},{key:'parent',/**
       * Parent of this injector.
       *
       * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
       * -->
       *
       * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
       *
       * ```typescript
       * var parent = ReflectiveInjector.resolveAndCreate([]);
       * var child = parent.resolveAndCreateChild([]);
       * expect(child.parent).toBe(parent);
       * ```
       */get:function get(){return unimplemented();}}],[{key:'resolve',/**
       * Turns an array of provider definitions into an array of resolved providers.
       *
       * A resolution is a process of flattening multiple nested arrays and converting individual
       * providers into an array of {@link ResolvedReflectiveProvider}s.
       *
       * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
       *
       * ```typescript
       * @Injectable()
       * class Engine {
       * }
       *
       * @Injectable()
       * class Car {
       *   constructor(public engine:Engine) {}
       * }
       *
       * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
       *
       * expect(providers.length).toEqual(2);
       *
       * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
       * expect(providers[0].key.displayName).toBe("Car");
       * expect(providers[0].dependencies.length).toEqual(1);
       * expect(providers[0].factory).toBeDefined();
       *
       * expect(providers[1].key.displayName).toBe("Engine");
       * });
       * ```
       *
       * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
       */value:function resolve(providers){return resolveReflectiveProviders(providers);}/**
       * Resolves an array of providers and creates an injector from those providers.
       *
       * The passed-in providers can be an array of `Type`, {@link Provider},
       * or a recursive array of more providers.
       *
       * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
       *
       * ```typescript
       * @Injectable()
       * class Engine {
       * }
       *
       * @Injectable()
       * class Car {
       *   constructor(public engine:Engine) {}
       * }
       *
       * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
       * expect(injector.get(Car) instanceof Car).toBe(true);
       * ```
       *
       * This function is slower than the corresponding `fromResolvedProviders`
       * because it needs to resolve the passed-in providers first.
       * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
       */},{key:'resolveAndCreate',value:function resolveAndCreate(providers){var parent=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var ResolvedReflectiveProviders=ReflectiveInjector.resolve(providers);return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders,parent);}/**
       * Creates an injector from previously resolved providers.
       *
       * This API is the recommended way to construct injectors in performance-sensitive parts.
       *
       * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
       *
       * ```typescript
       * @Injectable()
       * class Engine {
       * }
       *
       * @Injectable()
       * class Car {
       *   constructor(public engine:Engine) {}
       * }
       *
       * var providers = ReflectiveInjector.resolve([Car, Engine]);
       * var injector = ReflectiveInjector.fromResolvedProviders(providers);
       * expect(injector.get(Car) instanceof Car).toBe(true);
       * ```
       * @experimental
       */},{key:'fromResolvedProviders',value:function fromResolvedProviders(providers){var parent=arguments.length<=1||arguments[1]===undefined?null:arguments[1];return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers),parent);}/**
       * @deprecated
       */},{key:'fromResolvedBindings',value:function fromResolvedBindings(providers){return ReflectiveInjector.fromResolvedProviders(providers);}}]);return ReflectiveInjector;}();var ReflectiveInjector_=function(){/**
       * Private
       */function ReflectiveInjector_(_proto/* ProtoInjector */){var _parent=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var _debugContext=arguments.length<=2||arguments[2]===undefined?null:arguments[2];_classCallCheck(this,ReflectiveInjector_);this._debugContext=_debugContext;/** @internal */this._constructionCounter=0;this._proto=_proto;this._parent=_parent;this._strategy=_proto._strategy.createInjectorStrategy(this);}/**
       * @internal
       */_createClass(ReflectiveInjector_,[{key:'debugContext',value:function debugContext(){return this._debugContext();}},{key:'get',value:function get(token){var notFoundValue=arguments.length<=1||arguments[1]===undefined?THROW_IF_NOT_FOUND:arguments[1];return this._getByKey(ReflectiveKey.get(token),null,null,notFoundValue);}},{key:'getAt',value:function getAt(index){return this._strategy.getObjAtIndex(index);}},{key:'resolveAndCreateChild',value:function resolveAndCreateChild(providers){var ResolvedReflectiveProviders=ReflectiveInjector.resolve(providers);return this.createChildFromResolved(ResolvedReflectiveProviders);}},{key:'createChildFromResolved',value:function createChildFromResolved(providers){var proto=new ReflectiveProtoInjector(providers);var inj=new ReflectiveInjector_(proto);inj._parent=this;return inj;}},{key:'resolveAndInstantiate',value:function resolveAndInstantiate(provider){return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);}},{key:'instantiateResolved',value:function instantiateResolved(provider){return this._instantiateProvider(provider);}/** @internal */},{key:'_new',value:function _new(provider){if(this._constructionCounter++>this._strategy.getMaxNumberOfObjects()){throw new CyclicDependencyError(this,provider.key);}return this._instantiateProvider(provider);}},{key:'_instantiateProvider',value:function _instantiateProvider(provider){if(provider.multiProvider){var res=ListWrapper.createFixedSize(provider.resolvedFactories.length);for(var i=0;i<provider.resolvedFactories.length;++i){res[i]=this._instantiate(provider,provider.resolvedFactories[i]);}return res;}else{return this._instantiate(provider,provider.resolvedFactories[0]);}}},{key:'_instantiate',value:function _instantiate(provider,ResolvedReflectiveFactory){var factory=ResolvedReflectiveFactory.factory;var deps=ResolvedReflectiveFactory.dependencies;var length=deps.length;var d0;var d1;var d2;var d3;var d4;var d5;var d6;var d7;var d8;var d9;var d10;var d11;var d12;var d13;var d14;var d15;var d16;var d17;var d18;var d19;try{d0=length>0?this._getByReflectiveDependency(provider,deps[0]):null;d1=length>1?this._getByReflectiveDependency(provider,deps[1]):null;d2=length>2?this._getByReflectiveDependency(provider,deps[2]):null;d3=length>3?this._getByReflectiveDependency(provider,deps[3]):null;d4=length>4?this._getByReflectiveDependency(provider,deps[4]):null;d5=length>5?this._getByReflectiveDependency(provider,deps[5]):null;d6=length>6?this._getByReflectiveDependency(provider,deps[6]):null;d7=length>7?this._getByReflectiveDependency(provider,deps[7]):null;d8=length>8?this._getByReflectiveDependency(provider,deps[8]):null;d9=length>9?this._getByReflectiveDependency(provider,deps[9]):null;d10=length>10?this._getByReflectiveDependency(provider,deps[10]):null;d11=length>11?this._getByReflectiveDependency(provider,deps[11]):null;d12=length>12?this._getByReflectiveDependency(provider,deps[12]):null;d13=length>13?this._getByReflectiveDependency(provider,deps[13]):null;d14=length>14?this._getByReflectiveDependency(provider,deps[14]):null;d15=length>15?this._getByReflectiveDependency(provider,deps[15]):null;d16=length>16?this._getByReflectiveDependency(provider,deps[16]):null;d17=length>17?this._getByReflectiveDependency(provider,deps[17]):null;d18=length>18?this._getByReflectiveDependency(provider,deps[18]):null;d19=length>19?this._getByReflectiveDependency(provider,deps[19]):null;}catch(e){if(e instanceof AbstractProviderError||e instanceof InstantiationError){e.addKey(this,provider.key);}throw e;}var obj;try{switch(length){case 0:obj=factory();break;case 1:obj=factory(d0);break;case 2:obj=factory(d0,d1);break;case 3:obj=factory(d0,d1,d2);break;case 4:obj=factory(d0,d1,d2,d3);break;case 5:obj=factory(d0,d1,d2,d3,d4);break;case 6:obj=factory(d0,d1,d2,d3,d4,d5);break;case 7:obj=factory(d0,d1,d2,d3,d4,d5,d6);break;case 8:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7);break;case 9:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8);break;case 10:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9);break;case 11:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10);break;case 12:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11);break;case 13:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12);break;case 14:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13);break;case 15:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14);break;case 16:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15);break;case 17:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16);break;case 18:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17);break;case 19:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18);break;case 20:obj=factory(d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19);break;default:throw new BaseException('Cannot instantiate \''+provider.key.displayName+'\' because it has more than 20 dependencies');}}catch(e){throw new InstantiationError(this,e,e.stack,provider.key);}return obj;}},{key:'_getByReflectiveDependency',value:function _getByReflectiveDependency(provider,dep){return this._getByKey(dep.key,dep.lowerBoundVisibility,dep.upperBoundVisibility,dep.optional?null:THROW_IF_NOT_FOUND);}},{key:'_getByKey',value:function _getByKey(key,lowerBoundVisibility,upperBoundVisibility,notFoundValue){if(key===INJECTOR_KEY){return this;}if(upperBoundVisibility instanceof SelfMetadata){return this._getByKeySelf(key,notFoundValue);}else{return this._getByKeyDefault(key,notFoundValue,lowerBoundVisibility);}}/** @internal */},{key:'_throwOrNull',value:function _throwOrNull(key,notFoundValue){if(notFoundValue!==THROW_IF_NOT_FOUND){return notFoundValue;}else{throw new NoProviderError(this,key);}}/** @internal */},{key:'_getByKeySelf',value:function _getByKeySelf(key,notFoundValue){var obj=this._strategy.getObjByKeyId(key.id);return obj!==UNDEFINED?obj:this._throwOrNull(key,notFoundValue);}/** @internal */},{key:'_getByKeyDefault',value:function _getByKeyDefault(key,notFoundValue,lowerBoundVisibility){var inj;if(lowerBoundVisibility instanceof SkipSelfMetadata){inj=this._parent;}else{inj=this;}while(inj instanceof ReflectiveInjector_){var inj_=inj;var obj=inj_._strategy.getObjByKeyId(key.id);if(obj!==UNDEFINED)return obj;inj=inj_._parent;}if(inj!==null){return inj.get(key.token,notFoundValue);}else{return this._throwOrNull(key,notFoundValue);}}},{key:'toString',value:function toString(){return this.displayName;}},{key:'parent',get:function get(){return this._parent;}/**
       * @internal
       * Internal. Do not use.
       * We return `any` not to export the InjectorStrategy type.
       */},{key:'internalStrategy',get:function get(){return this._strategy;}},{key:'displayName',get:function get(){var providers=_mapProviders(this,function(b){return' "'+b.key.displayName+'" ';}).join(', ');return'ReflectiveInjector(providers: ['+providers+'])';}}]);return ReflectiveInjector_;}();var INJECTOR_KEY=ReflectiveKey.get(Injector);function _mapProviders(injector,fn){var res=[];for(var i=0;i<injector._proto.numberOfProviders;++i){res.push(fn(injector._proto.getProviderAtIndex(i)));}return res;}/**
   * Creates a token that can be used in a DI Provider.
   *
   * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
   *
   * ```typescript
   * var t = new OpaqueToken("value");
   *
   * var injector = Injector.resolveAndCreate([
   *   {provide: t, useValue: "bindingValue"}
   * ]);
   *
   * expect(injector.get(t)).toEqual("bindingValue");
   * ```
   *
   * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
   * caused by multiple providers using the same string as two different tokens.
   *
   * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
   * error messages.
   * @ts2dart_const
   * @stable
   */var OpaqueToken=function(){function OpaqueToken(_desc){_classCallCheck(this,OpaqueToken);this._desc=_desc;}_createClass(OpaqueToken,[{key:'toString',value:function toString(){return'Token '+this._desc;}}]);return OpaqueToken;}();var objectTypes={'boolean':false,'function':true,'object':true,'number':false,'string':false,'undefined':false};var root=objectTypes[typeof self==='undefined'?'undefined':_typeof(self)]&&self||objectTypes[typeof window==='undefined'?'undefined':_typeof(window)]&&window;/* tslint:disable:no-unused-variable */var freeExports=objectTypes[typeof exports==='undefined'?'undefined':_typeof(exports)]&&exports&&!exports.nodeType&&exports;var freeModule=objectTypes[typeof module==='undefined'?'undefined':_typeof(module)]&&module&&!module.nodeType&&module;var freeGlobal=objectTypes[typeof global==='undefined'?'undefined':_typeof(global)]&&global;if(freeGlobal&&(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal)){root=freeGlobal;}function isFunction$1(x){return typeof x==='function';}var isArray$1=Array.isArray||function(x){return x&&typeof x.length==='number';};function isObject(x){return x!=null&&(typeof x==='undefined'?'undefined':_typeof(x))==='object';}// typeof any so that it we don't have to cast when comparing a result to the error object
var errorObject={e:{}};var tryCatchTarget=void 0;function tryCatcher(){try{return tryCatchTarget.apply(this,arguments);}catch(e){errorObject.e=e;return errorObject;}}function tryCatch(fn){tryCatchTarget=fn;return tryCatcher;};/**
   * An error thrown when one or more errors have occurred during the
   * `unsubscribe` of a {@link Subscription}.
   */var UnsubscriptionError=function(_Error3){_inherits(UnsubscriptionError,_Error3);function UnsubscriptionError(errors){_classCallCheck(this,UnsubscriptionError);var _this17=_possibleConstructorReturn(this,Object.getPrototypeOf(UnsubscriptionError).call(this));_this17.errors=errors;_this17.name='UnsubscriptionError';_this17.message=errors?errors.length+' errors occurred during unsubscription:\n'+errors.map(function(err,i){return i+1+') '+err.toString();}).join('\n'):'';return _this17;}return UnsubscriptionError;}(Error);/**
   * Represents a disposable resource, such as the execution of an Observable. A
   * Subscription has one important method, `unsubscribe`, that takes no argument
   * and just disposes the resource held by the subscription.
   *
   * Additionally, subscriptions may be grouped together through the `add()`
   * method, which will attach a child Subscription to the current Subscription.
   * When a Subscription is unsubscribed, all its children (and its grandchildren)
   * will be unsubscribed as well.
   *
   * @class Subscription
   */var Subscription=function(){/**
       * @param {function(): void} [unsubscribe] A function describing how to
       * perform the disposal of resources when the `unsubscribe` method is called.
       */function Subscription(unsubscribe){_classCallCheck(this,Subscription);/**
           * A flag to indicate whether this Subscription has already been unsubscribed.
           * @type {boolean}
           */this.isUnsubscribed=false;if(unsubscribe){this._unsubscribe=unsubscribe;}}/**
       * Disposes the resources held by the subscription. May, for instance, cancel
       * an ongoing Observable execution or cancel any other type of work that
       * started when the Subscription was created.
       * @return {void}
       */_createClass(Subscription,[{key:'unsubscribe',value:function unsubscribe(){var hasErrors=false;var errors=void 0;if(this.isUnsubscribed){return;}this.isUnsubscribed=true;var _unsubscribe=this._unsubscribe;var _subscriptions=this._subscriptions;this._subscriptions=null;if(isFunction$1(_unsubscribe)){var trial=tryCatch(_unsubscribe).call(this);if(trial===errorObject){hasErrors=true;(errors=errors||[]).push(errorObject.e);}}if(isArray$1(_subscriptions)){var _index=-1;var len=_subscriptions.length;while(++_index<len){var sub=_subscriptions[_index];if(isObject(sub)){var _trial=tryCatch(sub.unsubscribe).call(sub);if(_trial===errorObject){hasErrors=true;errors=errors||[];var err=errorObject.e;if(err instanceof UnsubscriptionError){errors=errors.concat(err.errors);}else{errors.push(err);}}}}}if(hasErrors){throw new UnsubscriptionError(errors);}}/**
       * Adds a tear down to be called during the unsubscribe() of this
       * Subscription.
       *
       * If the tear down being added is a subscription that is already
       * unsubscribed, is the same reference `add` is being called on, or is
       * `Subscription.EMPTY`, it will not be added.
       *
       * If this subscription is already in an `isUnsubscribed` state, the passed
       * tear down logic will be executed immediately.
       *
       * @param {TeardownLogic} teardown The additional logic to execute on
       * teardown.
       * @return {Subscription} Returns the Subscription used or created to be
       * added to the inner subscriptions list. This Subscription can be used with
       * `remove()` to remove the passed teardown logic from the inner subscriptions
       * list.
       */},{key:'add',value:function add(teardown){if(!teardown||teardown===this||teardown===Subscription.EMPTY){return;}var sub=teardown;switch(typeof teardown==='undefined'?'undefined':_typeof(teardown)){case'function':sub=new Subscription(teardown);case'object':if(sub.isUnsubscribed||typeof sub.unsubscribe!=='function'){break;}else if(this.isUnsubscribed){sub.unsubscribe();}else{(this._subscriptions||(this._subscriptions=[])).push(sub);}break;default:throw new Error('Unrecognized teardown '+teardown+' added to Subscription.');}return sub;}/**
       * Removes a Subscription from the internal list of subscriptions that will
       * unsubscribe during the unsubscribe process of this Subscription.
       * @param {Subscription} subscription The subscription to remove.
       * @return {void}
       */},{key:'remove',value:function remove(subscription){// HACK: This might be redundant because of the logic in `add()`
if(subscription==null||subscription===this||subscription===Subscription.EMPTY){return;}var subscriptions=this._subscriptions;if(subscriptions){var subscriptionIndex=subscriptions.indexOf(subscription);if(subscriptionIndex!==-1){subscriptions.splice(subscriptionIndex,1);}}}}]);return Subscription;}();Subscription.EMPTY=function(empty){empty.isUnsubscribed=true;return empty;}(new Subscription());var empty={isUnsubscribed:true,next:function next(value){},error:function error(err){throw err;},complete:function complete(){}};var Symbol$1=root.Symbol;var $$rxSubscriber=typeof Symbol$1==='function'&&typeof Symbol$1.for==='function'?Symbol$1.for('rxSubscriber'):'@@rxSubscriber';/**
   * Implements the {@link Observer} interface and extends the
   * {@link Subscription} class. While the {@link Observer} is the public API for
   * consuming the values of an {@link Observable}, all Observers get converted to
   * a Subscriber, in order to provide Subscription-like capabilities such as
   * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
   * implementing operators, but it is rarely used as a public API.
   *
   * @class Subscriber<T>
   */var Subscriber=function(_Subscription){_inherits(Subscriber,_Subscription);/**
       * @param {Observer|function(value: T): void} [destinationOrNext] A partially
       * defined Observer or a `next` callback function.
       * @param {function(e: ?any): void} [error] The `error` callback of an
       * Observer.
       * @param {function(): void} [complete] The `complete` callback of an
       * Observer.
       */function Subscriber(destinationOrNext,error,complete){_classCallCheck(this,Subscriber);var _this18=_possibleConstructorReturn(this,Object.getPrototypeOf(Subscriber).call(this));_this18.syncErrorValue=null;_this18.syncErrorThrown=false;_this18.syncErrorThrowable=false;_this18.isStopped=false;switch(arguments.length){case 0:_this18.destination=empty;break;case 1:if(!destinationOrNext){_this18.destination=empty;break;}if((typeof destinationOrNext==='undefined'?'undefined':_typeof(destinationOrNext))==='object'){if(destinationOrNext instanceof Subscriber){_this18.destination=destinationOrNext;_this18.destination.add(_this18);}else{_this18.syncErrorThrowable=true;_this18.destination=new SafeSubscriber(_this18,destinationOrNext);}break;}default:_this18.syncErrorThrowable=true;_this18.destination=new SafeSubscriber(_this18,destinationOrNext,error,complete);break;}return _this18;}_createClass(Subscriber,[{key:$$rxSubscriber,value:function value(){return this;}/**
       * A static factory for a Subscriber, given a (potentially partial) definition
       * of an Observer.
       * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
       * @param {function(e: ?any): void} [error] The `error` callback of an
       * Observer.
       * @param {function(): void} [complete] The `complete` callback of an
       * Observer.
       * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
       * Observer represented by the given arguments.
       */},{key:'next',/**
       * The {@link Observer} callback to receive notifications of type `next` from
       * the Observable, with a value. The Observable may call this method 0 or more
       * times.
       * @param {T} [value] The `next` value.
       * @return {void}
       */value:function next(value){if(!this.isStopped){this._next(value);}}/**
       * The {@link Observer} callback to receive notifications of type `error` from
       * the Observable, with an attached {@link Error}. Notifies the Observer that
       * the Observable has experienced an error condition.
       * @param {any} [err] The `error` exception.
       * @return {void}
       */},{key:'error',value:function error(err){if(!this.isStopped){this.isStopped=true;this._error(err);}}/**
       * The {@link Observer} callback to receive a valueless notification of type
       * `complete` from the Observable. Notifies the Observer that the Observable
       * has finished sending push-based notifications.
       * @return {void}
       */},{key:'complete',value:function complete(){if(!this.isStopped){this.isStopped=true;this._complete();}}},{key:'unsubscribe',value:function unsubscribe(){if(this.isUnsubscribed){return;}this.isStopped=true;_get(Object.getPrototypeOf(Subscriber.prototype),'unsubscribe',this).call(this);}},{key:'_next',value:function _next(value){this.destination.next(value);}},{key:'_error',value:function _error(err){this.destination.error(err);this.unsubscribe();}},{key:'_complete',value:function _complete(){this.destination.complete();this.unsubscribe();}}],[{key:'create',value:function create(next,error,complete){var subscriber=new Subscriber(next,error,complete);subscriber.syncErrorThrowable=false;return subscriber;}}]);return Subscriber;}(Subscription);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SafeSubscriber=function(_Subscriber){_inherits(SafeSubscriber,_Subscriber);function SafeSubscriber(_parent,observerOrNext,error,complete){_classCallCheck(this,SafeSubscriber);var _this19=_possibleConstructorReturn(this,Object.getPrototypeOf(SafeSubscriber).call(this));_this19._parent=_parent;var next=void 0;var context=_this19;if(isFunction$1(observerOrNext)){next=observerOrNext;}else if(observerOrNext){context=observerOrNext;next=observerOrNext.next;error=observerOrNext.error;complete=observerOrNext.complete;if(isFunction$1(context.unsubscribe)){_this19.add(context.unsubscribe.bind(context));}context.unsubscribe=_this19.unsubscribe.bind(_this19);}_this19._context=context;_this19._next=next;_this19._error=error;_this19._complete=complete;return _this19;}_createClass(SafeSubscriber,[{key:'next',value:function next(value){if(!this.isStopped&&this._next){var _parent=this._parent;if(!_parent.syncErrorThrowable){this.__tryOrUnsub(this._next,value);}else if(this.__tryOrSetError(_parent,this._next,value)){this.unsubscribe();}}}},{key:'error',value:function error(err){if(!this.isStopped){var _parent=this._parent;if(this._error){if(!_parent.syncErrorThrowable){this.__tryOrUnsub(this._error,err);this.unsubscribe();}else{this.__tryOrSetError(_parent,this._error,err);this.unsubscribe();}}else if(!_parent.syncErrorThrowable){this.unsubscribe();throw err;}else{_parent.syncErrorValue=err;_parent.syncErrorThrown=true;this.unsubscribe();}}}},{key:'complete',value:function complete(){if(!this.isStopped){var _parent=this._parent;if(this._complete){if(!_parent.syncErrorThrowable){this.__tryOrUnsub(this._complete);this.unsubscribe();}else{this.__tryOrSetError(_parent,this._complete);this.unsubscribe();}}else{this.unsubscribe();}}}},{key:'__tryOrUnsub',value:function __tryOrUnsub(fn,value){try{fn.call(this._context,value);}catch(err){this.unsubscribe();throw err;}}},{key:'__tryOrSetError',value:function __tryOrSetError(parent,fn,value){try{fn.call(this._context,value);}catch(err){parent.syncErrorValue=err;parent.syncErrorThrown=true;return true;}return false;}},{key:'_unsubscribe',value:function _unsubscribe(){var _parent=this._parent;this._context=null;this._parent=null;_parent.unsubscribe();}}]);return SafeSubscriber;}(Subscriber);function toSubscriber(nextOrObserver,error,complete){if(nextOrObserver){if(nextOrObserver instanceof Subscriber){return nextOrObserver;}if(nextOrObserver[$$rxSubscriber]){return nextOrObserver[$$rxSubscriber]();}}if(!nextOrObserver&&!error&&!complete){return new Subscriber();}return new Subscriber(nextOrObserver,error,complete);}var commonjsGlobal=typeof window!=='undefined'?window:typeof global!=='undefined'?global:typeof self!=='undefined'?self:{};function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}var ponyfill=createCommonjsModule(function(module){'use strict';module.exports=function symbolObservablePonyfill(root){var result;var _Symbol=root.Symbol;if(typeof _Symbol==='function'){if(_Symbol.observable){result=_Symbol.observable;}else{result=_Symbol('observable');_Symbol.observable=result;}}else{result='@@observable';}return result;};});var require$$0=ponyfill&&(typeof ponyfill==='undefined'?'undefined':_typeof(ponyfill))==='object'&&'default'in ponyfill?ponyfill['default']:ponyfill;var index=createCommonjsModule(function(module){/* global window */'use strict';module.exports=require$$0(commonjsGlobal||window||commonjsGlobal);});var index$1=index&&(typeof index==='undefined'?'undefined':_typeof(index))==='object'&&'default'in index?index['default']:index;var $$observable=Object.freeze({default:index$1});/**
   * A representation of any set of values over any amount of time. This the most basic building block
   * of RxJS.
   *
   * @class Observable<T>
   */var Observable=function(){/**
       * @constructor
       * @param {Function} subscribe the function that is  called when the Observable is
       * initially subscribed to. This function is given a Subscriber, to which new values
       * can be `next`ed, or an `error` method can be called to raise an error, or
       * `complete` can be called to notify of a successful completion.
       */function Observable(subscribe){_classCallCheck(this,Observable);this._isScalar=false;if(subscribe){this._subscribe=subscribe;}}/**
       * Creates a new Observable, with this Observable as the source, and the passed
       * operator defined as the new observable's operator.
       * @method lift
       * @param {Operator} operator the operator defining the operation to take on the observable
       * @return {Observable} a new observable with the Operator applied
       */_createClass(Observable,[{key:'lift',value:function lift(operator){var observable=new Observable();observable.source=this;observable.operator=operator;return observable;}/**
       * Registers handlers for handling emitted values, error and completions from the observable, and
       *  executes the observable's subscriber function, which will take action to set up the underlying data stream
       * @method subscribe
       * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
       *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
       * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
       *  the error will be thrown as unhandled
       * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
       * @return {ISubscription} a subscription reference to the registered handlers
       */},{key:'subscribe',value:function subscribe(observerOrNext,error,complete){var operator=this.operator;var sink=toSubscriber(observerOrNext,error,complete);if(operator){operator.call(sink,this);}else{sink.add(this._subscribe(sink));}if(sink.syncErrorThrowable){sink.syncErrorThrowable=false;if(sink.syncErrorThrown){throw sink.syncErrorValue;}}return sink;}/**
       * @method forEach
       * @param {Function} next a handler for each value emitted by the observable
       * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
       * @return {Promise} a promise that either resolves on observable completion or
       *  rejects with the handled error
       */},{key:'forEach',value:function forEach(next,PromiseCtor){var _this20=this;if(!PromiseCtor){if(root.Rx&&root.Rx.config&&root.Rx.config.Promise){PromiseCtor=root.Rx.config.Promise;}else if(root.Promise){PromiseCtor=root.Promise;}}if(!PromiseCtor){throw new Error('no Promise impl found');}return new PromiseCtor(function(resolve,reject){var subscription=_this20.subscribe(function(value){if(subscription){// if there is a subscription, then we can surmise
// the next handling is asynchronous. Any errors thrown
// need to be rejected explicitly and unsubscribe must be
// called manually
try{next(value);}catch(err){reject(err);subscription.unsubscribe();}}else{// if there is NO subscription, then we're getting a nexted
// value synchronously during subscription. We can just call it.
// If it errors, Observable's `subscribe` imple will ensure the
// unsubscription logic is called, then synchronously rethrow the error.
// After that, Promise will trap the error and send it
// down the rejection path.
next(value);}},reject,resolve);});}},{key:'_subscribe',value:function _subscribe(subscriber){return this.source.subscribe(subscriber);}/**
       * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
       * @method Symbol.observable
       * @return {Observable} this instance of the observable
       */},{key:$$observable,value:function value(){return this;}}]);return Observable;}();// HACK: Since TypeScript inherits static properties too, we have to
// fight against TypeScript here so Subject can have a different static create signature
/**
   * Creates a new cold Observable by calling the Observable constructor
   * @static true
   * @owner Observable
   * @method create
   * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
   * @return {Observable} a new cold observable
   */Observable.create=function(subscribe){return new Observable(subscribe);};/**
   * An error thrown when an action is invalid because the object has been
   * unsubscribed.
   *
   * @see {@link Subject}
   * @see {@link BehaviorSubject}
   *
   * @class ObjectUnsubscribedError
   */var ObjectUnsubscribedError=function(_Error4){_inherits(ObjectUnsubscribedError,_Error4);function ObjectUnsubscribedError(){_classCallCheck(this,ObjectUnsubscribedError);var _this21=_possibleConstructorReturn(this,Object.getPrototypeOf(ObjectUnsubscribedError).call(this,'object unsubscribed'));_this21.name='ObjectUnsubscribedError';return _this21;}return ObjectUnsubscribedError;}(Error);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @ignore
   * @extends {Ignored}
   */var SubjectSubscription=function(_Subscription2){_inherits(SubjectSubscription,_Subscription2);function SubjectSubscription(subject,subscriber){_classCallCheck(this,SubjectSubscription);var _this22=_possibleConstructorReturn(this,Object.getPrototypeOf(SubjectSubscription).call(this));_this22.subject=subject;_this22.subscriber=subscriber;_this22.isUnsubscribed=false;return _this22;}_createClass(SubjectSubscription,[{key:'unsubscribe',value:function unsubscribe(){if(this.isUnsubscribed){return;}this.isUnsubscribed=true;var subject=this.subject;var observers=subject.observers;this.subject=null;if(!observers||observers.length===0||subject.isStopped||subject.isUnsubscribed){return;}var subscriberIndex=observers.indexOf(this.subscriber);if(subscriberIndex!==-1){observers.splice(subscriberIndex,1);}}}]);return SubjectSubscription;}(Subscription);/**
   * @class SubjectSubscriber<T>
   */var SubjectSubscriber=function(_Subscriber2){_inherits(SubjectSubscriber,_Subscriber2);function SubjectSubscriber(destination){_classCallCheck(this,SubjectSubscriber);var _this23=_possibleConstructorReturn(this,Object.getPrototypeOf(SubjectSubscriber).call(this,destination));_this23.destination=destination;return _this23;}return SubjectSubscriber;}(Subscriber);/**
   * @class Subject<T>
   */var Subject=function(_Observable){_inherits(Subject,_Observable);function Subject(){_classCallCheck(this,Subject);var _this24=_possibleConstructorReturn(this,Object.getPrototypeOf(Subject).call(this));_this24.observers=[];_this24.isUnsubscribed=false;_this24.isStopped=false;_this24.hasError=false;_this24.thrownError=null;return _this24;}_createClass(Subject,[{key:$$rxSubscriber,value:function value(){return new SubjectSubscriber(this);}},{key:'lift',value:function lift(operator){var subject=new AnonymousSubject(this,this);subject.operator=operator;return subject;}},{key:'next',value:function next(value){if(this.isUnsubscribed){throw new ObjectUnsubscribedError();}if(!this.isStopped){var observers=this.observers;var len=observers.length;var copy=observers.slice();for(var i=0;i<len;i++){copy[i].next(value);}}}},{key:'error',value:function error(err){if(this.isUnsubscribed){throw new ObjectUnsubscribedError();}this.hasError=true;this.thrownError=err;this.isStopped=true;var observers=this.observers;var len=observers.length;var copy=observers.slice();for(var i=0;i<len;i++){copy[i].error(err);}this.observers.length=0;}},{key:'complete',value:function complete(){if(this.isUnsubscribed){throw new ObjectUnsubscribedError();}this.isStopped=true;var observers=this.observers;var len=observers.length;var copy=observers.slice();for(var i=0;i<len;i++){copy[i].complete();}this.observers.length=0;}},{key:'unsubscribe',value:function unsubscribe(){this.isStopped=true;this.isUnsubscribed=true;this.observers=null;}},{key:'_subscribe',value:function _subscribe(subscriber){if(this.isUnsubscribed){throw new ObjectUnsubscribedError();}else if(this.hasError){subscriber.error(this.thrownError);return Subscription.EMPTY;}else if(this.isStopped){subscriber.complete();return Subscription.EMPTY;}else{this.observers.push(subscriber);return new SubjectSubscription(this,subscriber);}}},{key:'asObservable',value:function asObservable(){var observable=new Observable();observable.source=this;return observable;}}]);return Subject;}(Observable);Subject.create=function(destination,source){return new AnonymousSubject(destination,source);};/**
   * @class AnonymousSubject<T>
   */var AnonymousSubject=function(_Subject){_inherits(AnonymousSubject,_Subject);function AnonymousSubject(destination,source){_classCallCheck(this,AnonymousSubject);var _this25=_possibleConstructorReturn(this,Object.getPrototypeOf(AnonymousSubject).call(this));_this25.destination=destination;_this25.source=source;return _this25;}_createClass(AnonymousSubject,[{key:'next',value:function next(value){var destination=this.destination;if(destination&&destination.next){destination.next(value);}}},{key:'error',value:function error(err){var destination=this.destination;if(destination&&destination.error){this.destination.error(err);}}},{key:'complete',value:function complete(){var destination=this.destination;if(destination&&destination.complete){this.destination.complete();}}},{key:'_subscribe',value:function _subscribe(subscriber){var source=this.source;if(source){return this.source.subscribe(subscriber);}else{return Subscription.EMPTY;}}}]);return AnonymousSubject;}(Subject);/**
   * We need this JSDoc comment for affecting ESDoc.
   * @extends {Ignored}
   * @hide true
   */var PromiseObservable=function(_Observable2){_inherits(PromiseObservable,_Observable2);function PromiseObservable(promise){var scheduler=arguments.length<=1||arguments[1]===undefined?null:arguments[1];_classCallCheck(this,PromiseObservable);var _this26=_possibleConstructorReturn(this,Object.getPrototypeOf(PromiseObservable).call(this));_this26.promise=promise;_this26.scheduler=scheduler;return _this26;}/**
       * Converts a Promise to an Observable.
       *
       * <span class="informal">Returns an Observable that just emits the Promise's
       * resolved value, then completes.</span>
       *
       * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
       * Observable. If the Promise resolves with a value, the output Observable
       * emits that resolved value as a `next`, and then completes. If the Promise
       * is rejected, then the output Observable emits the corresponding Error.
       *
       * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
       * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
       * result.subscribe(x => console.log(x), e => console.error(e));
       *
       * @see {@link bindCallback}
       * @see {@link from}
       *
       * @param {Promise<T>} promise The promise to be converted.
       * @param {Scheduler} [scheduler] An optional Scheduler to use for scheduling
       * the delivery of the resolved value (or the rejection).
       * @return {Observable<T>} An Observable which wraps the Promise.
       * @static true
       * @name fromPromise
       * @owner Observable
       */_createClass(PromiseObservable,[{key:'_subscribe',value:function _subscribe(subscriber){var _this27=this;var promise=this.promise;var scheduler=this.scheduler;if(scheduler==null){if(this._isScalar){if(!subscriber.isUnsubscribed){subscriber.next(this.value);subscriber.complete();}}else{promise.then(function(value){_this27.value=value;_this27._isScalar=true;if(!subscriber.isUnsubscribed){subscriber.next(value);subscriber.complete();}},function(err){if(!subscriber.isUnsubscribed){subscriber.error(err);}}).then(null,function(err){// escape the promise trap, throw unhandled errors
root.setTimeout(function(){throw err;});});}}else{if(this._isScalar){if(!subscriber.isUnsubscribed){return scheduler.schedule(dispatchNext,0,{value:this.value,subscriber:subscriber});}}else{promise.then(function(value){_this27.value=value;_this27._isScalar=true;if(!subscriber.isUnsubscribed){subscriber.add(scheduler.schedule(dispatchNext,0,{value:value,subscriber:subscriber}));}},function(err){if(!subscriber.isUnsubscribed){subscriber.add(scheduler.schedule(dispatchError,0,{err:err,subscriber:subscriber}));}}).then(null,function(err){// escape the promise trap, throw unhandled errors
root.setTimeout(function(){throw err;});});}}}}],[{key:'create',value:function create(promise){var scheduler=arguments.length<=1||arguments[1]===undefined?null:arguments[1];return new PromiseObservable(promise,scheduler);}}]);return PromiseObservable;}(Observable);function dispatchNext(arg){var value=arg.value;var subscriber=arg.subscriber;if(!subscriber.isUnsubscribed){subscriber.next(value);subscriber.complete();}}function dispatchError(arg){var err=arg.err;var subscriber=arg.subscriber;if(!subscriber.isUnsubscribed){subscriber.error(err);}}/**
   * @param PromiseCtor
   * @return {Promise<T>}
   * @method toPromise
   * @owner Observable
   */function _toPromise(PromiseCtor){var _this28=this;if(!PromiseCtor){if(root.Rx&&root.Rx.config&&root.Rx.config.Promise){PromiseCtor=root.Rx.config.Promise;}else if(root.Promise){PromiseCtor=root.Promise;}}if(!PromiseCtor){throw new Error('no Promise impl found');}return new PromiseCtor(function(resolve,reject){var value=void 0;_this28.subscribe(function(x){return value=x;},function(err){return reject(err);},function(){return resolve(value);});});}var PromiseCompleter=function PromiseCompleter(){var _this29=this;_classCallCheck(this,PromiseCompleter);this.promise=new Promise(function(res,rej){_this29.resolve=res;_this29.reject=rej;});};var PromiseWrapper=function(){function PromiseWrapper(){_classCallCheck(this,PromiseWrapper);}_createClass(PromiseWrapper,null,[{key:'resolve',value:function resolve(obj){return Promise.resolve(obj);}},{key:'reject',value:function reject(obj,_){return Promise.reject(obj);}// Note: We can't rename this method into `catch`, as this is not a valid
// method name in Dart.
},{key:'catchError',value:function catchError(promise,onError){return promise.catch(onError);}},{key:'all',value:function all(promises){if(promises.length==0)return Promise.resolve([]);return Promise.all(promises);}},{key:'then',value:function then(promise,success,rejection){return promise.then(success,rejection);}},{key:'wrap',value:function wrap(computation){return new Promise(function(res,rej){try{res(computation());}catch(e){rej(e);}});}},{key:'scheduleMicrotask',value:function scheduleMicrotask(computation){PromiseWrapper.then(PromiseWrapper.resolve(null),computation,function(_){});}},{key:'completer',value:function completer(){return new PromiseCompleter();}}]);return PromiseWrapper;}();var ObservableWrapper=function(){function ObservableWrapper(){_classCallCheck(this,ObservableWrapper);}_createClass(ObservableWrapper,null,[{key:'subscribe',// TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
value:function subscribe(emitter,onNext,onError){var onComplete=arguments.length<=3||arguments[3]===undefined?function(){}:arguments[3];onError=typeof onError==='function'&&onError||noop;onComplete=typeof onComplete==='function'&&onComplete||noop;return emitter.subscribe({next:onNext,error:onError,complete:onComplete});}},{key:'isObservable',value:function isObservable(obs){return!!obs.subscribe;}/**
       * Returns whether `obs` has any subscribers listening to events.
       */},{key:'hasSubscribers',value:function hasSubscribers(obs){return obs.observers.length>0;}},{key:'dispose',value:function dispose(subscription){subscription.unsubscribe();}/**
       * @deprecated - use callEmit() instead
       */},{key:'callNext',value:function callNext(emitter,value){emitter.emit(value);}},{key:'callEmit',value:function callEmit(emitter,value){emitter.emit(value);}},{key:'callError',value:function callError(emitter,error){emitter.error(error);}},{key:'callComplete',value:function callComplete(emitter){emitter.complete();}},{key:'fromPromise',value:function fromPromise(promise){return PromiseObservable.create(promise);}},{key:'toPromise',value:function toPromise(obj){return _toPromise.call(obj);}}]);return ObservableWrapper;}();/**
   * Use by directives and components to emit custom Events.
   *
   * ### Examples
   *
   * In the following example, `Zippy` alternatively emits `open` and `close` events when its
   * title gets clicked:
   *
   * ```
   * @Component({
   *   selector: 'zippy',
   *   template: `
   *   <div class="zippy">
   *     <div (click)="toggle()">Toggle</div>
   *     <div [hidden]="!visible">
   *       <ng-content></ng-content>
   *     </div>
   *  </div>`})
   * export class Zippy {
   *   visible: boolean = true;
   *   @Output() open: EventEmitter<any> = new EventEmitter();
   *   @Output() close: EventEmitter<any> = new EventEmitter();
   *
   *   toggle() {
   *     this.visible = !this.visible;
   *     if (this.visible) {
   *       this.open.emit(null);
   *     } else {
   *       this.close.emit(null);
   *     }
   *   }
   * }
   * ```
   *
   * The events payload can be accessed by the parameter `$event` on the components output event
   * handler:
   *
   * ```
   * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
   * ```
   *
   * Uses Rx.Observable but provides an adapter to make it work as specified here:
   * https://github.com/jhusain/observable-spec
   *
   * Once a reference implementation of the spec is available, switch to it.
   * @stable
   */var EventEmitter=function(_Subject2){_inherits(EventEmitter,_Subject2);/**
       * Creates an instance of [EventEmitter], which depending on [isAsync],
       * delivers events synchronously or asynchronously.
       */function EventEmitter(){var isAsync=arguments.length<=0||arguments[0]===undefined?false:arguments[0];_classCallCheck(this,EventEmitter);var _this30=_possibleConstructorReturn(this,Object.getPrototypeOf(EventEmitter).call(this));_this30.__isAsync=isAsync;return _this30;}_createClass(EventEmitter,[{key:'emit',value:function emit(value){_get(Object.getPrototypeOf(EventEmitter.prototype),'next',this).call(this,value);}/**
       * @deprecated - use .emit(value) instead
       */},{key:'next',value:function next(value){_get(Object.getPrototypeOf(EventEmitter.prototype),'next',this).call(this,value);}},{key:'subscribe',value:function subscribe(generatorOrNext,error,complete){var schedulerFn=void 0;var errorFn=function errorFn(err){return null;};var completeFn=function completeFn(){return null;};if(generatorOrNext&&(typeof generatorOrNext==='undefined'?'undefined':_typeof(generatorOrNext))==='object'){schedulerFn=this.__isAsync?function(value/** TODO #9100 */){setTimeout(function(){return generatorOrNext.next(value);});}:function(value/** TODO #9100 */){generatorOrNext.next(value);};if(generatorOrNext.error){errorFn=this.__isAsync?function(err){setTimeout(function(){return generatorOrNext.error(err);});}:function(err){generatorOrNext.error(err);};}if(generatorOrNext.complete){completeFn=this.__isAsync?function(){setTimeout(function(){return generatorOrNext.complete();});}:function(){generatorOrNext.complete();};}}else{schedulerFn=this.__isAsync?function(value/** TODO #9100 */){setTimeout(function(){return generatorOrNext(value);});}:function(value/** TODO #9100 */){generatorOrNext(value);};if(error){errorFn=this.__isAsync?function(err){setTimeout(function(){return error(err);});}:function(err){error(err);};}if(complete){completeFn=this.__isAsync?function(){setTimeout(function(){return complete();});}:function(){complete();};}}return _get(Object.getPrototypeOf(EventEmitter.prototype),'subscribe',this).call(this,schedulerFn,errorFn,completeFn);}}]);return EventEmitter;}(Subject);/**
   * A DI Token representing a unique string id assigned to the application by Angular and used
   * primarily for prefixing application attributes and CSS styles when
   * {@link ViewEncapsulation#Emulated} is being used.
   *
   * If you need to avoid randomly generated value to be used as an application id, you can provide
   * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
   * using this token.
   * @experimental
   */var APP_ID=new OpaqueToken('AppId');function _appIdRandomProviderFactory(){return''+_randomChar()+_randomChar()+_randomChar();}/**
   * Providers that will generate a random APP_ID_TOKEN.
   * @experimental
   */var APP_ID_RANDOM_PROVIDER=/*@ts2dart_const*//* @ts2dart_Provider */{provide:APP_ID,useFactory:_appIdRandomProviderFactory,deps:[]};function _randomChar(){return StringWrapper.fromCharCode(97+Math.floor(Math.random()*25));}/**
   * A function that will be executed when a platform is initialized.
   * @experimental
   */var PLATFORM_INITIALIZER=/*@ts2dart_const*/new OpaqueToken('Platform Initializer');/**
   * A function that will be executed when an application is initialized.
   * @experimental
   */var APP_INITIALIZER=/*@ts2dart_const*/new OpaqueToken('Application Initializer');/**
   * A token which indicates the root directory of the application
   * @experimental
   */var PACKAGE_ROOT_URL=/*@ts2dart_const*/new OpaqueToken('Application Packages Root URL');// Note: Need to rename warn as in Dart
// class members and imports can't use the same name.
var _warnImpl=warn;var Console=function(){function Console(){_classCallCheck(this,Console);}_createClass(Console,[{key:'log',value:function log(message){print(message);}// Note: for reporting errors use `DOM.logError()` as it is platform specific
},{key:'warn',value:function warn(message){_warnImpl(message);}}]);return Console;}();/** @nocollapse */Console.decorators=[{type:Injectable}];/* @ts2dart_const */var DefaultIterableDifferFactory=function(){function DefaultIterableDifferFactory(){_classCallCheck(this,DefaultIterableDifferFactory);}_createClass(DefaultIterableDifferFactory,[{key:'supports',value:function supports(obj){return isListLikeIterable(obj);}},{key:'create',value:function create(cdRef,trackByFn){return new DefaultIterableDiffer(trackByFn);}}]);return DefaultIterableDifferFactory;}();var trackByIdentity=function trackByIdentity(index,item){return item;};/**
   * @stable
   */var DefaultIterableDiffer=function(){function DefaultIterableDiffer(_trackByFn){_classCallCheck(this,DefaultIterableDiffer);this._trackByFn=_trackByFn;this._length=null;this._collection=null;// Keeps track of the used records at any point in time (during & across `_check()` calls)
this._linkedRecords=null;// Keeps track of the removed records at any point in time during `_check()` calls.
this._unlinkedRecords=null;this._previousItHead=null;this._itHead=null;this._itTail=null;this._additionsHead=null;this._additionsTail=null;this._movesHead=null;this._movesTail=null;this._removalsHead=null;this._removalsTail=null;// Keeps track of records where custom track by is the same, but item identity has changed
this._identityChangesHead=null;this._identityChangesTail=null;this._trackByFn=isPresent(this._trackByFn)?this._trackByFn:trackByIdentity;}_createClass(DefaultIterableDiffer,[{key:'forEachItem',value:function forEachItem(fn){var record;for(record=this._itHead;record!==null;record=record._next){fn(record);}}},{key:'forEachPreviousItem',value:function forEachPreviousItem(fn){var record;for(record=this._previousItHead;record!==null;record=record._nextPrevious){fn(record);}}},{key:'forEachAddedItem',value:function forEachAddedItem(fn){var record;for(record=this._additionsHead;record!==null;record=record._nextAdded){fn(record);}}},{key:'forEachMovedItem',value:function forEachMovedItem(fn){var record;for(record=this._movesHead;record!==null;record=record._nextMoved){fn(record);}}},{key:'forEachRemovedItem',value:function forEachRemovedItem(fn){var record;for(record=this._removalsHead;record!==null;record=record._nextRemoved){fn(record);}}},{key:'forEachIdentityChange',value:function forEachIdentityChange(fn){var record;for(record=this._identityChangesHead;record!==null;record=record._nextIdentityChange){fn(record);}}},{key:'diff',value:function diff(collection){if(isBlank(collection))collection=[];if(!isListLikeIterable(collection)){throw new BaseException('Error trying to diff \''+collection+'\'');}if(this.check(collection)){return this;}else{return null;}}},{key:'onDestroy',value:function onDestroy(){}// todo(vicb): optim for UnmodifiableListView (frozen arrays)
},{key:'check',value:function check(collection){var _this31=this;this._reset();var record=this._itHead;var mayBeDirty=false;var index;var item;var itemTrackBy;if(isArray(collection)){var list=collection;this._length=collection.length;for(index=0;index<this._length;index++){item=list[index];itemTrackBy=this._trackByFn(index,item);if(record===null||!looseIdentical(record.trackById,itemTrackBy)){record=this._mismatch(record,item,itemTrackBy,index);mayBeDirty=true;}else{if(mayBeDirty){// TODO(misko): can we limit this to duplicates only?
record=this._verifyReinsertion(record,item,itemTrackBy,index);}if(!looseIdentical(record.item,item))this._addIdentityChange(record,item);}record=record._next;}}else{index=0;iterateListLike(collection,function(item/** TODO #9100 */){itemTrackBy=_this31._trackByFn(index,item);if(record===null||!looseIdentical(record.trackById,itemTrackBy)){record=_this31._mismatch(record,item,itemTrackBy,index);mayBeDirty=true;}else{if(mayBeDirty){// TODO(misko): can we limit this to duplicates only?
record=_this31._verifyReinsertion(record,item,itemTrackBy,index);}if(!looseIdentical(record.item,item))_this31._addIdentityChange(record,item);}record=record._next;index++;});this._length=index;}this._truncate(record);this._collection=collection;return this.isDirty;}/* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
       * changes.
       */},{key:'_reset',/**
       * Reset the state of the change objects to show no changes. This means set previousKey to
       * currentKey, and clear all of the queues (additions, moves, removals).
       * Set the previousIndexes of moved and added items to their currentIndexes
       * Reset the list of additions, moves and removals
       *
       * @internal
       */value:function _reset(){if(this.isDirty){var record;var nextRecord;for(record=this._previousItHead=this._itHead;record!==null;record=record._next){record._nextPrevious=record._next;}for(record=this._additionsHead;record!==null;record=record._nextAdded){record.previousIndex=record.currentIndex;}this._additionsHead=this._additionsTail=null;for(record=this._movesHead;record!==null;record=nextRecord){record.previousIndex=record.currentIndex;nextRecord=record._nextMoved;}this._movesHead=this._movesTail=null;this._removalsHead=this._removalsTail=null;this._identityChangesHead=this._identityChangesTail=null;}}/**
       * This is the core function which handles differences between collections.
       *
       * - `record` is the record which we saw at this position last time. If null then it is a new
       *   item.
       * - `item` is the current item in the collection
       * - `index` is the position of the item in the collection
       *
       * @internal
       */},{key:'_mismatch',value:function _mismatch(record,item,itemTrackBy,index){// The previous record after which we will append the current one.
var previousRecord;if(record===null){previousRecord=this._itTail;}else{previousRecord=record._prev;// Remove the record from the collection since we know it does not match the item.
this._remove(record);}// Attempt to see if we have seen the item before.
record=this._linkedRecords===null?null:this._linkedRecords.get(itemTrackBy,index);if(record!==null){// We have seen this before, we need to move it forward in the collection.
// But first we need to check if identity changed, so we can update in view if necessary
if(!looseIdentical(record.item,item))this._addIdentityChange(record,item);this._moveAfter(record,previousRecord,index);}else{// Never seen it, check evicted list.
record=this._unlinkedRecords===null?null:this._unlinkedRecords.get(itemTrackBy);if(record!==null){// It is an item which we have evicted earlier: reinsert it back into the list.
// But first we need to check if identity changed, so we can update in view if necessary
if(!looseIdentical(record.item,item))this._addIdentityChange(record,item);this._reinsertAfter(record,previousRecord,index);}else{// It is a new item: add it.
record=this._addAfter(new CollectionChangeRecord(item,itemTrackBy),previousRecord,index);}}return record;}/**
       * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
       *
       * Use case: `[a, a]` => `[b, a, a]`
       *
       * If we did not have this check then the insertion of `b` would:
       *   1) evict first `a`
       *   2) insert `b` at `0` index.
       *   3) leave `a` at index `1` as is. <-- this is wrong!
       *   3) reinsert `a` at index 2. <-- this is wrong!
       *
       * The correct behavior is:
       *   1) evict first `a`
       *   2) insert `b` at `0` index.
       *   3) reinsert `a` at index 1.
       *   3) move `a` at from `1` to `2`.
       *
       *
       * Double check that we have not evicted a duplicate item. We need to check if the item type may
       * have already been removed:
       * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
       * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
       * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
       * at the end.
       *
       * @internal
       */},{key:'_verifyReinsertion',value:function _verifyReinsertion(record,item,itemTrackBy,index){var reinsertRecord=this._unlinkedRecords===null?null:this._unlinkedRecords.get(itemTrackBy);if(reinsertRecord!==null){record=this._reinsertAfter(reinsertRecord,record._prev,index);}else if(record.currentIndex!=index){record.currentIndex=index;this._addToMoves(record,index);}return record;}/**
       * Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
       *
       * - `record` The first excess {@link CollectionChangeRecord}.
       *
       * @internal
       */},{key:'_truncate',value:function _truncate(record){// Anything after that needs to be removed;
while(record!==null){var nextRecord=record._next;this._addToRemovals(this._unlink(record));record=nextRecord;}if(this._unlinkedRecords!==null){this._unlinkedRecords.clear();}if(this._additionsTail!==null){this._additionsTail._nextAdded=null;}if(this._movesTail!==null){this._movesTail._nextMoved=null;}if(this._itTail!==null){this._itTail._next=null;}if(this._removalsTail!==null){this._removalsTail._nextRemoved=null;}if(this._identityChangesTail!==null){this._identityChangesTail._nextIdentityChange=null;}}/** @internal */},{key:'_reinsertAfter',value:function _reinsertAfter(record,prevRecord,index){if(this._unlinkedRecords!==null){this._unlinkedRecords.remove(record);}var prev=record._prevRemoved;var next=record._nextRemoved;if(prev===null){this._removalsHead=next;}else{prev._nextRemoved=next;}if(next===null){this._removalsTail=prev;}else{next._prevRemoved=prev;}this._insertAfter(record,prevRecord,index);this._addToMoves(record,index);return record;}/** @internal */},{key:'_moveAfter',value:function _moveAfter(record,prevRecord,index){this._unlink(record);this._insertAfter(record,prevRecord,index);this._addToMoves(record,index);return record;}/** @internal */},{key:'_addAfter',value:function _addAfter(record,prevRecord,index){this._insertAfter(record,prevRecord,index);if(this._additionsTail===null){// todo(vicb)
// assert(this._additionsHead === null);
this._additionsTail=this._additionsHead=record;}else{// todo(vicb)
// assert(_additionsTail._nextAdded === null);
// assert(record._nextAdded === null);
this._additionsTail=this._additionsTail._nextAdded=record;}return record;}/** @internal */},{key:'_insertAfter',value:function _insertAfter(record,prevRecord,index){// todo(vicb)
// assert(record != prevRecord);
// assert(record._next === null);
// assert(record._prev === null);
var next=prevRecord===null?this._itHead:prevRecord._next;// todo(vicb)
// assert(next != record);
// assert(prevRecord != record);
record._next=next;record._prev=prevRecord;if(next===null){this._itTail=record;}else{next._prev=record;}if(prevRecord===null){this._itHead=record;}else{prevRecord._next=record;}if(this._linkedRecords===null){this._linkedRecords=new _DuplicateMap();}this._linkedRecords.put(record);record.currentIndex=index;return record;}/** @internal */},{key:'_remove',value:function _remove(record){return this._addToRemovals(this._unlink(record));}/** @internal */},{key:'_unlink',value:function _unlink(record){if(this._linkedRecords!==null){this._linkedRecords.remove(record);}var prev=record._prev;var next=record._next;// todo(vicb)
// assert((record._prev = null) === null);
// assert((record._next = null) === null);
if(prev===null){this._itHead=next;}else{prev._next=next;}if(next===null){this._itTail=prev;}else{next._prev=prev;}return record;}/** @internal */},{key:'_addToMoves',value:function _addToMoves(record,toIndex){// todo(vicb)
// assert(record._nextMoved === null);
if(record.previousIndex===toIndex){return record;}if(this._movesTail===null){// todo(vicb)
// assert(_movesHead === null);
this._movesTail=this._movesHead=record;}else{// todo(vicb)
// assert(_movesTail._nextMoved === null);
this._movesTail=this._movesTail._nextMoved=record;}return record;}/** @internal */},{key:'_addToRemovals',value:function _addToRemovals(record){if(this._unlinkedRecords===null){this._unlinkedRecords=new _DuplicateMap();}this._unlinkedRecords.put(record);record.currentIndex=null;record._nextRemoved=null;if(this._removalsTail===null){// todo(vicb)
// assert(_removalsHead === null);
this._removalsTail=this._removalsHead=record;record._prevRemoved=null;}else{// todo(vicb)
// assert(_removalsTail._nextRemoved === null);
// assert(record._nextRemoved === null);
record._prevRemoved=this._removalsTail;this._removalsTail=this._removalsTail._nextRemoved=record;}return record;}/** @internal */},{key:'_addIdentityChange',value:function _addIdentityChange(record,item){record.item=item;if(this._identityChangesTail===null){this._identityChangesTail=this._identityChangesHead=record;}else{this._identityChangesTail=this._identityChangesTail._nextIdentityChange=record;}return record;}},{key:'toString',value:function toString(){var list=[];this.forEachItem(function(record/** TODO #9100 */){return list.push(record);});var previous=[];this.forEachPreviousItem(function(record/** TODO #9100 */){return previous.push(record);});var additions=[];this.forEachAddedItem(function(record/** TODO #9100 */){return additions.push(record);});var moves=[];this.forEachMovedItem(function(record/** TODO #9100 */){return moves.push(record);});var removals=[];this.forEachRemovedItem(function(record/** TODO #9100 */){return removals.push(record);});var identityChanges=[];this.forEachIdentityChange(function(record/** TODO #9100 */){return identityChanges.push(record);});return'collection: '+list.join(', ')+'\n'+'previous: '+previous.join(', ')+'\n'+'additions: '+additions.join(', ')+'\n'+'moves: '+moves.join(', ')+'\n'+'removals: '+removals.join(', ')+'\n'+'identityChanges: '+identityChanges.join(', ')+'\n';}},{key:'collection',get:function get(){return this._collection;}},{key:'length',get:function get(){return this._length;}},{key:'isDirty',get:function get(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null;}}]);return DefaultIterableDiffer;}();/**
   * @stable
   */var CollectionChangeRecord=function(){function CollectionChangeRecord(item,trackById){_classCallCheck(this,CollectionChangeRecord);this.item=item;this.trackById=trackById;this.currentIndex=null;this.previousIndex=null;/** @internal */this._nextPrevious=null;/** @internal */this._prev=null;/** @internal */this._next=null;/** @internal */this._prevDup=null;/** @internal */this._nextDup=null;/** @internal */this._prevRemoved=null;/** @internal */this._nextRemoved=null;/** @internal */this._nextAdded=null;/** @internal */this._nextMoved=null;/** @internal */this._nextIdentityChange=null;}_createClass(CollectionChangeRecord,[{key:'toString',value:function toString(){return this.previousIndex===this.currentIndex?stringify(this.item):stringify(this.item)+'['+stringify(this.previousIndex)+'->'+stringify(this.currentIndex)+']';}}]);return CollectionChangeRecord;}();// A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
var _DuplicateItemRecordList=function(){function _DuplicateItemRecordList(){_classCallCheck(this,_DuplicateItemRecordList);/** @internal */this._head=null;/** @internal */this._tail=null;}/**
       * Append the record to the list of duplicates.
       *
       * Note: by design all records in the list of duplicates hold the same value in record.item.
       */_createClass(_DuplicateItemRecordList,[{key:'add',value:function add(record){if(this._head===null){this._head=this._tail=record;record._nextDup=null;record._prevDup=null;}else{// todo(vicb)
// assert(record.item ==  _head.item ||
//       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
this._tail._nextDup=record;record._prevDup=this._tail;record._nextDup=null;this._tail=record;}}// Returns a CollectionChangeRecord having CollectionChangeRecord.trackById == trackById and
// CollectionChangeRecord.currentIndex >= afterIndex
},{key:'get',value:function get(trackById,afterIndex){var record;for(record=this._head;record!==null;record=record._nextDup){if((afterIndex===null||afterIndex<record.currentIndex)&&looseIdentical(record.trackById,trackById)){return record;}}return null;}/**
       * Remove one {@link CollectionChangeRecord} from the list of duplicates.
       *
       * Returns whether the list of duplicates is empty.
       */},{key:'remove',value:function remove(record){// todo(vicb)
// assert(() {
//  // verify that the record being removed is in the list.
//  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
//    if (identical(cursor, record)) return true;
//  }
//  return false;
//});
var prev=record._prevDup;var next=record._nextDup;if(prev===null){this._head=next;}else{prev._nextDup=next;}if(next===null){this._tail=prev;}else{next._prevDup=prev;}return this._head===null;}}]);return _DuplicateItemRecordList;}();var _DuplicateMap=function(){function _DuplicateMap(){_classCallCheck(this,_DuplicateMap);this.map=new Map();}_createClass(_DuplicateMap,[{key:'put',value:function put(record){// todo(vicb) handle corner cases
var key=getMapKey(record.trackById);var duplicates=this.map.get(key);if(!isPresent(duplicates)){duplicates=new _DuplicateItemRecordList();this.map.set(key,duplicates);}duplicates.add(record);}/**
       * Retrieve the `value` using key. Because the CollectionChangeRecord value may be one which we
       * have already iterated over, we use the afterIndex to pretend it is not there.
       *
       * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
       * have any more `a`s needs to return the last `a` not the first or second.
       */},{key:'get',value:function get(trackById){var afterIndex=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var key=getMapKey(trackById);var recordList=this.map.get(key);return isBlank(recordList)?null:recordList.get(trackById,afterIndex);}/**
       * Removes a {@link CollectionChangeRecord} from the list of duplicates.
       *
       * The list of duplicates also is removed from the map if it gets empty.
       */},{key:'remove',value:function remove(record){var key=getMapKey(record.trackById);// todo(vicb)
// assert(this.map.containsKey(key));
var recordList=this.map.get(key);// Remove the list of duplicates when it gets empty
if(recordList.remove(record)){this.map.delete(key);}return record;}},{key:'clear',value:function clear(){this.map.clear();}},{key:'toString',value:function toString(){return'_DuplicateMap('+stringify(this.map)+')';}},{key:'isEmpty',get:function get(){return this.map.size===0;}}]);return _DuplicateMap;}();/* @ts2dart_const */var DefaultKeyValueDifferFactory=function(){function DefaultKeyValueDifferFactory(){_classCallCheck(this,DefaultKeyValueDifferFactory);}_createClass(DefaultKeyValueDifferFactory,[{key:'supports',value:function supports(obj){return obj instanceof Map||isJsObject(obj);}},{key:'create',value:function create(cdRef){return new DefaultKeyValueDiffer();}}]);return DefaultKeyValueDifferFactory;}();var DefaultKeyValueDiffer=function(){function DefaultKeyValueDiffer(){_classCallCheck(this,DefaultKeyValueDiffer);this._records=new Map();this._mapHead=null;this._previousMapHead=null;this._changesHead=null;this._changesTail=null;this._additionsHead=null;this._additionsTail=null;this._removalsHead=null;this._removalsTail=null;}_createClass(DefaultKeyValueDiffer,[{key:'forEachItem',value:function forEachItem(fn){var record;for(record=this._mapHead;record!==null;record=record._next){fn(record);}}},{key:'forEachPreviousItem',value:function forEachPreviousItem(fn){var record;for(record=this._previousMapHead;record!==null;record=record._nextPrevious){fn(record);}}},{key:'forEachChangedItem',value:function forEachChangedItem(fn){var record;for(record=this._changesHead;record!==null;record=record._nextChanged){fn(record);}}},{key:'forEachAddedItem',value:function forEachAddedItem(fn){var record;for(record=this._additionsHead;record!==null;record=record._nextAdded){fn(record);}}},{key:'forEachRemovedItem',value:function forEachRemovedItem(fn){var record;for(record=this._removalsHead;record!==null;record=record._nextRemoved){fn(record);}}},{key:'diff',value:function diff(map){if(isBlank(map))map=MapWrapper.createFromPairs([]);if(!(map instanceof Map||isJsObject(map))){throw new BaseException('Error trying to diff \''+map+'\'');}if(this.check(map)){return this;}else{return null;}}},{key:'onDestroy',value:function onDestroy(){}},{key:'check',value:function check(map){var _this32=this;this._reset();var records=this._records;var oldSeqRecord=this._mapHead;var lastOldSeqRecord=null;var lastNewSeqRecord=null;var seqChanged=false;this._forEach(map,function(value/** TODO #9100 */,key/** TODO #9100 */){var newSeqRecord;if(oldSeqRecord!==null&&key===oldSeqRecord.key){newSeqRecord=oldSeqRecord;if(!looseIdentical(value,oldSeqRecord.currentValue)){oldSeqRecord.previousValue=oldSeqRecord.currentValue;oldSeqRecord.currentValue=value;_this32._addToChanges(oldSeqRecord);}}else{seqChanged=true;if(oldSeqRecord!==null){oldSeqRecord._next=null;_this32._removeFromSeq(lastOldSeqRecord,oldSeqRecord);_this32._addToRemovals(oldSeqRecord);}if(records.has(key)){newSeqRecord=records.get(key);}else{newSeqRecord=new KeyValueChangeRecord(key);records.set(key,newSeqRecord);newSeqRecord.currentValue=value;_this32._addToAdditions(newSeqRecord);}}if(seqChanged){if(_this32._isInRemovals(newSeqRecord)){_this32._removeFromRemovals(newSeqRecord);}if(lastNewSeqRecord==null){_this32._mapHead=newSeqRecord;}else{lastNewSeqRecord._next=newSeqRecord;}}lastOldSeqRecord=oldSeqRecord;lastNewSeqRecord=newSeqRecord;oldSeqRecord=oldSeqRecord===null?null:oldSeqRecord._next;});this._truncate(lastOldSeqRecord,oldSeqRecord);return this.isDirty;}/** @internal */},{key:'_reset',value:function _reset(){if(this.isDirty){var record;// Record the state of the mapping
for(record=this._previousMapHead=this._mapHead;record!==null;record=record._next){record._nextPrevious=record._next;}for(record=this._changesHead;record!==null;record=record._nextChanged){record.previousValue=record.currentValue;}for(record=this._additionsHead;record!=null;record=record._nextAdded){record.previousValue=record.currentValue;}// todo(vicb) once assert is supported
// assert(() {
//  var r = _changesHead;
//  while (r != null) {
//    var nextRecord = r._nextChanged;
//    r._nextChanged = null;
//    r = nextRecord;
//  }
//
//  r = _additionsHead;
//  while (r != null) {
//    var nextRecord = r._nextAdded;
//    r._nextAdded = null;
//    r = nextRecord;
//  }
//
//  r = _removalsHead;
//  while (r != null) {
//    var nextRecord = r._nextRemoved;
//    r._nextRemoved = null;
//    r = nextRecord;
//  }
//
//  return true;
//});
this._changesHead=this._changesTail=null;this._additionsHead=this._additionsTail=null;this._removalsHead=this._removalsTail=null;}}/** @internal */},{key:'_truncate',value:function _truncate(lastRecord,record){while(record!==null){if(lastRecord===null){this._mapHead=null;}else{lastRecord._next=null;}var nextRecord=record._next;// todo(vicb) assert
// assert((() {
//  record._next = null;
//  return true;
//}));
this._addToRemovals(record);lastRecord=record;record=nextRecord;}for(var rec=this._removalsHead;rec!==null;rec=rec._nextRemoved){rec.previousValue=rec.currentValue;rec.currentValue=null;this._records.delete(rec.key);}}/** @internal */},{key:'_isInRemovals',value:function _isInRemovals(record){return record===this._removalsHead||record._nextRemoved!==null||record._prevRemoved!==null;}/** @internal */},{key:'_addToRemovals',value:function _addToRemovals(record){// todo(vicb) assert
// assert(record._next == null);
// assert(record._nextAdded == null);
// assert(record._nextChanged == null);
// assert(record._nextRemoved == null);
// assert(record._prevRemoved == null);
if(this._removalsHead===null){this._removalsHead=this._removalsTail=record;}else{this._removalsTail._nextRemoved=record;record._prevRemoved=this._removalsTail;this._removalsTail=record;}}/** @internal */},{key:'_removeFromSeq',value:function _removeFromSeq(prev,record){var next=record._next;if(prev===null){this._mapHead=next;}else{prev._next=next;}// todo(vicb) assert
// assert((() {
//  record._next = null;
//  return true;
//})());
}/** @internal */},{key:'_removeFromRemovals',value:function _removeFromRemovals(record){// todo(vicb) assert
// assert(record._next == null);
// assert(record._nextAdded == null);
// assert(record._nextChanged == null);
var prev=record._prevRemoved;var next=record._nextRemoved;if(prev===null){this._removalsHead=next;}else{prev._nextRemoved=next;}if(next===null){this._removalsTail=prev;}else{next._prevRemoved=prev;}record._prevRemoved=record._nextRemoved=null;}/** @internal */},{key:'_addToAdditions',value:function _addToAdditions(record){// todo(vicb): assert
// assert(record._next == null);
// assert(record._nextAdded == null);
// assert(record._nextChanged == null);
// assert(record._nextRemoved == null);
// assert(record._prevRemoved == null);
if(this._additionsHead===null){this._additionsHead=this._additionsTail=record;}else{this._additionsTail._nextAdded=record;this._additionsTail=record;}}/** @internal */},{key:'_addToChanges',value:function _addToChanges(record){// todo(vicb) assert
// assert(record._nextAdded == null);
// assert(record._nextChanged == null);
// assert(record._nextRemoved == null);
// assert(record._prevRemoved == null);
if(this._changesHead===null){this._changesHead=this._changesTail=record;}else{this._changesTail._nextChanged=record;this._changesTail=record;}}},{key:'toString',value:function toString(){var items=[];var previous=[];var changes=[];var additions=[];var removals=[];var record;for(record=this._mapHead;record!==null;record=record._next){items.push(stringify(record));}for(record=this._previousMapHead;record!==null;record=record._nextPrevious){previous.push(stringify(record));}for(record=this._changesHead;record!==null;record=record._nextChanged){changes.push(stringify(record));}for(record=this._additionsHead;record!==null;record=record._nextAdded){additions.push(stringify(record));}for(record=this._removalsHead;record!==null;record=record._nextRemoved){removals.push(stringify(record));}return'map: '+items.join(', ')+'\n'+'previous: '+previous.join(', ')+'\n'+'additions: '+additions.join(', ')+'\n'+'changes: '+changes.join(', ')+'\n'+'removals: '+removals.join(', ')+'\n';}/** @internal */},{key:'_forEach',value:function _forEach(obj/** TODO #9100 */,fn){if(obj instanceof Map){obj.forEach(fn);}else{StringMapWrapper.forEach(obj,fn);}}},{key:'isDirty',get:function get(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null;}}]);return DefaultKeyValueDiffer;}();/**
   * @stable
   */var KeyValueChangeRecord=function(){function KeyValueChangeRecord(key){_classCallCheck(this,KeyValueChangeRecord);this.key=key;this.previousValue=null;this.currentValue=null;/** @internal */this._nextPrevious=null;/** @internal */this._next=null;/** @internal */this._nextAdded=null;/** @internal */this._nextRemoved=null;/** @internal */this._prevRemoved=null;/** @internal */this._nextChanged=null;}_createClass(KeyValueChangeRecord,[{key:'toString',value:function toString(){return looseIdentical(this.previousValue,this.currentValue)?stringify(this.key):stringify(this.key)+'['+stringify(this.previousValue)+'->'+stringify(this.currentValue)+']';}}]);return KeyValueChangeRecord;}();/**
   * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
   * @ts2dart_const
   * @stable
   */var IterableDiffers=function(){/*@ts2dart_const*/function IterableDiffers(factories){_classCallCheck(this,IterableDiffers);this.factories=factories;}_createClass(IterableDiffers,[{key:'find',value:function find(iterable){var factory=this.factories.find(function(f){return f.supports(iterable);});if(isPresent(factory)){return factory;}else{throw new BaseException('Cannot find a differ supporting object \''+iterable+'\' of type \''+getTypeNameForDebugging(iterable)+'\'');}}}],[{key:'create',value:function create(factories,parent){if(isPresent(parent)){var copied=ListWrapper.clone(parent.factories);factories=factories.concat(copied);return new IterableDiffers(factories);}else{return new IterableDiffers(factories);}}/**
       * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
       * inherited {@link IterableDiffers} instance with the provided factories and return a new
       * {@link IterableDiffers} instance.
       *
       * The following example shows how to extend an existing list of factories,
             * which will only be applied to the injector for this component and its children.
             * This step is all that's required to make a new {@link IterableDiffer} available.
       *
       * ### Example
       *
       * ```
       * @Component({
       *   viewProviders: [
       *     IterableDiffers.extend([new ImmutableListDiffer()])
       *   ]
       * })
       * ```
       */},{key:'extend',value:function extend(factories){return new Provider(IterableDiffers,{useFactory:function useFactory(parent){if(isBlank(parent)){// Typically would occur when calling IterableDiffers.extend inside of dependencies passed
// to
// bootstrap(), which would override default pipes instead of extending them.
throw new BaseException('Cannot extend IterableDiffers without a parent injector');}return IterableDiffers.create(factories,parent);},// Dependency technically isn't optional, but we can provide a better error message this way.
deps:[[IterableDiffers,new SkipSelfMetadata(),new OptionalMetadata()]]});}}]);return IterableDiffers;}();/**
   * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
   * @ts2dart_const
   * @stable
   */var KeyValueDiffers=function(){/*@ts2dart_const*/function KeyValueDiffers(factories){_classCallCheck(this,KeyValueDiffers);this.factories=factories;}_createClass(KeyValueDiffers,[{key:'find',value:function find(kv){var factory=this.factories.find(function(f){return f.supports(kv);});if(isPresent(factory)){return factory;}else{throw new BaseException('Cannot find a differ supporting object \''+kv+'\'');}}}],[{key:'create',value:function create(factories,parent){if(isPresent(parent)){var copied=ListWrapper.clone(parent.factories);factories=factories.concat(copied);return new KeyValueDiffers(factories);}else{return new KeyValueDiffers(factories);}}/**
       * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
       * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
       * {@link KeyValueDiffers} instance.
       *
       * The following example shows how to extend an existing list of factories,
             * which will only be applied to the injector for this component and its children.
             * This step is all that's required to make a new {@link KeyValueDiffer} available.
       *
       * ### Example
       *
       * ```
       * @Component({
       *   viewProviders: [
       *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
       *   ]
       * })
       * ```
       */},{key:'extend',value:function extend(factories){return new Provider(KeyValueDiffers,{useFactory:function useFactory(parent){if(isBlank(parent)){// Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
// to
// bootstrap(), which would override default pipes instead of extending them.
throw new BaseException('Cannot extend KeyValueDiffers without a parent injector');}return KeyValueDiffers.create(factories,parent);},// Dependency technically isn't optional, but we can provide a better error message this way.
deps:[[KeyValueDiffers,new SkipSelfMetadata(),new OptionalMetadata()]]});}}]);return KeyValueDiffers;}();var uninitialized=new Object();function devModeEqual(a,b){if(isListLikeIterable(a)&&isListLikeIterable(b)){return areIterablesEqual(a,b,devModeEqual);}else if(!isListLikeIterable(a)&&!isPrimitive(a)&&!isListLikeIterable(b)&&!isPrimitive(b)){return true;}else{return looseIdentical(a,b);}}/**
   * Indicates that the result of a {@link PipeMetadata} transformation has changed even though the
   * reference
   * has not changed.
   *
   * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
   *
   * Example:
   *
   * ```
   * if (this._latestValue === this._latestReturnedValue) {
   *    return this._latestReturnedValue;
   *  } else {
   *    this._latestReturnedValue = this._latestValue;
   *    return WrappedValue.wrap(this._latestValue); // this will force update
   *  }
   * ```
   * @stable
   */var WrappedValue=function(){function WrappedValue(wrapped){_classCallCheck(this,WrappedValue);this.wrapped=wrapped;}_createClass(WrappedValue,null,[{key:'wrap',value:function wrap(value){return new WrappedValue(value);}}]);return WrappedValue;}();/**
   * Helper class for unwrapping WrappedValue s
   */var ValueUnwrapper=function(){function ValueUnwrapper(){_classCallCheck(this,ValueUnwrapper);this.hasWrappedValue=false;}_createClass(ValueUnwrapper,[{key:'unwrap',value:function unwrap(value){if(value instanceof WrappedValue){this.hasWrappedValue=true;return value.wrapped;}return value;}},{key:'reset',value:function reset(){this.hasWrappedValue=false;}}]);return ValueUnwrapper;}();/**
   * Structural diffing for `Object`s and `Map`s.
   */var keyValDiff=/*@ts2dart_const*/[new DefaultKeyValueDifferFactory()];/**
   * Structural diffing for `Iterable` types such as `Array`s.
   */var iterableDiff=/*@ts2dart_const*/[new DefaultIterableDifferFactory()];var defaultIterableDiffers=new IterableDiffers(iterableDiff);var defaultKeyValueDiffers=new KeyValueDiffers(keyValDiff);/**
   * @experimental
   */var RenderComponentType=function RenderComponentType(id,templateUrl,slotCount,encapsulation,styles){_classCallCheck(this,RenderComponentType);this.id=id;this.templateUrl=templateUrl;this.slotCount=slotCount;this.encapsulation=encapsulation;this.styles=styles;};var RenderDebugInfo=function(){function RenderDebugInfo(){_classCallCheck(this,RenderDebugInfo);}_createClass(RenderDebugInfo,[{key:'injector',get:function get(){return unimplemented();}},{key:'component',get:function get(){return unimplemented();}},{key:'providerTokens',get:function get(){return unimplemented();}},{key:'references',get:function get(){return unimplemented();}},{key:'context',get:function get(){return unimplemented();}},{key:'source',get:function get(){return unimplemented();}}]);return RenderDebugInfo;}();/**
   * @experimental
   */var Renderer=function Renderer(){_classCallCheck(this,Renderer);};/**
   * Injectable service that provides a low-level interface for modifying the UI.
   *
   * Use this service to bypass Angular's templating and make custom UI changes that can't be
   * expressed declaratively. For example if you need to set a property or an attribute whose name is
   * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
   * respectively.
   *
   * If you are implementing a custom renderer, you must implement this interface.
   *
   * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
   * @experimental
   */var RootRenderer=function RootRenderer(){_classCallCheck(this,RootRenderer);};/**
   * A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
   * like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
   * handled.
   *
   * See DomSanitizationService for more details on security in Angular applications.
   */var SecurityContext;(function(SecurityContext){SecurityContext[SecurityContext["NONE"]=0]="NONE";SecurityContext[SecurityContext["HTML"]=1]="HTML";SecurityContext[SecurityContext["STYLE"]=2]="STYLE";SecurityContext[SecurityContext["SCRIPT"]=3]="SCRIPT";SecurityContext[SecurityContext["URL"]=4]="URL";SecurityContext[SecurityContext["RESOURCE_URL"]=5]="RESOURCE_URL";})(SecurityContext||(SecurityContext={}));/**
   * SanitizationService is used by the views to sanitize potentially dangerous values. This is a
   * private API, use code should only refer to DomSanitizationService.
   */var SanitizationService=function SanitizationService(){_classCallCheck(this,SanitizationService);};/**
   * A wrapper around a native element inside of a View.
   *
   * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
   * element.
   */// Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
// i.e. users have to ask for what they need. With that, we can build better analysis tools
// and could do better codegen in the future.
var ElementRef=function ElementRef(nativeElement){_classCallCheck(this,ElementRef);this.nativeElement=nativeElement;};var trace;var events;function detectWTF(){var wtf=global$1['wtf'];if(wtf){trace=wtf['trace'];if(trace){events=trace['events'];return true;}}return false;}function createScope(signature){var flags=arguments.length<=1||arguments[1]===undefined?null:arguments[1];return events.createScope(signature,flags);}function leave(scope,returnValue){trace.leaveScope(scope,returnValue);return returnValue;}// Change exports to const once https://github.com/angular/ts2dart/issues/150
/**
   * True if WTF is enabled.
   */var wtfEnabled=detectWTF();function noopScope(arg0,arg1){return null;}/**
   * Create trace scope.
   *
   * Scopes must be strictly nested and are analogous to stack frames, but
   * do not have to follow the stack frames. Instead it is recommended that they follow logical
   * nesting. You may want to use
   * [Event
   * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
   * as they are defined in WTF.
   *
   * Used to mark scope entry. The return value is used to leave the scope.
   *
   *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
   *
   *     someMethod() {
   *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
   *        // DO SOME WORK HERE
   *        return wtfLeave(s, 123); // Return value 123
   *     }
   *
   * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
   * negatively impact the performance of your application. For this reason we recommend that
   * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
   * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
   * exception, will produce incorrect trace, but presence of exception signifies logic error which
   * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
   * an exception is expected during normal execution while profiling.
   *
   * @experimental
   */var wtfCreateScope=wtfEnabled?createScope:function(signature,flags){return noopScope;};/**
   * Used to mark end of Scope.
   *
   * - `scope` to end.
   * - `returnValue` (optional) to be passed to the WTF.
   *
   * Returns the `returnValue for easy chaining.
   * @experimental
   */var wtfLeave=wtfEnabled?leave:function(s,r){return r;};var ViewContainerRef_=function(){function ViewContainerRef_(_element){_classCallCheck(this,ViewContainerRef_);this._element=_element;/** @internal */this._createComponentInContainerScope=wtfCreateScope('ViewContainerRef#createComponent()');/** @internal */this._insertScope=wtfCreateScope('ViewContainerRef#insert()');/** @internal */this._removeScope=wtfCreateScope('ViewContainerRef#remove()');/** @internal */this._detachScope=wtfCreateScope('ViewContainerRef#detach()');}_createClass(ViewContainerRef_,[{key:'get',value:function get(index){return this._element.nestedViews[index].ref;}},{key:'createEmbeddedView',// TODO(rado): profile and decide whether bounds checks should be added
// to the methods below.
value:function createEmbeddedView(templateRef){var context=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var index=arguments.length<=2||arguments[2]===undefined?-1:arguments[2];var viewRef=templateRef.createEmbeddedView(context);this.insert(viewRef,index);return viewRef;}},{key:'createComponent',value:function createComponent(componentFactory){var index=arguments.length<=1||arguments[1]===undefined?-1:arguments[1];var injector=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var projectableNodes=arguments.length<=3||arguments[3]===undefined?null:arguments[3];var s=this._createComponentInContainerScope();var contextInjector=isPresent(injector)?injector:this._element.parentInjector;var componentRef=componentFactory.create(contextInjector,projectableNodes);this.insert(componentRef.hostView,index);return wtfLeave(s,componentRef);}// TODO(i): refactor insert+remove into move
},{key:'insert',value:function insert(viewRef){var index=arguments.length<=1||arguments[1]===undefined?-1:arguments[1];var s=this._insertScope();if(index==-1)index=this.length;var viewRef_=viewRef;this._element.attachView(viewRef_.internalView,index);return wtfLeave(s,viewRef_);}},{key:'indexOf',value:function indexOf(viewRef){return ListWrapper.indexOf(this._element.nestedViews,viewRef.internalView);}// TODO(i): rename to destroy
},{key:'remove',value:function remove(){var index=arguments.length<=0||arguments[0]===undefined?-1:arguments[0];var s=this._removeScope();if(index==-1)index=this.length-1;var view=this._element.detachView(index);view.destroy();// view is intentionally not returned to the client.
wtfLeave(s);}// TODO(i): refactor insert+remove into move
},{key:'detach',value:function detach(){var index=arguments.length<=0||arguments[0]===undefined?-1:arguments[0];var s=this._detachScope();if(index==-1)index=this.length-1;var view=this._element.detachView(index);return wtfLeave(s,view.ref);}},{key:'clear',value:function clear(){for(var i=this.length-1;i>=0;i--){this.remove(i);}}},{key:'length',get:function get(){var views=this._element.nestedViews;return isPresent(views)?views.length:0;}},{key:'element',get:function get(){return this._element.elementRef;}},{key:'injector',get:function get(){return this._element.injector;}},{key:'parentInjector',get:function get(){return this._element.parentInjector;}}]);return ViewContainerRef_;}();var ViewType;(function(ViewType){// A view that contains the host element with bound component directive.
// Contains a COMPONENT view
ViewType[ViewType["HOST"]=0]="HOST";// The view of the component
// Can contain 0 to n EMBEDDED views
ViewType[ViewType["COMPONENT"]=1]="COMPONENT";// A view that is embedded into another View via a <template> element
// inside of a COMPONENT view
ViewType[ViewType["EMBEDDED"]=2]="EMBEDDED";})(ViewType||(ViewType={}));/**
   * An AppElement is created for elements that have a ViewContainerRef,
   * a nested component or a <template> element to keep data around
   * that is needed for later instantiations.
   */var AppElement=function(){function AppElement(index,parentIndex,parentView,nativeElement){_classCallCheck(this,AppElement);this.index=index;this.parentIndex=parentIndex;this.parentView=parentView;this.nativeElement=nativeElement;this.nestedViews=null;this.componentView=null;}_createClass(AppElement,[{key:'initComponent',value:function initComponent(component,componentConstructorViewQueries,view){this.component=component;this.componentConstructorViewQueries=componentConstructorViewQueries;this.componentView=view;}},{key:'mapNestedViews',value:function mapNestedViews(nestedViewClass,callback){var result=[];if(isPresent(this.nestedViews)){this.nestedViews.forEach(function(nestedView){if(nestedView.clazz===nestedViewClass){result.push(callback(nestedView));}});}return result;}},{key:'attachView',value:function attachView(view,viewIndex){if(view.type===ViewType.COMPONENT){throw new BaseException('Component views can\'t be moved!');}var nestedViews=this.nestedViews;if(nestedViews==null){nestedViews=[];this.nestedViews=nestedViews;}ListWrapper.insert(nestedViews,viewIndex,view);var refRenderNode;if(viewIndex>0){var prevView=nestedViews[viewIndex-1];refRenderNode=prevView.lastRootNode;}else{refRenderNode=this.nativeElement;}if(isPresent(refRenderNode)){view.renderer.attachViewAfter(refRenderNode,view.flatRootNodes);}view.addToContentChildren(this);}},{key:'detachView',value:function detachView(viewIndex){var view=ListWrapper.removeAt(this.nestedViews,viewIndex);if(view.type===ViewType.COMPONENT){throw new BaseException('Component views can\'t be moved!');}view.detach();view.removeFromContentChildren(this);return view;}},{key:'elementRef',get:function get(){return new ElementRef(this.nativeElement);}},{key:'vcRef',get:function get(){return new ViewContainerRef_(this);}},{key:'parentInjector',get:function get(){return this.parentView.injector(this.parentIndex);}},{key:'injector',get:function get(){return this.parentView.injector(this.index);}}]);return AppElement;}();/**
   * An error thrown if application changes model breaking the top-down data flow.
   *
   * This exception is only thrown in dev mode.
   *
   * <!-- TODO: Add a link once the dev mode option is configurable -->
   *
   * ### Example
   *
   * ```typescript
   * @Component({
   *   selector: 'parent',
   *   template: `
   *     <child [prop]="parentProp"></child>
   *   `,
   *   directives: [forwardRef(() => Child)]
   * })
   * class Parent {
   *   parentProp = "init";
   * }
   *
   * @Directive({selector: 'child', inputs: ['prop']})
   * class Child {
   *   constructor(public parent: Parent) {}
   *
   *   set prop(v) {
   *     // this updates the parent property, which is disallowed during change detection
   *     // this will result in ExpressionChangedAfterItHasBeenCheckedException
   *     this.parent.parentProp = "updated";
   *   }
   * }
   * ```
   * @stable
   */var ExpressionChangedAfterItHasBeenCheckedException=function(_BaseException6){_inherits(ExpressionChangedAfterItHasBeenCheckedException,_BaseException6);function ExpressionChangedAfterItHasBeenCheckedException(oldValue,currValue,context){_classCallCheck(this,ExpressionChangedAfterItHasBeenCheckedException);return _possibleConstructorReturn(this,Object.getPrototypeOf(ExpressionChangedAfterItHasBeenCheckedException).call(this,'Expression has changed after it was checked. '+('Previous value: \''+oldValue+'\'. Current value: \''+currValue+'\'')));}return ExpressionChangedAfterItHasBeenCheckedException;}(BaseException);/**
   * Thrown when an exception was raised during view creation, change detection or destruction.
   *
   * This error wraps the original exception to attach additional contextual information that can
   * be useful for debugging.
   * @stable
   */var ViewWrappedException=function(_WrappedException2){_inherits(ViewWrappedException,_WrappedException2);function ViewWrappedException(originalException,originalStack,context){_classCallCheck(this,ViewWrappedException);return _possibleConstructorReturn(this,Object.getPrototypeOf(ViewWrappedException).call(this,'Error in '+context.source,originalException,originalStack,context));}return ViewWrappedException;}(WrappedException);/**
   * Thrown when a destroyed view is used.
   *
   * This error indicates a bug in the framework.
   *
   * This is an internal Angular error.
   * @stable
   */var ViewDestroyedException=function(_BaseException7){_inherits(ViewDestroyedException,_BaseException7);function ViewDestroyedException(details){_classCallCheck(this,ViewDestroyedException);return _possibleConstructorReturn(this,Object.getPrototypeOf(ViewDestroyedException).call(this,'Attempt to use a destroyed view: '+details));}return ViewDestroyedException;}(BaseException);var ViewUtils=function(){function ViewUtils(_renderer,_appId,sanitizer){_classCallCheck(this,ViewUtils);this._renderer=_renderer;this._appId=_appId;this._nextCompTypeId=0;this.sanitizer=sanitizer;}/**
       * Used by the generated code
       */_createClass(ViewUtils,[{key:'createRenderComponentType',value:function createRenderComponentType(templateUrl,slotCount,encapsulation,styles){return new RenderComponentType(this._appId+'-'+this._nextCompTypeId++,templateUrl,slotCount,encapsulation,styles);}/** @internal */},{key:'renderComponent',value:function renderComponent(renderComponentType){return this._renderer.renderComponent(renderComponentType);}}]);return ViewUtils;}();/** @nocollapse */ViewUtils.decorators=[{type:Injectable}];/** @nocollapse */ViewUtils.ctorParameters=[{type:RootRenderer},{type:undefined,decorators:[{type:Inject,args:[APP_ID]}]},{type:SanitizationService}];function flattenNestedViewRenderNodes(nodes){return _flattenNestedViewRenderNodes(nodes,[]);}function _flattenNestedViewRenderNodes(nodes,renderNodes){for(var i=0;i<nodes.length;i++){var node=nodes[i];if(node instanceof AppElement){var appEl=node;renderNodes.push(appEl.nativeElement);if(isPresent(appEl.nestedViews)){for(var k=0;k<appEl.nestedViews.length;k++){_flattenNestedViewRenderNodes(appEl.nestedViews[k].rootNodesOrAppElements,renderNodes);}}}else{renderNodes.push(node);}}return renderNodes;}var EMPTY_ARR=[];function ensureSlotCount(projectableNodes,expectedSlotCount){var res;if(isBlank(projectableNodes)){res=EMPTY_ARR;}else if(projectableNodes.length<expectedSlotCount){var givenSlotCount=projectableNodes.length;res=ListWrapper.createFixedSize(expectedSlotCount);for(var i=0;i<expectedSlotCount;i++){res[i]=i<givenSlotCount?projectableNodes[i]:EMPTY_ARR;}}else{res=projectableNodes;}return res;}var MAX_INTERPOLATION_VALUES=9;function interpolate(valueCount,c0,a1,c1,a2,c2,a3,c3,a4,c4,a5,c5,a6,c6,a7,c7,a8,c8,a9,c9){switch(valueCount){case 1:return c0+_toStringWithNull(a1)+c1;case 2:return c0+_toStringWithNull(a1)+c1+_toStringWithNull(a2)+c2;case 3:return c0+_toStringWithNull(a1)+c1+_toStringWithNull(a2)+c2+_toStringWithNull(a3)+c3;case 4:return c0+_toStringWithNull(a1)+c1+_toStringWithNull(a2)+c2+_toStringWithNull(a3)+c3+_toStringWithNull(a4)+c4;case 5:return c0+_toStringWithNull(a1)+c1+_toStringWithNull(a2)+c2+_toStringWithNull(a3)+c3+_toStringWithNull(a4)+c4+_toStringWithNull(a5)+c5;case 6:return c0+_toStringWithNull(a1)+c1+_toStringWithNull(a2)+c2+_toStringWithNull(a3)+c3+_toStringWithNull(a4)+c4+_toStringWithNull(a5)+c5+_toStringWithNull(a6)+c6;case 7:return c0+_toStringWithNull(a1)+c1+_toStringWithNull(a2)+c2+_toStringWithNull(a3)+c3+_toStringWithNull(a4)+c4+_toStringWithNull(a5)+c5+_toStringWithNull(a6)+c6+_toStringWithNull(a7)+c7;case 8:return c0+_toStringWithNull(a1)+c1+_toStringWithNull(a2)+c2+_toStringWithNull(a3)+c3+_toStringWithNull(a4)+c4+_toStringWithNull(a5)+c5+_toStringWithNull(a6)+c6+_toStringWithNull(a7)+c7+_toStringWithNull(a8)+c8;case 9:return c0+_toStringWithNull(a1)+c1+_toStringWithNull(a2)+c2+_toStringWithNull(a3)+c3+_toStringWithNull(a4)+c4+_toStringWithNull(a5)+c5+_toStringWithNull(a6)+c6+_toStringWithNull(a7)+c7+_toStringWithNull(a8)+c8+_toStringWithNull(a9)+c9;default:throw new BaseException('Does not support more than 9 expressions');}}function _toStringWithNull(v){return v!=null?v.toString():'';}function checkBinding(throwOnChange,oldValue,newValue){if(throwOnChange){if(!devModeEqual(oldValue,newValue)){throw new ExpressionChangedAfterItHasBeenCheckedException(oldValue,newValue,null);}return false;}else{return!looseIdentical(oldValue,newValue);}}function castByValue(input,value){return input;}var EMPTY_ARRAY=[];var EMPTY_MAP={};function pureProxy1(fn){var result;var v0;v0=uninitialized;return function(p0){if(!looseIdentical(v0,p0)){v0=p0;result=fn(p0);}return result;};}function pureProxy2(fn){var result;var v0/** TODO #9100 */,v1;v0=v1=uninitialized;return function(p0,p1){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)){v0=p0;v1=p1;result=fn(p0,p1);}return result;};}function pureProxy3(fn){var result;var v0/** TODO #9100 */,v1/** TODO #9100 */,v2;v0=v1=v2=uninitialized;return function(p0,p1,p2){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)||!looseIdentical(v2,p2)){v0=p0;v1=p1;v2=p2;result=fn(p0,p1,p2);}return result;};}function pureProxy4(fn){var result;var v0/** TODO #9100 */,v1/** TODO #9100 */,v2/** TODO #9100 */,v3;v0=v1=v2=v3=uninitialized;return function(p0,p1,p2,p3){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)||!looseIdentical(v2,p2)||!looseIdentical(v3,p3)){v0=p0;v1=p1;v2=p2;v3=p3;result=fn(p0,p1,p2,p3);}return result;};}function pureProxy5(fn){var result;var v0/** TODO #9100 */,v1/** TODO #9100 */,v2/** TODO #9100 */,v3/** TODO #9100 */,v4;v0=v1=v2=v3=v4=uninitialized;return function(p0,p1,p2,p3,p4){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)||!looseIdentical(v2,p2)||!looseIdentical(v3,p3)||!looseIdentical(v4,p4)){v0=p0;v1=p1;v2=p2;v3=p3;v4=p4;result=fn(p0,p1,p2,p3,p4);}return result;};}function pureProxy6(fn){var result;var v0/** TODO #9100 */,v1/** TODO #9100 */,v2/** TODO #9100 */,v3/** TODO #9100 */,v4/** TODO #9100 */,v5;v0=v1=v2=v3=v4=v5=uninitialized;return function(p0,p1,p2,p3,p4,p5){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)||!looseIdentical(v2,p2)||!looseIdentical(v3,p3)||!looseIdentical(v4,p4)||!looseIdentical(v5,p5)){v0=p0;v1=p1;v2=p2;v3=p3;v4=p4;v5=p5;result=fn(p0,p1,p2,p3,p4,p5);}return result;};}function pureProxy7(fn){var result;var v0/** TODO #9100 */,v1/** TODO #9100 */,v2/** TODO #9100 */,v3/** TODO #9100 */,v4/** TODO #9100 */,v5/** TODO #9100 */,v6;v0=v1=v2=v3=v4=v5=v6=uninitialized;return function(p0,p1,p2,p3,p4,p5,p6){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)||!looseIdentical(v2,p2)||!looseIdentical(v3,p3)||!looseIdentical(v4,p4)||!looseIdentical(v5,p5)||!looseIdentical(v6,p6)){v0=p0;v1=p1;v2=p2;v3=p3;v4=p4;v5=p5;v6=p6;result=fn(p0,p1,p2,p3,p4,p5,p6);}return result;};}function pureProxy8(fn){var result;var v0/** TODO #9100 */,v1/** TODO #9100 */,v2/** TODO #9100 */,v3/** TODO #9100 */,v4/** TODO #9100 */,v5/** TODO #9100 */,v6/** TODO #9100 */,v7;v0=v1=v2=v3=v4=v5=v6=v7=uninitialized;return function(p0,p1,p2,p3,p4,p5,p6,p7){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)||!looseIdentical(v2,p2)||!looseIdentical(v3,p3)||!looseIdentical(v4,p4)||!looseIdentical(v5,p5)||!looseIdentical(v6,p6)||!looseIdentical(v7,p7)){v0=p0;v1=p1;v2=p2;v3=p3;v4=p4;v5=p5;v6=p6;v7=p7;result=fn(p0,p1,p2,p3,p4,p5,p6,p7);}return result;};}function pureProxy9(fn){var result;var v0/** TODO #9100 */,v1/** TODO #9100 */,v2/** TODO #9100 */,v3/** TODO #9100 */,v4/** TODO #9100 */,v5/** TODO #9100 */,v6/** TODO #9100 */,v7/** TODO #9100 */,v8;v0=v1=v2=v3=v4=v5=v6=v7=v8=uninitialized;return function(p0,p1,p2,p3,p4,p5,p6,p7,p8){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)||!looseIdentical(v2,p2)||!looseIdentical(v3,p3)||!looseIdentical(v4,p4)||!looseIdentical(v5,p5)||!looseIdentical(v6,p6)||!looseIdentical(v7,p7)||!looseIdentical(v8,p8)){v0=p0;v1=p1;v2=p2;v3=p3;v4=p4;v5=p5;v6=p6;v7=p7;v8=p8;result=fn(p0,p1,p2,p3,p4,p5,p6,p7,p8);}return result;};}function pureProxy10(fn){var result;var v0/** TODO #9100 */,v1/** TODO #9100 */,v2/** TODO #9100 */,v3/** TODO #9100 */,v4/** TODO #9100 */,v5/** TODO #9100 */,v6/** TODO #9100 */,v7/** TODO #9100 */,v8/** TODO #9100 */,v9;v0=v1=v2=v3=v4=v5=v6=v7=v8=v9=uninitialized;return function(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9){if(!looseIdentical(v0,p0)||!looseIdentical(v1,p1)||!looseIdentical(v2,p2)||!looseIdentical(v3,p3)||!looseIdentical(v4,p4)||!looseIdentical(v5,p5)||!looseIdentical(v6,p6)||!looseIdentical(v7,p7)||!looseIdentical(v8,p8)||!looseIdentical(v9,p9)){v0=p0;v1=p1;v2=p2;v3=p3;v4=p4;v5=p5;v6=p6;v7=p7;v8=p8;v9=p9;result=fn(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9);}return result;};}/**
   * Represents an instance of a Component created via a {@link ComponentFactory}.
   *
   * `ComponentRef` provides access to the Component Instance as well other objects related to this
   * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
   * method.
   * @stable
   */var ComponentRef=function(){function ComponentRef(){_classCallCheck(this,ComponentRef);}_createClass(ComponentRef,[{key:'location',/**
       * Location of the Host Element of this Component Instance.
       */get:function get(){return unimplemented();}/**
       * The injector on which the component instance exists.
       */},{key:'injector',get:function get(){return unimplemented();}/**
       * The instance of the Component.
       */},{key:'instance',get:function get(){return unimplemented();}},{key:'hostView',/**
       * The {@link ViewRef} of the Host View of this Component instance.
       */get:function get(){return unimplemented();}},{key:'changeDetectorRef',/**
       * The {@link ChangeDetectorRef} of the Component instance.
       */get:function get(){return unimplemented();}/**
       * The component type.
       */},{key:'componentType',get:function get(){return unimplemented();}}]);return ComponentRef;}();var ComponentRef_=function(_ComponentRef){_inherits(ComponentRef_,_ComponentRef);function ComponentRef_(_hostElement,_componentType){_classCallCheck(this,ComponentRef_);var _this36=_possibleConstructorReturn(this,Object.getPrototypeOf(ComponentRef_).call(this));_this36._hostElement=_hostElement;_this36._componentType=_componentType;return _this36;}_createClass(ComponentRef_,[{key:'destroy',value:function destroy(){this._hostElement.parentView.destroy();}},{key:'onDestroy',value:function onDestroy(callback){this.hostView.onDestroy(callback);}},{key:'location',get:function get(){return this._hostElement.elementRef;}},{key:'injector',get:function get(){return this._hostElement.injector;}},{key:'instance',get:function get(){return this._hostElement.component;}},{key:'hostView',get:function get(){return this._hostElement.parentView.ref;}},{key:'changeDetectorRef',get:function get(){return this._hostElement.parentView.ref;}},{key:'componentType',get:function get(){return this._componentType;}}]);return ComponentRef_;}(ComponentRef);/**
   * @experimental
   * @ts2dart_const
   */var EMPTY_CONTEXT=new Object();var ComponentFactory=function(){function ComponentFactory(selector,_viewFactory,_componentType){_classCallCheck(this,ComponentFactory);this.selector=selector;this._viewFactory=_viewFactory;this._componentType=_componentType;}_createClass(ComponentFactory,[{key:'create',/**
       * Creates a new component.
       */value:function create(injector){var projectableNodes=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var rootSelectorOrNode=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var vu=injector.get(ViewUtils);if(isBlank(projectableNodes)){projectableNodes=[];}// Note: Host views don't need a declarationAppElement!
var hostView=this._viewFactory(vu,injector,null);var hostElement=hostView.create(EMPTY_CONTEXT,projectableNodes,rootSelectorOrNode);return new ComponentRef_(hostElement,this._componentType);}},{key:'componentType',get:function get(){return this._componentType;}}]);return ComponentFactory;}();/**
   * Low-level service for loading {@link ComponentFactory}s, which
   * can later be used to create and render a Component instance.
   * @experimental
   */var ComponentResolver=function ComponentResolver(){_classCallCheck(this,ComponentResolver);};function _isComponentFactory(type){return type instanceof ComponentFactory;}var ReflectorComponentResolver=function(_ComponentResolver){_inherits(ReflectorComponentResolver,_ComponentResolver);function ReflectorComponentResolver(){_classCallCheck(this,ReflectorComponentResolver);return _possibleConstructorReturn(this,Object.getPrototypeOf(ReflectorComponentResolver).apply(this,arguments));}_createClass(ReflectorComponentResolver,[{key:'resolveComponent',value:function resolveComponent(component){if(isString(component)){return PromiseWrapper.reject(new BaseException('Cannot resolve component using \''+component+'\'.'),null);}var metadatas=reflector.annotations(component);var componentFactory=metadatas.find(_isComponentFactory);if(isBlank(componentFactory)){throw new BaseException('No precompiled component '+stringify(component)+' found');}return PromiseWrapper.resolve(componentFactory);}},{key:'clearCache',value:function clearCache(){}}]);return ReflectorComponentResolver;}(ComponentResolver);/** @nocollapse */ReflectorComponentResolver.decorators=[{type:Injectable}];/**
   * Stores error information; delivered via [NgZone.onError] stream.
   * @deprecated
   */var NgZoneError=function NgZoneError(error,stackTrace){_classCallCheck(this,NgZoneError);this.error=error;this.stackTrace=stackTrace;};var NgZoneImpl=function(){function NgZoneImpl(_ref6){var _this38=this;var trace=_ref6.trace;var onEnter=_ref6.onEnter;var onLeave=_ref6.onLeave;var setMicrotask=_ref6.setMicrotask;var setMacrotask=_ref6.setMacrotask;var onError=_ref6.onError;_classCallCheck(this,NgZoneImpl);this.onEnter=onEnter;this.onLeave=onLeave;this.setMicrotask=setMicrotask;this.setMacrotask=setMacrotask;this.onError=onError;if(Zone){this.outer=this.inner=Zone.current;if(Zone['wtfZoneSpec']){this.inner=this.inner.fork(Zone['wtfZoneSpec']);}if(trace&&Zone['longStackTraceZoneSpec']){this.inner=this.inner.fork(Zone['longStackTraceZoneSpec']);}this.inner=this.inner.fork({name:'angular',properties:{'isAngularZone':true},onInvokeTask:function onInvokeTask(delegate,current,target,task,applyThis,applyArgs){try{_this38.onEnter();return delegate.invokeTask(target,task,applyThis,applyArgs);}finally{_this38.onLeave();}},onInvoke:function onInvoke(delegate,current,target,callback,applyThis,applyArgs,source){try{_this38.onEnter();return delegate.invoke(target,callback,applyThis,applyArgs,source);}finally{_this38.onLeave();}},onHasTask:function onHasTask(delegate,current,target,hasTaskState){delegate.hasTask(target,hasTaskState);if(current==target){// We are only interested in hasTask events which originate from our zone
// (A child hasTask event is not interesting to us)
if(hasTaskState.change=='microTask'){_this38.setMicrotask(hasTaskState.microTask);}else if(hasTaskState.change=='macroTask'){_this38.setMacrotask(hasTaskState.macroTask);}}},onHandleError:function onHandleError(delegate,current,target,error){delegate.handleError(target,error);_this38.onError(new NgZoneError(error,error.stack));return false;}});}else{throw new Error('Angular requires Zone.js polyfill.');}}_createClass(NgZoneImpl,[{key:'runInner',value:function runInner(fn){return this.inner.run(fn);}},{key:'runInnerGuarded',value:function runInnerGuarded(fn){return this.inner.runGuarded(fn);}},{key:'runOuter',value:function runOuter(fn){return this.outer.run(fn);}}],[{key:'isInAngularZone',value:function isInAngularZone(){return Zone.current.get('isAngularZone')===true;}}]);return NgZoneImpl;}();/**
   * An injectable service for executing work inside or outside of the Angular zone.
   *
   * The most common use of this service is to optimize performance when starting a work consisting of
   * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
   * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
   * can reenter the Angular zone via {@link #run}.
   *
   * <!-- TODO: add/fix links to:
   *   - docs explaining zones and the use of zones in Angular and change-detection
   *   - link to runOutsideAngular/run (throughout this file!)
   *   -->
   *
   * ### Example ([live demo](http://plnkr.co/edit/lY9m8HLy7z06vDoUaSN2?p=preview))
   * ```
   * import {Component, View, NgZone} from '@angular/core';
   * import {NgIf} from '@angular/common';
   *
   * @Component({
   *   selector: 'ng-zone-demo'.
   *   template: `
   *     <h2>Demo: NgZone</h2>
   *
   *     <p>Progress: {{progress}}%</p>
   *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
   *
   *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
   *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
   *   `,
   *   directives: [NgIf]
   * })
   * export class NgZoneDemo {
   *   progress: number = 0;
   *   label: string;
   *
   *   constructor(private _ngZone: NgZone) {}
   *
   *   // Loop inside the Angular zone
   *   // so the UI DOES refresh after each setTimeout cycle
   *   processWithinAngularZone() {
   *     this.label = 'inside';
   *     this.progress = 0;
   *     this._increaseProgress(() => console.log('Inside Done!'));
   *   }
   *
   *   // Loop outside of the Angular zone
   *   // so the UI DOES NOT refresh after each setTimeout cycle
   *   processOutsideOfAngularZone() {
   *     this.label = 'outside';
   *     this.progress = 0;
   *     this._ngZone.runOutsideAngular(() => {
   *       this._increaseProgress(() => {
   *       // reenter the Angular zone and display done
   *       this._ngZone.run(() => {console.log('Outside Done!') });
   *     }}));
   *   }
   *
   *
   *   _increaseProgress(doneCallback: () => void) {
   *     this.progress += 1;
   *     console.log(`Current progress: ${this.progress}%`);
   *
   *     if (this.progress < 100) {
   *       window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
   *     } else {
   *       doneCallback();
   *     }
   *   }
   * }
   * ```
   * @experimental
   */var NgZone=function(){function NgZone(_ref7){var _this39=this;var _ref7$enableLongStack=_ref7.enableLongStackTrace;var enableLongStackTrace=_ref7$enableLongStack===undefined?false:_ref7$enableLongStack;_classCallCheck(this,NgZone);this._hasPendingMicrotasks=false;this._hasPendingMacrotasks=false;/** @internal */this._isStable=true;/** @internal */this._nesting=0;/** @internal */this._onUnstable=new EventEmitter(false);/** @internal */this._onMicrotaskEmpty=new EventEmitter(false);/** @internal */this._onStable=new EventEmitter(false);/** @internal */this._onErrorEvents=new EventEmitter(false);this._zoneImpl=new NgZoneImpl({trace:enableLongStackTrace,onEnter:function onEnter(){// console.log('ZONE.enter', this._nesting, this._isStable);
_this39._nesting++;if(_this39._isStable){_this39._isStable=false;_this39._onUnstable.emit(null);}},onLeave:function onLeave(){_this39._nesting--;// console.log('ZONE.leave', this._nesting, this._isStable);
_this39._checkStable();},setMicrotask:function setMicrotask(hasMicrotasks){_this39._hasPendingMicrotasks=hasMicrotasks;_this39._checkStable();},setMacrotask:function setMacrotask(hasMacrotasks){_this39._hasPendingMacrotasks=hasMacrotasks;},onError:function onError(error){return _this39._onErrorEvents.emit(error);}});}_createClass(NgZone,[{key:'_checkStable',value:function _checkStable(){var _this40=this;if(this._nesting==0){if(!this._hasPendingMicrotasks&&!this._isStable){try{// console.log('ZONE.microtaskEmpty');
this._nesting++;this._onMicrotaskEmpty.emit(null);}finally{this._nesting--;if(!this._hasPendingMicrotasks){try{// console.log('ZONE.stable', this._nesting, this._isStable);
this.runOutsideAngular(function(){return _this40._onStable.emit(null);});}finally{this._isStable=true;}}}}}}},{key:'run',/**
       * Executes the `fn` function synchronously within the Angular zone and returns value returned by
       * the function.
       *
       * Running functions via `run` allows you to reenter Angular zone from a task that was executed
       * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
       *
       * Any future tasks or microtasks scheduled from within this function will continue executing from
       * within the Angular zone.
       *
       * If a synchronous error happens it will be rethrown and not reported via `onError`.
       */value:function run(fn){return this._zoneImpl.runInner(fn);}/**
       * Same as #run, except that synchronous errors are caught and forwarded
       * via `onError` and not rethrown.
       */},{key:'runGuarded',value:function runGuarded(fn){return this._zoneImpl.runInnerGuarded(fn);}/**
       * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
       * the function.
       *
       * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
       * doesn't trigger Angular change-detection or is subject to Angular's error handling.
       *
       * Any future tasks or microtasks scheduled from within this function will continue executing from
       * outside of the Angular zone.
       *
       * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
       */},{key:'runOutsideAngular',value:function runOutsideAngular(fn){return this._zoneImpl.runOuter(fn);}},{key:'onUnstable',/**
       * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
       */get:function get(){return this._onUnstable;}/**
       * Notifies when there is no more microtasks enqueue in the current VM Turn.
       * This is a hint for Angular to do change detection, which may enqueue more microtasks.
       * For this reason this event can fire multiple times per VM Turn.
       */},{key:'onMicrotaskEmpty',get:function get(){return this._onMicrotaskEmpty;}/**
       * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
       * implies we are about to relinquish VM turn.
       * This event gets called just once.
       */},{key:'onStable',get:function get(){return this._onStable;}/**
       * Notify that an error has been delivered.
       */},{key:'onError',get:function get(){return this._onErrorEvents;}/**
       * Whether there are no outstanding microtasks or microtasks.
       */},{key:'isStable',get:function get(){return this._isStable;}/**
       * Whether there are any outstanding microtasks.
       */},{key:'hasPendingMicrotasks',get:function get(){return this._hasPendingMicrotasks;}/**
       * Whether there are any outstanding microtasks.
       */},{key:'hasPendingMacrotasks',get:function get(){return this._hasPendingMacrotasks;}}],[{key:'isInAngularZone',value:function isInAngularZone(){return NgZoneImpl.isInAngularZone();}},{key:'assertInAngularZone',value:function assertInAngularZone(){if(!NgZoneImpl.isInAngularZone()){throw new BaseException('Expected to be in Angular Zone, but it is not!');}}},{key:'assertNotInAngularZone',value:function assertNotInAngularZone(){if(NgZoneImpl.isInAngularZone()){throw new BaseException('Expected to not be in Angular Zone, but it is!');}}}]);return NgZone;}();var Testability=function(){function Testability(_ngZone){_classCallCheck(this,Testability);this._ngZone=_ngZone;/** @internal */this._pendingCount=0;/** @internal */this._isZoneStable=true;/**
           * Whether any work was done since the last 'whenStable' callback. This is
           * useful to detect if this could have potentially destabilized another
           * component while it is stabilizing.
           * @internal
           */this._didWork=false;/** @internal */this._callbacks=[];this._watchAngularEvents();}/** @internal */_createClass(Testability,[{key:'_watchAngularEvents',value:function _watchAngularEvents(){var _this41=this;ObservableWrapper.subscribe(this._ngZone.onUnstable,function(_){_this41._didWork=true;_this41._isZoneStable=false;});this._ngZone.runOutsideAngular(function(){ObservableWrapper.subscribe(_this41._ngZone.onStable,function(_){NgZone.assertNotInAngularZone();scheduleMicroTask(function(){_this41._isZoneStable=true;_this41._runCallbacksIfReady();});});});}},{key:'increasePendingRequestCount',value:function increasePendingRequestCount(){this._pendingCount+=1;this._didWork=true;return this._pendingCount;}},{key:'decreasePendingRequestCount',value:function decreasePendingRequestCount(){this._pendingCount-=1;if(this._pendingCount<0){throw new BaseException('pending async requests below zero');}this._runCallbacksIfReady();return this._pendingCount;}},{key:'isStable',value:function isStable(){return this._isZoneStable&&this._pendingCount==0&&!this._ngZone.hasPendingMacrotasks;}/** @internal */},{key:'_runCallbacksIfReady',value:function _runCallbacksIfReady(){var _this42=this;if(this.isStable()){// Schedules the call backs in a new frame so that it is always async.
scheduleMicroTask(function(){while(_this42._callbacks.length!==0){_this42._callbacks.pop()(_this42._didWork);}_this42._didWork=false;});}else{// Not Ready
this._didWork=true;}}},{key:'whenStable',value:function whenStable(callback){this._callbacks.push(callback);this._runCallbacksIfReady();}},{key:'getPendingRequestCount',value:function getPendingRequestCount(){return this._pendingCount;}},{key:'findBindings',value:function findBindings(using,provider,exactMatch){// TODO(juliemr): implement.
return[];}},{key:'findProviders',value:function findProviders(using,provider,exactMatch){// TODO(juliemr): implement.
return[];}}]);return Testability;}();/** @nocollapse */Testability.decorators=[{type:Injectable}];/** @nocollapse */Testability.ctorParameters=[{type:NgZone}];var TestabilityRegistry=function(){function TestabilityRegistry(){_classCallCheck(this,TestabilityRegistry);/** @internal */this._applications=new Map$1();_testabilityGetter.addToWindow(this);}_createClass(TestabilityRegistry,[{key:'registerApplication',value:function registerApplication(token,testability){this._applications.set(token,testability);}},{key:'getTestability',value:function getTestability(elem){return this._applications.get(elem);}},{key:'getAllTestabilities',value:function getAllTestabilities(){return MapWrapper.values(this._applications);}},{key:'getAllRootElements',value:function getAllRootElements(){return MapWrapper.keys(this._applications);}},{key:'findTestabilityInTree',value:function findTestabilityInTree(elem){var findInAncestors=arguments.length<=1||arguments[1]===undefined?true:arguments[1];return _testabilityGetter.findTestabilityInTree(this,elem,findInAncestors);}}]);return TestabilityRegistry;}();/** @nocollapse */TestabilityRegistry.decorators=[{type:Injectable}];/** @nocollapse */TestabilityRegistry.ctorParameters=[];/* @ts2dart_const */var _NoopGetTestability=function(){function _NoopGetTestability(){_classCallCheck(this,_NoopGetTestability);}_createClass(_NoopGetTestability,[{key:'addToWindow',value:function addToWindow(registry){}},{key:'findTestabilityInTree',value:function findTestabilityInTree(registry,elem,findInAncestors){return null;}}]);return _NoopGetTestability;}();/**
   * Set the {@link GetTestability} implementation used by the Angular testing framework.
   * @experimental
   */function setTestabilityGetter(getter){_testabilityGetter=getter;}var _testabilityGetter=new _NoopGetTestability();/**
   * Create an Angular zone.
   * @experimental
   */function createNgZone(){return new NgZone({enableLongStackTrace:isDevMode()});}var _devMode=true;var _runModeLocked=false;var _platform;var _inPlatformCreate=false;/**
   * Returns whether Angular is in development mode.
   * This can only be read after `lockRunMode` has been called.
   *
   * By default, this is true, unless a user calls `enableProdMode`.
   */function isDevMode(){if(!_runModeLocked){throw new BaseException('Dev mode can\'t be read before bootstrap!');}return _devMode;}/**
   * Locks the run mode of Angular. After this has been called,
   * it can't be changed any more. I.e. `isDevMode()` will always
   * return the same value.
   */function lockRunMode(){_runModeLocked=true;}/**
   * Creates a platform.
   * Platforms have to be eagerly created via this function.
   * @experimental
   */function createPlatform(injector){if(_inPlatformCreate){throw new BaseException('Already creating a platform...');}if(isPresent(_platform)&&!_platform.disposed){throw new BaseException('There can be only one platform. Destroy the previous one to create a new one.');}lockRunMode();_inPlatformCreate=true;try{_platform=injector.get(PlatformRef);}finally{_inPlatformCreate=false;}return _platform;}/**
   * Checks that there currently is a platform
   * which contains the given token as a provider.
   * @experimental
   */function assertPlatform(requiredToken){var platform=getPlatform();if(isBlank(platform)){throw new BaseException('No platform exists!');}if(isPresent(platform)&&isBlank(platform.injector.get(requiredToken,null))){throw new BaseException('A platform with a different configuration has been created. Please destroy it first.');}return platform;}/**
   * Returns the current platform.
   * @experimental
   */function getPlatform(){return isPresent(_platform)&&!_platform.disposed?_platform:null;}/**
   * Shortcut for ApplicationRef.bootstrap.
   * Requires a platform to be created first.
   * @experimental
   */function coreBootstrap(componentFactory,injector){var appRef=injector.get(ApplicationRef);return appRef.bootstrap(componentFactory);}/**
   * The Angular platform is the entry point for Angular on a web page. Each page
   * has exactly one platform, and services (such as reflection) which are common
   * to every Angular application running on the page are bound in its scope.
   *
   * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
   * explicitly by calling {@link createPlatform}().
   * @stable
   */var PlatformRef=function(){function PlatformRef(){_classCallCheck(this,PlatformRef);}_createClass(PlatformRef,[{key:'injector',/**
       * Retrieve the platform {@link Injector}, which is the parent injector for
       * every Angular application on the page and provides singleton providers.
       */get:function get(){throw unimplemented();}},{key:'disposed',get:function get(){throw unimplemented();}}]);return PlatformRef;}();var PlatformRef_=function(_PlatformRef){_inherits(PlatformRef_,_PlatformRef);function PlatformRef_(_injector){_classCallCheck(this,PlatformRef_);var _this43=_possibleConstructorReturn(this,Object.getPrototypeOf(PlatformRef_).call(this));_this43._injector=_injector;/** @internal */_this43._applications=[];/** @internal */_this43._disposeListeners=[];_this43._disposed=false;if(!_inPlatformCreate){throw new BaseException('Platforms have to be created via `createPlatform`!');}var inits=_injector.get(PLATFORM_INITIALIZER,null);if(isPresent(inits))inits.forEach(function(init){return init();});return _this43;}_createClass(PlatformRef_,[{key:'registerDisposeListener',value:function registerDisposeListener(dispose){this._disposeListeners.push(dispose);}},{key:'addApplication',value:function addApplication(appRef){this._applications.push(appRef);}},{key:'dispose',value:function dispose(){ListWrapper.clone(this._applications).forEach(function(app){return app.dispose();});this._disposeListeners.forEach(function(dispose){return dispose();});this._disposed=true;}/** @internal */},{key:'_applicationDisposed',value:function _applicationDisposed(app){ListWrapper.remove(this._applications,app);}},{key:'injector',get:function get(){return this._injector;}},{key:'disposed',get:function get(){return this._disposed;}}]);return PlatformRef_;}(PlatformRef);/** @nocollapse */PlatformRef_.decorators=[{type:Injectable}];/** @nocollapse */PlatformRef_.ctorParameters=[{type:Injector}];/**
   * A reference to an Angular application running on a page.
   *
   * For more about Angular applications, see the documentation for {@link bootstrap}.
   * @stable
   */var ApplicationRef=function(){function ApplicationRef(){_classCallCheck(this,ApplicationRef);}_createClass(ApplicationRef,[{key:'injector',/**
       * Retrieve the application {@link Injector}.
       */get:function get(){return unimplemented();}},{key:'zone',/**
       * Retrieve the application {@link NgZone}.
       */get:function get(){return unimplemented();}},{key:'componentTypes',/**
       * Get a list of component types registered to this application.
       */get:function get(){return unimplemented();}}]);return ApplicationRef;}();var ApplicationRef_=function(_ApplicationRef){_inherits(ApplicationRef_,_ApplicationRef);function ApplicationRef_(_platform,_zone,_injector){_classCallCheck(this,ApplicationRef_);var _this44=_possibleConstructorReturn(this,Object.getPrototypeOf(ApplicationRef_).call(this));_this44._platform=_platform;_this44._zone=_zone;_this44._injector=_injector;/** @internal */_this44._bootstrapListeners=[];/** @internal */_this44._disposeListeners=[];/** @internal */_this44._rootComponents=[];/** @internal */_this44._rootComponentTypes=[];/** @internal */_this44._changeDetectorRefs=[];/** @internal */_this44._runningTick=false;/** @internal */_this44._enforceNoNewChanges=false;var zone=_injector.get(NgZone);_this44._enforceNoNewChanges=isDevMode();zone.run(function(){_this44._exceptionHandler=_injector.get(ExceptionHandler);});_this44._asyncInitDonePromise=_this44.run(function(){var inits=_injector.get(APP_INITIALIZER,null);var asyncInitResults=[];var asyncInitDonePromise;if(isPresent(inits)){for(var i=0;i<inits.length;i++){var initResult=inits[i]();if(isPromise(initResult)){asyncInitResults.push(initResult);}}}if(asyncInitResults.length>0){asyncInitDonePromise=PromiseWrapper.all(asyncInitResults).then(function(_){return _this44._asyncInitDone=true;});_this44._asyncInitDone=false;}else{_this44._asyncInitDone=true;asyncInitDonePromise=PromiseWrapper.resolve(true);}return asyncInitDonePromise;});ObservableWrapper.subscribe(zone.onError,function(error){_this44._exceptionHandler.call(error.error,error.stackTrace);});ObservableWrapper.subscribe(_this44._zone.onMicrotaskEmpty,function(_){_this44._zone.run(function(){_this44.tick();});});return _this44;}_createClass(ApplicationRef_,[{key:'registerBootstrapListener',value:function registerBootstrapListener(listener){this._bootstrapListeners.push(listener);}},{key:'registerDisposeListener',value:function registerDisposeListener(dispose){this._disposeListeners.push(dispose);}},{key:'registerChangeDetector',value:function registerChangeDetector(changeDetector){this._changeDetectorRefs.push(changeDetector);}},{key:'unregisterChangeDetector',value:function unregisterChangeDetector(changeDetector){ListWrapper.remove(this._changeDetectorRefs,changeDetector);}},{key:'waitForAsyncInitializers',value:function waitForAsyncInitializers(){return this._asyncInitDonePromise;}},{key:'run',value:function run(callback){var _this45=this;var zone=this.injector.get(NgZone);var result;// Note: Don't use zone.runGuarded as we want to know about
// the thrown exception!
// Note: the completer needs to be created outside
// of `zone.run` as Dart swallows rejected promises
// via the onError callback of the promise.
var completer=PromiseWrapper.completer();zone.run(function(){try{result=callback();if(isPromise(result)){PromiseWrapper.then(result,function(ref){completer.resolve(ref);},function(err,stackTrace){completer.reject(err,stackTrace);_this45._exceptionHandler.call(err,stackTrace);});}}catch(e){_this45._exceptionHandler.call(e,e.stack);throw e;}});return isPromise(result)?completer.promise:result;}},{key:'bootstrap',value:function bootstrap(componentFactory){var _this46=this;if(!this._asyncInitDone){throw new BaseException('Cannot bootstrap as there are still asynchronous initializers running. Wait for them using waitForAsyncInitializers().');}return this.run(function(){_this46._rootComponentTypes.push(componentFactory.componentType);var compRef=componentFactory.create(_this46._injector,[],componentFactory.selector);compRef.onDestroy(function(){_this46._unloadComponent(compRef);});var testability=compRef.injector.get(Testability,null);if(isPresent(testability)){compRef.injector.get(TestabilityRegistry).registerApplication(compRef.location.nativeElement,testability);}_this46._loadComponent(compRef);var c=_this46._injector.get(Console);if(isDevMode()){var prodDescription=IS_DART?'Production mode is disabled in Dart.':'Call enableProdMode() to enable the production mode.';c.log('Angular 2 is running in the development mode. '+prodDescription);}return compRef;});}/** @internal */},{key:'_loadComponent',value:function _loadComponent(componentRef){this._changeDetectorRefs.push(componentRef.changeDetectorRef);this.tick();this._rootComponents.push(componentRef);this._bootstrapListeners.forEach(function(listener){return listener(componentRef);});}/** @internal */},{key:'_unloadComponent',value:function _unloadComponent(componentRef){if(!ListWrapper.contains(this._rootComponents,componentRef)){return;}this.unregisterChangeDetector(componentRef.changeDetectorRef);ListWrapper.remove(this._rootComponents,componentRef);}},{key:'tick',value:function tick(){if(this._runningTick){throw new BaseException('ApplicationRef.tick is called recursively');}var s=ApplicationRef_._tickScope();try{this._runningTick=true;this._changeDetectorRefs.forEach(function(detector){return detector.detectChanges();});if(this._enforceNoNewChanges){this._changeDetectorRefs.forEach(function(detector){return detector.checkNoChanges();});}}finally{this._runningTick=false;wtfLeave(s);}}},{key:'dispose',value:function dispose(){// TODO(alxhub): Dispose of the NgZone.
ListWrapper.clone(this._rootComponents).forEach(function(ref){return ref.destroy();});this._disposeListeners.forEach(function(dispose){return dispose();});this._platform._applicationDisposed(this);}},{key:'injector',get:function get(){return this._injector;}},{key:'zone',get:function get(){return this._zone;}},{key:'componentTypes',get:function get(){return this._rootComponentTypes;}}]);return ApplicationRef_;}(ApplicationRef);/** @internal */ApplicationRef_._tickScope=wtfCreateScope('ApplicationRef#tick()');/** @nocollapse */ApplicationRef_.decorators=[{type:Injectable}];/** @nocollapse */ApplicationRef_.ctorParameters=[{type:PlatformRef_},{type:NgZone},{type:Injector}];var PLATFORM_CORE_PROVIDERS=/*@ts2dart_const*/[PlatformRef_,/*@ts2dart_const*//* @ts2dart_Provider */{provide:PlatformRef,useExisting:PlatformRef_}];var APPLICATION_CORE_PROVIDERS=[/* @ts2dart_Provider */{provide:NgZone,useFactory:createNgZone,deps:[]},ApplicationRef_,/* @ts2dart_Provider */{provide:ApplicationRef,useExisting:ApplicationRef_}];/**
   * Use ComponentResolver and ViewContainerRef directly.
   *
   * @deprecated
   */var DynamicComponentLoader=function DynamicComponentLoader(){_classCallCheck(this,DynamicComponentLoader);};var DynamicComponentLoader_=function(_DynamicComponentLoad){_inherits(DynamicComponentLoader_,_DynamicComponentLoad);function DynamicComponentLoader_(_compiler){_classCallCheck(this,DynamicComponentLoader_);var _this47=_possibleConstructorReturn(this,Object.getPrototypeOf(DynamicComponentLoader_).call(this));_this47._compiler=_compiler;return _this47;}_createClass(DynamicComponentLoader_,[{key:'loadAsRoot',value:function loadAsRoot(type,overrideSelectorOrNode,injector,onDispose,projectableNodes){return this._compiler.resolveComponent(type).then(function(componentFactory){var componentRef=componentFactory.create(injector,projectableNodes,isPresent(overrideSelectorOrNode)?overrideSelectorOrNode:componentFactory.selector);if(isPresent(onDispose)){componentRef.onDestroy(onDispose);}return componentRef;});}},{key:'loadNextToLocation',value:function loadNextToLocation(type,location){var providers=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var projectableNodes=arguments.length<=3||arguments[3]===undefined?null:arguments[3];return this._compiler.resolveComponent(type).then(function(componentFactory){var contextInjector=location.parentInjector;var childInjector=isPresent(providers)&&providers.length>0?ReflectiveInjector.fromResolvedProviders(providers,contextInjector):contextInjector;return location.createComponent(componentFactory,location.length,childInjector,projectableNodes);});}}]);return DynamicComponentLoader_;}(DynamicComponentLoader);/** @nocollapse */DynamicComponentLoader_.decorators=[{type:Injectable}];/** @nocollapse */DynamicComponentLoader_.ctorParameters=[{type:ComponentResolver}];/**
   * An unmodifiable list of items that Angular keeps up to date when the state
   * of the application changes.
   *
   * The type of object that {@link QueryMetadata} and {@link ViewQueryMetadata} provide.
   *
   * Implements an iterable interface, therefore it can be used in both ES6
   * javascript `for (var i of items)` loops as well as in Angular templates with
   * `*ngFor="let i of myList"`.
   *
   * Changes can be observed by subscribing to the changes `Observable`.
   *
   * NOTE: In the future this class will implement an `Observable` interface.
   *
   * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
   * ```typescript
   * @Component({...})
   * class Container {
   *   @ViewChildren(Item) items:QueryList<Item>;
   * }
   * ```
   * @stable
   */var QueryList=function(){function QueryList(){_classCallCheck(this,QueryList);this._dirty=true;this._results=[];this._emitter=new EventEmitter();}_createClass(QueryList,[{key:'map',/**
       * returns a new array with the passed in function applied to each element.
       */value:function map(fn){return this._results.map(fn);}/**
       * returns a filtered array.
       */},{key:'filter',value:function filter(fn){return this._results.filter(fn);}/**
       * returns a reduced value.
       */},{key:'reduce',value:function reduce(fn,init){return this._results.reduce(fn,init);}/**
       * executes function for each element in a query.
       */},{key:'forEach',value:function forEach(fn){this._results.forEach(fn);}/**
       * converts QueryList into an array
       */},{key:'toArray',value:function toArray(){return ListWrapper.clone(this._results);}},{key:getSymbolIterator(),value:function value(){return this._results[getSymbolIterator()]();}},{key:'toString',value:function toString(){return this._results.toString();}},{key:'reset',value:function reset(res){this._results=ListWrapper.flatten(res);this._dirty=false;}},{key:'notifyOnChanges',value:function notifyOnChanges(){this._emitter.emit(this);}/** internal */},{key:'setDirty',value:function setDirty(){this._dirty=true;}/** internal */},{key:'changes',get:function get(){return this._emitter;}},{key:'length',get:function get(){return this._results.length;}},{key:'first',get:function get(){return ListWrapper.first(this._results);}},{key:'last',get:function get(){return ListWrapper.last(this._results);}},{key:'dirty',get:function get(){return this._dirty;}}]);return QueryList;}();var EMPTY_CONTEXT$1=new Object();/**
   * Represents an Embedded Template that can be used to instantiate Embedded Views.
   *
   * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
   * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
   * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
   * `TemplateRef` from a Component or a Directive via {@link Query}.
   *
   * To instantiate Embedded Views based on a Template, use
   * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
   * View Container.
   * @stable
   */var TemplateRef=function(){function TemplateRef(){_classCallCheck(this,TemplateRef);}_createClass(TemplateRef,[{key:'elementRef',/**
       * The location in the View where the Embedded View logically belongs to.
       *
       * The data-binding and injection contexts of Embedded Views created from this `TemplateRef`
       * inherit from the contexts of this location.
       *
       * Typically new Embedded Views are attached to the View Container of this location, but in
       * advanced use-cases, the View can be attached to a different container while keeping the
       * data-binding and injection context from the original location.
       *
       */// TODO(i): rename to anchor or location
get:function get(){return null;}}]);return TemplateRef;}();var TemplateRef_=function(_TemplateRef){_inherits(TemplateRef_,_TemplateRef);function TemplateRef_(_appElement,_viewFactory){_classCallCheck(this,TemplateRef_);var _this48=_possibleConstructorReturn(this,Object.getPrototypeOf(TemplateRef_).call(this));_this48._appElement=_appElement;_this48._viewFactory=_viewFactory;return _this48;}_createClass(TemplateRef_,[{key:'createEmbeddedView',value:function createEmbeddedView(context){var view=this._viewFactory(this._appElement.parentView.viewUtils,this._appElement.parentInjector,this._appElement);if(isBlank(context)){context=EMPTY_CONTEXT$1;}view.create(context,null,null);return view.ref;}},{key:'elementRef',get:function get(){return this._appElement.elementRef;}}]);return TemplateRef_;}(TemplateRef);var ViewRef_=function(){function ViewRef_(_view){_classCallCheck(this,ViewRef_);this._view=_view;this._view=_view;this._originalMode=this._view.cdMode;}_createClass(ViewRef_,[{key:'markForCheck',value:function markForCheck(){this._view.markPathToRootAsCheckOnce();}},{key:'detach',value:function detach(){this._view.cdMode=ChangeDetectionStrategy.Detached;}},{key:'detectChanges',value:function detectChanges(){this._view.detectChanges(false);}},{key:'checkNoChanges',value:function checkNoChanges(){this._view.detectChanges(true);}},{key:'reattach',value:function reattach(){this._view.cdMode=this._originalMode;this.markForCheck();}},{key:'onDestroy',value:function onDestroy(callback){this._view.disposables.push(callback);}},{key:'destroy',value:function destroy(){this._view.destroy();}},{key:'internalView',get:function get(){return this._view;}},{key:'rootNodes',get:function get(){return this._view.flatRootNodes;}},{key:'context',get:function get(){return this._view.context;}},{key:'destroyed',get:function get(){return this._view.destroyed;}}]);return ViewRef_;}();var EventListener=function EventListener(name,callback){_classCallCheck(this,EventListener);this.name=name;this.callback=callback;};/**
   * @experimental
   */var DebugNode=function(){function DebugNode(nativeNode,parent,_debugInfo){_classCallCheck(this,DebugNode);this._debugInfo=_debugInfo;this.nativeNode=nativeNode;if(isPresent(parent)&&parent instanceof DebugElement){parent.addChild(this);}else{this.parent=null;}this.listeners=[];}_createClass(DebugNode,[{key:'inject',/**
       * Use injector.get(token) instead.
       *
       * @deprecated
       */value:function inject(token){return this.injector.get(token);}},{key:'injector',get:function get(){return isPresent(this._debugInfo)?this._debugInfo.injector:null;}},{key:'componentInstance',get:function get(){return isPresent(this._debugInfo)?this._debugInfo.component:null;}},{key:'context',get:function get(){return isPresent(this._debugInfo)?this._debugInfo.context:null;}},{key:'references',get:function get(){return isPresent(this._debugInfo)?this._debugInfo.references:null;}},{key:'providerTokens',get:function get(){return isPresent(this._debugInfo)?this._debugInfo.providerTokens:null;}},{key:'source',get:function get(){return isPresent(this._debugInfo)?this._debugInfo.source:null;}}]);return DebugNode;}();/**
   * @experimental
   */var DebugElement=function(_DebugNode){_inherits(DebugElement,_DebugNode);function DebugElement(nativeNode,parent,_debugInfo){_classCallCheck(this,DebugElement);var _this49=_possibleConstructorReturn(this,Object.getPrototypeOf(DebugElement).call(this,nativeNode,parent,_debugInfo));_this49.properties={};_this49.attributes={};_this49.classes={};_this49.styles={};_this49.childNodes=[];_this49.nativeElement=nativeNode;return _this49;}_createClass(DebugElement,[{key:'addChild',value:function addChild(child){if(isPresent(child)){this.childNodes.push(child);child.parent=this;}}},{key:'removeChild',value:function removeChild(child){var childIndex=this.childNodes.indexOf(child);if(childIndex!==-1){child.parent=null;this.childNodes.splice(childIndex,1);}}},{key:'insertChildrenAfter',value:function insertChildrenAfter(child,newChildren){var siblingIndex=this.childNodes.indexOf(child);if(siblingIndex!==-1){var previousChildren=this.childNodes.slice(0,siblingIndex+1);var nextChildren=this.childNodes.slice(siblingIndex+1);this.childNodes=ListWrapper.concat(ListWrapper.concat(previousChildren,newChildren),nextChildren);for(var i=0;i<newChildren.length;++i){var newChild=newChildren[i];if(isPresent(newChild.parent)){newChild.parent.removeChild(newChild);}newChild.parent=this;}}}},{key:'query',value:function query(predicate){var results=this.queryAll(predicate);return results.length>0?results[0]:null;}},{key:'queryAll',value:function queryAll(predicate){var matches=[];_queryElementChildren(this,predicate,matches);return matches;}},{key:'queryAllNodes',value:function queryAllNodes(predicate){var matches=[];_queryNodeChildren(this,predicate,matches);return matches;}},{key:'triggerEventHandler',value:function triggerEventHandler(eventName,eventObj){this.listeners.forEach(function(listener){if(listener.name==eventName){listener.callback(eventObj);}});}},{key:'children',get:function get(){var children=[];this.childNodes.forEach(function(node){if(node instanceof DebugElement){children.push(node);}});return children;}}]);return DebugElement;}(DebugNode);function _queryElementChildren(element,predicate,matches){element.childNodes.forEach(function(node){if(node instanceof DebugElement){if(predicate(node)){matches.push(node);}_queryElementChildren(node,predicate,matches);}});}function _queryNodeChildren(parentNode,predicate,matches){if(parentNode instanceof DebugElement){parentNode.childNodes.forEach(function(node){if(predicate(node)){matches.push(node);}if(node instanceof DebugElement){_queryNodeChildren(node,predicate,matches);}});}}// Need to keep the nodes in a global Map so that multiple angular apps are supported.
var _nativeNodeToDebugNode=new Map();/**
   * @experimental
   */function getDebugNode(nativeNode){return _nativeNodeToDebugNode.get(nativeNode);}function indexDebugNode(node){_nativeNodeToDebugNode.set(node.nativeNode,node);}function removeDebugNodeFromIndex(node){_nativeNodeToDebugNode.delete(node.nativeNode);}/**
     A token that can be provided when bootstrapping an application to make an array of directives
    * available in every component of the application.
    *
    * ### Example
    *
    * ```typescript
    * import {PLATFORM_DIRECTIVES} from '@angular/core';
    * import {OtherDirective} from './myDirectives';
    *
    * @Component({
    *   selector: 'my-component',
    *   template: `
    *     <!-- can use other directive even though the component does not list it in `directives` -->
    *     <other-directive></other-directive>
    *   `
    * })
    * export class MyComponent {
    *   ...
    * }
    *
    * bootstrap(MyComponent, [{provide: PLATFORM_DIRECTIVES, useValue: [OtherDirective],
    multi:true}]);
    * ```
    * @stable
    */var PLATFORM_DIRECTIVES=/*@ts2dart_const*/new OpaqueToken('Platform Directives');/**
    * A token that can be provided when bootstraping an application to make an array of pipes
    * available in every component of the application.
    *
    * ### Example
    *
    * ```typescript
    * import {PLATFORM_PIPES} from '@angular/core';
    * import {OtherPipe} from './myPipe';
    *
    * @Component({
    *   selector: 'my-component',
    *   template: `
    *     {{123 | other-pipe}}
    *   `
    * })
    * export class MyComponent {
    *   ...
    * }
    *
    * bootstrap(MyComponent, [{provide: PLATFORM_PIPES, useValue: [OtherPipe], multi:true}]);
    * ```
    * @stable
    */var PLATFORM_PIPES=new OpaqueToken('Platform Pipes');function _reflector(){return reflector;}// prevent missing use Dart warning.
/**
   * A default set of providers which should be included in any Angular platform.
   * @experimental
   */var PLATFORM_COMMON_PROVIDERS=[PLATFORM_CORE_PROVIDERS,/*@ts2dart_Provider*/{provide:Reflector,useFactory:_reflector,deps:[]},/*@ts2dart_Provider*/{provide:ReflectorReader,useExisting:Reflector},TestabilityRegistry,Console];// avoid unused import when Type union types are erased
/**
   * A default set of providers which should be included in any Angular
   * application, regardless of the platform it runs onto.
   * @stable
   */var APPLICATION_COMMON_PROVIDERS=/*@ts2dart_const*/[APPLICATION_CORE_PROVIDERS,/* @ts2dart_Provider */{provide:ComponentResolver,useClass:ReflectorComponentResolver},APP_ID_RANDOM_PROVIDER,ViewUtils,/* @ts2dart_Provider */{provide:IterableDiffers,useValue:defaultIterableDiffers},/* @ts2dart_Provider */{provide:KeyValueDiffers,useValue:defaultKeyValueDiffers},/* @ts2dart_Provider */{provide:DynamicComponentLoader,useClass:DynamicComponentLoader_}];var FILL_STYLE_FLAG='true';// TODO (matsko): change to boolean
var ANY_STATE='*';var DEFAULT_STATE='*';var EMPTY_STATE='void';var AnimationPlayer=function(){function AnimationPlayer(){_classCallCheck(this,AnimationPlayer);}_createClass(AnimationPlayer,[{key:'parentPlayer',get:function get(){throw new BaseException('NOT IMPLEMENTED: Base Class');},set:function set(player){throw new BaseException('NOT IMPLEMENTED: Base Class');}}]);return AnimationPlayer;}();var NoOpAnimationPlayer=function(){function NoOpAnimationPlayer(){var _this50=this;_classCallCheck(this,NoOpAnimationPlayer);this._subscriptions=[];this.parentPlayer=null;scheduleMicroTask(function(){return _this50._onFinish();});}/** @internal */_createClass(NoOpAnimationPlayer,[{key:'_onFinish',value:function _onFinish(){this._subscriptions.forEach(function(entry){entry();});this._subscriptions=[];}},{key:'onDone',value:function onDone(fn){this._subscriptions.push(fn);}},{key:'play',value:function play(){}},{key:'pause',value:function pause(){}},{key:'restart',value:function restart(){}},{key:'finish',value:function finish(){this._onFinish();}},{key:'destroy',value:function destroy(){}},{key:'reset',value:function reset(){}},{key:'setPosition',value:function setPosition(p/** TODO #9100 */){}},{key:'getPosition',value:function getPosition(){return 0;}}]);return NoOpAnimationPlayer;}();var AnimationDriver=function AnimationDriver(){_classCallCheck(this,AnimationDriver);};var NoOpAnimationDriver=function(_AnimationDriver){_inherits(NoOpAnimationDriver,_AnimationDriver);function NoOpAnimationDriver(){_classCallCheck(this,NoOpAnimationDriver);return _possibleConstructorReturn(this,Object.getPrototypeOf(NoOpAnimationDriver).apply(this,arguments));}_createClass(NoOpAnimationDriver,[{key:'animate',value:function animate(element,startingStyles,keyframes,duration,delay,easing){return new NoOpAnimationPlayer();}}]);return NoOpAnimationDriver;}(AnimationDriver);var Math$1=global$1.Math;var AnimationGroupPlayer=function(){function AnimationGroupPlayer(_players){var _this52=this;_classCallCheck(this,AnimationGroupPlayer);this._players=_players;this._subscriptions=[];this._finished=false;this.parentPlayer=null;var count=0;var total=this._players.length;if(total==0){scheduleMicroTask(function(){return _this52._onFinish();});}else{this._players.forEach(function(player){player.parentPlayer=_this52;player.onDone(function(){if(++count>=total){_this52._onFinish();}});});}}_createClass(AnimationGroupPlayer,[{key:'_onFinish',value:function _onFinish(){if(!this._finished){this._finished=true;if(!isPresent(this.parentPlayer)){this.destroy();}this._subscriptions.forEach(function(subscription){return subscription();});this._subscriptions=[];}}},{key:'onDone',value:function onDone(fn){this._subscriptions.push(fn);}},{key:'play',value:function play(){this._players.forEach(function(player){return player.play();});}},{key:'pause',value:function pause(){this._players.forEach(function(player){return player.pause();});}},{key:'restart',value:function restart(){this._players.forEach(function(player){return player.restart();});}},{key:'finish',value:function finish(){this._onFinish();this._players.forEach(function(player){return player.finish();});}},{key:'destroy',value:function destroy(){this._onFinish();this._players.forEach(function(player){return player.destroy();});}},{key:'reset',value:function reset(){this._players.forEach(function(player){return player.reset();});}},{key:'setPosition',value:function setPosition(p/** TODO #9100 */){this._players.forEach(function(player){player.setPosition(p);});}},{key:'getPosition',value:function getPosition(){var min=0;this._players.forEach(function(player){var p=player.getPosition();min=Math$1.min(p,min);});return min;}}]);return AnimationGroupPlayer;}();var AnimationKeyframe=function AnimationKeyframe(offset,styles){_classCallCheck(this,AnimationKeyframe);this.offset=offset;this.styles=styles;};var AnimationSequencePlayer=function(){function AnimationSequencePlayer(_players){var _this53=this;_classCallCheck(this,AnimationSequencePlayer);this._players=_players;this._currentIndex=0;this._subscriptions=[];this._finished=false;this.parentPlayer=null;this._players.forEach(function(player){player.parentPlayer=_this53;});this._onNext(false);}_createClass(AnimationSequencePlayer,[{key:'_onNext',value:function _onNext(start){var _this54=this;if(this._finished)return;if(this._players.length==0){this._activePlayer=new NoOpAnimationPlayer();scheduleMicroTask(function(){return _this54._onFinish();});}else if(this._currentIndex>=this._players.length){this._activePlayer=new NoOpAnimationPlayer();this._onFinish();}else{var player=this._players[this._currentIndex++];player.onDone(function(){return _this54._onNext(true);});this._activePlayer=player;if(start){player.play();}}}},{key:'_onFinish',value:function _onFinish(){if(!this._finished){this._finished=true;if(!isPresent(this.parentPlayer)){this.destroy();}this._subscriptions.forEach(function(subscription){return subscription();});this._subscriptions=[];}}},{key:'onDone',value:function onDone(fn){this._subscriptions.push(fn);}},{key:'play',value:function play(){this._activePlayer.play();}},{key:'pause',value:function pause(){this._activePlayer.pause();}},{key:'restart',value:function restart(){if(this._players.length>0){this.reset();this._players[0].restart();}}},{key:'reset',value:function reset(){this._players.forEach(function(player){return player.reset();});}},{key:'finish',value:function finish(){this._onFinish();this._players.forEach(function(player){return player.finish();});}},{key:'destroy',value:function destroy(){this._onFinish();this._players.forEach(function(player){return player.destroy();});}},{key:'setPosition',value:function setPosition(p/** TODO #9100 */){this._players[0].setPosition(p);}},{key:'getPosition',value:function getPosition(){return this._players[0].getPosition();}}]);return AnimationSequencePlayer;}();var AUTO_STYLE='*';function prepareFinalAnimationStyles(previousStyles,newStyles){var nullValue=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var finalStyles={};StringMapWrapper.forEach(newStyles,function(value,prop){finalStyles[prop]=value==AUTO_STYLE?nullValue:value.toString();});StringMapWrapper.forEach(previousStyles,function(value,prop){if(!isPresent(finalStyles[prop])){finalStyles[prop]=nullValue;}});return finalStyles;}function balanceAnimationKeyframes(collectedStyles,finalStateStyles,keyframes){var limit=keyframes.length-1;var firstKeyframe=keyframes[0];// phase 1: copy all the styles from the first keyframe into the lookup map
var flatenedFirstKeyframeStyles=flattenStyles(firstKeyframe.styles.styles);var extraFirstKeyframeStyles={};var hasExtraFirstStyles=false;StringMapWrapper.forEach(collectedStyles,function(value,prop){// if the style is already defined in the first keyframe then
// we do not replace it.
if(!flatenedFirstKeyframeStyles[prop]){flatenedFirstKeyframeStyles[prop]=value;extraFirstKeyframeStyles[prop]=value;hasExtraFirstStyles=true;}});var keyframeCollectedStyles=StringMapWrapper.merge({},flatenedFirstKeyframeStyles);// phase 2: normalize the final keyframe
var finalKeyframe=keyframes[limit];ListWrapper.insert(finalKeyframe.styles.styles,0,finalStateStyles);var flatenedFinalKeyframeStyles=flattenStyles(finalKeyframe.styles.styles);var extraFinalKeyframeStyles={};var hasExtraFinalStyles=false;StringMapWrapper.forEach(keyframeCollectedStyles,function(value,prop){if(!isPresent(flatenedFinalKeyframeStyles[prop])){extraFinalKeyframeStyles[prop]=AUTO_STYLE;hasExtraFinalStyles=true;}});if(hasExtraFinalStyles){finalKeyframe.styles.styles.push(extraFinalKeyframeStyles);}StringMapWrapper.forEach(flatenedFinalKeyframeStyles,function(value,prop){if(!isPresent(flatenedFirstKeyframeStyles[prop])){extraFirstKeyframeStyles[prop]=AUTO_STYLE;hasExtraFirstStyles=true;}});if(hasExtraFirstStyles){firstKeyframe.styles.styles.push(extraFirstKeyframeStyles);}return keyframes;}function clearStyles(styles){var finalStyles={};StringMapWrapper.keys(styles).forEach(function(key){finalStyles[key]=null;});return finalStyles;}function collectAndResolveStyles(collection,styles){return styles.map(function(entry){var stylesObj={};StringMapWrapper.forEach(entry,function(value,prop){if(value==FILL_STYLE_FLAG){value=collection[prop];if(!isPresent(value)){value=AUTO_STYLE;}}collection[prop]=value;stylesObj[prop]=value;});return stylesObj;});}function renderStyles(element,renderer,styles){StringMapWrapper.forEach(styles,function(value,prop){renderer.setElementStyle(element,prop,value);});}function flattenStyles(styles){var finalStyles={};styles.forEach(function(entry){StringMapWrapper.forEach(entry,function(value,prop){finalStyles[prop]=value;});});return finalStyles;}var AnimationStyles=function AnimationStyles(styles){_classCallCheck(this,AnimationStyles);this.styles=styles;};var DebugDomRootRenderer=function(){function DebugDomRootRenderer(_delegate){_classCallCheck(this,DebugDomRootRenderer);this._delegate=_delegate;}_createClass(DebugDomRootRenderer,[{key:'renderComponent',value:function renderComponent(componentProto){return new DebugDomRenderer(this._delegate.renderComponent(componentProto));}}]);return DebugDomRootRenderer;}();var DebugDomRenderer=function(){function DebugDomRenderer(_delegate){_classCallCheck(this,DebugDomRenderer);this._delegate=_delegate;}_createClass(DebugDomRenderer,[{key:'selectRootElement',value:function selectRootElement(selectorOrNode,debugInfo){var nativeEl=this._delegate.selectRootElement(selectorOrNode,debugInfo);var debugEl=new DebugElement(nativeEl,null,debugInfo);indexDebugNode(debugEl);return nativeEl;}},{key:'createElement',value:function createElement(parentElement,name,debugInfo){var nativeEl=this._delegate.createElement(parentElement,name,debugInfo);var debugEl=new DebugElement(nativeEl,getDebugNode(parentElement),debugInfo);debugEl.name=name;indexDebugNode(debugEl);return nativeEl;}},{key:'createViewRoot',value:function createViewRoot(hostElement){return this._delegate.createViewRoot(hostElement);}},{key:'createTemplateAnchor',value:function createTemplateAnchor(parentElement,debugInfo){var comment=this._delegate.createTemplateAnchor(parentElement,debugInfo);var debugEl=new DebugNode(comment,getDebugNode(parentElement),debugInfo);indexDebugNode(debugEl);return comment;}},{key:'createText',value:function createText(parentElement,value,debugInfo){var text=this._delegate.createText(parentElement,value,debugInfo);var debugEl=new DebugNode(text,getDebugNode(parentElement),debugInfo);indexDebugNode(debugEl);return text;}},{key:'projectNodes',value:function projectNodes(parentElement,nodes){var debugParent=getDebugNode(parentElement);if(isPresent(debugParent)&&debugParent instanceof DebugElement){(function(){var debugElement=debugParent;nodes.forEach(function(node){debugElement.addChild(getDebugNode(node));});})();}this._delegate.projectNodes(parentElement,nodes);}},{key:'attachViewAfter',value:function attachViewAfter(node,viewRootNodes){var debugNode=getDebugNode(node);if(isPresent(debugNode)){var debugParent=debugNode.parent;if(viewRootNodes.length>0&&isPresent(debugParent)){var debugViewRootNodes=[];viewRootNodes.forEach(function(rootNode){return debugViewRootNodes.push(getDebugNode(rootNode));});debugParent.insertChildrenAfter(debugNode,debugViewRootNodes);}}this._delegate.attachViewAfter(node,viewRootNodes);}},{key:'detachView',value:function detachView(viewRootNodes){viewRootNodes.forEach(function(node){var debugNode=getDebugNode(node);if(isPresent(debugNode)&&isPresent(debugNode.parent)){debugNode.parent.removeChild(debugNode);}});this._delegate.detachView(viewRootNodes);}},{key:'destroyView',value:function destroyView(hostElement,viewAllNodes){viewAllNodes.forEach(function(node){removeDebugNodeFromIndex(getDebugNode(node));});this._delegate.destroyView(hostElement,viewAllNodes);}},{key:'listen',value:function listen(renderElement,name,callback){var debugEl=getDebugNode(renderElement);if(isPresent(debugEl)){debugEl.listeners.push(new EventListener(name,callback));}return this._delegate.listen(renderElement,name,callback);}},{key:'listenGlobal',value:function listenGlobal(target,name,callback){return this._delegate.listenGlobal(target,name,callback);}},{key:'setElementProperty',value:function setElementProperty(renderElement,propertyName,propertyValue){var debugEl=getDebugNode(renderElement);if(isPresent(debugEl)&&debugEl instanceof DebugElement){debugEl.properties[propertyName]=propertyValue;}this._delegate.setElementProperty(renderElement,propertyName,propertyValue);}},{key:'setElementAttribute',value:function setElementAttribute(renderElement,attributeName,attributeValue){var debugEl=getDebugNode(renderElement);if(isPresent(debugEl)&&debugEl instanceof DebugElement){debugEl.attributes[attributeName]=attributeValue;}this._delegate.setElementAttribute(renderElement,attributeName,attributeValue);}},{key:'setBindingDebugInfo',value:function setBindingDebugInfo(renderElement,propertyName,propertyValue){this._delegate.setBindingDebugInfo(renderElement,propertyName,propertyValue);}},{key:'setElementClass',value:function setElementClass(renderElement,className,isAdd){var debugEl=getDebugNode(renderElement);if(isPresent(debugEl)&&debugEl instanceof DebugElement){debugEl.classes[className]=isAdd;}this._delegate.setElementClass(renderElement,className,isAdd);}},{key:'setElementStyle',value:function setElementStyle(renderElement,styleName,styleValue){var debugEl=getDebugNode(renderElement);if(isPresent(debugEl)&&debugEl instanceof DebugElement){debugEl.styles[styleName]=styleValue;}this._delegate.setElementStyle(renderElement,styleName,styleValue);}},{key:'invokeElementMethod',value:function invokeElementMethod(renderElement,methodName,args){this._delegate.invokeElementMethod(renderElement,methodName,args);}},{key:'setText',value:function setText(renderNode,text){this._delegate.setText(renderNode,text);}},{key:'animate',value:function animate(element,startingStyles,keyframes,duration,delay,easing){return this._delegate.animate(element,startingStyles,keyframes,duration,delay,easing);}}]);return DebugDomRenderer;}();/* @ts2dart_const */var StaticNodeDebugInfo=function StaticNodeDebugInfo(providerTokens,componentToken,refTokens){_classCallCheck(this,StaticNodeDebugInfo);this.providerTokens=providerTokens;this.componentToken=componentToken;this.refTokens=refTokens;};var DebugContext=function(){function DebugContext(_view,_nodeIndex,_tplRow,_tplCol){_classCallCheck(this,DebugContext);this._view=_view;this._nodeIndex=_nodeIndex;this._tplRow=_tplRow;this._tplCol=_tplCol;}_createClass(DebugContext,[{key:'_staticNodeInfo',get:function get(){return isPresent(this._nodeIndex)?this._view.staticNodeDebugInfos[this._nodeIndex]:null;}},{key:'context',get:function get(){return this._view.context;}},{key:'component',get:function get(){var staticNodeInfo=this._staticNodeInfo;if(isPresent(staticNodeInfo)&&isPresent(staticNodeInfo.componentToken)){return this.injector.get(staticNodeInfo.componentToken);}return null;}},{key:'componentRenderElement',get:function get(){var componentView=this._view;while(isPresent(componentView.declarationAppElement)&&componentView.type!==ViewType.COMPONENT){componentView=componentView.declarationAppElement.parentView;}return isPresent(componentView.declarationAppElement)?componentView.declarationAppElement.nativeElement:null;}},{key:'injector',get:function get(){return this._view.injector(this._nodeIndex);}},{key:'renderNode',get:function get(){if(isPresent(this._nodeIndex)&&isPresent(this._view.allNodes)){return this._view.allNodes[this._nodeIndex];}else{return null;}}},{key:'providerTokens',get:function get(){var staticNodeInfo=this._staticNodeInfo;return isPresent(staticNodeInfo)?staticNodeInfo.providerTokens:null;}},{key:'source',get:function get(){return this._view.componentType.templateUrl+':'+this._tplRow+':'+this._tplCol;}},{key:'references',get:function get(){var _this55=this;var varValues={};var staticNodeInfo=this._staticNodeInfo;if(isPresent(staticNodeInfo)){var refs=staticNodeInfo.refTokens;StringMapWrapper.forEach(refs,function(refToken/** TODO #9100 */,refName/** TODO #9100 */){var varValue;if(isBlank(refToken)){varValue=isPresent(_this55._view.allNodes)?_this55._view.allNodes[_this55._nodeIndex]:null;}else{varValue=_this55._view.injectorGet(refToken,_this55._nodeIndex,null);}varValues[refName]=varValue;});}return varValues;}}]);return DebugContext;}();var _UNDEFINED=new Object();var ElementInjector=function(_Injector){_inherits(ElementInjector,_Injector);function ElementInjector(_view,_nodeIndex){_classCallCheck(this,ElementInjector);var _this56=_possibleConstructorReturn(this,Object.getPrototypeOf(ElementInjector).call(this));_this56._view=_view;_this56._nodeIndex=_nodeIndex;return _this56;}_createClass(ElementInjector,[{key:'get',value:function get(token){var notFoundValue=arguments.length<=1||arguments[1]===undefined?THROW_IF_NOT_FOUND:arguments[1];var result=_UNDEFINED;if(result===_UNDEFINED){result=this._view.injectorGet(token,this._nodeIndex,_UNDEFINED);}if(result===_UNDEFINED){result=this._view.parentInjector.get(token,notFoundValue);}return result;}}]);return ElementInjector;}(Injector);var ActiveAnimationPlayersMap=function(){function ActiveAnimationPlayersMap(){_classCallCheck(this,ActiveAnimationPlayersMap);this._map=new Map$1();this._allPlayers=[];}_createClass(ActiveAnimationPlayersMap,[{key:'find',value:function find(element,animationName){var playersByAnimation=this._map.get(element);if(isPresent(playersByAnimation)){return playersByAnimation[animationName];}}},{key:'findAllPlayersByElement',value:function findAllPlayersByElement(element){var players=[];StringMapWrapper.forEach(this._map.get(element),function(player/** TODO #9100 */){return players.push(player);});return players;}},{key:'set',value:function set(element,animationName,player){var playersByAnimation=this._map.get(element);if(!isPresent(playersByAnimation)){playersByAnimation={};}var existingEntry=playersByAnimation[animationName];if(isPresent(existingEntry)){this.remove(element,animationName);}playersByAnimation[animationName]=player;this._allPlayers.push(player);this._map.set(element,playersByAnimation);}},{key:'getAllPlayers',value:function getAllPlayers(){return this._allPlayers;}},{key:'remove',value:function remove(element,animationName){var playersByAnimation=this._map.get(element);if(isPresent(playersByAnimation)){var player=playersByAnimation[animationName];delete playersByAnimation[animationName];var index=this._allPlayers.indexOf(player);ListWrapper.removeAt(this._allPlayers,index);if(StringMapWrapper.isEmpty(playersByAnimation)){this._map.delete(element);}}}},{key:'length',get:function get(){return this.getAllPlayers().length;}}]);return ActiveAnimationPlayersMap;}();var _scope_check=wtfCreateScope('AppView#check(ascii id)');/**
   * Cost of making objects: http://jsperf.com/instantiate-size-of-object
   *
   */var AppView=function(){function AppView(clazz,componentType,type,viewUtils,parentInjector,declarationAppElement,cdMode){_classCallCheck(this,AppView);this.clazz=clazz;this.componentType=componentType;this.type=type;this.viewUtils=viewUtils;this.parentInjector=parentInjector;this.declarationAppElement=declarationAppElement;this.cdMode=cdMode;this.contentChildren=[];this.viewChildren=[];this.viewContainerElement=null;// The names of the below fields must be kept in sync with codegen_name_util.ts or
// change detection will fail.
this.cdState=ChangeDetectorState.NeverChecked;this.destroyed=false;this.activeAnimationPlayers=new ActiveAnimationPlayersMap();this.ref=new ViewRef_(this);if(type===ViewType.COMPONENT||type===ViewType.HOST){this.renderer=viewUtils.renderComponent(componentType);}else{this.renderer=declarationAppElement.parentView.renderer;}}_createClass(AppView,[{key:'cancelActiveAnimation',value:function cancelActiveAnimation(element,animationName){var removeAllAnimations=arguments.length<=2||arguments[2]===undefined?false:arguments[2];if(removeAllAnimations){this.activeAnimationPlayers.findAllPlayersByElement(element).forEach(function(player){return player.destroy();});}else{var player=this.activeAnimationPlayers.find(element,animationName);if(isPresent(player)){player.destroy();}}}},{key:'registerAndStartAnimation',value:function registerAndStartAnimation(element,animationName,player){var _this57=this;this.activeAnimationPlayers.set(element,animationName,player);player.onDone(function(){_this57.activeAnimationPlayers.remove(element,animationName);});player.play();}},{key:'create',value:function create(context,givenProjectableNodes,rootSelectorOrNode){this.context=context;var projectableNodes;switch(this.type){case ViewType.COMPONENT:projectableNodes=ensureSlotCount(givenProjectableNodes,this.componentType.slotCount);break;case ViewType.EMBEDDED:projectableNodes=this.declarationAppElement.parentView.projectableNodes;break;case ViewType.HOST:// Note: Don't ensure the slot count for the projectableNodes as we store
// them only for the contained component view (which will later check the slot count...)
projectableNodes=givenProjectableNodes;break;}this._hasExternalHostElement=isPresent(rootSelectorOrNode);this.projectableNodes=projectableNodes;return this.createInternal(rootSelectorOrNode);}/**
       * Overwritten by implementations.
       * Returns the AppElement for the host element for ViewType.HOST.
       */},{key:'createInternal',value:function createInternal(rootSelectorOrNode){return null;}},{key:'init',value:function init(rootNodesOrAppElements,allNodes,disposables,subscriptions){this.rootNodesOrAppElements=rootNodesOrAppElements;this.allNodes=allNodes;this.disposables=disposables;this.subscriptions=subscriptions;if(this.type===ViewType.COMPONENT){// Note: the render nodes have been attached to their host element
// in the ViewFactory already.
this.declarationAppElement.parentView.viewChildren.push(this);this.dirtyParentQueriesInternal();}}},{key:'selectOrCreateHostElement',value:function selectOrCreateHostElement(elementName,rootSelectorOrNode,debugInfo){var hostElement;if(isPresent(rootSelectorOrNode)){hostElement=this.renderer.selectRootElement(rootSelectorOrNode,debugInfo);}else{hostElement=this.renderer.createElement(null,elementName,debugInfo);}return hostElement;}},{key:'injectorGet',value:function injectorGet(token,nodeIndex,notFoundResult){return this.injectorGetInternal(token,nodeIndex,notFoundResult);}/**
       * Overwritten by implementations
       */},{key:'injectorGetInternal',value:function injectorGetInternal(token,nodeIndex,notFoundResult){return notFoundResult;}},{key:'injector',value:function injector(nodeIndex){if(isPresent(nodeIndex)){return new ElementInjector(this,nodeIndex);}else{return this.parentInjector;}}},{key:'destroy',value:function destroy(){if(this._hasExternalHostElement){this.renderer.detachView(this.flatRootNodes);}else if(isPresent(this.viewContainerElement)){this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));}this._destroyRecurse();}},{key:'_destroyRecurse',value:function _destroyRecurse(){if(this.destroyed){return;}var children=this.contentChildren;for(var i=0;i<children.length;i++){children[i]._destroyRecurse();}children=this.viewChildren;for(var i=0;i<children.length;i++){children[i]._destroyRecurse();}this.destroyLocal();this.destroyed=true;}},{key:'destroyLocal',value:function destroyLocal(){var _this58=this;var hostElement=this.type===ViewType.COMPONENT?this.declarationAppElement.nativeElement:null;for(var i=0;i<this.disposables.length;i++){this.disposables[i]();}for(var i=0;i<this.subscriptions.length;i++){ObservableWrapper.dispose(this.subscriptions[i]);}this.destroyInternal();this.dirtyParentQueriesInternal();if(this.activeAnimationPlayers.length==0){this.renderer.destroyView(hostElement,this.allNodes);}else{var player=new AnimationGroupPlayer(this.activeAnimationPlayers.getAllPlayers());player.onDone(function(){_this58.renderer.destroyView(hostElement,_this58.allNodes);});}}/**
       * Overwritten by implementations
       */},{key:'destroyInternal',value:function destroyInternal(){}/**
       * Overwritten by implementations
       */},{key:'detachInternal',value:function detachInternal(){}},{key:'detach',value:function detach(){var _this59=this;this.detachInternal();if(this.activeAnimationPlayers.length==0){this.renderer.detachView(this.flatRootNodes);}else{var player=new AnimationGroupPlayer(this.activeAnimationPlayers.getAllPlayers());player.onDone(function(){_this59.renderer.detachView(_this59.flatRootNodes);});}}},{key:'dirtyParentQueriesInternal',/**
       * Overwritten by implementations
       */value:function dirtyParentQueriesInternal(){}},{key:'detectChanges',value:function detectChanges(throwOnChange){var s=_scope_check(this.clazz);if(this.cdMode===ChangeDetectionStrategy.Checked||this.cdState===ChangeDetectorState.Errored)return;if(this.destroyed){this.throwDestroyedError('detectChanges');}this.detectChangesInternal(throwOnChange);if(this.cdMode===ChangeDetectionStrategy.CheckOnce)this.cdMode=ChangeDetectionStrategy.Checked;this.cdState=ChangeDetectorState.CheckedBefore;wtfLeave(s);}/**
       * Overwritten by implementations
       */},{key:'detectChangesInternal',value:function detectChangesInternal(throwOnChange){this.detectContentChildrenChanges(throwOnChange);this.detectViewChildrenChanges(throwOnChange);}},{key:'detectContentChildrenChanges',value:function detectContentChildrenChanges(throwOnChange){for(var i=0;i<this.contentChildren.length;++i){var child=this.contentChildren[i];if(child.cdMode===ChangeDetectionStrategy.Detached)continue;child.detectChanges(throwOnChange);}}},{key:'detectViewChildrenChanges',value:function detectViewChildrenChanges(throwOnChange){for(var i=0;i<this.viewChildren.length;++i){var child=this.viewChildren[i];if(child.cdMode===ChangeDetectionStrategy.Detached)continue;child.detectChanges(throwOnChange);}}},{key:'addToContentChildren',value:function addToContentChildren(renderAppElement){renderAppElement.parentView.contentChildren.push(this);this.viewContainerElement=renderAppElement;this.dirtyParentQueriesInternal();}},{key:'removeFromContentChildren',value:function removeFromContentChildren(renderAppElement){ListWrapper.remove(renderAppElement.parentView.contentChildren,this);this.dirtyParentQueriesInternal();this.viewContainerElement=null;}},{key:'markAsCheckOnce',value:function markAsCheckOnce(){this.cdMode=ChangeDetectionStrategy.CheckOnce;}},{key:'markPathToRootAsCheckOnce',value:function markPathToRootAsCheckOnce(){var c=this;while(isPresent(c)&&c.cdMode!==ChangeDetectionStrategy.Detached){if(c.cdMode===ChangeDetectionStrategy.Checked){c.cdMode=ChangeDetectionStrategy.CheckOnce;}var parentEl=c.type===ViewType.COMPONENT?c.declarationAppElement:c.viewContainerElement;c=isPresent(parentEl)?parentEl.parentView:null;}}},{key:'eventHandler',value:function eventHandler(cb){return cb;}},{key:'throwDestroyedError',value:function throwDestroyedError(details){throw new ViewDestroyedException(details);}},{key:'changeDetectorRef',get:function get(){return this.ref;}},{key:'parent',get:function get(){return isPresent(this.declarationAppElement)?this.declarationAppElement.parentView:null;}},{key:'flatRootNodes',get:function get(){return flattenNestedViewRenderNodes(this.rootNodesOrAppElements);}},{key:'lastRootNode',get:function get(){var lastNode=this.rootNodesOrAppElements.length>0?this.rootNodesOrAppElements[this.rootNodesOrAppElements.length-1]:null;return _findLastRenderNode(lastNode);}}]);return AppView;}();var DebugAppView=function(_AppView){_inherits(DebugAppView,_AppView);function DebugAppView(clazz,componentType,type,viewUtils,parentInjector,declarationAppElement,cdMode,staticNodeDebugInfos){_classCallCheck(this,DebugAppView);var _this60=_possibleConstructorReturn(this,Object.getPrototypeOf(DebugAppView).call(this,clazz,componentType,type,viewUtils,parentInjector,declarationAppElement,cdMode));_this60.staticNodeDebugInfos=staticNodeDebugInfos;_this60._currentDebugContext=null;return _this60;}_createClass(DebugAppView,[{key:'create',value:function create(context,givenProjectableNodes,rootSelectorOrNode){this._resetDebug();try{return _get(Object.getPrototypeOf(DebugAppView.prototype),'create',this).call(this,context,givenProjectableNodes,rootSelectorOrNode);}catch(e){this._rethrowWithContext(e,e.stack);throw e;}}},{key:'injectorGet',value:function injectorGet(token,nodeIndex,notFoundResult){this._resetDebug();try{return _get(Object.getPrototypeOf(DebugAppView.prototype),'injectorGet',this).call(this,token,nodeIndex,notFoundResult);}catch(e){this._rethrowWithContext(e,e.stack);throw e;}}},{key:'detach',value:function detach(){this._resetDebug();try{_get(Object.getPrototypeOf(DebugAppView.prototype),'detach',this).call(this);}catch(e){this._rethrowWithContext(e,e.stack);throw e;}}},{key:'destroyLocal',value:function destroyLocal(){this._resetDebug();try{_get(Object.getPrototypeOf(DebugAppView.prototype),'destroyLocal',this).call(this);}catch(e){this._rethrowWithContext(e,e.stack);throw e;}}},{key:'detectChanges',value:function detectChanges(throwOnChange){this._resetDebug();try{_get(Object.getPrototypeOf(DebugAppView.prototype),'detectChanges',this).call(this,throwOnChange);}catch(e){this._rethrowWithContext(e,e.stack);throw e;}}},{key:'_resetDebug',value:function _resetDebug(){this._currentDebugContext=null;}},{key:'debug',value:function debug(nodeIndex,rowNum,colNum){return this._currentDebugContext=new DebugContext(this,nodeIndex,rowNum,colNum);}},{key:'_rethrowWithContext',value:function _rethrowWithContext(e,stack){if(!(e instanceof ViewWrappedException)){if(!(e instanceof ExpressionChangedAfterItHasBeenCheckedException)){this.cdState=ChangeDetectorState.Errored;}if(isPresent(this._currentDebugContext)){throw new ViewWrappedException(e,stack,this._currentDebugContext);}}}},{key:'eventHandler',value:function eventHandler(cb){var _this61=this;var superHandler=_get(Object.getPrototypeOf(DebugAppView.prototype),'eventHandler',this).call(this,cb);return function(event/** TODO #9100 */){_this61._resetDebug();try{return superHandler(event);}catch(e){_this61._rethrowWithContext(e,e.stack);throw e;}};}}]);return DebugAppView;}(AppView);function _findLastRenderNode(node){var lastNode;if(node instanceof AppElement){var appEl=node;lastNode=appEl.nativeElement;if(isPresent(appEl.nestedViews)){// Note: Views might have no root nodes at all!
for(var i=appEl.nestedViews.length-1;i>=0;i--){var nestedView=appEl.nestedViews[i];if(nestedView.rootNodesOrAppElements.length>0){lastNode=_findLastRenderNode(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length-1]);}}}}else{lastNode=node;}return lastNode;}/**
   * This is here because DART requires it. It is noop in JS.
   */function wtfInit(){}var r={isDefaultChangeDetectionStrategy:isDefaultChangeDetectionStrategy,ChangeDetectorState:ChangeDetectorState,CHANGE_DETECTION_STRATEGY_VALUES:CHANGE_DETECTION_STRATEGY_VALUES,constructDependencies:constructDependencies,LifecycleHooks:LifecycleHooks,LIFECYCLE_HOOKS_VALUES:LIFECYCLE_HOOKS_VALUES,ReflectorReader:ReflectorReader,ReflectorComponentResolver:ReflectorComponentResolver,AppElement:AppElement,AppView:AppView,DebugAppView:DebugAppView,ViewType:ViewType,MAX_INTERPOLATION_VALUES:MAX_INTERPOLATION_VALUES,checkBinding:checkBinding,flattenNestedViewRenderNodes:flattenNestedViewRenderNodes,interpolate:interpolate,ViewUtils:ViewUtils,VIEW_ENCAPSULATION_VALUES:VIEW_ENCAPSULATION_VALUES,DebugContext:DebugContext,StaticNodeDebugInfo:StaticNodeDebugInfo,devModeEqual:devModeEqual,uninitialized:uninitialized,ValueUnwrapper:ValueUnwrapper,RenderDebugInfo:RenderDebugInfo,SecurityContext:SecurityContext,SanitizationService:SanitizationService,TemplateRef_:TemplateRef_,wtfInit:wtfInit,ReflectionCapabilities:ReflectionCapabilities,makeDecorator:makeDecorator,DebugDomRootRenderer:DebugDomRootRenderer,createProvider:createProvider,isProviderLiteral:isProviderLiteral,EMPTY_ARRAY:EMPTY_ARRAY,EMPTY_MAP:EMPTY_MAP,pureProxy1:pureProxy1,pureProxy2:pureProxy2,pureProxy3:pureProxy3,pureProxy4:pureProxy4,pureProxy5:pureProxy5,pureProxy6:pureProxy6,pureProxy7:pureProxy7,pureProxy8:pureProxy8,pureProxy9:pureProxy9,pureProxy10:pureProxy10,castByValue:castByValue,Console:Console,reflector:reflector,Reflector:Reflector,NoOpAnimationPlayer:NoOpAnimationPlayer,AnimationPlayer:AnimationPlayer,NoOpAnimationDriver:NoOpAnimationDriver,AnimationDriver:AnimationDriver,AnimationSequencePlayer:AnimationSequencePlayer,AnimationGroupPlayer:AnimationGroupPlayer,AnimationKeyframe:AnimationKeyframe,prepareFinalAnimationStyles:prepareFinalAnimationStyles,balanceAnimationKeyframes:balanceAnimationKeyframes,flattenStyles:flattenStyles,clearStyles:clearStyles,renderStyles:renderStyles,collectAndResolveStyles:collectAndResolveStyles,AnimationStyles:AnimationStyles,ANY_STATE:ANY_STATE,DEFAULT_STATE:DEFAULT_STATE,EMPTY_STATE:EMPTY_STATE,FILL_STYLE_FLAG:FILL_STYLE_FLAG};var globalScope$1;if(typeof window==='undefined'){if(typeof WorkerGlobalScope!=='undefined'&&self instanceof WorkerGlobalScope){// TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
globalScope$1=self;}else{globalScope$1=global;}}else{globalScope$1=window;}// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var global$2=globalScope$1;// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
global$2.assert=function assert(condition){// TODO: to be fixed properly via #2830, noop for now
};function isPresent$1(obj){return obj!==undefined&&obj!==null;}function isBlank$1(obj){return obj===undefined||obj===null;}function isString$1(obj){return typeof obj==='string';}function isPromise$1(obj){return obj instanceof global$2.Promise;}function isArray$2(obj){return Array.isArray(obj);}function noop$1(){}var StringWrapper$1=function(){function StringWrapper$1(){_classCallCheck(this,StringWrapper$1);}_createClass(StringWrapper$1,null,[{key:'fromCharCode',value:function fromCharCode(code){return String.fromCharCode(code);}},{key:'charCodeAt',value:function charCodeAt(s,index){return s.charCodeAt(index);}},{key:'split',value:function split(s,regExp){return s.split(regExp);}},{key:'equals',value:function equals(s,s2){return s===s2;}},{key:'stripLeft',value:function stripLeft(s,charVal){if(s&&s.length){var pos=0;for(var i=0;i<s.length;i++){if(s[i]!=charVal)break;pos++;}s=s.substring(pos);}return s;}},{key:'stripRight',value:function stripRight(s,charVal){if(s&&s.length){var pos=s.length;for(var i=s.length-1;i>=0;i--){if(s[i]!=charVal)break;pos--;}s=s.substring(0,pos);}return s;}},{key:'replace',value:function replace(s,from,_replace2){return s.replace(from,_replace2);}},{key:'replaceAll',value:function replaceAll(s,from,replace){return s.replace(from,replace);}},{key:'slice',value:function slice(s){var from=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var to=arguments.length<=2||arguments[2]===undefined?null:arguments[2];return s.slice(from,to===null?undefined:to);}},{key:'replaceAllMapped',value:function replaceAllMapped(s,from,cb){return s.replace(from,function(){for(var _len4=arguments.length,matches=Array(_len4),_key4=0;_key4<_len4;_key4++){matches[_key4]=arguments[_key4];}// Remove offset & string from the result array
matches.splice(-2,2);// The callback receives match, p1, ..., pn
return cb(matches);});}},{key:'contains',value:function contains(s,substr){return s.indexOf(substr)!=-1;}},{key:'compare',value:function compare(a,b){if(a<b){return-1;}else if(a>b){return 1;}else{return 0;}}}]);return StringWrapper$1;}();var NumberParseError$1=function(_Error5){_inherits(NumberParseError$1,_Error5);function NumberParseError$1(message){_classCallCheck(this,NumberParseError$1);var _this62=_possibleConstructorReturn(this,Object.getPrototypeOf(NumberParseError$1).call(this));_this62.message=message;return _this62;}_createClass(NumberParseError$1,[{key:'toString',value:function toString(){return this.message;}}]);return NumberParseError$1;}(Error);var NumberWrapper$1=function(){function NumberWrapper$1(){_classCallCheck(this,NumberWrapper$1);}_createClass(NumberWrapper$1,null,[{key:'toFixed',value:function toFixed(n,fractionDigits){return n.toFixed(fractionDigits);}},{key:'equal',value:function equal(a,b){return a===b;}},{key:'parseIntAutoRadix',value:function parseIntAutoRadix(text){var result=parseInt(text);if(isNaN(result)){throw new NumberParseError$1('Invalid integer literal when parsing '+text);}return result;}},{key:'parseInt',value:function(_parseInt){function parseInt(_x47,_x48){return _parseInt.apply(this,arguments);}parseInt.toString=function(){return _parseInt.toString();};return parseInt;}(function(text,radix){if(radix==10){if(/^(\-|\+)?[0-9]+$/.test(text)){return parseInt(text,radix);}}else if(radix==16){if(/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)){return parseInt(text,radix);}}else{var result=parseInt(text,radix);if(!isNaN(result)){return result;}}throw new NumberParseError$1('Invalid integer literal when parsing '+text+' in base '+radix);})// TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
},{key:'parseFloat',value:function(_parseFloat){function parseFloat(_x49){return _parseFloat.apply(this,arguments);}parseFloat.toString=function(){return _parseFloat.toString();};return parseFloat;}(function(text){return parseFloat(text);})},{key:'isNumeric',value:function isNumeric(value){return!isNaN(value-parseFloat(value));}},{key:'isNaN',value:function(_isNaN){function isNaN(_x50){return _isNaN.apply(this,arguments);}isNaN.toString=function(){return _isNaN.toString();};return isNaN;}(function(value){return isNaN(value);})},{key:'isInteger',value:function isInteger(value){return Number.isInteger(value);}},{key:'NaN',get:function get(){return NaN;}}]);return NumberWrapper$1;}();// JS has NaN !== NaN
function looseIdentical$1(a,b){return a===b||typeof a==='number'&&typeof b==='number'&&isNaN(a)&&isNaN(b);}function normalizeBool$1(obj){return isBlank$1(obj)?false:obj;}function isJsObject$1(o){return o!==null&&(typeof o==='function'||(typeof o==='undefined'?'undefined':_typeof(o))==='object');}function isPrimitive$1(obj){return!isJsObject$1(obj);}function hasConstructor$1(value,type){return value.constructor===type;}var PromiseCompleter$1=function PromiseCompleter$1(){var _this63=this;_classCallCheck(this,PromiseCompleter$1);this.promise=new Promise(function(res,rej){_this63.resolve=res;_this63.reject=rej;});};var PromiseWrapper$1=function(){function PromiseWrapper$1(){_classCallCheck(this,PromiseWrapper$1);}_createClass(PromiseWrapper$1,null,[{key:'resolve',value:function resolve(obj){return Promise.resolve(obj);}},{key:'reject',value:function reject(obj,_){return Promise.reject(obj);}// Note: We can't rename this method into `catch`, as this is not a valid
// method name in Dart.
},{key:'catchError',value:function catchError(promise,onError){return promise.catch(onError);}},{key:'all',value:function all(promises){if(promises.length==0)return Promise.resolve([]);return Promise.all(promises);}},{key:'then',value:function then(promise,success,rejection){return promise.then(success,rejection);}},{key:'wrap',value:function wrap(computation){return new Promise(function(res,rej){try{res(computation());}catch(e){rej(e);}});}},{key:'scheduleMicrotask',value:function scheduleMicrotask(computation){PromiseWrapper$1.then(PromiseWrapper$1.resolve(null),computation,function(_){});}},{key:'completer',value:function completer(){return new PromiseCompleter$1();}}]);return PromiseWrapper$1;}();var ObservableWrapper$1=function(){function ObservableWrapper$1(){_classCallCheck(this,ObservableWrapper$1);}_createClass(ObservableWrapper$1,null,[{key:'subscribe',// TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
value:function subscribe(emitter,onNext,onError){var onComplete=arguments.length<=3||arguments[3]===undefined?function(){}:arguments[3];onError=typeof onError==='function'&&onError||noop$1;onComplete=typeof onComplete==='function'&&onComplete||noop$1;return emitter.subscribe({next:onNext,error:onError,complete:onComplete});}},{key:'isObservable',value:function isObservable(obs){return!!obs.subscribe;}/**
       * Returns whether `obs` has any subscribers listening to events.
       */},{key:'hasSubscribers',value:function hasSubscribers(obs){return obs.observers.length>0;}},{key:'dispose',value:function dispose(subscription){subscription.unsubscribe();}/**
       * @deprecated - use callEmit() instead
       */},{key:'callNext',value:function callNext(emitter,value){emitter.emit(value);}},{key:'callEmit',value:function callEmit(emitter,value){emitter.emit(value);}},{key:'callError',value:function callError(emitter,error){emitter.error(error);}},{key:'callComplete',value:function callComplete(emitter){emitter.complete();}},{key:'fromPromise',value:function fromPromise(promise){return PromiseObservable.create(promise);}},{key:'toPromise',value:function toPromise(obj){return _toPromise.call(obj);}}]);return ObservableWrapper$1;}();/**
   * Use by directives and components to emit custom Events.
   *
   * ### Examples
   *
   * In the following example, `Zippy` alternatively emits `open` and `close` events when its
   * title gets clicked:
   *
   * ```
   * @Component({
   *   selector: 'zippy',
   *   template: `
   *   <div class="zippy">
   *     <div (click)="toggle()">Toggle</div>
   *     <div [hidden]="!visible">
   *       <ng-content></ng-content>
   *     </div>
   *  </div>`})
   * export class Zippy {
   *   visible: boolean = true;
   *   @Output() open: EventEmitter<any> = new EventEmitter();
   *   @Output() close: EventEmitter<any> = new EventEmitter();
   *
   *   toggle() {
   *     this.visible = !this.visible;
   *     if (this.visible) {
   *       this.open.emit(null);
   *     } else {
   *       this.close.emit(null);
   *     }
   *   }
   * }
   * ```
   *
   * The events payload can be accessed by the parameter `$event` on the components output event
   * handler:
   *
   * ```
   * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
   * ```
   *
   * Uses Rx.Observable but provides an adapter to make it work as specified here:
   * https://github.com/jhusain/observable-spec
   *
   * Once a reference implementation of the spec is available, switch to it.
   * @stable
   */var EventEmitter$1=function(_Subject3){_inherits(EventEmitter$1,_Subject3);/**
       * Creates an instance of [EventEmitter], which depending on [isAsync],
       * delivers events synchronously or asynchronously.
       */function EventEmitter$1(){var isAsync=arguments.length<=0||arguments[0]===undefined?false:arguments[0];_classCallCheck(this,EventEmitter$1);var _this64=_possibleConstructorReturn(this,Object.getPrototypeOf(EventEmitter$1).call(this));_this64.__isAsync=isAsync;return _this64;}_createClass(EventEmitter$1,[{key:'emit',value:function emit(value){_get(Object.getPrototypeOf(EventEmitter$1.prototype),'next',this).call(this,value);}/**
       * @deprecated - use .emit(value) instead
       */},{key:'next',value:function next(value){_get(Object.getPrototypeOf(EventEmitter$1.prototype),'next',this).call(this,value);}},{key:'subscribe',value:function subscribe(generatorOrNext,error,complete){var schedulerFn=void 0;var errorFn=function errorFn(err){return null;};var completeFn=function completeFn(){return null;};if(generatorOrNext&&(typeof generatorOrNext==='undefined'?'undefined':_typeof(generatorOrNext))==='object'){schedulerFn=this.__isAsync?function(value/** TODO #9100 */){setTimeout(function(){return generatorOrNext.next(value);});}:function(value/** TODO #9100 */){generatorOrNext.next(value);};if(generatorOrNext.error){errorFn=this.__isAsync?function(err){setTimeout(function(){return generatorOrNext.error(err);});}:function(err){generatorOrNext.error(err);};}if(generatorOrNext.complete){completeFn=this.__isAsync?function(){setTimeout(function(){return generatorOrNext.complete();});}:function(){generatorOrNext.complete();};}}else{schedulerFn=this.__isAsync?function(value/** TODO #9100 */){setTimeout(function(){return generatorOrNext(value);});}:function(value/** TODO #9100 */){generatorOrNext(value);};if(error){errorFn=this.__isAsync?function(err){setTimeout(function(){return error(err);});}:function(err){error(err);};}if(complete){completeFn=this.__isAsync?function(){setTimeout(function(){return complete();});}:function(){complete();};}}return _get(Object.getPrototypeOf(EventEmitter$1.prototype),'subscribe',this).call(this,schedulerFn,errorFn,completeFn);}}]);return EventEmitter$1;}(Subject);var Map$2=global$2.Map;var Set$2=global$2.Set;// Safari and Internet Explorer do not support the iterable parameter to the
// Map constructor.  We work around that by manually adding the items.
var createMapFromPairs$1=function(){try{if(new Map$2([[1,2]]).size===1){return function createMapFromPairs(pairs){return new Map$2(pairs);};}}catch(e){}return function createMapAndPopulateFromPairs(pairs){var map=new Map$2();for(var i=0;i<pairs.length;i++){var pair=pairs[i];map.set(pair[0],pair[1]);}return map;};}();var createMapFromMap$1=function(){try{if(new Map$2(new Map$2())){return function createMapFromMap(m){return new Map$2(m);};}}catch(e){}return function createMapAndPopulateFromMap(m){var map=new Map$2();m.forEach(function(v,k){map.set(k,v);});return map;};}();var _clearValues$1=function(){if(new Map$2().keys().next){return function _clearValues(m){var keyIterator=m.keys();var k;while(!(k=keyIterator.next()).done){m.set(k.value,null);}};}else{return function _clearValuesWithForeEach(m){m.forEach(function(v,k){m.set(k,null);});};}}();// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
var _arrayFromMap$1=function(){try{if(new Map$2().values().next){return function createArrayFromMap(m,getValues){return getValues?Array.from(m.values()):Array.from(m.keys());};}}catch(e){}return function createArrayFromMapWithForeach(m,getValues){var res=ListWrapper$1.createFixedSize(m.size),i=0;m.forEach(function(v,k){res[i]=getValues?v:k;i++;});return res;};}();var MapWrapper$1=function(){function MapWrapper$1(){_classCallCheck(this,MapWrapper$1);}_createClass(MapWrapper$1,null,[{key:'clone',value:function clone(m){return createMapFromMap$1(m);}},{key:'createFromStringMap',value:function createFromStringMap(stringMap){var result=new Map$2();for(var prop in stringMap){result.set(prop,stringMap[prop]);}return result;}},{key:'toStringMap',value:function toStringMap(m){var r={};m.forEach(function(v,k){return r[k]=v;});return r;}},{key:'createFromPairs',value:function createFromPairs(pairs){return createMapFromPairs$1(pairs);}},{key:'clearValues',value:function clearValues(m){_clearValues$1(m);}},{key:'iterable',value:function iterable(m){return m;}},{key:'keys',value:function keys(m){return _arrayFromMap$1(m,false);}},{key:'values',value:function values(m){return _arrayFromMap$1(m,true);}}]);return MapWrapper$1;}();/**
   * Wraps Javascript Objects
   */var StringMapWrapper$1=function(){function StringMapWrapper$1(){_classCallCheck(this,StringMapWrapper$1);}_createClass(StringMapWrapper$1,null,[{key:'create',value:function create(){// Note: We are not using Object.create(null) here due to
// performance!
// http://jsperf.com/ng2-object-create-null
return{};}},{key:'contains',value:function contains(map,key){return map.hasOwnProperty(key);}},{key:'get',value:function get(map,key){return map.hasOwnProperty(key)?map[key]:undefined;}},{key:'set',value:function set(map,key,value){map[key]=value;}},{key:'keys',value:function keys(map){return Object.keys(map);}},{key:'values',value:function values(map){return Object.keys(map).reduce(function(r,a){r.push(map[a]);return r;},[]);}},{key:'isEmpty',value:function isEmpty(map){for(var prop in map){return false;}return true;}},{key:'delete',value:function _delete(map,key){delete map[key];}},{key:'forEach',value:function forEach(map,callback){for(var prop in map){if(map.hasOwnProperty(prop)){callback(map[prop],prop);}}}},{key:'merge',value:function merge(m1,m2){var m={};for(var attr in m1){if(m1.hasOwnProperty(attr)){m[attr]=m1[attr];}}for(var attr in m2){if(m2.hasOwnProperty(attr)){m[attr]=m2[attr];}}return m;}},{key:'equals',value:function equals(m1,m2){var k1=Object.keys(m1);var k2=Object.keys(m2);if(k1.length!=k2.length){return false;}var key;for(var i=0;i<k1.length;i++){key=k1[i];if(m1[key]!==m2[key]){return false;}}return true;}}]);return StringMapWrapper$1;}();var ListWrapper$1=function(){function ListWrapper$1(){_classCallCheck(this,ListWrapper$1);}_createClass(ListWrapper$1,null,[{key:'createFixedSize',// JS has no way to express a statically fixed size list, but dart does so we
// keep both methods.
value:function createFixedSize(size){return new Array(size);}},{key:'createGrowableSize',value:function createGrowableSize(size){return new Array(size);}},{key:'clone',value:function clone(array){return array.slice(0);}},{key:'forEachWithIndex',value:function forEachWithIndex(array,fn){for(var i=0;i<array.length;i++){fn(array[i],i);}}},{key:'first',value:function first(array){if(!array)return null;return array[0];}},{key:'last',value:function last(array){if(!array||array.length==0)return null;return array[array.length-1];}},{key:'indexOf',value:function indexOf(array,value){var startIndex=arguments.length<=2||arguments[2]===undefined?0:arguments[2];return array.indexOf(value,startIndex);}},{key:'contains',value:function contains(list,el){return list.indexOf(el)!==-1;}},{key:'reversed',value:function reversed(array){var a=ListWrapper$1.clone(array);return a.reverse();}},{key:'concat',value:function concat(a,b){return a.concat(b);}},{key:'insert',value:function insert(list,index,value){list.splice(index,0,value);}},{key:'removeAt',value:function removeAt(list,index){var res=list[index];list.splice(index,1);return res;}},{key:'removeAll',value:function removeAll(list,items){for(var i=0;i<items.length;++i){var index=list.indexOf(items[i]);list.splice(index,1);}}},{key:'remove',value:function remove(list,el){var index=list.indexOf(el);if(index>-1){list.splice(index,1);return true;}return false;}},{key:'clear',value:function clear(list){list.length=0;}},{key:'isEmpty',value:function isEmpty(list){return list.length==0;}},{key:'fill',value:function fill(list,value){var start=arguments.length<=2||arguments[2]===undefined?0:arguments[2];var end=arguments.length<=3||arguments[3]===undefined?null:arguments[3];list.fill(value,start,end===null?list.length:end);}},{key:'equals',value:function equals(a,b){if(a.length!=b.length)return false;for(var i=0;i<a.length;++i){if(a[i]!==b[i])return false;}return true;}},{key:'slice',value:function slice(l){var from=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var to=arguments.length<=2||arguments[2]===undefined?null:arguments[2];return l.slice(from,to===null?undefined:to);}},{key:'splice',value:function splice(l,from,length){return l.splice(from,length);}},{key:'sort',value:function sort(l,compareFn){if(isPresent$1(compareFn)){l.sort(compareFn);}else{l.sort();}}},{key:'toString',value:function toString(l){return l.toString();}},{key:'toJSON',value:function toJSON(l){return JSON.stringify(l);}},{key:'maximum',value:function maximum(list,predicate){if(list.length==0){return null;}var solution=null;var maxValue=-Infinity;for(var index=0;index<list.length;index++){var candidate=list[index];if(isBlank$1(candidate)){continue;}var candidateValue=predicate(candidate);if(candidateValue>maxValue){solution=candidate;maxValue=candidateValue;}}return solution;}},{key:'flatten',value:function flatten(list){var target=[];_flattenArray$1(list,target);return target;}},{key:'addAll',value:function addAll(list,source){for(var i=0;i<source.length;i++){list.push(source[i]);}}}]);return ListWrapper$1;}();function _flattenArray$1(source,target){if(isPresent$1(source)){for(var i=0;i<source.length;i++){var item=source[i];if(isArray$2(item)){_flattenArray$1(item,target);}else{target.push(item);}}}return target;}// Safari and Internet Explorer do not support the iterable parameter to the
// Set constructor.  We work around that by manually adding the items.
var createSetFromList$1=function(){var test=new Set$2([1,2,3]);if(test.size===3){return function createSetFromList(lst){return new Set$2(lst);};}else{return function createSetAndPopulateFromList(lst){var res=new Set$2(lst);if(res.size!==lst.length){for(var i=0;i<lst.length;i++){res.add(lst[i]);}}return res;};}}();/**
   * @stable
   */var BaseException$1=function(_Error6){_inherits(BaseException$1,_Error6);function BaseException$1(){var message=arguments.length<=0||arguments[0]===undefined?'--':arguments[0];_classCallCheck(this,BaseException$1);var _this65=_possibleConstructorReturn(this,Object.getPrototypeOf(BaseException$1).call(this,message));_this65.message=message;_this65.stack=new Error(message).stack;return _this65;}_createClass(BaseException$1,[{key:'toString',value:function toString(){return this.message;}}]);return BaseException$1;}(Error);function unimplemented$1(){throw new BaseException$1('unimplemented');}var ObservableStrategy=function(){function ObservableStrategy(){_classCallCheck(this,ObservableStrategy);}_createClass(ObservableStrategy,[{key:'createSubscription',value:function createSubscription(async,updateLatestValue){return ObservableWrapper$1.subscribe(async,updateLatestValue,function(e){throw e;});}},{key:'dispose',value:function dispose(subscription){ObservableWrapper$1.dispose(subscription);}},{key:'onDestroy',value:function onDestroy(subscription){ObservableWrapper$1.dispose(subscription);}}]);return ObservableStrategy;}();var PromiseStrategy=function(){function PromiseStrategy(){_classCallCheck(this,PromiseStrategy);}_createClass(PromiseStrategy,[{key:'createSubscription',value:function createSubscription(async,updateLatestValue){return async.then(updateLatestValue,function(e){throw e;});}},{key:'dispose',value:function dispose(subscription){}},{key:'onDestroy',value:function onDestroy(subscription){}}]);return PromiseStrategy;}();var _promiseStrategy=new PromiseStrategy();var _observableStrategy=new ObservableStrategy();var PATTERN_ALIASES={yMMMdjms:datePartGetterFactory(combine([digitCondition('year',1),nameCondition('month',3),digitCondition('day',1),digitCondition('hour',1),digitCondition('minute',1),digitCondition('second',1)])),yMdjm:datePartGetterFactory(combine([digitCondition('year',1),digitCondition('month',1),digitCondition('day',1),digitCondition('hour',1),digitCondition('minute',1)])),yMMMMEEEEd:datePartGetterFactory(combine([digitCondition('year',1),nameCondition('month',4),nameCondition('weekday',4),digitCondition('day',1)])),yMMMMd:datePartGetterFactory(combine([digitCondition('year',1),nameCondition('month',4),digitCondition('day',1)])),yMMMd:datePartGetterFactory(combine([digitCondition('year',1),nameCondition('month',3),digitCondition('day',1)])),yMd:datePartGetterFactory(combine([digitCondition('year',1),digitCondition('month',1),digitCondition('day',1)])),jms:datePartGetterFactory(combine([digitCondition('hour',1),digitCondition('second',1),digitCondition('minute',1)])),jm:datePartGetterFactory(combine([digitCondition('hour',1),digitCondition('minute',1)]))};var DATE_FORMATS={yyyy:datePartGetterFactory(digitCondition('year',4)),yy:datePartGetterFactory(digitCondition('year',2)),y:datePartGetterFactory(digitCondition('year',1)),MMMM:datePartGetterFactory(nameCondition('month',4)),MMM:datePartGetterFactory(nameCondition('month',3)),MM:datePartGetterFactory(digitCondition('month',2)),M:datePartGetterFactory(digitCondition('month',1)),LLLL:datePartGetterFactory(nameCondition('month',4)),dd:datePartGetterFactory(digitCondition('day',2)),d:datePartGetterFactory(digitCondition('day',1)),HH:hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour',2),false))),H:hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour',1),false))),hh:hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour',2),true))),h:hourExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour',1),true))),jj:datePartGetterFactory(digitCondition('hour',2)),j:datePartGetterFactory(digitCondition('hour',1)),mm:digitModifier(datePartGetterFactory(digitCondition('minute',2))),m:datePartGetterFactory(digitCondition('minute',1)),ss:digitModifier(datePartGetterFactory(digitCondition('second',2))),s:datePartGetterFactory(digitCondition('second',1)),// while ISO 8601 requires fractions to be prefixed with `.` or `,`
// we can be just safely rely on using `sss` since we currently don't support single or two digit
// fractions
sss:datePartGetterFactory(digitCondition('second',3)),EEEE:datePartGetterFactory(nameCondition('weekday',4)),EEE:datePartGetterFactory(nameCondition('weekday',3)),EE:datePartGetterFactory(nameCondition('weekday',2)),E:datePartGetterFactory(nameCondition('weekday',1)),a:hourClockExtracter(datePartGetterFactory(hour12Modify(digitCondition('hour',1),true))),Z:datePartGetterFactory({timeZoneName:'long'}),z:datePartGetterFactory({timeZoneName:'short'}),ww:datePartGetterFactory({}),// first Thursday of the year. not support ?
w:datePartGetterFactory({}),// of the year not support ?
G:datePartGetterFactory(nameCondition('era',1)),GG:datePartGetterFactory(nameCondition('era',2)),GGG:datePartGetterFactory(nameCondition('era',3)),GGGG:datePartGetterFactory(nameCondition('era',4))};function digitModifier(inner){return function(date,locale){var result=inner(date,locale);return result.length==1?'0'+result:result;};}function hourClockExtracter(inner){return function(date,locale){var result=inner(date,locale);return result.split(' ')[1];};}function hourExtracter(inner){return function(date,locale){var result=inner(date,locale);return result.split(' ')[0];};}function hour12Modify(options,value){options.hour12=value;return options;}function digitCondition(prop,len){var result={};result[prop]=len==2?'2-digit':'numeric';return result;}function nameCondition(prop,len){var result={};result[prop]=len<4?'short':'long';return result;}function combine(options){var result={};options.forEach(function(option){Object.assign(result,option);});return result;}function datePartGetterFactory(ret){return function(date,locale){return new Intl.DateTimeFormat(locale,ret).format(date);};}/**
   * Used to provide a {@link ControlValueAccessor} for form controls.
   *
   * See {@link DefaultValueAccessor} for how to implement one.
   * @experimental
   */var NG_VALUE_ACCESSOR=/*@ts2dart_const*/new OpaqueToken('NgValueAccessor');/**
   * Base class for control directives.
   *
   * Only used internally in the forms module.
   *
   * @experimental
   */var AbstractControlDirective=function(){function AbstractControlDirective(){_classCallCheck(this,AbstractControlDirective);}_createClass(AbstractControlDirective,[{key:'control',get:function get(){return unimplemented$1();}},{key:'value',get:function get(){return isPresent$1(this.control)?this.control.value:null;}},{key:'valid',get:function get(){return isPresent$1(this.control)?this.control.valid:null;}},{key:'errors',get:function get(){return isPresent$1(this.control)?this.control.errors:null;}},{key:'pristine',get:function get(){return isPresent$1(this.control)?this.control.pristine:null;}},{key:'dirty',get:function get(){return isPresent$1(this.control)?this.control.dirty:null;}},{key:'touched',get:function get(){return isPresent$1(this.control)?this.control.touched:null;}},{key:'untouched',get:function get(){return isPresent$1(this.control)?this.control.untouched:null;}},{key:'path',get:function get(){return null;}}]);return AbstractControlDirective;}();/**
   * A base class that all control directive extend.
   * It binds a {@link Control} object to a DOM element.
   *
   * Used internally by Angular forms.
   *
   * @experimental
   */var NgControl=function(_AbstractControlDirec){_inherits(NgControl,_AbstractControlDirec);function NgControl(){var _Object$getPrototypeO;_classCallCheck(this,NgControl);for(var _len5=arguments.length,args=Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5];}var _this66=_possibleConstructorReturn(this,(_Object$getPrototypeO=Object.getPrototypeOf(NgControl)).call.apply(_Object$getPrototypeO,[this].concat(args)));_this66.name=null;_this66.valueAccessor=null;return _this66;}_createClass(NgControl,[{key:'validator',get:function get(){return unimplemented$1();}},{key:'asyncValidator',get:function get(){return unimplemented$1();}}]);return NgControl;}(AbstractControlDirective);var RADIO_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(function(){return RadioControlValueAccessor;}),multi:true};var RadioControlRegistry=function(){function RadioControlRegistry(){_classCallCheck(this,RadioControlRegistry);this._accessors=[];}_createClass(RadioControlRegistry,[{key:'add',value:function add(control,accessor){this._accessors.push([control,accessor]);}},{key:'remove',value:function remove(accessor){var indexToRemove=-1;for(var i=0;i<this._accessors.length;++i){if(this._accessors[i][1]===accessor){indexToRemove=i;}}ListWrapper$1.removeAt(this._accessors,indexToRemove);}},{key:'select',value:function select(accessor){var _this67=this;this._accessors.forEach(function(c){if(_this67._isSameGroup(c,accessor)&&c[1]!==accessor){c[1].fireUncheck();}});}},{key:'_isSameGroup',value:function _isSameGroup(controlPair,accessor){return controlPair[0].control.root===accessor._control.control.root&&controlPair[1].name===accessor.name;}}]);return RadioControlRegistry;}();/** @nocollapse */RadioControlRegistry.decorators=[{type:Injectable}];/**
   * The value provided by the forms API for radio buttons.
   *
   * @experimental
   */var RadioButtonState=function RadioButtonState(checked,value){_classCallCheck(this,RadioButtonState);this.checked=checked;this.value=value;};var RadioControlValueAccessor=function(){function RadioControlValueAccessor(_renderer,_elementRef,_registry,_injector){_classCallCheck(this,RadioControlValueAccessor);this._renderer=_renderer;this._elementRef=_elementRef;this._registry=_registry;this._injector=_injector;this.onChange=function(){};this.onTouched=function(){};}_createClass(RadioControlValueAccessor,[{key:'ngOnInit',value:function ngOnInit(){this._control=this._injector.get(NgControl);this._registry.add(this._control,this);}},{key:'ngOnDestroy',value:function ngOnDestroy(){this._registry.remove(this);}},{key:'writeValue',value:function writeValue(value){this._state=value;if(isPresent$1(value)&&value.checked){this._renderer.setElementProperty(this._elementRef.nativeElement,'checked',true);}}},{key:'registerOnChange',value:function registerOnChange(fn){var _this68=this;this._fn=fn;this.onChange=function(){fn(new RadioButtonState(true,_this68._state.value));_this68._registry.select(_this68);};}},{key:'fireUncheck',value:function fireUncheck(){this._fn(new RadioButtonState(false,this._state.value));}},{key:'registerOnTouched',value:function registerOnTouched(fn){this.onTouched=fn;}}]);return RadioControlValueAccessor;}();/** @nocollapse */RadioControlValueAccessor.decorators=[{type:Directive,args:[{selector:'input[type=radio][ngControl],input[type=radio][ngFormControl],input[type=radio][ngModel]',host:{'(change)':'onChange()','(blur)':'onTouched()'},providers:[RADIO_VALUE_ACCESSOR]}]}];/** @nocollapse */RadioControlValueAccessor.ctorParameters=[{type:Renderer},{type:ElementRef},{type:RadioControlRegistry},{type:Injector}];/** @nocollapse */RadioControlValueAccessor.propDecorators={'name':[{type:Input}]};/**
   * Indicates that a Control is valid, i.e. that no errors exist in the input value.
   */var VALID='VALID';/**
   * Indicates that a Control is invalid, i.e. that an error exists in the input value.
   */var INVALID='INVALID';/**
   * Indicates that a Control is pending, i.e. that async validation is occurring and
   * errors are not yet available for the input value.
   */var PENDING='PENDING';function _find(control,path){if(isBlank$1(path))return null;if(!(path instanceof Array)){path=path.split('/');}if(path instanceof Array&&ListWrapper$1.isEmpty(path))return null;return path.reduce(function(v,name){if(v instanceof ControlGroup){return isPresent$1(v.controls[name])?v.controls[name]:null;}else if(v instanceof ControlArray){var index=name;return isPresent$1(v.at(index))?v.at(index):null;}else{return null;}},control);}function toObservable(r){return isPromise$1(r)?ObservableWrapper$1.fromPromise(r):r;}/**
   * @experimental
   */var AbstractControl=function(){function AbstractControl(validator,asyncValidator){_classCallCheck(this,AbstractControl);this.validator=validator;this.asyncValidator=asyncValidator;this._pristine=true;this._touched=false;}_createClass(AbstractControl,[{key:'markAsTouched',value:function markAsTouched(){this._touched=true;}},{key:'markAsDirty',value:function markAsDirty(){var _ref8=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var onlySelf=_ref8.onlySelf;onlySelf=normalizeBool$1(onlySelf);this._pristine=false;if(isPresent$1(this._parent)&&!onlySelf){this._parent.markAsDirty({onlySelf:onlySelf});}}},{key:'markAsPending',value:function markAsPending(){var _ref9=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var onlySelf=_ref9.onlySelf;onlySelf=normalizeBool$1(onlySelf);this._status=PENDING;if(isPresent$1(this._parent)&&!onlySelf){this._parent.markAsPending({onlySelf:onlySelf});}}},{key:'setParent',value:function setParent(parent){this._parent=parent;}},{key:'updateValueAndValidity',value:function updateValueAndValidity(){var _ref10=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var onlySelf=_ref10.onlySelf;var emitEvent=_ref10.emitEvent;onlySelf=normalizeBool$1(onlySelf);emitEvent=isPresent$1(emitEvent)?emitEvent:true;this._updateValue();this._errors=this._runValidator();this._status=this._calculateStatus();if(this._status==VALID||this._status==PENDING){this._runAsyncValidator(emitEvent);}if(emitEvent){ObservableWrapper$1.callEmit(this._valueChanges,this._value);ObservableWrapper$1.callEmit(this._statusChanges,this._status);}if(isPresent$1(this._parent)&&!onlySelf){this._parent.updateValueAndValidity({onlySelf:onlySelf,emitEvent:emitEvent});}}},{key:'_runValidator',value:function _runValidator(){return isPresent$1(this.validator)?this.validator(this):null;}},{key:'_runAsyncValidator',value:function _runAsyncValidator(emitEvent){var _this69=this;if(isPresent$1(this.asyncValidator)){this._status=PENDING;this._cancelExistingSubscription();var obs=toObservable(this.asyncValidator(this));this._asyncValidationSubscription=ObservableWrapper$1.subscribe(obs,function(res){return _this69.setErrors(res,{emitEvent:emitEvent});});}}},{key:'_cancelExistingSubscription',value:function _cancelExistingSubscription(){if(isPresent$1(this._asyncValidationSubscription)){ObservableWrapper$1.dispose(this._asyncValidationSubscription);}}/**
       * Sets errors on a control.
       *
       * This is used when validations are run not automatically, but manually by the user.
       *
       * Calling `setErrors` will also update the validity of the parent control.
       *
       * ## Usage
       *
       * ```
       * var login = new Control("someLogin");
       * login.setErrors({
       *   "notUnique": true
       * });
       *
       * expect(login.valid).toEqual(false);
       * expect(login.errors).toEqual({"notUnique": true});
       *
       * login.updateValue("someOtherLogin");
       *
       * expect(login.valid).toEqual(true);
       * ```
       */},{key:'setErrors',value:function setErrors(errors){var _ref11=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var emitEvent=_ref11.emitEvent;emitEvent=isPresent$1(emitEvent)?emitEvent:true;this._errors=errors;this._status=this._calculateStatus();if(emitEvent){ObservableWrapper$1.callEmit(this._statusChanges,this._status);}if(isPresent$1(this._parent)){this._parent._updateControlsErrors();}}},{key:'find',value:function find(path){return _find(this,path);}},{key:'getError',value:function getError(errorCode){var path=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var control=isPresent$1(path)&&!ListWrapper$1.isEmpty(path)?this.find(path):this;if(isPresent$1(control)&&isPresent$1(control._errors)){return StringMapWrapper$1.get(control._errors,errorCode);}else{return null;}}},{key:'hasError',value:function hasError(errorCode){var path=arguments.length<=1||arguments[1]===undefined?null:arguments[1];return isPresent$1(this.getError(errorCode,path));}},{key:'_updateControlsErrors',/** @internal */value:function _updateControlsErrors(){this._status=this._calculateStatus();if(isPresent$1(this._parent)){this._parent._updateControlsErrors();}}/** @internal */},{key:'_initObservables',value:function _initObservables(){this._valueChanges=new EventEmitter$1();this._statusChanges=new EventEmitter$1();}},{key:'_calculateStatus',value:function _calculateStatus(){if(isPresent$1(this._errors))return INVALID;if(this._anyControlsHaveStatus(PENDING))return PENDING;if(this._anyControlsHaveStatus(INVALID))return INVALID;return VALID;}},{key:'value',get:function get(){return this._value;}},{key:'status',get:function get(){return this._status;}},{key:'valid',get:function get(){return this._status===VALID;}/**
       * Returns the errors of this control.
       */},{key:'errors',get:function get(){return this._errors;}},{key:'pristine',get:function get(){return this._pristine;}},{key:'dirty',get:function get(){return!this.pristine;}},{key:'touched',get:function get(){return this._touched;}},{key:'untouched',get:function get(){return!this._touched;}},{key:'valueChanges',get:function get(){return this._valueChanges;}},{key:'statusChanges',get:function get(){return this._statusChanges;}},{key:'pending',get:function get(){return this._status==PENDING;}},{key:'root',get:function get(){var x=this;while(isPresent$1(x._parent)){x=x._parent;}return x;}}]);return AbstractControl;}();/**
   * Defines a part of a form that cannot be divided into other controls. `Control`s have values and
   * validation state, which is determined by an optional validation function.
   *
   * `Control` is one of the three fundamental building blocks used to define forms in Angular, along
   * with {@link ControlGroup} and {@link ControlArray}.
   *
   * ## Usage
   *
   * By default, a `Control` is created for every `<input>` or other form component.
   * With {@link NgFormControl} or {@link NgFormModel} an existing {@link Control} can be
   * bound to a DOM element instead. This `Control` can be configured with a custom
   * validation function.
   *
   * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
   *
   * @experimental
   */var Control=function(_AbstractControl){_inherits(Control,_AbstractControl);function Control(){var value=arguments.length<=0||arguments[0]===undefined?null:arguments[0];var validator=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var asyncValidator=arguments.length<=2||arguments[2]===undefined?null:arguments[2];_classCallCheck(this,Control);var _this70=_possibleConstructorReturn(this,Object.getPrototypeOf(Control).call(this,validator,asyncValidator));_this70._value=value;_this70.updateValueAndValidity({onlySelf:true,emitEvent:false});_this70._initObservables();return _this70;}/**
       * Set the value of the control to `value`.
       *
       * If `onlySelf` is `true`, this change will only affect the validation of this `Control`
       * and not its parent component. If `emitEvent` is `true`, this change will cause a
       * `valueChanges` event on the `Control` to be emitted. Both of these options default to
       * `false`.
       *
       * If `emitModelToViewChange` is `true`, the view will be notified about the new value
       * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
       * specified.
       */_createClass(Control,[{key:'updateValue',value:function updateValue(value){var _ref12=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var onlySelf=_ref12.onlySelf;var emitEvent=_ref12.emitEvent;var emitModelToViewChange=_ref12.emitModelToViewChange;emitModelToViewChange=isPresent$1(emitModelToViewChange)?emitModelToViewChange:true;this._value=value;if(isPresent$1(this._onChange)&&emitModelToViewChange)this._onChange(this._value);this.updateValueAndValidity({onlySelf:onlySelf,emitEvent:emitEvent});}/**
       * @internal
       */},{key:'_updateValue',value:function _updateValue(){}/**
       * @internal
       */},{key:'_anyControlsHaveStatus',value:function _anyControlsHaveStatus(status){return false;}/**
       * Register a listener for change events.
       */},{key:'registerOnChange',value:function registerOnChange(fn){this._onChange=fn;}}]);return Control;}(AbstractControl);/**
   * Defines a part of a form, of fixed length, that can contain other controls.
   *
   * A `ControlGroup` aggregates the values of each {@link Control} in the group.
   * The status of a `ControlGroup` depends on the status of its children.
   * If one of the controls in a group is invalid, the entire group is invalid.
   * Similarly, if a control changes its value, the entire group changes as well.
   *
   * `ControlGroup` is one of the three fundamental building blocks used to define forms in Angular,
   * along with {@link Control} and {@link ControlArray}. {@link ControlArray} can also contain other
   * controls, but is of variable length.
   *
   * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
   *
   * @experimental
   */var ControlGroup=function(_AbstractControl2){_inherits(ControlGroup,_AbstractControl2);function ControlGroup(controls){var optionals=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var validator=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var asyncValidator=arguments.length<=3||arguments[3]===undefined?null:arguments[3];_classCallCheck(this,ControlGroup);var _this71=_possibleConstructorReturn(this,Object.getPrototypeOf(ControlGroup).call(this,validator,asyncValidator));_this71.controls=controls;_this71._optionals=isPresent$1(optionals)?optionals:{};_this71._initObservables();_this71._setParentForControls();_this71.updateValueAndValidity({onlySelf:true,emitEvent:false});return _this71;}/**
       * Register a control with the group's list of controls.
       */_createClass(ControlGroup,[{key:'registerControl',value:function registerControl(name,control){this.controls[name]=control;control.setParent(this);}/**
       * Add a control to this group.
       */},{key:'addControl',value:function addControl(name,control){this.registerControl(name,control);this.updateValueAndValidity();}/**
       * Remove a control from this group.
       */},{key:'removeControl',value:function removeControl(name){StringMapWrapper$1.delete(this.controls,name);this.updateValueAndValidity();}/**
       * Mark the named control as non-optional.
       */},{key:'include',value:function include(controlName){StringMapWrapper$1.set(this._optionals,controlName,true);this.updateValueAndValidity();}/**
       * Mark the named control as optional.
       */},{key:'exclude',value:function exclude(controlName){StringMapWrapper$1.set(this._optionals,controlName,false);this.updateValueAndValidity();}/**
       * Check whether there is a control with the given name in the group.
       */},{key:'contains',value:function contains(controlName){var c=StringMapWrapper$1.contains(this.controls,controlName);return c&&this._included(controlName);}/** @internal */},{key:'_setParentForControls',value:function _setParentForControls(){var _this72=this;StringMapWrapper$1.forEach(this.controls,function(control,name){control.setParent(_this72);});}/** @internal */},{key:'_updateValue',value:function _updateValue(){this._value=this._reduceValue();}/** @internal */},{key:'_anyControlsHaveStatus',value:function _anyControlsHaveStatus(status){var _this73=this;var res=false;StringMapWrapper$1.forEach(this.controls,function(control,name){res=res||_this73.contains(name)&&control.status==status;});return res;}/** @internal */},{key:'_reduceValue',value:function _reduceValue(){return this._reduceChildren({},function(acc,control,name){acc[name]=control.value;return acc;});}/** @internal */},{key:'_reduceChildren',value:function _reduceChildren(initValue,fn){var _this74=this;var res=initValue;StringMapWrapper$1.forEach(this.controls,function(control,name){if(_this74._included(name)){res=fn(res,control,name);}});return res;}/** @internal */},{key:'_included',value:function _included(controlName){var isOptional=StringMapWrapper$1.contains(this._optionals,controlName);return!isOptional||StringMapWrapper$1.get(this._optionals,controlName);}}]);return ControlGroup;}(AbstractControl);/**
   * Defines a part of a form, of variable length, that can contain other controls.
   *
   * A `ControlArray` aggregates the values of each {@link Control} in the group.
   * The status of a `ControlArray` depends on the status of its children.
   * If one of the controls in a group is invalid, the entire array is invalid.
   * Similarly, if a control changes its value, the entire array changes as well.
   *
   * `ControlArray` is one of the three fundamental building blocks used to define forms in Angular,
   * along with {@link Control} and {@link ControlGroup}. {@link ControlGroup} can also contain
   * other controls, but is of fixed length.
   *
   * ## Adding or removing controls
   *
   * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
   * in `ControlArray` itself. These methods ensure the controls are properly tracked in the
   * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
   * the `ControlArray` directly, as that will result in strange and unexpected behavior such
   * as broken change detection.
   *
   * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
   *
   * @experimental
   */var ControlArray=function(_AbstractControl3){_inherits(ControlArray,_AbstractControl3);function ControlArray(controls){var validator=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var asyncValidator=arguments.length<=2||arguments[2]===undefined?null:arguments[2];_classCallCheck(this,ControlArray);var _this75=_possibleConstructorReturn(this,Object.getPrototypeOf(ControlArray).call(this,validator,asyncValidator));_this75.controls=controls;_this75._initObservables();_this75._setParentForControls();_this75.updateValueAndValidity({onlySelf:true,emitEvent:false});return _this75;}/**
       * Get the {@link AbstractControl} at the given `index` in the array.
       */_createClass(ControlArray,[{key:'at',value:function at(index){return this.controls[index];}/**
       * Insert a new {@link AbstractControl} at the end of the array.
       */},{key:'push',value:function push(control){this.controls.push(control);control.setParent(this);this.updateValueAndValidity();}/**
       * Insert a new {@link AbstractControl} at the given `index` in the array.
       */},{key:'insert',value:function insert(index,control){ListWrapper$1.insert(this.controls,index,control);control.setParent(this);this.updateValueAndValidity();}/**
       * Remove the control at the given `index` in the array.
       */},{key:'removeAt',value:function removeAt(index){ListWrapper$1.removeAt(this.controls,index);this.updateValueAndValidity();}/**
       * Length of the control array.
       */},{key:'_updateValue',/** @internal */value:function _updateValue(){this._value=this.controls.map(function(control){return control.value;});}/** @internal */},{key:'_anyControlsHaveStatus',value:function _anyControlsHaveStatus(status){return this.controls.some(function(c){return c.status==status;});}/** @internal */},{key:'_setParentForControls',value:function _setParentForControls(){var _this76=this;this.controls.forEach(function(control){control.setParent(_this76);});}},{key:'length',get:function get(){return this.controls.length;}}]);return ControlArray;}(AbstractControl);var FormBuilder=function(){function FormBuilder(){_classCallCheck(this,FormBuilder);}_createClass(FormBuilder,[{key:'group',/**
       * Construct a new {@link ControlGroup} with the given map of configuration.
       * Valid keys for the `extra` parameter map are `optionals` and `validator`.
       *
       * See the {@link ControlGroup} constructor for more details.
       */value:function group(controlsConfig){var extra=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var controls=this._reduceControls(controlsConfig);var optionals=isPresent$1(extra)?StringMapWrapper$1.get(extra,'optionals'):null;var validator=isPresent$1(extra)?StringMapWrapper$1.get(extra,'validator'):null;var asyncValidator=isPresent$1(extra)?StringMapWrapper$1.get(extra,'asyncValidator'):null;return new ControlGroup(controls,optionals,validator,asyncValidator);}/**
       * Construct a new {@link Control} with the given `value`,`validator`, and `asyncValidator`.
       */},{key:'control',value:function control(value){var validator=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var asyncValidator=arguments.length<=2||arguments[2]===undefined?null:arguments[2];return new Control(value,validator,asyncValidator);}/**
       * Construct an array of {@link Control}s from the given `controlsConfig` array of
       * configuration, with the given optional `validator` and `asyncValidator`.
       */},{key:'array',value:function array(controlsConfig){var _this77=this;var validator=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var asyncValidator=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var controls=controlsConfig.map(function(c){return _this77._createControl(c);});return new ControlArray(controls,validator,asyncValidator);}/** @internal */},{key:'_reduceControls',value:function _reduceControls(controlsConfig){var _this78=this;var controls={};StringMapWrapper$1.forEach(controlsConfig,function(controlConfig,controlName){controls[controlName]=_this78._createControl(controlConfig);});return controls;}/** @internal */},{key:'_createControl',value:function _createControl(controlConfig){if(controlConfig instanceof Control||controlConfig instanceof ControlGroup||controlConfig instanceof ControlArray){return controlConfig;}else if(isArray$2(controlConfig)){var value=controlConfig[0];var validator=controlConfig.length>1?controlConfig[1]:null;var asyncValidator=controlConfig.length>2?controlConfig[2]:null;return this.control(value,validator,asyncValidator);}else{return this.control(controlConfig);}}}]);return FormBuilder;}();/** @nocollapse */FormBuilder.decorators=[{type:Injectable}];var CHECKBOX_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(function(){return CheckboxControlValueAccessor;}),multi:true};var CheckboxControlValueAccessor=function(){function CheckboxControlValueAccessor(_renderer,_elementRef){_classCallCheck(this,CheckboxControlValueAccessor);this._renderer=_renderer;this._elementRef=_elementRef;this.onChange=function(_){};this.onTouched=function(){};}_createClass(CheckboxControlValueAccessor,[{key:'writeValue',value:function writeValue(value){this._renderer.setElementProperty(this._elementRef.nativeElement,'checked',value);}},{key:'registerOnChange',value:function registerOnChange(fn){this.onChange=fn;}},{key:'registerOnTouched',value:function registerOnTouched(fn){this.onTouched=fn;}}]);return CheckboxControlValueAccessor;}();/** @nocollapse */CheckboxControlValueAccessor.decorators=[{type:Directive,args:[{selector:'input[type=checkbox][ngControl],input[type=checkbox][ngFormControl],input[type=checkbox][ngModel]',host:{'(change)':'onChange($event.target.checked)','(blur)':'onTouched()'},providers:[CHECKBOX_VALUE_ACCESSOR]}]}];/** @nocollapse */CheckboxControlValueAccessor.ctorParameters=[{type:Renderer},{type:ElementRef}];var DEFAULT_VALUE_ACCESSOR=/* @ts2dart_Provider */{provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(function(){return DefaultValueAccessor;}),multi:true};var DefaultValueAccessor=function(){function DefaultValueAccessor(_renderer,_elementRef){_classCallCheck(this,DefaultValueAccessor);this._renderer=_renderer;this._elementRef=_elementRef;this.onChange=function(_){};this.onTouched=function(){};}_createClass(DefaultValueAccessor,[{key:'writeValue',value:function writeValue(value){var normalizedValue=isBlank$1(value)?'':value;this._renderer.setElementProperty(this._elementRef.nativeElement,'value',normalizedValue);}},{key:'registerOnChange',value:function registerOnChange(fn){this.onChange=fn;}},{key:'registerOnTouched',value:function registerOnTouched(fn){this.onTouched=fn;}}]);return DefaultValueAccessor;}();/** @nocollapse */DefaultValueAccessor.decorators=[{type:Directive,args:[{selector:'input:not([type=checkbox])[ngControl],textarea[ngControl],input:not([type=checkbox])[ngFormControl],textarea[ngFormControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',// TODO: vsavkin replace the above selector with the one below it once
// https://github.com/angular/angular/issues/3011 is implemented
// selector: '[ngControl],[ngModel],[ngFormControl]',
host:{'(input)':'onChange($event.target.value)','(blur)':'onTouched()'},providers:[DEFAULT_VALUE_ACCESSOR]}]}];/** @nocollapse */DefaultValueAccessor.ctorParameters=[{type:Renderer},{type:ElementRef}];/**
   * Providers for validators to be used for {@link Control}s in a form.
   *
   * Provide this using `multi: true` to add validators.
   *
   * ### Example
   *
   * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
   * @experimental
   */var NG_VALIDATORS=new OpaqueToken('NgValidators');/**
   * Providers for asynchronous validators to be used for {@link Control}s
   * in a form.
   *
   * Provide this using `multi: true` to add validators.
   *
   * See {@link NG_VALIDATORS} for more details.
   *
   * @experimental
   */var NG_ASYNC_VALIDATORS=/*@ts2dart_const*/new OpaqueToken('NgAsyncValidators');/**
   * Provides a set of validators used by form controls.
   *
   * A validator is a function that processes a {@link Control} or collection of
   * controls and returns a map of errors. A null map means that validation has passed.
   *
   * ### Example
   *
   * ```typescript
   * var loginControl = new Control("", Validators.required)
   * ```
   *
   * @experimental
   */var Validators=function(){function Validators(){_classCallCheck(this,Validators);}_createClass(Validators,null,[{key:'required',/**
       * Validator that requires controls to have a non-empty value.
       */value:function required(control){return isBlank$1(control.value)||isString$1(control.value)&&control.value==''?{'required':true}:null;}/**
       * Validator that requires controls to have a value of a minimum length.
       */},{key:'minLength',value:function minLength(_minLength){return function(control){if(isPresent$1(Validators.required(control)))return null;var v=control.value;return v.length<_minLength?{'minlength':{'requiredLength':_minLength,'actualLength':v.length}}:null;};}/**
       * Validator that requires controls to have a value of a maximum length.
       */},{key:'maxLength',value:function maxLength(_maxLength){return function(control){if(isPresent$1(Validators.required(control)))return null;var v=control.value;return v.length>_maxLength?{'maxlength':{'requiredLength':_maxLength,'actualLength':v.length}}:null;};}/**
       * Validator that requires a control to match a regex to its value.
       */},{key:'pattern',value:function pattern(_pattern){return function(control){if(isPresent$1(Validators.required(control)))return null;var regex=new RegExp('^'+_pattern+'$');var v=control.value;return regex.test(v)?null:{'pattern':{'requiredPattern':'^'+_pattern+'$','actualValue':v}};};}/**
       * No-op validator.
       */},{key:'nullValidator',value:function nullValidator(c){return null;}/**
       * Compose multiple validators into a single function that returns the union
       * of the individual error maps.
       */},{key:'compose',value:function compose(validators){if(isBlank$1(validators))return null;var presentValidators=validators.filter(isPresent$1);if(presentValidators.length==0)return null;return function(control){return _mergeErrors(_executeValidators(control,presentValidators));};}},{key:'composeAsync',value:function composeAsync(validators){if(isBlank$1(validators))return null;var presentValidators=validators.filter(isPresent$1);if(presentValidators.length==0)return null;return function(control){var promises=_executeAsyncValidators(control,presentValidators).map(_convertToPromise);return PromiseWrapper$1.all(promises).then(_mergeErrors);};}}]);return Validators;}();function _convertToPromise(obj){return isPromise$1(obj)?obj:ObservableWrapper$1.toPromise(obj);}function _executeValidators(control,validators){return validators.map(function(v){return v(control);});}function _executeAsyncValidators(control,validators){return validators.map(function(v){return v(control);});}function _mergeErrors(arrayOfErrors){var res=arrayOfErrors.reduce(function(res,errors){return isPresent$1(errors)?StringMapWrapper$1.merge(res,errors):res;},{});return StringMapWrapper$1.isEmpty(res)?null:res;}/**
   * A directive that contains multiple {@link NgControl}s.
   *
   * Only used by the forms module.
   *
   * @experimental
   */var ControlContainer=function(_AbstractControlDirec2){_inherits(ControlContainer,_AbstractControlDirec2);function ControlContainer(){_classCallCheck(this,ControlContainer);return _possibleConstructorReturn(this,Object.getPrototypeOf(ControlContainer).apply(this,arguments));}_createClass(ControlContainer,[{key:'formDirective',/**
       * Get the form to which this container belongs.
       */get:function get(){return null;}/**
       * Get the path to this container.
       */},{key:'path',get:function get(){return null;}}]);return ControlContainer;}(AbstractControlDirective);function normalizeValidator(validator){if(validator.validate!==undefined){return function(c){return validator.validate(c);};}else{return validator;}}function normalizeAsyncValidator(validator){if(validator.validate!==undefined){return function(c){return Promise.resolve(validator.validate(c));};}else{return validator;}}var NUMBER_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(function(){return NumberValueAccessor;}),multi:true};var NumberValueAccessor=function(){function NumberValueAccessor(_renderer,_elementRef){_classCallCheck(this,NumberValueAccessor);this._renderer=_renderer;this._elementRef=_elementRef;this.onChange=function(_){};this.onTouched=function(){};}_createClass(NumberValueAccessor,[{key:'writeValue',value:function writeValue(value){this._renderer.setElementProperty(this._elementRef.nativeElement,'value',value);}},{key:'registerOnChange',value:function registerOnChange(fn){this.onChange=function(value){fn(value==''?null:NumberWrapper$1.parseFloat(value));};}},{key:'registerOnTouched',value:function registerOnTouched(fn){this.onTouched=fn;}}]);return NumberValueAccessor;}();/** @nocollapse */NumberValueAccessor.decorators=[{type:Directive,args:[{selector:'input[type=number][ngControl],input[type=number][ngFormControl],input[type=number][ngModel]',host:{'(change)':'onChange($event.target.value)','(input)':'onChange($event.target.value)','(blur)':'onTouched()'},providers:[NUMBER_VALUE_ACCESSOR]}]}];/** @nocollapse */NumberValueAccessor.ctorParameters=[{type:Renderer},{type:ElementRef}];var SELECT_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(function(){return SelectControlValueAccessor;}),multi:true};function _buildValueString(id,value){if(isBlank$1(id))return''+value;if(!isPrimitive$1(value))value='Object';return StringWrapper$1.slice(id+': '+value,0,50);}function _extractId(valueString){return valueString.split(':')[0];}var SelectControlValueAccessor=function(){function SelectControlValueAccessor(_renderer,_elementRef){_classCallCheck(this,SelectControlValueAccessor);this._renderer=_renderer;this._elementRef=_elementRef;/** @internal */this._optionMap=new Map();/** @internal */this._idCounter=0;this.onChange=function(_){};this.onTouched=function(){};}_createClass(SelectControlValueAccessor,[{key:'writeValue',value:function writeValue(value){this.value=value;var valueString=_buildValueString(this._getOptionId(value),value);this._renderer.setElementProperty(this._elementRef.nativeElement,'value',valueString);}},{key:'registerOnChange',value:function registerOnChange(fn){var _this80=this;this.onChange=function(valueString){_this80.value=valueString;fn(_this80._getOptionValue(valueString));};}},{key:'registerOnTouched',value:function registerOnTouched(fn){this.onTouched=fn;}/** @internal */},{key:'_registerOption',value:function _registerOption(){return(this._idCounter++).toString();}/** @internal */},{key:'_getOptionId',value:function _getOptionId(value){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=MapWrapper$1.keys(this._optionMap)[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var id=_step.value;if(looseIdentical$1(this._optionMap.get(id),value))return id;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return null;}/** @internal */},{key:'_getOptionValue',value:function _getOptionValue(valueString){var value=this._optionMap.get(_extractId(valueString));return isPresent$1(value)?value:valueString;}}]);return SelectControlValueAccessor;}();/** @nocollapse */SelectControlValueAccessor.decorators=[{type:Directive,args:[{selector:'select:not([multiple])[ngControl],select:not([multiple])[ngFormControl],select:not([multiple])[ngModel]',host:{'(change)':'onChange($event.target.value)','(blur)':'onTouched()'},providers:[SELECT_VALUE_ACCESSOR]}]}];/** @nocollapse */SelectControlValueAccessor.ctorParameters=[{type:Renderer},{type:ElementRef}];function controlPath(name,parent){var p=ListWrapper$1.clone(parent.path);p.push(name);return p;}function setUpControl(control,dir){if(isBlank$1(control))_throwError(dir,'Cannot find control');if(isBlank$1(dir.valueAccessor))_throwError(dir,'No value accessor for');control.validator=Validators.compose([control.validator,dir.validator]);control.asyncValidator=Validators.composeAsync([control.asyncValidator,dir.asyncValidator]);dir.valueAccessor.writeValue(control.value);// view -> model
dir.valueAccessor.registerOnChange(function(newValue){dir.viewToModelUpdate(newValue);control.updateValue(newValue,{emitModelToViewChange:false});control.markAsDirty();});// model -> view
control.registerOnChange(function(newValue){return dir.valueAccessor.writeValue(newValue);});// touched
dir.valueAccessor.registerOnTouched(function(){return control.markAsTouched();});}function setUpControlGroup(control,dir){if(isBlank$1(control))_throwError(dir,'Cannot find control');control.validator=Validators.compose([control.validator,dir.validator]);control.asyncValidator=Validators.composeAsync([control.asyncValidator,dir.asyncValidator]);}function _throwError(dir,message){var path=dir.path.join(' -> ');throw new BaseException$1(message+' \''+path+'\'');}function composeValidators(validators){return isPresent$1(validators)?Validators.compose(validators.map(normalizeValidator)):null;}function composeAsyncValidators(validators){return isPresent$1(validators)?Validators.composeAsync(validators.map(normalizeAsyncValidator)):null;}function isPropertyUpdated(changes,viewModel){if(!StringMapWrapper$1.contains(changes,'model'))return false;var change=changes['model'];if(change.isFirstChange())return true;return!looseIdentical$1(viewModel,change.currentValue);}// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir,valueAccessors){if(isBlank$1(valueAccessors))return null;var defaultAccessor;var builtinAccessor;var customAccessor;valueAccessors.forEach(function(v){if(hasConstructor$1(v,DefaultValueAccessor)){defaultAccessor=v;}else if(hasConstructor$1(v,CheckboxControlValueAccessor)||hasConstructor$1(v,NumberValueAccessor)||hasConstructor$1(v,SelectControlValueAccessor)||hasConstructor$1(v,RadioControlValueAccessor)){if(isPresent$1(builtinAccessor))_throwError(dir,'More than one built-in value accessor matches');builtinAccessor=v;}else{if(isPresent$1(customAccessor))_throwError(dir,'More than one custom value accessor matches');customAccessor=v;}});if(isPresent$1(customAccessor))return customAccessor;if(isPresent$1(builtinAccessor))return builtinAccessor;if(isPresent$1(defaultAccessor))return defaultAccessor;_throwError(dir,'No valid value accessor for');return null;}var controlGroupProvider=/*@ts2dart_const*//* @ts2dart_Provider */{provide:ControlContainer,useExisting:forwardRef(function(){return NgControlGroup;})};var NgControlGroup=function(_ControlContainer){_inherits(NgControlGroup,_ControlContainer);function NgControlGroup(parent,_validators,_asyncValidators){_classCallCheck(this,NgControlGroup);var _this81=_possibleConstructorReturn(this,Object.getPrototypeOf(NgControlGroup).call(this));_this81._validators=_validators;_this81._asyncValidators=_asyncValidators;_this81._parent=parent;return _this81;}_createClass(NgControlGroup,[{key:'ngOnInit',value:function ngOnInit(){this.formDirective.addControlGroup(this);}},{key:'ngOnDestroy',value:function ngOnDestroy(){this.formDirective.removeControlGroup(this);}/**
       * Get the {@link ControlGroup} backing this binding.
       */},{key:'control',get:function get(){return this.formDirective.getControlGroup(this);}/**
       * Get the path to this control group.
       */},{key:'path',get:function get(){return controlPath(this.name,this._parent);}/**
       * Get the {@link Form} to which this group belongs.
       */},{key:'formDirective',get:function get(){return this._parent.formDirective;}},{key:'validator',get:function get(){return composeValidators(this._validators);}},{key:'asyncValidator',get:function get(){return composeAsyncValidators(this._asyncValidators);}}]);return NgControlGroup;}(ControlContainer);/** @nocollapse */NgControlGroup.decorators=[{type:Directive,args:[{selector:'[ngControlGroup]',providers:[controlGroupProvider],inputs:['name: ngControlGroup'],exportAs:'ngForm'}]}];/** @nocollapse */NgControlGroup.ctorParameters=[{type:ControlContainer,decorators:[{type:Host},{type:SkipSelf}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_ASYNC_VALIDATORS]}]}];var controlNameBinding=/*@ts2dart_const*//* @ts2dart_Provider */{provide:NgControl,useExisting:forwardRef(function(){return NgControlName;})};var NgControlName=function(_NgControl){_inherits(NgControlName,_NgControl);function NgControlName(_parent,_validators,_asyncValidators,valueAccessors){_classCallCheck(this,NgControlName);var _this82=_possibleConstructorReturn(this,Object.getPrototypeOf(NgControlName).call(this));_this82._parent=_parent;_this82._validators=_validators;_this82._asyncValidators=_asyncValidators;/** @internal */_this82.update=new EventEmitter$1();_this82._added=false;_this82.valueAccessor=selectValueAccessor(_this82,valueAccessors);return _this82;}_createClass(NgControlName,[{key:'ngOnChanges',value:function ngOnChanges(changes){if(!this._added){this.formDirective.addControl(this);this._added=true;}if(isPropertyUpdated(changes,this.viewModel)){this.viewModel=this.model;this.formDirective.updateModel(this,this.model);}}},{key:'ngOnDestroy',value:function ngOnDestroy(){this.formDirective.removeControl(this);}},{key:'viewToModelUpdate',value:function viewToModelUpdate(newValue){this.viewModel=newValue;ObservableWrapper$1.callEmit(this.update,newValue);}},{key:'path',get:function get(){return controlPath(this.name,this._parent);}},{key:'formDirective',get:function get(){return this._parent.formDirective;}},{key:'validator',get:function get(){return composeValidators(this._validators);}},{key:'asyncValidator',get:function get(){return composeAsyncValidators(this._asyncValidators);}},{key:'control',get:function get(){return this.formDirective.getControl(this);}}]);return NgControlName;}(NgControl);/** @nocollapse */NgControlName.decorators=[{type:Directive,args:[{selector:'[ngControl]',providers:[controlNameBinding],inputs:['name: ngControl','model: ngModel'],outputs:['update: ngModelChange'],exportAs:'ngForm'}]}];/** @nocollapse */NgControlName.ctorParameters=[{type:ControlContainer,decorators:[{type:Host},{type:SkipSelf}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALUE_ACCESSOR]}]}];var formDirectiveProvider=/*@ts2dart_const*/{provide:ControlContainer,useExisting:forwardRef(function(){return NgForm;})};var _formWarningDisplayed=false;var NgForm=function(_ControlContainer2){_inherits(NgForm,_ControlContainer2);function NgForm(validators,asyncValidators){_classCallCheck(this,NgForm);var _this83=_possibleConstructorReturn(this,Object.getPrototypeOf(NgForm).call(this));_this83._submitted=false;_this83.ngSubmit=new EventEmitter$1();_this83._displayWarning();_this83.form=new ControlGroup({},null,composeValidators(validators),composeAsyncValidators(asyncValidators));return _this83;}_createClass(NgForm,[{key:'_displayWarning',value:function _displayWarning(){// TODO(kara): Update this when the new forms module becomes the default
if(!_formWarningDisplayed){_formWarningDisplayed=true;console.warn('\n      *It looks like you\'re using the old forms module. This will be opt-in in the next RC, and\n      will eventually be removed in favor of the new forms module. For more information, see:\n      https://docs.google.com/document/u/1/d/1RIezQqE4aEhBRmArIAS1mRIZtWFf6JxN_7B4meyWK0Y/pub\n    ');}}},{key:'addControl',value:function addControl(dir){var _this84=this;PromiseWrapper$1.scheduleMicrotask(function(){var container=_this84._findContainer(dir.path);var ctrl=new Control();setUpControl(ctrl,dir);container.registerControl(dir.name,ctrl);ctrl.updateValueAndValidity({emitEvent:false});});}},{key:'getControl',value:function getControl(dir){return this.form.find(dir.path);}},{key:'removeControl',value:function removeControl(dir){var _this85=this;PromiseWrapper$1.scheduleMicrotask(function(){var container=_this85._findContainer(dir.path);if(isPresent$1(container)){container.removeControl(dir.name);}});}},{key:'addControlGroup',value:function addControlGroup(dir){var _this86=this;PromiseWrapper$1.scheduleMicrotask(function(){var container=_this86._findContainer(dir.path);var group=new ControlGroup({});setUpControlGroup(group,dir);container.registerControl(dir.name,group);group.updateValueAndValidity({emitEvent:false});});}},{key:'removeControlGroup',value:function removeControlGroup(dir){var _this87=this;PromiseWrapper$1.scheduleMicrotask(function(){var container=_this87._findContainer(dir.path);if(isPresent$1(container)){container.removeControl(dir.name);}});}},{key:'getControlGroup',value:function getControlGroup(dir){return this.form.find(dir.path);}},{key:'updateModel',value:function updateModel(dir,value){var _this88=this;PromiseWrapper$1.scheduleMicrotask(function(){var ctrl=_this88.form.find(dir.path);ctrl.updateValue(value);});}},{key:'onSubmit',value:function onSubmit(){this._submitted=true;ObservableWrapper$1.callEmit(this.ngSubmit,null);return false;}/** @internal */},{key:'_findContainer',value:function _findContainer(path){path.pop();return ListWrapper$1.isEmpty(path)?this.form:this.form.find(path);}},{key:'submitted',get:function get(){return this._submitted;}},{key:'formDirective',get:function get(){return this;}},{key:'control',get:function get(){return this.form;}},{key:'path',get:function get(){return[];}},{key:'controls',get:function get(){return this.form.controls;}}]);return NgForm;}(ControlContainer);/** @nocollapse */NgForm.decorators=[{type:Directive,args:[{selector:'form:not([ngNoForm]):not([ngFormModel]),ngForm,[ngForm]',providers:[formDirectiveProvider],host:{'(submit)':'onSubmit()'},outputs:['ngSubmit'],exportAs:'ngForm'}]}];/** @nocollapse */NgForm.ctorParameters=[{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_ASYNC_VALIDATORS]}]}];var formControlBinding=/*@ts2dart_const*//* @ts2dart_Provider */{provide:NgControl,useExisting:forwardRef(function(){return NgFormControl;})};var NgFormControl=function(_NgControl2){_inherits(NgFormControl,_NgControl2);function NgFormControl(_validators,_asyncValidators,valueAccessors){_classCallCheck(this,NgFormControl);var _this89=_possibleConstructorReturn(this,Object.getPrototypeOf(NgFormControl).call(this));_this89._validators=_validators;_this89._asyncValidators=_asyncValidators;_this89.update=new EventEmitter$1();_this89.valueAccessor=selectValueAccessor(_this89,valueAccessors);return _this89;}_createClass(NgFormControl,[{key:'ngOnChanges',value:function ngOnChanges(changes){if(this._isControlChanged(changes)){setUpControl(this.form,this);this.form.updateValueAndValidity({emitEvent:false});}if(isPropertyUpdated(changes,this.viewModel)){this.form.updateValue(this.model);this.viewModel=this.model;}}},{key:'viewToModelUpdate',value:function viewToModelUpdate(newValue){this.viewModel=newValue;ObservableWrapper$1.callEmit(this.update,newValue);}},{key:'_isControlChanged',value:function _isControlChanged(changes){return StringMapWrapper$1.contains(changes,'form');}},{key:'path',get:function get(){return[];}},{key:'validator',get:function get(){return composeValidators(this._validators);}},{key:'asyncValidator',get:function get(){return composeAsyncValidators(this._asyncValidators);}},{key:'control',get:function get(){return this.form;}}]);return NgFormControl;}(NgControl);/** @nocollapse */NgFormControl.decorators=[{type:Directive,args:[{selector:'[ngFormControl]',providers:[formControlBinding],inputs:['form: ngFormControl','model: ngModel'],outputs:['update: ngModelChange'],exportAs:'ngForm'}]}];/** @nocollapse */NgFormControl.ctorParameters=[{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALUE_ACCESSOR]}]}];var formDirectiveProvider$1=/*@ts2dart_const*//* @ts2dart_Provider */{provide:ControlContainer,useExisting:forwardRef(function(){return NgFormModel;})};var _formModelWarningDisplayed=false;var NgFormModel=function(_ControlContainer3){_inherits(NgFormModel,_ControlContainer3);function NgFormModel(_validators,_asyncValidators){_classCallCheck(this,NgFormModel);var _this90=_possibleConstructorReturn(this,Object.getPrototypeOf(NgFormModel).call(this));_this90._validators=_validators;_this90._asyncValidators=_asyncValidators;_this90._submitted=false;_this90.form=null;_this90.directives=[];_this90.ngSubmit=new EventEmitter$1();_this90._displayWarning();return _this90;}_createClass(NgFormModel,[{key:'_displayWarning',value:function _displayWarning(){// TODO(kara): Update this when the new forms module becomes the default
if(!_formModelWarningDisplayed){_formModelWarningDisplayed=true;console.warn('\n      *It looks like you\'re using the old forms module. This will be opt-in in the next RC, and\n      will eventually be removed in favor of the new forms module. For more information, see:\n      https://docs.google.com/document/u/1/d/1RIezQqE4aEhBRmArIAS1mRIZtWFf6JxN_7B4meyWK0Y/pub\n    ');}}},{key:'ngOnChanges',value:function ngOnChanges(changes){this._checkFormPresent();if(StringMapWrapper$1.contains(changes,'form')){var sync=composeValidators(this._validators);this.form.validator=Validators.compose([this.form.validator,sync]);var async=composeAsyncValidators(this._asyncValidators);this.form.asyncValidator=Validators.composeAsync([this.form.asyncValidator,async]);this.form.updateValueAndValidity({onlySelf:true,emitEvent:false});}this._updateDomValue();}},{key:'addControl',value:function addControl(dir){var ctrl=this.form.find(dir.path);setUpControl(ctrl,dir);ctrl.updateValueAndValidity({emitEvent:false});this.directives.push(dir);}},{key:'getControl',value:function getControl(dir){return this.form.find(dir.path);}},{key:'removeControl',value:function removeControl(dir){ListWrapper$1.remove(this.directives,dir);}},{key:'addControlGroup',value:function addControlGroup(dir){var ctrl=this.form.find(dir.path);setUpControlGroup(ctrl,dir);ctrl.updateValueAndValidity({emitEvent:false});}},{key:'removeControlGroup',value:function removeControlGroup(dir){}},{key:'getControlGroup',value:function getControlGroup(dir){return this.form.find(dir.path);}},{key:'updateModel',value:function updateModel(dir,value){var ctrl=this.form.find(dir.path);ctrl.updateValue(value);}},{key:'onSubmit',value:function onSubmit(){this._submitted=true;ObservableWrapper$1.callEmit(this.ngSubmit,null);return false;}/** @internal */},{key:'_updateDomValue',value:function _updateDomValue(){var _this91=this;this.directives.forEach(function(dir){var ctrl=_this91.form.find(dir.path);dir.valueAccessor.writeValue(ctrl.value);});}},{key:'_checkFormPresent',value:function _checkFormPresent(){if(isBlank$1(this.form)){throw new BaseException$1('ngFormModel expects a form. Please pass one in. Example: <form [ngFormModel]="myCoolForm">');}}},{key:'submitted',get:function get(){return this._submitted;}},{key:'formDirective',get:function get(){return this;}},{key:'control',get:function get(){return this.form;}},{key:'path',get:function get(){return[];}}]);return NgFormModel;}(ControlContainer);/** @nocollapse */NgFormModel.decorators=[{type:Directive,args:[{selector:'[ngFormModel]',providers:[formDirectiveProvider$1],inputs:['form: ngFormModel'],host:{'(submit)':'onSubmit()'},outputs:['ngSubmit'],exportAs:'ngForm'}]}];/** @nocollapse */NgFormModel.ctorParameters=[{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_ASYNC_VALIDATORS]}]}];var formControlBinding$1=/*@ts2dart_const*//* @ts2dart_Provider */{provide:NgControl,useExisting:forwardRef(function(){return NgModel;})};var NgModel=function(_NgControl3){_inherits(NgModel,_NgControl3);function NgModel(_validators,_asyncValidators,valueAccessors){_classCallCheck(this,NgModel);var _this92=_possibleConstructorReturn(this,Object.getPrototypeOf(NgModel).call(this));_this92._validators=_validators;_this92._asyncValidators=_asyncValidators;/** @internal */_this92._control=new Control();/** @internal */_this92._added=false;_this92.update=new EventEmitter$1();_this92.valueAccessor=selectValueAccessor(_this92,valueAccessors);return _this92;}_createClass(NgModel,[{key:'ngOnChanges',value:function ngOnChanges(changes){if(!this._added){setUpControl(this._control,this);this._control.updateValueAndValidity({emitEvent:false});this._added=true;}if(isPropertyUpdated(changes,this.viewModel)){this._control.updateValue(this.model);this.viewModel=this.model;}}},{key:'viewToModelUpdate',value:function viewToModelUpdate(newValue){this.viewModel=newValue;ObservableWrapper$1.callEmit(this.update,newValue);}},{key:'control',get:function get(){return this._control;}},{key:'path',get:function get(){return[];}},{key:'validator',get:function get(){return composeValidators(this._validators);}},{key:'asyncValidator',get:function get(){return composeAsyncValidators(this._asyncValidators);}}]);return NgModel;}(NgControl);/** @nocollapse */NgModel.decorators=[{type:Directive,args:[{selector:'[ngModel]:not([ngControl]):not([ngFormControl])',providers:[formControlBinding$1],inputs:['model: ngModel'],outputs:['update: ngModelChange'],exportAs:'ngForm'}]}];/** @nocollapse */NgModel.ctorParameters=[{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_ASYNC_VALIDATORS]}]},{type:Array,decorators:[{type:Optional},{type:Self},{type:Inject,args:[NG_VALUE_ACCESSOR]}]}];var SELECT_MULTIPLE_VALUE_ACCESSOR={provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(function(){return SelectMultipleControlValueAccessor;}),multi:true};function _extractId$1(valueString){return valueString.split(':')[0];}var SelectMultipleControlValueAccessor=function(){function SelectMultipleControlValueAccessor(){_classCallCheck(this,SelectMultipleControlValueAccessor);/** @internal */this._optionMap=new Map();/** @internal */this._idCounter=0;this.onChange=function(_){};this.onTouched=function(){};}_createClass(SelectMultipleControlValueAccessor,[{key:'writeValue',value:function writeValue(value){var _this93=this;this.value=value;if(value==null)return;var values=value;// convert values to ids
var ids=values.map(function(v){return _this93._getOptionId(v);});this._optionMap.forEach(function(opt,o){opt._setSelected(ids.indexOf(o.toString())>-1);});}},{key:'registerOnChange',value:function registerOnChange(fn){var _this94=this;this.onChange=function(_){var selected=[];if(_.hasOwnProperty('selectedOptions')){var options=_.selectedOptions;for(var i=0;i<options.length;i++){var opt=options.item(i);var val=_this94._getOptionValue(opt.value);selected.push(val);}}else{var _options=_.options;for(var i=0;i<_options.length;i++){var _opt=_options.item(i);if(_opt.selected){var _val=_this94._getOptionValue(_opt.value);selected.push(_val);}}}fn(selected);};}},{key:'registerOnTouched',value:function registerOnTouched(fn){this.onTouched=fn;}/** @internal */},{key:'_registerOption',value:function _registerOption(value){var id=(this._idCounter++).toString();this._optionMap.set(id,value);return id;}/** @internal */},{key:'_getOptionId',value:function _getOptionId(value){var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=MapWrapper$1.keys(this._optionMap)[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var id=_step2.value;if(looseIdentical$1(this._optionMap.get(id)._value,value))return id;}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return null;}/** @internal */},{key:'_getOptionValue',value:function _getOptionValue(valueString){var opt=this._optionMap.get(_extractId$1(valueString));return isPresent$1(opt)?opt._value:valueString;}}]);return SelectMultipleControlValueAccessor;}();/** @nocollapse */SelectMultipleControlValueAccessor.decorators=[{type:Directive,args:[{selector:'select[multiple][ngControl],select[multiple][ngFormControl],select[multiple][ngModel]',host:{'(input)':'onChange($event.target)','(blur)':'onTouched()'},providers:[SELECT_MULTIPLE_VALUE_ACCESSOR]}]}];/** @nocollapse */SelectMultipleControlValueAccessor.ctorParameters=[];var REQUIRED=Validators.required;/**
   * Provivder which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
   *
   * ## Example:
   *
   * {@example common/forms/ts/validators/validators.ts region='min'}
   */var MIN_LENGTH_VALIDATOR={provide:NG_VALIDATORS,useExisting:forwardRef(function(){return MinLengthValidator;}),multi:true};var MinLengthValidator=function(){function MinLengthValidator(minLength){_classCallCheck(this,MinLengthValidator);this._validator=Validators.minLength(NumberWrapper$1.parseInt(minLength,10));}_createClass(MinLengthValidator,[{key:'validate',value:function validate(c){return this._validator(c);}}]);return MinLengthValidator;}();/** @nocollapse */MinLengthValidator.decorators=[{type:Directive,args:[{selector:'[minlength][ngControl],[minlength][ngFormControl],[minlength][ngModel]',providers:[MIN_LENGTH_VALIDATOR]}]}];/** @nocollapse */MinLengthValidator.ctorParameters=[{type:undefined,decorators:[{type:Attribute,args:['minlength']}]}];/**
   * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
   *
   * ## Example:
   *
   * {@example common/forms/ts/validators/validators.ts region='max'}
   */var MAX_LENGTH_VALIDATOR={provide:NG_VALIDATORS,useExisting:forwardRef(function(){return MaxLengthValidator;}),multi:true};var MaxLengthValidator=function(){function MaxLengthValidator(maxLength){_classCallCheck(this,MaxLengthValidator);this._validator=Validators.maxLength(NumberWrapper$1.parseInt(maxLength,10));}_createClass(MaxLengthValidator,[{key:'validate',value:function validate(c){return this._validator(c);}}]);return MaxLengthValidator;}();/** @nocollapse */MaxLengthValidator.decorators=[{type:Directive,args:[{selector:'[maxlength][ngControl],[maxlength][ngFormControl],[maxlength][ngModel]',providers:[MAX_LENGTH_VALIDATOR]}]}];/** @nocollapse */MaxLengthValidator.ctorParameters=[{type:undefined,decorators:[{type:Attribute,args:['maxlength']}]}];var PATTERN_VALIDATOR={provide:NG_VALIDATORS,useExisting:forwardRef(function(){return PatternValidator;}),multi:true};var PatternValidator=function(){function PatternValidator(pattern){_classCallCheck(this,PatternValidator);this._validator=Validators.pattern(pattern);}_createClass(PatternValidator,[{key:'validate',value:function validate(c){return this._validator(c);}}]);return PatternValidator;}();/** @nocollapse */PatternValidator.decorators=[{type:Directive,args:[{selector:'[pattern][ngControl],[pattern][ngFormControl],[pattern][ngModel]',providers:[PATTERN_VALIDATOR]}]}];/** @nocollapse */PatternValidator.ctorParameters=[{type:undefined,decorators:[{type:Attribute,args:['pattern']}]}];/**
   * Shorthand set of providers used for building Angular forms.
   *
   * ### Example
   *
   * ```typescript
   * bootstrap(MyApp, [FORM_PROVIDERS]);
   * ```
   *
   * @experimental
   */var FORM_PROVIDERS=[FormBuilder,RadioControlRegistry];/**
   * This class should not be used directly by an application developer. Instead, use
   * {@link Location}.
   *
   * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
   * agnostic.
   * This means that we can have different implementation of `PlatformLocation` for the different
   * platforms
   * that angular supports. For example, the default `PlatformLocation` is {@link
   * BrowserPlatformLocation},
   * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
   *
   * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
   * when
   * they need to interact with the DOM apis like pushState, popState, etc...
   *
   * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
   * by
   * the {@link Router} in order to navigate between routes. Since all interactions between {@link
   * Router} /
   * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
   * class
   * they are all platform independent.
   *
   * @stable
   */var PlatformLocation=function(){function PlatformLocation(){_classCallCheck(this,PlatformLocation);}_createClass(PlatformLocation,[{key:'pathname',get:function get(){return null;}},{key:'search',get:function get(){return null;}},{key:'hash',get:function get(){return null;}}]);return PlatformLocation;}();/**
   * The `APP_BASE_HREF` token represents the base href to be used with the
   * {@link PathLocationStrategy}.
   *
   * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
   * representing the URL prefix that should be preserved when generating and recognizing
   * URLs.
   *
   * ### Example
   *
   * ```
   * import {Component} from '@angular/core';
   * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from '@angular/router';
   * import {APP_BASE_HREF} from '@angular/common';
   *
   * @Component({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   // ...
   * }
   *
   * bootstrap(AppCmp, [
   *   ROUTER_PROVIDERS,
   *   {provide: APP_BASE_HREF, useValue: '/my/app'}
   * ]);
   * ```
   * @stable
   */var APP_BASE_HREF=new OpaqueToken('appBaseHref');var globalScope$2;if(typeof window==='undefined'){if(typeof WorkerGlobalScope!=='undefined'&&self instanceof WorkerGlobalScope){// TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
globalScope$2=self;}else{globalScope$2=global;}}else{globalScope$2=window;}// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var global$3=globalScope$2;var Date$2=global$3.Date;// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
global$3.assert=function assert(condition){// TODO: to be fixed properly via #2830, noop for now
};function isPresent$2(obj){return obj!==undefined&&obj!==null;}function isBlank$2(obj){return obj===undefined||obj===null;}function isNumber$2(obj){return typeof obj==='number';}function isString$2(obj){return typeof obj==='string';}function isFunction$3(obj){return typeof obj==='function';}function isArray$3(obj){return Array.isArray(obj);}function stringify$2(token){if(typeof token==='string'){return token;}if(token===undefined||token===null){return''+token;}if(token.name){return token.name;}if(token.overriddenName){return token.overriddenName;}var res=token.toString();var newLineIndex=res.indexOf('\n');return newLineIndex===-1?res:res.substring(0,newLineIndex);}var StringWrapper$2=function(){function StringWrapper$2(){_classCallCheck(this,StringWrapper$2);}_createClass(StringWrapper$2,null,[{key:'fromCharCode',value:function fromCharCode(code){return String.fromCharCode(code);}},{key:'charCodeAt',value:function charCodeAt(s,index){return s.charCodeAt(index);}},{key:'split',value:function split(s,regExp){return s.split(regExp);}},{key:'equals',value:function equals(s,s2){return s===s2;}},{key:'stripLeft',value:function stripLeft(s,charVal){if(s&&s.length){var pos=0;for(var i=0;i<s.length;i++){if(s[i]!=charVal)break;pos++;}s=s.substring(pos);}return s;}},{key:'stripRight',value:function stripRight(s,charVal){if(s&&s.length){var pos=s.length;for(var i=s.length-1;i>=0;i--){if(s[i]!=charVal)break;pos--;}s=s.substring(0,pos);}return s;}},{key:'replace',value:function replace(s,from,_replace3){return s.replace(from,_replace3);}},{key:'replaceAll',value:function replaceAll(s,from,replace){return s.replace(from,replace);}},{key:'slice',value:function slice(s){var from=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var to=arguments.length<=2||arguments[2]===undefined?null:arguments[2];return s.slice(from,to===null?undefined:to);}},{key:'replaceAllMapped',value:function replaceAllMapped(s,from,cb){return s.replace(from,function(){for(var _len6=arguments.length,matches=Array(_len6),_key6=0;_key6<_len6;_key6++){matches[_key6]=arguments[_key6];}// Remove offset & string from the result array
matches.splice(-2,2);// The callback receives match, p1, ..., pn
return cb(matches);});}},{key:'contains',value:function contains(s,substr){return s.indexOf(substr)!=-1;}},{key:'compare',value:function compare(a,b){if(a<b){return-1;}else if(a>b){return 1;}else{return 0;}}}]);return StringWrapper$2;}();var RegExpWrapper$2=function(){function RegExpWrapper$2(){_classCallCheck(this,RegExpWrapper$2);}_createClass(RegExpWrapper$2,null,[{key:'create',value:function create(regExpStr){var flags=arguments.length<=1||arguments[1]===undefined?'':arguments[1];flags=flags.replace(/g/g,'');return new global$3.RegExp(regExpStr,flags+'g');}},{key:'firstMatch',value:function firstMatch(regExp,input){// Reset multimatch regex state
regExp.lastIndex=0;return regExp.exec(input);}},{key:'test',value:function test(regExp,input){regExp.lastIndex=0;return regExp.test(input);}},{key:'matcher',value:function matcher(regExp,input){// Reset regex state for the case
// someone did not loop over all matches
// last time.
regExp.lastIndex=0;return{re:regExp,input:input};}},{key:'replaceAll',value:function replaceAll(regExp,input,replace){var c=regExp.exec(input);var res='';regExp.lastIndex=0;var prev=0;while(c){res+=input.substring(prev,c.index);res+=replace(c);prev=c.index+c[0].length;regExp.lastIndex=prev;c=regExp.exec(input);}res+=input.substring(prev);return res;}}]);return RegExpWrapper$2;}();// Can't be all uppercase as our transpiler would think it is a special directive...
var Json$2=function(){function Json$2(){_classCallCheck(this,Json$2);}_createClass(Json$2,null,[{key:'parse',value:function parse(s){return global$3.JSON.parse(s);}},{key:'stringify',value:function stringify(data){// Dart doesn't take 3 arguments
return global$3.JSON.stringify(data,null,2);}}]);return Json$2;}();var DateWrapper$2=function(){function DateWrapper$2(){_classCallCheck(this,DateWrapper$2);}_createClass(DateWrapper$2,null,[{key:'create',value:function create(year){var month=arguments.length<=1||arguments[1]===undefined?1:arguments[1];var day=arguments.length<=2||arguments[2]===undefined?1:arguments[2];var hour=arguments.length<=3||arguments[3]===undefined?0:arguments[3];var minutes=arguments.length<=4||arguments[4]===undefined?0:arguments[4];var seconds=arguments.length<=5||arguments[5]===undefined?0:arguments[5];var milliseconds=arguments.length<=6||arguments[6]===undefined?0:arguments[6];return new Date$2(year,month-1,day,hour,minutes,seconds,milliseconds);}},{key:'fromISOString',value:function fromISOString(str){return new Date$2(str);}},{key:'fromMillis',value:function fromMillis(ms){return new Date$2(ms);}},{key:'toMillis',value:function toMillis(date){return date.getTime();}},{key:'now',value:function now(){return new Date$2();}},{key:'toJson',value:function toJson(date){return date.toJSON();}}]);return DateWrapper$2;}();function setValueOnPath$2(global,path,value){var parts=path.split('.');var obj=global;while(parts.length>1){var name=parts.shift();if(obj.hasOwnProperty(name)&&isPresent$2(obj[name])){obj=obj[name];}else{obj=obj[name]={};}}if(obj===undefined||obj===null){obj={};}obj[parts.shift()]=value;}var _DOM=null;function getDOM(){return _DOM;}function setRootDomAdapter(adapter){if(isBlank$2(_DOM)){_DOM=adapter;}}/* tslint:disable:requireParameterType *//**
   * Provides DOM operations in an environment-agnostic way.
   */var DomAdapter=function(){function DomAdapter(){_classCallCheck(this,DomAdapter);this.xhrType=null;}/** @deprecated */_createClass(DomAdapter,[{key:'getXHR',value:function getXHR(){return this.xhrType;}/**
       * Maps attribute names to their corresponding property names for cases
       * where attribute name doesn't match property name.
       */},{key:'attrToPropMap',get:function get(){return this._attrToPropMap;},set:function set(value){this._attrToPropMap=value;}}]);return DomAdapter;}();function supportsState(){return!!window.history.pushState;}var BrowserPlatformLocation=function(_PlatformLocation){_inherits(BrowserPlatformLocation,_PlatformLocation);function BrowserPlatformLocation(){_classCallCheck(this,BrowserPlatformLocation);var _this95=_possibleConstructorReturn(this,Object.getPrototypeOf(BrowserPlatformLocation).call(this));_this95._init();return _this95;}// This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
/** @internal */_createClass(BrowserPlatformLocation,[{key:'_init',value:function _init(){this._location=getDOM().getLocation();this._history=getDOM().getHistory();}/** @internal */},{key:'getBaseHrefFromDOM',value:function getBaseHrefFromDOM(){return getDOM().getBaseHref();}},{key:'onPopState',value:function onPopState(fn){getDOM().getGlobalEventTarget('window').addEventListener('popstate',fn,false);}},{key:'onHashChange',value:function onHashChange(fn){getDOM().getGlobalEventTarget('window').addEventListener('hashchange',fn,false);}},{key:'pushState',value:function pushState(state,title,url){if(supportsState()){this._history.pushState(state,title,url);}else{this._location.hash=url;}}},{key:'replaceState',value:function replaceState(state,title,url){if(supportsState()){this._history.replaceState(state,title,url);}else{this._location.hash=url;}}},{key:'forward',value:function forward(){this._history.forward();}},{key:'back',value:function back(){this._history.back();}},{key:'location',get:function get(){return this._location;}},{key:'pathname',get:function get(){return this._location.pathname;},set:function set(newPath){this._location.pathname=newPath;}},{key:'search',get:function get(){return this._location.search;}},{key:'hash',get:function get(){return this._location.hash;}}]);return BrowserPlatformLocation;}(PlatformLocation);/** @nocollapse */BrowserPlatformLocation.decorators=[{type:Injectable}];/** @nocollapse */BrowserPlatformLocation.ctorParameters=[];var context=global$3;var wtfInit$1=r.wtfInit;var DebugDomRootRenderer$1=r.DebugDomRootRenderer;var SecurityContext$1=r.SecurityContext;var SanitizationService$1=r.SanitizationService;var NoOpAnimationDriver$1=r.NoOpAnimationDriver;var AnimationDriver$1=r.AnimationDriver;var Map$3=global$3.Map;var Set$3=global$3.Set;// Safari and Internet Explorer do not support the iterable parameter to the
// Map constructor.  We work around that by manually adding the items.
var createMapFromPairs$2=function(){try{if(new Map$3([[1,2]]).size===1){return function createMapFromPairs(pairs){return new Map$3(pairs);};}}catch(e){}return function createMapAndPopulateFromPairs(pairs){var map=new Map$3();for(var i=0;i<pairs.length;i++){var pair=pairs[i];map.set(pair[0],pair[1]);}return map;};}();var createMapFromMap$2=function(){try{if(new Map$3(new Map$3())){return function createMapFromMap(m){return new Map$3(m);};}}catch(e){}return function createMapAndPopulateFromMap(m){var map=new Map$3();m.forEach(function(v,k){map.set(k,v);});return map;};}();var _clearValues$2=function(){if(new Map$3().keys().next){return function _clearValues(m){var keyIterator=m.keys();var k;while(!(k=keyIterator.next()).done){m.set(k.value,null);}};}else{return function _clearValuesWithForeEach(m){m.forEach(function(v,k){m.set(k,null);});};}}();// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
var _arrayFromMap$2=function(){try{if(new Map$3().values().next){return function createArrayFromMap(m,getValues){return getValues?Array.from(m.values()):Array.from(m.keys());};}}catch(e){}return function createArrayFromMapWithForeach(m,getValues){var res=ListWrapper$2.createFixedSize(m.size),i=0;m.forEach(function(v,k){res[i]=getValues?v:k;i++;});return res;};}();/**
   * Wraps Javascript Objects
   */var StringMapWrapper$2=function(){function StringMapWrapper$2(){_classCallCheck(this,StringMapWrapper$2);}_createClass(StringMapWrapper$2,null,[{key:'create',value:function create(){// Note: We are not using Object.create(null) here due to
// performance!
// http://jsperf.com/ng2-object-create-null
return{};}},{key:'contains',value:function contains(map,key){return map.hasOwnProperty(key);}},{key:'get',value:function get(map,key){return map.hasOwnProperty(key)?map[key]:undefined;}},{key:'set',value:function set(map,key,value){map[key]=value;}},{key:'keys',value:function keys(map){return Object.keys(map);}},{key:'values',value:function values(map){return Object.keys(map).reduce(function(r,a){r.push(map[a]);return r;},[]);}},{key:'isEmpty',value:function isEmpty(map){for(var prop in map){return false;}return true;}},{key:'delete',value:function _delete(map,key){delete map[key];}},{key:'forEach',value:function forEach(map,callback){for(var prop in map){if(map.hasOwnProperty(prop)){callback(map[prop],prop);}}}},{key:'merge',value:function merge(m1,m2){var m={};for(var attr in m1){if(m1.hasOwnProperty(attr)){m[attr]=m1[attr];}}for(var attr in m2){if(m2.hasOwnProperty(attr)){m[attr]=m2[attr];}}return m;}},{key:'equals',value:function equals(m1,m2){var k1=Object.keys(m1);var k2=Object.keys(m2);if(k1.length!=k2.length){return false;}var key;for(var i=0;i<k1.length;i++){key=k1[i];if(m1[key]!==m2[key]){return false;}}return true;}}]);return StringMapWrapper$2;}();var ListWrapper$2=function(){function ListWrapper$2(){_classCallCheck(this,ListWrapper$2);}_createClass(ListWrapper$2,null,[{key:'createFixedSize',// JS has no way to express a statically fixed size list, but dart does so we
// keep both methods.
value:function createFixedSize(size){return new Array(size);}},{key:'createGrowableSize',value:function createGrowableSize(size){return new Array(size);}},{key:'clone',value:function clone(array){return array.slice(0);}},{key:'forEachWithIndex',value:function forEachWithIndex(array,fn){for(var i=0;i<array.length;i++){fn(array[i],i);}}},{key:'first',value:function first(array){if(!array)return null;return array[0];}},{key:'last',value:function last(array){if(!array||array.length==0)return null;return array[array.length-1];}},{key:'indexOf',value:function indexOf(array,value){var startIndex=arguments.length<=2||arguments[2]===undefined?0:arguments[2];return array.indexOf(value,startIndex);}},{key:'contains',value:function contains(list,el){return list.indexOf(el)!==-1;}},{key:'reversed',value:function reversed(array){var a=ListWrapper$2.clone(array);return a.reverse();}},{key:'concat',value:function concat(a,b){return a.concat(b);}},{key:'insert',value:function insert(list,index,value){list.splice(index,0,value);}},{key:'removeAt',value:function removeAt(list,index){var res=list[index];list.splice(index,1);return res;}},{key:'removeAll',value:function removeAll(list,items){for(var i=0;i<items.length;++i){var index=list.indexOf(items[i]);list.splice(index,1);}}},{key:'remove',value:function remove(list,el){var index=list.indexOf(el);if(index>-1){list.splice(index,1);return true;}return false;}},{key:'clear',value:function clear(list){list.length=0;}},{key:'isEmpty',value:function isEmpty(list){return list.length==0;}},{key:'fill',value:function fill(list,value){var start=arguments.length<=2||arguments[2]===undefined?0:arguments[2];var end=arguments.length<=3||arguments[3]===undefined?null:arguments[3];list.fill(value,start,end===null?list.length:end);}},{key:'equals',value:function equals(a,b){if(a.length!=b.length)return false;for(var i=0;i<a.length;++i){if(a[i]!==b[i])return false;}return true;}},{key:'slice',value:function slice(l){var from=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var to=arguments.length<=2||arguments[2]===undefined?null:arguments[2];return l.slice(from,to===null?undefined:to);}},{key:'splice',value:function splice(l,from,length){return l.splice(from,length);}},{key:'sort',value:function sort(l,compareFn){if(isPresent$2(compareFn)){l.sort(compareFn);}else{l.sort();}}},{key:'toString',value:function toString(l){return l.toString();}},{key:'toJSON',value:function toJSON(l){return JSON.stringify(l);}},{key:'maximum',value:function maximum(list,predicate){if(list.length==0){return null;}var solution=null;var maxValue=-Infinity;for(var index=0;index<list.length;index++){var candidate=list[index];if(isBlank$2(candidate)){continue;}var candidateValue=predicate(candidate);if(candidateValue>maxValue){solution=candidate;maxValue=candidateValue;}}return solution;}},{key:'flatten',value:function flatten(list){var target=[];_flattenArray$2(list,target);return target;}},{key:'addAll',value:function addAll(list,source){for(var i=0;i<source.length;i++){list.push(source[i]);}}}]);return ListWrapper$2;}();function _flattenArray$2(source,target){if(isPresent$2(source)){for(var i=0;i<source.length;i++){var item=source[i];if(isArray$3(item)){_flattenArray$2(item,target);}else{target.push(item);}}}return target;}// Safari and Internet Explorer do not support the iterable parameter to the
// Set constructor.  We work around that by manually adding the items.
var createSetFromList$2=function(){var test=new Set$3([1,2,3]);if(test.size===3){return function createSetFromList(lst){return new Set$3(lst);};}else{return function createSetAndPopulateFromList(lst){var res=new Set$3(lst);if(res.size!==lst.length){for(var i=0;i<lst.length;i++){res.add(lst[i]);}}return res;};}}();var SetWrapper$2=function(){function SetWrapper$2(){_classCallCheck(this,SetWrapper$2);}_createClass(SetWrapper$2,null,[{key:'createFromList',value:function createFromList(lst){return createSetFromList$2(lst);}},{key:'has',value:function has(s,key){return s.has(key);}},{key:'delete',value:function _delete(m,k){m.delete(k);}}]);return SetWrapper$2;}();/**
   * @stable
   */var BaseException$2=function(_Error7){_inherits(BaseException$2,_Error7);function BaseException$2(){var message=arguments.length<=0||arguments[0]===undefined?'--':arguments[0];_classCallCheck(this,BaseException$2);var _this96=_possibleConstructorReturn(this,Object.getPrototypeOf(BaseException$2).call(this,message));_this96.message=message;_this96.stack=new Error(message).stack;return _this96;}_createClass(BaseException$2,[{key:'toString',value:function toString(){return this.message;}}]);return BaseException$2;}(Error);/**
   * A DI Token representing the main rendering context. In a browser this is the DOM Document.
   *
   * Note: Document might not be available in the Application Context when Application and Rendering
   * Contexts are not the same (e.g. when running the application into a Web Worker).
   */var DOCUMENT=new OpaqueToken('DocumentToken');var SharedStylesHost=function(){function SharedStylesHost(){_classCallCheck(this,SharedStylesHost);/** @internal */this._styles=[];/** @internal */this._stylesSet=new Set();}_createClass(SharedStylesHost,[{key:'addStyles',value:function addStyles(styles){var _this97=this;var additions=[];styles.forEach(function(style){if(!SetWrapper$2.has(_this97._stylesSet,style)){_this97._stylesSet.add(style);_this97._styles.push(style);additions.push(style);}});this.onStylesAdded(additions);}},{key:'onStylesAdded',value:function onStylesAdded(additions){}},{key:'getAllStyles',value:function getAllStyles(){return this._styles;}}]);return SharedStylesHost;}();/** @nocollapse */SharedStylesHost.decorators=[{type:Injectable}];/** @nocollapse */SharedStylesHost.ctorParameters=[];var DomSharedStylesHost=function(_SharedStylesHost){_inherits(DomSharedStylesHost,_SharedStylesHost);function DomSharedStylesHost(doc){_classCallCheck(this,DomSharedStylesHost);var _this98=_possibleConstructorReturn(this,Object.getPrototypeOf(DomSharedStylesHost).call(this));_this98._hostNodes=new Set();_this98._hostNodes.add(doc.head);return _this98;}/** @internal */_createClass(DomSharedStylesHost,[{key:'_addStylesToHost',value:function _addStylesToHost(styles,host){for(var i=0;i<styles.length;i++){var style=styles[i];getDOM().appendChild(host,getDOM().createStyleElement(style));}}},{key:'addHost',value:function addHost(hostNode){this._addStylesToHost(this._styles,hostNode);this._hostNodes.add(hostNode);}},{key:'removeHost',value:function removeHost(hostNode){SetWrapper$2.delete(this._hostNodes,hostNode);}},{key:'onStylesAdded',value:function onStylesAdded(additions){var _this99=this;this._hostNodes.forEach(function(hostNode){_this99._addStylesToHost(additions,hostNode);});}}]);return DomSharedStylesHost;}(SharedStylesHost);/** @nocollapse */DomSharedStylesHost.decorators=[{type:Injectable}];/** @nocollapse */DomSharedStylesHost.ctorParameters=[{type:undefined,decorators:[{type:Inject,args:[DOCUMENT]}]}];var EVENT_MANAGER_PLUGINS=new OpaqueToken('EventManagerPlugins');var EventManager=function(){function EventManager(plugins,_zone){var _this100=this;_classCallCheck(this,EventManager);this._zone=_zone;plugins.forEach(function(p){return p.manager=_this100;});this._plugins=ListWrapper$2.reversed(plugins);}_createClass(EventManager,[{key:'addEventListener',value:function addEventListener(element,eventName,handler){var plugin=this._findPluginFor(eventName);return plugin.addEventListener(element,eventName,handler);}},{key:'addGlobalEventListener',value:function addGlobalEventListener(target,eventName,handler){var plugin=this._findPluginFor(eventName);return plugin.addGlobalEventListener(target,eventName,handler);}},{key:'getZone',value:function getZone(){return this._zone;}/** @internal */},{key:'_findPluginFor',value:function _findPluginFor(eventName){var plugins=this._plugins;for(var i=0;i<plugins.length;i++){var plugin=plugins[i];if(plugin.supports(eventName)){return plugin;}}throw new BaseException$2('No event manager plugin found for event '+eventName);}}]);return EventManager;}();/** @nocollapse */EventManager.decorators=[{type:Injectable}];/** @nocollapse */EventManager.ctorParameters=[{type:Array,decorators:[{type:Inject,args:[EVENT_MANAGER_PLUGINS]}]},{type:NgZone}];var EventManagerPlugin=function(){function EventManagerPlugin(){_classCallCheck(this,EventManagerPlugin);}_createClass(EventManagerPlugin,[{key:'supports',// That is equivalent to having supporting $event.target
value:function supports(eventName){return false;}},{key:'addEventListener',value:function addEventListener(element,eventName,handler){throw'not implemented';}},{key:'addGlobalEventListener',value:function addGlobalEventListener(element,eventName,handler){throw'not implemented';}}]);return EventManagerPlugin;}();var CAMEL_CASE_REGEXP=/([A-Z])/g;var DASH_CASE_REGEXP=/-([a-z])/g;function camelCaseToDashCase(input){return StringWrapper$2.replaceAllMapped(input,CAMEL_CASE_REGEXP,function(m/** TODO #9100 */){return'-'+m[1].toLowerCase();});}function dashCaseToCamelCase(input){return StringWrapper$2.replaceAllMapped(input,DASH_CASE_REGEXP,function(m/** TODO #9100 */){return m[1].toUpperCase();});}var NAMESPACE_URIS={'xlink':'http://www.w3.org/1999/xlink','svg':'http://www.w3.org/2000/svg'};var TEMPLATE_COMMENT_TEXT='template bindings={}';var TEMPLATE_BINDINGS_EXP=/^template bindings=(.*)$/g;var DomRootRenderer=function(){function DomRootRenderer(document,eventManager,sharedStylesHost,animationDriver){_classCallCheck(this,DomRootRenderer);this.document=document;this.eventManager=eventManager;this.sharedStylesHost=sharedStylesHost;this.animationDriver=animationDriver;this.registeredComponents=new Map();}_createClass(DomRootRenderer,[{key:'renderComponent',value:function renderComponent(componentProto){var renderer=this.registeredComponents.get(componentProto.id);if(isBlank$2(renderer)){renderer=new DomRenderer(this,componentProto,this.animationDriver);this.registeredComponents.set(componentProto.id,renderer);}return renderer;}}]);return DomRootRenderer;}();var DomRootRenderer_=function(_DomRootRenderer){_inherits(DomRootRenderer_,_DomRootRenderer);function DomRootRenderer_(_document,_eventManager,sharedStylesHost,animationDriver){_classCallCheck(this,DomRootRenderer_);return _possibleConstructorReturn(this,Object.getPrototypeOf(DomRootRenderer_).call(this,_document,_eventManager,sharedStylesHost,animationDriver));}return DomRootRenderer_;}(DomRootRenderer);/** @nocollapse */DomRootRenderer_.decorators=[{type:Injectable}];/** @nocollapse */DomRootRenderer_.ctorParameters=[{type:undefined,decorators:[{type:Inject,args:[DOCUMENT]}]},{type:EventManager},{type:DomSharedStylesHost},{type:AnimationDriver$1}];var DomRenderer=function(){function DomRenderer(_rootRenderer,componentProto,_animationDriver){_classCallCheck(this,DomRenderer);this._rootRenderer=_rootRenderer;this.componentProto=componentProto;this._animationDriver=_animationDriver;this._styles=_flattenStyles(componentProto.id,componentProto.styles,[]);if(componentProto.encapsulation!==ViewEncapsulation.Native){this._rootRenderer.sharedStylesHost.addStyles(this._styles);}if(this.componentProto.encapsulation===ViewEncapsulation.Emulated){this._contentAttr=_shimContentAttribute(componentProto.id);this._hostAttr=_shimHostAttribute(componentProto.id);}else{this._contentAttr=null;this._hostAttr=null;}}_createClass(DomRenderer,[{key:'selectRootElement',value:function selectRootElement(selectorOrNode,debugInfo){var el;if(isString$2(selectorOrNode)){el=getDOM().querySelector(this._rootRenderer.document,selectorOrNode);if(isBlank$2(el)){throw new BaseException$2('The selector "'+selectorOrNode+'" did not match any elements');}}else{el=selectorOrNode;}getDOM().clearNodes(el);return el;}},{key:'createElement',value:function createElement(parent,name,debugInfo){var nsAndName=splitNamespace(name);var el=isPresent$2(nsAndName[0])?getDOM().createElementNS(NAMESPACE_URIS[nsAndName[0]],nsAndName[1]):getDOM().createElement(nsAndName[1]);if(isPresent$2(this._contentAttr)){getDOM().setAttribute(el,this._contentAttr,'');}if(isPresent$2(parent)){getDOM().appendChild(parent,el);}return el;}},{key:'createViewRoot',value:function createViewRoot(hostElement){var nodesParent;if(this.componentProto.encapsulation===ViewEncapsulation.Native){nodesParent=getDOM().createShadowRoot(hostElement);this._rootRenderer.sharedStylesHost.addHost(nodesParent);for(var i=0;i<this._styles.length;i++){getDOM().appendChild(nodesParent,getDOM().createStyleElement(this._styles[i]));}}else{if(isPresent$2(this._hostAttr)){getDOM().setAttribute(hostElement,this._hostAttr,'');}nodesParent=hostElement;}return nodesParent;}},{key:'createTemplateAnchor',value:function createTemplateAnchor(parentElement,debugInfo){var comment=getDOM().createComment(TEMPLATE_COMMENT_TEXT);if(isPresent$2(parentElement)){getDOM().appendChild(parentElement,comment);}return comment;}},{key:'createText',value:function createText(parentElement,value,debugInfo){var node=getDOM().createTextNode(value);if(isPresent$2(parentElement)){getDOM().appendChild(parentElement,node);}return node;}},{key:'projectNodes',value:function projectNodes(parentElement,nodes){if(isBlank$2(parentElement))return;appendNodes(parentElement,nodes);}},{key:'attachViewAfter',value:function attachViewAfter(node,viewRootNodes){moveNodesAfterSibling(node,viewRootNodes);}},{key:'detachView',value:function detachView(viewRootNodes){for(var i=0;i<viewRootNodes.length;i++){getDOM().remove(viewRootNodes[i]);}}},{key:'destroyView',value:function destroyView(hostElement,viewAllNodes){if(this.componentProto.encapsulation===ViewEncapsulation.Native&&isPresent$2(hostElement)){this._rootRenderer.sharedStylesHost.removeHost(getDOM().getShadowRoot(hostElement));}}},{key:'listen',value:function listen(renderElement,name,callback){return this._rootRenderer.eventManager.addEventListener(renderElement,name,decoratePreventDefault(callback));}},{key:'listenGlobal',value:function listenGlobal(target,name,callback){return this._rootRenderer.eventManager.addGlobalEventListener(target,name,decoratePreventDefault(callback));}},{key:'setElementProperty',value:function setElementProperty(renderElement,propertyName,propertyValue){getDOM().setProperty(renderElement,propertyName,propertyValue);}},{key:'setElementAttribute',value:function setElementAttribute(renderElement,attributeName,attributeValue){var attrNs;var nsAndName=splitNamespace(attributeName);if(isPresent$2(nsAndName[0])){attributeName=nsAndName[0]+':'+nsAndName[1];attrNs=NAMESPACE_URIS[nsAndName[0]];}if(isPresent$2(attributeValue)){if(isPresent$2(attrNs)){getDOM().setAttributeNS(renderElement,attrNs,attributeName,attributeValue);}else{getDOM().setAttribute(renderElement,attributeName,attributeValue);}}else{if(isPresent$2(attrNs)){getDOM().removeAttributeNS(renderElement,attrNs,nsAndName[1]);}else{getDOM().removeAttribute(renderElement,attributeName);}}}},{key:'setBindingDebugInfo',value:function setBindingDebugInfo(renderElement,propertyName,propertyValue){var dashCasedPropertyName=camelCaseToDashCase(propertyName);if(getDOM().isCommentNode(renderElement)){var existingBindings=RegExpWrapper$2.firstMatch(TEMPLATE_BINDINGS_EXP,StringWrapper$2.replaceAll(getDOM().getText(renderElement),/\n/g,''));var parsedBindings=Json$2.parse(existingBindings[1]);parsedBindings[dashCasedPropertyName]=propertyValue;getDOM().setText(renderElement,StringWrapper$2.replace(TEMPLATE_COMMENT_TEXT,'{}',Json$2.stringify(parsedBindings)));}else{this.setElementAttribute(renderElement,propertyName,propertyValue);}}},{key:'setElementClass',value:function setElementClass(renderElement,className,isAdd){if(isAdd){getDOM().addClass(renderElement,className);}else{getDOM().removeClass(renderElement,className);}}},{key:'setElementStyle',value:function setElementStyle(renderElement,styleName,styleValue){if(isPresent$2(styleValue)){getDOM().setStyle(renderElement,styleName,stringify$2(styleValue));}else{getDOM().removeStyle(renderElement,styleName);}}},{key:'invokeElementMethod',value:function invokeElementMethod(renderElement,methodName,args){getDOM().invoke(renderElement,methodName,args);}},{key:'setText',value:function setText(renderNode,text){getDOM().setText(renderNode,text);}},{key:'animate',value:function animate(element,startingStyles,keyframes,duration,delay,easing){return this._animationDriver.animate(element,startingStyles,keyframes,duration,delay,easing);}}]);return DomRenderer;}();function moveNodesAfterSibling(sibling/** TODO #9100 */,nodes/** TODO #9100 */){var parent=getDOM().parentElement(sibling);if(nodes.length>0&&isPresent$2(parent)){var nextSibling=getDOM().nextSibling(sibling);if(isPresent$2(nextSibling)){for(var i=0;i<nodes.length;i++){getDOM().insertBefore(nextSibling,nodes[i]);}}else{for(var i=0;i<nodes.length;i++){getDOM().appendChild(parent,nodes[i]);}}}}function appendNodes(parent/** TODO #9100 */,nodes/** TODO #9100 */){for(var i=0;i<nodes.length;i++){getDOM().appendChild(parent,nodes[i]);}}function decoratePreventDefault(eventHandler){return function(event/** TODO #9100 */){var allowDefaultBehavior=eventHandler(event);if(allowDefaultBehavior===false){// TODO(tbosch): move preventDefault into event plugins...
getDOM().preventDefault(event);}};}var COMPONENT_REGEX=/%COMP%/g;var COMPONENT_VARIABLE='%COMP%';var HOST_ATTR='_nghost-'+COMPONENT_VARIABLE;var CONTENT_ATTR='_ngcontent-'+COMPONENT_VARIABLE;function _shimContentAttribute(componentShortId){return StringWrapper$2.replaceAll(CONTENT_ATTR,COMPONENT_REGEX,componentShortId);}function _shimHostAttribute(componentShortId){return StringWrapper$2.replaceAll(HOST_ATTR,COMPONENT_REGEX,componentShortId);}function _flattenStyles(compId,styles,target){for(var i=0;i<styles.length;i++){var style=styles[i];if(isArray$3(style)){_flattenStyles(compId,style,target);}else{style=StringWrapper$2.replaceAll(style,COMPONENT_REGEX,compId);target.push(style);}}return target;}var NS_PREFIX_RE=/^:([^:]+):(.+)/g;function splitNamespace(name){if(name[0]!=':'){return[null,name];}var match=RegExpWrapper$2.firstMatch(NS_PREFIX_RE,name);return[match[1],match[2]];}var CORE_TOKENS={'ApplicationRef':ApplicationRef,'NgZone':NgZone};var INSPECT_GLOBAL_NAME='ng.probe';var CORE_TOKENS_GLOBAL_NAME='ng.coreTokens';/**
   * Returns a {@link DebugElement} for the given native DOM element, or
   * null if the given native element does not have an Angular view associated
   * with it.
   */function inspectNativeElement(element/** TODO #9100 */){return getDebugNode(element);}function _createConditionalRootRenderer(rootRenderer/** TODO #9100 */){if(isDevMode()){return _createRootRenderer(rootRenderer);}return rootRenderer;}function _createRootRenderer(rootRenderer/** TODO #9100 */){getDOM().setGlobalVar(INSPECT_GLOBAL_NAME,inspectNativeElement);getDOM().setGlobalVar(CORE_TOKENS_GLOBAL_NAME,CORE_TOKENS);return new DebugDomRootRenderer$1(rootRenderer);}/**
   * Providers which support debugging Angular applications (e.g. via `ng.probe`).
   */var ELEMENT_PROBE_PROVIDERS=[{provide:RootRenderer,useFactory:_createConditionalRootRenderer,deps:[DomRootRenderer]}];var DomEventsPlugin=function(_EventManagerPlugin){_inherits(DomEventsPlugin,_EventManagerPlugin);function DomEventsPlugin(){_classCallCheck(this,DomEventsPlugin);return _possibleConstructorReturn(this,Object.getPrototypeOf(DomEventsPlugin).apply(this,arguments));}_createClass(DomEventsPlugin,[{key:'supports',// This plugin should come last in the list of plugins, because it accepts all
// events.
value:function supports(eventName){return true;}},{key:'addEventListener',value:function addEventListener(element,eventName,handler){var zone=this.manager.getZone();var outsideHandler=function outsideHandler(event/** TODO #9100 */){return zone.runGuarded(function(){return handler(event);});};return this.manager.getZone().runOutsideAngular(function(){return getDOM().onAndCancel(element,eventName,outsideHandler);});}},{key:'addGlobalEventListener',value:function addGlobalEventListener(target,eventName,handler){var element=getDOM().getGlobalEventTarget(target);var zone=this.manager.getZone();var outsideHandler=function outsideHandler(event/** TODO #9100 */){return zone.runGuarded(function(){return handler(event);});};return this.manager.getZone().runOutsideAngular(function(){return getDOM().onAndCancel(element,eventName,outsideHandler);});}}]);return DomEventsPlugin;}(EventManagerPlugin);/** @nocollapse */DomEventsPlugin.decorators=[{type:Injectable}];var _eventNames={// pan
'pan':true,'panstart':true,'panmove':true,'panend':true,'pancancel':true,'panleft':true,'panright':true,'panup':true,'pandown':true,// pinch
'pinch':true,'pinchstart':true,'pinchmove':true,'pinchend':true,'pinchcancel':true,'pinchin':true,'pinchout':true,// press
'press':true,'pressup':true,// rotate
'rotate':true,'rotatestart':true,'rotatemove':true,'rotateend':true,'rotatecancel':true,// swipe
'swipe':true,'swipeleft':true,'swiperight':true,'swipeup':true,'swipedown':true,// tap
'tap':true};var HammerGesturesPluginCommon=function(_EventManagerPlugin2){_inherits(HammerGesturesPluginCommon,_EventManagerPlugin2);function HammerGesturesPluginCommon(){_classCallCheck(this,HammerGesturesPluginCommon);return _possibleConstructorReturn(this,Object.getPrototypeOf(HammerGesturesPluginCommon).call(this));}_createClass(HammerGesturesPluginCommon,[{key:'supports',value:function supports(eventName){eventName=eventName.toLowerCase();return StringMapWrapper$2.contains(_eventNames,eventName);}}]);return HammerGesturesPluginCommon;}(EventManagerPlugin);var HAMMER_GESTURE_CONFIG=new OpaqueToken('HammerGestureConfig');var HammerGestureConfig=function(){function HammerGestureConfig(){_classCallCheck(this,HammerGestureConfig);this.events=[];this.overrides={};}_createClass(HammerGestureConfig,[{key:'buildHammer',value:function buildHammer(element){var mc=new Hammer(element);mc.get('pinch').set({enable:true});mc.get('rotate').set({enable:true});for(var eventName in this.overrides){mc.get(eventName).set(this.overrides[eventName]);}return mc;}}]);return HammerGestureConfig;}();/** @nocollapse */HammerGestureConfig.decorators=[{type:Injectable}];var HammerGesturesPlugin=function(_HammerGesturesPlugin){_inherits(HammerGesturesPlugin,_HammerGesturesPlugin);function HammerGesturesPlugin(_config){_classCallCheck(this,HammerGesturesPlugin);var _this104=_possibleConstructorReturn(this,Object.getPrototypeOf(HammerGesturesPlugin).call(this));_this104._config=_config;return _this104;}_createClass(HammerGesturesPlugin,[{key:'supports',value:function supports(eventName){if(!_get(Object.getPrototypeOf(HammerGesturesPlugin.prototype),'supports',this).call(this,eventName)&&!this.isCustomEvent(eventName))return false;if(!isPresent$2(window['Hammer'])){throw new BaseException$2('Hammer.js is not loaded, can not bind '+eventName+' event');}return true;}},{key:'addEventListener',value:function addEventListener(element,eventName,handler){var _this105=this;var zone=this.manager.getZone();eventName=eventName.toLowerCase();return zone.runOutsideAngular(function(){// Creating the manager bind events, must be done outside of angular
var mc=_this105._config.buildHammer(element);var callback=function callback(eventObj/** TODO #???? */){zone.runGuarded(function(){handler(eventObj);});};mc.on(eventName,callback);return function(){mc.off(eventName,callback);};});}},{key:'isCustomEvent',value:function isCustomEvent(eventName){return this._config.events.indexOf(eventName)>-1;}}]);return HammerGesturesPlugin;}(HammerGesturesPluginCommon);/** @nocollapse */HammerGesturesPlugin.decorators=[{type:Injectable}];/** @nocollapse */HammerGesturesPlugin.ctorParameters=[{type:HammerGestureConfig,decorators:[{type:Inject,args:[HAMMER_GESTURE_CONFIG]}]}];var modifierKeys=['alt','control','meta','shift'];var modifierKeyGetters={'alt':function alt(event){return event.altKey;},'control':function control(event){return event.ctrlKey;},'meta':function meta(event){return event.metaKey;},'shift':function shift(event){return event.shiftKey;}};var KeyEventsPlugin=function(_EventManagerPlugin3){_inherits(KeyEventsPlugin,_EventManagerPlugin3);function KeyEventsPlugin(){_classCallCheck(this,KeyEventsPlugin);return _possibleConstructorReturn(this,Object.getPrototypeOf(KeyEventsPlugin).call(this));}_createClass(KeyEventsPlugin,[{key:'supports',value:function supports(eventName){return isPresent$2(KeyEventsPlugin.parseEventName(eventName));}},{key:'addEventListener',value:function addEventListener(element,eventName,handler){var parsedEvent=KeyEventsPlugin.parseEventName(eventName);var outsideHandler=KeyEventsPlugin.eventCallback(element,StringMapWrapper$2.get(parsedEvent,'fullKey'),handler,this.manager.getZone());return this.manager.getZone().runOutsideAngular(function(){return getDOM().onAndCancel(element,StringMapWrapper$2.get(parsedEvent,'domEventName'),outsideHandler);});}}],[{key:'parseEventName',value:function parseEventName(eventName){var parts=eventName.toLowerCase().split('.');var domEventName=parts.shift();if(parts.length===0||!(StringWrapper$2.equals(domEventName,'keydown')||StringWrapper$2.equals(domEventName,'keyup'))){return null;}var key=KeyEventsPlugin._normalizeKey(parts.pop());var fullKey='';modifierKeys.forEach(function(modifierName){if(ListWrapper$2.contains(parts,modifierName)){ListWrapper$2.remove(parts,modifierName);fullKey+=modifierName+'.';}});fullKey+=key;if(parts.length!=0||key.length===0){// returning null instead of throwing to let another plugin process the event
return null;}var result=StringMapWrapper$2.create();StringMapWrapper$2.set(result,'domEventName',domEventName);StringMapWrapper$2.set(result,'fullKey',fullKey);return result;}},{key:'getEventFullKey',value:function getEventFullKey(event){var fullKey='';var key=getDOM().getEventKey(event);key=key.toLowerCase();if(StringWrapper$2.equals(key,' ')){key='space';// for readability
}else if(StringWrapper$2.equals(key,'.')){key='dot';// because '.' is used as a separator in event names
}modifierKeys.forEach(function(modifierName){if(modifierName!=key){var modifierGetter=StringMapWrapper$2.get(modifierKeyGetters,modifierName);if(modifierGetter(event)){fullKey+=modifierName+'.';}}});fullKey+=key;return fullKey;}},{key:'eventCallback',value:function eventCallback(element,fullKey,handler,zone){return function(event/** TODO #9100 */){if(StringWrapper$2.equals(KeyEventsPlugin.getEventFullKey(event),fullKey)){zone.runGuarded(function(){return handler(event);});}};}/** @internal */},{key:'_normalizeKey',value:function _normalizeKey(keyName){// TODO: switch to a StringMap if the mapping grows too much
switch(keyName){case'esc':return'escape';default:return keyName;}}}]);return KeyEventsPlugin;}(EventManagerPlugin);/** @nocollapse */KeyEventsPlugin.decorators=[{type:Injectable}];/** @nocollapse */KeyEventsPlugin.ctorParameters=[];/**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * This regular expression matches a subset of URLs that will not cause script
   * execution if used in URL context within a HTML document. Specifically, this
   * regular expression matches if (comment from here on and regex copied from
   * Soy's EscapingConventions):
   * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
   * (2) or no protocol.  A protocol must be followed by a colon. The below
   *     allows that by allowing colons only after one of the characters [/?#].
   *     A colon after a hash (#) must be in the fragment.
   *     Otherwise, a colon after a (?) must be in a query.
   *     Otherwise, a colon after a single solidus (/) must be in a path.
   *     Otherwise, a colon after a double solidus (//) must be in the authority
   *     (before port).
   *
   * The pattern disallows &, used in HTML entity declarations before
   * one of the characters in [/?#]. This disallows HTML entities used in the
   * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
   * It also disallows HTML entities in the first path part of a relative path,
   * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
   * that. More importantly, it disallows masking of a colon,
   * e.g. "javascript&#58;...".
   *
   * This regular expression was taken from the Closure sanitization library.
   */var SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;/** A pattern that matches safe data URLs. Only matches image and video types. */var DATA_URL_PATTERN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm));base64,[a-z0-9+\/]+=*$/i;function sanitizeUrl(url){url=String(url);if(url.match(SAFE_URL_PATTERN)||url.match(DATA_URL_PATTERN))return url;if(isDevMode())getDOM().log('WARNING: sanitizing unsafe URL value '+url);return'unsafe:'+url;}/** A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below. */var inertElement=null;/** Lazily initialized to make sure the DOM adapter gets set before use. */var DOM=null;/** Returns an HTML element that is guaranteed to not execute code when creating elements in it. */function getInertElement(){if(inertElement)return inertElement;DOM=getDOM();// Prefer using <template> element if supported.
var templateEl=DOM.createElement('template');if('content'in templateEl)return templateEl;var doc=DOM.createHtmlDocument();inertElement=DOM.querySelector(doc,'body');if(inertElement==null){// usually there should be only one body element in the document, but IE doesn't have any, so we
// need to create one.
var html=DOM.createElement('html',doc);inertElement=DOM.createElement('body',doc);DOM.appendChild(html,inertElement);DOM.appendChild(doc,html);}return inertElement;}function tagSet(tags){var res={};var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=tags.split(',')[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var t=_step3.value;res[t.toLowerCase()]=true;}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}return res;}function merge(){var res={};for(var _len7=arguments.length,sets=Array(_len7),_key7=0;_key7<_len7;_key7++){sets[_key7]=arguments[_key7];}var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=sets[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var s=_step4.value;for(var v in s){if(s.hasOwnProperty(v))res[v]=true;}}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}return res;}// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements
// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var VOID_ELEMENTS=tagSet('area,br,col,hr,img,wbr');// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var OPTIONAL_END_TAG_BLOCK_ELEMENTS=tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');var OPTIONAL_END_TAG_INLINE_ELEMENTS=tagSet('rp,rt');var OPTIONAL_END_TAG_ELEMENTS=merge(OPTIONAL_END_TAG_INLINE_ELEMENTS,OPTIONAL_END_TAG_BLOCK_ELEMENTS);// Safe Block Elements - HTML5
var BLOCK_ELEMENTS=merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS,tagSet('address,article,'+'aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,'+'h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul'));// Inline Elements - HTML5
var INLINE_ELEMENTS=merge(OPTIONAL_END_TAG_INLINE_ELEMENTS,tagSet('a,abbr,acronym,b,'+'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,'+'samp,small,span,strike,strong,sub,sup,time,tt,u,var'));var VALID_ELEMENTS=merge(VOID_ELEMENTS,BLOCK_ELEMENTS,INLINE_ELEMENTS,OPTIONAL_END_TAG_ELEMENTS);// Attributes that have href and hence need to be sanitized
var URI_ATTRS=tagSet('background,cite,href,longdesc,src,xlink:href');var HTML_ATTRS=tagSet('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,'+'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,'+'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,'+'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,'+'valign,value,vspace,width');// NB: This currently conciously doesn't support SVG. SVG sanitization has had several security
// issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
// innerHTML is required, SVG attributes should be added here.
// NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
// can be sanitized, but they increase security surface area without a legitimate use case, so they
// are left out here.
var VALID_ATTRS=merge(URI_ATTRS,HTML_ATTRS);/**
   * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
   * attributes.
   */var SanitizingHtmlSerializer=function(){function SanitizingHtmlSerializer(){_classCallCheck(this,SanitizingHtmlSerializer);this.buf=[];}_createClass(SanitizingHtmlSerializer,[{key:'sanitizeChildren',value:function sanitizeChildren(el){// This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
// However this code never accesses properties off of `document` before deleting its contents
// again, so it shouldn't be vulnerable to DOM clobbering.
var current=el.firstChild;while(current){if(DOM.isElementNode(current)){this.startElement(current);}else if(DOM.isTextNode(current)){this.chars(DOM.nodeValue(current));}if(DOM.firstChild(current)){current=DOM.firstChild(current);continue;}while(current){// Leaving the element. Walk up and to the right, closing tags as we go.
if(DOM.isElementNode(current)){this.endElement(DOM.nodeName(current).toLowerCase());}if(DOM.nextSibling(current)){current=DOM.nextSibling(current);break;}current=DOM.parentElement(current);}}return this.buf.join('');}},{key:'startElement',value:function startElement(element){var _this107=this;var tagName=DOM.nodeName(element).toLowerCase();tagName=tagName.toLowerCase();if(VALID_ELEMENTS.hasOwnProperty(tagName)){this.buf.push('<');this.buf.push(tagName);DOM.attributeMap(element).forEach(function(value,attrName){var lower=attrName.toLowerCase();if(!VALID_ATTRS.hasOwnProperty(lower))return;// TODO(martinprobst): Special case image URIs for data:image/...
if(URI_ATTRS[lower])value=sanitizeUrl(value);_this107.buf.push(' ');_this107.buf.push(attrName);_this107.buf.push('="');_this107.buf.push(encodeEntities(value));_this107.buf.push('"');});this.buf.push('>');}}},{key:'endElement',value:function endElement(tagName){tagName=tagName.toLowerCase();if(VALID_ELEMENTS.hasOwnProperty(tagName)&&!VOID_ELEMENTS.hasOwnProperty(tagName)){this.buf.push('</');this.buf.push(tagName);this.buf.push('>');}}},{key:'chars',value:function chars(_chars/** TODO #9100 */){this.buf.push(encodeEntities(_chars));}}]);return SanitizingHtmlSerializer;}();// Regular Expressions for parsing tags and attributes
var SURROGATE_PAIR_REGEXP=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;// ! to ~ is the ASCII range.
var NON_ALPHANUMERIC_REGEXP=/([^\#-~ |!])/g;/**
   * Escapes all potentially dangerous characters, so that the
   * resulting string can be safely inserted into attribute or
   * element text.
   * @param value
   * @returns {string} escaped text
   */function encodeEntities(value/** TODO #9100 */){return value.replace(/&/g,'&amp;').replace(SURROGATE_PAIR_REGEXP,function(match/** TODO #9100 */){var hi=match.charCodeAt(0);var low=match.charCodeAt(1);return'&#'+((hi-0xD800)*0x400+(low-0xDC00)+0x10000)+';';}).replace(NON_ALPHANUMERIC_REGEXP,function(match/** TODO #9100 */){return'&#'+match.charCodeAt(0)+';';}).replace(/</g,'&lt;').replace(/>/g,'&gt;');}/**
   * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
   * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo').
   *
   * This is undesirable since we don't want to allow any of these custom attributes. This method
   * strips them all.
   */function stripCustomNsAttrs(el){DOM.attributeMap(el).forEach(function(_,attrName){if(attrName==='xmlns:ns1'||attrName.indexOf('ns1:')===0){DOM.removeAttribute(el,attrName);}});var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=DOM.childNodesAsList(el)[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var n=_step5.value;if(DOM.isElementNode(n))stripCustomNsAttrs(n);}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}}/**
   * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
   * the DOM in a browser environment.
   */function sanitizeHtml(unsafeHtml){try{var containerEl=getInertElement();// Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
unsafeHtml=unsafeHtml?String(unsafeHtml):'';// mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
// trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
var mXSSAttempts=5;var parsedHtml=unsafeHtml;do{if(mXSSAttempts===0){throw new Error('Failed to sanitize html because the input is unstable');}mXSSAttempts--;unsafeHtml=parsedHtml;DOM.setInnerHTML(containerEl,unsafeHtml);if(DOM.defaultDoc().documentMode){// strip custom-namespaced attributes on IE<=11
stripCustomNsAttrs(containerEl);}parsedHtml=DOM.getInnerHTML(containerEl);}while(unsafeHtml!==parsedHtml);var sanitizer=new SanitizingHtmlSerializer();var safeHtml=sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl)||containerEl);// Clear out the body element.
var parent=DOM.getTemplateContent(containerEl)||containerEl;var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=DOM.childNodesAsList(parent)[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var child=_step6.value;DOM.removeChild(parent,child);}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}if(isDevMode()&&safeHtml!==unsafeHtml){DOM.log('WARNING: sanitizing HTML stripped some content.');}return safeHtml;}catch(e){// In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
inertElement=null;throw e;}}/**
   * Regular expression for safe style values.
   *
   * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
   *
   * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
   * font-family) and hence could allow multiple values to get injected, but that should pose no risk
   * of XSS.
   *
   * The function expression checks only for XSS safety, not for CSS validity.
   *
   * This regular expression was taken from the Closure sanitization library, and augmented for
   * transformation values.
   */var VALUES='[-,."\'%_!# a-zA-Z0-9]+';var TRANSFORMATION_FNS='(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';var COLOR_FNS='(?:rgb|hsl)a?';var FN_ARGS='\\([-0-9.%, a-zA-Z]+\\)';var SAFE_STYLE_VALUE=new RegExp('^('+VALUES+'|(?:'+TRANSFORMATION_FNS+'|'+COLOR_FNS+')'+FN_ARGS+')$','g');/**
   * Matches a `url(...)` value with an arbitrary argument as long as it does
   * not contain parentheses.
   *
   * The URL value still needs to be sanitized separately.
   *
   * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
   * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
   * by observing whether scroll bars are displayed, or character ranges used by a font face
   * definition.
   *
   * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
   * binding a URL value without further cooperation from the page will cause an information leak, and
   * if so, it is just a leak, not a full blown XSS vulnerability.
   *
   * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
   * code is permissive and allows URLs that sanitize otherwise.
   */var URL_RE=/^url\(([^)]+)\)$/;/**
   * Checks that quotes (" and ') are properly balanced inside a string. Assumes
   * that neither escape (\) nor any other character that could result in
   * breaking out of a string parsing context are allowed;
   * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
   *
   * This code was taken from the Closure sanitization library.
   */function hasBalancedQuotes(value){var outsideSingle=true;var outsideDouble=true;for(var i=0;i<value.length;i++){var c=value.charAt(i);if(c==='\''&&outsideDouble){outsideSingle=!outsideSingle;}else if(c==='"'&&outsideSingle){outsideDouble=!outsideDouble;}}return outsideSingle&&outsideDouble;}/**
   * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
   * value) and returns a value that is safe to use in a browser environment.
   */function sanitizeStyle(value){value=String(value).trim();// Make sure it's actually a string.
// Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
// reasoning behind this.
var urlMatch=URL_RE.exec(value);if(urlMatch&&sanitizeUrl(urlMatch[1])===urlMatch[1]||value.match(SAFE_STYLE_VALUE)&&hasBalancedQuotes(value)){return value;// Safe style values.
}if(isDevMode())getDOM().log('WARNING: sanitizing unsafe style value '+value);return'unsafe';}/**
   * DomSanitizationService helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
   * values to be safe to use in the different DOM contexts.
   *
   * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
   * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
   * the website.
   *
   * In specific situations, it might be necessary to disable sanitization, for example if the
   * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
   * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
   * methods, and then binding to that value from the template.
   *
   * These situations should be very rare, and extraordinary care must be taken to avoid creating a
   * Cross Site Scripting (XSS) security bug!
   *
   * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
   * close as possible to the source of the value, to make it easy to verify no security bug is
   * created by its use.
   *
   * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
   * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
   * code. The sanitizer leaves safe values intact.
   */var DomSanitizationService=function DomSanitizationService(){_classCallCheck(this,DomSanitizationService);};var DomSanitizationServiceImpl=function(_DomSanitizationServi){_inherits(DomSanitizationServiceImpl,_DomSanitizationServi);function DomSanitizationServiceImpl(){_classCallCheck(this,DomSanitizationServiceImpl);return _possibleConstructorReturn(this,Object.getPrototypeOf(DomSanitizationServiceImpl).apply(this,arguments));}_createClass(DomSanitizationServiceImpl,[{key:'sanitize',value:function sanitize(ctx,value){if(value==null)return null;switch(ctx){case SecurityContext$1.NONE:return value;case SecurityContext$1.HTML:if(value instanceof SafeHtmlImpl)return value.changingThisBreaksApplicationSecurity;this.checkNotSafeValue(value,'HTML');return sanitizeHtml(String(value));case SecurityContext$1.STYLE:if(value instanceof SafeStyleImpl)return value.changingThisBreaksApplicationSecurity;this.checkNotSafeValue(value,'Style');return sanitizeStyle(value);case SecurityContext$1.SCRIPT:if(value instanceof SafeScriptImpl)return value.changingThisBreaksApplicationSecurity;this.checkNotSafeValue(value,'Script');throw new Error('unsafe value used in a script context');case SecurityContext$1.URL:if(value instanceof SafeUrlImpl)return value.changingThisBreaksApplicationSecurity;this.checkNotSafeValue(value,'URL');return sanitizeUrl(String(value));case SecurityContext$1.RESOURCE_URL:if(value instanceof SafeResourceUrlImpl){return value.changingThisBreaksApplicationSecurity;}this.checkNotSafeValue(value,'ResourceURL');throw new Error('unsafe value used in a resource URL context');default:throw new Error('Unexpected SecurityContext '+ctx);}}},{key:'checkNotSafeValue',value:function checkNotSafeValue(value,expectedType){if(value instanceof SafeValueImpl){throw new Error('Required a safe '+expectedType+', got a '+value.getTypeName());}}},{key:'bypassSecurityTrustHtml',value:function bypassSecurityTrustHtml(value){return new SafeHtmlImpl(value);}},{key:'bypassSecurityTrustStyle',value:function bypassSecurityTrustStyle(value){return new SafeStyleImpl(value);}},{key:'bypassSecurityTrustScript',value:function bypassSecurityTrustScript(value){return new SafeScriptImpl(value);}},{key:'bypassSecurityTrustUrl',value:function bypassSecurityTrustUrl(value){return new SafeUrlImpl(value);}},{key:'bypassSecurityTrustResourceUrl',value:function bypassSecurityTrustResourceUrl(value){return new SafeResourceUrlImpl(value);}}]);return DomSanitizationServiceImpl;}(DomSanitizationService);/** @nocollapse */DomSanitizationServiceImpl.decorators=[{type:Injectable}];var SafeValueImpl=function(){function SafeValueImpl(changingThisBreaksApplicationSecurity){_classCallCheck(this,SafeValueImpl);this.changingThisBreaksApplicationSecurity=changingThisBreaksApplicationSecurity;// empty
}_createClass(SafeValueImpl,[{key:'toString',value:function toString(){return'SafeValue must use [property]=binding: '+this.changingThisBreaksApplicationSecurity;}}]);return SafeValueImpl;}();var SafeHtmlImpl=function(_SafeValueImpl){_inherits(SafeHtmlImpl,_SafeValueImpl);function SafeHtmlImpl(){_classCallCheck(this,SafeHtmlImpl);return _possibleConstructorReturn(this,Object.getPrototypeOf(SafeHtmlImpl).apply(this,arguments));}_createClass(SafeHtmlImpl,[{key:'getTypeName',value:function getTypeName(){return'HTML';}}]);return SafeHtmlImpl;}(SafeValueImpl);var SafeStyleImpl=function(_SafeValueImpl2){_inherits(SafeStyleImpl,_SafeValueImpl2);function SafeStyleImpl(){_classCallCheck(this,SafeStyleImpl);return _possibleConstructorReturn(this,Object.getPrototypeOf(SafeStyleImpl).apply(this,arguments));}_createClass(SafeStyleImpl,[{key:'getTypeName',value:function getTypeName(){return'Style';}}]);return SafeStyleImpl;}(SafeValueImpl);var SafeScriptImpl=function(_SafeValueImpl3){_inherits(SafeScriptImpl,_SafeValueImpl3);function SafeScriptImpl(){_classCallCheck(this,SafeScriptImpl);return _possibleConstructorReturn(this,Object.getPrototypeOf(SafeScriptImpl).apply(this,arguments));}_createClass(SafeScriptImpl,[{key:'getTypeName',value:function getTypeName(){return'Script';}}]);return SafeScriptImpl;}(SafeValueImpl);var SafeUrlImpl=function(_SafeValueImpl4){_inherits(SafeUrlImpl,_SafeValueImpl4);function SafeUrlImpl(){_classCallCheck(this,SafeUrlImpl);return _possibleConstructorReturn(this,Object.getPrototypeOf(SafeUrlImpl).apply(this,arguments));}_createClass(SafeUrlImpl,[{key:'getTypeName',value:function getTypeName(){return'URL';}}]);return SafeUrlImpl;}(SafeValueImpl);var SafeResourceUrlImpl=function(_SafeValueImpl5){_inherits(SafeResourceUrlImpl,_SafeValueImpl5);function SafeResourceUrlImpl(){_classCallCheck(this,SafeResourceUrlImpl);return _possibleConstructorReturn(this,Object.getPrototypeOf(SafeResourceUrlImpl).apply(this,arguments));}_createClass(SafeResourceUrlImpl,[{key:'getTypeName',value:function getTypeName(){return'ResourceURL';}}]);return SafeResourceUrlImpl;}(SafeValueImpl);var WebAnimationsPlayer=function(){function WebAnimationsPlayer(_player,totalTime){var _this114=this;_classCallCheck(this,WebAnimationsPlayer);this._player=_player;this.totalTime=totalTime;this._subscriptions=[];this._finished=false;this.parentPlayer=null;// this is required to make the player startable at a later time
this.reset();this._player.onfinish=function(){return _this114._onFinish();};}_createClass(WebAnimationsPlayer,[{key:'_onFinish',value:function _onFinish(){if(!this._finished){this._finished=true;if(!isPresent$2(this.parentPlayer)){this.destroy();}this._subscriptions.forEach(function(fn){return fn();});this._subscriptions=[];}}},{key:'onDone',value:function onDone(fn){this._subscriptions.push(fn);}},{key:'play',value:function play(){this._player.play();}},{key:'pause',value:function pause(){this._player.pause();}},{key:'finish',value:function finish(){this._onFinish();this._player.finish();}},{key:'reset',value:function reset(){this._player.cancel();}},{key:'restart',value:function restart(){this.reset();this.play();}},{key:'destroy',value:function destroy(){this.reset();this._onFinish();}},{key:'setPosition',value:function setPosition(p/** TODO #9100 */){this._player.currentTime=p*this.totalTime;}},{key:'getPosition',value:function getPosition(){return this._player.currentTime/this.totalTime;}}]);return WebAnimationsPlayer;}();var WebAnimationsDriver=function(){function WebAnimationsDriver(){_classCallCheck(this,WebAnimationsDriver);}_createClass(WebAnimationsDriver,[{key:'animate',value:function animate(element,startingStyles,keyframes,duration,delay,easing){var anyElm=element;var formattedSteps=[];var startingStyleLookup={};if(isPresent$2(startingStyles)&&startingStyles.styles.length>0){startingStyleLookup=_populateStyles(anyElm,startingStyles,{});startingStyleLookup['offset']=0;formattedSteps.push(startingStyleLookup);}keyframes.forEach(function(keyframe){var data=_populateStyles(anyElm,keyframe.styles,startingStyleLookup);data['offset']=keyframe.offset;formattedSteps.push(data);});// this is a special case when only styles are applied as an
// animation. When this occurs we want to animate from start to
// end with the same values. Removing the offset and having only
// start/end values is suitable enough for the web-animations API
if(formattedSteps.length==1){var start=formattedSteps[0];start['offset']=null;formattedSteps=[start,start];}var playerOptions={'duration':duration,'delay':delay,'fill':'both'// we use `both` because it allows for styling at 0% to work with `delay`
};var player=this._triggerWebAnimation(anyElm,formattedSteps,playerOptions);return new WebAnimationsPlayer(player,duration);}/** @internal */},{key:'_triggerWebAnimation',value:function _triggerWebAnimation(elm,keyframes,options){return elm.animate(keyframes,options);}}]);return WebAnimationsDriver;}();function _populateStyles(element,styles,defaultStyles){var data={};styles.styles.forEach(function(entry){StringMapWrapper$2.forEach(entry,function(val,prop){var formattedProp=dashCaseToCamelCase(prop);data[formattedProp]=val==AUTO_STYLE?_computeStyle(element,formattedProp):val.toString()+_resolveStyleUnit(val,prop,formattedProp);});});StringMapWrapper$2.forEach(defaultStyles,function(value,prop){if(!isPresent$2(data[prop])){data[prop]=value;}});return data;}function _resolveStyleUnit(val,userProvidedProp,formattedProp){var unit='';if(_isPixelDimensionStyle(formattedProp)&&val!=0&&val!='0'){if(isNumber$2(val)){unit='px';}else if(_findDimensionalSuffix(val.toString()).length==0){throw new BaseException('Please provide a CSS unit value for '+userProvidedProp+':'+val);}}return unit;}var _$0=48;var _$9=57;var _$PERIOD=46;function _findDimensionalSuffix(value){for(var i=0;i<value.length;i++){var c=StringWrapper$2.charCodeAt(value,i);if(c>=_$0&&c<=_$9||c==_$PERIOD)continue;return value.substring(i,value.length);}return'';}function _isPixelDimensionStyle(prop){switch(prop){case'width':case'height':case'minWidth':case'minHeight':case'maxWidth':case'maxHeight':case'left':case'top':case'bottom':case'right':case'fontSize':case'outlineWidth':case'outlineOffset':case'paddingTop':case'paddingLeft':case'paddingBottom':case'paddingRight':case'marginTop':case'marginLeft':case'marginBottom':case'marginRight':case'borderRadius':case'borderWidth':case'borderTopWidth':case'borderLeftWidth':case'borderRightWidth':case'borderBottomWidth':case'textIndent':return true;default:return false;}}function _computeStyle(element,prop){return getDOM().getComputedStyle(element)[prop];}/**
   * Provides DOM operations in any browser environment.
   */var GenericBrowserDomAdapter=function(_DomAdapter){_inherits(GenericBrowserDomAdapter,_DomAdapter);function GenericBrowserDomAdapter(){_classCallCheck(this,GenericBrowserDomAdapter);var _this115=_possibleConstructorReturn(this,Object.getPrototypeOf(GenericBrowserDomAdapter).call(this));_this115._animationPrefix=null;_this115._transitionEnd=null;try{var element=_this115.createElement('div',_this115.defaultDoc());if(isPresent$2(_this115.getStyle(element,'animationName'))){_this115._animationPrefix='';}else{var domPrefixes=['Webkit','Moz','O','ms'];for(var i=0;i<domPrefixes.length;i++){if(isPresent$2(_this115.getStyle(element,domPrefixes[i]+'AnimationName'))){_this115._animationPrefix='-'+domPrefixes[i].toLowerCase()+'-';break;}}}var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'};StringMapWrapper$2.forEach(transEndEventNames,function(value,key){if(isPresent$2(_this115.getStyle(element,key))){_this115._transitionEnd=value;}});}catch(e){_this115._animationPrefix=null;_this115._transitionEnd=null;}return _this115;}_createClass(GenericBrowserDomAdapter,[{key:'getDistributedNodes',value:function getDistributedNodes(el){return el.getDistributedNodes();}},{key:'resolveAndSetHref',value:function resolveAndSetHref(el,baseUrl,href){el.href=href==null?baseUrl:baseUrl+'/../'+href;}},{key:'supportsDOMEvents',value:function supportsDOMEvents(){return true;}},{key:'supportsNativeShadowDOM',value:function supportsNativeShadowDOM(){return isFunction$3(this.defaultDoc().body.createShadowRoot);}},{key:'getAnimationPrefix',value:function getAnimationPrefix(){return isPresent$2(this._animationPrefix)?this._animationPrefix:'';}},{key:'getTransitionEnd',value:function getTransitionEnd(){return isPresent$2(this._transitionEnd)?this._transitionEnd:'';}},{key:'supportsAnimation',value:function supportsAnimation(){return isPresent$2(this._animationPrefix)&&isPresent$2(this._transitionEnd);}}]);return GenericBrowserDomAdapter;}(DomAdapter);var _attrToPropMap={'class':'className','innerHtml':'innerHTML','readonly':'readOnly','tabindex':'tabIndex'};var DOM_KEY_LOCATION_NUMPAD=3;// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
var _keyMap={// The following values are here for cross-browser compatibility and to match the W3C standard
// cf http://www.w3.org/TR/DOM-Level-3-Events-key/
'\b':'Backspace','\t':'Tab','\x7F':'Delete','\x1B':'Escape','Del':'Delete','Esc':'Escape','Left':'ArrowLeft','Right':'ArrowRight','Up':'ArrowUp','Down':'ArrowDown','Menu':'ContextMenu','Scroll':'ScrollLock','Win':'OS'};// There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...
var _chromeNumKeyPadMap={'A':'1','B':'2','C':'3','D':'4','E':'5','F':'6','G':'7','H':'8','I':'9','J':'*','K':'+','M':'-','N':'.','O':'/','\x60':'0','\x90':'NumLock'};/**
   * A `DomAdapter` powered by full browser DOM APIs.
   *//* tslint:disable:requireParameterType */var BrowserDomAdapter=function(_GenericBrowserDomAda){_inherits(BrowserDomAdapter,_GenericBrowserDomAda);function BrowserDomAdapter(){_classCallCheck(this,BrowserDomAdapter);return _possibleConstructorReturn(this,Object.getPrototypeOf(BrowserDomAdapter).apply(this,arguments));}_createClass(BrowserDomAdapter,[{key:'parse',value:function parse(templateHtml){throw new Error('parse not implemented');}},{key:'hasProperty',value:function hasProperty(element/** TODO #9100 */,name){return name in element;}},{key:'setProperty',value:function setProperty(el,name,value){el[name]=value;}},{key:'getProperty',value:function getProperty(el,name){return el[name];}},{key:'invoke',value:function invoke(el,methodName,args){el[methodName].apply(el,args);}// TODO(tbosch): move this into a separate environment class once we have it
},{key:'logError',value:function logError(error/** TODO #9100 */){if(window.console.error){window.console.error(error);}else{window.console.log(error);}}},{key:'log',value:function log(error/** TODO #9100 */){window.console.log(error);}},{key:'logGroup',value:function logGroup(error/** TODO #9100 */){if(window.console.group){window.console.group(error);this.logError(error);}else{window.console.log(error);}}},{key:'logGroupEnd',value:function logGroupEnd(){if(window.console.groupEnd){window.console.groupEnd();}}},{key:'query',value:function query(selector){return document.querySelector(selector);}},{key:'querySelector',value:function querySelector(el/** TODO #9100 */,selector){return el.querySelector(selector);}},{key:'querySelectorAll',value:function querySelectorAll(el/** TODO #9100 */,selector){return el.querySelectorAll(selector);}},{key:'on',value:function on(el/** TODO #9100 */,evt/** TODO #9100 */,listener/** TODO #9100 */){el.addEventListener(evt,listener,false);}},{key:'onAndCancel',value:function onAndCancel(el/** TODO #9100 */,evt/** TODO #9100 */,listener/** TODO #9100 */){el.addEventListener(evt,listener,false);// Needed to follow Dart's subscription semantic, until fix of
// https://code.google.com/p/dart/issues/detail?id=17406
return function(){el.removeEventListener(evt,listener,false);};}},{key:'dispatchEvent',value:function dispatchEvent(el/** TODO #9100 */,evt/** TODO #9100 */){el.dispatchEvent(evt);}},{key:'createMouseEvent',value:function createMouseEvent(eventType){var evt=document.createEvent('MouseEvent');evt.initEvent(eventType,true,true);return evt;}},{key:'createEvent',value:function createEvent(eventType/** TODO #9100 */){var evt=document.createEvent('Event');evt.initEvent(eventType,true,true);return evt;}},{key:'preventDefault',value:function preventDefault(evt){evt.preventDefault();evt.returnValue=false;}},{key:'isPrevented',value:function isPrevented(evt){return evt.defaultPrevented||isPresent$2(evt.returnValue)&&!evt.returnValue;}},{key:'getInnerHTML',value:function getInnerHTML(el/** TODO #9100 */){return el.innerHTML;}},{key:'getTemplateContent',value:function getTemplateContent(el/** TODO #9100 */){return'content'in el&&el instanceof HTMLTemplateElement?el.content:null;}},{key:'getOuterHTML',value:function getOuterHTML(el/** TODO #9100 */){return el.outerHTML;}},{key:'nodeName',value:function nodeName(node){return node.nodeName;}},{key:'nodeValue',value:function nodeValue(node){return node.nodeValue;}},{key:'type',value:function type(node){return node.type;}},{key:'content',value:function content(node){if(this.hasProperty(node,'content')){return node.content;}else{return node;}}},{key:'firstChild',value:function firstChild(el/** TODO #9100 */){return el.firstChild;}},{key:'nextSibling',value:function nextSibling(el/** TODO #9100 */){return el.nextSibling;}},{key:'parentElement',value:function parentElement(el/** TODO #9100 */){return el.parentNode;}},{key:'childNodes',value:function childNodes(el/** TODO #9100 */){return el.childNodes;}},{key:'childNodesAsList',value:function childNodesAsList(el/** TODO #9100 */){var childNodes=el.childNodes;var res=ListWrapper$2.createFixedSize(childNodes.length);for(var i=0;i<childNodes.length;i++){res[i]=childNodes[i];}return res;}},{key:'clearNodes',value:function clearNodes(el/** TODO #9100 */){while(el.firstChild){el.removeChild(el.firstChild);}}},{key:'appendChild',value:function appendChild(el/** TODO #9100 */,node/** TODO #9100 */){el.appendChild(node);}},{key:'removeChild',value:function removeChild(el/** TODO #9100 */,node/** TODO #9100 */){el.removeChild(node);}},{key:'replaceChild',value:function replaceChild(el,newChild/** TODO #9100 */,oldChild/** TODO #9100 */){el.replaceChild(newChild,oldChild);}},{key:'remove',value:function remove(node/** TODO #9100 */){if(node.parentNode){node.parentNode.removeChild(node);}return node;}},{key:'insertBefore',value:function insertBefore(el/** TODO #9100 */,node/** TODO #9100 */){el.parentNode.insertBefore(node,el);}},{key:'insertAllBefore',value:function insertAllBefore(el/** TODO #9100 */,nodes/** TODO #9100 */){nodes.forEach(function(n/** TODO #9100 */){return el.parentNode.insertBefore(n,el);});}},{key:'insertAfter',value:function insertAfter(el/** TODO #9100 */,node/** TODO #9100 */){el.parentNode.insertBefore(node,el.nextSibling);}},{key:'setInnerHTML',value:function setInnerHTML(el/** TODO #9100 */,value/** TODO #9100 */){el.innerHTML=value;}},{key:'getText',value:function getText(el/** TODO #9100 */){return el.textContent;}// TODO(vicb): removed Element type because it does not support StyleElement
},{key:'setText',value:function setText(el/** TODO #9100 */,value){el.textContent=value;}},{key:'getValue',value:function getValue(el/** TODO #9100 */){return el.value;}},{key:'setValue',value:function setValue(el/** TODO #9100 */,value){el.value=value;}},{key:'getChecked',value:function getChecked(el/** TODO #9100 */){return el.checked;}},{key:'setChecked',value:function setChecked(el/** TODO #9100 */,value){el.checked=value;}},{key:'createComment',value:function createComment(text){return document.createComment(text);}},{key:'createTemplate',value:function createTemplate(html/** TODO #9100 */){var t=document.createElement('template');t.innerHTML=html;return t;}},{key:'createElement',value:function createElement(tagName/* TODO #9100 */){var doc=arguments.length<=1||arguments[1]===undefined?document:arguments[1];return doc.createElement(tagName);}},{key:'createElementNS',value:function createElementNS(ns/* TODO #9100 */,tagName/* TODO #9100 */){var doc=arguments.length<=2||arguments[2]===undefined?document:arguments[2];return doc.createElementNS(ns,tagName);}},{key:'createTextNode',value:function createTextNode(text){var doc=arguments.length<=1||arguments[1]===undefined?document:arguments[1];return doc.createTextNode(text);}},{key:'createScriptTag',value:function createScriptTag(attrName,attrValue){var doc=arguments.length<=2||arguments[2]===undefined?document:arguments[2];var el=doc.createElement('SCRIPT');el.setAttribute(attrName,attrValue);return el;}},{key:'createStyleElement',value:function createStyleElement(css){var doc=arguments.length<=1||arguments[1]===undefined?document:arguments[1];var style=doc.createElement('style');this.appendChild(style,this.createTextNode(css));return style;}},{key:'createShadowRoot',value:function createShadowRoot(el){return el.createShadowRoot();}},{key:'getShadowRoot',value:function getShadowRoot(el){return el.shadowRoot;}},{key:'getHost',value:function getHost(el){return el.host;}},{key:'clone',value:function clone(node){return node.cloneNode(true);}},{key:'getElementsByClassName',value:function getElementsByClassName(element/** TODO #9100 */,name){return element.getElementsByClassName(name);}},{key:'getElementsByTagName',value:function getElementsByTagName(element/** TODO #9100 */,name){return element.getElementsByTagName(name);}},{key:'classList',value:function classList(element/** TODO #9100 */){return Array.prototype.slice.call(element.classList,0);}},{key:'addClass',value:function addClass(element/** TODO #9100 */,className){element.classList.add(className);}},{key:'removeClass',value:function removeClass(element/** TODO #9100 */,className){element.classList.remove(className);}},{key:'hasClass',value:function hasClass(element/** TODO #9100 */,className){return element.classList.contains(className);}},{key:'setStyle',value:function setStyle(element/** TODO #9100 */,styleName,styleValue){element.style[styleName]=styleValue;}},{key:'removeStyle',value:function removeStyle(element/** TODO #9100 */,stylename){element.style[stylename]=null;}},{key:'getStyle',value:function getStyle(element/** TODO #9100 */,stylename){return element.style[stylename];}},{key:'hasStyle',value:function hasStyle(element/** TODO #9100 */,styleName){var styleValue=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var value=this.getStyle(element,styleName)||'';return styleValue?value==styleValue:value.length>0;}},{key:'tagName',value:function tagName(element/** TODO #9100 */){return element.tagName;}},{key:'attributeMap',value:function attributeMap(element/** TODO #9100 */){var res=new Map();var elAttrs=element.attributes;for(var i=0;i<elAttrs.length;i++){var attrib=elAttrs[i];res.set(attrib.name,attrib.value);}return res;}},{key:'hasAttribute',value:function hasAttribute(element/** TODO #9100 */,attribute){return element.hasAttribute(attribute);}},{key:'hasAttributeNS',value:function hasAttributeNS(element/** TODO #9100 */,ns,attribute){return element.hasAttributeNS(ns,attribute);}},{key:'getAttribute',value:function getAttribute(element/** TODO #9100 */,attribute){return element.getAttribute(attribute);}},{key:'getAttributeNS',value:function getAttributeNS(element/** TODO #9100 */,ns,name){return element.getAttributeNS(ns,name);}},{key:'setAttribute',value:function setAttribute(element/** TODO #9100 */,name,value){element.setAttribute(name,value);}},{key:'setAttributeNS',value:function setAttributeNS(element/** TODO #9100 */,ns,name,value){element.setAttributeNS(ns,name,value);}},{key:'removeAttribute',value:function removeAttribute(element/** TODO #9100 */,attribute){element.removeAttribute(attribute);}},{key:'removeAttributeNS',value:function removeAttributeNS(element/** TODO #9100 */,ns,name){element.removeAttributeNS(ns,name);}},{key:'templateAwareRoot',value:function templateAwareRoot(el/** TODO #9100 */){return this.isTemplateElement(el)?this.content(el):el;}},{key:'createHtmlDocument',value:function createHtmlDocument(){return document.implementation.createHTMLDocument('fakeTitle');}},{key:'defaultDoc',value:function defaultDoc(){return document;}},{key:'getBoundingClientRect',value:function getBoundingClientRect(el/** TODO #9100 */){try{return el.getBoundingClientRect();}catch(e){return{top:0,bottom:0,left:0,right:0,width:0,height:0};}}},{key:'getTitle',value:function getTitle(){return document.title;}},{key:'setTitle',value:function setTitle(newTitle){document.title=newTitle||'';}},{key:'elementMatches',value:function elementMatches(n/** TODO #9100 */,selector){var matches=false;if(n instanceof HTMLElement){if(n.matches){matches=n.matches(selector);}else if(n.msMatchesSelector){matches=n.msMatchesSelector(selector);}else if(n.webkitMatchesSelector){matches=n.webkitMatchesSelector(selector);}}return matches;}},{key:'isTemplateElement',value:function isTemplateElement(el){return el instanceof HTMLElement&&el.nodeName=='TEMPLATE';}},{key:'isTextNode',value:function isTextNode(node){return node.nodeType===Node.TEXT_NODE;}},{key:'isCommentNode',value:function isCommentNode(node){return node.nodeType===Node.COMMENT_NODE;}},{key:'isElementNode',value:function isElementNode(node){return node.nodeType===Node.ELEMENT_NODE;}},{key:'hasShadowRoot',value:function hasShadowRoot(node/** TODO #9100 */){return node instanceof HTMLElement&&isPresent$2(node.shadowRoot);}},{key:'isShadowRoot',value:function isShadowRoot(node/** TODO #9100 */){return node instanceof DocumentFragment;}},{key:'importIntoDoc',value:function importIntoDoc(node){var toImport=node;if(this.isTemplateElement(node)){toImport=this.content(node);}return document.importNode(toImport,true);}},{key:'adoptNode',value:function adoptNode(node){return document.adoptNode(node);}},{key:'getHref',value:function getHref(el){return el.href;}},{key:'getEventKey',value:function getEventKey(event/** TODO #9100 */){var key=event.key;if(isBlank$2(key)){key=event.keyIdentifier;// keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
// Safari
// cf
// http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
if(isBlank$2(key)){return'Unidentified';}if(key.startsWith('U+')){key=String.fromCharCode(parseInt(key.substring(2),16));if(event.location===DOM_KEY_LOCATION_NUMPAD&&_chromeNumKeyPadMap.hasOwnProperty(key)){// There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...
key=_chromeNumKeyPadMap[key];}}}if(_keyMap.hasOwnProperty(key)){key=_keyMap[key];}return key;}},{key:'getGlobalEventTarget',value:function getGlobalEventTarget(target){if(target=='window'){return window;}else if(target=='document'){return document;}else if(target=='body'){return document.body;}}},{key:'getHistory',value:function getHistory(){return window.history;}},{key:'getLocation',value:function getLocation(){return window.location;}},{key:'getBaseHref',value:function getBaseHref(){var href=getBaseElementHref();if(isBlank$2(href)){return null;}return relativePath(href);}},{key:'resetBaseElement',value:function resetBaseElement(){baseElement=null;}},{key:'getUserAgent',value:function getUserAgent(){return window.navigator.userAgent;}},{key:'setData',value:function setData(element/** TODO #9100 */,name,value){this.setAttribute(element,'data-'+name,value);}},{key:'getData',value:function getData(element/** TODO #9100 */,name){return this.getAttribute(element,'data-'+name);}},{key:'getComputedStyle',value:function(_getComputedStyle){function getComputedStyle(_x94){return _getComputedStyle.apply(this,arguments);}getComputedStyle.toString=function(){return _getComputedStyle.toString();};return getComputedStyle;}(function(element/** TODO #9100 */){return getComputedStyle(element);})// TODO(tbosch): move this into a separate environment class once we have it
},{key:'setGlobalVar',value:function setGlobalVar(path,value){setValueOnPath$2(global$3,path,value);}},{key:'requestAnimationFrame',value:function requestAnimationFrame(callback/** TODO #9100 */){return window.requestAnimationFrame(callback);}},{key:'cancelAnimationFrame',value:function cancelAnimationFrame(id){window.cancelAnimationFrame(id);}},{key:'supportsWebAnimation',value:function supportsWebAnimation(){return isFunction$3(document.body['animate']);}},{key:'performanceNow',value:function performanceNow(){// performance.now() is not available in all browsers, see
// http://caniuse.com/#search=performance.now
if(isPresent$2(window.performance)&&isPresent$2(window.performance.now)){return window.performance.now();}else{return DateWrapper$2.toMillis(DateWrapper$2.now());}}},{key:'supportsCookies',value:function supportsCookies(){return true;}},{key:'getCookie',value:function getCookie(name){return parseCookieValue(document.cookie,name);}},{key:'setCookie',value:function setCookie(name,value){// document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
// not clear other cookies.
document.cookie=encodeURIComponent(name)+'='+encodeURIComponent(value);}},{key:'attrToPropMap',get:function get(){return _attrToPropMap;}}],[{key:'makeCurrent',value:function makeCurrent(){setRootDomAdapter(new BrowserDomAdapter());}}]);return BrowserDomAdapter;}(GenericBrowserDomAdapter);var baseElement=null;function getBaseElementHref(){if(isBlank$2(baseElement)){baseElement=document.querySelector('base');if(isBlank$2(baseElement)){return null;}}return baseElement.getAttribute('href');}// based on urlUtils.js in AngularJS 1
var urlParsingNode=null;function relativePath(url/** TODO #9100 */){if(isBlank$2(urlParsingNode)){urlParsingNode=document.createElement('a');}urlParsingNode.setAttribute('href',url);return urlParsingNode.pathname.charAt(0)==='/'?urlParsingNode.pathname:'/'+urlParsingNode.pathname;}function parseCookieValue(cookie,name){name=encodeURIComponent(name);var cookies=cookie.split(';');var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=cookies[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var _cookie=_step7.value;var _cookie$split=_cookie.split('=',2);var _cookie$split2=_slicedToArray(_cookie$split,2);var key=_cookie$split2[0];var value=_cookie$split2[1];if(key.trim()===name){return decodeURIComponent(value);}}}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return){_iterator7.return();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}return null;}var PublicTestability=function(){function PublicTestability(testability){_classCallCheck(this,PublicTestability);this._testability=testability;}_createClass(PublicTestability,[{key:'isStable',value:function isStable(){return this._testability.isStable();}},{key:'whenStable',value:function whenStable(callback){this._testability.whenStable(callback);}},{key:'findBindings',value:function findBindings(using,provider,exactMatch){return this.findProviders(using,provider,exactMatch);}},{key:'findProviders',value:function findProviders(using,provider,exactMatch){return this._testability.findBindings(using,provider,exactMatch);}}]);return PublicTestability;}();var BrowserGetTestability=function(){function BrowserGetTestability(){_classCallCheck(this,BrowserGetTestability);}_createClass(BrowserGetTestability,[{key:'addToWindow',value:function addToWindow(registry){global$3.getAngularTestability=function(elem){var findInAncestors=arguments.length<=1||arguments[1]===undefined?true:arguments[1];var testability=registry.findTestabilityInTree(elem,findInAncestors);if(testability==null){throw new Error('Could not find testability for element.');}return new PublicTestability(testability);};global$3.getAllAngularTestabilities=function(){var testabilities=registry.getAllTestabilities();return testabilities.map(function(testability){return new PublicTestability(testability);});};global$3.getAllAngularRootElements=function(){return registry.getAllRootElements();};var whenAllStable=function whenAllStable(callback/** TODO #9100 */){var testabilities=global$3.getAllAngularTestabilities();var count=testabilities.length;var didWork=false;var decrement=function decrement(didWork_/** TODO #9100 */){didWork=didWork||didWork_;count--;if(count==0){callback(didWork);}};testabilities.forEach(function(testability/** TODO #9100 */){testability.whenStable(decrement);});};if(!global$3.frameworkStabilizers){global$3.frameworkStabilizers=ListWrapper$2.createGrowableSize(0);}global$3.frameworkStabilizers.push(whenAllStable);}},{key:'findTestabilityInTree',value:function findTestabilityInTree(registry,elem,findInAncestors){if(elem==null){return null;}var t=registry.getTestability(elem);if(isPresent$2(t)){return t;}else if(!findInAncestors){return null;}if(getDOM().isShadowRoot(elem)){return this.findTestabilityInTree(registry,getDOM().getHost(elem),true);}return this.findTestabilityInTree(registry,getDOM().parentElement(elem),true);}}],[{key:'init',value:function init(){setTestabilityGetter(new BrowserGetTestability());}}]);return BrowserGetTestability;}();var BROWSER_PLATFORM_MARKER=new OpaqueToken('BrowserPlatformMarker');/**
   * A set of providers to initialize the Angular platform in a web browser.
   *
   * Used automatically by `bootstrap`, or can be passed to {@link platform}.
   */var BROWSER_PLATFORM_PROVIDERS=[{provide:BROWSER_PLATFORM_MARKER,useValue:true},PLATFORM_COMMON_PROVIDERS,{provide:PLATFORM_INITIALIZER,useValue:initDomAdapter,multi:true},{provide:PlatformLocation,useClass:BrowserPlatformLocation}];var BROWSER_SANITIZATION_PROVIDERS=[{provide:SanitizationService$1,useExisting:DomSanitizationService},{provide:DomSanitizationService,useClass:DomSanitizationServiceImpl}];/**
   * A set of providers to initialize an Angular application in a web browser.
   *
   * Used automatically by `bootstrap`, or can be passed to {@link PlatformRef.application}.
   */var BROWSER_APP_PROVIDERS=[APPLICATION_COMMON_PROVIDERS,FORM_PROVIDERS,BROWSER_SANITIZATION_PROVIDERS,{provide:ExceptionHandler,useFactory:_exceptionHandler,deps:[]},{provide:DOCUMENT,useFactory:_document,deps:[]},{provide:EVENT_MANAGER_PLUGINS,useClass:DomEventsPlugin,multi:true},{provide:EVENT_MANAGER_PLUGINS,useClass:KeyEventsPlugin,multi:true},{provide:EVENT_MANAGER_PLUGINS,useClass:HammerGesturesPlugin,multi:true},{provide:HAMMER_GESTURE_CONFIG,useClass:HammerGestureConfig},{provide:DomRootRenderer,useClass:DomRootRenderer_},{provide:RootRenderer,useExisting:DomRootRenderer},{provide:SharedStylesHost,useExisting:DomSharedStylesHost},{provide:AnimationDriver$1,useFactory:_resolveDefaultAnimationDriver},DomSharedStylesHost,Testability,EventManager,ELEMENT_PROBE_PROVIDERS];function browserPlatform(){if(isBlank$2(getPlatform())){createPlatform(ReflectiveInjector.resolveAndCreate(BROWSER_PLATFORM_PROVIDERS));}return assertPlatform(BROWSER_PLATFORM_MARKER);}function initDomAdapter(){BrowserDomAdapter.makeCurrent();wtfInit$1();BrowserGetTestability.init();}function _exceptionHandler(){return new ExceptionHandler(getDOM());}function _document(){return getDOM().defaultDoc();}function _resolveDefaultAnimationDriver(){if(getDOM().supportsWebAnimation()){return new WebAnimationsDriver();}return new NoOpAnimationDriver$1();}var ON_WEB_WORKER=new OpaqueToken('WebWorker.onWebWorker');var NODES_WITH_VALUE=new Set$3(['input','select','option','button','li','meter','progress','param','textarea']);var WORKER_RENDER_PLATFORM_MARKER=new OpaqueToken('WorkerRenderPlatformMarker');/**
   * @experimental
   */var WORKER_SCRIPT=new OpaqueToken('WebWorkerScript');/**
   * A multiple providers used to automatically call the `start()` method after the service is
   * created.
   *
   * TODO(vicb): create an interface for startable services to implement
   * @experimental
   */var WORKER_UI_STARTABLE_MESSAGING_SERVICE=new OpaqueToken('WorkerRenderStartableMsgService');var WORKER_APP_PLATFORM_MARKER=new OpaqueToken('WorkerAppPlatformMarker');var _scope_check$1=wtfCreateScope('AppView#check(ascii id)');/**
   * Cost of making objects: http://jsperf.com/instantiate-size-of-object
   *
   */var AppView$1=function(){function AppView$1(clazz,componentType,type,viewUtils,parentInjector,declarationAppElement,cdMode){_classCallCheck(this,AppView$1);this.clazz=clazz;this.componentType=componentType;this.type=type;this.viewUtils=viewUtils;this.parentInjector=parentInjector;this.declarationAppElement=declarationAppElement;this.cdMode=cdMode;this.contentChildren=[];this.viewChildren=[];this.viewContainerElement=null;// The names of the below fields must be kept in sync with codegen_name_util.ts or
// change detection will fail.
this.cdState=ChangeDetectorState.NeverChecked;this.destroyed=false;this.activeAnimationPlayers=new ActiveAnimationPlayersMap();this.ref=new ViewRef_(this);if(type===ViewType.COMPONENT||type===ViewType.HOST){this.renderer=viewUtils.renderComponent(componentType);}else{this.renderer=declarationAppElement.parentView.renderer;}}_createClass(AppView$1,[{key:'cancelActiveAnimation',value:function cancelActiveAnimation(element,animationName){var removeAllAnimations=arguments.length<=2||arguments[2]===undefined?false:arguments[2];if(removeAllAnimations){this.activeAnimationPlayers.findAllPlayersByElement(element).forEach(function(player){return player.destroy();});}else{var player=this.activeAnimationPlayers.find(element,animationName);if(isPresent(player)){player.destroy();}}}},{key:'registerAndStartAnimation',value:function registerAndStartAnimation(element,animationName,player){var _this117=this;this.activeAnimationPlayers.set(element,animationName,player);player.onDone(function(){_this117.activeAnimationPlayers.remove(element,animationName);});player.play();}},{key:'create',value:function create(context,givenProjectableNodes,rootSelectorOrNode){this.context=context;var projectableNodes;switch(this.type){case ViewType.COMPONENT:projectableNodes=ensureSlotCount(givenProjectableNodes,this.componentType.slotCount);break;case ViewType.EMBEDDED:projectableNodes=this.declarationAppElement.parentView.projectableNodes;break;case ViewType.HOST:// Note: Don't ensure the slot count for the projectableNodes as we store
// them only for the contained component view (which will later check the slot count...)
projectableNodes=givenProjectableNodes;break;}this._hasExternalHostElement=isPresent(rootSelectorOrNode);this.projectableNodes=projectableNodes;return this.createInternal(rootSelectorOrNode);}/**
       * Overwritten by implementations.
       * Returns the AppElement for the host element for ViewType.HOST.
       */},{key:'createInternal',value:function createInternal(rootSelectorOrNode){return null;}},{key:'init',value:function init(rootNodesOrAppElements,allNodes,disposables,subscriptions){this.rootNodesOrAppElements=rootNodesOrAppElements;this.allNodes=allNodes;this.disposables=disposables;this.subscriptions=subscriptions;if(this.type===ViewType.COMPONENT){// Note: the render nodes have been attached to their host element
// in the ViewFactory already.
this.declarationAppElement.parentView.viewChildren.push(this);this.dirtyParentQueriesInternal();}}},{key:'selectOrCreateHostElement',value:function selectOrCreateHostElement(elementName,rootSelectorOrNode,debugInfo){var hostElement;if(isPresent(rootSelectorOrNode)){hostElement=this.renderer.selectRootElement(rootSelectorOrNode,debugInfo);}else{hostElement=this.renderer.createElement(null,elementName,debugInfo);}return hostElement;}},{key:'injectorGet',value:function injectorGet(token,nodeIndex,notFoundResult){return this.injectorGetInternal(token,nodeIndex,notFoundResult);}/**
       * Overwritten by implementations
       */},{key:'injectorGetInternal',value:function injectorGetInternal(token,nodeIndex,notFoundResult){return notFoundResult;}},{key:'injector',value:function injector(nodeIndex){if(isPresent(nodeIndex)){return new ElementInjector(this,nodeIndex);}else{return this.parentInjector;}}},{key:'destroy',value:function destroy(){if(this._hasExternalHostElement){this.renderer.detachView(this.flatRootNodes);}else if(isPresent(this.viewContainerElement)){this.viewContainerElement.detachView(this.viewContainerElement.nestedViews.indexOf(this));}this._destroyRecurse();}},{key:'_destroyRecurse',value:function _destroyRecurse(){if(this.destroyed){return;}var children=this.contentChildren;for(var i=0;i<children.length;i++){children[i]._destroyRecurse();}children=this.viewChildren;for(var i=0;i<children.length;i++){children[i]._destroyRecurse();}this.destroyLocal();this.destroyed=true;}},{key:'destroyLocal',value:function destroyLocal(){var _this118=this;var hostElement=this.type===ViewType.COMPONENT?this.declarationAppElement.nativeElement:null;for(var i=0;i<this.disposables.length;i++){this.disposables[i]();}for(var i=0;i<this.subscriptions.length;i++){ObservableWrapper.dispose(this.subscriptions[i]);}this.destroyInternal();this.dirtyParentQueriesInternal();if(this.activeAnimationPlayers.length==0){this.renderer.destroyView(hostElement,this.allNodes);}else{var player=new AnimationGroupPlayer(this.activeAnimationPlayers.getAllPlayers());player.onDone(function(){_this118.renderer.destroyView(hostElement,_this118.allNodes);});}}/**
       * Overwritten by implementations
       */},{key:'destroyInternal',value:function destroyInternal(){}/**
       * Overwritten by implementations
       */},{key:'detachInternal',value:function detachInternal(){}},{key:'detach',value:function detach(){var _this119=this;this.detachInternal();if(this.activeAnimationPlayers.length==0){this.renderer.detachView(this.flatRootNodes);}else{var player=new AnimationGroupPlayer(this.activeAnimationPlayers.getAllPlayers());player.onDone(function(){_this119.renderer.detachView(_this119.flatRootNodes);});}}},{key:'dirtyParentQueriesInternal',/**
       * Overwritten by implementations
       */value:function dirtyParentQueriesInternal(){}},{key:'detectChanges',value:function detectChanges(throwOnChange){var s=_scope_check$1(this.clazz);if(this.cdMode===ChangeDetectionStrategy.Checked||this.cdState===ChangeDetectorState.Errored)return;if(this.destroyed){this.throwDestroyedError('detectChanges');}this.detectChangesInternal(throwOnChange);if(this.cdMode===ChangeDetectionStrategy.CheckOnce)this.cdMode=ChangeDetectionStrategy.Checked;this.cdState=ChangeDetectorState.CheckedBefore;wtfLeave(s);}/**
       * Overwritten by implementations
       */},{key:'detectChangesInternal',value:function detectChangesInternal(throwOnChange){this.detectContentChildrenChanges(throwOnChange);this.detectViewChildrenChanges(throwOnChange);}},{key:'detectContentChildrenChanges',value:function detectContentChildrenChanges(throwOnChange){for(var i=0;i<this.contentChildren.length;++i){var child=this.contentChildren[i];if(child.cdMode===ChangeDetectionStrategy.Detached)continue;child.detectChanges(throwOnChange);}}},{key:'detectViewChildrenChanges',value:function detectViewChildrenChanges(throwOnChange){for(var i=0;i<this.viewChildren.length;++i){var child=this.viewChildren[i];if(child.cdMode===ChangeDetectionStrategy.Detached)continue;child.detectChanges(throwOnChange);}}},{key:'addToContentChildren',value:function addToContentChildren(renderAppElement){renderAppElement.parentView.contentChildren.push(this);this.viewContainerElement=renderAppElement;this.dirtyParentQueriesInternal();}},{key:'removeFromContentChildren',value:function removeFromContentChildren(renderAppElement){ListWrapper.remove(renderAppElement.parentView.contentChildren,this);this.dirtyParentQueriesInternal();this.viewContainerElement=null;}},{key:'markAsCheckOnce',value:function markAsCheckOnce(){this.cdMode=ChangeDetectionStrategy.CheckOnce;}},{key:'markPathToRootAsCheckOnce',value:function markPathToRootAsCheckOnce(){var c=this;while(isPresent(c)&&c.cdMode!==ChangeDetectionStrategy.Detached){if(c.cdMode===ChangeDetectionStrategy.Checked){c.cdMode=ChangeDetectionStrategy.CheckOnce;}var parentEl=c.type===ViewType.COMPONENT?c.declarationAppElement:c.viewContainerElement;c=isPresent(parentEl)?parentEl.parentView:null;}}},{key:'eventHandler',value:function eventHandler(cb){return cb;}},{key:'throwDestroyedError',value:function throwDestroyedError(details){throw new ViewDestroyedException(details);}},{key:'changeDetectorRef',get:function get(){return this.ref;}},{key:'parent',get:function get(){return isPresent(this.declarationAppElement)?this.declarationAppElement.parentView:null;}},{key:'flatRootNodes',get:function get(){return flattenNestedViewRenderNodes(this.rootNodesOrAppElements);}},{key:'lastRootNode',get:function get(){var lastNode=this.rootNodesOrAppElements.length>0?this.rootNodesOrAppElements[this.rootNodesOrAppElements.length-1]:null;return _findLastRenderNode$1(lastNode);}}]);return AppView$1;}();function _findLastRenderNode$1(node){var lastNode;if(node instanceof AppElement){var appEl=node;lastNode=appEl.nativeElement;if(isPresent(appEl.nestedViews)){// Note: Views might have no root nodes at all!
for(var i=appEl.nestedViews.length-1;i>=0;i--){var nestedView=appEl.nestedViews[i];if(nestedView.rootNodesOrAppElements.length>0){lastNode=_findLastRenderNode$1(nestedView.rootNodesOrAppElements[nestedView.rootNodesOrAppElements.length-1]);}}}}else{lastNode=node;}return lastNode;}var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if((typeof Reflect==='undefined'?'undefined':_typeof(Reflect))==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;}return c>3&&r&&Object.defineProperty(target,key,r),r;};var __metadata=undefined&&undefined.__metadata||function(k,v){if((typeof Reflect==='undefined'?'undefined':_typeof(Reflect))==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(k,v);};var App=function App(){_classCallCheck(this,App);};App=__decorate([Component({selector:'ion-app',template:'hi'}),__metadata('design:paramtypes',[])],App);/**
   * An AppElement is created for elements that have a ViewContainerRef,
   * a nested component or a <template> element to keep data around
   * that is needed for later instantiations.
   */var AppElement$1=function(){function AppElement$1(index,parentIndex,parentView,nativeElement){_classCallCheck(this,AppElement$1);this.index=index;this.parentIndex=parentIndex;this.parentView=parentView;this.nativeElement=nativeElement;this.nestedViews=null;this.componentView=null;}_createClass(AppElement$1,[{key:'initComponent',value:function initComponent(component,componentConstructorViewQueries,view){this.component=component;this.componentConstructorViewQueries=componentConstructorViewQueries;this.componentView=view;}},{key:'mapNestedViews',value:function mapNestedViews(nestedViewClass,callback){var result=[];if(isPresent(this.nestedViews)){this.nestedViews.forEach(function(nestedView){if(nestedView.clazz===nestedViewClass){result.push(callback(nestedView));}});}return result;}},{key:'attachView',value:function attachView(view,viewIndex){if(view.type===ViewType.COMPONENT){throw new BaseException('Component views can\'t be moved!');}var nestedViews=this.nestedViews;if(nestedViews==null){nestedViews=[];this.nestedViews=nestedViews;}ListWrapper.insert(nestedViews,viewIndex,view);var refRenderNode;if(viewIndex>0){var prevView=nestedViews[viewIndex-1];refRenderNode=prevView.lastRootNode;}else{refRenderNode=this.nativeElement;}if(isPresent(refRenderNode)){view.renderer.attachViewAfter(refRenderNode,view.flatRootNodes);}view.addToContentChildren(this);}},{key:'detachView',value:function detachView(viewIndex){var view=ListWrapper.removeAt(this.nestedViews,viewIndex);if(view.type===ViewType.COMPONENT){throw new BaseException('Component views can\'t be moved!');}view.detach();view.removeFromContentChildren(this);return view;}},{key:'elementRef',get:function get(){return new ElementRef(this.nativeElement);}},{key:'vcRef',get:function get(){return new ViewContainerRef_(this);}},{key:'parentInjector',get:function get(){return this.parentView.injector(this.parentIndex);}},{key:'injector',get:function get(){return this.parentView.injector(this.index);}}]);return AppElement$1;}();var ViewType$1;(function(ViewType){// A view that contains the host element with bound component directive.
// Contains a COMPONENT view
ViewType[ViewType["HOST"]=0]="HOST";// The view of the component
// Can contain 0 to n EMBEDDED views
ViewType[ViewType["COMPONENT"]=1]="COMPONENT";// A view that is embedded into another View via a <template> element
// inside of a COMPONENT view
ViewType[ViewType["EMBEDDED"]=2]="EMBEDDED";})(ViewType$1||(ViewType$1={}));/**
   * Structural diffing for `Object`s and `Map`s.
   */var keyValDiff$1=/*@ts2dart_const*/[new DefaultKeyValueDifferFactory()];/**
   * Structural diffing for `Iterable` types such as `Array`s.
   */var iterableDiff$1=/*@ts2dart_const*/[new DefaultIterableDifferFactory()];var defaultIterableDiffers$1=new IterableDiffers(iterableDiff$1);var defaultKeyValueDiffers$1=new KeyValueDiffers(keyValDiff$1);/**
   * Defines template and style encapsulation options available for Component's {@link View}.
   *
   * See {@link ViewMetadata#encapsulation}.
   * @stable
   */var ViewEncapsulation$1;(function(ViewEncapsulation){/**
       * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
       * Element and pre-processing the style rules provided via
       * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
       * attribute to all selectors.
       *
       * This is the default option.
       */ViewEncapsulation[ViewEncapsulation["Emulated"]=0]="Emulated";/**
       * Use the native encapsulation mechanism of the renderer.
       *
       * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
       * creating a ShadowRoot for Component's Host Element.
       */ViewEncapsulation[ViewEncapsulation["Native"]=1]="Native";/**
       * Don't provide any template or style encapsulation.
       */ViewEncapsulation[ViewEncapsulation["None"]=2]="None";})(ViewEncapsulation$1||(ViewEncapsulation$1={}));/**
   * Represents an instance of a Component created via a {@link ComponentFactory}.
   *
   * `ComponentRef` provides access to the Component Instance as well other objects related to this
   * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
   * method.
   * @stable
   */var ComponentRef$1=function(){function ComponentRef$1(){_classCallCheck(this,ComponentRef$1);}_createClass(ComponentRef$1,[{key:'location',/**
       * Location of the Host Element of this Component Instance.
       */get:function get(){return unimplemented();}/**
       * The injector on which the component instance exists.
       */},{key:'injector',get:function get(){return unimplemented();}/**
       * The instance of the Component.
       */},{key:'instance',get:function get(){return unimplemented();}},{key:'hostView',/**
       * The {@link ViewRef} of the Host View of this Component instance.
       */get:function get(){return unimplemented();}},{key:'changeDetectorRef',/**
       * The {@link ChangeDetectorRef} of the Component instance.
       */get:function get(){return unimplemented();}/**
       * The component type.
       */},{key:'componentType',get:function get(){return unimplemented();}}]);return ComponentRef$1;}();var ComponentRef_$1=function(_ComponentRef$){_inherits(ComponentRef_$1,_ComponentRef$);function ComponentRef_$1(_hostElement,_componentType){_classCallCheck(this,ComponentRef_$1);var _this120=_possibleConstructorReturn(this,Object.getPrototypeOf(ComponentRef_$1).call(this));_this120._hostElement=_hostElement;_this120._componentType=_componentType;return _this120;}_createClass(ComponentRef_$1,[{key:'destroy',value:function destroy(){this._hostElement.parentView.destroy();}},{key:'onDestroy',value:function onDestroy(callback){this.hostView.onDestroy(callback);}},{key:'location',get:function get(){return this._hostElement.elementRef;}},{key:'injector',get:function get(){return this._hostElement.injector;}},{key:'instance',get:function get(){return this._hostElement.component;}},{key:'hostView',get:function get(){return this._hostElement.parentView.ref;}},{key:'changeDetectorRef',get:function get(){return this._hostElement.parentView.ref;}},{key:'componentType',get:function get(){return this._componentType;}}]);return ComponentRef_$1;}(ComponentRef$1);/**
   * @experimental
   * @ts2dart_const
   */var EMPTY_CONTEXT$2=new Object();var ComponentFactory$1=function(){function ComponentFactory$1(selector,_viewFactory,_componentType){_classCallCheck(this,ComponentFactory$1);this.selector=selector;this._viewFactory=_viewFactory;this._componentType=_componentType;}_createClass(ComponentFactory$1,[{key:'create',/**
       * Creates a new component.
       */value:function create(injector){var projectableNodes=arguments.length<=1||arguments[1]===undefined?null:arguments[1];var rootSelectorOrNode=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var vu=injector.get(ViewUtils);if(isBlank(projectableNodes)){projectableNodes=[];}// Note: Host views don't need a declarationAppElement!
var hostView=this._viewFactory(vu,injector,null);var hostElement=hostView.create(EMPTY_CONTEXT$2,projectableNodes,rootSelectorOrNode);return new ComponentRef_$1(hostElement,this._componentType);}},{key:'componentType',get:function get(){return this._componentType;}}]);return ComponentFactory$1;}();var styles_App=[];var renderType_App=null;var _View_App0=function(_AppView$){_inherits(_View_App0,_AppView$);function _View_App0(viewUtils,parentInjector,declarationEl){_classCallCheck(this,_View_App0);return _possibleConstructorReturn(this,Object.getPrototypeOf(_View_App0).call(this,_View_App0,renderType_App,ViewType$1.COMPONENT,viewUtils,parentInjector,declarationEl,ChangeDetectionStrategy.CheckAlways));}_createClass(_View_App0,[{key:'createInternal',value:function createInternal(rootSelector){var parentRenderNode=this.renderer.createViewRoot(this.declarationAppElement.nativeElement);this._text_0=this.renderer.createText(parentRenderNode,'hi',null);this.init([],[this._text_0],[],[]);return null;}}]);return _View_App0;}(AppView$1);function viewFactory_App0(viewUtils,parentInjector,declarationEl){if(renderType_App===null){renderType_App=viewUtils.createRenderComponentType('/Users/joshthomas/Workspace/tree-shake-ionic2/src/app/app.ts class App - inline template',0,ViewEncapsulation$1.None,styles_App);}return new _View_App0(viewUtils,parentInjector,declarationEl);}var styles_App_Host=[];var renderType_App_Host=null;var _View_App_Host0=function(_AppView$2){_inherits(_View_App_Host0,_AppView$2);function _View_App_Host0(viewUtils,parentInjector,declarationEl){_classCallCheck(this,_View_App_Host0);return _possibleConstructorReturn(this,Object.getPrototypeOf(_View_App_Host0).call(this,_View_App_Host0,renderType_App_Host,ViewType$1.HOST,viewUtils,parentInjector,declarationEl,ChangeDetectionStrategy.CheckAlways));}_createClass(_View_App_Host0,[{key:'createInternal',value:function createInternal(rootSelector){this._el_0=this.selectOrCreateHostElement('ion-app',rootSelector,null);this._appEl_0=new AppElement$1(0,null,this,this._el_0);var compView_0=viewFactory_App0(this.viewUtils,this.injector(0),this._appEl_0);this._App_0_4=new App();this._appEl_0.initComponent(this._App_0_4,[],compView_0);compView_0.create(this._App_0_4,this.projectableNodes,null);this.init([].concat([this._el_0]),[this._el_0],[],[]);return this._appEl_0;}},{key:'injectorGetInternal',value:function injectorGetInternal(token,requestNodeIndex,notFoundResult){if(token===App&&0===requestNodeIndex){return this._App_0_4;}return notFoundResult;}}]);return _View_App_Host0;}(AppView$1);function viewFactory_App_Host0(viewUtils,parentInjector,declarationEl){if(renderType_App_Host===null){renderType_App_Host=viewUtils.createRenderComponentType('',0,null,styles_App_Host);}return new _View_App_Host0(viewUtils,parentInjector,declarationEl);}var AppNgFactory=new ComponentFactory$1('ion-app',viewFactory_App_Host0,App);var appInjector=ReflectiveInjector.resolveAndCreate([BROWSER_APP_PROVIDERS,[]],browserPlatform().injector);var ngComponentRef=coreBootstrap(AppNgFactory,appInjector);})();//# sourceMappingURL=bundle.es2015.js.map

