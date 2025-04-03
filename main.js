import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 創建場景
const scene = new THREE.Scene();

// 創建相機
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 創建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 創建GLTF載入器
const loader = new GLTFLoader();

// 載入GLB檔案
loader.load(
    'path/to/your/model.glb',
    function (gltf) {
        scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error('An error happened', error);
    }
);

// 渲染循環
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
