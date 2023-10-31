const client = require("../index");

const { MessageEmbed } = require("discord.js");

client.on("messageCreate", async (message) => {

    if (

        message.author.bot ||

        !message.guild ||

        !message.content.toLowerCase().startsWith(client.config.prefix)

    )

        return;

    const [cmd, ...args] = message.content

        .slice(client.config.prefix.length)

        .trim()

        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;

    if (typeof command.run !== "function") {

        console.error(`Command "${cmd}" is not a function.`);

        return;

    }

    await command.run(client, message, args);

});

/*-------------------------------------------------------------------------------------*/



client.on('messageCreate', async (message) => {

if (message.author.id === '1002231307801219132') {

  return;

}

  if (message.author.id === '1002231307801219132') {

  return;

}

  if (message.author.id === '1002231307801219132') {

  return;

}

    if (message.author.bot) return;

  if (message.content.includes(`<@1139891515527802963>`)) {

    const NOOB = new MessageEmbed()

    .setDescription("What The Problem")

    message.reply({embeds:[NOOB]})

  }

  }

);

client.on('messageCreate', async (message) => {

if (message.author.id === '1002231307801219132') {

  return;

}

  if (message.author.id === '1002231307801219132') {

  return;

}

  if (message.author.id === '1002231307801219132') {

  return;

}

  if (message.author.bot) return;

  if (message.content.includes(`<@1002231307801219132>`)) {

    const BALA = new MessageEmbed()

    .setDescription("BALA ANNAN WILL REPLAY SOONNN")

    message.reply({embeds:[BALA]})

  }

  }

);



/*-------------------------------------------------------------------------------------*/