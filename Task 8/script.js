"use strict";
var _a;
const form = document.querySelector('#converterForm');
if (!form) {
    throw new Error("Element with id '#converterForm' does not exist in the HTML file");
}
const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');
const metersInput = document.querySelector('#meter');
if (!metersInput) {
    throw new Error("Element with id 'meter' does not exist in the HTML file");
}
const convertedUnits = document.createElement('div');
(_a = form.nextElementSibling) === null || _a === void 0 ? void 0 : _a.appendChild(convertedUnits);
form.appendChild(submitBtn);
form.addEventListener('submit', e => {
    e.preventDefault();
    const meters = metersInput.valueAsNumber;
    console.log(meters);
    const centimeters = meters * 100;
    const cmSpan = document.createElement('span');
    cmSpan.textContent = String(centimeters);
    const inches = meters * 39.37;
    const inSpan = document.createElement('span');
    inSpan.textContent = String(inches);
    const feet = meters * 3.281;
    const ftSpan = document.createElement('span');
    ftSpan.textContent = String(feet);
    const miles = meters / 1609;
    const miSpan = document.createElement('span');
    miSpan.textContent = String(miles);
    const yards = meters * 1.094;
    const ydSpan = document.createElement('span');
    ydSpan.textContent = String(yards);
    convertedUnits.append(cmSpan, inSpan, ftSpan, miSpan, ydSpan);
});
