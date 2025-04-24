// src/components/BlackholeVideoScene.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/Blackhole.css';

const VideoPlane = () => {
  const videoRef = useRef(document.createElement('video'));
  const meshRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.src = '/blackhole.mp4';
   
 // Make sure the file is placed in public folder
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.play();
  }, []);

  const texture = new THREE.VideoTexture(videoRef.current);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[5, 3]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

const Blackhole = () => {
  return (
    <div className="video-canvas">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <VideoPlane />
      </Canvas>
    </div>
  );
};

export default Blackhole;
