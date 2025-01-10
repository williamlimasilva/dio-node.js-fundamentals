const readline = require("readline");
const PLAYERS = require("./constants/players");
const { delay } = require("./controller/raceController");

function createPlayer(playerData) {
  return {
    ...playerData,
    PONTOS: 0,
  };
}

function displayPlayerOptions() {
  console.log("\nEscolha um personagem:");
  Object.values(PLAYERS).forEach((player, index) => {
    console.log(`${index + 1}. ${player.NOME}`);
  });
}

function getPlayerByChoice(choice) {
  const playerArray = Object.values(PLAYERS);
  return createPlayer(playerArray[choice - 1]);
}

async function selectPlayers() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (query) => new Promise((resolve) => rl.question(query, resolve));

  try {
    displayPlayerOptions();
    const player1Choice = parseInt(await question("Selecione o primeiro jogador (1-6): "));
    displayPlayerOptions();
    const player2Choice = parseInt(await question("Selecione o segundo jogador (1-6): "));

    rl.close();

    return [getPlayerByChoice(player1Choice), getPlayerByChoice(player2Choice)];
  } catch (error) {
    rl.close();
    throw error;
  }
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
      console.log("Rolando os dados...");
      await delay(1000);

      await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);

      await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
      console.log("Rolando os dados...");
      await delay(1000);

      await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);

      await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);
      console.log("Rolando os dados...");
      await delay(1000);

      await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
      await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

      let penalty = Math.random() < 0.5 ? 1 : 2; // 1 for casco 🐢, 2 for bomba 💣
      let penaltyType = penalty === 1 ? "casco 🐢" : "bomba 💣";

      if (powerResult1 > powerResult2) {
        console.log(
          `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu ${penalty} ponto(s) devido ao ataque com ${penaltyType}`
        );
        character2.PONTOS = Math.max(0, character2.PONTOS - penalty);
        console.log(`${character1.NOME} ganhou um turbo 🚀 e ganhou 1 ponto!`);
        character1.PONTOS++;
      } else if (powerResult2 > powerResult1) {
        console.log(
          `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu ${penalty} ponto(s) devido ao ataque com ${penaltyType}`
        );
        character1.PONTOS = Math.max(0, character1.PONTOS - penalty);
        console.log(`${character2.NOME} ganhou um turbo 🚀 e ganhou 1 ponto!`);
        character2.PONTOS++;
      } else {
        console.log("Confronto empatado! Nenhum ponto foi perdido 😅");
      }
    }

    // verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS) console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS) console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate 🤝");
}

async function main() {
  console.log("Iniciando corrida do Mario Kart!");

  const [player1, player2] = await selectPlayers();
  console.log(`${player1.NOME} vs ${player2.NOME}`);

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);

  console.log("\nFim da corrida!");
}

main().catch(console.error);
