module.exports = ({
    name: "urole",
    aliases: ['unverfiedrole', 'unverificationrole'],
    code:`
    $title[**__Unverified Role Set__**]
    $description[$username has set the unverified role to "<@&$mentionedRoles[1]>".]
    $setServerVar[urole;$mentionedRoles[1]]
    $setServerVar[vsetup4;🟢]
    $onlyPerms[manageroles;❌ Must have " **MANAGE_ROLES** " to use this command.]
    $onlyIf[$mentionedRoles[1]!=;❌ You must mentioned a role to set this to.]
    $setServerVar[config;$sum[$getServerVar[config];1]]
    $deletecommand
    $if[$getServerVar[config]==4;$setServerVar[vstats;🟢]]
    $endif
    $color[$getServerVar[Hex]]

    `
})