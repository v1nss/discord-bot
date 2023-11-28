require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
    // client.channels.get('CHANNEL ID').send('Hello here!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'announce') {
        const sendto = interaction.options.get('sendto').value;
        const mention = interaction.options.getMentionable('mention');
        const message = interaction.options.get('message').value;

        if (channel) {
            await channel.send(`${mention} \n\n ${message}`);
            interaction.reply(`Message sent to <#${channelId}>: ${message}`);
        } else {
            interaction.reply(`Invalid channel mention: ${sendto}`);
        }
    }
});

client.login(process.env.TOKEN);