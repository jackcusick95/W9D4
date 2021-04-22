// const { ids } = require("webpack");

class FollowToggle {
    constructor($el) {
        this.$el = $($el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");

        this.render(); 
    }
}

render() {
    if (this.followState === "followed") {
        this.$el.html("Follow!");
    } else {
        this.$el.html("Unfollow!");
    }
};

module.exports = FollowToggle; 