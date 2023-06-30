import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


//-ds5WS7-Da6wkdIls 
//service_8r1zh9s
//template_z7jkhpq

const Earth = () => {
  const earth = useGLTF("./space_planets/scene.gltf");

  return <primitive 
  object={earth.scene} 
  scale={1.2}
  position-y={0}
  rotation-x={0}

  />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 35,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
      // the camera fov makes the 3d model much larger
    >
      <Suspense fallback={<CanvasLoader />}>
        <Earth />
        <Preload all />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI} // Adjusted to allow full vertical rotation
          minPolarAngle={0 } // Adjusted to allow full vertical rotation
        />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
