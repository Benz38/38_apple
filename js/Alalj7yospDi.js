!function e(t,s,n){function i(a,h){if(!s[a]){if(!t[a]){var u="function"==typeof require&&require;if(!h&&u)return u(a,!0);if(r)return r(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var o=s[a]={exports:{}};t[a][0].call(o.exports,(function(e){var s=t[a][1][e];return i(s||e)}),o,o.exports,e,t,s,n)}return s[a].exports}for(var r="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t,s){"use strict";var n=e("./search/SearchFormController"),i={initialize:function(){return document.addEventListener("DOMContentLoaded",(function(){new n})),this}};t.exports=i.initialize()},{"./search/SearchFormController":2}],2:[function(e,t,s){"use strict";function n(){this.searchForm=document.getElementById("searchform-form"),this.searchInput=document.getElementById("searchform-input"),this.searchSubmit=document.getElementById("searchform-submit"),this.searchReset=document.getElementById("searchform-reset"),this._searchAction=this.searchForm.getAttribute("action"),this.searchInput.removeAttribute("name"),this.searchInput.addEventListener("input",this._onInputChange.bind(this)),this.searchInput.addEventListener("focus",this._onInputFocus.bind(this)),this.searchReset.addEventListener("click",this._onInputReset.bind(this)),this.searchInput.addEventListener("keyup",this._onSearchKeyup.bind(this)),this.searchInput.addEventListener("keydown",this._onSearchKeydown.bind(this)),this._updateButtons()}var i=38,r=40,a=n.prototype;a._onInputChange=function(){this._updateButtons()},a._onInputFocus=function(){this._lastValue=this.searchInput.value,this.inputHasValue()&&(this.enableSearchSubmit(),this.enableSearchReset(),this.showSearchReset())},a._onInputReset=function(e){e.preventDefault(),this.hideSearchReset(),this.clearInput(),this.searchInput.focus()},a._onSearchKeyup=function(e){this._lastValue!==this.searchInput.value&&(this._lastValue=this.searchInput.value,this._updateButtons())},a._onSearchKeydown=function(e){var t=e.keyCode;t!==r&&t!==i||e.preventDefault()},a._updateButtons=function(){this.inputHasValue()?(this.enableSearchSubmit(),this.enableSearchReset(),this.showSearchReset(),this.inputHasValidText()&&this.setFormAction()):(this.disableSearchSubmit(),this.disableSearchReset(),this.hideSearchReset(),this.searchForm.action=this._searchAction)},a.clearInput=function(){this.searchInput.value="",this._updateButtons()},a.inputHasValue=function(){return!!(this.searchInput.value.length&&this.searchInput.value.length>0)},a.inputHasValidText=function(){return!this.searchInput.value.match(/^\s*$/)},a.showSearchReset=function(){this.searchReset.classList.add("reset-visible")},a.hideSearchReset=function(){this.searchReset.classList.remove("reset-visible")},a.enableSearchReset=function(){this.searchReset.disabled=!1},a.disableSearchReset=function(){this.searchReset.disabled=!0},a.enableSearchSubmit=function(){this.searchSubmit.disabled=!1},a.disableSearchSubmit=function(){this.searchSubmit.disabled=!0},a.setFormAction=function(){this.searchForm.action=this._searchAction+"/"+this.formatSearchInput(this.searchInput.value)},a.formatSearchInput=function(e){return encodeURIComponent(e.replace(/[\s\/\'\\]+/g," ").trim().replace(/\s+/g,"-"))},t.exports=n},{}]},{},[1]);