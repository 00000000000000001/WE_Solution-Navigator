fetch('solutions/1_1_Fachliche_Argumentation_ueber_Erfolgsprinzipien_des_WWW/index.html')
    .then(response => {
        return response.text();
    })
    .then(html => {
        document.getElementById('main').innerHTML = html;
        var scripts = document.getElementById("main").querySelectorAll("script");
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].innerText) {
                eval(scripts[i].innerText);
            } else {
                fetch(scripts[i].src).then(function (data) {
                    data.text().then(function (r) {
                        eval(r);
                    })
                });

            }
            // To not repeat the element
            scripts[i].parentNode.removeChild(scripts[i]);
        }
    });