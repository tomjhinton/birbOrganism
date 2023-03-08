

import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import { HeadMaterial, NeckMaterial, ArmMaterial, BodyMaterial, LegMaterial } from "./materials/materials";
import Title from "./Title/Title.js"


export default function Experience(props) {
  const { nodes, materials } = useGLTF("/buddy.glb");


  const headMaterial = useRef()
  const neckMaterial = useRef()
  const arm1= useRef()
  const arm2= useRef()
  const arm3= useRef()
  const arm4= useRef()
  const body1 = useRef()
  const body2 = useRef()
  const leg1= useRef()
  const leg2= useRef()
  const leg3= useRef()
  const leg4= useRef()
  const leg5= useRef()
  const leg6= useRef()

  const materialsArr = [arm1, arm2, arm3, arm4, body1, body2, leg1, leg2, leg3, leg4, leg5, leg6]

  const chips = useVideoTexture('chips.mp4')
  const chicken = useVideoTexture('chicken.mp4')


  const sheep = useTexture('sheep.jpeg');
  const sheep2 = useTexture('sheep2.jpeg');
  const sheep3 = useTexture('sheep3.jpeg');
  const sheep4 = useTexture('sheep4.jpeg');

 
  useEffect(() => {
console.log(body1.current)
    body1.current.material.uniforms.uTexture.value = chips
    body2.current.material.uniforms.uTexture.value = chicken
    body1.current.material.needsUpdate = true

    console.log(headMaterial)
    headMaterial.current.uniforms.uTexture.value = sheep
    headMaterial.current.uniforms.uTexture2.value = sheep2
    headMaterial.current.uniforms.uTexture3.value = sheep3
    headMaterial.current.uniforms.uTexture4.value = sheep4


}, []);


  useFrame(() => {
    // Update the time uniform
    headMaterial.current.uniforms.uTime.value += 0.01;
    neckMaterial.current.uniforms.uTime.value += 0.01;
    // body1.current.material.uniforms.uTexture.value = chips
   materialsArr.map(x=>{
       x.current.material.uniforms.uTime.value += 0.01;
   })
    // bodyMaterial.current.uniforms.uTime.value += 0.01;
    // legMaterial.current.uniforms.uTime.value += 0.01;

    
  });

  return (
      <>
      
      <OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI * .5}/>
    <Title />
    <group {...props} dispose={null}>
      <group position={[0, 3.49, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_2.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_3.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_5.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_6.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_7.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_8.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_9.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_10.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_11.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_12.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_13.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_14.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_15.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_16.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_17.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_18.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_19.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_20.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_21.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_22.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_23.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_24.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_25.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_26.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_27.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_28.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_29.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_30.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_31.geometry}
          material={materials["Material.032"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.face.geometry}
        position={[0, 3.49, 0]}
      >
    <headMaterial side={THREE.DoubleSide} ref={headMaterial} />
    </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.arm1.geometry}
        position={[0, 3.49, 0]}
        ref={arm1}

      >
    <armMaterial side={THREE.DoubleSide}  />
    </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.arm2.geometry}
        position={[0, 3.49, 0]}
        ref={arm2}
        >
    <armMaterial side={THREE.DoubleSide}  />
    </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.arm3.geometry}
        position={[0, 3.49, 0]}
        ref={arm3}

        >
        <armMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.arm4.geometry}
        position={[0, 3.49, 0]}
        ref={arm4}

        >
        <armMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body1.geometry}
        ref={body1}
        position={[0, 3.49, 0]}
        >
        <bodyMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body2.geometry}
        material={nodes.body2.material}
        ref={body2}
        position={[0, 3.49, 0]}
        >
        <bodyMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.neck.geometry}
      
        position={[0, 3.49, 0]}
        >
        <neckMaterial side={THREE.DoubleSide} ref={neckMaterial} />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg1.geometry}
        position={[0, 3.49, 0]}
        ref={leg1}
        >
        <legMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg2.geometry}
        position={[0, 3.49, 0]}
        ref={leg2}
        >
        <legMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg3.geometry}
        position={[0, 3.49, 0]}
        ref={leg3}
        >
        <legMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg4.geometry}
        position={[0, 3.49, 0]}
        ref={leg4}
        >
        <legMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg5.geometry}
        position={[0, 3.49, 0]}
        ref={leg5}
        >
        <legMaterial side={THREE.DoubleSide}  />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leg6.geometry}
        position={[0, 3.49, 0]}
        ref={leg6}
        >
        <legMaterial side={THREE.DoubleSide}  />
        </mesh>
    </group>
    </>
  );
}

useGLTF.preload("/buddy.glb");



