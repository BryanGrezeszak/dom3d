
import Point3D from '../geom/Point3D';

export default class DepthOfField
{
	/**
	* Allows the creation of a DepthOfField instance which can be pushed into the stage's `effects` array to apply the effect to a scene.
	* @class DepthOfField
	* @arg [strength] {Number} - Optional shortcut to set strength.
	* @arg [trueDistance] {Boolean} - Optional shortcut to set trueDistance.
	* @arg [focus] {Object} - Optional shortcut to set focus.
	**/
	constructor(strength = 1, trueDistance = true, focus = null)
	{
		/**
		* Sets the strength of the effect.
		* @var DepthOfField#strength {Number}
		* @default 1
		**/
		this.strength = strength;
		
		/**
		* Sets whether the effect utilizes true distance from the focus point (true) or simply the object's z location (false) for the effect.
		* @var DepthOfField#trueDistance {Boolean}
		* @default true
		**/
		this.trueDistance = trueDistance;
		
		/**
		* Allows you to control the global point of focus for the depth of field. Can be set to a simple object with x, y, and z properties. If trueDistance is false then only the z is relevant.
		* @var DepthOfField#focus {Object}
		* @default {x:0,y:0,z:0}
		*/
		this.focus = focus || {x:0,y:0,z:0};
	}
	
	render(obj)
	{
		// if it's a group then don't blur the group; get down to the components
		if (obj.isGroup)
			return;
		
		var coords = obj.transform3D.concatenatedCoordinates;
		var dist = this.trueDistance ? Point3D.distance(this.focus, coords) : Math.abs(this.focus.z - coords.z);
		var blurAmt = (this.strength * (dist/obj.stage.zoom)) * 25;
		
		var newVal = `blur(${blurAmt}px)`;
		if (obj.style.filter !== newVal)
			obj.style.filter = obj.style.webkitFilter = newVal;
	}
}
