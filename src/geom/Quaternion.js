
import EulerAngle from './EulerAngle';
import {asin, sqrt, atan2, cos, sin} from '../utils/MathUtils';

export default class Quaternion
{
	/**
	The Quaternion instance's w property. Used for calculations.
	@var Quaternion#w {Number}
	@public
	@default 1
	**/
	/**
	The Quaternion instance's x property. Used for calculations.
	@var Quaternion#x {Number}
	@public
	@default 0
	**/
	/**
	The Quaternion instance's y property. Used for calculations.
	@var Quaternion#y {Number}
	@public
	@default 0
	**/
	/**
	The Quaternion instance's z property. Used for calculations.
	@var Quaternion#z {Number}
	@public
	@default 0
	**/
	
	/**
	Quaternion is an internally used class. A Quaternion instance is attached to a {@link DisplayObject3D} object's transform3D property (which is itself an instance of the {@link Transform3D} class). It is part of internal calculations, and should only be accessed by extremely advanced users. You should not have to deal with this class in normal usage of the engine.
	@class Quaternion
	@arg {Number} [w=1] - New instance's w value.
	@arg {Number} [x=0] - New instance's x value.
	@arg {Number} [y=0] - New instance's y value.
	@arg {Number} [z=0] - New instance's z value.
	**/
	constructor (w = 1, x = 0, y = 0, z = 0)
	{
		this.w = w;
		this.x = x;
		this.y = y;
		this.z = z;
	}
	
	/**
	This method allows for quick update of all the Quaternion's properties.
	@method Quaternion#updateData
	@arg {Number} w - Updated w value.
	@arg {Number} x - Updated x value.
	@arg {Number} y - Updated y value.
	@arg {Number} z - Updated z value.
	**/
	updateData(_w, _x, _y, _z)
	{
		this.w = _w;
		this.x = _x;
		this.y = _y;
		this.z = _z;
	}
	
	/**
	This method concatenates the values of another Quaternion with this Quaternion and then sets the resulting values to this Quaternion's w, z, y, and z properties. This is vital for forward kinematics of 3D rotations. There is no return; the Quaternion intance on which this method is called (as opposed to the one supplied as a parameter) is modified as a result.
	@method Quaternion#concatenate
	@public
	@arg {Quaternion} q - Quaternion to concatenate with this one.
	**/
	concatenate(q)
	{
		var w1 = q.w;
		var x1 = q.x;
		var y1 = q.y;
		var z1 = q.z;
		
		var tw = this.w;
		var tx = this.x;
		var ty = this.y;
		var tz = this.z;
		
		var _w = w1 * tw - x1 * tx - y1 * ty - z1 * tz;
		var _x = w1 * tx + x1 * tw + y1 * tz - z1 * ty;
		var _y = w1 * ty - x1 * tz + y1 * tw + z1 * tx;
		var _z = w1 * tz + x1 * ty - y1 * tx + z1 * tw;
		
		this.w = _w;
		this.x = _x;
		this.y = _y;
		this.z = _z;
	}
	
	/**
	A method for getting a {@link EulerAngle} based on the current Quaternion.
	@method Quaternion#toEuler
	@public
	@returns {EulerAngle} Returns a new EulerAngle instance.
	**/
	toEuler()
	{
		var w2 = this.w * this.w;
		var x2 = this.x * this.x;
		var y2 = this.y * this.y;
		var z2 = this.z * this.z;
		
		var phi, theta, psi;
		
		var tester = this.w * this.y - this.z * this.x;
		
		if (tester > 0.499999)
		{
			phi   = -2 * atan2(this.w, this.x);
			theta = Math.PI / 2;
			psi   = Math.PI;
			
			return new EulerAngle(phi, theta, psi);
		}
		else if (tester < -0.499999)
		{
			phi   = -2 * atan2(this.w, this.x);
			theta = -Math.PI / 2;
			psi   = Math.PI;
			
			return new EulerAngle(phi, theta, psi);
		}
		
		phi   = atan2(  2 * (this.w * this.x + this.y * this.z) , 1 - 2 * (x2 + y2) );
		theta = asin (  2 *  tester                                                 );
		psi   = atan2(  2 * (this.w * this.z + this.x * this.y) , 1 - 2 * (y2 + z2) );
		
		return new EulerAngle(phi, theta, psi);
	}
	
