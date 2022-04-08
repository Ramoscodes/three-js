var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.x = 2;
camera.position.y = 2;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e6a1df");
renderer.setSize(window.innerWidth,window.innerHeight);
 
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CircleGeometry( 4, 16 );
var material = new THREE.MeshNormalMaterial({color: 0x00ff00});
var mesh = new THREE.Mesh(geometry,material); 
scene.add(mesh);


var light = new THREE.PointLight(0xFFFFF,1,500)
light.position.set(10,2,25);
scene.add(light);



function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene,camera);
}
 
animate();

renderer.render(scene,camera);