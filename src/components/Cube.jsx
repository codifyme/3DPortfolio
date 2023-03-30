import React from 'react';
import {PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import {useFrame} from "@react-three/fiber";
const Cube = () => {
    useFrame(state=>console.log(state))
  return (
    <mesh>
                <boxGeometry arg={[2,2,2]}/>
                <meshStandardMaterial>
                    <RenderTexture attach="map">
                        <PerspectiveCamera makeDefault position={[0,0,2]}/>
                        <color attach="background" args={["#dc9dcd"]} />
                        <Text fontSize={1} color="#555">
                        Hola
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </mesh>
  );
};

export default Cube
