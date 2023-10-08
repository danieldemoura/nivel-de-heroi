const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// função reponsável por fazer a pergunta ao usuário e depois que o usuário digitar retorna uma Promise com o valor do que foi digitado pelo usuário.
function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    })
}

async function ask() {
    const heroiName = await question("Digite o nome do seu Herói: ");
    const xp = await question(`\nDigite a quantidade de XP do seu Herói entre 1 mil até 10 mil de XP: `);

    // se o número tiver . será removido usando o método replace() e depois é convertido para um número com o método Number()
    const xpOfHero = Number(xp.replace(".", ""));
    let levelOfHero = null;


    if(xpOfHero < 1000) levelOfHero = "Ferro";
    else if (xpOfHero >= 1001 && xpOfHero <= 2000) levelOfHero = "Bronze";
    else if (xpOfHero >= 2001 && xpOfHero <= 5000) levelOfHero = "Prata";
    else if (xpOfHero >= 6001 && xpOfHero <= 7000) levelOfHero = "Ouro";
    else if (xpOfHero >= 7001 && xpOfHero <= 8000) levelOfHero = "Platina";
    else if (xpOfHero >= 8001 && xpOfHero <= 9000) levelOfHero = "Ascendente";
    else if (xpOfHero >= 9001 && xpOfHero <= 10000) levelOfHero = "Imortal";
    else if (xpOfHero >= 10001) levelOfHero = "Radiante";
    else levelOfHero = "Valor inválido: é obrigatório digitar um valor do tipo númerico!";


    if(xpOfHero) {
        console.log(`\n====================\nO Herói de nome ${heroiName} está no nível ${levelOfHero}`);
    } else {
        console.log(`\n====================\n${levelOfHero}`);
    }

    rl.close()
}

ask();