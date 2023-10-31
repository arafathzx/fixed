const { MessageEmbed } = require("discord.js"); 
module.exports = {
   name: "announce",
   description: "Annouce Cmd Of ROYAL",
    type: "CHAT_INPUT",
      options:[
       {
     name:"roles",
     description:"mention the user",
  type: "MENTIONABLE", 
     required:true,
},
{
     name:"channel",
     description:"The channel",
     type: 'CHANNEL',
     //channelTypes: ['GUILD_ALL'],
     required:true,
},
{
     name:"message",
     description:"The message to be announced",
     type:3,
     required:true, 
},
          {

     name:"image",

     description:"set a image",

     type:3,

     required:false, 

},
      /*  {
     name:"attach",
     description:"mention the user",
  type: "IMAGE", 
     required:false,
},*/
        
],
   run: async (client, interaction, args) => {
     const roles = interaction.options.getMentionable("roles")
     const anchannel = interaction.options.getChannel("channel")
     const message = interaction.options.getString("message")
     const image = interaction.options.getString("image")
     
    if (interaction.member.roles.cache.some(role => role.name === 'BALA')) {
    let embed = new MessageEmbed()
      .setTitle(`__ANNOUNCEMENT__`)
      .setDescription(`**${interaction.options.getString("message")}**`)
      //.setThumbnail(client.user.displayAvatarURL())
      .setColor("#2f3136")
      .setImage(`${interaction.options.getString("image")}`)
        .setFooter("ROYAL")    
      .setThumbnail(interaction.guild.iconURL({ dynamic: true})) 
     // .setTimestamp()
      //anchannel.send(`${interaction.options.getMentionable("roles")}`)
    anchannel.send({ embeds: [embed], content: `${interaction.options.getMentionable("roles")}`});
    interaction.followUp("Announcement Made Successfully!")
  } else {
    const embed = new MessageEmbed()
    .setDescription("Only Who Have <@&1002231307801219132> Role Have Access To This Commands")
    interaction.followUp({embeds:[embed]})
  }

   }
};

