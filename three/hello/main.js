//import * as THREE from '../node_modules/three/src/Three.js';
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r125/three.module.min.js';

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

//const geom = new THREE.BoxGeometry();
//const geom = new THREE.CircleGeometry(1, 16);
//const geom = new THREE.DodecahedronGeometry();
const geom = new THREE.TorusGeometry(1, .5, 16, 32);
const beige = new THREE.MeshPhongMaterial({ color: 0xffcc33 });
const mesh = new THREE.Mesh(geom, beige);
scene.add(mesh);

const light1 = new THREE.AmbientLight(0xffffff, 0.1);
const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(light1);
scene.add(light2);


function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
