var { Command } = require("discord.js-commando");
var { RichEmbed } = require('discord.js');
module.exports = class PartyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "party",
            description: "Allows a member to post a party link of their choice.",
            group: "basics",
            memberName: "party"
            args: [
                {
                    key: 'game',
                    prompt: 'The name of the game.',
                    type: 'string'
                },
                {
                    key: 'gamemode',
                    prompt: 'The gamemode of the game.',
                    type: 'string'
                },
                {
                    key: 'region',
                    prompt: 'The region of the party invite.',
                    type: 'string'
                },
                {
                    key: 'link',
                    prompt: 'The party invite link.(must include \"https://\")',
                    type: 'string'
                }
            ]
        });
    }

    async run(msg, { game, gamemode, region, link }) {
        let linkchannel = this.msg.guild.channels.find("name", "member-links")
        let embed = new Discord.RichEmbed()
        .setColor(0x00FF00)
        .setFooter('React with \"🔗\" to get the link.')
        .setTitle('${game} party invite')
        .setAuthor(this.msg.member.user.tag)
        .addField("Gamemode", gamemode, true)
        .addField("Region", region, true)
        .setTimestamp()
        msg.delete();
        return linkchannel.send({embed}).then(function (msg) {msg.react('🔗')});
    }
};
