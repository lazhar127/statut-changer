const Discord = require('discord.js'), // By Mirror
    utilisateur = new Discord.Client(), // By Mirror
    { token, id } = require('./config.json') // By Mirror
// By Mirror
    console.log('[By Mirror]') // By Mirror
// By Mirror
utilisateur.login(token) // By Mirror
// By Mirror
const status = [ // By Mirror
    "online", // By Mirror
    "idle", // By Mirror
    "dnd", // By Mirror
    "invisible", // By Mirror
    "STREAMING" // By Mirror
] // By Mirror
// By Mirror
utilisateur.on('ready', () => { // By Mirror
    console.log("[Notif] Connecté") // By Mirror
// By Mirror
    setInterval(() => { // By Mirror
        var statusRdm = status[Math.floor(Math.random() * status.length)] // By Mirror
        if (statusRdm == "STREAMING") { // By Mirror
            utilisateur.user.setStatus("invisible"); // By Mirror
            utilisateur.user.setActivity("", {type: "STREAMING"}); // By Mirror
        } else if (statusRdm !== "STREAMING") { // By Mirror
            utilisateur.user.setActivity("", {type: ""}); // By Mirror
            utilisateur.user.setStatus(statusRdm); // By Mirror
        } // By Mirror
    }, 3000); // By Mirror
}) // By Mirror