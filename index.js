var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou Mizeravi";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar entre 0 e 10";
  } else {
    elementoResultado.innerHTML = "kkk Burrão";
  }
}
