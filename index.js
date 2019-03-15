const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '-'

const triggerWords = ['kill myself',
    'death',
    'alive',
    'live',
    'want to die',
    'knife',
    'hurt myself',
    'suicide',
    'kill me',
    'noose',
    'hang',
    'slit',
    'blood',
    'dying',
    'knives'
];

bot.on('ready', () => {
    bot.user.setGame('your heart <3')
    console.log('Online.')
});

bot.on('message', async message => {
    for (x = 0; x < triggerWords.length; x++) {
        if (message.content.toUpperCase() == triggerWords[x].toUpperCase()) {
            bot.channels.get('556168235955912725').send(`${message.author.tag} in ${message.channel}: mentioned '${triggerWords[x]}.'`);
        }
    }
});

bot.login(process.env.BOT_TOKEN);
