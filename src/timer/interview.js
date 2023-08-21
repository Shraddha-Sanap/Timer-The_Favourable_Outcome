import React from 'react';
// import Webcam from 'react-webcam';
import './inter.css'



export const Interw=()=>{
    return(
<>
<div>
<header class="header">
<div class="flex-container">
  <div class="row">
  <div class="col-md-6 offset-md-3">
   <h3 class="title">Ready for interview....?</h3>   
  </div>
  </div>
</div>
</header>


<div class="container">
<div class="card c1" >
  <div class="card-body">
    <h5 class="card-title">Interview</h5>
  <p className='p1'>start practicing your personal interview with us and build your confience!</p>  
    <a href="#" class="btn btn-secondary">Back</a>
<button type="button" class="btn btn-primary">Start</button>

  </div>
</div>


<div class="card" >
  <div class="card-body">
  {/* CameraComponent() */}
  {/* <video autoplay></video>
  <h1>Web Cam Test Page</h1>

  <script>
    
 if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
 
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
   
      var video = document.querySelector('video');
      
      video.srcObject = stream;
      
      video.play();
    })
    .catch(function (error) {
      console.error('Error accessing webcam:',error);
    })
    } else {
  console.error('getUserMedia is not supported in this browser')
   }

  </script>
   */}

   
  </div>
</div>
</div>

</div>


</>
    )
}




// const CameraComponent = () => {
//   const webcamRef = React.useRef(null);

//   return (
//     <div>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//       />
//       <button onClick={() => capture(webcamRef)}>Capture Photo</button>
//     </div>
//   );
// };

// const capture = (webcamRef) => {
//   const imageSrc = webcamRef.current.getScreenshot();
//   // You can now use the image source, for example, display it in an <img> tag.
// };

// export default CameraComponent;