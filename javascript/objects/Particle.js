
/**
 * Particles are initialized according to AppState properties, but will maintain their
 * own properties unless the particle instance is updated. 
 */

class Particle {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.size = 5;
        this.shape = "circle";

        this.lifeTime = 0;
        this.reproduceTime = 0;
        
    }
    
    update() {
        
    }

    draw() {
        
    }
    
}