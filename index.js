fetch('solutions/1_1_Fachliche_Argumentation_ueber_Erfolgsprinzipien_des_WWW/index.html')
    .then(response => {
        return response.text();
    })
    .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        let body = doc.body;
        document.getElementById('main').appendChild(body);
        // document.getElementById('main').innerHTML = html;
    });