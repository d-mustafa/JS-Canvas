// HTML Canvas

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 550;

// Land
ctx.fillStyle = "green";
ctx.fillRect(0, 150, 400, 550);

// Sky
const gradSky = ctx.createLinearGradient(0, 0, 0, 150);
gradSky.addColorStop(0, "blue");
gradSky.addColorStop(1, "pink");

ctx.fillStyle = gradSky;
ctx.fillRect(0, 0, 400, 150);

// River
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(370, 550);
ctx.lineTo(30, 550);
ctx.lineTo(150, 150);
ctx.lineTo(250, 150);
ctx.fill();

// Sun
const gradSun = ctx.createLinearGradient(0, 0, 0, 150);
gradSun.addColorStop(0, "yellow");
gradSun.addColorStop(1, "pink");

ctx.fillStyle = gradSun;
ctx.beginPath();
ctx.arc(200, 100, 30, 0, 2 * Math.PI);
ctx.fill();

// Sun Reflection
ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
ctx.beginPath();
ctx.arc(200, 200, 30, 0, 2 * Math.PI);
ctx.fill();

// Clouds
let cloud = document.getElementById("cloud-img");
let cloudTwo = document.getElementById("cloud2-img");
ctx.drawImage(cloud, 250, 15, 85, 55);
ctx.drawImage(cloudTwo, 0, 52, 125, 80);

// Bird
let bird = document.getElementById("bird-img");
ctx.drawImage(bird, 50, 0, 65, 50);
ctx.drawImage(bird, 104, 15, 52, 40);

// PALM TREES
// Wood part
ctx.fillStyle = "brown";
ctx.fillRect(290, 120, 10, 100);
ctx.fillRect(51, 260, 10, 100);

// Tree Leaves Elements
let palmTreeLeaf = document.getElementById("palm-tree-leaf");
let palmTreeLeaf90 = document.getElementById("palm-tree-leaf_90");
let palmTreeLeaf180 = document.getElementById("palm-tree-leaf_180");
let palmTreeLeaf270 = document.getElementById("palm-tree-leaf_270");

// Tree 1 Leaves
ctx.drawImage(palmTreeLeaf, 292, 115, 60, 60); //
ctx.drawImage(palmTreeLeaf90, 292, 70, 60, 60);
ctx.drawImage(palmTreeLeaf180, 240, 70, 60, 60);
ctx.drawImage(palmTreeLeaf270, 242, 120, 55, 55);

// Tree 2 Leaves
ctx.drawImage(palmTreeLeaf, 50, 255, 60, 60);
ctx.drawImage(palmTreeLeaf90, 50, 210, 60, 60);
ctx.drawImage(palmTreeLeaf180, 0, 210, 60, 60);
ctx.drawImage(palmTreeLeaf270, 0, 260, 60, 60);

// Sailboat
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.arc(250, 300, 25, 0, 1 * Math.PI);
ctx.fill();

// Mast
ctx.lineWidth = 2;
ctx.strokeStyle = "grey";
ctx.beginPath();
ctx.moveTo(250, 300); // bottom
ctx.lineTo(250, 260); // top
ctx.stroke();

// Flag 1
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(275, 290);
ctx.lineTo(250, 290);
ctx.fill();

// Flag 2
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(235, 280);
ctx.lineTo(250, 280);
ctx.fill();

// Title
ctx.fillStyle = "pink";
ctx.font = "18px Trebuchet MS";
ctx.fillText("River Sunset", 295, 15);
