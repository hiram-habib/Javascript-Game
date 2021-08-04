const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, colour) { 
        this.x = x
        this.y = y
        this.radius = radius
        this.colour = colour
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.colour
        c.fill()
    }
}

class Projectile {
    constructor(x, y, radius, colour, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.colour = colour
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.colour
        c.fill()
    }
}
const x = canvas.width/2
const y = canvas.height/2

const player = new Player(x, y, 30, 'blue')

player.draw()

addEventListener('click', (event) => 
    {const projectile = new Projectile(event.clientX, event.clientY, 5, 'red', null)
        projectile.draw()}
    )
