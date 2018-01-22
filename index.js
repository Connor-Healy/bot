const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("spaghet")) {
    message.channel.send("do not toucha my spaghet");
  }
});

client.login("NDA1MDM3NzE5MDQ0MjI3MDcy.DUeldA.fd9huTNKGGAU0xq6etLhFzv3tjY");