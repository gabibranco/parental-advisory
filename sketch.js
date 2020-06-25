let font, x, y,
  fontsize = 20;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = 'Asset';
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  x = width/2
  y = height
}

function draw() {
  background(0);
  fill(65);
  text('at this very moment,', x, y);
  fill(105)
  text('a black young person', x, y + 70)
  fill(120);
  text('is most likely being', x, y + 140)
  fill(170);
  text('violently killed in Brazil.', x, y + 210);
  fill(210);
  text('by the time you go to bed,', x, y + 280);
  fill(255);
  text('62 will have died today.', x, y + 350);

  createA(href, html, [target])
  y = y - 1;

  // Reset to the bottom
  if (y < -140) {
    y = height;
  }
}
