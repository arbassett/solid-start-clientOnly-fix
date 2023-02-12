import{t as I,m as N}from"./index.b720fcb5.js";import"./entry-client.8fedd974.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.35.0(71ac097e6155a405f6be52b0b368a04508c31e31)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var T=Object.defineProperty,M=Object.getOwnPropertyDescriptor,K=Object.getOwnPropertyNames,R=Object.prototype.hasOwnProperty,E=(e,t,s)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,D=(e,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of K(t))!R.call(e,i)&&i!==s&&T(e,i,{get:()=>t[i],enumerable:!(o=M(t,i))||o.enumerable});return e},H=(e,t,s)=>(D(e,t,"default"),s&&D(s,t,"default")),f=(e,t,s)=>(E(e,typeof t!="symbol"?t+"":t,s),s),n={};H(n,N);var V=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=n.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(n.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},a={};a["lib.d.ts"]=!0;a["lib.dom.d.ts"]=!0;a["lib.dom.iterable.d.ts"]=!0;a["lib.es2015.collection.d.ts"]=!0;a["lib.es2015.core.d.ts"]=!0;a["lib.es2015.d.ts"]=!0;a["lib.es2015.generator.d.ts"]=!0;a["lib.es2015.iterable.d.ts"]=!0;a["lib.es2015.promise.d.ts"]=!0;a["lib.es2015.proxy.d.ts"]=!0;a["lib.es2015.reflect.d.ts"]=!0;a["lib.es2015.symbol.d.ts"]=!0;a["lib.es2015.symbol.wellknown.d.ts"]=!0;a["lib.es2016.array.include.d.ts"]=!0;a["lib.es2016.d.ts"]=!0;a["lib.es2016.full.d.ts"]=!0;a["lib.es2017.d.ts"]=!0;a["lib.es2017.full.d.ts"]=!0;a["lib.es2017.intl.d.ts"]=!0;a["lib.es2017.object.d.ts"]=!0;a["lib.es2017.sharedmemory.d.ts"]=!0;a["lib.es2017.string.d.ts"]=!0;a["lib.es2017.typedarrays.d.ts"]=!0;a["lib.es2018.asyncgenerator.d.ts"]=!0;a["lib.es2018.asynciterable.d.ts"]=!0;a["lib.es2018.d.ts"]=!0;a["lib.es2018.full.d.ts"]=!0;a["lib.es2018.intl.d.ts"]=!0;a["lib.es2018.promise.d.ts"]=!0;a["lib.es2018.regexp.d.ts"]=!0;a["lib.es2019.array.d.ts"]=!0;a["lib.es2019.d.ts"]=!0;a["lib.es2019.full.d.ts"]=!0;a["lib.es2019.object.d.ts"]=!0;a["lib.es2019.string.d.ts"]=!0;a["lib.es2019.symbol.d.ts"]=!0;a["lib.es2020.bigint.d.ts"]=!0;a["lib.es2020.d.ts"]=!0;a["lib.es2020.full.d.ts"]=!0;a["lib.es2020.intl.d.ts"]=!0;a["lib.es2020.promise.d.ts"]=!0;a["lib.es2020.sharedmemory.d.ts"]=!0;a["lib.es2020.string.d.ts"]=!0;a["lib.es2020.symbol.wellknown.d.ts"]=!0;a["lib.es2021.d.ts"]=!0;a["lib.es2021.full.d.ts"]=!0;a["lib.es2021.intl.d.ts"]=!0;a["lib.es2021.promise.d.ts"]=!0;a["lib.es2021.string.d.ts"]=!0;a["lib.es2021.weakref.d.ts"]=!0;a["lib.es5.d.ts"]=!0;a["lib.es6.d.ts"]=!0;a["lib.esnext.d.ts"]=!0;a["lib.esnext.full.d.ts"]=!0;a["lib.esnext.intl.d.ts"]=!0;a["lib.esnext.promise.d.ts"]=!0;a["lib.esnext.string.d.ts"]=!0;a["lib.esnext.weakref.d.ts"]=!0;a["lib.scripthost.d.ts"]=!0;a["lib.webworker.d.ts"]=!0;a["lib.webworker.importscripts.d.ts"]=!0;a["lib.webworker.iterable.d.ts"]=!0;function C(e,t,s=0){if(typeof e=="string")return e;if(e===void 0)return"";let o="";if(s){o+=t;for(let i=0;i<s;i++)o+="  "}if(o+=e.messageText,s++,e.next)for(const i of e.next)o+=C(i,t,s);return o}function w(e){return e?e.map(t=>t.text).join(""):""}var _=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let s=e.getPositionAt(t.start),o=e.getPositionAt(t.start+t.length),{lineNumber:i,column:d}=s,{lineNumber:c,column:r}=o;return{startLineNumber:i,startColumn:d,endLineNumber:c,endColumn:r}}},W=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!a[e.path.slice(1)]:!1}getOrCreateModel(e){const t=n.Uri.parse(e),s=n.editor.getModel(t);if(s)return s;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return n.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const o=I.getExtraLibs()[e];return o?n.editor.createModel(o.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){!this._containsLibFile(e)||await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},j=class extends _{constructor(e,t,s,o){super(o),this._libFiles=e,this._defaults=t,this._selector=s;const i=r=>{if(r.getLanguageId()!==s)return;const u=()=>{const{onlyVisible:b}=this._defaults.getDiagnosticsOptions();b?r.isAttachedToEditor()&&this._doValidate(r):this._doValidate(r)};let g;const p=r.onDidChangeContent(()=>{clearTimeout(g),g=window.setTimeout(u,500)}),h=r.onDidChangeAttached(()=>{const{onlyVisible:b}=this._defaults.getDiagnosticsOptions();b&&(r.isAttachedToEditor()?u():n.editor.setModelMarkers(r,this._selector,[]))});this._listener[r.uri.toString()]={dispose(){p.dispose(),h.dispose(),clearTimeout(g)}},u()},d=r=>{n.editor.setModelMarkers(r,this._selector,[]);const u=r.uri.toString();this._listener[u]&&(this._listener[u].dispose(),delete this._listener[u])};this._disposables.push(n.editor.onDidCreateModel(r=>i(r))),this._disposables.push(n.editor.onWillDisposeModel(d)),this._disposables.push(n.editor.onDidChangeModelLanguage(r=>{d(r.model),i(r.model)})),this._disposables.push({dispose(){for(const r of n.editor.getModels())d(r)}});const c=()=>{for(const r of n.editor.getModels())d(r),i(r)};this._disposables.push(this._defaults.onDidChange(c)),this._disposables.push(this._defaults.onDidExtraLibsChange(c)),n.editor.getModels().forEach(r=>i(r))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const s=[],{noSyntaxValidation:o,noSemanticValidation:i,noSuggestionDiagnostics:d}=this._defaults.getDiagnosticsOptions();o||s.push(t.getSyntacticDiagnostics(e.uri.toString())),i||s.push(t.getSemanticDiagnostics(e.uri.toString())),d||s.push(t.getSuggestionDiagnostics(e.uri.toString()));const c=await Promise.all(s);if(!c||e.isDisposed())return;const r=c.reduce((g,p)=>p.concat(g),[]).filter(g=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)===-1),u=r.map(g=>g.relatedInformation||[]).reduce((g,p)=>p.concat(g),[]).map(g=>g.file?n.Uri.parse(g.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(u),!e.isDisposed()&&n.editor.setModelMarkers(e,this._selector,r.map(g=>this._convertDiagnostics(e,g)))}_convertDiagnostics(e,t){const s=t.start||0,o=t.length||1,{lineNumber:i,column:d}=e.getPositionAt(s),{lineNumber:c,column:r}=e.getPositionAt(s+o),u=[];return t.reportsUnnecessary&&u.push(n.MarkerTag.Unnecessary),t.reportsDeprecated&&u.push(n.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:i,startColumn:d,endLineNumber:c,endColumn:r,message:C(t.messageText,`
`),code:t.code.toString(),tags:u,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const s=[];return t.forEach(o=>{let i=e;if(o.file&&(i=this._libFiles.getOrCreateModel(o.file.fileName)),!i)return;const d=o.start||0,c=o.length||1,{lineNumber:r,column:u}=i.getPositionAt(d),{lineNumber:g,column:p}=i.getPositionAt(d+c);s.push({resource:i.uri,startLineNumber:r,startColumn:u,endLineNumber:g,endColumn:p,message:C(o.messageText,`
`)})}),s}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return n.MarkerSeverity.Error;case 3:return n.MarkerSeverity.Info;case 0:return n.MarkerSeverity.Warning;case 2:return n.MarkerSeverity.Hint}return n.MarkerSeverity.Info}},x=class extends _{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,s,o){const i=e.getWordUntilPosition(t),d=new n.Range(t.lineNumber,i.startColumn,t.lineNumber,i.endColumn),c=e.uri,r=e.getOffsetAt(t),u=await this._worker(c);if(e.isDisposed())return;const g=await u.getCompletionsAtPosition(c.toString(),r);return!g||e.isDisposed()?void 0:{suggestions:g.entries.map(h=>{let b=d;if(h.replacementSpan){const S=e.getPositionAt(h.replacementSpan.start),v=e.getPositionAt(h.replacementSpan.start+h.replacementSpan.length);b=new n.Range(S.lineNumber,S.column,v.lineNumber,v.column)}const y=[];return h.kindModifiers!==void 0&&h.kindModifiers.indexOf("deprecated")!==-1&&y.push(n.languages.CompletionItemTag.Deprecated),{uri:c,position:t,offset:r,range:b,label:h.name,insertText:h.name,sortText:h.sortText,kind:x.convertKind(h.kind),tags:y}})}}async resolveCompletionItem(e,t){const s=e,o=s.uri,i=s.position,d=s.offset,r=await(await this._worker(o)).getCompletionEntryDetails(o.toString(),d,s.label);return r?{uri:o,position:i,label:r.name,kind:x.convertKind(r.kind),detail:w(r.displayParts),documentation:{value:x.createDocumentationString(r)}}:s}static convertKind(e){switch(e){case l.primitiveType:case l.keyword:return n.languages.CompletionItemKind.Keyword;case l.variable:case l.localVariable:return n.languages.CompletionItemKind.Variable;case l.memberVariable:case l.memberGetAccessor:case l.memberSetAccessor:return n.languages.CompletionItemKind.Field;case l.function:case l.memberFunction:case l.constructSignature:case l.callSignature:case l.indexSignature:return n.languages.CompletionItemKind.Function;case l.enum:return n.languages.CompletionItemKind.Enum;case l.module:return n.languages.CompletionItemKind.Module;case l.class:return n.languages.CompletionItemKind.Class;case l.interface:return n.languages.CompletionItemKind.Interface;case l.warning:return n.languages.CompletionItemKind.File}return n.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const s of e.tags)t+=`

