import {assert} from 'chai';
import dom3d from '../src/dom3d';
import {Stage3D} from '../src/dom3d';
import {Group3D} from '../src/dom3d';
import {Element3D} from '../src/dom3d';

// there's floating point errors in this, so round to nearest 1000th
// when comparing the numbers or else they might be off just from that
var fix = num => Math.round(num * 1000) / 1000;

describe('Forward Kinematics Tests:', function()
{
	var stage = new Stage3D('<div></div>', false);
	var group1 = new Group3D();
	var group2 = new Group3D();
	var e1 = new Element3D();
	var e2 = new Element3D();
	var e3 = new Element3D();
	var e4 = new Element3D();
	var e5 = new Element3D();
	var e6 = new Element3D();
	var e7 = new Element3D();
	
	stage.add(group1);
	group1.add(group2);
	group2.add(e1, e2, e3, e4, e5, e6, e7);
	
	e2.x = 50;
	e3.x = -50;
	e4.y = 50;
	e5.y = -50;
	e6.z = 50;
	e7.z = -50;
	
	it(`Simple X Axis Rotation`, function()
	{
		group2.rotX = 90;
		stage.update();
		
		test(e1, 0, 0, 0);
		test(e2, 50, 0, 0);
		test(e3, -50, 0, 0);
		test(e4, 0, 0, 50);
		test(e5, 0, 0, -50);
		test(e6, 0, -50, 0);
		test(e7, 0, 50, 0);
		
		group2.rotX = 0;
	})
	
	it(`Simple Y Axis Rotation`, function()
	{
		group2.rotY = -90;
		stage.update();
		
		test(e1, 0, 0, 0);
		test(e2, 0, 0, 50);
		test(e3, 0, 0, -50);
		test(e4, 0, 50, 0);
		test(e5, 0, -50, 0);
		test(e6, -50, 0, 0);
		test(e7, 50, 0, 0);
		
		group2.rotY = 0;
	})
	
	it(`Simple Z Axis Rotation`, function()
	{
		group2.rotZ = 90;
		stage.update();
		
		test(e1, 0, 0, 0);
		test(e2, 0, 50, 0);
		test(e3, 0, -50, 0);
		test(e4, -50, 0, 0);
		test(e5, 50, 0, 0);
		test(e6, 0, 0, 50);
		test(e7, 0, 0, -50);
		
		group2.rotY = 0;
	})
	
	it(`Complex ZYX Rotation`, function()
	{
		group2.rotZ = 90;
		group1.rotX = 90;
		group2.rotY = 90;
		group1.rotY = 90;
		stage.update();
		
		test(e1, 0, 0, 0);
		test(e2, 0, 50, 0);
		test(e3, 0, -50, 0);
		test(e4, 0, 0, 50);
		test(e5, 0, 0, -50);
		test(e6, 50, 0, 0);
		test(e7, -50, 0, 0);
		
		group2.rotY = 0;
	})
	
	function test(elem, x, y, z) {
		assert.equal(fix(elem.calc.x), x);
		assert.equal(fix(elem.calc.y), y);
		assert.equal(fix(elem.calc.z), z);
	}
	
	// Utility to write out the tests to add new one
	// just set/update the rotations, then call writeTest(),
	// and it will log out the 7 test calls. Then you may add
	// the test to prevent those results from regressing.
	function writeTest() {
		console.log(`
test(e1, ${fix(e1.calc.x)}, ${fix(e1.calc.y)}, ${fix(e1.calc.z)});
test(e2, ${fix(e2.calc.x)}, ${fix(e2.calc.y)}, ${fix(e2.calc.z)});
test(e3, ${fix(e3.calc.x)}, ${fix(e3.calc.y)}, ${fix(e3.calc.z)});
test(e4, ${fix(e4.calc.x)}, ${fix(e4.calc.y)}, ${fix(e4.calc.z)});
test(e5, ${fix(e5.calc.x)}, ${fix(e5.calc.y)}, ${fix(e5.calc.z)});
test(e6, ${fix(e6.calc.x)}, ${fix(e6.calc.y)}, ${fix(e6.calc.z)});
test(e7, ${fix(e7.calc.x)}, ${fix(e7.calc.y)}, ${fix(e7.calc.z)});
		`);
	}
})
