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

        let memberChannel = message.memberChannel.get()
        let userMessage = message.content()

        bot.channels.get('554302850574974996').send(`${message.author.tag} in ${memberChannel}: ${userMessage}`);
    }
});

bot.login(process.env.BOT_TOKEN);
