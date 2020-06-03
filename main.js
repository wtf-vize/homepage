const firstName = "Marek";
const wifeName = "Magda";
const myAge = 40;
const wifeAge = 38;
const roznica = myAge - wifeAge;
console.log(`Mam na imię ${firstName} i mam prawie ${myAge} lat.\nMoja żona ma na imię ${wifeName} i ma ${wifeAge} lat.
Jestem ${roznica} lata starszy od żony, a te informacje zostały wypisane przy użyciu skryptu main.js.`);

// alert (`Cześć, mam na imię ${firstName}.
// Zaglądnij do konsoli aby zobaczyć więcej informacji o mnie.`);

const txt = document.querySelector(".paragraf--js");
console.log(txt);
txt.innerHTML =
  'A najlepsze są wina robione z "p a s j ą", a ten tekst jest napisany przy użyciu JS i innerHTML.';

function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`);

    return myNumber * 7;
}

const myResult = calculate(8);
console.log (myResult);
console.log (`"__________________"\n"=================="`)

function nazwaFunkcji(nazwaParametru) {
    console.log (`Dostałam ${nazwaParametru}`)
    return nazwaParametru*7
}
const mojWynik = nazwaFunkcji(myAge)

console.log(mojWynik)

console.log (`"__________________"\n"=================="`)

function hello (imie, wiek) {
    console.log (`Cześć jest ${imie} i mam ${wiek} lat`)
}
hello ('Marek', 39)

if (!(myAge>wifeAge)) {
    console.log (`${firstName} jest starszy od ${wifeName}.`)
}
else {
    console.log(`${wifeName} jest starsza od ${firstName}.`)
}