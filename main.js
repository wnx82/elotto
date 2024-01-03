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

// Fonction pour générer un nombre aléatoire entre min et max inclus
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fonction pour générer les numéros EuroMillions
function generateEuroMillions() {
  ListNum.length = 0;
  ListNumComplementaires.length = 0;

  while (ListNum.length < 5) {
    const numero = getRandomNumber(1, 50);
    if (!ListNum.includes(numero)) {
      ListNum.push(numero);
    }
  }

  while (ListNumComplementaires.length < 2) {
    const numero = getRandomNumber(1, 12);
    if (!ListNumComplementaires.includes(numero)) {
      ListNumComplementaires.push(numero);
    }
  }

  ListNum.sort(compareNumbers);
  ListNumComplementaires.sort(compareNumbers);
}

// Fonction pour générer les numéros du Lotto
function generateLotto() {
  ListNum.length = 0;

  while (ListNum.length < 6) {
    const numero = getRandomNumber(1, 45);
    if (!ListNum.includes(numero)) {
      ListNum.push(numero);
    }
  }

  ListNum.sort(compareNumbers);
}

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  numerosEur.textContent = ListNum.join(" ");
  numerosEurCompl.textContent = ListNumComplementaires.join(" ");
  numerosLotto.textContent = ListNum.join(" ");
  loader.style.display = "none";
}

// Fonction pour générer les numéros, la date et l'heure, et mettre à jour l'affichage
function Generate() {
  const date = new Date();
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
    .getSeconds()
    .toString()}`;
  labeldate.textContent = formattedDate;

  numerosEur.textContent = "";
  loader.style.display = "flex";

  generateEuroMillions();
  generateLotto();
  updateDisplay();
}

// Événement DOMContentLoaded pour lancer Generate lors du chargement de la page
document.addEventListener("DOMContentLoaded", Generate);

// Événement click sur le bouton Générer
button.addEventListener("click", Generate);

// Fonction de tri des nombres
function compareNumbers(a, b) {
  return a - b;
}
