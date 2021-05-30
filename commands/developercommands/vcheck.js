module.exports = ({
    name: "check",
    aliases: ['vcheck', 'codecheck', 'ccheck'],
    code:`
    $getUserVar[vcode;$mentioned[1;yes]]
    $onlyPerms[managemessages; ]
    $deletecommand
    `
})