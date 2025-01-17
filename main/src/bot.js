require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMembers, 
  ],
});




client.login(process.env.DISCORD_BOT_TOKEN)
  .then(() => console.log('Bot is logged in!'))
  .catch(console.error)