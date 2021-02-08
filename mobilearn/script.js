if(localStorage.nightMode == null) localStorage.nightMode = "no"

if(localStorage.nightMode == "night") {
	var style = document.getElementById('style')
	style.href = style.href.replace("style", "style-dark")
}

function enableNightMode() {
	if(localStorage.nightMode !== "night") {
		var style = document.getElementById('style')
		style.href = style.href.replace("style", "style-dark")
		localStorage.nightMode = "night"
		reload()
	}
}

function disableNightMode() {
	localStorage.nightMode = "no"
}

window.onload = function(){
	if(localStorage.fontSize !== null) initFontSize()
}
 
function initFontSize() {
	document.body.style.fontSize = localStorage.fontSize + "px"
}

function increaseFontSize() {
	if(localStorage.fontSize == null) localStorage.fontSize = 16
	localStorage.fontSize++
	initFontSize()
}

function decreaseFontSize() {
	if(localStorage.fontSize == null) localStorage.fontSize = 16
	localStorage.fontSize--
	initFontSize()
}

function enableTranslator() {
  new google.translate.TranslateElement({pageLanguage: 'ru', includedLanguages: 'ar,de,en,ru,es,fr,it,uk,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, multilanguagePage: false}, 'google_translate_element');
}