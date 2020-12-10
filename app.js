var input = document.querySelector('#text-area');
var btnTrans = document.querySelector('#btn-trans');
var output = document.querySelector('#output');
var serverUrl = 'https://api.funtranslations.com/translate/minion.json';

function textTranslation(text) {
	return serverUrl + '?' + 'text=' + text;
}

function errorHandler(error) {
	console.log('error occured');
	alert('Try after some time');
}

function eventHandler() {
	var inputText = input.value;

	fetch(textTranslation(inputText))
		.then((response) => response.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			output.innerText = translatedText;
		})
		.catch(errorHandler);
}

btnTrans.addEventListener('click', eventHandler);
