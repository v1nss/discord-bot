require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'announce',
        description: 'Makes announcements!',
        options: [
            {
                name: 'sendto',
                description: 'Where you want to send this?',
                type: ApplicationCommandOptionType.Channel,
                required: true,
            },
            {
                name: 'mention',
                description: 'Who you want to mention?',
                type: ApplicationCommandOptionType.Mentionable,
                required: true,
            },
            {
                name: 'message',
                description: 'what is your message?',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
];

const rest = new REST ({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(
                    process.env.CLIENT_ID,
                    process.env.GUILD_ID
                ),
            { body: commands }
        );
        console.log('Slash commands were registered successfuly!');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();
