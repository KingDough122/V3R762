module.exports = ({
    name: "log",
    aliases: ['setlog', 'setchangelog'],
    code: `
    $title[**__Changelog Set__*]
    $description[
> Changelog Set to:
 > - **$noMentionMessage**
    ]
$setVar[changelog;$noMentionMessage]
$onlyForIDs[798321003628593152;837514415480897607;❌ You are not an developer so you cannot perform this action.]

`
})