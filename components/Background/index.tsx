import { useRef } from 'react'
import * as THREE from 'three'
import chroma from 'chroma-js'
import { Canvas, useFrame } from '@react-three/fiber'
import fragmentShader from './shader.glsl'

function Mesh() {
  const meshRef =
    useRef<THREE.Mesh<THREE.PlaneBufferGeometry, THREE.ShaderMaterial>>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const darkColor = chroma('#f79c99')
  const lightColor = chroma('#f1f4dc')
  var latestDark = darkColor.gl()
  var latestLight = lightColor.gl()

  const uniforms = {
    u_time: {
      value: 1,
    },
    // u_resolution: {
    //   value: new THREE.Vector3(2000),
    // },
    u_extcolor1: {
      value: new THREE.Vector3(latestDark[0], latestDark[1], latestDark[2]),
    },
    u_extcolor2: {
      value: new THREE.Vector3(latestLight[0], latestLight[1], latestLight[2]),
    },
  }

  useFrame(({ clock }) => {
    if (!meshRef.current || !materialRef.current) return
    // meshRef.current.material.uniforms.u_time.value =
    //   clock.getElapsedTime()
    // materialRef.current.uniforms.u_time.value = clock.getElapsedTime() + 1.0
  })

  return (
    <mesh ref={meshRef}>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
      />
      <planeGeometry args={[10, 10]} />
    </mesh>
  )
}

export default function WebGL() {
  return (
    <div id="canvas-container" className="h-screen">
      <Canvas>
        <Mesh />
      </Canvas>
    </div>
  )
}
