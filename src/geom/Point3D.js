
import {cos, sin} from '../utils/MathUtils';

export default class Point3D
{
	/**
	The Point3D instance's x property. Used for calculations.
	@var Point3D#x {Number}
	@public
	@default 0
	**/
	/**
	The Point3D instance's y property. Used for calculations.
	@var Point3D#y {Number}
	@public
	@default 0
	**/
	/**
	The Point3D instance's z property. Used for calculations.
	@var Point3D#z {Number}
	@public
	@default 0
	**/
	
	/**
	Point3D is an internally used class. A Point3D instance is attached to a {@link DisplayObject3D} object's transform3D property (which is itself an instance of the {@link Transform3D} class). It is part of internal calculations, and should only be accessed by advanced users. You should not have to deal with this class in normal usage of the engine.
	@class Point3D
	@arg {Number} [x=0] - New instance's x coordinate value.
	@arg {Number} [y=0] - New instance's y coordinate value.
	@arg {Number} [z=0] - New instance's z coordinate value.
	**/
	constructor(_x = 0, _y = 0, _z = 0)
	{
		this.x = _x;
		this.y = _y;
		this.z = _z;
	}
	
	/**
	A shortcut method for setting the x, y, and z properties.
	@method Point3D#updateData
	@public
	@arg {Number} x - New x value.
	@arg {Number} y - New y value.
	@arg {Number} z - New z value.
	**/
	updateData(x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}
	
	/**
	This method will rotate a supplied Point3D's coordinate values around origin 0,0,0 based on the supplied {@link EulerAngle} object's rotation. It will then set this Point3D's coordinate values to the result.
	@method Point3D#rotateAndUpdate
	@public
	@arg {Point3D} point - Point3D values to rotate.
	@arg {EulerAngle} angle - EulerAngle rotational values to rotate by.
	**/
	rotateAndUpdate(point, angle)
	{
		var phi   = angle.phi;
		var theta = angle.theta;
		var psi   = angle.psi;
		
		var srz = sin(phi),   crz = cos(phi);
		var sry = sin(theta), cry = cos(theta);
		var srx = sin(psi),   crx = cos(psi);
		
		var _X = point.x;
		var _Y = point.y;
		var _Z = point.z;
			
		var xy, xz, yx, yz, zx, zy;
			
		xy = (crx * _Y) - (srx * _Z);
		xz = (srx * _Y) + (crx * _Z);
		yz = (cry * xz) - (sry * _X);
		yx = (sry * xz) + (cry * _X);
		zx = (crz * yx) - (srz * xy);
		zy = (srz * yx) + (crz * xy);
		
		this.x += zx;
		this.y += zy;
		this.z += yz;
	}
	
	/**
	Produces a new Point3D instance that is duplicate of the current one.
	@method Point3D#clone
	@public
	@returns {Point3D} Returns a new Point3D instance.
	**/
	clone()
	{
		return new Point3D(this.x, this.y, this.z);
	}
	
	/**
	A shortcut to copy the x, y, and z values of another Point3D to this one.
	@method Point3D#copy
	@public
	@arg {Point3D} p - The Point3D instance to copy values from.
	**/
	copy(p)
	{
		this.x = p.x;
		this.y = p.y;
		this.z = p.z;
	}
	
	/**
	A shortcut to copy the inverted (negative) x, y, and z values of another Point3D to this one.
	@method Point3D#copyInverse
	@public
	@arg {Point3D} p - The Point3D instance to copy inverted values from.
	**/
	copyInverse(p)
	{
		this.x = -p.x;
		this.y = -p.y;
		this.z = -p.z;
	}
	
	/**
	A shortcut to zero out the Point3D.
	@method Point3D#zero
	@public
	**/
	zero()
	{
		this.x = 0;
		this.y = 0;
		this.z = 0;
	}
	
	/**
	Returns a String representation of the Point3D instance's values.
	@method Point3D#toString
	@public
	@returns {String} Returns a string with an object notation form of the x, y, and z properties.
	**/
	toString()
	{
		return `{x:${this.x}, y:${this.y}, z:${this.z}}`;
	}
	
	/**
	A static verion of the non-static [rotateAndUpdate]{@link Point3D#rotateAndUpdate} method which returns a new Point3D with the modified valies.
	@method Point3D.rotate
	@public
	@arg {Point3D} point - Point3D values to rotate.
	@arg {EulerAngle} angle - EulerAngle rotational values to rotate by.
	@returns {Point3D} Returns a new Point3D with the end result applied.
	**/
	static rotate(point, angle)
	{
		var phi   = angle.phi;
		var theta = angle.theta;
		var psi   = angle.psi;
		
		var srz = sin(phi),   crz = cos(phi);
		var sry = sin(theta), cry = cos(theta);
		var srx = sin(psi),   crx = cos(psi);
		
		var _X = point.x;
		var _Y = point.y;
		var _Z = point.z;
			
		var xy, xz, yx, yz, zx, zy;
			
		xy = (crx * _Y) - (srx * _Z);
		xz = (srx * _Y) + (crx * _Z);
		yz = (cry * xz) - (sry * _X);
		yx = (sry * xz) + (cry * _X);
		zx = (crz * yx) - (srz * xy);
		zy = (srz * yx) + (crz * xy);
		
		return new Point3D(zx, zy, yz);
	}
	
	/**
	Allows the distance between two 3D points to be calculated between two Point3D objects
	@method Point3D.distance
	@public
	@arg {Point3D} point1 - First Point3D to calculate from.
	@arg {Point3D} point2 - Second Point3D to calculate to.
	@returns {Number} Returns the distance between the two points.
	**/
	static distance(p1, p2)
	{
		var x2 = Math.pow(p2.x - p1.x, 2);
		var y2 = Math.pow(p2.y - p1.y, 2);
		var z2 = Math.pow(p2.z - p1.z, 2);
		
		return Math.sqrt( x2 + y2 + z2 );
	}
}
