	
// tests for compatibility and figuring out which CSS props to set

var index = 0;

var possible_transform = [
	'transform',
	'WebkitTransform',
	'msTransform',
	'MozTransform',
	'OTransform'
];

var possible_transform_origin = [
	'transformOrigin',
	'WebkitTransformOrigin',
	'msTransformOrigin',
	'MozTransformOrigin',
	'OTransformOrigin'
];

var possible_perspective = [
	'perspective',
	'WebkitPerspective',
	'msPerspective',
	'MozPerspective',
	'OPerspective'
];

var possible_perspective_origin = [
	'perspectiveOrigin',
	'WebkitPerspectiveOrigin',
	'msPerspectiveOrigin',
	'MozPerspectiveOrigin',
	'OPerspectiveOrigin'
];

try
{
	var p;
	var n = document.createElement('div');
	for (var i=0,ii=possible_transform.length; i<ii; i++) {
		p = possible_transform[i];
		if (typeof n.style[p] !== 'undefined') {
			index = i;
			break;
		}
	}
}
catch(e) {}

var PropNames = {
	'transform': possible_transform[index],
	'transformOrigin': possible_transform_origin[index],
	'perspective': possible_perspective[index],
	'perspectiveOrigin': possible_perspective_origin[index],
}

export default PropNames;
