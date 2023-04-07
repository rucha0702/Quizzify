const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);
camera.position.set(1, 1, 10);
const controls = new THREE.OrbitControls(camera, document.querySelector("canvas"));
controls.enableDamping = true;

const sizes = {
  width: innerWidth,
  height: innerHeight,
};
const renderer = new THREE.WebGLRenderer({
  antialias: true, // 地球の画質をよくする
  canvas: document.querySelector("canvas"),
});

renderer.setSize(sizes.width, sizes.height);
// 地球の画質をよくする
renderer.setPixelRatio(window.devicePixelRatio);
const sphereGeometry = new THREE.SphereGeometry(5, 50, 50);
const sphereMaterial = new THREE.MeshNormalMaterial({
  wireframe: true,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  controls.update();
}
addEventListener("resize", () => {
  // Update sizes
  sizes.width = innerWidth;
  sizes.height = innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
animate();