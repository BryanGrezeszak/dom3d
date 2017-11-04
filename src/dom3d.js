
import DisplayObject3D from './DisplayObject3D';
import Stage3D from './Stage3D';
import Group3D from './Group3D';
import Element3D from './Element3D';
import PaperElement3D from './PaperElement3D';
import Point3D from './geom/Point3D';
import Matrix3x3 from './geom/Matrix3x3';
import EulerAngle from './geom/EulerAngle';
import Quaternion from './geom/Quaternion';
import Transform3D from './geom/Transform3D';
import StageEvent from './events/StageEvent';
import DepthOfField from './effects/DepthOfField';

var dom3d = {
	spread,
	DisplayObject3D,
	Stage3D,
	Group3D,
	Element3D,
	PaperElement3D,
	StageEvent,
	DepthOfField,
	Point3D,
	Matrix3x3,
	EulerAngle,
	Quaternion,
	Transform3D,
}
module.exports = dom3d;

// if is in browser environment then add dom3d to window
if (typeof window !== 'undefined')
{
	window.dom3d = {};
	spread(window.dom3d, true, true);
}

// spread util
function spread(obj, includeGeom = false, includeSpread = false)
{
	if (!obj)
		obj = window;
	
	obj.DisplayObject3D = DisplayObject3D;
	obj.Stage3D = Stage3D;
	obj.Group3D = Group3D;
	obj.Element3D = Element3D;
	obj.PaperElement3D = PaperElement3D;
	
	obj.StageEvent = StageEvent;
	
	obj.DepthOfField = DepthOfField;
	
	if (includeGeom)
	{
		obj.Point3D = Point3D;
		obj.Matrix3x3 = Matrix3x3;
		obj.EulerAngle = EulerAngle;
		obj.Quaternion = Quaternion;
		obj.Transform3D = Transform3D;
	}
	
	if (includeSpread)
	{
		obj.spread = spread;
	}
}
