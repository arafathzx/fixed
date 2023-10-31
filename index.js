const { Client, Collection, MessageEmbed} = require("discord.js");



const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);


setInterval(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  }
}, 5000);

 
  

    


const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});



  

app.listen(process.env.PORT);
client.login("MTEyMTc0ODkyNzI4NTMwMTMxOA.GWjc83.rcrV-9gsY9fwTh57GRtbE30Gy28oCeEhKHExhE");