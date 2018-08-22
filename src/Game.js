import Player from './player'
import Level from './level'
import { context, screenSize } from './constants.js'
import { getRandomColor } from './randomcolor'

class Game {
  constructor () {
    this.isGameOver = false
    this.winner = false
    this.player = new Player(this)
    this.levelNumber = 1
    this.level = new Level(this, this.levelNumber)
    this.aliens = this.level.aliens
    this.start()
  }
  start () {
    this.ticks ()
  }
  draw () {
    context.clearRect(0, 0, 500, 500)
    this.player.draw()
    this.level.draw()
  }
  update () {
    this.player.update()
    this.level.update()
  }
  bigMessage (textColor, message) {
    context.textAlign = 'center'
    context.font = '48px Helvetica'
    context.fillStyle = textColor
    context.fillText(message, screenSize.x / 2, screenSize.y / 2)
  }
  gameOver () {
    this.bigMessage('black', 'game over')
  }
  newLevel () {
    this.bigMessage('black', `Level ${this.levelNumber}`)
    this.bullets = this.player.newBullets()
    setTimeout(() => {
      this.levelNumber += 1
      this.level = new Level(this, this.levelNumber)
      this.ticks ()
    },3000)
  }
  ticks () {
    if (this.isGameOver) {
      this.gameOver()
    } else if (this.level.complete) {
      this.newLevel()
    } else {
      this.update()
      this.draw()
      window.requestAnimationFrame(() => this.ticks())
    }
  }
}

export default Game
