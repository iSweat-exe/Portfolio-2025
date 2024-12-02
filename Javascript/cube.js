let speedX = 0.01;
    let speedY = 0.01;
    let rotationSpeed = 0.01;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio sera ajusté
    const renderer = new THREE.WebGLRenderer();
    
    const container = document.getElementById('cube-container');
    container.appendChild(renderer.domElement);

    renderer.setSize(container.offsetWidth, container.offsetHeight);

    // Création du cube avec une géométrie de type BoxGeometry
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.LineBasicMaterial({ color: 0xF1DE36 });
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, material);
    scene.add(line);

    camera.position.z = 1.8;

    function animate() {
      requestAnimationFrame(animate);

      line.rotation.x += speedX;
      line.rotation.y += speedY;

      // Rotation aléatoire
      line.rotation.x += Math.random() * rotationSpeed;
      line.rotation.y += Math.random() * rotationSpeed;

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
    });