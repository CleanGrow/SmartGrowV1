const channelID = "SEU_CHANNEL_ID";
const writeAPIKey = "SUA_WRITE_API_KEY";

async function atualizarDados() {

    const url = `https://api.thingspeak.com/channels/3401252/feeds.json?results=2`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    const feed = dados.feeds[0];

    document.getElementById("temp").innerText =
        feed.field1 + " °C";

    document.getElementById("umid").innerText =
        feed.field2 + " %";

    document.getElementById("nivel").innerText =
        feed.field3 + " %";
}

async function ligar() {

    await fetch(
        `https://api.thingspeak.com/update?api_key=${writeAPIKey}&field4=1`
    );

    alert("Bomba ligada!");
}

async function desligar() {

    await fetch(
        `https://api.thingspeak.com/update?api_key=${writeAPIKey}&field4=0`
    );

    alert("Bomba desligada!");
}

atualizarDados();

setInterval(atualizarDados, 10000);