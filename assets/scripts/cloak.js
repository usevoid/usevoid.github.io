let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}

if (!localStorage.getItem("ab")) localStorage.setItem("ab", true);

if (
  !inFrame &&
  !navigator.userAgent.includes("Firefox") &&
  localStorage.getItem("ab") === "true"
) {
  const popup = window.open();
  if (!popup || popup.closed) {
    location.reload();
  } else {
    const doc = popup.document;
    const iframe = doc.createElement("iframe");
    const style = iframe.style;
    const link = doc.createElement("link");
    const appleTouchIcon = doc.createElement("link");

    const name = localStorage.getItem("name") || "My Drive - Google Drive";
    const icon = "./apple-touch-icon.png"; // Using the favicon.ico file

    doc.title = name;

    // Standard favicon link
    link.rel = "icon";
    link.href = icon;
    doc.head.appendChild(link);

    // Apple touch icon link for iOS devices
    appleTouchIcon.rel = "apple-touch-icon";
    appleTouchIcon.href = icon;
    appleTouchIcon.sizes = "180x180"; // You can specify the icon size here (recommended: 180x180)
    doc.head.appendChild(appleTouchIcon);

    iframe.src = location.href;
    style.position = "fixed";
    style.top = style.bottom = style.left = style.right = 0;
    style.border = style.outline = "none";
    style.width = style.height = "100%";

    doc.body.appendChild(iframe);

    location.replace("https://drive.google.com");
  }
}
