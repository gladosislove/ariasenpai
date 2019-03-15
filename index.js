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
    for (x = 0; x < triggerWords.length; x++) {
        if (message.content.toUpperCase() == triggerWords[x].toUpperCase()) {
            bot.channels.get('554302850574974996').send('Test');
        }
    }
});

bot.login(process.env.BOT_TOKEN);
