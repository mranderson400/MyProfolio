import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  // guide to download 3d from sketchfab
  // 1) Download , use the folder name as refrence and 
  // import the scene.gltf as you would any other file


  return (
    <mesh>
      <hemisphereLight intensity={0.15}
       groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={computer.scene}
        scale={ isMobile ? 0.1 : 0.40}

        position={ isMobile ? 
          [0, -3, -2.2] :
          [0, -3.25, -1.5]
          } />
    </mesh>
  );
};

const ComputersCanvas = () => {
const [isMobile, setIsMobile] = useState(false);
// the only thing useEffect is doing is changing the isMobile variable

useEffect(() => {
  // we are using useEffect to check if someone on a mobile device by using mediaQuery
  // Check if the user is on a mobile device using a media query
  const mediaQuery = window.matchMedia('(max-width:500px)');

  setIsMobile(mediaQuery.matches);
  // Update the isMobile state with the initial media query match status
  // The setMobile function updates the isMobile state with this value.


  // Define a callback function to handle changes in the media query
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  }

// Add an event listener to the media query to detect changes
  mediaQuery.addEventListener('change',
   handleMediaQueryChange); 


  // Clean up the event listener when the component unmounts
   return () => {
    mediaQuery.removeEventListener('change',
     handleMediaQueryChange);
   }
}, [])
  // The empty dependency array [] ensures that this effect runs only once after the initial render



  return (
    <Canvas
     frameloop="demand"
     shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [25, 9, 9], fov: 20 }}>
      <Suspense fallback={<CanvasLoader />}>
      {/* the suspense is using the canvasloader as a fallback while computer is loading, once it
       loads computer 3d loads and the fallback goes away */}
        <Preload all />
        <OrbitControls enableZoom={false} />

        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
