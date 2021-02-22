const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';

// Bot login
client.login(process.env.BOT_TOKEN);

// Initial connect to Discord
client.once('ready', () => {
    console.log('Areet stock bot is online!');
    client.user.setActivity("ticker for link"); 
});

function send(toSend, id) {
    let channel = client.channels.cache.get(id);
    channel.send(toSend);
}
 
client.on('message', message => {
    let id = message.channel.id;
    if (!message.content.includes(prefix) || message.author.bot || typeof message.substring(1) === "Number") return;
    const command = message.content.toString() + ' ';
    let request = command.substring(command.indexOf('$'));
    request = request.substring(0, request.indexOf(' '));
    let symbol = request.substring(1);
    try {
        let embed = new Discord.MessageEmbed()
        .setColor('green')
        .setDescription('[MarketWatch: ' + symbol.toUpperCase() + '](https://www.marketwatch.com/investing/stock/' + symbol + '?mod=quote_search)');

        send(embed, id);
    } catch (e) {
        send('Might be wrong. Perhaps wrong symbol? Exception: ' + e, id);
    }
});