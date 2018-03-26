function addArrow(element){
  let arrow = document.createElement("div");

  Object.assign(
    arrow.style,
    {
      position: "absolute",
      "border": "5px solid",
      left: "50%",
      // right: "0",
      // margin: "auto",
      "border-color": "#312450 transparent transparent transparent"
    }
  );

  element.appendChild(arrow);
}

function showToolTip(toolText){
  let toolTip = document.createElement("span");
  toolTip.innerHTML = toolText;

  window.dbToolTip = [];

  Object.assign(
    toolTip.style,
    {
      content: toolText,
      "position": "absolute",
      "left": "0",
      "right": "0",
      "top": "-150%",
      margin: "auto",
      padding: "1px 7px 1px 7px",
      width: "fit-content",
      "border-radius": "50px",
      "font-size": "12px",
      "background-color": "#312450",
      "white-space":"nowrap"
    }
  );

  // toolTip.style.left = "10%";

  // let arrow = document.createElement("div");
  //
  // Object.assign(
  //   arrow.style,
  //   {
  //     position: "absolute",
  //     "border": "5px solid",
  //     left: "50%",
  //     // right: "0",
  //     // margin: "auto",
  //     "border-color": "#312450 transparent transparent transparent"
  //   }
  // );
  //
  // toolTip.appendChild(arrow);
  addArrow(toolTip);
  this.appendChild(toolTip);

}

function hideToolTip(){
  this.removeChild(this.lastElementChild);
}

function copyToClipboard(e){
  //variables
  let body = document.getElementsByTagName("body")[0];
  let toolTip = this.lastElementChild;
  let textarea = document.createElement("textarea");
//copy-op
  body.appendChild(textarea);
  textarea.value = "jeguberman@gmail.com";
  textarea.select();
  document.execCommand("Copy");
//cleanUp A
  body.removeChild(body.lastChild);
  textarea.value = "";
//feedback
  toolTip.innerHTML = "Copied to clipboard!";
  addArrow(toolTip);

  toolTip.style.opacity = 0;
  toolTip.style["transition-property"] = "opacity";
  toolTip.style["transition-duration"] = "0.50s";
  toolTip.style["transition-timing-function"] = "ease-in-circ";
  toolTip.style["transition-delay"] = "0.5s";
}
