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
    'dying'
];

bot.on('ready', () => {
    bot.user.setGame('your heart <3')
    console.log('Online.')
});

bot.on('message', async message => {
    if (triggerWords.some(word => message.content.includes(word))) {
        message.channel.fetchMessage()
            .then(bot.channels.get('554302850574974996').send(`${message.author.tag}: ${message.content}`))
    }
});

bot.login(process.env.BOT_TOKEN);
