import sun from './res/sun.jpg'
import milkyWay from './res/milky-way.jpg'
import './App.css'

import * as THREE from 'three'

function App(){
  const scene = new THREE.Scene();
  const viewSize = 60;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const originalAspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.OrthographicCamera(-aspectRatio * viewSize / 2, aspectRatio * viewSize / 2, viewSize / 2, -viewSize / 2, 0.1, 1000);
  const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg') as HTMLInputElement,
  })
  scene.background = new THREE.TextureLoader().load(milkyWay);
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
      var aspect = window.innerWidth / window.innerHeight;
      var change = originalAspect / aspect;
      var newSize = viewSize * change;
      camera.left = -aspect * newSize / 2;
      camera.right = aspect * newSize  / 2;
      camera.top = newSize / 2;
      camera.bottom = -newSize / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  }
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


  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  function animate() {
    requestAnimationFrame(animate);
    planet.rotateX(0.003);
    planet.rotateY(0.002);
    planet.rotateZ(0.001);

    renderer.render(scene, camera);
  }

  let prevPos = document.body.getBoundingClientRect().top;
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    const multiplier = (prevPos > t ? 1 : -1) * 0.0003;
    planet.position.z -= Math.abs(prevPos - t) * multiplier * 10;
    planet.position.x -= Math.abs(prevPos - t) * multiplier * 10;
    planet.position.y -= Math.abs(prevPos - t) * multiplier * 10;
    
    camera.rotateY(Math.abs(prevPos - t) * multiplier);
    console.log(camera.rotation);
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
  return null;
}
export default App
