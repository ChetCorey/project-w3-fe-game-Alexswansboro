const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')
const screenSize = {
    x: canvas.width,
    y: canvas.height
}
class Game {
    constructor() {
        this.player = new Player(this)
        this.aliens = [new Alien(), new Alien(), new Alien(), new Alien()] 
        this.ticks()
    }
    draw() {
        context.clearRect(0, 0, 500, 500)
        this.player.draw()
        this.aliens.forEach(function(alien){
            alien.draw()
        })
    }
    ticks() {
        this.update()
        this.draw()
        requestAnimationFrame(() => this.ticks())
    }
    update() {
        this.player.update()
        this.aliens.forEach(function(alien){
            alien.update()
        })
    }
}
context.clearRect(0, 0, 500, 500)

class Player {
    constructor(game) {
        this.center = {
            x: screenSize.x / 2 - 10,
            y: 450
        }
        this.playerSize = {
            x: 20,
            y: 20
        }
        this.keyboarder = new Keyboarder()
    }
    draw() {
        context.fillStyle = "#000000"
        context.fillRect(this.center.x, this.center.y, this.playerSize.x, this.playerSize.y)
    }
    update() {
        if (this.keyboarder.isDown(Keyboarder.KEYS.LEFT)) {
            this.center.x -= 2
            if (this.center.x <= 0) this.center.x = 0
        }
        if (this.keyboarder.isDown(Keyboarder.KEYS.RIGHT)) {
            this.center.x += 2
            if (this.center.x >= 490) this.center.x = 490
        }
        // if(this.keyboarder.isDown(Keyboarder.KEYS.RIGHT)){
        //     shootPellett()
        // }

    }

}
class Alien {
    constructor() {
        this.alienStart = {
            x: Math.floor(Math.random()*500),
            y: 20
        }
        this.alien = {
            x: 10,
            y: 10
        }
    }
    draw() {
        context.fillStyle = "blue"
        context.fillRect(this.alienStart.x, this.alienStart.y, this.alien.x, this.alien.y)
    }
    update() {
        this.alienStart.y += 1
    }
    alienStart(){

    }
}




    const alien = new Alien()
    const game = new Game()