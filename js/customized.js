// JavaScript Document
function init1() {
	// meta
	addMetas();
	// seo
	addTag("copyright", "www.sanwisdom.com Copyright &copy; 2012 Sanwisdom. All Rights Reserved. 盛秩威咨询，版权所有");
	addTag("keywords", "Sanwisdom|盛秩威咨询|电商运营|数字营销|品牌策划|公共咨询");
	addTag("description", "Sanwisdom 上海盛秩威公关咨询有限公司|行业领先的电商运营供应商");
	// favicon
	loadFavicons();
	// css
	loadCss("css/style.css");
	loadCss("css/layout.css");
	// js
	// loadJs("js/maxheight.js");
	// loadJs("js/jquery.min-1.5.1.js");
}

function init2() {

}

function addMetas() {
	var meta1 = document.createElement('meta');
	meta1.setAttribute("http-equiv", "Content-Type");
	meta1.setAttribute("content", "text/html; charset=utf-8");
	if (typeof meta1 != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(meta1);
	}
	var meta2 = document.createElement('meta');
	meta2.setAttribute("http-equiv", "Content-Style-Type");
	meta2.setAttribute("content", "text/css");
	if (typeof meta1 != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(meta1);
	}
}

function addTag(name, content) {
	var tag = document.createElement('meta');
    tag.setAttribute("name", name);
	tag.setAttribute("content", content);
	if (typeof tag != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(tag);
	}
}

function loadJs(url) {
	var jsFile = document.createElement('script');
    jsFile.setAttribute("type","text/javascript");
	jsFile.setAttribute("src", url);
	if (typeof jsFile != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(jsFile);
	}
}

function loadFavicons() {
	var icon = document.createElement('link');
	icon.setAttribute("rel","short icon");
    icon.setAttribute("type","image/x-icon");
	icon.setAttribute("href", "favicon.ico");
	if (typeof icon != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(icon);
	}
	var bookmark = document.createElement('link');
	bookmark.setAttribute("rel","Bookmark");
    bookmark.setAttribute("type","image/x-icon");
	bookmark.setAttribute("href", "favicon.ico");
	if (typeof bookmark != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(bookmark);
	}
}

function loadCss(url) {
	var cssFile = document.createElement('link');
	cssFile.setAttribute("rel","stylesheet");
    cssFile.setAttribute("type","text/css");
	cssFile.setAttribute("href", url);
	if (typeof cssFile != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(cssFile);
	}
}

function loadFooter() 
{ 
    $("#footerIncludedContent").load("footer.html"); 
} 