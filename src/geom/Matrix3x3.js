
import {cos, sin} from '../utils/MathUtils';

export default class Matrix3x3
{
	/**
	The Matrix3x3 instance's a property. Used for calculations.
	@var Matrix3x3#a {Number}
	@public
	@default 1
	**/
	/**
	The Matrix3x3 instance's b property. Used for calculations.
	@var Matrix3x3#b {Number}
	@public
	@default 0
	**/
	/**
	The Matrix3x3 instance's c property. Used for calculations.
	@var Matrix3x3#c {Number}
	@public
	@default 0
	**/
	/**
	The Matrix3x3 instance's d property. Used for calculations.
	@var Matrix3x3#d {Number}
	@public
	@default 1
	**/
	/**
	The Matrix3x3 instance's tx property. Used for calculations.
	@var Matrix3x3#tx {Number}
	@public
	@default 0
	**/
	/**
	The Matrix3x3 instance's ty property. Used for calculations.
	@var Matrix3x3#ty {Number}
	@public
	@default 0
	**/
	
	/**
	Matrix3x3 is an internally used class. It is primarily used to turn the 3D object's transformation information into CSS transforms.
	@class Matrix3x3
	@arg {Number} [a=1] - New instance's a value.
	@arg {Number} [b=0] - New instance's b value.
	@arg {Number} [c=0] - New instance's c value.
	@arg {Number} [d=1] - New instance's d value.
	@arg {Number} [tx=0] - New instance's tx value.
	@arg {Number} [ty=0] - New instance's ty value.
	**/
	constructor(_a = 1, _b = 0, _c = 0, _d = 1, _tx = 0, _ty = 0)
	{
		this.a  = _a;
		this.b  = _b;
		this.c  = _c;
		this.d  = _d;
		this.tx = _tx;
		this.ty = _ty;
	}
	
	/**
	Scales the Matrix3x3 by a given amount. Scales relative to what it currently is; so scaling by the same value two times will scale it twice as much as doing it once.
	@method Matrix3x3#scale
	@public
	@arg {Number} scaleBy - Amount to scale by.
	**/
	scale(_scaleBy)
	{
		this.a *= _scaleBy;
		this.b *= _scaleBy;
		this.c *= _scaleBy;
		this.d *= _scaleBy;
		this.tx *= _scaleBy;
		this.ty *= _scaleBy;
	}
	
	/**
	A shortcut to zero out the Matrix3x3.
	@method Matrix3x3#zero
	@public
	**/
	zero()
	{
		this.a  = 1;
		this.b  = 0;
		this.c  = 0;
		this.d  = 1;
		this.tx = 0;
		this.ty = 0;
	}
	
	/**
	A shortcut to copy the a, b, c, d, tx, and ty values of another Matrix3x3 to this one.
	@method Matrix3x3#copy
	@public
	@arg {Matrix3x3} m - The Matrix3x3 instance to copy values from.
	**/
	copy(m)
	{
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.tx = m.tx;
		this.ty = m.ty;
	}
	
	/**
	Applies the rotational values of a EulerAngle instance to this Matrix3x3.
	@method Matrix3x3#updateFromEuler
	@public
	@arg {EulerAngle} e - The EulerAngle instance to copy values from.
	**/
	updateFromEuler(e)
	{
		var srz = sin(e.phi),   crz = cos(e.phi);
		var sry = sin(e.theta), cry = cos(e.theta);
		var srx = sin(e.psi),   crx = cos(e.psi);
		
		var crz_crx = crz * crx;
		var srz_crx = srz * crx;
		
		var sry_srx = sry * srx;
		
		var add_cry = sry_srx + cry;
		var sub_cry = sry_srx - cry;
		
		var x1 = -crz * sub_cry + srz_crx;
		var y1 = -srz * sub_cry - crz_crx;
		
		var x2 = -crz * add_cry + srz_crx;
		var y2 = -srz * add_cry - crz_crx;
		
		this.a =  (x1 - x2) / 2;
		this.b =  (y1 - y2) / 2;
		this.c = -(x1 + x2) / 2;
		this.d = -(y1 + y2) / 2;
	}
	
	/**
	Returns a String representation of the Matrix3x3 instance's values.
	@method Matrix3x3#toString
	@public
	@returns {String} Returns a string with an object notation form of the Matrix3x3 properties.
	**/
	toString()
	{
		return `{a:${this.a}, b:${this.b}, c:${this.c}, d:${this.d}, tx:${this.tx}, ty:${this.ty}}`;
	}
}
