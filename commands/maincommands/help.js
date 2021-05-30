module.exports = ({
    name: "help",
    aliases: ['cmds', 'modules'],
    code: `
    $title[**__Command Modules__**]
    $description[- Configuration's must be setup first.
**__MODULES__** 
   
 > " **$getServerVar[Prefix] " Configuration**
    *~ Setup for other command modules.*

🟢 | **$getServerVar[Prefix] Customize** 
    *~ Shows some ways to customize some things on the bot.*

🟢 | **$getServerVar[Prefix] BotInfo**
    *~ Show's some of the bot's information.*

🟢 | **$getServerVar[Prefix] Versions**
    *~ Show's different versions logs that the bot has gone through.*

🟢 | **$getServerVar[Prefix] Changelog**
    *~ Show's things added, Removed and or Changed within the bot.*

🟢 | **$getServerVar[Prefix] Support**
    *~ Show's information about getting help.
**TWU: $uptime**
[V3R672 BOT INVITE](https://discord.com/oauth2/authorize?client_id=817631308691013642&scope=bot&permissions=2147483647) | [V3R672 SUPPORT](https://discord.gg/xQTWxH6EJ4)
$color[$getServerVar[Hex]]
$deletecommand

    `
});