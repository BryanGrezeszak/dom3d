
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

function spread(obj, includeGeom = false)
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
}

// export in format that supports syntax: `var dom3d = require('dom3d');` and `import {Stage3D} from 'dom3d';`
export {
	spread,
	
	DisplayObject3D,
	Stage3D,
	Group3D,
	Element3D,
	PaperElement3D,
	
	Point3D,
	Matrix3x3,
	EulerAngle,
	Quaternion,
	Transform3D,
	
	StageEvent,
	
	DepthOfField,
}

// export in format that supports syntax: `import dom3d from 'dom3d';`
Object.defineProperty(exports, "default", {
	get: function() {
		return exports;
	}
});

// if is in browser environment then add dom3d to window
if (typeof window !== 'undefined')
{
	window.dom3d = {spread:spread};
	spread(window.dom3d, true);
}
