
import DisplayObject3D from './DisplayObject3D';
import Matrix3x3 from './geom/Matrix3x3';
import Transform3D from './geom/Transform3D';
import StageEvent from './events/StageEvent';
import determineElement from './utils/determineElement';
	
export default class Stage3D extends DisplayObject3D
{
	/**
	* @var Stage3D#x
	* @ignore
	**/
	/**
	* @var Stage3D#y
	* @ignore
	**/
	/**
	* @var Stage3D#z
	* @ignore
	**/
	/**
	* @var Stage3D#rotX
	* @ignore
	**/
	/**
	* @var Stage3D#rotY
	* @ignore
	**/
	/**
	* @var Stage3D#rotZ
	* @ignore
	**/
	/**
	* @var Stage3D#regX
	* @ignore
	**/
	/**
	* @var Stage3D#regY
	* @ignore
	**/
	/**
	* @var Stage3D#calc
	* @ignore
	**/
		
	/**
	* All 3D elements to be rendered are to be added to a Stage3D instance. Even though it inherits from DisplayObject3D it should be treated like a 2D object in the DOM as far as its own positioning/rotating goes. Any x, y, z, rotX, rotY, and rotZ properties are not intended to function; just use CSS positioning. If you want a container for 3D elements that you can move and rotate in 3D space then see {@link Group3D}.
	* <br><br>
	* Also note that a Stage3D needs to be updated each frame. If autoRender is used (as is default) it will just constantly update. This is not as taxing as it would seem since it uses a diry/clean rendering system. For slightly better performance you can update manually as needed using the [update]{@link Stage3D#update} method.
	* <br><br>
	* In almost all ways the API to the Stage3D is a mimic of the Group3D. You can treat manipulation of display list children within them almost identically (e.g. add, remove, getChildById, etc).
	* @class Stage3D
	* @extends DisplayObject3D
	* @arg element - An argument identifying the HTML Element the display object is to associate with. Can be the actual element object itself, or a query selector string which will identify the intended HTML element already in the DOM.
	* @arg {Boolean} [autoRender=true] - Shortcut to the set [autoRender]{@link Stage3D#autoRender} property.
	* @arg {Number} [FPS=30] - Allows you to determine the update rate of the autoRender in frames per second.
	**/
	constructor(_el, autoRend = true, fps = 30)
	{
		super();
		
		if (_el)
		{
			this.element = determineElement(_el);
			this.id = this.element.hasAttribute('id') ? this.element.attributes.id.value : 'stage_'+(DisplayObject3D.idCount++);
			this.element.dom3dObject = this;
		}
		else
		{
			throw new Error('::DOM3D:: No element/selector/markup was given to Stage3D constructor.');
		}
		
		this.registeredChildren = [];
		this.lowestZIndex = 0;
		this.updateInterval = 0;
		
		/**
		* Stage3D inherits the stage property from DisplayObject3D, which identifies the root stage. However, it will simply always point to itself in the case of a Stage3D object.
		* @var {Stage3D} Stage3D#stage
		* @readonly
		* @default this
		**/
		this.stage = this;
		
		/**
		* distortion affects how the location of objects are distorted (lesser for further away, more for closer) as they move on the z-axis.
		* @var {Number} Stage3D#distortion
		* @default 6
		**/
		this.distortion = 6;
		
		/**
		* zoom affects how objects are scaled as they move on the z-axis. Experiment to get the effect that works for your use. Any object with a calculated z coordinate higher than the zoom will be considered behind the viewer, and not render.
		* @var {Number} Stage3D#zoom
		* @default 5000
		**/
		this.zoom = 5000;
		
		/**
		* Allows access to the Array of child objects for this container. Special care should be taken when accessing to not modify the original Array.
		* @var Stage3D#children {Array}
		* @readonly
		* @default [empty Array]
		**/
		this.children = [];
		
		/**
		* A Stage3D will have an isGroup property of true for identification purposes. Both Stage3D and Group3D will have this property as true, as they are both container/group type concepts. This property is made to identify this object as a general concept of grouping/containing 3D elements, as opposed to identifying a certain class.
		* @var Stage3D#isGroup {Boolean}
		* @readonly
		* @default true
		**/
		this.isGroup = true;
		this.matrix = new Matrix3x3();
		this.transform3D = new Transform3D();
		
		// set the FPS private var
		this._FPS = fps;
		
		// set the autoRender private var and setter
		this._autoRender = false;
		this.autoRender = autoRend;
		
		// private
		this._orthographic = false;
		
		/**
		* An array that can be filled with effects objects. An effect object must have a `render` method that can take an argumen for the object.
		* @method Stage3D#effects
		**/
		this.effects = [];
	}
	
