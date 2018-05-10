const Discord = require('discord.js');
const request = require('request');
const bot = new Discord.Client();

bot.on('ready', function () {
  console.log("Je suis connecté !")
});

bot.login('NDQyNzk2OTc2Njc3OTc4MTEy.DdM3Eg._KcG5jUTeJHRd3EDhvHDWIFQYsI');

bot.on('message', message => {
  
  if (message.content === '!risihelp') {
    message.channel.send('**Les commandes disponible pour Risibot :**');
    message.channel.send("*!issou [motclé]*  => Image random de risitas selon le mot clé (seul le premier mot clé est pris en compte atm)");
  }

  if (message.content.startsWith('!issou')){
      let args = message.content.split(' ');

      request.post(
          'https://api.risibank.fr/api/v0/search',
          { json: { search: args[1] } },
          function (error, response, body) {
              if (!error && response.statusCode === 200) {
                  if(body.stickers.length > 0) {
                      let randomPic = Math.floor(Math.random() * Math.floor(body.stickers.length));

                      message.channel.send("Random Risitas for: "+ args[1], {
                          file: body.stickers[randomPic].risibank_link
                      });
                  } else {
                  message.channel.send("ISSOU y'a 0 photo pour ta recherche !");
                }
              }
          }
      );

  }

});