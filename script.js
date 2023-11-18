// Get the current URL of the website
var url = window.location.href;

// Create a new URLSearchParams object with the query string
var params = new URLSearchParams(url.split('?')[1]);

// Get the value of the name parameter
var inputUrl = params.get('url');

// get the element id "iframe"
iframe = document.getElementById('iframe');

iframe.src = inputUrl
