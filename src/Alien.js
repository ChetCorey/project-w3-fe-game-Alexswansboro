import { colliding } from './colliding.js/'
import { context } from './constants.js'
import { getRandomColor } from './randomcolor'
class Alien {
  constructor (level) {
    this.size = {
      x: 20,
      y: 20
    }
    this.center = {
      x: Math.floor(Math.random() * (500 - this.size.x)),
      y: 20
    }
    this.level = level
    this.color = getRandomColor()
    this.alienDirection = Math.round(Math.random()) * 2 - 1
    this.dropSpeed = this.newSpeed()
    this.slideSpeed = this.newSpeed()
  }
  draw () {
    context.fillStyle = this.color
    context.fillRect(this.center.x, this.center.y, this.size.x, this.size.y)
  }
  newSpeed () {
    return (Math.random() * this.level.levelNumber)
  }
  update () {
    this.center.y += this.dropSpeed
    this.center.x += (this.slideSpeed * this.alienDirection)
    if (this.center.y >= 500) {
      this.center.y = 0
    }
    if (this.center.x >= (500 - this.size.x)) {
      this.alienDirection = -1
    } else if (this.center.x <= 0) {
      this.alienDirection = +1
    }
  }
}
export default Alien
