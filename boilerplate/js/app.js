const arrayUl = document.querySelector(".array_method");
const stringUl = document.querySelector(".string_method");

function display(data) {
  if (data.stringmethod) {
    createStructure(stringUl, data.stringmethod);
  }
  if (data.arrayMethod) {
    createStructure(arrayUl, data.arrayMethod);
  }
}
function createStructure(ul, method) {
  method.forEach(ele => {
    let li = document.createElement("li");
    li.classList.add("list");
    let h2 = document.createElement("h2");
    h2.classList.add("methodHeading");
    h2.addEventListener("click", accordion);
    let p = document.createElement("p");
    p.classList.add("description");
    let h3 = document.createElement("h3");
    h3.classList.add("syntax");
    let div = document.createElement("div");
    div.style.display = "none";
    div.append(p, h3);
    h2.textContent = ele.methodName;
    p.textContent = ele.description;
    h3.textContent = ele.syntax;
    li.append(h2, div);
    ul.appendChild(li);
  });
}
function getData() {
  fetch("./js/data.json")
    .then(res => res.json())
    .then(data => display(data));
}
function accordion(event) {
  var acc = event.target;
  var panel = acc.nextElementSibling;

  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
getData();
