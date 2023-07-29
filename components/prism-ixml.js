Prism.languages.ixml = {
	'atrule': {
		pattern: /\{\[\+?[^{}]*\]\}/,
		inside: {
			'atrule': /./
		}
	},
	'rulesymbol': {
		pattern: /[\-\+@\^]?[A-Za-z][A-Za-z0-9]*\s*[:=]/,
		inside: {
			'atrule': /^[\-\+@\^]/,
			'symbol': /[A-Za-z][A-Za-z0-9]*/,
			'punctuation': /[:=]/
		}
	},
	'char': {
		pattern: /\#[a-fA-F0-9]+/
	},
	'string': {
		pattern: /"[^\r\n"]*"|'[^\r\n']*'/
	},
	'comment': {
		pattern: /\{[^\[][^{}]*\}/,
	},
	'punctuation': {
		pattern: /[\,\;\|]/
	},
	'symbol': {
		pattern: /[\-\+\@\^]?[A-Za-z][A-Za-z0-9]*/,
		inside: {
			'operator': /^[\-\+@\^]/,
			'symbol': /[A-Za-z][A-Za-z0-9]*/
		}
	},
	'operator': {
		'pattern': /\+\+\|\*\*|\+|\*|\?/
	},
};
