const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Muzik Komut Grupları')
.setTimestamp()
.addField('» -çal- Muzik Dinlersiniz', '.çal ')
.addField('» -Ses-Muzigin Sesin Ayarlarsiniz', '.ses 1/100')
.addField('» -Geç- Sarkiyi Gecersiniz', '.geç')
.addField('» -çalan- Calan Sarki Hakkinda Bilgi Verir', '.çalan')
.addField('» -Duraklat- Sarkiyi Durdurursunuz', '.duraklat')
.addField('» -Devam- Sarkiyi Devam Ettirirsiniz', '.devam')
.addField('» -Sira- Kuyrugu Gorursunuz', '.sıra')
.setFooter('© 2019 Amil Amir Muzik', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','komutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardim',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};