"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
        this.render();
    }
    render() {
        if (!this.color.every(subColor => subColor >= 0 && subColor <= 255)) {
            throw new Error(`The color ranges must be between 0 and 255`);
        }
    }
    mix(secondPotion) {
        const mixedPotion = [
            Math.ceil((this.color[0] * this.volume + secondPotion.color[0] * secondPotion.volume) / (this.volume + secondPotion.volume)),
            Math.ceil((this.color[1] * this.volume + secondPotion.color[1] * secondPotion.volume) / (this.volume + secondPotion.volume)),
            Math.ceil((this.color[2] * this.volume + secondPotion.color[2] * secondPotion.volume) / (this.volume + secondPotion.volume))
        ];
        const mixedVolume = this.volume + secondPotion.volume;
        return new Potion(mixedPotion, mixedVolume);
    }
}
const felix_felicis = new Potion([255, 255, 255], 7);
const polyjuice = new Potion([51, 102, 51], 12);
const new_potion = felix_felicis.mix(polyjuice);
