// const { ids } = require("webpack");

class FollowToggle {
    constructor($el) {
        this.$el = $($el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");

        this.render();
        this.handleClick();  
    }
    
    render() {
        if (this.followState === "followed") {
            this.$el.html("Unfollow!");
        } else {
            this.$el.html("Follow!");
        }
    };

    handleClick () {
        this.$el.on('click', e => {
        e.preventDefault();
        const test = this.userId;
        if (this.followState === "followed") {
            $.ajax({
                method: "DELETE",
                url: `/users/${test}/follow`,
                datatype: "json",
                success: response => console.log("user unfollowed!")
            });
                this.followState = "unfollowed";
                this.render();
        } else if (this.followState === "unfollowed") {
            $.ajax({
                method: "POST",
                url: `/users/${test}/follow`,
                datatype: "json",
                success: response => console.log("user followed!") 
            });
            this.followState = "followed";
            this.render(); 
        }
      }); 
    }
    
}
module.exports = FollowToggle; 