
/**
	Serves the purpose of testing that the export API is working as intended.
*/

import {assert} from 'chai';
import dom3d from '../src/dom3d';
import {spread} from '../src/dom3d';
import {Stage3D} from '../src/dom3d';
import {Group3D} from '../src/dom3d';
import {Element3D} from '../src/dom3d';
import {PaperElement3D} from '../src/dom3d';
import {Point3D} from '../src/dom3d';
import {Matrix3x3} from '../src/dom3d';
import {EulerAngle} from '../src/dom3d';
import {Quaternion} from '../src/dom3d';
import {Transform3D} from '../src/dom3d';
import {StageEvent} from '../src/dom3d';
import {DepthOfField} from '../src/dom3d';
	
describe('External API:', function()
{
	it("spread", function()
	{
		assert.equal(typeof dom3d.spread, 'function');
		assert.equal(typeof spread, 'function');
	})
	
	it("Stage3D", function()
	{
		assert.equal(typeof dom3d.Stage3D, 'function');
		assert.equal(typeof Stage3D, 'function');
	})
	
	it("Group3D", function()
	{
		assert.equal(typeof dom3d.Group3D, 'function');
		assert.equal(typeof Group3D, 'function');
	})
	
	it("Element3D", function()
	{
		assert.equal(typeof dom3d.Element3D, 'function');
		assert.equal(typeof Element3D, 'function');
	})
	
	it("PaperElement3D", function()
	{
		assert.equal(typeof dom3d.PaperElement3D, 'function');
		assert.equal(typeof PaperElement3D, 'function');
	})
	
	// -----------------------------------------------------------------
	
	it("Point3D", function()
	{
		assert.equal(typeof dom3d.Point3D, 'function');
		assert.equal(typeof Point3D, 'function');
	})
	
	it("Matrix3x3", function()
	{
		assert.equal(typeof dom3d.Matrix3x3, 'function');
		assert.equal(typeof Matrix3x3, 'function');
	})
	
	it("EulerAngle", function()
	{
		assert.equal(typeof dom3d.EulerAngle, 'function');
		assert.equal(typeof EulerAngle, 'function');
	})
	
	it("Quaternion", function()
	{
		assert.equal(typeof dom3d.Quaternion, 'function');
		assert.equal(typeof Quaternion, 'function');
	})
	
	it("Transform3D", function()
	{
		assert.equal(typeof dom3d.Transform3D, 'function');
		assert.equal(typeof Transform3D, 'function');
	})
	
	// ----------------------------------------------------------------
	
	it("StageEvent", function()
	{
		assert.equal(typeof dom3d.StageEvent, 'function');
		assert.equal(typeof StageEvent, 'function');
	})
	
	// ----------------------------------------------------------------
	
	it("DepthOfField", function()
	{
		assert.equal(typeof dom3d.DepthOfField, 'function');
		assert.equal(typeof DepthOfField, 'function');
	})
})
