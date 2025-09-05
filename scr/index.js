// Variáveis com os heróis e seus XP
let timeHerois = ["Mulher-Maravilha", "Wolverine", "Homem-de-Ferro", "Homem-Aranha", "Tocha-Humana"];
let xp = [
  ["Mulher-Maravilha", 8000],
  ["Wolverine", 9500],
  ["Homem-de-Ferro", 10001],
  ["Homem-Aranha", 4000],
  ["Tocha-Humana", 3500]
];

//concomitação
console.log("Escolho" + timeHerois[0] + "com o xp de " + xp[0][1])

//proximas variaves
if (valorXP <= 1000) return "Ferro";
  else if (valorXP >= 1001 && valorXP <= 2000) return "Bronze";
  else if (valorXP >= 2001 && valorXP <= 5000) return "Prata";
  else if (valorXP >= 5001 && valorXP <= 7000) return "Ouro";
  else if (valorXP >= 7001 && valorXP <= 8000) return "Diamante";
  else if (valorXP >= 8001 && valorXP <= 9000) return "Ascendente";
  else if (valorXP >= 9001 && valorXP <= 10000) return "Imortal";
  else return "Radiante"; // Acima de 10000

  



