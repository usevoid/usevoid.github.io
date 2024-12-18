"use strict";
let destination = "";
const gameframe = document.getElementById("frame");
try {
  destination = new URL(location.hash.slice(1)).toString();
} catch (err) {
  alert(`Bad # string or bad URL. Got error:\n${err}`);
  throw err;
}

registerSW()
  .then(() => {
    gameframe.src = (__uv$config.prefix + __uv$config.encodeUrl(destination));
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
