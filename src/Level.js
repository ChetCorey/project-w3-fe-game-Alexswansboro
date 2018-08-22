
import Alien from './alien'
import { colliding } from './colliding.js/'

class Level {
  constructor (game, levelNumber) {
    this.levelNumber = levelNumber
    this.game = game
    this.player = game.player
    this.bullets = this.player.bullets
    this.complete = false
    this.aliens = this.buildAliens(3 * levelNumber)
  }
  buildAliens(invasionForceCount) {
    let invasionForce = []
    for (var i = 0; i < invasionForceCount; i++) {
      invasionForce.push(new Alien(this))
    }
    return invasionForce
  }
  draw () {
    this.bullets.forEach(function (bullet) {
      bullet.draw()
    })
    this.aliens.forEach(function (alien) {
      alien.draw()
    })
  }
  update () {
    this.aliens.forEach((alien) => {
      alien.update()
      if (colliding(this.player, alien)) {
        this.game.isGameOver = true
      }
    })
    this.bullets.forEach((bullet, bulletIndex) => {
      bullet.update()

      this.aliens.forEach((alien, alienIndex) => {
        if (colliding(alien, bullet)) {
          this.aliens.splice(alienIndex, 1)
        }
        if (this.aliens.length === 0) {
          this.complete = true
        }
      })
    })
  }
}

export default Level
