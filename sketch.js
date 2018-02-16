var data;
var i = 0;
var capturer;

function preload() {
  data = loadTable("phydata.csv", "csv");
}

function setup() {
  createCanvas(1920, 1080, WEBGL);
  // capturer = new CCapture({
  //   format: 'webm',
  //   framerate: 100,
  //   name: 'animation',
  //   display: true,
  //   timeLimit: 60
  // });
  // capturer.start();
}

function draw() {
  frameRate(100);
  camera(0, -300, (height / 3.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0.3, 1, 0);
  pointLight(0, 0, 255, -width / 2, -height / 2, 10000);
  background(0);

  // Sphere
  noStroke();
  ambientMaterial(0, 0, 255);
  sphere(200, 200, 200);

  // Path tracing
  stroke(255);
  beginShape(POINTS);
  for (var j = 0; j <= i; j++)
    vertex(200 * data.getNum(j, 0), 200 * data.getNum(j, 1), 200 * data.getNum(j, 2));
  endShape();

  //Pilot point
  push();
  stroke(255, 0, 0);
  var x = data.getNum(i, 0) * 200;
  var y = data.getNum(i, 1) * 200;
  var z = data.getNum(i, 2) * 200;
  translate(x, y, z);
  sphere(2);
  pop();

  // capturer.capture(canvas);
  i++;
  if (i == data.getRowCount()) {
    i = 0;
    // capturer.stop();
    // capturer.save();
  }

}