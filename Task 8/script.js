"use strict";
var _a;
const form = document.querySelector('#converterForm');
if (!form) {
    throw new Error("Element with id '#converterForm' does not exist in HTML");
}
const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');
const metersInput = document.querySelector('#meter');
if (!metersInput) {
    throw new Error("Element with id '#meter' does not exist in HTML");
}
const convertedUnits = document.createElement('div');
const heading = document.createElement('h3');
const cmSpan = document.createElement('span');
const inSpan = document.createElement('span');
const ftSpan = document.createElement('span');
const miSpan = document.createElement('span');
const ydSpan = document.createElement('span');
convertedUnits.append(heading, cmSpan, inSpan, ftSpan, miSpan, ydSpan);
(_a = form.nextElementSibling) === null || _a === void 0 ? void 0 : _a.appendChild(convertedUnits);
form.appendChild(submitBtn);
form.addEventListener('submit', e => {
    e.preventDefault();
    const meters = metersInput.valueAsNumber;
    heading.textContent = `${meters}m converted to:`;
    const centimeters = (meters * 100).toFixed(2);
    cmSpan.textContent = `Centimeters:${centimeters}cm`;
    const inches = (meters * 39.37).toFixed(2);
    inSpan.textContent = `Inches:${inches}in`;
    const feet = (meters * 3.281).toFixed(2);
    ftSpan.textContent = `Feet:${feet}ft`;
    const miles = (meters / 1609).toFixed(2);
    miSpan.textContent = `Miles:${miles}mi`;
    const yards = (meters * 1.094).toFixed(2);
    ydSpan.textContent = `Yards:${yards}yd`;
    form.reset();
});
