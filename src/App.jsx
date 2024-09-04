
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import MacContainer from './MacContainer'
const App = () => {
  return (
    <Canvas camera={{fov:12, position:[0, -10, 220]}}>
      <OrbitControls/>

      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/rosendal_plains_2_4k.exr"]}/>
      <ScrollControls pages={3}>
<MacContainer/>
      </ScrollControls>
    </Canvas>
  )
}

export default App