!function(e){function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/js/",t(t.s=3)}([,,,function(e,t,o){e.exports=o(4)},function(e,t,o){"use strict";function n(e){var t=$("header").height();e&&$(e).offset()&&$("html, body").animate({scrollTop:$(e).offset().top-t-20},1e3)}function a(){var e=decodeURIComponent(location.hash);e&&($(".nav-tags").length&&"list"===$(".nav-tags").data("type")||(location.href.search("#access_token")<0&&n(e),$(".tabs".length)&&u()))}function c(e){docsearch({apiKey:"ad5e63b76a221558bdc65ab1abbec7a2",indexName:"pingcap",inputSelector:"#search-input",algoliaOptions:{hitsPerPage:50,facetFilters:["tags:"+e]},debug:!1,transformData:function(e){function t(e){var t=/404/gi;return e&&e.lvl1&&t.exec(e.lvl1)}return e.filter(function(e){return!t(e.hierarchy)})}})}function r(){c($("#search-input").data("lang")),$("#search-input").focusout(function(){$(".ds-dropdown-menu").hide()}),$("#search-input").change(function(e){e.preventDefault(),e.target&&e.target.value&&$(".ds-dropdown-menu").show()})}function l(){var e=$(".release-banner").data("release");if("undefined"!=typeof Storage){localStorage.getItem("release-version-"+e)||$(".homepage").addClass("banner-active")}else $(".homepage").addClass("banner-active");$(".release-banner__close").click(function(e){if($("body.banner-active")&&$("body").removeClass("banner-active"),"undefined"!=typeof Storage){var t=$(".release-banner").data("release");localStorage.setItem("release-version-"+t,t)}e.preventDefault()})}function i(){$("#wechat").click(function(e){e.preventDefault(),$("#wechat .qr_code_outer").toggleClass("f-hide")}),$("#wechat-mobile").on("touchstart",function(e){e.preventDefault(),$("#wechat-mobile .qr_code_outer").toggleClass("f-hide")}),$(".tidb-planet-robot").click(function(e){e.preventDefault(),$(".tooltiptext").toggleClass("f-hide")}),$(".tidb-planet-robot").on("touchstart",function(e){e.preventDefault(),$(".tooltiptext").toggleClass("f-hide")})}function s(){var e=$(this).scrollTop(),t=$("header").height();$("body.banner-active")&&e>=t&&$("body.banner-active").addClass("banner-active--scrolled"),$("body.banner-active--scrolled")&&e<t&&$("body").removeClass("banner-active--scrolled"),e>200?$(".back-to-top").addClass("show"):$(".back-to-top").removeClass("show")}function d(){$(".nav-btn.nav-slider").click(function(){console.log("clicked"),$(".overlay").show(),$("nav").toggleClass("open")}),$(".overlay").click(function(){$("nav").hasClass("open")&&$("nav").removeClass("open"),$(this).hide()})}function u(){var e,t=decodeURIComponent(location.hash);if(t)switch(t){case"#google":$("input:radio[name=tabs]").filter("[value=GoogleContent]").prop("checked",!0);break;case"#aws":$("input:radio[name=tabs]").filter("[value=AWSContent]").prop("checked",!0);break;case"#local":$("input:radio[name=tabs]").filter("[value=LocalContent]").prop("checked",!0)}else switch(e=$("input:checked").val()){case"GoogleContent":window.location.href="./#google";break;case"AWSContent":window.location.href="./#aws";break;case"LocalContent":window.location.href="./#local"}e=$("input:checked").val(),$("section").hide(),$("#"+e).show(),$("input").on("click",function(){switch(e=$("input:checked").val()){case"GoogleContent":window.location.href="./#google";break;case"AWSContent":window.location.href="./#aws";break;case"LocalContent":window.location.href="./#local"}$("section").hide(),$("#"+e).show()})}console.log("🦊 Hello! @PingCAP website"),$(document).ready(function(){a(),$(window).on("hashchange",a),$(window).scroll(s),$(".homepage").length&&l(),r(),i(),d(),$(".tabs").length&&u(),$(".back-to-top").click(function(){return $("html, body").animate({scrollTop:0},800),!1})})}]);