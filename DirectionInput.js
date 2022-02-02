class DirectionInput {
  constructor(config) {
    this.heldDirections = []
    this.keyMap = {
      ArrowUp: 'up',
      KeyW: 'up',
      ArrowDown: 'down',
      KeyS: 'down',
      ArrowLeft: 'left',
      KeyA: 'left',
      ArrowRight: 'right',
      KeyD: 'right',
    }
  }

  get direction() {
    return this.heldDirections[0]
  }

  init() {
    document.addEventListener('keydown', (event) => {
      const direction = this.keyMap[event.code]
      if (direction && this.heldDirections.indexOf(direction) === -1) {
        this.heldDirections.unshift(direction)
        console.log(this.heldDirections)
      }
    })

    document.addEventListener('keyup', (event) => {
      const direction = this.keyMap[event.code]
      const index = this.heldDirections.indexOf(direction)
      if (index > -1) {
        this.heldDirections.splice(index, 1)
        console.log(this.heldDirections)
      }
    })
  }
}
