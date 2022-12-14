class Player {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0
    }

    this.rotation = 0
    this.opacity = 1

    // player image, size and speed.
    const image = new Image()
    image.src = './img/spaceship.png'
    image.onload = () => {
      const scale = 0.8
      this.image = image
      this.width = image.width * scale
      this.height = image.height * scale
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 130
      }
    }

    this.particles = []
    this.frames = 0
  }

  draw() {
    // player rotation.
    c.save()
    c.globalAlpha = this.opacity
    c.translate(
      player.position.x + player.width / 2,
      player.position.y + player.height / 2
    )
    c.rotate(this.rotation)

    c.translate(
      -player.position.x - player.width / 2,
      -player.position.y - player.height / 2
    )

    // display player
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
    c.restore()
  }

  update() {
    if (!this.image) return

    this.draw()
    this.position.x += this.velocity.x

    if (this.opacity !== 1) return

    this.frames++
    if (this.frames % 1 === 0) {
      this.particles.push(
        new Particle({
          position: {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height
          },
          velocity: {
            x: (Math.random() - 0.5) * 0.9,
            y: 1.4
          },
          radius: Math.random() * 2,
          color: 'orange',
          fades: true
        })
      )
    }
  }
}