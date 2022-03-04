function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    // change link for teachable machine :D
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json' , modelReady);
    }

    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error, results){}