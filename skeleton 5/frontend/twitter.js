const FollowToggle = require("./follow_toggle.js");

$(() => {
    $(".follow-toggle").each(function(idx,button) {
        const $followtoggle = new FollowToggle(button);
    })
    console.log("Testing");
});