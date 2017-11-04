
import DisplayObject3D from './DisplayObject3D';
import Matrix3x3 from './geom/Matrix3x3';
import Transform3D from './geom/Transform3D';
import determineElement from './utils/determineElement';
	
export default class PaperElement3D extends DisplayObject3D
{
	/**
	* The PaperElement3D class is a type of Element3D which is meant to hold 2 child DOM elements which represent a front and a back which show depending on which way the object is facing in 3D space. Basically a 2 sided element.
	* <br><br>
	* When assigned an element via the constructor any direct child elements with the class names <code>dom3d-front</code> and <code>dom3d-back</code> will automatically be set up as the object's front and back. If no front/back are given in the constructor, or present as <code>dom3d-front</code> and <code>dom3d-back</code> classed children in the main element, then elements will be created automatically.
	* @class PaperElement3D
	* @extends DisplayObject3D
	* @arg element - An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	* @arg [front] - An optional argument identifying an HTML Element that is meant to be this object's front side. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	* @arg [back] - An optional argument identifying an HTML Element that is meant to be this object's back side. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	**/
	constructor(_el, _fel, _bel)
	{
		super();
		
		/**
		* Set to an HTML Element child of this one which will show when its front is facing forward.
		* @var PaperElement3D#front {HTMLElement}
		* @default null
		**/
		this.front = null;
		/**
		* Set to an HTML Element child of this one which will show when its back is facing forward.
		* @var PaperElement3D#back {HTMLElement}
		* @default null
		**/
		this.back = null;
		/**
		* Used to read whether the object considers itself front-facing at the moment.
		* @var PaperElement3D#frontFacing {Boolean}
		* @readonly
		* @default true
		**/
		this.frontFacing = true;
		
		this.element = determineElement(_el);
		this.id = this.element.hasAttribute('id') ? this.element.attributes.id.value : 'paperelement_'+(DisplayObject3D.idCount++);
		this.element.dom3dObject = this;
		
		var _f, _b;
		if (document.querySelector)
		{
			_f = this.element.querySelector('.dom3d-front');
			_b = this.element.querySelector('.dom3d-back');
		}
		var determined_fel = determineElement(_fel || _f);
		var determined_bel = determineElement(_bel || _b);
		this.front = determined_fel;
		this.back = determined_bel;
		this.front.style.position = 'absolute';
		this.back.style.position = 'absolute';
		this.element.appendChild(this.front);
		this.element.appendChild(this.back);
		
		this.transformMatrix = new Matrix3x3();
		this.transform3D = new Transform3D();
		
		// points for calculating winding
		var self = this;
		this.p1 = buildPoint(0,0);
		this.p2 = buildPoint(100,0);
		this.p3 = buildPoint(0,100);
		function buildPoint(x, y)
		{
			var p = document.createElement('div');
			p.style.position = 'absolute';
			p.style.top = y+'px';
			p.style.left = x+'px';
			self.element.appendChild(p);
			return p;
		}
	}
	
	render(pDirty)
	{
		if (!this._dirty && !pDirty)
			return;
		
		this.updateWorld();
		this.rotateCoords();
		this.rotateObject();
		this.renderObject();
		
		this._dirty = false;
		
		this.determineFace();
	}
	
	determineFace()
	{
		var p1rect = this.p1.getBoundingClientRect();
		var p2rect = this.p2.getBoundingClientRect();
		var p3rect = this.p3.getBoundingClientRect();
		var p1x = p1rect.left;
		var p1y = p1rect.top;
		var p2x = p2rect.left;
		var p2y = p2rect.top;
		var p3x = p3rect.left;
		var p3y = p3rect.top;
		
		this.frontFacing = ((p2x-p1x)*(p3y-p1y) - (p2y-p1y)*(p3x-p1x)) > 0;
		
		if (this.back) {
			this.back.style.visibility = this.frontFacing ? 'hidden' : 'visible';
			this.back.style.pointerEvents = this.frontFacing ? 'none' : '';
		}
		if (this.front) {
			this.front.style.visibility = this.frontFacing ? 'visible' : 'hidden';
			this.front.style.pointerEvents = this.frontFacing ? '' : 'none';
		}
	}
}