function jahr() {
    alert('hello');
    var jetzt = new Date();
    jahr = jetzt.getFullYear() - 1989;
    text = '' + jahr;
    document.getElementById('jahr').innerHTML = text;
}