	/**
	* Sets whether this stage will render all of its children orthographically or not.
	* @note Renders the entire scene orthographically regardless of the settings of groups within the scene.
	* @var Stage3D#orthographic {Boolean}
	* @default false
	**/
	get orthographic(){ return this._orthographic; }
	set orthographic(v)
	{
		if (v != this._orthographic)
		{
			this._dirty = true;
			this._orthographic = v;
		}
	}
	
	/**
	* add allows objects to be added to this Stage3D. Note: Stage3D instances are meant to be roots of a 3D scene. Do not add a Stage3D to another type of group.
	* @method Stage3D#add
	* @arg {DisplayObject3D} - Any object that inherits from DisplayObject3D may be added.
	* @returns {DisplayObject3D} Returns this Stage3D object for chaining.
	**/
	add()
	{
		for (var i=0,ii=arguments.length; i<ii; i++)
		{
			var c = arguments[i];
		
			if (c instanceof Stage3D)
				throw new Error("::DOM3D:: You cannot add a Stage3D to a group!");
			
			if (!this.contains(c))
			{
				if (c.parent !== null)
					c.parent.remove(c);
				
				this.children.push(c);
				if (this.stage)
					this.stage.registerChild(c);
				c.parent = this;
				
				// add element to the right spot in actual DOM
				if (this.element !== c.element.parentElement)
					this.element.appendChild(c.element);
				
				// this engine requires block display and absolute positioning, enforce it here
				c.element.style.display = 'block';
				c.element.style.position = 'absolute';
			}
		}
		
		this.render(false);
		if (this.stage)
			this.stage.sort();
		
		return this;
	}
	
	/**
	* remove allows objects that were added via [add]{@link Stage3D#add} to be removed.
	* @method Stage3D#remove
	* @arg {DisplayObject3D} - Any object that inherits from DisplayObject3D and has been added may be removed.
	* @returns {Stage3D} Returns this Stage3D object for chaining purposes.
	**/
	remove()
	{
		for (var i=0,ii=arguments.length; i<ii; i++)
		{
			var c = arguments[i];
		
			var ind = this.children.indexOf(c);
			if (ind > -1)
			{
				this.children.splice(ind,1);
				if (this.stage)
					this.stage.unregisterChild(c);
				c.parent = null;
				
				// remove from actual DOM element
				c.element.remove();
			}
		}
		
		return this;
	}
	
	/**
	* contains allows you to check if a DisplayObject3D is contained (has been added via add) by the Stage3D
	* @method Stage3D#contains
	* @arg {DisplayObject3D} - The object to test for.
	* @returns {Boolean} Returns a Boolean value for whether the Stage3D contains the object or not.
	**/
	contains(c)
	{
		return this.children.indexOf(c) > -1;
	}
	
	get numChildren()
	{
		return this.children.length;
	}
	
	/**
	* getChildById allows you to get a child of the Stage3D by its id property (which, remember, will match the actual element's id attribute if it had one).
	* @method Stage3D#getChildById
	* @arg {String} - The String id to look for.
	* @returns {DisplayObject3D} Returns a the DisplayObject3D found if it is found. Returns null of none found.
	**/
	getChildById(s)
	{
		var i,ii;
		for (i=0,ii=this.children.length; i < ii; i++)
			if (this.children[i].id == s)
				return this.children[i];
		
		return null;
	}
	
