
import { extend, useLoader } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import vertexShaderHead from './shaders/head/vertex.js'
import fragmentShaderHead from './shaders/head/fragment.js'

import vertexShaderNeck from './shaders/neck/vertex.js'
import fragmentShaderNeck from './shaders/neck/fragment.js'

import vertexShaderArm from './shaders/arm/vertex.js'
import fragmentShaderArm from './shaders/arm/fragment.js'

import vertexShaderBody from './shaders/body/vertex.js'
import fragmentShaderBody from './shaders/body/fragment.js'

import vertexShaderLeg from './shaders/leg/vertex.js'
import fragmentShaderLeg from './shaders/leg/fragment.js'




const HeadMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0,
      uTexture: null,
      uTexture2: null,
      uTexture3: null,
      uTexture4: null
      
    },
    vertexShaderHead,
    fragmentShaderHead
  );
  
  extend({ HeadMaterial });

  export { HeadMaterial}

  const NeckMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0,
  
      
    },
    vertexShaderNeck,
    fragmentShaderNeck
  );
  
  extend({ NeckMaterial });

  export { NeckMaterial}

  const ArmMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0
      
    },
    vertexShaderArm,
    fragmentShaderArm
  );
  
  extend({ ArmMaterial });

  export { ArmMaterial}

 
  

  const BodyMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0,
      uTexture: null
      
      
    },
    vertexShaderBody,
    fragmentShaderBody
  );
  
  extend({ BodyMaterial });

  export { BodyMaterial}

  const LegMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0
      
    },
    vertexShaderLeg,
    fragmentShaderLeg
  );
  
  extend({ LegMaterial });

  export { LegMaterial}