var app=angular.module('coala',['ngStorage','ngRoute','ngSanitize','btford.markdown']);app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){$locationProvider.hashPrefix('')
$routeProvider.when('/home',{template:'<home></home>'}).when('/about',{template:'<about></about>'}).when('/languages',{template:'<languages></languages>'}).when('/getinvolved',{template:'<getinvolved></getinvolved>'}).when('/coalaonline',{template:'<coalaonline></coalaonline>'}).when('/home/:person',{template:'<people></people>'}).when('/:person',{template:'<people></people>'}).otherwise({redirectTo:'/home'});}]);app.controller('SnippetController',function(){self=this
self.cur=""
self.snip=snippets
self.languages=Object.keys(snippets)
$(document).ready(function(){$('select').material_select();})})
app.controller('TabController',function($location){this.tab=$location.path();this.setTab=function(stab){this.tab=stab;$location.path(stab);$(".button-collapse").sideNav('hide');}
this.isSet=function(stab){return $location.path()==stab}})
app.filter('format_desc',function(){return function(value){if(!value)return'';var lastspace=value.indexOf('.');if(lastspace!=-1){if(value.charAt(lastspace-1)==','){lastspace=lastspace- 1;}
value=value.substr(0,lastspace);}
return value;};});app.filter("toArray",function(){return function(obj){var result=[];angular.forEach(obj,function(val,key){result.push(val);});return result;};});app.filter('orderEmpty',function(){return function(array,key,type){var present,empty,result;if(!angular.isArray(array))return;present=array.filter(function(item){return item[key];});empty=array.filter(function(item){return!item[key]});switch(type){case'toBottom':result=present.concat(empty);break;case'toTop':result=empty.concat(present);break;default:result=array;break;}
return result;};});app.filter('bearSearch',function(){return function(bears,searchText,AND_OR){var returnArray=[];if(searchText){splitext=searchText.toLowerCase().split(/\s+/),regexp_and="(?=.*"+ splitext.join(")(?=.*")+")",regexp_or=searchText.toLowerCase().replace(/\s+/g,"|"),re=new RegExp((AND_OR=="AND")?regexp_and:regexp_or,"i");match_by_lang=0;for(var x=0;x<bears.length;x++){match=0;if(re.test(bears[x].name.toLowerCase())){match=1;}
for(var j=0;j<bears[x].languages.length;j++){if(re.test(bears[x].languages[j].toLowerCase())){match=1;match_by_lang=1;}}
if(match==1){returnArray.push(bears[x]);}}
if(match_by_lang==1){for(var x=0;x<bears.length;x++){var found=returnArray.some(function(el){return el.name===bears[x].name;});if(!found&&bears[x].languages.indexOf("All")>-1){returnArray.push(bears[x]);}}}
return returnArray;}
return bears;}})