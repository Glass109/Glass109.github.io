<template>
  <canvas class="-z-50 fixed top-0 right-0" id="three-canvas"/>
</template>

<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

onMounted(() => {
  // Get the canvas element
  const canvas = document.getElementById('three-canvas');

  // Create the scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('cyan');

  // Create the camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  // Create the renderer
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add lights
  const ambientLight = new THREE.AmbientLight(0x404040, 0.1); // soft white light
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1, 100);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Load font and create text
  const loader = new FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new TextGeometry('Vlad es una tremenda\n puta jajaja', {
      font: font,
      size: 1,
      height: 0.2,
    });

    // Center the text geometry
    textGeometry.computeBoundingBox();
    const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
    textGeometry.translate(centerOffset, 0, 0);
    // Material and mesh
    const textMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(0, 0, 0);
    scene.add(textMesh);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Make the text dance
      textMesh.rotation.y += 0.02;
      textMesh.position.y = Math.sin(Date.now() * 0.005) * 2;

      // Render the scene
      renderer.render(scene, camera);
    }

    // Start the animation loop
    animate();
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>
