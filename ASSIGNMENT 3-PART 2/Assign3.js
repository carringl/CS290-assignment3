var xmlHttp = createXmlHttpRequestObject ();

function createXmlHttpRequestObject () {
	var xmlHttp;
	
	if (window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}else {
		xmlHttp = new ActiveXOjbect("Microsoft.XMLHTTP");
	}
	
	return xmlHttp;
}

function process () {
	if (xmlHttp) {
		try {
			xmlHttp.open("GET", "www.github.com", true);
			xmlHttp.onreadystatechange = handleServerResponse;
			xmlHttp.send(null);
		}catch (e) {
			alert( e.toString() );
}

function handleServerResponse() {
	GIST = document.getElementsByID('GIST');
	if (xmlHttp.readyState === 1) {
		GIST.innerHTML += "Status 1 confirmed, server connection verified <br>";
	} else if (xmlHttp.readyState === 2) {
		GIST.innerHTML += "Status 2 confirmed, request recieved by server <br>";
	} else if (xmlHttp.readyState === 3) {
		GIST.innerHTML += "Status 3 confirmed, request processed by server <br>";
	} else if (xmlHttp.readyState === 4) {
		
		if (xmlHttp.status === 200){
			try {
				GISTresp = xmlHttp.reponseText;
				GIST.innerHTML += "Status 4 confirmed, request complete <br>";
				GIST.innerHTML += GISTresp;
			}catch (e) {
				alert( e.toString() );}
						
		}
	}else {
		GIST.innerHTML += "There was a problem with the request. <br>";
	}
}

