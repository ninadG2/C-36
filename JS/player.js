class Player {
    constructor() {

    }
    getCount() {
        var dbref = database.ref("playerCount");
        dbref.on("value", function (data) {
            playerCount = data.val()
        })
    }
    updateCount(count) {
        database.ref("/").update({ playerCount: count })
    }
    update(plyrName) {
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({Name: plyrName})

    }
}