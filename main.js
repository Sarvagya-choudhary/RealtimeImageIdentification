function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cYjKy8UxO/model.json",modelLoaded);
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,results)
}
function preload(){

}
function modelLoaded(){
    console.log("Model loaded successfully");
}
function results(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}