import React, { useRef } from "react";
import styled from "styled-components";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = (Math.sin(state.clock.elapsedTime) * 2))
      
  ); 
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
            <Text ref={textRef} fontSize={0.6} color="#555">
                •Python •C++ •Java  {"\n"}
                •JavaScript •TypeScript {"\n"}
                •SQL •React.js •MongoDB {"\n"}
                •Git •Shortcut •Auth0 {"\n"}
                •Object-Oriented Programming {"\n"}
                •Okta •DataDog Metrics {"\n"}
            </Text> 
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;