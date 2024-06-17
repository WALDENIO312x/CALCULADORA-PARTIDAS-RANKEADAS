const heroi = "Wandré";
let vitorias = 172;
let derrotas = 88;

function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de rankeados
    const saldo = vitorias - derrotas;

    // Determinando o nível de ranqueado
    let nivel;
    if (saldo < 10) {
        nivel = "Ferro";
      } else if (saldo >= 10 && saldo < 21) {
        nivel = "Bronze";
      } else if (saldo >= 21 && saldo < 51) {
        nivel = "Prata";
      } else if (saldo >= 51 && saldo < 81) {
        nivel = "Ouro";
      } else if (saldo >= 81 && saldo < 91) {
        nivel = "Diamante";
      } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
      } else {
        nivel = "Imortal";
      }

    return {saldo, nivel};
}

const resultado = calcularNivel(vitorias, derrotas);

console.log("O Heroi " + heroi + " tem saldo de vitórias de " + resultado.saldo + ", ele está no nível " + resultado.nivel + ".");


