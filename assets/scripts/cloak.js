function cloak() {
  let inFrame;
  try {
    inFrame = window !== top;
  } catch (e) {
    inFrame = true;
  }

  // Ensure "ab" is stored in localStorage if it's not already there
  if (!localStorage.getItem("ab")) localStorage.setItem("ab", "true");

  // Main logic to control iframe or normal behavior
  if (!inFrame && !navigator.userAgent.includes("Firefox") && localStorage.getItem("ab") === "true") {
    // If not in an iframe, not in Firefox, and "ab" is set, do nothing (or add behavior here)
    console.log('Conditions met, no action taken.');
  } else {
    // Open new window and inject iframe
    var win = window.open();
    var url = location.href;
    var iframe = win.document.createElement("iframe");
    const style = iframe.style;

    style.position = "fixed";
    style.top = style.bottom = style.left = style.right = 0;
    style.border = style.outline = "none";
    style.width = style.height = "100%";

    iframe.src = url;
    win.document.body.appendChild(iframe);
  }
}

// Invoke the cloak function
cloak();
