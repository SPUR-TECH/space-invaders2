class Grid {
  constructor() {
    this.position = {
      x: 0,
      y: 0
    }

    this.velocity = {
      x: 3,
      y: 0
    }

    this.invaders = []

    const columns = Math.floor(Math.random() * 5 + 5)
    const rows = Math.floor(Math.random() * 4 + 2)

    this.width = columns * 48

    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        this.invaders.push(
          new Invader({
            position: {
              x: x * 50,
              y: y * 50 + 10
            }
          })
        )
      }
    }
  }

  update() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    this.velocity.y = 0

    if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
      this.velocity.x = -this.velocity.x * 1.09
      this.velocity.y = 30
    }
  }
}