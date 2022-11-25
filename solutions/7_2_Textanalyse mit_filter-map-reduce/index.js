const text = fetch('https://kaul.inf.h-brs.de/ccm/we/ws22/resources/assets/Plagiatsresolution.html')
.then(function (response) {
    switch (response.status) {
        // status "OK"
        case 200:
            return response.text();
        // status "Not Found"
        case 404:
            throw response;
    }
})
.then(function (template) {
    console.log(template.replace(/<\/?[^>]+(>|$)/g, "").replace(/^\s+|\s+$/gm,'').replace(/\n/g, " ").split(" "));
})
.catch(function (response) {
    // "Not Found"
    console.log(response.statusText);
});