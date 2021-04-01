class Form {
    constructor() { }

    display() {
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(300, 80)
        var input = createInput("Name")
        input.position(350, 150)
        var button = createButton("play")
        button.position(350, 250)

        button.mousePressed(function () {

            input.hide();
            button.hide();
            var Name = input.value();
            var greeting = createElement("h3")
            greeting.html("hello " + Name)
            greeting.position(350, 250);
            playerCount = playerCount + 1;
            player.updateCount(playerCount)
            player.update(Name)
        })


    }
}