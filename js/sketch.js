function setup() {
  createCanvas(500,500);
  background(240);
  // put setup code here
}

function draw() {
  // put drawing code here

  if (mouseX > 0) {
    background (247, 207, 182)
  }

  if (mouseX > 100) {
    background (244, 183, 166)
  }

  if (mouseX > 200) {
    background (218, 155, 156)
  }

  if (mouseX > 300) {
    background (173, 133, 141)
  }

  if (mouseX > 400) {
    background (108, 104, 116)
  }

  line(width /5, 0, width /5, height);
  line(width /5/1*2, 0, width /5/1*2, height);
  line(width /5/1*3, 0, width /5/1*3, height);
  line(width /5/1*4, 0, width /5/1*4, height);

 
  
}

