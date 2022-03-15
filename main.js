leftEyeX = 0;
leftEyeY = 0;
function preload(){
glasses = loadImage("https://i.postimg.cc/tgW35BTj/fard-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.center();
    video = createCapture(640, 400);
    video.size(640, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function gotPoses(results){

        if(results.length > 0){
            console.log(results);
            leftEyeX = results[0].pose.leftEye.x-105;
            leftEyeY = results[0].pose.leftEye.y-20;
            console.log("leftEye.x =" + leftEyeX);
            console.log("leftEye.y =" + leftEyeY);
        }       

}


function modelLoaded(){
    console.log('PoseNet is initialized');
}


function draw(){
image(video, 0, 0, 640, 400);
image(glasses,leftEyeX, leftEyeY, 150, 50);
}

function take_snapshot(){
    save("haha.png");
}