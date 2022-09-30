img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	img = loadImage("mario05.png")
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	video = createCapture(VIDEO);
    video.size(800,400);
	video.parent('game_console');

	instializeInSetup(mario);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("Modal Loaded!");
}

function draw() {
	background("#D3D3D3");
	image(img, marioX, marioY, 40, 70);
	if(noseX < 300){
		marioX = marioX - 1;
	}
	if(noseX > 300){
		marioX = marioX + 1;
	}
	if(noseY < 600){
		marioY = marioY - 1;
	}
	game();
	
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}