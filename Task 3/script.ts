/* ------------------------------ TASK 3 -----------------------------------
Perpanaudokite aprašytą type'ą, kad sukurti naujus tipus, kuriuos priskyrus kintamiesiems, visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.

Pastaba: Aprašyto tipo NEKEISTI
-------------------------------------------------------------------------- */

type TipasNaudoti = {
  marke: string,
  modelis: string,
  metai: number,
  spalva: string,
  kilometrazas: number
};

const dviratis: TipasNaudoti = {
  metai: 1999,
  spalva: 'juoda',
  marke: 'Mongoose',
  modelis: 'Colton',
  kilometrazas: 200
};
const naujaMasina: TipasNaudoti = {
  marke: 'Porsche',
  modelis: '718 Cayman GT4 RS',
  metai: 2025,
  spalva: 'pilka',
  kilometrazas: 10
};
const senaMasina: TipasNaudoti = {
  marke: 'Porsche',
  modelis: '911 Carrera',
  metai: 2025,
  spalva: 'raudona',
  kilometrazas: 999999,
  // surudyjesDugnas: true  
};