
import Matrix3x3 from './geom/Matrix3x3';
import Transform3D from './geom/Transform3D';
import CalculatedInfo from './geom/CalculatedInfo';
import {TO_RAD} from './utils/MathUtils';
import PropNames from './utils/PropNames';

export default class DisplayObject3D
{
	/**
	* The DisplayObject3D class is an abstract class that serves as the base for all 3D capable elements to be used within a dom3d {@link Stage3D} scene. It is not meant to be directly instantiated.
	* <br/><br/>
	* All DOM elements associated with any dom3d class that inherits from DisplayObject3D (with the exception of Stage3D class objects) should be assumed to operate with a CSS display of 'block' and a CSS position of 'absolute'.
	* @class DisplayObject3D
	* @abstract
	*/
	constructor()
	{
		// private
		this._x = 0;
		this._y = 0;
		this._z = 0;
		
		// private
		this._rotX = 0;
		this._rotY = 0;
		this._rotZ = 0;
		
		// private
		this._regX = 0;
		this._regY = 0;
		
		// private
		this._dirty = true;
		
		// used internally
		this.matrix = new Matrix3x3();
		this.transform3D = new Transform3D();
		
		/**
		* Each DisplayObject3D has a unique id property. When the element it represents has an id attribute at the time of instantiation it will match its element's id. Otherwise a unique one will be generated. You can also assign your own.
		* @var DisplayObject3D#id {String}
		* @default generated if the element has no id
		**/
		this.id = '';
		
		/**
		* Every DisplayObject3D represents an HTML Element. You can access that element by accessing the object's element property. Conversely any element that has an associated DisplayObject3D will have a property .dom3dObject which references its DisplayObject3D.
		* @var DisplayObject3D#element {HTMLElement}
		* @readonly
		* @default null
		**/
		this.element = null;
		
		/**
		* Each DisplayObject3D has a stage property that allows it to tell which stage it is currently in the display list of. Is null when not in a display list.
		* @var DisplayObject3D#stage {Stage3D}
		* @readonly
		* @default null
		**/
		this.stage = null;
		
		/**
		* Each DisplayObject3D has a parent property that allows it to tell which object is currently this object's parent in the display list. null if it is not in the display list. This is a reflection of the dom3d display list, not necessarily of the actual HTML parent/child structure.
		* @var DisplayObject3D#parent {DisplayObject3D}
		* @readonly
		* @default null
		**/
		this.parent = null;
		
		/**
		Each DisplayObject3D has a calc property that allows for easy reading of the final calculated x, y, z, rotX, rotY, and rotZ values.
		* @var DisplayObject3D#calc {Object}
		* @readonly
		* @note The values on this property are only fully accurate immediately after a render/update. If you've changed values between render and reading then readings here may no longer be accurate.
		**/
		this.calc = new CalculatedInfo(this);
	}
	
	/**
	* The x property sets the x coordinate value for the DisplayObject3D instance.
	* @var DisplayObject3D#x {Number}
	* @default 0
	**/
	get x(){ return this._x; }
	set x(v)
	{
		if (v != this._x)
		{
			this._dirty = true;
			this._x = v;
		}
	}
	
	/**
	* The y property sets the y coordinate value for the DisplayObject3D instance.
	* @var DisplayObject3D#y {Number}
	* @default 0
	**/
	get y(){ return this._y; }
	set y(v)
	{
		if (v != this._y)
		{
			this._dirty = true;
			this._y = v;
		}
	}
	
	/**
	* The z property sets the z coordinate value for the DisplayObject3D instance.
	* @var DisplayObject3D#z {Number}
	* @default 0
	**/
	get z(){ return this._z; }
	set z(v)
	{
		if (v != this._z)
		{
			this._dirty = true;
			this._z = v;
		}
	}
	
	/**
	* The rotX property sets the x-axis rotation value for the DisplayObject3D instance in degrees.
	* @var DisplayObject3D#rotX {Number}
	* @default 0
	**/
	get rotX(){ return this._rotX; }
	set rotX(v)
	{
		if (v != this._rotX)
		{
			this._dirty = true;
			this._rotX = v;
		}
	}
	
	/**
	* The rotY property sets the y-axis rotation value for the DisplayObject3D instance in degrees.
	* @var DisplayObject3D#rotY {Number}
	* @default 0
	**/
	get rotY(){ return this._rotY; }
	set rotY(v)
	{
		if (v != this._rotY)
		{
			this._dirty = true;
			this._rotY = v;
		}
	}
	
	/**
	* The rotZ property sets the z-axis rotation value for the DisplayObject3D instance in degrees.
	* @var DisplayObject3D#rotZ {Number}
	* @default 0
	**/
	get rotZ(){ return this._rotZ; }
	set rotZ(v)
	{
		if (v != this._rotZ)
		{
			this._dirty = true;
			this._rotZ = v;
		}
	}
	
	/**
	* The regX property sets the x registration point used for rotation/placement of the DisplayObject3D instance.
	* @var DisplayObject3D#regX {Number}
	* @default 0
	**/
	get regX(){ return this._regX; }
	set regX(v)
	{
		if (v != this._regX)
		{
			this._dirty = true;
			this._regX = v;
		}
	}
	
	/**
	* The regY property sets the y registration point used for rotation/placement of the DisplayObject3D instance.
	* @var DisplayObject3D#regY {Number}
	* @default 0
	**/
	get regY(){ return this._regY; }
	set regY(v)
	{
		if (v != this._regY)
		{
			this._dirty = true;
			this._regY = v;
		}
	}
	
