// เข้าถึง element หลัก
const divElement = document.getElementById('exampleElement');

const divChild = divElement.childNodes;
divChild.forEach((child) => {
  console.log("nodeName:", child.nodeName);
  console.log("nodeType:", child.nodeType);
  console.log("nodeValue:", child.nodeValue);
});

console.log("element.nodeType:", divElement.nodeType); // 1

console.log("attributes[0]:", divElement.attributes[0]); // id="exampleElement"
console.log("attributes[0].nodeType:", divElement.attributes[0].nodeType); // 2
console.log("attributes[0].value:", divElement.attributes[0].value); // exampleElement
console.log("attributes[0].ownerElement:", divElement.attributes[0].ownerElement); // <div ...>

const divStyleAttr = divElement.getAttribute('style');
console.log("getAttribute('style'):", divStyleAttr); // font-size: 30pt

console.log("innerHTML:", divElement.innerHTML);
console.log("innerText:", divElement.innerText);
console.log("textContent:", divElement.textContent);
