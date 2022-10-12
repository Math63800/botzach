const Discord = require("discord.js");
const Client = new Discord.Client({intents: []});

Client.on("ready",() => {
    console.log("bot opérationel");
});

Client.login("MTAyOTcwNDg0Nzg5MDU5NTg1MA.GP3Zt5.C-ABkXcDUZhSuObG5BX9GGKiNjMJ1cZ3EKJ6U8");
