const Discord = require('discord.js');
const client = new Discord.Client();
const stockBot = '762754228464517171';
const prefix = '$';

// Bot login
client.login(process.env.BOT_TOKEN);

// Initial connect to Discord
client.once('ready', () => {
    console.log('Areet stock bot is online!');
    client.user.setActivity("ticker for link"); 
});

function send(toSend, id) {
    let channel = client.channels.cache.get(stockBot);
    channel.send(toSend);
}

client.on('message', message => {
    let id = message.channel.id;
    if (!message.content.includes(prefix) || message.author.bot) return;
    const command = message.content.toString() + ' ';
    console.log(command);
    let request = command.substring(command.indexOf('$'));
    console.log(request);
    request = request.substring(0, request.indexOf(' '));
    console.log(request);
    let symbol = request.substring(1);
    console.log(symbol);
    try {
        let embed = new Discord.MessageEmbed()
        .setColor('green')
        .setDescription('[MarketWatch: ' + symbol.toUpperCase() + '](https://www.marketwatch.com/investing/stock/' + symbol + '?mod=quote_search)');

        send(embed, id);
    } catch (e) {
        send('Might be wrong. Perhaps wrong symbol? Exception: ' + e, id);
    }
});