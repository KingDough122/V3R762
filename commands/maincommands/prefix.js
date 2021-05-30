module.exports = ({
    name: "prefix",
    aliases: ['setprefix', '<@817631308691013642>prefix'],
    code: `
    $title[**__New Prefix__**]
    $description[$username has set the bot's prefix to " $noMentionMessage ".]
    $onlyIf[$charCount[$noMentionMessage]<3;❌ Prefix cannot be more than 3 Characters.]
    $onlyPerms[admin;❌ Must have " **__ADMINISTRATION__** " permissions to change the prefix.]
    $onlyIf[$noMentionMessage!=;❌ Please say an " Prefix " to set this to.]
    $setServerVar[Prefix;$noMentionMessage]
    $supressErrors[❌ Error; Invalid Prefix and or Your prefix has broken the datastore for your server, Please contact support to get this reset.]
    $color[$getServerVar[Hex]]
    $deletecommand
    

    `
})