module.exports = ({
    name: "verificationcode",
    aliases: ['vcode', 'verifiedcode'],
    code:`
    $title[**__Verification Complete__**]
    $description[$username, You have complete the verificaiton, Enjoy the the server.]
    $setUserVar[vcode;0]
    $onlyForChannels[$getServerVar[vchannel];❌ You can only do this command in the verification channel.]
    $giveRole[$authorID;$getServerVar[vrole]]
    $takeRole[$authorID;$getServerVar[urole]]
    $deletecommand
    $deleteIn[5s]
    $suppressErrors[❌ Error; Please ensure that the bot has " All Permissions ".]
    $onlyIf[$noMentionMessage!=$getServerVar[vcode];❌ You must provide the correct verification code.]
    $cooldown[5s;❌ Cooldown, Please wait %time% before using this command again.]
    $onlyIf[$getServerVar[config]>3;❌ This server has not completed the verification configuration module fully.]
    
    `
})