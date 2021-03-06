	

    var xmlHttp = createXmlHttpRequestObject ();
     
    function createXmlHttpRequestObject () {
            var xmlHttp;
           
            if (window.XMLHttpRequest){
                    xmlHttp = new XMLHttpRequest();
            }else {
                    xmlHttp = new ActiveXOjbect("Microsoft.XMLHTTP");
            }
           
            return xmlHttp;
    };
     
    function process () {
            if (xmlHttp) {
                    try {
                            xmlHttp.open("GET", "https://api.github.com/gists/public", true);
                            xmlHttp.onreadystatechange = handleServerResponse;
                            xmlHttp.send('https://api.github.com/gists/public?page=1&per_page=30');
                    }catch (e) {
                            alert( e.toString() );
                    }
    }
    };
     
    function handleServerResponse() {
            GIST = document.getElementById('GIST');
            if (xmlHttp.readyState === 1) {
                    GIST.innerHTML += "Status 1 confirmed, server connection verified <br>";
            } else if (xmlHttp.readyState === 2) {
                    GIST.innerHTML += "Status 2 confirmed, request recieved by server <br>";
            } else if (xmlHttp.readyState === 3) {
                    GIST.innerHTML += "Status 3 confirmed, request processed by server <br>";
            } else if (xmlHttp.readyState === 4) {
                   
                    if (xmlHttp.status === 200){
                            try {
                                    GIST.innerHTML += "Status 4 confirmed, request complete <br>";
                                    //createFavorites();                             
                                    makeLink();                    
                            }catch (e) {
                                    alert( e.toString() );}                
                    }
            }else {
                    GIST.innerHTML += "There was a problem with the request. <br>";
            }
    };
     
    function ParseData() {
            var Jelement = xmlHttp.responseText;
       var pJe = JSON.parse(Jelement);
            console.log(Jelement);                         
       console.log(pJe[0].description);
       console.log(pJe[0].html_url);
            return pJe;            
    };
           
     
    function displayLink(i) {
            GIST = document.getElementById('GIST');
            var pJe = ParseData(); 
            var displayLink = pJe[i].html_url;
            return displayLink;
     
    };
     
    function displayFunc(i) {
            GIST = document.getElementById('GIST');
            var pJe = ParseData(); 
            var displayText =  pJe[i].description;
            return displayText;
    };
     
    function makeLink(){
            var listLength = ParseData();
            for (var i = 0; i < listLength.length; i++) {
                    var div = document.getElementById("LINK");
                    var link = document.createElement('a');                    
                    var comment = document.createTextNode(displayFunc(i));
                    link.appendChild(comment);    
                    link.setAttribute('href', displayLink(i));              
                    document.getElementById("LINK").appendChild(link);
                    document.getElementById("LINK").appendChild(makeNewButton(displayLink(i)));
                    makeNewLine();
            }
    };
     
    function makeNewLine(){
            var div = document.getElementById("LINK");
            var nL = document.createElement ("br");
            div.appendChild(nL);
    };
     
    function makeNewButton (i) {
            var btn = document.createElement("BUTTON");        
            var label = document.createTextNode("FAVORITES");      
            btn.appendChild(label);
            //btn.setAttribute('onclick', addToFavorites(i));
            return btn;
    };


