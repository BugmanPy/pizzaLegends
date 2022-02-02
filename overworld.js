class OverWorld {
  constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector('.game-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.map = null
  }

  startGameLoop() {
    const step = () => {
      // Clear the canvas in each frame
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      // //Establish the camera person
      // const cameraPerson = this.map.gameObjects.hero

      // Draw lower map layer
      this.map.drawLowerImage(this.ctx)

      // Draw game objects
      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
        })
        object.sprite.draw(this.ctx)
      })

      // Draw upper map layer
      this.map.drawUpperImage(this.ctx)

      requestAnimationFrame(() => {
        step()
      })
    }
    step()
  }

  init() {
    this.map = new OverWorldMap(window.OverWorldMaps.DemoRoom)
    this.directionInput = new DirectionInput()
    this.directionInput.init()
    this.startGameLoop()
  }
}
