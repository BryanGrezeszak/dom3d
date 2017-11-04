
import DisplayObject3D from './DisplayObject3D';
import Stage3D from './Stage3D';
import Matrix3x3 from './geom/Matrix3x3';
import Transform3D from './geom/Transform3D';
import determineElement from './utils/determineElement';
	
export default class Group3D extends DisplayObject3D
{
	/**
	* The Group3D class acts as a container for 3D based elements. Any 3D elements inside a Group3D will move and rotate as the Group3D does in a forward kinematic fashion. Group3D instances can also contain other Group3D instances and create infinitely deep forward kinematics.
	* @class Group3D
	* @extends DisplayObject3D
	* @arg element - An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	**/
	constructor(_el)
	{
		super();
		
		this.element = determineElement(_el);
		this.id = this.element.hasAttribute('id') ? this.element.attributes.id.value : 'group_'+(DisplayObject3D.idCount++);
		this.element.dom3dObject = this;
		
		this.matrix = new Matrix3x3();
		this.transform3D = new Transform3D();
		
		// private
		this._orthographic = false;
		
		/**
		* Allows access to the Array of child objects for this container. Special care should be taken when accessing to not modify the original Array.
		* @var Group3D#children {Array}
		* @readonly
		* @default [empty Array]
		**/
		this.children = [];
		
		/**
		* A Group3D will have an isGroup property of true for identification purposes. Stage3D instances will also have it. This serves to identify the object as the general concept of a 3D group/container, as opposed to identifying it as a specific Group3D class instance.
		* @var Group3D#isGroup {Boolean}
		* @readonly
		* @default true
		**/
		this.isGroup = true;
	}
	
	/**
	* add allows objects to be added to this Group3D. Note: likewise, a Group3D instance is added to another Group3D or to the {@link Stage3D} via those instances' `add` methods as well.
	* @method Group3D#add
	* @arg {DisplayObject3D} - Any object that inherits from DisplayObject3D may be added.
	* @returns {DisplayObject3D} Returns this Group3D object for chaining.
	**/
	add()
	{
		for (var i=0,ii=arguments.length; i<ii; i++)
		{
			var c = arguments[i];
			
			if (c === this)
				throw new Error("::DOM3D:: You cannot add a 3D group to itself!");
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
		
		if (this.stage) {
			this.render(false);
			this.stage.sort();
		}
		
		return this;
	}
	
	/**
	* remove allows objects that were added via [add]{@link Group3D#add} to be removed.
	* @method Group3D#remove
	* @arg {DisplayObject3D} - Any object that inherits from DisplayObject3D and has been added may be removed.
	* @returns {Group3D} Returns this Group3D object for chaining purposes.
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
				
				// take element out of DOM
				c.element.remove();
			}
		}
		
		return this;
	}
	
	/**
	* contains allows you to check if a DisplayObject3D is contained (has been added via add) by the Group3D
	* @method Group3D#contains
	* @arg {DisplayObject3D} - The object to test for.
	* @returns {Boolean} Returns a Boolean value for whether the Group3D contains the object or not.
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
	* getChildById allows you to get a child of the Group3D by its id property (which, remember, will match the actual element's id attribute if it had one).
	* @method Group3D#getChildById
	* @arg {String} - The String id to look for.
	* @returns {DisplayObject3D} Returns a the DisplayObject3D found if it is found. Returns null of none found.
	**/
	getChildById(s)
	{
		var i,ii;
		for (i=0,ii=this.children.length; i < ii; i++)
			if (this.children[i].id === s)
				return this.children[i];
		
		return null;
	}
	
	/**
	* getChildByElement allows you to get a child of the Group3D by its associated HTML Element.
	* @method Group3D#getChildByElement
	* @arg {HTMLElement} - The associated HTMLElement of the display object you're looking for.
	* @returns {DisplayObject3D} Returns a the DisplayObject3D found if it is found. Returns null of none found.
	**/
	getChildByElement(e)
	{
		var i,ii;
		for (i=0,ii=this.children.length; i < ii; i++)
			if (this.children[i].element === e)
				return this.children[i];
		
		return null;
	}
	
	/**
	* Sets whether this group will render its direct children orthographically or not. Important for the rendering of primitive shapes, because otherwise edge geometry is not precise with neighboring elements.
	* @note If a group's orthographic property is set to true, then any groups it contains should also be set to true.
	* @var Group3D#orthographic {Boolean}
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
	
	render(pDirty)
	{
		var i,ii;
		if (!this._dirty && !pDirty)
		{
			// give any child groups a chance to update even if this isn't dirty
			for (i=0,ii=this.children.length; i < ii; i++)
				this.children[i].render(false);
			
			return;
		}
		
		this.updateWorld();
		this.rotateCoords();
		
		for (i=0,ii=this.children.length; i < ii; i++)
			this.children[i].render(pDirty || this._dirty);
		
		this._dirty = false;
	}
}
