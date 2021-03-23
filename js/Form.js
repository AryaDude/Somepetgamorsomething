class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("«Virtual Pet»")
        title.position(200, 100)

        var input = createInput("pet name")
        input.position(200, 150)
        
        var name = input.value();

        var button = createButton("Feed pet!")
        button.position(200,250)
        
        var greeting = createElement("h4")
        greeting.html("Welcome, New Pet Owner, to the Virtual Pet World. Here you will be able to own you're very own pet. "+ "" +" Work hard, and love you're pet!")
        greeting.position(50,400)
        
        var fedpet = createElement("h4")
        fedpet.html("Your Pet, Has Been Fed!")
        fedpet.position(50,400)
        fedpet.hide()
        
        button.mousePressed(function(){
            fedpet.show()
            greeting.hide()
            fedpet.position(200,400)
            input.show()
            input.position(200, 150)
            button.hide()
            title.position(200,100)
            var name = input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            
        })
    }
}