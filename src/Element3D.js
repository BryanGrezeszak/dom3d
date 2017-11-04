
import DisplayObject3D from './DisplayObject3D';
import Matrix3x3 from './geom/Matrix3x3';
import Transform3D from './geom/Transform3D';
import determineElement from './utils/determineElement';
	
export default class Element3D extends DisplayObject3D
{
	/**
	* The Element3D class is simply a 3D plane in the scene. Any DOM elements it contains will be part of that 2D plane, not their own 3D objects.
	* @class Element3D
	* @extends DisplayObject3D
	* @arg element - An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	**/
	constructor(_el)
	{
		super();
		
		this.element = determineElement(_el);
		this.id = this.element.hasAttribute('id') ? this.element.attributes.id.value : 'element_'+(DisplayObject3D.idCount++);
		this.element.dom3dObject = this;
		
		/**
		* Allows locking of the Element3D facing forward at all times if set to true, regardless or local or global rotation. Can be set to true automatically by a scene made in the DOM by including a CSS class of "dom3d-lockfacingfront" on the Element3D element.
		* @var Element3D#lockFacingFront {Boolean}
		* @default false
		**/
		this.lockFacingFront = false;
		
		this.transformMatrix = new Matrix3x3();
		this.transform3D = new Transform3D();
	}
	
	render(pDirty)
	{
		if (!this._dirty && !pDirty)
			return;
		this._dirty = false;
		
		this.updateWorld();
		this.rotateCoords();
		if (!this.lockFacingFront)
			this.rotateObject();
		else
			this.transformMatrix.zero();
		this.renderObject();
	}
}