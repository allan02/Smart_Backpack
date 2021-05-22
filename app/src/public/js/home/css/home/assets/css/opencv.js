const video = document.getElementById('video')

 Promise.all([
   faceapi.nets.tinyFaceDetector.loadFromUri('js/home/css/home/assets/css/models'),
   faceapi.nets.faceLandmark68Net.loadFromUri('js/home/css/home/assets/css/models'),
   faceapi.nets.faceRecognitionNet.loadFromUri('js/home/css/home/assets/css/models'),
   faceapi.nets.faceExpressionNet.loadFromUri('js/home/css/home/assets/css/models')
 ]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}


video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(video, new 
      faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
      .withFaceExpressions()
      console.log(detections)
      const resizedDetections = faceapi.resizeResults(detections, 
      displaySize)
      faceapi.draw.drawDetections(canvas, resizedDetections) 
    }, 100)
  })


 // faceapi.matchDimensions(canvas, displaySize)

  //   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    //   faceapi.draw.drawDetections(canvas, resizedDetections)
    //   faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    //   faceapi.draw.drawFaceExpressions(canvas, resizedDetections)