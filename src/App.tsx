import sun from './res/sun.jpg'
import milkyWay from './res/milky-way.jpg'
import './App.css'

import * as THREE from 'three'

function App(){
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg') as HTMLInputElement,
  })
  scene.background = new THREE.TextureLoader().load(milkyWay);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
  renderer.render(scene, camera);

  const planet = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 16),
    new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(sun)
    })
  );
  scene.add(planet);

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5,5,5);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  function animate() {
    requestAnimationFrame(animate);
    planet.rotateX(0.002);
    planet.rotateY(0.001);
    planet.rotateZ(0.001);

    renderer.render(scene, camera);
  }
  let prevPos = document.body.getBoundingClientRect().top;
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    let multiplier = (prevPos > t ? 1 : -1) * 0.0003;
    planet.position.z -= Math.abs(prevPos - t) * multiplier;
    
    //camera.position.setX(t * -0.0001);
    camera.rotateY(Math.abs(prevPos - t) * multiplier);
    console.log(camera.rotation);
    //camera.position.setZ(t * -0.00001);
    prevPos = t;
  }
  document.body.onscroll = moveCamera

  for (let i = 0; i < 200; i++) {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

  animate();
  //help();

  function help() {
    const lightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(lightHelper);
  }

  return null;
}
export default App
