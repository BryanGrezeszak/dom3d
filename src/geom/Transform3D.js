
import Point3D    from './Point3D';
import Quaternion from './Quaternion';
import EulerAngle from './EulerAngle';

export default class Transform3D
{
	/**
	The Transform3D instance's coordinates property is used for storing local coordinate data for calculations.
	@var Transform3D#coordinates {Point3D}
	@public
	**/
	/**
	The Transform3D instance's concatenatedCoordinates property is used for storing global coordinate data for calculations.
	@var Transform3D#concatenatedCoordinates {Point3D}
	@public
	**/
	/**
	The Transform3D instance's quaternion property is used for storing local quaternion based rotational data for calculations.
	@var Transform3D#quaternion {Quaternion}
	@public
	**/
	/**
	The Transform3D instance's concatenatedQuaterion property is used for storing global quaternion based rotational data for calculations.
	@var Transform3D#concatenatedQuaternion {Quaternion}
	@public
	**/
	/**
	The Transform3D instance's eulerAngle property is used for storing local euler angle based rotational data for calculations.
	@var Transform3D#eulerAngle {EulerAngle}
	@public
	**/
	/**
	The Transform3D instance's concatenatedEulerAngle property is used for storing global euler angle based rotational data for calculations.
	@var Transform3D#concatenatedEulerAngle {EulerAngle}
	@public
	**/
	
	/**
	Each {@link DisplayObject} has a [transform3D]{@link DisplayObject3D#transform3D} property which is an instances of the Transform3D class. It holds properties for the coordinate and rotationsl data of the object in both local and world/global forms.
	@class Transform3D
	**/
	constructor()
	{
		this.coordinates = new Point3D();
		this.concatenatedCoordinates = new Point3D();
		this.quaternion = new Quaternion();
		this.concatenatedQuaternion = new Quaternion();
		this.eulerAngle = new EulerAngle();
		this.concatenatedEulerAngle = new EulerAngle();
	}
	
	/**
	This method is a shortcut used to copy the concatenated coordinate and rotational data from one Transform3D instance to another.
	@method Transform3D#copyConcatenated
	@public
	@arg {Transform3D} t - The Transform3D to copy data from.
	**/
	copyConcatenated(t)
	{
		this.concatenatedCoordinates.copy( t.concatenatedCoordinates );
		this.concatenatedQuaternion.copy( t.concatenatedQuaternion );
		this.concatenatedEulerAngle.copy( t.concatenatedEulerAngle );
	}
	
	/**
	This method is a shortcut used to copy the inverted concatenated coordinate and rotational data from one Transform3D instance to another.
	@method Transform3D#copyInverseConcatenated
	@public
	@arg {Transform3D} t - The Transform3D to copy inverse data from.
	**/
	copyInverseConcatenated(t)
	{
		this.concatenatedCoordinates.copyInverse( t.concatenatedCoordinates );
		this.concatenatedQuaternion.copyInverse( t.concatenatedQuaternion );
		this.concatenatedEulerAngle.updateFromQuaternion( concatenatedQuaternion );
	}
	
	/**
	This method is a shortcut used to copy the local coordinate and rotational data from one Transform3D instance to another.
	@method Transform3D#copyLocal
	@public
	@arg {Transform3D} t - The Transform3D to copy data from.
	**/
	copyLocal(t)
	{
		this.coordinates.copy( t.coordinates );
		this.quaternion.copy( t.quaternion );
		this.eulerAngle.copy( t.eulerAngle );
	}
	
	/**
	A shortcut to copy the local and global coordinate and rotational data from one Transform3D instance to another.
	@method Transform3D#copy
	@public
	@arg {Transform3D} t - The Transform3D to copy data from.
	**/
	copy(t)
	{
		this.coordinates.copy( t.coordinates );
		this.concatenatedCoordinates.copy( t.concatenatedCoordinates );
		this.quaternion.copy( t.quaternion );
		this.concatenatedQuaternion.copy( t.concatenatedQuaternion );
		this.eulerAngle.copy( t.eulerAngle );
		this.concatenatedEulerAngle.copy( t.concatenatedEulerAngle );
	}
	
	/**
	A shortcut to zero out all transforms.
	@method Transform3D#zero
	@public
	**/
	zero()
	{
		this.coordinates.zero();
		this.concatenatedCoordinates.zero();
		this.quaternion.zero();
		this.concatenatedQuaternion.zero();
		this.eulerAngle.zero();
		this.concatenatedEulerAngle.zero();
	}
	
	/**
	Returns a String representation of all of the Transform3D instance's properties' values. Can be a bit verbose.
	@method Transform3D#toString
	@public
	@returns {String} Returns a string with an object notation form of the entire Transform3D.
	**/
	toString()
	{
		return (
`local coordinates: ${this.coordinates.toString()}
world coordinates: ${this.concatenatedCoordinates.toString()}
local quaternion : ${this.quaternion.toString()}
world quaternion : ${this.concatenatedQuaternion.toString()}
local euler angle: ${this.eulerAngle.toString()}
world euler angle: ${this.concatenatedEulerAngle.toString()}`
		)
	}
}
