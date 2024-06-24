require('dotenv').config();
const { REST, } = require('discord.js');

const command = [
    {
        name: 'hi',
        description: 'Replies with hey!',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
exports.rest = rest;

