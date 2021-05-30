module.exports = ({
    name: "snipdisbalede",
    aliases: ['s', 'scope'],
    code: `
$title[**__Message Sniped__**]
$description[
- Message Sent By: <@$getServerVar[user]>
- Message Sniped: $getServerVar[snipe]
- Channel Sent In: <#$getServerVar[schan]>]

$color[$getServerVar[Hex]]
$deletecommand
$cooldown[2s;❌ Cooldown, Wait %time% to use this again.]

    `
})