class GameObject {
  constructor(config) {
    this.xPos = config.xPos || 0
    this.yPos = config.yPos || 0
    this.direction = config.direction || 'down'
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || '/images/characters/people/hero.png',
    })
  }

  update() {}
}
