//import * as THREE from '../node_modules/three/src/Three.js'
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r125/three.module.js'

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;
document.body.appendChild(renderer.domElement);

const texture1 = new THREE.TextureLoader().load('b3.png');
const texture2 = new THREE.TextureLoader().load('b2.png');
//texture1.wrapS = THREE.RepeatWrapping;
//texture1.wrapT = THREE.RepeatWrapping;
//texture1.repeat.set(6, 6);

const material1 = new THREE.MeshStandardMaterial(
  {
    map: texture1,
    bumpMap: texture2
  }
);
//const geom = new THREE.BoxGeometry();
//const geom = new THREE.SphereGeometry(1, 32, 32);
const geom = new THREE.TorusGeometry(1, 0.5, 32, 32);
const mesh = new THREE.Mesh(geom, material1);
scene.add(mesh);

const light1 = new THREE.AmbientLight(0xffffff, 0.1);
const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(light1);
scene.add(light2);


function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.001;
  mesh.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();
