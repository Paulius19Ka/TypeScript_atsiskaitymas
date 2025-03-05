/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form: HTMLFormElement | null = document.querySelector('#converterForm');
if(!form){
    throw new Error("Element with id '#converterForm' does not exist in the HTML file");
}

const submitBtn: HTMLInputElement = document.createElement('input');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');

const metersInput: HTMLInputElement | null = document.querySelector('#meter');
if(!metersInput){
    throw new Error("Element with id 'meter' does not exist in the HTML file");
}

const convertedUnits = document.createElement('div');
form.nextElementSibling?.appendChild(convertedUnits);

form.appendChild(submitBtn);
form.addEventListener('submit', e => {
    e.preventDefault();
    
    const meters: number = metersInput.valueAsNumber;
    console.log(meters);

    const centimeters: number = meters * 100;
    const cmSpan: HTMLSpanElement = document.createElement('span');
    cmSpan.textContent = String(centimeters);

    const inches: number = meters * 39.37;
    const inSpan: HTMLSpanElement = document.createElement('span');
    inSpan.textContent = String(inches);
    
    const feet: number = meters * 3.281;
    const ftSpan: HTMLSpanElement = document.createElement('span');
    ftSpan.textContent = String(feet);
    
    const miles: number = meters / 1609;
    const miSpan: HTMLSpanElement = document.createElement('span');
    miSpan.textContent = String(miles);
    
    const yards: number = meters * 1.094;
    const ydSpan: HTMLSpanElement = document.createElement('span');
    ydSpan.textContent = String(yards);

    convertedUnits.append(cmSpan, inSpan, ftSpan, miSpan, ydSpan);
})