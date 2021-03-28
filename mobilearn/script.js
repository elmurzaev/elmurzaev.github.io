window.onload = function () {
	if (localStorage.fontSize !== null) initFontSize()
}

function initFontSize() {
	document.body.style.fontSize = localStorage.fontSize + 'px'
}

function increaseFontSize() {
	if (localStorage.fontSize == null) localStorage.fontSize = 16
	localStorage.fontSize++
	initFontSize()
}

function decreaseFontSize() {
	if (localStorage.fontSize == null) localStorage.fontSize = 16
	localStorage.fontSize--
	initFontSize()
}

function enableTranslator() {
	new google.translate.TranslateElement(
		{
			pageLanguage: 'ru',
			includedLanguages: 'ar,de,en,ru,es,fr,it,uk,zh-CN',
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
			multilanguagePage: false,
		},
		'google_translate_element',
	)
}
