/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

// Type for use in color arrays
type Color = [red: number, green: number, blue: number];

class Potion{
  color: Color;
  volume: number;
  constructor(color: Color, volume: number){
    this.color = color;
    this.volume = volume;
    this.render();
  }

  // render method, to check if the color inputs are incorrect (outside the rgb color number range of 0 and 255), stop executing the code and print an error message if the condition is met
  render(): void{
    if(!this.color.every(subColor => subColor >= 0 && subColor <= 255)){
      throw new Error(`The color ranges must be between 0 and 255`);
    }
  }

  mix(secondPotion: Potion): Potion{

    // Get the average color of the two mixed potions by volume, rounding up to higher integer value
    const mixedPotion: Color = [
      Math.ceil((this.color[0] * this.volume + secondPotion.color[0] * secondPotion.volume) / (this.volume + secondPotion.volume)),
      Math.ceil((this.color[1] * this.volume + secondPotion.color[1] * secondPotion.volume) / (this.volume + secondPotion.volume)),
      Math.ceil((this.color[2] * this.volume + secondPotion.color[2] * secondPotion.volume) / (this.volume + secondPotion.volume))
    ];

    // Get the combined volume of the two potions
    const mixedVolume: number = this.volume + secondPotion.volume;

    // Return the new potion object
    return new Potion(mixedPotion, mixedVolume);
  }
}

// Creating two potions
const felix_felicis: Potion = new Potion([255, 255, 255], 7);
const polyjuice: Potion = new Potion([51, 102, 51], 12);

// Creating the mixed potion
const new_potion: Potion = felix_felicis.mix(polyjuice);

// console.log(felix_felicis);
// console.log(polyjuice);
// console.log(new_potion);