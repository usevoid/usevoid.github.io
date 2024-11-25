function cloak() {
var win = window.open()
var url = location.href;
var iframe = win.document.createElement('iframe')
iframe.style.width = "100vw";
iframe.style.height = "100vh";
iframe.style.border = "none";
iframe.src = url
win.document.body.appendChild(iframe)
window.location.replace("https://google.com");
}

cloak()
