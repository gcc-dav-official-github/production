// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:builder/plugins/attribute-config/dataSource/AdditionalDataSources.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"ds-header"\x3e\r\n    \x3cspan class\x3d"ds-title ds-title-box textOverFlow" title\x3d"${nls.dataSource}"\x3e${nls.dataSource}\x3c/span\x3e\r\n    \x3cdiv class\x3d"dataSource-add-box dataSource-add margin-right-10" data-dojo-attach-point\x3d"addNewDs" data-dojo-attach-event\x3d"click:_onAddNewClick" title\x3d"${nls.addNew}"\x3e\r\n      \x3cdiv class\x3d"img_add"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"text_add textOverFlow" title\x3d"${nls.addNew}"\x3e${nls.addNew}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"dsOptions" class\x3d"ds-suspension ds-options ds-options-lr jimu-float-trailing hide"\x3e\r\n    \x3cdiv nowrap class\x3d"option-item textOverFlow" data-dojo-attach-point\x3d"btnAddLayer" data-dojo-attach-event\x3d"click:_onAddNewLayerClick" title\x3d"${nls.layer}"\x3e${nls.layer}\x3c/div\x3e\r\n    \x3cdiv nowrap class\x3d"option-item textOverFlow" data-dojo-attach-point\x3d"btnAddStatistics" data-dojo-attach-event\x3d"click:_onAddNewStatisticsClick" title\x3d"${nls.statistics}"\x3e${nls.statistics}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d\'tabelHeader\'\x3e\r\n    \x3cdiv class\x3d"table-header"\x3e\r\n      \x3cdiv class\x3d"textOverFlow" title\x3d"${nls.name}"\x3e${nls.name}\x3c/div\x3e\r\n      \x3cdiv class\x3d"textOverFlow" title\x3d"${nls.type}"\x3e${nls.type}\x3c/div\x3e\r\n      \x3cdiv\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"horizontial-line"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"no-data-source-tip no-data-source-tip-box" data-dojo-attach-point\x3d"noDataSourceTip"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"sourcesList" data-dojo-attach-point\x3d"sourcesList"\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv style\x3d"margin-top: 30px;" data-dojo-attach-point\x3d"refreshIntervalDiv"\x3e\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./AdditionalDataSources.html dojo/on dojo/mouse dojo/query dojo/topic dojo/_base/lang dojo/_base/html jimu/dijit/_QueryableLayerSourcePopup jimu/dijit/Message jimu/utils ./DataSourceConfigPopup ./utils builder/dijit/RefreshInterval dijit/form/Select dijit/form/ValidationTextBox".split(" "),function(q,r,t,u,v,e,k,f,l,d,c,w,m,x,y,z,A){var n=k.enter,p=k.leave;return q([r,t,u],{templateString:v,
baseClass:"additional-data-sources",_layerId:"",_serviceType:"",_targetSourceId:"",layerType:"Features",_sourceType:"",postMixInProperties:function(){this.nls=d.mixin(this.nls,window.jimuNls.common,window.builderNls)},postCreate:function(){this.inherited(arguments);this._initRefreshInterval();this._renderUIByConfig();this._initEvent();this.own(l.subscribe("app/appConfigChanged",d.hitch(this,this._onAppConfigChanged)))},setMap:function(a){a&&(this.map=a)},_onAppConfigChanged:function(a){var b=x.isEqual(this.appConfig.dataSource,
a.dataSource);this.appConfig&&!b&&(this.appConfig=a,c.empty(this.sourcesList),this._renderUIByConfig())},_initRefreshInterval:function(){this.refreshIntervalDijit=new A({defaultRefreshTip:this.nls.defaultRefreshTip_dataSource,singleRefreshTip:this.nls.singleRefreshTip_dataSource});this.refreshIntervalDijit.placeAt(this.refreshIntervalDiv)},_renderUIByConfig:function(){var a=d.clone(this.appConfig.dataSource),b=a.dataSources,g;for(g in b)"widget"!==g.split("~")[0]&&this._addSourceTr(b[g]);a=a.settings||
{};b={};"undefined"!==typeof a.unifiedRefreshInterval?(b.useWebMapRefreshInterval=!1,b.minutes=a.unifiedRefreshInterval):b.useWebMapRefreshInterval=!0;this.refreshIntervalDijit.setValue(b);this._isNotEmptySourceList()?(c.setStyle(this.refreshIntervalDiv,"display",""),c.setStyle(this.tabelHeader,"display",""),c.setStyle(this.noDataSourceTip,"display","none")):(c.setStyle(this.refreshIntervalDiv,"display","none"),c.setStyle(this.tabelHeader,"display","none"),c.setStyle(this.noDataSourceTip,"display",
""))},_onAddNewClick:function(a){a.stopPropagation();c.hasClass(this.dsOptions,"hide")?this._showDsOption():this._hiddenDsOption()},_showDsOption:function(){c.removeClass(this.dsOptions,"hide")},_hiddenDsOption:function(){c.addClass(this.dsOptions,"hide")},_onAddNewLayerClick:function(a){a.stopPropagation();this._sourceType="Features";this._addNewSource()},_onAddNewStatisticsClick:function(a){a.stopPropagation();this._sourceType="FeatureStatistics";this._addNewSource()},_addNewSource:function(){this._hiddenDsOption();
var a=new w({titleLabel:this.nls.setDataSource,dijitArgs:{multiple:!1,createMapResponse:this.map.webMapResponse,mustSupportStatistics:"FeatureStatistics"===this._sourceType,portalUrl:this.appConfig.portalUrl,style:{height:"100%"}}});this.own(e(a,"ok",d.hitch(this,function(b){"FeatureStatistics"!==this._sourceType||this._isSupportStatistics(b.definition)?(this._setLayerId(b),b.label=b.name,this._serviceType=a.getSelectedRadioType(),a.close(),a=null,this._createSourceConfigPopup(b,"add")):new m({message:this.nls.notSupportStatistics})})));
this.own(e(a,"cancel",d.hitch(this,function(){a.close();a=null})))},_createSourceConfigPopup:function(a,b){d.mixin(a,{type:this._sourceType,serviceType:this._serviceType});this.sourceConfigPopup=new y({titleLabel:this.nls.configDataSource,dijitArgs:{nls:this.nls,map:this.map,config:a}});this.own(e(this.sourceConfigPopup,"ok",d.hitch(this,function(a){this.sourceConfigPopup.close();this.sourceConfigPopup=null;"add"===b?this._addDataSourceToAppConfig(a):this._updateDataSourceOfAppConfig(a)})));this.own(e(this.sourceConfigPopup,
"cancel",d.hitch(this,function(){this.sourceConfigPopup.close();this.sourceConfigPopup=null})))},_addDataSourceToAppConfig:function(a){a.id=this._generateSourceId();var b=d.clone(this.appConfig.dataSource);b.dataSources||(b.dataSources={});b.dataSources[a.id]=a;this._updateAppConfig(b)},_addSourceTr:function(a){this._sourceType=a.type;var b;"Features"===this._sourceType?b=this.nls.layer:"FeatureStatistics"===this._sourceType&&(b=this.nls.statistics);b='\x3cdiv style\x3d"width: 100%;"\x3e\x3cdiv class\x3d"source-tr"\x3e\x3cdiv class\x3d"source-td source-tr-name textOverFlow" title\x3d"'+
a.label+'"\x3e'+a.label+'\x3c/div\x3e\x3cdiv class\x3d"source-td source-tr-type textOverFlow" title\x3d"'+b+'"\x3e'+b+'\x3c/div\x3e\x3cdiv class\x3d"source-td source-tr-action"\x3e\x3cdiv class\x3d"edit hidden"\x3e\x3c/div\x3e\x3cdiv class\x3d"delete hidden"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"mid-line"\x3e\x3c/div\x3e\x3c/div\x3e';b=c.toDom(b);var g=f(".source-tr",b)[0];g.source=a;c.place(b,this.sourcesList,"last");this._bindTrEvent(g)},_bindTrEvent:function(a){this.own(e(a,
["click",n,p],d.hitch(this,function(a){a.stopPropagation();var b=a.type;a=a.target||a.srcElement;var d=null;if("click"===b)c.hasClass(a,"edit")?(d=a.parentElement.parentElement,this._targetSourceId=d.source.id,this._editSourceTr(d)):c.hasClass(a,"delete")&&(d=a.parentElement.parentElement,this._targetSourceId=d.source.id,this._deleteSourceTr(d));else{var e=null,h=null;c.hasClass(a,"edit")?(e=a,d=e.parentElement.parentElement):c.hasClass(a,"delete")?(h=a,d=h.parentElement.parentElement):c.hasClass(a,
"source-tr")&&(d=a);if(e||h||d)"mouseover"===b?(c.removeClass(f(".source-td .edit",d)[0],"hidden"),c.removeClass(f(".source-td .delete",d)[0],"hidden")):"mouseout"===b&&(c.addClass(f(".source-td .edit",d)[0],"hidden"),c.addClass(f(".source-td .delete",d)[0],"hidden"))}})))},_editSourceTr:function(a){a=a.source;this._sourceType=a.type;var b={id:a.id,label:a.label,url:a.url,filter:a.filter,filterByExtent:a.filterByExtent,isDynamic:a.isDynamic,resultRecordType:a.resultRecordType,refreshInterval:a.refreshInterval,
dataSchema:a.dataSchema};"undefined"!==typeof a.resultRecordCount&&(b.resultRecordCount=a.resultRecordCount);"undefined"!==typeof a.portalUrl&&(b.portalUrl=a.portalUrl);"undefined"!==typeof a.itemId&&(b.itemId=a.itemId);this._createSourceConfigPopup(b)},_updateDataSourceOfAppConfig:function(a){a.id=this._targetSourceId;var b=d.clone(this.appConfig.dataSource),c;for(c in b.dataSources)c===this._targetSourceId&&(b.dataSources[c]=a);this._updateAppConfig(b)},_deleteSourceTr:function(){var a=new m({message:this.nls.removeSourceMessage,
buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){this._deleteDataSourceOfAppConfig();a.content=null;a.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:d.hitch(this,function(){a.content=null;a.close()})}]})},_deleteDataSourceOfAppConfig:function(){var a=d.clone(this.appConfig.dataSource);delete a.dataSources[this._targetSourceId];this._updateAppConfig(a)},_updateDataSettingsOfAppConfig:function(){var a={},b=d.clone(this.appConfig.dataSource),c=this.refreshIntervalDijit.getValue();
"undefined"!==typeof c.minutes&&(a.unifiedRefreshInterval=c.minutes);b.settings=a;this._updateAppConfig(b)},_updateAppConfig:function(a){l.publish("dataSourceChanged",a)},_generateSourceId:function(){if(this._serviceType)return z.createDataSourceId(this._serviceType,this._layerId)},_setLayerId:function(a){a.layerInfo&&a.layerInfo.id&&(this._layerId=a.layerInfo.id)},_initEvent:function(){this.own(e(document.body,"click",d.hitch(this,function(){this._hiddenDsOption()})));this.own(e(this.refreshIntervalDijit,
"user-input-change",d.hitch(this,function(){this._isNotEmptySourceList()&&this._updateDataSettingsOfAppConfig()})));this.own(e(this.addNewDs,[n,p],d.hitch(this,function(a){a.stopPropagation();var b=a.type;f("div",this.addNewDs).forEach(function(a){c.hasClass(a,"img_add")?"mouseover"===b?c.addClass(a,"img_add_hover"):"mouseout"===b&&c.removeClass(a,"img_add_hover"):c.hasClass(a,"text_add")&&("mouseover"===b?c.addClass(a,"text_add_hover"):"mouseout"===b&&c.removeClass(a,"text_add_hover"))}.bind(this))})))},
_isNotEmptySourceList:function(){return 0<f(".source-tr",this.sourcesList).length},_isSupportStatistics:function(a){return a&&"object"===typeof a?a.advancedQueryCapabilities?!!a.advancedQueryCapabilities.supportsStatistics:!!a.supportsStatistics:!1},destroy:function(){this.refreshIntervalDijit&&this.refreshIntervalDijit.destroy();this.inherited(arguments)}})});