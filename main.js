
function starty(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Ts4rCAyON/model.json", modelLoaded)
    
}
function modelLoaded(){
    console.log("Model Loaded Successfully")
    classifier.classify(gotResult)
}
function gotResult(error, result){
    if (error){
    console.log("error")
    }
    else{
        console.log(result)
    }

}
