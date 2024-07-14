import { useGLTF } from '@react-three/drei'
import React from 'react'

export function Model2(props) {
  const { nodes, materials } = useGLTF("https://github.com/pkingstonxyz/twentyfourtyate/raw/main/TwentyFourtyAte/assets/models/2.glb")
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

return React.createElement(
  'group',
  _extends({}, props, { dispose: null }),
  React.createElement(
    'group',
    { position: [0, -0.438, 0], scale: [0.5, 0.064, 0.5] },
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes.Cube003.geometry,
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes.Cube003_1.geometry,
    })
  )
);


//  return (
//    <group {...props} dispose={null}>
//      <group position={[0, -0.438, 0]} scale={[0.5, 0.064, 0.5]}>
//        <mesh
//          castShadow
//          receiveShadow
//          geometry={nodes.Cube003.geometry}
//          material={materials['bun mat.001']}
//        />
//        <mesh
//          castShadow
//          receiveShadow
//          geometry={nodes.Cube003_1.geometry}
//          material={materials['bun mat']}
//        />
//      </group>
//    </group>
//  )
}

useGLTF.preload("https://github.com/pkingstonxyz/twentyfourtyate/raw/main/TwentyFourtyAte/assets/models/2.glb")