${L(s)}`;return t}};function L(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[s,...o]=e.text;t+=`\`${s.text}\``,o.length>0&&(t+=` \u2014 ${o.map(i=>i.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(s=>s.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var P=class extends _{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case n.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case n.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case n.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,s,o){const i=e.uri,d=e.getOffsetAt(t),c=await this._worker(i);if(e.isDisposed())return;const r=await c.getSignatureHelpItems(i.toString(),d,{triggerReason:P._toSignatureHelpTriggerReason(o)});if(!r||e.isDisposed())return;const u={activeSignature:r.selectedItemIndex,activeParameter:r.argumentIndex,signatures:[]};return r.items.forEach(g=>{const p={label:"",parameters:[]};p.documentation={value:w(g.documentation)},p.label+=w(g.prefixDisplayParts),g.parameters.forEach((h,b,y)=>{const S=w(h.displayParts),v={label:S,documentation:{value:w(h.documentation)}};p.label+=S,p.parameters.push(v),b<y.length-1&&(p.label+=w(g.separatorDisplayParts))}),p.label+=w(g.suffixDisplayParts),u.signatures.push(p)}),{value:u,dispose(){}}}},B=class extends _{async provideHover(e,t,s){const o=e.uri,i=e.getOffsetAt(t),d=await this._worker(o);if(e.isDisposed())return;const c=await d.getQuickInfoAtPosition(o.toString(),i);if(!c||e.isDisposed())return;const r=w(c.documentation),u=c.tags?c.tags.map(p=>L(p)).join(`  

`):"",g=w(c.displayParts);return{range:this._textSpanToRange(e,c.textSpan),contents:[{value:"```typescript\n"+g+"\n```\n"},{value:r+(u?`

`+u:"")}]}}},U=class extends _{async provideDocumentHighlights(e,t,s){const o=e.uri,i=e.getOffsetAt(t),d=await this._worker(o);if(e.isDisposed())return;const c=await d.getOccurrencesAtPosition(o.toString(),i);if(!(!c||e.isDisposed()))return c.map(r=>({range:this._textSpanToRange(e,r.textSpan),kind:r.isWriteAccess?n.languages.DocumentHighlightKind.Write:n.languages.DocumentHighlightKind.Text}))}},$=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,s){const o=e.uri,i=e.getOffsetAt(t),d=await this._worker(o);if(e.isDisposed())return;const c=await d.getDefinitionAtPosition(o.toString(),i);if(!c||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(c.map(u=>n.Uri.parse(u.fileName))),e.isDisposed()))return;const r=[];for(let u of c){const g=this._libFiles.getOrCreateModel(u.fileName);g&&r.push({uri:g.uri,range:this._textSpanToRange(g,u.textSpan)})}return r}},z=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,s,o){const i=e.uri,d=e.getOffsetAt(t),c=await this._worker(i);if(e.isDisposed())return;const r=await c.getReferencesAtPosition(i.toString(),d);if(!r||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(r.map(g=>n.Uri.parse(g.fileName))),e.isDisposed()))return;const u=[];for(let g of r){const p=this._libFiles.getOrCreateModel(g.fileName);p&&u.push({uri:p.uri,range:this._textSpanToRange(p,g.textSpan)})}return u}},G=class extends _{async provideDocumentSymbols(e,t){const s=e.uri,o=await this._worker(s);if(e.isDisposed())return;const i=await o.getNavigationBarItems(s.toString());if(!i||e.isDisposed())return;const d=(r,u,g)=>{let p={name:u.text,detail:"",kind:m[u.kind]||n.languages.SymbolKind.Variable,range:this._textSpanToRange(e,u.spans[0]),selectionRange:this._textSpanToRange(e,u.spans[0]),tags:[]};if(g&&(p.containerName=g),u.childItems&&u.childItems.length>0)for(let h of u.childItems)d(r,h,p.name);r.push(p)};let c=[];return i.forEach(r=>d(c,r)),c}},l=class{};f(l,"unknown","");f(l,"keyword","keyword");f(l,"script","script");f(l,"module","module");f(l,"class","class");f(l,"interface","interface");f(l,"type","type");f(l,"enum","enum");f(l,"variable","var");f(l,"localVariable","local var");f(l,"function","function");f(l,"localFunction","local function");f(l,"memberFunction","method");f(l,"memberGetAccessor","getter");f(l,"memberSetAccessor","setter");f(l,"memberVariable","property");f(l,"constructorImplementation","constructor");f(l,"callSignature","call");f(l,"indexSignature","index");f(l,"constructSignature","construct");f(l,"parameter","parameter");f(l,"typeParameter","type parameter");f(l,"primitiveType","primitive type");f(l,"label","label");f(l,"alias","alias");f(l,"const","const");f(l,"let","let");f(l,"warning","warning");var m=Object.create(null);m[l.module]=n.languages.SymbolKind.Module;m[l.class]=n.languages.SymbolKind.Class;m[l.enum]=n.languages.SymbolKind.Enum;m[l.interface]=n.languages.SymbolKind.Interface;m[l.memberFunction]=n.languages.SymbolKind.Method;m[l.memberVariable]=n.languages.SymbolKind.Property;m[l.memberGetAccessor]=n.languages.SymbolKind.Property;m[l.memberSetAccessor]=n.languages.SymbolKind.Property;m[l.variable]=n.languages.SymbolKind.Variable;m[l.const]=n.languages.SymbolKind.Variable;m[l.localVariable]=n.languages.SymbolKind.Variable;m[l.variable]=n.languages.SymbolKind.Variable;m[l.function]=n.languages.SymbolKind.Function;m[l.localFunction]=n.languages.SymbolKind.Function;var k=class extends _{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},J=class extends k{async provideDocumentRangeFormattingEdits(e,t,s,o){const i=e.uri,d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(i);if(e.isDisposed())return;const u=await r.getFormattingEditsForRange(i.toString(),d,c,k._convertOptions(s));if(!(!u||e.isDisposed()))return u.map(g=>this._convertTextChanges(e,g))}},Q=class extends k{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,s,o,i){const d=e.uri,c=e.getOffsetAt(t),r=await this._worker(d);if(e.isDisposed())return;const u=await r.getFormattingEditsAfterKeystroke(d.toString(),c,s,k._convertOptions(o));if(!(!u||e.isDisposed()))return u.map(g=>this._convertTextChanges(e,g))}},q=class extends k{async provideCodeActions(e,t,s,o){const i=e.uri,d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=k._convertOptions(e.getOptions()),u=s.markers.filter(b=>b.code).map(b=>b.code).map(Number),g=await this._worker(i);if(e.isDisposed())return;const p=await g.getCodeFixesAtPosition(i.toString(),d,c,u,r);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(b=>b.changes.filter(y=>y.isNewFile).length===0).map(b=>this._tsCodeFixActionToMonacoCodeAction(e,s,b)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,s){const o=[];for(const d of s.changes)for(const c of d.textChanges)o.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,c.span),text:c.newText}});return{title:s.description,edit:{edits:o},diagnostics:t.markers,kind:"quickfix"}}},X=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,s,o){const i=e.uri,d=i.toString(),c=e.getOffsetAt(t),r=await this._worker(i);if(e.isDisposed())return;const u=await r.getRenameInfo(d,c,{allowRenameOfImportPath:!1});if(u.canRename===!1)return{edits:[],rejectReason:u.localizedErrorMessage};if(u.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const g=await r.findRenameLocations(d,c,!1,!1,!1);if(!g||e.isDisposed())return;const p=[];for(const h of g){const b=this._libFiles.getOrCreateModel(h.fileName);if(b)p.push({resource:b.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(b,h.textSpan),text:s}});else throw new Error(`Unknown file ${h.fileName}.`)}return{edits:p}}},Y=class extends _{async provideInlayHints(e,t,s){const o=e.uri,i=o.toString(),d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(o);return e.isDisposed()?null:{hints:(await r.provideInlayHints(i,d,c)).map(p=>({...p,label:p.text,position:e.getPositionAt(p.position),kind:this._convertHintKind(p.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return n.languages.InlayHintKind.Parameter;case"Type":return n.languages.InlayHintKind.Type;default:return n.languages.InlayHintKind.Type}}},F,A;function re(e){A=O(e,"typescript")}function se(e){F=O(e,"javascript")}function ie(){return new Promise((e,t)=>{if(!F)return t("JavaScript not registered!");e(F)})}function ne(){return new Promise((e,t)=>{if(!A)return t("TypeScript not registered!");e(A)})}function O(e,t){const s=[],o=new V(t,e),i=(...r)=>o.getLanguageServiceWorker(...r),d=new W(i);function c(){const{modeConfiguration:r}=e;Z(s),r.completionItems&&s.push(n.languages.registerCompletionItemProvider(t,new x(i))),r.signatureHelp&&s.push(n.languages.registerSignatureHelpProvider(t,new P(i))),r.hovers&&s.push(n.languages.registerHoverProvider(t,new B(i))),r.documentHighlights&&s.push(n.languages.registerDocumentHighlightProvider(t,new U(i))),r.definitions&&s.push(n.languages.registerDefinitionProvider(t,new $(d,i))),r.references&&s.push(n.languages.registerReferenceProvider(t,new z(d,i))),r.documentSymbols&&s.push(n.languages.registerDocumentSymbolProvider(t,new G(i))),r.rename&&s.push(n.languages.registerRenameProvider(t,new X(d,i))),r.documentRangeFormattingEdits&&s.push(n.languages.registerDocumentRangeFormattingEditProvider(t,new J(i))),r.onTypeFormattingEdits&&s.push(n.languages.registerOnTypeFormattingEditProvider(t,new Q(i))),r.codeActions&&s.push(n.languages.registerCodeActionProvider(t,new q(i))),r.inlayHints&&s.push(n.languages.registerInlayHintsProvider(t,new Y(i))),r.diagnostics&&s.push(new j(d,e,t,i))}return c(),i}function Z(e){for(;e.length;)e.pop().dispose()}export{_ as Adapter,q as CodeActionAdaptor,$ as DefinitionAdapter,j as DiagnosticsAdapter,J as FormatAdapter,k as FormatHelper,Q as FormatOnTypeAdapter,Y as InlayHintsAdapter,l as Kind,W as LibFiles,U as OccurrencesAdapter,G as OutlineAdapter,B as QuickInfoAdapter,z as ReferenceAdapter,X as RenameAdapter,P as SignatureHelpAdapter,x as SuggestAdapter,V as WorkerManager,C as flattenDiagnosticMessageText,ie as getJavaScriptWorker,ne as getTypeScriptWorker,se as setupJavaScript,re as setupTypeScript};
