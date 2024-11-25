function cloak() {
  var win = window.open();
  var url = location.href;
  var iframe = win.document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url;
  win.document.body.appendChild(iframe);
}

cloak();