	/**
	A method for updating the w, x, y, and z properties based on a {@link EulerAngle} intance.
	@method Quaternion#updateFromEuler
	@public
	@arg {EulerAngle} euler - EulerAngle instance to update from.
	**/
	updateFromEuler(euler)
	{
		var hPhi   = euler.phi   / 2;
		var hTheta = euler.theta / 2;
		var hPsi   = euler.psi   / 2;
		
		var sin_hPhi   = sin(  hPhi), cos_hPhi   = cos(  hPhi);
		var sin_hTheta = sin(hTheta), cos_hTheta = cos(hTheta);
		var sin_hPsi   = sin(  hPsi), cos_hPsi   = cos(  hPsi);
		
		this.w = cos_hPhi * cos_hTheta * cos_hPsi + sin_hPhi * sin_hTheta * sin_hPsi;
		this.x = sin_hPhi * cos_hTheta * cos_hPsi - cos_hPhi * sin_hTheta * sin_hPsi;
		this.y = cos_hPhi * sin_hTheta * cos_hPsi + sin_hPhi * cos_hTheta * sin_hPsi;
		this.z = cos_hPhi * cos_hTheta * sin_hPsi - sin_hPhi * sin_hTheta * cos_hPsi;
	}
	
	/**
	Normalizes the Quaternion.
	@method Quaternion#normalize
	@public
	**/
	normalize()
	{
		var magnitude = sqrt( this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z );
		this.w /= magnitude; this.x /= magnitude; this.y /= magnitude; this.z /= magnitude;
	}
	
	/**
	Produces a new Quaternion instance that is duplicate of the current one.
	@method Quaternion#clone
	@public
	@returns {Quaternion} Returns a new Quaternion instance.
	**/
	clone()
	{
		return new Quaternion(this.w, this.x, this.y, this.z);
	}
	
	/**
	A shortcut to copy the w, x, y, and z values of another Quaternion to this one.
	@method Quaternion#copy
	@public
	@arg {Quaternion} q - The Quaternion instance to copy values from.
	**/
	copy(q)
	{
		this.w = q.w; this.x = q.x; this.y = q.y; this.z = q.z;
	}
	
	/**
	A shortcut to copy the inverted result of another Quaternion to this one.
	@method Quaternion#copyInverse
	@public
	@arg {Quaternion} p - The Quaternion instance to invert and then get values from.
	**/
	copyInverse(q)
	{
		var qw = q.w, qx = q.x, qy = q.y, qz = q.z;
		var d = qw*qw + qx*qx + qy*qy + qz*qz;
		this.w =  qw/d;
		this.x = -qx/d;
		this.y = -qy/d;
		this.z = -qz/d;
	}
	
	/**
	A shortcut to zero out the Quaternion.
	@method Quaternion#zero
	@public
	**/
	zero()
	{
		this.w = 1;
		this.x = 0;
		this.y = 0;
		this.z = 0;
	}
	
	/**
	Returns a String representation of the Quaternion instance's values.
	@method Quaternion#toString
	@public
	@returns {String} Returns a string with an object notation form of the w, x, y, and z properties.
	**/
	toString()
	{
		return `{w:${this.w}, x:${this.x}, y:${this.y}, z:${this.z}}`;
	}
	
	/**
	Multiplies two Quaterions together. Note: multiplication of quaternions is non-commutative. Order matters.
	@method Quaternion.multiply
	@public
	@arg {Quaternion} q1 - The first quaternion to multiply.
	@arg {Quaternion} q2 - The second quaternion to multiply.
	@returns {Quaternion} Returns a new Quaternion with the result of the multiplication.
	**/
	static multiply(q1, q2)
	{
		"use strict";
		
		var w1 = q1.w, w2 = q2.w;
		var x1 = q1.x, x2 = q2.x;
		var y1 = q1.y, y2 = q2.y;
		var z1 = q1.z, z2 = q2.z;
		
		var _w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
		var _x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2;
		var _y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2;
		var _z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2;
		
		return new Quaternion(_w, _x, _y, _z);
	}
}
