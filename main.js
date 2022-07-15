function preload() {

}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(415,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
   circle(30, 30, 50);
circle(30, 450, 50);
circle(610, 450, 50);
circle(610, 30, 50);
}

function take_snapshot(){
    save('student_name.png');
}
