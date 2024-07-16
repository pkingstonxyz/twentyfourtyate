import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Model(props) {
  const { nodes, materials } = useGLTF("https://github.com/pkingstonxyz/twentyfourtyate/raw/main/TwentyFourtyAte/assets/models/burgerparts.glb")
  const color = {
    platecolor: 0xddddff,
    mesh2color: 0xE7A84A, num2color: 0x745425,
    mesh4color: 0x4A9000, num4color: 0xD2FF7D,
    mesh8color: 0xA2FF91, num8color: 0x2E871B,
    mesh16color: 0x654921, num16color: 0x000000,
    mesh32color: 0xFFCF00, num32color: 0xC55800,
    mesh64color: 0xE7E098, num64color: 0x986B87,
    mesh128color: 0xE7544A, num128color: 0xE79690,
    mesh256color: 0xA1513D, num256color: 0x401A25,
    mesh512color: 0xBDE766, num512color: 0x1D480F,
    mesh1024whitecolor: 0xE7D9AF, mesh1024yolkcolor: 0xE7E699, num1024color: 0x808000,
    mesh2048color: 0xE7A84A, num2048color: 0x000000,
  };
  return React.createElement(
    'group',
    { ...props, dispose: null },
    React.createElement('mesh', {
      visible: props.val >= 0 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes.plate.geometry,
      scale: [0.595, 0.039, 0.595]
    }, React.createElement('MeshStandardMaterial', {color: color.platecolor})),
    React.createElement('mesh', {
      visible: props.val >= 2 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['2mesh'].geometry,
      scale: [0.5, 0.064, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh2color})),
    React.createElement('mesh', {
			visible: props.val == 2 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['2num'].geometry,
      scale: [0.5, 0.064, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.num2color})),
    React.createElement('mesh', {
			visible: props.val >= 4 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['4mesh'].geometry,
      scale: [0.5, 0.051, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh4color})),
    React.createElement('mesh', {
			visible: props.val == 4 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['4num'].geometry,
      scale: [0.5, 0.051, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.num4color})),
    React.createElement('mesh', {
			visible: props.val >= 8 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['8mesh'].geometry,
      scale: [0.5, 0.051, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh8color})),
    React.createElement('mesh', {
			visible: props.val == 8 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['8num'].geometry,
      scale: [0.5, 0.051, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.num8color})),
    React.createElement('mesh', {
			visible: props.val >= 16 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['16mesh'].geometry,
      scale: [0.473, 0.049, 0.473]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh16color})),
    React.createElement('mesh', {
			visible: props.val == 16 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['16num'].geometry,
      scale: [0.473, 0.049, 0.473]
    }, React.createElement('MeshStandardMaterial', {color: color.num16color})),
    React.createElement('mesh', {
			visible: props.val >= 32 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['32mesh'].geometry,
      scale: [0.452, 0.046, 0.452]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh32color})),
    React.createElement('mesh', {
			visible: props.val == 32 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['32num'].geometry,
      scale: [0.452, 0.046, 0.452]
    }, React.createElement('MeshStandardMaterial', {color: color.num32color})),
    React.createElement('mesh', {
			visible: props.val >= 64 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['64mesh'].geometry,
      scale: [0.221, 0.023, 0.221]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh64color})),
    React.createElement('mesh', {
			visible: props.val == 64 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['64num'].geometry,
      scale: [0.221, 0.023, 0.221]
    }, React.createElement('MeshStandardMaterial', {color: color.num64color})),
    React.createElement('mesh', {
			visible: props.val >= 128 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['128mesh'].geometry,
      scale: [0.419, 0.043, 0.419]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh128color})),
    React.createElement('mesh', {
			visible: props.val == 128 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['128num'].geometry,
      scale: [0.419, 0.043, 0.419]
    }, React.createElement('MeshStandardMaterial', {color: color.num128color})),
    React.createElement('mesh', {
			visible: props.val >= 256 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['256mesh'].geometry,
      rotation: [0, -0.016, Math.PI],
      scale: [0.5, 0.051, 0.405]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh256color})),
    React.createElement('mesh', {
			visible: props.val == 256 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['256num'].geometry,
      rotation: [0, -0.016, Math.PI],
      scale: [0.5, 0.051, 0.405]
    }, React.createElement('MeshStandardMaterial', {color: color.num256color})),
    React.createElement('mesh', {
			visible: props.val >= 512 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['512mesh'].geometry,
      rotation: [0, 0, -0.071],
      scale: [0.5, 0.034, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh512color})),
    React.createElement('mesh', {
			visible: props.val == 512 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['512num'].geometry,
      rotation: [0, 0, -0.071],
      scale: [0.5, 0.034, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.num512color})),
    React.createElement('mesh', {
			visible: props.val >= 1024 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['1024meshwhite'].geometry,
      rotation: [-0.005, 0.003, -0.045],
      scale: [0.5, 0.051, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh1024whitecolor})),
    React.createElement('mesh', {
			visible: props.val >= 1024 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['1024meshyolk'].geometry,
      rotation: [-0.005, 0.003, -0.045],
      scale: [0.5, 0.051, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh1024yolkcolor})),
    React.createElement('mesh', {
			visible: props.val == 1024 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['1024num'].geometry,
      rotation: [-0.005, 0.003, -0.045],
      scale: [0.5, 0.051, 0.5]
    }, React.createElement('MeshStandardMaterial', {color: color.num1024color})),
    React.createElement('mesh', {
			visible: props.val >= 2048 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['2048mesh'].geometry,
      scale: [0.548, 0.05, 0.548]
    }, React.createElement('MeshStandardMaterial', {color: color.mesh2048color})),
    React.createElement('mesh', {
      visible: props.val == 2048 ? true : false,
      castShadow: true,
      receiveShadow: true,
      geometry: nodes['2048num'].geometry,
      scale: [0.548, 0.05, 0.548]
    }, React.createElement('MeshStandardMaterial', {color: color.num2048color})),
  );
}

//useGLTF.preload("https://github.com/pkingstonxyz/twentyfourtyate/raw/main/TwentyFourtyAte/assets/models/burgerparts.glb")
