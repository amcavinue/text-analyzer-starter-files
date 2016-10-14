// your code here!
$(function() {
	$('form').submit(function(e) {
		e.preventDefault();
		var text = $('#user-text').val(),
			textSplit = text.trim().split(/[^a-zA-Z0-9']+/ig).filter(function(el) { return el.length !== 0; });

		$('.text-report dd').empty();

		$('.js-total-word-count').append(textSplit.length);
		$('.js-unique-word-count').append(uniqueWordCount(textSplit));
		$('.js-average-word-length').append(averageWordLength(textSplit));
		$('.js-average-sentence-length').append(averageSentenceLength(text));

		$('.text-report').removeClass('hidden');
	});
});
function uniqueWordCount(textSplit) {
	return textSplit.filter(function(v, i, a) {
		return a.indexOf(v) === i;
	}).length;
}

function averageWordLength(textSplit) {
	debugger;
	var numChars = 0;

	for (var i = 0; i < textSplit.length; i++) {
		numChars += textSplit[i].length;
	}

	return Math.floor(numChars / textSplit.length);
}

function averageSentenceLength(text) {
	var textMatch = text.trim().match(/[^\s][^\.!\?\n]+[\.!\?(?:\s)+]/ig).filter(function(el) { return el.length !== 0; }),
		wordCount = 0;

	for (var i = 0; i < textMatch.length; i++) {
		var sentenceSplit = textMatch[i].trim().split(/[^a-zA-Z0-9']+/ig).filter(function(el) { return el.length !== 0; });

		wordCount += sentenceSplit.length;
	}

	return Math.floor(wordCount / textMatch.length);
}