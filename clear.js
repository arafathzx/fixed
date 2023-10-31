
let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

module.exports = {
	name: 'purge',
	description: "delete messages",
  userpermissions: ["MANAGE_MESSAGES"],
  toggleOff: false,
	run: async (client, message, args) => {
        if (isNaN(args[0]))
          return message.channel.send('**Please Supply A Valid Amount To Delete Messages!**')
      
        if (args[0] > 100)
            return message.channel.send("**Please Supply A Number Less Than 100!**");

        if (args[0] < 1)
            return message.channel.send("**Please Supply A Number More Than 1!**");
      let confirmationEmbed = new MessageEmbed()
    .setTitle(`Are you sure?`)
    .setDescription(`Are you sure you want to purge **${args[0]}** messages`)
    .setFooter(message.author.username)
    .setTimestamp()

    let confirmButton = new MessageButton()
    .setStyle("SUCCESS")
    .setLabel("Yes")
    .setCustomId(`Confirm`)

    let cancelButton = new MessageButton()
    .setStyle("DANGER")
    .setLabel("No")
    .setCustomId(`Cancel`)

    let row = new MessageActionRow()
    .addComponents(
      confirmButton, cancelButton
    )

    let sentMsg = await message.channel.send({embeds: [confirmationEmbed], components: [row]})

    const collector = sentMsg.createMessageComponentCollector({ componentType: 'BUTTON', time: 5000, max: 1});

    let disabledrow = new MessageActionRow()
    .addComponents(
      confirmButton.setDisabled(true), cancelButton.setDisabled(true)
    )

    collector.on('collect', async i => {
      if(i.user.id !== message.author.id) return message.channel.send({content: 'This is not for you', ephemeral: true })
      if(i.customId == 'Confirm') {
message.channel.bulkDelete(args[0])
        let kickedEmbed = new MessageEmbed()
      .setDescription(`**Succesfully deleted ${args[0]} messages**`)
         message.channel.send({embeds: [kickedEmbed]}).then(msg => msg.delete({ delay: 100 }))
      }
      if(i.customId == 'Cancel') return message.channel.send('cancelled')
    })
    }
              }

//completed


