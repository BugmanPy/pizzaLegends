class OverWorldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects

    this.lowerImage = new Image()
    this.lowerImage.src = config.lowerSrc

    this.upperImage = new Image()
    this.upperImage.src = config.upperSrc
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0)
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0)
  }
}

// ==========  Global Map Configs ========== //
window.OverWorldMaps = {
  DemoRoom: {
    lowerSrc: '/images/maps/DemoLower.png',
    upperSrc: '/images/maps/DemoUpper.png',
    gameObjects: {
      hero: new Person({
        xPos: utils.withGrid(5),
        yPos: utils.withGrid(6),
        isPlayerControlled: true,
      }),
      npc1: new Person({
        xPos: utils.withGrid(7),
        yPos: utils.withGrid(9),
        src: '/images/characters/people/npc1.png',
      }),
    },
  },

  Kitchen: {
    lowerSrc: '/images/maps/KitchenLower.png',
    upperSrc: '/images/maps/KitchenUpper.png',
    gameObjects: {
      hero: new GameObject({
        xPos: 3,
        yPos: 5,
      }),
      npcA: new GameObject({
        xPos: 9,
        yPos: 6,
        src: '/images/characters/people/npc2.png',
      }),
      npcB: new GameObject({
        xPos: 10,
        yPos: 8,
        src: '/images/characters/people/npc3.png',
      }),
    },
  },
}
