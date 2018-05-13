'use strict'

function resize() {
  document.body.style.fontSize = `${window.innerWidth/20}px`;
};

window.onresize = resize;
resize();
