// Variáveis com os heróis e seus XP
let timeHerois = ["Mulher-Maravilha", "Wolverine", "Homem-de-Ferro", "Homem-Aranha", "Tocha-Humana"];
let xp = [
  ["Mulher-Maravilha", 8000],
  ["Wolverine", 9500],
  ["Homem-de-Ferro", 10001],
  ["Homem-Aranha", 4000],
  ["Tocha-Humana", 3500]
];

// primeira concatenação 
console.log("Escolho " + timeHerois[0] + " " + " com o XP de " + xp[0][1]);

//proximas variaves - Função para classificar o nível baseado no XP | parte 2
function classificarNivel(xp) { 
if (xp <= 1000) return "Ferro"; 
else if (xp >= 1001 && xp <= 2000) return "Bronze"; 
else if (xp >= 2001 && xp <= 5000) return "Prata"; 
else if (xp >= 5001 && xp <= 7000) return "Ouro"; 
else if (xp >= 7001 && xp <= 8000) return "Diamante"; 
else if (xp >= 8001 && xp <= 9000) return "Ascendente"; 
else if (xp >= 9001 && xp <= 10000) return "Imortal"; 
else if (xp > 10000) return "Radiante"; 
}

// concatenação 2 | parte 3 - final?
let nivelHeroi = classificarNivel(xp[0][1]);
console.log("O Herói escolhido é: " + timeHerois[0]);
console.log("O nível XP do Herói escolhido é: " + xp[0][1]);
console.log(`${timeHerois[0]} + "tem " + ${xp[0][1]} + " de XP e está no nível " + ${nivelHeroi}`);  
