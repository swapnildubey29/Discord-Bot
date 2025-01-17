# Discord Bot

A Discord bot built using `discord.js` to manage server activities, including moderation commands, announcements, and reaction-based role assignment.

## Features

- **Kick Members**: Kick members using the `$kick` command with a member ID.
- **Ban Members**: Ban members using the `$ban` command with a member ID.
- **Announcements**: Send announcements using the `$announce` command via a webhook.
- **Reaction Roles**: Assign and remove roles based on emoji reactions.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Discord Developer Portal](https://discord.com/developers/applications) access to create a bot token

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   DISCORD_BOT_TOKEN=your_discord_bot_token
   WEBHOOK_ID=your_webhook_id
   WEBHOOK_TOKEN=your_webhook_token
   ```

## Usage

1. Start the bot:
   ```bash
   node index.js
   ```

2. Invite the bot to your server using the OAuth2 URL from the Discord Developer Portal.

## Commands

### Moderation Commands

- **Kick a Member**:
  ```
  $kick <member_id>
  ```
  Kicks a member from the server if the bot and the user have the required permissions.

- **Ban a Member**:
  ```
  $ban <member_id>
  ```
  Bans a member from the server if the bot and the user have the required permissions.

### Announcement Command

- **Make an Announcement**:
  ```
  $announce <message>
  ```
  Sends the message to a predefined webhook.

### Reaction Roles

- Add roles by reacting to a message with specific emojis.
- Remove roles by removing the reaction.

## Reaction Role Configuration

To set up reaction roles:

1. Ensure the bot has access to the message ID for reactions.
2. Replace the hardcoded `reaction.message.id` and role IDs in the code with your server's specific IDs.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [discord.js](https://discord.js.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
