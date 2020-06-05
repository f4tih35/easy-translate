let langs = {"de-en":"(German-English)","de-ru":"(немецкий-русский)","de-tr":"(Almanca-Türkçe)","en-de":"(Englisch-Deutsch)","en-ru":"(английский-русский)","en-tr":"(İngilizce-Türkçe)","ru-de":"(Russisch-Deutsch)","ru-en":"(Russian-English)","ru-tr":"(Rusça-Türkçe)","tr-de":"(Türkisch-Deutsch)","tr-en":"(Turkish-English)","tr-ru":"(Турецкий-русский)"};




let myFunc = function(wordx,langsx){
    let xhr = new XMLHttpRequest(),
    method = "GET",
    url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200427T141024Z.76527e5ee1a0c664.75f4ea4cac82a37949b4da59c61115fd7888651c&text=${wordx}&lang=${langsx}`;
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        var status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {   
            document.querySelector('#getLang').textContent = langs[JSON.parse(xhr.responseText).lang];
    document.querySelector('#textOutput').textContent = JSON.parse(xhr.responseText).text;
        }
    }
    };
    xhr.send();
    };

    document.getElementById('translateButton').addEventListener("click",function(){

    myFunc(document.getElementById('textInput').value,document.getElementById('langs').value);

    });

    