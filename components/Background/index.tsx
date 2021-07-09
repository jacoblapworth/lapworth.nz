import { useEffect, useRef } from 'react'
import { ShaderMaterial, Vector3, Vector2 } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import chroma from 'chroma-js'
import fragmentShader from './shader.glsl'
import { useWindowSize } from '../Hooks/useWindowSize'
import { useTheme } from '@components/Providers/ThemeColor'
import Page from '@components/Page'

function Mesh() {
  const materialRef = useRef<ShaderMaterial>(null)
  const darkColor = chroma('#f79c99')
  const lightColor = chroma('#f1f4dc')
  var latestDark = darkColor.gl().slice(0, 3)
  var latestLight = lightColor.gl().slice(0, 3)

  const { width, height } = useWindowSize()

  const uniforms = {
    u_time: {
      value: 0,
    },
    u_resolution: {
      value: new Vector2(width, height),
    },
    u_extcolor1: {
      value: new Vector3(...latestDark),
    },
    u_extcolor2: {
      value: new Vector3(...latestLight),
    },
  }

  useFrame(({ clock }) => {
    if (!materialRef.current) return
    materialRef.current.uniforms.u_time.value = clock.getElapsedTime()
  })

  return (
    <mesh>
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
      />
      <planeGeometry args={[100, 10]} />
    </mesh>
  )
}

export default function WebGL() {
  const { setColor } = useTheme()

  useEffect(() => {
    setColor('#f1f4dc')
  }, [])

  return (
    <Page id="canvas-container" className="h-screen">
      <Canvas>
        <Mesh />
      </Canvas>
    </Page>
  )
}
