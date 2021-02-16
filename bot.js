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

function send(toSend) {
    let channel = client.channels.cache.get(stockBot);
    channel.send(toSend);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    try {
        let embed = new Discord().MessageEmbed()
        .setColor('green')
        .setTitle('Market Watch Link')
        .setDescription('[' + symbol + '](https://www.marketwatch.com/investing/stock/' + symbol + '?mod=quote_search)');

        send(embed);
    } catch (e) {
        send('Might be wrong. Perhaps wrong symbol?');
    }
});