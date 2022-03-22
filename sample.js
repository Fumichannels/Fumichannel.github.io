function opens(texts){
    window.open(texts, '_blank')
}



        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET","header.html",true);
        xmlHttp.send(null);
        xmlHttp.onload = function(){
            var data = xmlHttp.responseText;
            document.getElementById('mydiv').innerHTML = data
        }