const { MessageEmbed } = require("discord.js"); 
module.exports = {
   name: "embed",
   description: "Embed builder for dexcord",
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
     channelTypes: ['GUILD_TEXT'],
     required:true,
},
{
     name:"description",
     description:"The message to be announced",
     type:3,
     required:true, 
},
        {
     name:"title",
     description:"The message to be announced",
     type:3,
     required:true, 
},
{
     name:"footer",
     description:"The message to be announced",
     type:3,
     required:true, 
},
          {

     name:"color",

     description:"The message color",

     type:3,

     required:true, 

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
     const description = interaction.options.getString("description")
     const title = interaction.options.getString("title")
     const footer = interaction.options.getString("footer")
     const color = interaction.options.getMentionable("color")
    if (interaction.member.roles.cache.some(role => role.name === 'BALA')) {
    let embed = new MessageEmbed()
      .setTitle(`**__${interaction.options.getString("title")}__**`)
      .setDescription(`**${interaction.options.getString("description")}**`)
      //.setThumbnail(client.user.displayAvatarURL())
      .setColor(`${interaction.options.getString("color")}`)
      //.setImage(`${interaction.options.getString("image")}`)
        .setFooter(`${interaction.options.getString("footer")}`)    
      //.setThumbnail(interaction.guild.iconURL({ dynamic: true})) 
      //.setTimestamp()
      //anchannel.send(`${interaction.options.getMentionable("roles")}`)
    anchannel.send({ embeds: [embed], content: `${interaction.options.getMentionable("roles")}`});
    interaction.followUp("BOOOM!")
  } else {
    const embed = new MessageEmbed()
    .setDescription("You Are Not Royal Staff")
    interaction.followUp({embeds:[embed]})
  }

   }
};

