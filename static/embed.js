"use strict";
let destination = "https://nowgg.lol";
const gameframe = document.getElementById("frame");

registerSW()
  .then(() => {
    gameframe.src = (__uv$config.prefix + __uv$config.encodeUrl(destination));
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
