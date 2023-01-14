Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
});

camera = document.getElementById("Webcame");

Webcam.attach("#Webcame");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Final").innerHTML = '<img id = "Items" src="'+data_uri +'">' ;
    })
}
console.log("ml5",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eEYC7GtnW/",modelloaded)
function modelloaded(){
    console.log("model loaded successfully")  
}

function check(){
    img = document.getElementById("Items")
    classifier.classify(img,gotresult) 
}
function gotresult(error,result){
    if (error){
        console.log("error")
    }
    else {
        console.log(result)
        document.getElementById("object").innerHTML = result[0].label
        document.getElementById("accuracy").innerHTML = (result[0].confidence * 100).toFixed(2) + "%"
    }
}