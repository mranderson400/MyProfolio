import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';




// The geometric shape of the Ball (specifically an Icosahedron,
//  a polyhedron with 20 faces) and its 3D interactions (rotation and floating)
//  are defined within the Ball component, as well as the application of the 
//  textures (images) on its surface.
// It's also worth mentioning that the @react-three/fiber and @react-three/drei libraries
//  provide the tools (like the Canvas, geometries, materials, controls,
//    loaders etc.) to create and manage such 3D object

const Ball = (props) => {
  const [decal1, decal2] = useTexture([props.imgUrl1, props.imgUrl2]); // Load two images
  // remember the imgs are for your skills imgs and then the send round of imgs are random
  const ballRef = useRef();

  useFrame(() => {
    ballRef.current.rotation.y += 0.004;
  });

  return (
    <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
      <icosahedronBufferGeometry args={[1, 1]} />
      <Decal 
        map={decal1}
        position={[0,0,1]}
        rotation={[2*Math.PI, 0,6.25]}
      />
      <Decal 
        map={decal2}
        position={[0,0,-1]} // Position for the second image. Adjust as needed.
        rotation={[2*Math.PI, 0,6.25]}
      />
      <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
      <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.5]} />
      </Float>
    </mesh>
  );
};

const BallCanvas = ({ icon, img }) => { 
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Preload all />
        <OrbitControls enableZoom={false} />
        <Ball imgUrl1={icon} imgUrl2={img} /> 
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
