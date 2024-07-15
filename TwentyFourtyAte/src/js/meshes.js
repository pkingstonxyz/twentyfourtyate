import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF("https://github.com/pkingstonxyz/twentyfourtyate/raw/main/TwentyFourtyAte/assets/models/meshes.glb")
  return React.createElement(
    'group',
    { ...props, dispose: null },
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes.plate.geometry,
      material: nodes.plate.material,
      scale: [0.595, 0.039, 0.595]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['2mesh'].geometry,
      material: nodes['2mesh'].material,
      scale: [0.5, 0.064, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['2num'].geometry,
      material: nodes['2num'].material,
      scale: [0.5, 0.064, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['8num'].geometry,
      material: nodes['8num'].material,
      scale: [0.5, 0.051, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['16num'].geometry,
      material: nodes['16num'].material,
      scale: [0.473, 0.049, 0.473]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['32num'].geometry,
      material: nodes['32num'].material,
      scale: [0.452, 0.046, 0.452]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['64num'].geometry,
      material: nodes['64num'].material,
      scale: [0.221, 0.023, 0.221]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['128num'].geometry,
      material: nodes['128num'].material,
      scale: [0.419, 0.043, 0.419]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['512num'].geometry,
      material: nodes['512num'].material,
      rotation: [0, 0, -0.071],
      scale: [0.5, 0.034, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['1024num'].geometry,
      material: nodes['1024num'].material,
      rotation: [-0.005, 0.003, -0.045],
      scale: [0.5, 0.051, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['2048num'].geometry,
      material: nodes['2048num'].material,
      scale: [0.548, 0.05, 0.548]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['4num'].geometry,
      material: nodes['4num'].material,
      scale: [0.5, 0.051, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['256num'].geometry,
      material: nodes['256num'].material,
      rotation: [0, -0.016, Math.PI],
      scale: [0.5, 0.051, 0.405]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['4mesh'].geometry,
      material: nodes['4mesh'].material,
      scale: [0.5, 0.051, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['8mesh'].geometry,
      material: nodes['8mesh'].material,
      scale: [0.5, 0.051, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['16mesh'].geometry,
      material: nodes['16mesh'].material,
      scale: [0.473, 0.049, 0.473]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['32mesh'].geometry,
      material: nodes['32mesh'].material,
      scale: [0.452, 0.046, 0.452]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['64mesh'].geometry,
      material: nodes['64mesh'].material,
      scale: [0.221, 0.023, 0.221]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['128mesh'].geometry,
      material: nodes['128mesh'].material,
      scale: [0.419, 0.043, 0.419]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['512mesh'].geometry,
      material: nodes['512mesh'].material,
      rotation: [0, 0, -0.071],
      scale: [0.5, 0.034, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['1024mesh'].geometry,
      material: nodes['1024mesh'].material,
      rotation: [-0.005, 0.003, -0.045],
      scale: [0.5, 0.051, 0.5]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['2048mesh'].geometry,
      material: nodes['2048mesh'].material,
      scale: [0.548, 0.05, 0.548]
    }),
    React.createElement('mesh', {
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['256mesh'].geometry,
      material: nodes['256mesh'].material,
      rotation: [0, -0.016, Math.PI],
      scale: [0.5, 0.051, 0.405]
    })
  );
}

useGLTF.preload("https://github.com/pkingstonxyz/twentyfourtyate/raw/main/TwentyFourtyAte/assets/models/meshes.glb")
