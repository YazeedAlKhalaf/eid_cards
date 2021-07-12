import eidiya1 from "./eidiyat/1.png";
import "./index.css";

import DomToImage from "dom-to-image";

const eidiyaContainer = document.getElementById("eidiya-container");
const eidiyaImage = document.getElementById("eidiya-image");
const eidiyaNameInput = document.getElementById("eidiya-name-input");
const textOverImage = document.getElementById("text-over-image");
const takeScreenshotBtn = document.getElementById("take-screenshot");

function main() {
  document.body.appendChild(eidiyaContainer);
  eidiyaImage.src = eidiya1;
  takeScreenshotBtn.onclick = takeScreenshot;

  eidiyaNameInput.oninput = (e) => {
    e.preventDefault();

    const name = eidiyaNameInput.value;
    textOverImage.innerHTML = `${name}`;
  };
}

function takeScreenshot() {
  const name = eidiyaNameInput.value;

  DomToImage.toPng(eidiyaContainer).then((dataUrl) => {
    var link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = dataUrl;
    link.click();
  });
}

main();
