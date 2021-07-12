import eidiya1 from "./eidiyat/1.png";
import eidiya2 from "./eidiyat/2.png";
import eidiya3 from "./eidiyat/3.png";
import eidiya4 from "./eidiyat/4.png";
import eidiya5 from "./eidiyat/5.png";
import eidiya6 from "./eidiyat/6.png";

import "./index.css";

import DomToImage from "dom-to-image";

const eidiyaContainer = document.getElementById("eidiya-container");
const eidiyaImage = document.getElementById("eidiya-image");
const eidiyaNameInput = document.getElementById("eidiya-name-input");
const textOverImage = document.getElementById("text-over-image");
const takeScreenshotBtn = document.getElementById("take-screenshot");
const eidiyaNumberSelect = document.getElementById("eidiya-number-select");

let lastEidiyaNumber;

function main() {
  document.body.appendChild(eidiyaContainer);
  eidiyaImage.src = eidiya1;
  lastEidiyaNumber = "first_model";
  takeScreenshotBtn.onclick = takeScreenshot;

  eidiyaNameInput.oninput = (e) => {
    e.preventDefault();

    const name = eidiyaNameInput.value;
    textOverImage.innerHTML = `${name}`;
  };

  eidiyaNumberSelect.onchange = () => {
    switch (eidiyaNumberSelect.value) {
      case "first_model":
        eidiyaImage.src = eidiya1;
        textOverImage.classList.replace(lastEidiyaNumber, "first_model");
        lastEidiyaNumber = "first_model";
        break;
      case "second_model":
        eidiyaImage.src = eidiya2;
        textOverImage.classList.replace(lastEidiyaNumber, "second_model");
        lastEidiyaNumber = "second_model";
        break;
      case "third_model":
        eidiyaImage.src = eidiya3;
        textOverImage.classList.replace(lastEidiyaNumber, "third_model");
        lastEidiyaNumber = "third_model";
        break;
      case "fourth_model":
        eidiyaImage.src = eidiya4;
        textOverImage.classList.replace(lastEidiyaNumber, "fourth_model");
        lastEidiyaNumber = "fourth_model";
        break;
      case "fifth_model":
        eidiyaImage.src = eidiya5;
        textOverImage.classList.replace(lastEidiyaNumber, "fifth_model");
        lastEidiyaNumber = "fifth_model";
        break;
      case "sixth_model":
        eidiyaImage.src = eidiya6;
        textOverImage.classList.replace(lastEidiyaNumber, "sixth_model");
        lastEidiyaNumber = "sixth_model";
        break;
    }
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
