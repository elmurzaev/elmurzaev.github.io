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