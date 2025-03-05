"use strict";
var _a;
const form = document.querySelector('#converterForm');
if (!form) {
    throw new Error("Element with id '#converterForm' does not exist in HTML");
}
const submitBtn = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');
submitBtn.classList.add('submit-btn');
const metersInput = document.querySelector('#meter');
if (!metersInput) {
    throw new Error("Element with id '#meter' does not exist in HTML");
}
const convertedUnits = document.createElement('div');
const heading = document.createElement('h3');
heading.textContent = `0m converted to:`;
const cmSpan = document.createElement('span');
cmSpan.textContent = `Centimeters: 0cm`;
const inSpan = document.createElement('span');
inSpan.textContent = `Inches: 0in`;
const ftSpan = document.createElement('span');
ftSpan.textContent = `Feet: 0ft`;
const miSpan = document.createElement('span');
miSpan.textContent = `Miles: 0mi`;
const ydSpan = document.createElement('span');
ydSpan.textContent = `Yards: 0yd`;
convertedUnits.append(heading, cmSpan, inSpan, ftSpan, miSpan, ydSpan);
(_a = form.nextElementSibling) === null || _a === void 0 ? void 0 : _a.appendChild(convertedUnits);
form.appendChild(submitBtn);
form.addEventListener('submit', e => {
    e.preventDefault();
    const meters = metersInput.valueAsNumber;
    heading.textContent = `${meters}m converted to:`;
    const centimeters = (meters * 100).toFixed(2);
    cmSpan.textContent = `Centimeters: ${centimeters}cm`;
    const inches = (meters * 39.37).toFixed(2);
    inSpan.textContent = `Inches: ${inches}in`;
    const feet = (meters * 3.281).toFixed(2);
    ftSpan.textContent = `Feet: ${feet}ft`;
    let miles = '';
    if (meters / 1609 < 0.01) {
        miles = (meters / 1609).toFixed(5);
    }
    else {
        miles = (meters / 1609).toFixed(2);
    }
    miSpan.textContent = `Miles: ${miles}mi`;
    const yards = (meters * 1.094).toFixed(2);
    ydSpan.textContent = `Yards: ${yards}yd`;
    form.reset();
});
