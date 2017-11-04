
import {TO_DEG} from '../utils/MathUtils';

export default class CalculatedInfo
{
	constructor(obj) {
		Object.defineProperty(this, 'reference', {enumerable:false, value:obj});
	}
	
	get x() {
		return this.reference.transform3D.concatenatedCoordinates.x;
	}
	
	get y() {
		return this.reference.transform3D.concatenatedCoordinates.y;
	}
	
	get z() {
		return this.reference.transform3D.concatenatedCoordinates.z;
	}
	
	get rotX() {
		return this.reference.transform3D.concatenatedEulerAngle.psi * TO_DEG;
	}
	
	get rotY() {
		return this.reference.transform3D.concatenatedEulerAngle.theta * TO_DEG;
	}
	
	get rotZ() {
		return this.reference.transform3D.concatenatedEulerAngle.phi * TO_DEG;
	}
	
	toString() {
		return `{x:${this.x}, y:${this.y}, z:${this.z}, rotX:${this.rotX}, rotY:${this.rotY}, rotZ:${this.rotZ}}`;
	}
}
