const sqSize = 300;
const farthestDistance = 200;

function Star(){
    this.x = random(-sqSize, sqSize);
    this.y = random(-sqSize, sqSize);
    this.z = random(0, farthestDistance);
    this.pz = this.z;

    this.update = function(){
        // z keeps decreasing indicating that star keeps coming close
        this.z -= speed;
        // if distance between us and the star is 0;
        // that is star is on our face
        if(this.z <= 0.0){
            this.reset();
        }
    }

    this.show = function(){
        fill(255);
        noStroke();

        let xPos = map(this.x / this.z, 0, 1, 0, sqSize);
        let yPos = map(this.y / this.z, 0, 1, 0, sqSize);
        let scale = map(this.z, 0, sqSize, 8, 0);
        ellipse(xPos, yPos, scale, scale);

        let px = map(this.x / this.pz, 0, 1, 0, sqSize);
        let py = map(this.y / this.pz, 0, 1, 0, sqSize);

        // update previous z to current z
        this.pz = this.z;

        stroke(255);
        line(px, py, xPos, yPos);
    }

    this.reset = function(){
        this.x = random(-sqSize, sqSize);
        this.y = random(-sqSize, sqSize);
        this.z = farthestDistance; // will always resets to the farthest distance
        this.pz = this.z;
    }
}
