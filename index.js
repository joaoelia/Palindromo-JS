/* const numero = parseInt(prompt("Digite um número entre 1 e 20: "));

if (numero < 1 || numero > 20) {
  alert("Número inválido. Digite um número entre 1 e 20.");
} else {
  let tabuada = "";

  for (let i = 1; i <= 20; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`;
  }

  alert(tabuada);
} */

const palavra = prompt("Digite uma palavra: ");

const palavraInvertida = palavra.split("").reverse().join("");

if (palavra === palavraInvertida) {
  alert(`A palavra "${palavra}" é um palíndromo.`);
} else {
  alert(`A palavra "${palavra}" não é um palíndromo. Lida de trás para frente: "${palavraInvertida}".`);
}

