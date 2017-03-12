/**
 * @author richt / http://richt.me
 * @author WestLangley / http://github.com/WestLangley
 *
 * W3C Device Orientation control (http://w3c.github.io/deviceorientation/spec-source-orientation.html)
 */

THREE.DeviceOrientationControls = function ( object ) {

	var scope = this;

	this.object = object;

	this.object.rotation.reorder( "YXZ" );

	this.freeze = true;

	this.deviceOrientation = {};

	this.screenOrientation = 0;

	var onDeviceOrientationChangeEvent = function ( event ) {

		scope.deviceOrientation = event;

	};

	var onScreenOrientationChangeEvent = function () {

		scope.screenOrientation = window.orientation || 0;

	};

	// The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	var setObjectQuaternion = function () {

		var zee = new THREE.Vector3( 0, 0, 1 );

		var euler = new THREE.Euler();

		var q0 = new THREE.Quaternion();

		var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

		return function ( quaternion, alpha, beta, gamma, orient ) {

			euler.set( beta, alpha, - gamma, 'YXZ' );                       // 'ZXY' for the device, but 'YXZ' for us

			quaternion.setFromEuler( euler );                               // orient the device

			quaternion.multiply( q1 );                                      // camera looks out the back of the device, not the top

			quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) );    // adjust for screen orientation

			var tx = Math.floor((360-alpha) * 100);
			var ty = Math.floor(beta*100);
			var tz = Math.floor(gamma*100);

			//$('#alpha').html('x:  ' + camera.quaternion.x);
			//$('#beta').html('y:  ' + camera.quaternion.y);
			//$('#gamma').html('z:  ' + camera.quaternion.z);
			//$('#orient').html('w:  ' + camera.quaternion.w);

			//$('#alpha').html('x:  ' + tx);
			//$('#beta').html('y:  ' + ty);
			//$('#gamma').html('z:  ' + tz);

			if( typeof setLo === 'function' ){setLo(alpha, beta, gamma);}
		}

	}();

	this.connect = function() {

		onScreenOrientationChangeEvent(); // run once on load

		window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		scope.freeze = false;

	};

	this.disconnect = function() {

		scope.freeze = true;

		window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

	};

	this.update = function () {

		if ( scope.freeze ) return;

		var alpha  = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.alpha ) : 0; // Z
		var beta   = scope.deviceOrientation.beta  ? THREE.Math.degToRad( scope.deviceOrientation.beta  ) : 0; // X'
		var gamma  = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
		var orient = scope.screenOrientation       ? THREE.Math.degToRad( scope.screenOrientation       ) : 0; // O

		//$('#alpha').html('alpha:' + Math.floor(scope.deviceOrientation.gamma));
		//$('#beta').html('beta:' + Math.floor(scope.deviceOrientation.beta));
		//$('#gamma').html('gamma:' + Math.floor(scope.deviceOrientation.gamma));

		//$('#alpha').html('alpha:' + scope.deviceOrientation.alpha);
		//$('#beta').html('beta:' + scope.deviceOrientation.beta);
		//$('#gamma').html('gamma:' + scope.deviceOrientation.gamma);

		setObjectQuaternion( scope.object.quaternion, alpha, beta, gamma, orient );

	};

};
