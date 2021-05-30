module.exports = ({
    name: "vrole",
    aliases: ['verfiedrole', 'verificationrole'],
    code:`
    $title[**__verified Role Set__**]
    $description[$username has set the verified role to "<@&$mentionedRoles[1]>".]
    $setServerVar[vrole;$mentionedRoles[1]]
    $setServerVar[vsetup2;🟢]
    $onlyPerms[manageroles;❌ Must have " **MANAGE_ROLES** " to use this command.]
    $onlyIf[$mentionedRoles[1]!=;❌ You must mentioned a role to set this to.]
    $deletecommand
    $if[$getServerVar[config]==4;$setServerVar[vstats;🟢]]
    $endif
    $setServerVar[config;$sum[$getServerVar[config];2]]
    $color[$getServerVar[Hex]]

    `
})