(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{297:function(module,exports,__webpack_require__){__webpack_require__(298),__webpack_require__(523),module.exports=__webpack_require__(524)},396:function(module,exports){},524:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(187);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{showPanel:!1}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(715),module)}.call(this,__webpack_require__(525)(module))},715:function(module,exports,__webpack_require__){var map={"./0-Welcome.jsx":720};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=715},720:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"suggestion",(function(){return suggestion})),__webpack_require__.d(__webpack_exports__,"highlight",(function(){return _0_Welcome_highlight})),__webpack_require__.d(__webpack_exports__,"description",(function(){return _0_Welcome_description})),__webpack_require__.d(__webpack_exports__,"group",(function(){return group})),__webpack_require__.d(__webpack_exports__,"style",(function(){return style})),__webpack_require__.d(__webpack_exports__,"documentation",(function(){return documentation}));__webpack_require__(26),__webpack_require__(121),__webpack_require__(39),__webpack_require__(288),__webpack_require__(51),__webpack_require__(716),__webpack_require__(717),__webpack_require__(60),__webpack_require__(41);var react=__webpack_require__(3),react_default=__webpack_require__.n(react),prop_types=(__webpack_require__(37),__webpack_require__(23),__webpack_require__(186),__webpack_require__(114),__webpack_require__(184),__webpack_require__(61),__webpack_require__(115),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),lodash=__webpack_require__(0),react_dom=(__webpack_require__(71),__webpack_require__(131));function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function Dropdown(_ref){var container=_ref.container,inputContainer=_ref.inputContainer,children=_ref.children,className=_ref.className,styles=_ref.styles,isOpen=_ref.isOpen,forwardedRef=_ref.forwardedRef;if(!inputContainer)return"";var _inputContainer$getBo=inputContainer.getBoundingClientRect(),left=_inputContainer$getBo.left,bottom=_inputContainer$getBo.bottom,pageWidthMax=document.documentElement.clientWidth,pageHeightMax=document.documentElement.clientHeight,maxContainerWidth=Math.min(pageWidthMax-left-5,700),maxContainerHeight=Math.min(300,pageHeightMax-bottom-4-5);if(container&&inputContainer){var dropdown=react_default.a.createElement("div",{ref:forwardedRef,className:className,style:styles({display:isOpen?"block":"none",top:bottom+4,left:left,position:"absolute",maxHeight:maxContainerHeight,maxWidth:maxContainerWidth,width:"100%",margin:0,backgroundColor:"white",borderRadius:"5px",borderColor:"dimgray",borderWidth:"1px",borderStyle:"solid",overflowX:"hidden"})},children);return Object(react_dom.createPortal)(dropdown,container)}return react_default.a.createElement("div",{ref:forwardedRef,className:className,style:styles({display:isOpen?"block":"none",top:"38px",left:"0px",position:"absolute",maxHeight:maxContainerHeight,maxWidth:maxContainerWidth,width:"100%",margin:0,backgroundColor:"white",borderRadius:"5px",borderColor:"dimgray",borderWidth:"1px",borderStyle:"solid",overflowX:"hidden"})},children)}Dropdown.displayName="Dropdown",Dropdown.propTypes={children:prop_types_default.a.node,container:prop_types_default.a.instanceOf(Element),inputContainer:prop_types_default.a.instanceOf(Element),styles:prop_types_default.a.func,className:prop_types_default.a.string,isOpen:prop_types_default.a.bool.isRequired,forwardedRef:prop_types_default.a.shape({current:prop_types_default.a.any})},Dropdown.defaultProps={children:void 0,container:void 0,inputContainer:void 0,styles:function styles(_styles){return _styles},className:void 0,forwardedRef:void 0};var src_dropdown=Object(react.forwardRef)((function(props,ref){return react_default.a.createElement(Dropdown,_extends({},props,{forwardedRef:ref}))}));function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var isElementVisible=function(el,container){if(!el||!container)return!1;var top=el.offsetTop,bottom=el.offsetTop+el.clientHeight;return top>=container.scrollTop&&bottom<=container.scrollTop+container.clientHeight},src_FormulaBar=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(FormulaBar,_Component);var _super=_createSuper(FormulaBar);function FormulaBar(_props){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FormulaBar),_defineProperty(_assertThisInitialized(_this=_super.call(this,_props)),"generateDoc",(function(value){var result,suggestions=_this.props.suggestions;Object(lodash.each)(suggestions,(function(_ref){var items=_ref.items,foundItem=Object(lodash.find)(items,(function(_ref2){var title=_ref2.title;return Object(lodash.toLower)(title)===Object(lodash.toLower)(value)}));if(foundItem)return result=Object(lodash.pickBy)(_objectSpread({description:foundItem.description},foundItem.docs)),!1})),Object(lodash.isEmpty)(result)?_this.setState({display:"none"}):_this.setState({display:"doc"}),_this.setState({highlight:[0,0]}),_this.setState({currentDoc:result})})),_defineProperty(_assertThisInitialized(_this),"generateSuggestions",(function(event){var valueLast,suggestions=_this.props.suggestions,value=event.target.value,valueTail=Object(lodash.first)(value.match(/[^A-Za-z\d]*(?:[A-Za-z]+\d*\(?[A-Za-z\d,'"]*)*$/g)),insideFunc=!1;if(valueTail.match(/[A-Za-z]+\d*$/g)?valueLast=Object(lodash.last)(valueTail.match(/[A-Za-z\d]+$/g)):valueTail.match(/[A-Za-z]+\d*\([^\)]*/g)?(valueLast=Object(lodash.replace)(Object(lodash.last)(valueTail.match(/[A-Za-z]+\d*\(/g)),"(",""),insideFunc=!0):valueLast=Object(lodash.last)(valueTail),insideFunc)return _this.generateDoc(valueLast),!1;var maxMatch=0,matchedGroups=Object(lodash.reject)(Object(lodash.map)(suggestions,(function(_ref3){var items=_ref3.items,props=_objectWithoutProperties(_ref3,["items"]);return _objectSpread({items:Object(lodash.compact)(Object(lodash.map)(items,(function(_ref4){var title=_ref4.title,description=_ref4.description,autocomplete=_ref4.autocomplete,docs=_ref4.docs,indexEnd=Object(lodash.toLower)(title).indexOf(Object(lodash.toLower)(valueLast)),matchValue=title.substring(0,indexEnd+Object(lodash.size)(valueLast)),matchSize=Object(lodash.size)(matchValue);if(Object(lodash.gt)(matchSize,0)&&Object(lodash.endsWith)(Object(lodash.toLower)(valueTail),Object(lodash.toLower)(matchValue))&&matchSize<Object(lodash.size)(title)&&matchSize>=(maxMatch=matchSize>maxMatch?matchSize:maxMatch))return{title:title,matchSize:matchSize,description:description,autocomplete:autocomplete,docs:Object(lodash.pickBy)(_objectSpread({description:description},docs))}})))},props)})),(function(_ref5){var items=_ref5.items;return Object(lodash.isEmpty)(Object(lodash.filter)(items,(function(_ref6){var matchSize=_ref6.matchSize;return Object(lodash.eq)(matchSize,maxMatch)})))}));Object(lodash.isEmpty)(matchedGroups)?(_this.setState({display:"none"}),_this.setState({highlight:[0,0]})):_this.setState({display:"suggest"}),_this.setState({results:matchedGroups})})),_defineProperty(_assertThisInitialized(_this),"onChange",(function(event){var onChange=_this.props.onChange,value=event.target.value;_this.generateSuggestions(event),_this.setState({value:value},(function(){return onChange(value)}))})),_defineProperty(_assertThisInitialized(_this),"onKeyDown",(function(event){var key=event.key,_this$state=_this.state,results=_this$state.results,_this$state$highlight=_slicedToArray(_this$state.highlight,2),currentGroupIndex=_this$state$highlight[0],currentItemIndex=_this$state$highlight[1],display=_this$state.display,value=_this$state.value,newGroupIndex=currentGroupIndex,newItemIndex=currentItemIndex;switch(key){case"ArrowDown":if(Object(lodash.eq)(display,"suggest")&&!Object(lodash.isEmpty)(results)){event.preventDefault(),Object(lodash.has)(results,[currentGroupIndex,"items",currentItemIndex+1])?newItemIndex=currentItemIndex+1:Object(lodash.has)(results,[currentGroupIndex+1])&&(newGroupIndex=currentGroupIndex+1,newItemIndex=0),_this.setState({highlight:[newGroupIndex,newItemIndex]});var type=Object(lodash.get)(results,newGroupIndex).type,title=Object(lodash.get)(results,[newGroupIndex,"items",newItemIndex]).title,highlightedItem=document.querySelector('[data-id="'.concat(Object(lodash.join)([type,title],"-"),'"]'));isElementVisible(highlightedItem,_this.dropdownContainerRef.current)||highlightedItem.scrollIntoView(!1)}break;case"ArrowUp":if(Object(lodash.eq)(display,"suggest")&&!Object(lodash.isEmpty)(results)){event.preventDefault(),Object(lodash.gt)(currentItemIndex,0)?newItemIndex=currentItemIndex-1:Object(lodash.gt)(currentGroupIndex,0)&&(newGroupIndex=currentGroupIndex-1,newItemIndex=Object(lodash.size)(Object(lodash.get)(results,[newGroupIndex,"items"]))-1),_this.setState({highlight:[newGroupIndex,newItemIndex]});var _type=Object(lodash.get)(results,newGroupIndex).type,_title=Object(lodash.get)(results,[newGroupIndex,"items",newItemIndex]).title,_highlightedItem=document.querySelector('[data-id="'.concat(Object(lodash.join)([_type,_title],"-"),'"]'));isElementVisible(_highlightedItem,_this.dropdownContainerRef.current)||_highlightedItem.scrollIntoView()}break;case"Enter":event.preventDefault(),Object(lodash.eq)(display,"suggest")?_this.onAutocomplete(currentGroupIndex,currentItemIndex):(_this.setState({value:value}),_this.setState({display:"none"}));break;case"Tab":Object(lodash.eq)(display,"suggest")?(event.preventDefault(),_this.onAutocomplete(currentGroupIndex,currentItemIndex)):(_this.setState({value:value}),_this.setState({display:"none"}));break;case"Backspace":case"Escape":_this.setState({display:"none"})}})),_defineProperty(_assertThisInitialized(_this),"onAutocomplete",(function(groupIndex,itemIndex){var _this$state2=_this.state,results=_this$state2.results,value=_this$state2.value,valueTail=Object(lodash.first)(value.match(/([^A-Za-z\d]*[A-Za-z\d]*)$/g)),valueLast=Object(lodash.last)(valueTail),currentTitle=Object(lodash.get)(results,[groupIndex,"items",itemIndex,"autocomplete"])||Object(lodash.get)(results,[groupIndex,"items",itemIndex,"title"]),indexEnd=Object(lodash.indexOf)(Object(lodash.split)(Object(lodash.toLower)(currentTitle),""),Object(lodash.toLower)(valueLast)),matchValue=currentTitle.substring(0,indexEnd+1),matchSize=Object(lodash.size)(matchValue),valueSize=Object(lodash.size)(value);_this.setState({value:"".concat(value.substring(0,valueSize-matchSize)).concat(currentTitle)});var currentDoc=Object(lodash.get)(results,[groupIndex,"items",itemIndex,"docs"]);Object(lodash.isEmpty)(currentDoc)?_this.setState({display:"none"}):(_this.setState({display:"doc"}),_this.setState({currentDoc:currentDoc}))})),_defineProperty(_assertThisInitialized(_this),"onClickSuggestion",(function(groupIndex,itemIndex){_this.onAutocomplete(groupIndex,itemIndex)})),_defineProperty(_assertThisInitialized(_this),"onMouseOver",(function(groupIndex,itemIndex){_this.setState({highlight:[groupIndex,itemIndex]})}));var _this$props=_this.props,_value=_this$props.value,_suggestions=_this$props.suggestions;return _this.containerRef=Object(react.createRef)(),_this.dropdownContainerRef=Object(react.createRef)(),_this.state={value:_value,display:"none",results:_suggestions,currentDoc:null,highlight:[0,0]},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(FormulaBar,[{key:"render",value:function render(){var _this2=this,_this$props2=this.props,suggestions=_this$props2.suggestions,classes=_this$props2.classes,styles=_this$props2.styles,type=_this$props2.type,disabled=_this$props2.disabled,readonly=_this$props2.readonly,_onBlur=_this$props2.onBlur,placeholder=_this$props2.placeholder,dropdownPortalTarget=_this$props2.dropdownPortalTarget,_styles$container=styles.container,containerStyle=void 0===_styles$container?function(styles){return styles}:_styles$container,_styles$input=(styles.value,styles.input),inputStyle=void 0===_styles$input?function(styles){return styles}:_styles$input,_styles$dropdownConta=styles.dropdownContainer,dropdownContainerStyle=void 0===_styles$dropdownConta?function(styles){return styles}:_styles$dropdownConta,_styles$suggestConten=styles.suggestContent,suggestContentStyle=void 0===_styles$suggestConten?function(styles){return styles}:_styles$suggestConten,_styles$listItem=styles.listItem,listItemStyle=void 0===_styles$listItem?function(styles){return styles}:_styles$listItem,_styles$listItemLabel=styles.listItemLabel,listItemLabelStyle=void 0===_styles$listItemLabel?function(styles){return styles}:_styles$listItemLabel,_styles$listItemDescr=styles.listItemDescription,listItemDescriptionStyle=void 0===_styles$listItemDescr?function(styles){return styles}:_styles$listItemDescr,_styles$listGroup=styles.listGroup,listGroupStyle=void 0===_styles$listGroup?function(styles){return styles}:_styles$listGroup,_styles$docContent=styles.docContent,docContentStyle=void 0===_styles$docContent?function(styles){return styles}:_styles$docContent,_styles$docSignature=styles.docSignature,docSignatureStyle=void 0===_styles$docSignature?function(styles){return styles}:_styles$docSignature,_styles$docExample=styles.docExample,docExampleStyle=void 0===_styles$docExample?function(styles){return styles}:_styles$docExample,_styles$docDescriptio=styles.docDescription,docDescriptionStyle=void 0===_styles$docDescriptio?function(styles){return styles}:_styles$docDescriptio,_styles$docArg=styles.docArg,docArgStyle=void 0===_styles$docArg?function(styles){return styles}:_styles$docArg,_styles$docArgName=styles.docArgName,docArgNameStyle=void 0===_styles$docArgName?function(styles){return styles}:_styles$docArgName,_styles$docArgDescrip=styles.docArgDescription,docArgDescriptionStyle=void 0===_styles$docArgDescrip?function(styles){return styles}:_styles$docArgDescrip,_this$state3=this.state,value=_this$state3.value,highlight=_this$state3.highlight,results=_this$state3.results,display=_this$state3.display,currentDoc=_this$state3.currentDoc;return react_default.a.createElement("div",{ref:this.containerRef,className:classes.container,style:containerStyle({width:"100%",height:"34px",border:"solid 1px gray",position:"relative",fontSize:"14px",fontFamily:'Monaco, Courier, "Ubuntu Mono", monospace',borderRadius:"5px",backgroundColor:"white"})},react_default.a.createElement("input",{className:classes.input,onChange:this.onChange,value:value,onKeyDown:this.onKeyDown,style:inputStyle({borderStyle:"none",outline:"none",width:"100%",lineHeight:"34px",height:"34px",fontSize:"14px",fontFamily:"Monaco, Courier",position:"absolute",top:0,caretColor:"black",backgroundColor:"transparent",overflow:"hidden"}),readOnly:readonly,disabled:disabled,placeholder:placeholder,type:type,onBlur:function onBlur(){_this2.setState({display:"none"}),_onBlur(value)}}),react_default.a.createElement(src_dropdown,{ref:this.dropdownContainerRef,container:dropdownPortalTarget,inputContainer:this.containerRef.current,className:classes.dropdownContainer,styles:dropdownContainerStyle,isOpen:"none"!==display},function(){switch(display){case"doc":return react_default.a.createElement("div",{className:classes.docContent,style:docContentStyle({padding:"6px"})},react_default.a.createElement("div",{className:classes.docSignature,style:docSignatureStyle({fontWeight:"bold",lineHeight:"20px",color:"gray"})},null==currentDoc?void 0:currentDoc.signature),react_default.a.createElement("div",{className:classes.docDescription,style:docDescriptionStyle({lineHeight:"15px",color:"gray"})},null==currentDoc?void 0:currentDoc.description),react_default.a.createElement("div",{className:classes.docExample,style:docExampleStyle({color:"gray",lineHeight:"20px"})},null!=currentDoc&&currentDoc.example?"Example: ".concat(null==currentDoc?void 0:currentDoc.example):""),react_default.a.createElement(react_default.a.Fragment,null,Object(lodash.map)(null==currentDoc?void 0:currentDoc.args,(function(argDesc,argName){return react_default.a.createElement("div",{key:Object(lodash.join)(["doc","arg",argName],"-"),className:classes.docArg,style:docArgStyle({color:"gray"})},react_default.a.createElement("span",{className:classes.docArgName,style:docArgNameStyle({fontWeight:"bold"})},"".concat(argName,":")),react_default.a.createElement("span",{className:classes.docDescription,style:docArgDescriptionStyle({paddingLeft:"5px"})},argDesc))}))));case"suggest":return react_default.a.createElement("dl",{className:classes.suggestContent,style:suggestContentStyle({margin:0})},Object(lodash.map)(results,(function(_ref7,groupIndex){var type=_ref7.type,items=_ref7.items;return react_default.a.createElement(react.Fragment,{key:Object(lodash.join)(["suggestion","group",type],"-")},react_default.a.createElement("dt",{className:classes.listGroup,style:listGroupStyle({fontWeight:Object(lodash.eq)(groupIndex,Object(lodash.first)(highlight))?"bold":void 0,padding:"0 6px",color:"gray"})},type),Object(lodash.map)(items,(function(_ref8,itemIndex){var title=_ref8.title,description=_ref8.description;return react_default.a.createElement("dd",{"data-id":Object(lodash.join)([type,title],"-"),className:classes.listItem,key:Object(lodash.join)(["suggestion","group",type,"item",title],"-"),style:listItemStyle({marginLeft:0,padding:"5px 6px",backgroundColor:Object(lodash.eq)(groupIndex,Object(lodash.first)(highlight))&&Object(lodash.eq)(itemIndex,Object(lodash.last)(highlight))?"gainsboro":"white",cursor:"pointer"},{groupIndex:groupIndex,itemIndex:itemIndex,highlight:highlight,suggestions:suggestions}),onClick:Object(lodash.partial)(_this2.onClickSuggestion,groupIndex,itemIndex),onMouseOver:Object(lodash.partial)(_this2.onMouseOver,groupIndex,itemIndex),onFocus:Object(lodash.partial)(_this2.onMouseOver,groupIndex,itemIndex)},react_default.a.createElement("label",{className:classes.listItemLabel,style:listItemLabelStyle({fontWeight:Object(lodash.eq)(groupIndex,Object(lodash.first)(highlight))&&Object(lodash.eq)(itemIndex,Object(lodash.last)(highlight))?"bold":void 0},{groupIndex:groupIndex,itemIndex:itemIndex,highlight:highlight,suggestions:suggestions})},title),react_default.a.createElement("i",{className:classes.listItemDescription,style:listItemDescriptionStyle({paddingLeft:"14px",margin:0,color:"gray"})},description))})))})));default:return""}}()))}}]),FormulaBar}(react.Component);function _0_Welcome_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _0_Welcome_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?_0_Welcome_ownKeys(Object(source),!0).forEach((function(key){_0_Welcome_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):_0_Welcome_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _0_Welcome_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}src_FormulaBar.displayName="FormulaBar",_defineProperty(src_FormulaBar,"propTypes",{value:prop_types_default.a.string,suggestions:prop_types_default.a.arrayOf(prop_types_default.a.shape({type:prop_types_default.a.string.isRequired,color:prop_types_default.a.string,items:prop_types_default.a.arrayOf(prop_types_default.a.shape({title:prop_types_default.a.string.isRequired,description:prop_types_default.a.string,autocomplete:prop_types_default.a.string,docs:prop_types_default.a.shape({signature:prop_types_default.a.string.isRequired,example:prop_types_default.a.string,args:prop_types_default.a.object})}))})),onChange:prop_types_default.a.func,classes:prop_types_default.a.shape({container:prop_types_default.a.string,value:prop_types_default.a.string,input:prop_types_default.a.string,listItem:prop_types_default.a.string,listItemLabel:prop_types_default.a.string,listItemDescription:prop_types_default.a.string,listGroup:prop_types_default.a.string}),styles:prop_types_default.a.shape({container:prop_types_default.a.func,value:prop_types_default.a.func,input:prop_types_default.a.func,listItem:prop_types_default.a.func,listItemLabel:prop_types_default.a.func,listItemDescription:prop_types_default.a.func,listGroup:prop_types_default.a.func}),disabled:prop_types_default.a.bool,placeholder:prop_types_default.a.string,onBlur:prop_types_default.a.func,readonly:prop_types_default.a.bool,type:prop_types_default.a.string,dropdownPortalTarget:prop_types_default.a.instanceOf(Element)}),_defineProperty(src_FormulaBar,"defaultProps",{value:"",suggestions:[],classes:{},styles:{container:function container(styles){return styles},value:function value(styles){return styles},input:function input(styles){return styles},dropdownContainer:function dropdownContainer(styles){return styles},suggestContent:function suggestContent(styles){return styles},listItem:function listItem(styles){return styles},listItemLabel:function listItemLabel(styles){return styles},listItemDescription:function listItemDescription(styles){return styles},listGroup:function listGroup(styles){return styles},docContainer:function docContainer(styles){return styles},docContent:function docContent(styles){return styles},docSignature:function docSignature(styles){return styles},docExample:function docExample(styles){return styles},docDescription:function docDescription(styles){return styles},docArg:function docArg(styles){return styles},docArgName:function docArgName(styles){return styles},docArgDescription:function docArgDescription(styles){return styles}},onChange:function onChange(){},disabled:!1,placeholder:"",onBlur:function onBlur(){},readonly:!1,type:"text",dropdownPortalTarget:void 0}),src_FormulaBar.__docgenInfo={description:"",methods:[{name:"generateDoc",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"generateSuggestions",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"onChange",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"onKeyDown",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null},{name:"onAutocomplete",docblock:null,modifiers:[],params:[{name:"groupIndex",type:null},{name:"itemIndex",type:null}],returns:null},{name:"onClickSuggestion",docblock:null,modifiers:[],params:[{name:"groupIndex",type:null},{name:"itemIndex",type:null}],returns:null},{name:"onMouseOver",docblock:null,modifiers:[],params:[{name:"groupIndex",type:null},{name:"itemIndex",type:null}],returns:null}],displayName:"FormulaBar",props:{value:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},suggestions:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{type:{name:"string",required:!0},color:{name:"string",required:!1},items:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0},description:{name:"string",required:!1},autocomplete:{name:"string",required:!1},docs:{name:"shape",value:{signature:{name:"string",required:!0},example:{name:"string",required:!1},args:{name:"object",required:!1}},required:!1}}},required:!1}}}},required:!1,description:""},classes:{defaultValue:{value:"{}",computed:!1},type:{name:"shape",value:{container:{name:"string",required:!1},value:{name:"string",required:!1},input:{name:"string",required:!1},listItem:{name:"string",required:!1},listItemLabel:{name:"string",required:!1},listItemDescription:{name:"string",required:!1},listGroup:{name:"string",required:!1}}},required:!1,description:""},styles:{defaultValue:{value:"{\r\n  container: styles => styles,\r\n  value: styles => styles,\r\n  input: styles => styles,\r\n  dropdownContainer: styles => styles,\r\n  suggestContent: styles => styles,\r\n  listItem: styles => styles,\r\n  listItemLabel: styles => styles,\r\n  listItemDescription: styles => styles,\r\n  listGroup: styles => styles,\r\n  docContainer: styles => styles,\r\n  docContent: styles => styles,\r\n  docSignature: styles => styles,\r\n  docExample: styles => styles,\r\n  docDescription: styles => styles,\r\n  docArg: styles => styles,\r\n  docArgName: styles => styles,\r\n  docArgDescription: styles => styles,\r\n}",computed:!1},type:{name:"shape",value:{container:{name:"func",required:!1},value:{name:"func",required:!1},input:{name:"func",required:!1},listItem:{name:"func",required:!1},listItemLabel:{name:"func",required:!1},listItemDescription:{name:"func",required:!1},listGroup:{name:"func",required:!1}}},required:!1,description:""},onChange:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},placeholder:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},onBlur:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""},readonly:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},type:{defaultValue:{value:"'text'",computed:!1},type:{name:"string"},required:!1,description:""},dropdownPortalTarget:{defaultValue:{value:"undefined",computed:!0},type:{name:"instanceOf",value:"Element"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.jsx"]={name:"FormulaBar",docgenInfo:src_FormulaBar.__docgenInfo,path:"src/index.jsx"});__webpack_exports__.default={title:"Formula Bar"};var suggestion=function(){return react_default.a.createElement(src_FormulaBar,{placeholder:"Try type one of these function name(SUM/AVG/COUNT).",suggestions:[{type:"",color:"",items:[{title:"SUM",description:""},{title:"AVG",description:""},{title:"COUNT",description:""}]}]})};suggestion.displayName="suggestion",suggestion.story={name:"Suggestions"};var _0_Welcome_highlight=function(){return react_default.a.createElement(src_FormulaBar,{placeholder:"Try type one of these function name(SUM/AVG/COUNT).",suggestions:[{type:"",color:"blue",items:[{title:"SUM",description:""},{title:"AVG",description:""},{title:"COUNT",description:""}]}]})};_0_Welcome_highlight.displayName="highlight",_0_Welcome_highlight.story={name:"Syntax Highlight"};var _0_Welcome_description=function(){return react_default.a.createElement(src_FormulaBar,{placeholder:"Try type one of these function name(SUM/AVG/COUNT).",suggestions:[{type:"",color:"blue",items:[{title:"SUM",description:"Summary function"},{title:"AVG",description:"Average function"},{title:"COUNT",description:"Count function"}]}]})};_0_Welcome_description.displayName="description",_0_Welcome_description.story={name:"Keywords Description"};var group=function(){return react_default.a.createElement(src_FormulaBar,{placeholder:"Try type one of these function name(SUM/AVG/COUNT) or any variable type(Number/String/Boolean).",suggestions:[{type:"Function",color:"blue",items:[{title:"SUM",description:"Summary function"},{title:"AVG",description:"Average function"},{title:"COUNT",description:"Count function"}]},{type:"Variable",color:"cyan",items:[{title:"Number",description:"Number type"},{title:"String",description:"String type"},{title:"Boolean",description:"Boolean type"}]}]})};group.displayName="group",group.story={name:"Group Keywords"};var style=function(){return react_default.a.createElement(src_FormulaBar,{placeholder:"Try type one of these function name(SUM/AVG/COUNT).",suggestions:[{type:"",color:"purple",items:[{title:"SUM",description:"Summary function"},{title:"AVG",description:"Average function"},{title:"COUNT",description:"Count function"}]}],styles:{listItem:function listItem(defaultStyles,_ref){var groupIndex=_ref.groupIndex,suggestions=_ref.suggestions;return _0_Welcome_objectSpread(_0_Welcome_objectSpread({},defaultStyles),{},{backgroundColor:suggestions[groupIndex].color})}}})};style.displayName="style",style.story={name:"Custom Styles"};var documentation=function(){return react_default.a.createElement(src_FormulaBar,{placeholder:"Try type one of these function name(SUM/CONCAT/CONTAINS).",suggestions:[{type:"Functions",color:"purple",items:[{title:"CONCAT",description:"Combines multiple strings together",autocomplete:"CONCAT(",docs:{signature:"CONCAT(value1, [value2, ...])",example:'MAX($A, 1, "hello")',args:{value1:"The first string to be combined","[value2, ...]":"(optional) Additional strings to combine"}}},{title:"CONTAINS",description:"Checks to see if a string is a substring of another string",autocomplete:"CONTAINS(",docs:{signature:"CONTAINS(substring, full_string)",example:'CONTAINS("bear", "polar bear")',args:{substring:"The string you want to search for",full_string:"The string being searched for the substring"}}},{title:"SUM",description:"Adds all the given values together",autocomplete:"SUM(",docs:{signature:"SUM(value1, [value2, ...])",example:"SUM($A, 1, 2)",args:{value1:"The first number to add","[value2, ...]":"(optional) Additional numbers to add"}}}]}]})};documentation.displayName="documentation",documentation.story={name:"Documentation"},suggestion.__docgenInfo={description:"",methods:[],displayName:"suggestion"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.jsx"]={name:"suggestion",docgenInfo:suggestion.__docgenInfo,path:"stories/0-Welcome.jsx"}),_0_Welcome_highlight.__docgenInfo={description:"",methods:[],displayName:"highlight"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.jsx"]={name:"highlight",docgenInfo:_0_Welcome_highlight.__docgenInfo,path:"stories/0-Welcome.jsx"}),_0_Welcome_description.__docgenInfo={description:"",methods:[],displayName:"description"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.jsx"]={name:"description",docgenInfo:_0_Welcome_description.__docgenInfo,path:"stories/0-Welcome.jsx"}),group.__docgenInfo={description:"",methods:[],displayName:"group"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.jsx"]={name:"group",docgenInfo:group.__docgenInfo,path:"stories/0-Welcome.jsx"}),style.__docgenInfo={description:"",methods:[],displayName:"style"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.jsx"]={name:"style",docgenInfo:style.__docgenInfo,path:"stories/0-Welcome.jsx"}),documentation.__docgenInfo={description:"",methods:[],displayName:"documentation"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.jsx"]={name:"documentation",docgenInfo:documentation.__docgenInfo,path:"stories/0-Welcome.jsx"})}},[[297,1,2]]]);
//# sourceMappingURL=main.5a0f682a7a682cb6a66d.bundle.js.map