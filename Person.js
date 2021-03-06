class Person extends GameObject {
  constructor(config) {
    super(config)
    this.movingProgressRemaining = 0

    this.isPlayerControlled = config.isPlayerControlled || false

    this.directionUpdate = {
      up: ['yPos', -1],
      down: ['yPos', 1],
      left: ['xPos', -1],
      right: ['xPos', 1],
    }
  }

  update(state) {
    this.updatePosition()
    this.updateSprite(state)
    if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
      this.direction = state.arrow
      this.movingProgressRemaining = 16
    }
  }

  updatePosition() {
    if (this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction]
      this[property] += change
      this.movingProgressRemaining -= 1
    }
  }

  updateSprite(state) {
    if (this.isPlayerControlled && this.movingProgressRemaining === 0 && !state.arrow) {
      this.sprite.setAnimations('idle-' + this.direction)
      return
    }

    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimations('walk-' + this.direction)
    }
  }
}
