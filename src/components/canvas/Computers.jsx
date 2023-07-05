import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  // Guide to download 3D model from Sketchfab
  // 1) Download, use the folder name as reference
  // 2) Import the scene.gltf as you would any other file

  return (
    <mesh position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.1 : 0.30}
        // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // We are using useEffect to check if someone is on a mobile device using mediaQuery
    const mediaQuery = window.matchMedia('(max-width:500px)');

    // Update the isMobile state with the initial media query match status
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes in the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add an event listener to the media query to detect changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* The suspense is using the CanvasLoader as a fallback while the computer 3D model is loading */}
        <Preload all />
        <OrbitControls enableZoom={false} />

        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
