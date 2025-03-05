/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Select form element in HTML
const form: HTMLFormElement | null = document.querySelector('#converterForm');
// Print error message in case form does not exist in HTML
if(!form){
    throw new Error("Element with id '#converterForm' does not exist in HTML");
}
// Create a submit button
const submitBtn: HTMLInputElement = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');
// Select the number input field element in HTML
const metersInput: HTMLInputElement | null = document.querySelector('#meter');
// Print error message in case the input element does not exist in HTML
if(!metersInput){
    throw new Error("Element with id '#meter' does not exist in HTML");
}

// Create a div, a heading, and span elements to place converted units into
const convertedUnits: HTMLDivElement = document.createElement('div');
const heading: HTMLHeadingElement = document.createElement('h3');

const cmSpan: HTMLSpanElement = document.createElement('span');
const inSpan: HTMLSpanElement = document.createElement('span');
const ftSpan: HTMLSpanElement = document.createElement('span');
const miSpan: HTMLSpanElement = document.createElement('span');
const ydSpan: HTMLSpanElement = document.createElement('span');

// Append the heading and span's to the div element
convertedUnits.append(heading, cmSpan, inSpan, ftSpan, miSpan, ydSpan);

// Append the div (that contains span and heading elements) to the form's next sibling div element, if it exists
form.nextElementSibling?.appendChild(convertedUnits) as HTMLDivElement;

// Append the submit button to form
form.appendChild(submitBtn);

// Creating an event listener for when the form is submitted
form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Get the input value in meters
    const meters: number = metersInput.valueAsNumber;

    // Print the meter value in the heading
    heading.textContent = `${meters}m converted to:`

    // Create each unit variable as a string, convert meters into desired units, convert the result to a string with two decimal symbols, assign the result to the span's text content
    const centimeters: string = (meters * 100).toFixed(2);
    cmSpan.textContent = `Centimeters:${centimeters}cm`;

    const inches: string = (meters * 39.37).toFixed(2);
    inSpan.textContent = `Inches:${inches}in`;
    
    const feet: string = (meters * 3.281).toFixed(2);
    ftSpan.textContent = `Feet:${feet}ft`;
    
    const miles: string = (meters / 1609).toFixed(2);
    miSpan.textContent = `Miles:${miles}mi`;
    
    const yards: string = (meters * 1.094).toFixed(2);
    ydSpan.textContent = `Yards:${yards}yd`;

    form.reset();
});