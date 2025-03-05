/* ------------------------------ TASK 2 -----------------------------------
Aprašykite type'us, kad kintamieji, kuriems jie priskirti būtų teisingai aprašyti ir visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.-------------------------------------------------------------------------- */
type One = {

}
let one: One = {
  vardas: '',
  pavarde: '',
  amzius: 0
};
type Two = {

}
let two: Two = {
  vardas: '',
  pavarde: '',
  amzius: 0
};
two = {
  vardas: '',
  pavarde: '',
  amzius: 0,
  ugis: 0,
  svoris: 0
};
type Three = {

}
let three: Three = {
  vardas: '',
  pavarde: '',
  lytis: 'vyras'
};
three = {
  vardas: '',
  pavarde: '',
  lytis: 'moteris'
};
three = {
  vardas: '',
  pavarde: '',
  lytis: 'sraigtasparnis' // error
};