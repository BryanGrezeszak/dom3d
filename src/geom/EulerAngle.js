
import Quaternion from './Quaternion';
import {asin, sqrt, atan2, cos, sin} from '../utils/MathUtils';

export default class EulerAngle
{
	/**
	The EulerAngle instance's phi property. Used for calculations.
	@var EulerAngle#phi {Number}
	@public
	@default 0
	**/
	/**
	The EulerAngle instance's theta property. Used for calculations.
	@var EulerAngle#theta {Number}
	@public
	@default 0
	**/
	/**
	The EulerAngle instance's psi property. Used for calculations.
	@var EulerAngle#psi {Number}
	@public
	@default 0
	**/
	
	/**
	EulerAngle is an internally used class. A EulerAngle instance is attached to a {@link DisplayObject3D} object's transform3D property (which is itself an instance of the {@link Transform3D} class). It is part of internal calculations, and should only be accessed by extremely advanced users. You should not have to deal with this class in normal usage of the engine.
	@class EulerAngle
	@arg {Number} [phi=0] - New instance's phi value.
	@arg {Number} [theta=0] - New instance's theta value.
	@arg {Number} [psi=0] - New instance's psi value.
	**/
	constructor(aphi = 0, atheta = 0, apsi = 0)
	{
		this.phi   = aphi;
		this.theta = atheta;
		this.psi   = apsi;
	}
	
	/**
	A shortcut method for setting the phi, theta, and psi properties.
	@method EulerAngle#updateData
	@public
	@arg {Number} phi - New phi value.
	@arg {Number} theta - New theta value.
	@arg {Number} psi - New psi value.
	**/
	updateData(_phi, _theta, _psi)
	{
		this.phi   = _phi;
		this.theta = _theta;
		this.psi   = _psi;
	}
	
	/**
	A method for updating the phi, theta, and psi based on a {@link Quaternion} intance.
	@method EulerAngle#updateFromQuaternion
	@public
	@arg {Quaternion} q - Quaternion instance to update from.
	**/
	updateFromQuaternion(q)
	{
		var w = q.w, x = q.x, y = q.y, z = q.z;
		
		var w2 = w * w;
		var x2 = x * x;
		var y2 = y * y;
		var z2 = z * z;
		
		var tester = w * y - z * x;
		
		if (tester > 0.499999)
		{
			this.phi   = -2 * atan2(w, x);
			this.theta = Math.PI / 2;
			this.psi   = Math.PI;
			
			return;
		}
		else if (tester < -0.499999)
		{
			this.phi   = -2 * atan2(w, x);
			this.theta = -Math.PI / 2;
			this.psi   = Math.PI;
			
			return;
		}
		
		this.phi   = atan2(  2 * (w * x + y * z) , 1 - 2 * (x2 + y2) );
		this.theta = asin (  2 *  tester                             );
		this.psi   = atan2(  2 * (w * z + x * y) , 1 - 2 * (y2 + z2) );
	}
	
	/**
	A method for getting a {@link Quaternion} based on the current EulerAngle.
	@method EulerAngle#toQuaternion
	@public
	@returns {Quaternion} Returns a new {@link Quaternion} instance.
	**/
	toQuaternion()
	{
		var hPhi   = this.phi   / 2;
		var hTheta = this.theta / 2;
		var hPsi   = this.psi   / 2;
		
		var sin_hPhi   = sin(  hPhi), cos_hPhi   = cos(  hPhi);
		var sin_hTheta = sin(hTheta), cos_hTheta = cos(hTheta);
		var sin_hPsi   = sin(  hPsi), cos_hPsi   = cos(  hPsi);
		
		var w = cos_hPhi * cos_hTheta * cos_hPsi + sin_hPhi * sin_hTheta * sin_hPsi;
		var x = sin_hPhi * cos_hTheta * cos_hPsi - cos_hPhi * sin_hTheta * sin_hPsi;
		var y = cos_hPhi * sin_hTheta * cos_hPsi + sin_hPhi * cos_hTheta * sin_hPsi;
		var z = cos_hPhi * cos_hTheta * sin_hPsi - sin_hPhi * sin_hTheta * cos_hPsi;
		
		return new Quaternion(w, x, y, z);
	}
	
	/**
	Produces a new EulerAngle instance that is duplicate of the current one.
	@method EulerAngle#clone
	@public
	@returns {EulerAngle} Returns a new EulerAngle instance.
	**/
	clone()
	{
		return new EulerAngle(this.phi, this.theta, this.psi);
	}
	
	/**
	A shortcut to copy the phi, theta, and psi values of another EulerAngle to this one.
	@method EulerAngle#copy
	@public
	@arg {EulerAngle} ea - The EulerAngle instance to copy values from.
	**/
	copy(ea)
	{
		this.phi   = ea.phi;
		this.theta = ea.theta;
		this.psi   = ea.psi;
	}
	
	/**
	A shortcut to zero out the EulerAngle.
	@method EulerAngle#zero
	@public
	**/
	zero()
	{
		this.phi   = 0;
		this.theta = 0;
		this.psi   = 0;
	}
	
	/**
	Returns a String representation of the EulerAngle instance's values.
	@method EulerAngle#toString
	@public
	@returns {String} Returns a string with an object notation form of the phi, theta, and psi properties.
	**/
	toString()
	{
		return `{phi:${this.phi}, theta:${this.theta}, psi:${this.psi}}`;
	}
}
