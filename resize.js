'use strict'

function resize() {
  const metaRowEL = document.querySelector('meta[property="rows"]')
  const rows = metaRowEL ? parseInt(metaRowEL.content, 10) : 20;
  document.body.style.fontSize = `${window.innerWidth/rows}px`;
};

window.onresize = resize;
resize();
