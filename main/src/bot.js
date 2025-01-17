require("dotenv").config()

const { Client, GatewayIntentBits, Partials, WebhookClient } = require('discord.js')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
})

const webhookClient = new WebhookClient({
  id: process.env.WEBHOOK_ID,
  token: process.env.WEBHOOK_TOKEN,
})

const PREFIX = "$"

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`)
})

client.on('messageCreate', async (message) => {
  if (message.author.bot) return
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/)

    if (CMD_NAME === 'kick') {
      if (!message.member.permissions.has('KickMembers'))
        return message.reply('You do not have permissions to use that command')
      if (args.length === 0) return message.reply('Please provide an ID')
      const member = message.guild.members.cache.get(args[0])
      if (member) {
        member
          .kick()
          .then(() => message.channel.send(`${member} was kicked.`))
          .catch((err) => message.channel.send('I cannot kick that user :('))
      } else {
        message.channel.send('That member was not found')
      }
    } else if (CMD_NAME === 'ban') {
      if (!message.member.permissions.has('BanMembers'))
        return message.reply("You do not have permissions to use that command")
      if (args.length === 0) return message.reply("Please provide an ID")
      try {
        await message.guild.members.ban(args[0])
        message.channel.send('User was banned successfully')
      } catch (err) {
        console.log(err)
        message.channel.send('An error occurred. Either I do not have permissions or the user was not found')
      }
    } else if (CMD_NAME === 'announce') {
      console.log(args)
      const msg = args.join(' ')
      console.log(msg)
      webhookClient.send(msg)
    }
  }
})

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji
  const member = reaction.message.guild.members.cache.get(user.id)
  if (reaction.message.id === '738666523408990258') {
    switch (name) {
      case '🍎':
        member.roles.add('738664659103776818')
        break
      case '🍌':
        member.roles.add('738664632838782998')
        break
      case '🍇':
        member.roles.add('738664618511171634')
        break
      case '🍑':
        member.roles.add('738664590178779167')
        break
    }
  }
})

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji
  const member = reaction.message.guild.members.cache.get(user.id)
  if (reaction.message.id === '738666523408990258') {
    switch (name) {
      case '🍎':
        member.roles.remove('738664659103776818')
        break
      case '🍌':
        member.roles.remove('738664632838782998')
        break
      case '🍇':
        member.roles.remove('738664618511171634')
        break
      case '🍑':
        member.roles.remove('738664590178779167')
        break
    }
  }
})

client.login(process.env.DISCORD_BOT_TOKEN)