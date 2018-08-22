class Keyboarder {
  constructor () {
    this.keyState = {}

    window.addEventListener('keydown', (e) => {
      this.keyState[e.keyCode] = true
    })

    window.addEventListener('keyup', function (e) {
      this.keyState[e.keyCode] = false
    }.bind(this))
  }

  isDown (keyCode) {
    return this.keyState[keyCode] === true
  }

  on (keyCode, callback) {
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === keyCode) {
        callback()
      }
    })
  }
}

Keyboarder.KEYS = { LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40, S: 83, SPACE: 32 }

export default Keyboarder
