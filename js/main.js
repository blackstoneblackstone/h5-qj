
var camera, scene, renderer;
var geometry, material, mesh;

var alpha, beta, gama;
var cameraFov = {f:83};

init();
animate();

var cube;

function init() {

    camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000 );

    controls = new THREE.DeviceOrientationControls( camera );
    controls.connect();

    scene = new THREE.Scene();

    var sides = [
        {
            url: 'img/2.jpg',
            position: [ -512, 0, 0 ],
            rotation: [ 0, Math.PI / 2, 0 ]
        },
        {
            url: 'img/4.jpg',
            position: [ 512, 0, 0 ],
            rotation: [ 0, -Math.PI / 2, 0 ]
        },
        {
            url: 'img/5.jpg',
            position: [ 0,  512, 0 ],
            rotation: [ Math.PI / 2, 0, Math.PI ]
        },
        {
            url: 'img/6.jpg',
            position: [ 0, -512, 0 ],
            rotation: [ - Math.PI / 2, 0, Math.PI ]
        },
        {
            url: 'img/1.jpg',
            position: [ 0, 0,  512 ],
            rotation: [ 0, Math.PI, 0 ]
        },
        {
            url: 'img/3.jpg',
            position: [ 0, 0, -512 ],
            rotation: [ 0, 0, 0 ]
        }
    ];

    cube = new THREE.Object3D();
    scene.add( cube );

    for ( var i = 0; i < sides.length; i ++ ) {

        var side = sides[ i ];

        var element = document.createElement( 'img' );
        element.width = 1026; // 2 pixels extra to close the gap.
        element.src = side.url;

        var object = new THREE.CSS3DObject( element );
        object.position.fromArray( side.position );
        object.rotation.fromArray( side.rotation );
        cube.add( object );

    }

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    $("#qjdiv").append( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate()
{
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}
