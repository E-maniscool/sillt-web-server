import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({color: 0xFF6347,wireframe:false});
const torus = new THREE.Mesh(geometry,material);
scene.add(torus)
const ambientLight = new THREE.AmbientLight(0xffffff)
const pointLight = new THREE.PointLight(0xffffff)
ambientLight.position.set();
scene.add(ambientLight)
pointLight.position.set(1,1,1,1);
scene.add(pointLight)

function stars(){
  const geometry=new THREE.SphereGeometry(.25,24,24);
  const material=new THREE.MeshStandardMaterial({color:0xffffff});
  const star = new THREE.Mesh(geometry,material);
  star.position.set(Math.random()*100,Math.random()*100,Math.random()*100);
  scene.add(star);
}
for(var i =0; i<50;i++){
  stars();
}

function animate(){
  requestAnimationFrame(animate)
  torus.rotation.x+=.0001
  torus.rotation.y+=.0001
  renderer.render(scene, camera);
}
animate();
