import { useGLTF, useScroll, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import * as THREE from "three"
const MacContainer = () => {
let model = useGLTF("./mac.glb") // Make sure this is a .gltf or .glb file
let tex = useTexture("./f.png")
let meshes ={}
model.scene.traverse((e) => {
  meshes[e.name] = e
})
// console.log(meshes);
 
meshes.screen.rotation.x = THREE.MathUtils.degToRad(180.2)
meshes.screen.scale.x =1.2
meshes.body.scale.x =1.2
meshes.matte.material.map = tex
meshes.matte.material.emissiveIntensity = 0
meshes.matte.material.metalness = 1
meshes.matte.material.roughness = 8

let data = useScroll()
useFrame((state,delta)=>{
meshes.screen.rotation.x = THREE.MathUtils.degToRad(180.2-(data.offset * 90))

})
  return (

    <group position={[0, -10, 20]}>

      <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer