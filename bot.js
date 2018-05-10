const Discord = require('discord.js');
const rp = require('request-promise');
const bot = new Discord.Client();

const error404 = "*ISSOU y'a 0 photo pour ta recherche !*";
const error503 = "*Problème d'api, retry stp*";
const risibankApi = "https://api.risibank.fr/api/v0/search";

bot.on('ready', function () {
  console.log("Risibot connected !")
});

bot.login('NDQyNzk2OTc2Njc3OTc4MTEy.DdM3Eg._KcG5jUTeJHRd3EDhvHDWIFQYsI');

bot.on('message', message => {

  if (message.content === '!risihelp') {
    message.channel.send('**Les commandes disponible pour Risibot :**');
    message.channel.send("*!issou [motclé]*  => Image random de risitas selon le mot clé (seul le premier mot clé est pris en compte atm)");
  }

  if (message.content.startsWith('!issou')){
      let args = message.content.split(' ');

      if (!args[1]) {
         return message.channel.send("**AYAAA le mec a oublié de mettre un mot-clé**");
      }

      let options = {
          method: 'POST',
          uri: risibankApi,
          body: {
              search: args[1]
          },
          json: true // Automatically stringifies the body to JSON
      };

      rp(options)
          .then(function (body) {
              if(body.stickers.length > 0) {
                  let randomPic = Math.floor(Math.random() * Math.floor(body.stickers.length));

                  if(body.stickers[randomPic].risibank_link) {
                      message.channel.send("Random Risitas for: "+ args[1], {
                          file: body.stickers[randomPic].risibank_link
                      });
                  } else {
                      message.channel.send(error404);
                  }
              } else {
                  message.channel.send(error404);
              }
          })
          .catch(function (err) {
              console.log(err);
              message.channel.send(error503);
          });

  }

});