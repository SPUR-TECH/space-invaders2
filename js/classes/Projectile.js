class Projectile {
  constructor({
    position,
    velocity,
    color = 'red'
  }) {
    this.position = position
    this.velocity = velocity

    this.radius = 3
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}