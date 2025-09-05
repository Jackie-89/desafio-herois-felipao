// Variáveis com os heróis e seus XP
let timeHerois = ["Mulher-Maravilha", "Wolverine", "Homem-de-Ferro", "Homem-Aranha", "Tocha-Humana"];
let valorXp = [
  ["Mulher-Maravilha", 8000],
  ["Wolverine", 9500],
  ["Homem-de-Ferro", 10001],
  ["Homem-Aranha", 4000],
  ["Tocha-Humana", 3500]
];

//concomitação
console.log("Escolho " + timeHerois[0] + "com o xp de " + valorXp[0][1])

//proximas variaves
if (valorXP <= 1000) return "Ferro";
  else if (valorXP >= 1001 && valorXp <= 2000) return "Bronze";
  else if (valorXP >= 2001 && valorXp <= 5000) return "Prata";
  else if (valorXP >= 5001 && valorXp <= 7000) return "Ouro";
  else if (valorXP >= 7001 && valorXp <= 8000) return "Diamante";
  else if (valorXP >= 8001 && valorXp <= 9000) return "Ascendente";
  else if (valorXP >= 9001 && valorXp <= 10000) return "Imortal";
  else return "Radiante" (valorXp > 10000); 
  
//parte dois, tentando
console.log("O Heróis escolhido é: " + timeHerois[0]);
console.log("O nível XP do Heroí escolhido é: " + valorXp[0][1]);
console.log(`${nomeHeroi} tem ${valorXp} de XP e está no nível ${nivelHeroi}`);

