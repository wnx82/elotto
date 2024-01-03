console.log("EuroMillions & Lotto");
console.log("--------------------");

const ListNum = [];
const ListNumComplementaires = [];

const button = document.querySelector("button");
const numerosEur = document.querySelector(".numerosEur");
const numerosEurCompl = document.querySelector(".numerosEurCompl");
const numerosLotto = document.querySelector(".numerosLotto");
const loader = document.querySelector(".loader");
const labeldate = document.querySelector(".date");

loader.style.display = "none";

button.addEventListener("click", Generate);

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const date = new Date().getFullYear();
console.log(date);

function Generate() {
  var date = new Date();
  var current_date =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  labeldate.textContent = current_date;
  numerosEur.textContent = "";

  loader.style.display = "flex";
  //EuroMillions
  ListNum.splice(0, ListNum.length);
  ListNumComplementaires.splice(0, ListNumComplementaires.length);
  ListNumComplementaires;
  while (ListNum.length < 5) {
    numero = getRandomNumber(1, 50);
    if (!ListNum.includes(numero)) {
      ListNum.push(numero);
    }
  }

  //ListNum.substring(0, str.length - 1);
  while (ListNumComplementaires.length < 2) {
    numero = getRandomNumber(1, 12);
    if (!ListNumComplementaires.includes(numero)) {
      ListNumComplementaires.push(numero);
    }
  }

  ListNum.sort(compareNumbers);
  ListNumComplementaires.sort(compareNumbers);
  console.log(
    "Liste des Numéros pour l'Euro Millions : [" +
      ListNum +
      "]  [" +
      ListNumComplementaires +
      "]"
  );

  //ListNum.forEach(element => console.log(element));

  //ListNum.forEach(e => numerosEur.textContent += e + " / ");
  numerosEur.textContent = ListNum;
  numerosEurCompl.textContent = ListNumComplementaires;

  //Lotto
  //reset
  ListNum.splice(0, ListNum.length);

  while (ListNum.length < 6) {
    numero = getRandomNumber(1, 45);
    if (!ListNum.includes(numero)) {
      ListNum.push(numero);
    }
  }
  ListNum.sort(compareNumbers);
  console.log("Liste des Numéros pour le lotto : [" + ListNum + "]");

  numerosLotto.textContent = ListNum;

  setTimeout(() => {
    loader.style.display = "none";
  }, "250");
}

//Tri des nombres
function compareNumbers(a, b) {
  return a - b;
}
