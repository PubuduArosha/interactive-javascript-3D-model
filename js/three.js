    // Setting scene for 3D Object
    var scene = new THREE.Scene ();
    var camera = new THREE.PerspectiveCamera (
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
    );
    var vector = new THREE.Vector3 ();
    var renderer = new THREE.WebGLRenderer ();
    renderer.setSize (window.innerWidth, window.innerHeight);
    document.body.appendChild (renderer.domElement);