	/**
	* Shortcut for easily setting styles on the element.
	* @var DisplayObject3D#style {Object}
	*/
	get style() {
		return this.element.style;
	}
	
	// for clarity, make sure if they try work with events directly on dom3d object it shouldn't work
	// only the shortcut usages should work, that way it keeps clear that it is a library driven event adding
	addEventListener() { throw new Error(EVENT_ERROR); }
	removeEventListener() { throw new Error(EVENT_ERROR); }
	dispatchEvent() { throw new Error(EVENT_ERROR); }
	
	/**
	* Shortcut for adding event listeners to the object's dom element. Works same as `myObj.element.addEventListener(...);`
	* @method DisplayObject3D#addListener
	* @note All events are handled on the `element` property. This is only a shortcut.
	* @arg type - Identical to normal event listening.
	* @arg listener - Identical to normal event listening.
	* @arg [useCapture] - (optional) Identical to normal event listening.
	* @arg [wantsUntrusted] - (optional) Identical to normal event listening.
	*/
	addListener(type, listener, useCapture, wantsUntrusted)
	{
		return this.element.addEventListener(type, listener, useCapture, wantsUntrusted);
	}
	
	/**
	* Shortcut for removing event listeners from the object's dom element. Works same as `myObj.element.removeEventListener(...);`
	* @method DisplayObject3D#removeListener
	* @note All events are handled on the `element` property. This is only a shortcut.
	* @arg type - Identical to normal event listening.
	* @arg listener - Identical to normal event listening.
	* @arg [useCapture] - (optional) Identical to normal event listening.
	*/
	removeListener(type, listener, useCapture)
	{
		return this.element.removeEventListener(type, listener, useCapture);
	}
	
	/**
	* Shortcut for dispatching events from the object's dom element. Works same as `myObj.element.dispatchEvent(...);`
	* @method DisplayObject3D#dispatch
	* @note All events are handled on the `element` property. This is only a shortcut.
	* @arg event - Identical to normal event dispatching via `dispatchEvent`.
	*/
	dispatch(evt)
	{
		return this.element.dispatchEvent(evt);
	}
	
	// internal
	setStage(s)
	{
		this.stage = s;
	}
	
	// internal
	render(pDirty)
	{
		throw new Error("::DOM3D:: DisplayObject3D can not be part of the 3D scene, it is only a base class.");
	}
	
	// internal
	updateWorld()
	{
		this.transform3D.copyConcatenated( this.parent.transform3D );
		this.transform3D.eulerAngle.updateData( this._rotZ*TO_RAD, this._rotY*TO_RAD, this._rotX*TO_RAD );
		this.transform3D.quaternion.updateFromEuler( this.transform3D.eulerAngle );
		this.transform3D.coordinates.updateData( this._x, this._y, this._z );
		this.transform3D.concatenatedQuaternion.concatenate( this.transform3D.quaternion );
		this.transform3D.concatenatedEulerAngle.updateFromQuaternion( this.transform3D.concatenatedQuaternion );
	}
	
	// internal
	rotateCoords()
	{
		this.transform3D.concatenatedCoordinates.rotateAndUpdate( this.transform3D.coordinates, this.parent.transform3D.concatenatedEulerAngle );
	}
	
	// internal
	rotateObject()
	{
		this.transformMatrix.updateFromEuler( this.transform3D.concatenatedEulerAngle );
	}
	
	// internal
	renderObject()
	{
		var m = this.transformMatrix;
		var zoom = this.stage.zoom;
		
		var metaPoint = this.transform3D.concatenatedCoordinates;
		var relevantZ = this.parent.orthographic||this.stage.orthographic ? this.parent.transform3D.concatenatedCoordinates.z : metaPoint.z;
		
		if (relevantZ > zoom)
			{ this.element.style.display = 'none'; return; }
		else if (this.element.style.display === 'none')
			{ this.element.style.display = 'block'; }
		
		var factor   = zoom / (zoom - relevantZ);
		var scaling  = Math.pow(factor, this.stage.distortion);
		
		// update the matrix with the coords
		m.tx = metaPoint.x * factor;
		m.ty = metaPoint.y * factor;
		
		// scale the matrix using the calculated scaling factor
		m.scale(scaling);
		
		// we need to offset the tx/ty to account for the registration point because of the odd way CSS handles registrations (they affect rotation but not placement)
		var rx = this.regX * factor * scaling;
		var ry = this.regY * factor * scaling;
		
		// get the transform string
		var transformString = 'matrix('+(m.a).toFixed(8)+','+(m.b).toFixed(8)+','+(m.c).toFixed(8)+','+(m.d).toFixed(8)+','+(m.tx-rx).toFixed(8)+','+(m.ty-ry).toFixed(8)+')';
		
		// get the transform origin string
		var transformOriginString = this.regX+'px '+this.regY+'px'
		
		// do the actual update of CSS strings
		this.element.style[PropNames.transform] = transformString;
		this.element.style[PropNames.transformOrigin] = transformOriginString;
		
		for (var i=0, ii=this.stage.effects.length; i<ii; i++)
		{
			var effect = this.stage.effects[i];
			effect.render(this);
		}
	}
}

// internal
DisplayObject3D.idCount = 0;
const EVENT_ERROR = '::DOM3D:: Events are handled on the `.element` property. You may access it directly, or use the `addListener`, `.removeListener`, and `.dispatch` shortcuts.';
