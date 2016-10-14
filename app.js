// your code here!
$(function() {
	$('form').submit(function(e) {
		e.preventDefault();
		var text = $('#user-text').val(),
			textSplit = text.split(/[^a-zA-Z0-9']+/ig);

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
	var numChars = 0;

	for (var i = 0; i < textSplit.length; i++) {
		numChars += textSplit[i].length;
	}

	return Math.floor(numChars / textSplit.length);
}

function averageSentenceLength(text) {
	var textMatch = text.match(/[^\s][^\.!\?\n]+[\.!\?(?:\s)+]/ig),
		wordCount = 0;

	for (var i = 0; i < textMatch.length; i++) {
		var sentenceSplit = textMatch[i].split(/[^a-zA-Z0-9']+/ig);

		wordCount += sentenceSplit.length;
	}

	return Math.floor(wordCount / textMatch.length);
}