var { Command } = require("discord.js-commando");
module.exports = class PartyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "partyban",
            description: "Prevents the selected user from having access to member-links.",
            group: "moderation",
            memberName: "partyban"
            args: [
                {
                    key: 'member',
                    prompt: 'Member to be banned from parties.',
                    type: 'string'
                }        
            ]
        });
    }

    async run(msg, { member }) {
        
        msg.delete();
        return linkchannel.send({embed}).then(function (msg) {msg.react('🔗')});
    }
};