	/**
	* getChildByElement allows you to get a child of the Stage3D by its associated HTML Element.
	* @method Stage3D#getChildByElement
	* @arg {HTMLElement} - The associated HTMLElement of the display object you're looking for.
	* @returns {DisplayObject3D} Returns a the DisplayObject3D found if it is found. Returns null of none found.
	**/
	getChildByElement(e)
	{
		var i,ii;
		for (i=0,ii=this.children.length; i < ii; i++)
			if (this.children[i].element == e)
				return this.children[i];
		
		return null;
	}
	
	// internal
	registerChild(c)
	{
		if (c.isGroup)
		{
			var i, ii, ch = c.children;
			c.setStage(this);
			for (i=0, ii=ch.length; i<ii; i++)
				this.registerChild(ch[i]);
		}
		else if (this.registeredChildren.indexOf(c) == -1)
		{
			this.registeredChildren.push(c);
			c.setStage(this);
		}
	}
	
	// internal
	unregisterChild(c)
	{
		var ind = this.registeredChildren.indexOf(c);
		if (c.isGroup)
		{
			var i, ii, ch = c.children;
			for (i=0, ii=ch.length; i<ii; i++)
				this.unregisterChild(ch[i]);
		}
		else if (ind > -1)
		{
			this.registeredChildren.splice(ind,1);
			c.setStage(null);
		}
	}
	
	/**
	* This method must be called in order for the Stage3D instance to update every time something changes. Normally you let the stage autoRender, which will update 30 fps by default. However, you can turn autoRender off and update manually.
	* @method Stage3D#update
	* @returns {Boolean} Returns true if the update happened, false if it was cancelled on the update event.
	**/
	update()
	{
		var cont = this.element.dispatchEvent(new StageEvent(StageEvent.UPDATE));
		if (!cont)
			return false;
		
		this.render();
		this.sort();
		
		this.element.dispatchEvent(new StageEvent(StageEvent.AFTER_UPDATE));
		return true;
	}
	
	// internal
	render(forceUpdate = false)
	{
		var i,ii;
		for (i=0,ii=this.children.length; i < ii; i++)
			this.children[i].render(forceUpdate);
	}
	
	// internal
	sort()
	{
		var i, obj, sZ = this.lowestZIndex;
		
		this.registeredChildren.sort(function(a,b){ return b.transform3D.concatenatedCoordinates.z - a.transform3D.concatenatedCoordinates.z; });
		
		for (i=this.registeredChildren.length-1; i > -1; i--)
			this.registeredChildren[i].element.style.zIndex = sZ++;
	}
	
	/**
	* Allows you to turn off/on autoRender. If false then you must tell the scene to update manually via the update method.
	* @var Stage3D#autoRender {Boolean}
	* @default true
	**/
	get autoRender(){ return this._autoRender; }
	set autoRender(v)
	{
		// if already that way do nothing
		if (v === this._autoRender)
			return;
		
		// if turning it on
		if (v) {
			var boundUpdate = this.update.bind(this);
			this.updateInterval = setInterval(boundUpdate, 1000/this._FPS);
			setTimeout(boundUpdate, 1);	
		}
		// if turning it off
		else {
			if (this.updateInterval)
				clearInterval(this.updateInterval);
		}
		
		// update private var
		this._autoRender = v;
	}
	
	/**
	* Allows you to determine the rate at which the scene updates during autoRender.
	* @var Stage3D#FPS {Number}
	* @default 30
	**/
	get FPS(){ return this._FPS; }
	set FPS(v)
	{
		// if already that way do nothing
		if (v === this._FPS)
			return;
		
		// it's different, so set new val
		this._FPS = v;
		
		// if not auto-rendering then no need to do anything else
		if (!this._autoRender)
			return;
		
		// otherwise we need to reset the auto-rendering
		this.autoRender = false;
		this.autoRender = true;
	}
}
