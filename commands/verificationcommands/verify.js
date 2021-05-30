module.exports = ({
    name: "verify",
    aliases: ['v', 'gate'],
    code: `
    $awaitReaction[$authorID;1d;Hello, Please react below to intiate the verification phase.;✔️;vcode;❌ You have failed to react intime and or Failed to complete this task.;yes]
    $deletecommand
    $onlyForChannels[$getServerVar[vchannel];❌ Cannot use this command here, Must use the command in the verification channel.]
    $onlyIf[$getServerVar[config]>3;❌ This server has not completed the verification configuration module fully.]
    $setUserVar[vcode;$randomString[8]]
    $cooldown[5s;❌ Please wait %time% to use this command again]
    $if[$getServerVar[config]==4;$setServerVar[vstats;🟢]]
    $endif
    $suppressErrors[❌ Bot is missing reaction permissions.]
    `
})