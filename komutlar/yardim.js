const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Muzik Komut Grupları')
.setTimestamp()
.addField('» -Çal- Müzik Dinlersiniz', '+çal ')
.addField('» -Ses- Müziğin Sesin Ayarlarsınız', '+ses 1/100')
.addField('» -Geç- Şarkıyı Geçersiniz', '+geç')
.addField('» -Çalan- Çalan Şarkı Hakkında Bilgi Verir', '+çalan')
.addField('» -Duraklat- Şarkıyı Durdurursunuz', '+duraklat')
.addField('» -Devam- Şarkıyı Devam Ettirirsiniz', '+devam')
.addField('» -Sıra- Kuyruğu Görürsünüz', '+sıra')
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