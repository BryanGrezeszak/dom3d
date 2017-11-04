
/**
	Checks functionality within the adding/removing/etc. of the display list.
*/

import {assert} from 'chai';
import dom3d from '../src/dom3d';
import {Stage3D} from '../src/dom3d';
import {Group3D} from '../src/dom3d';
import {Element3D} from '../src/dom3d';
import {PaperElement3D} from '../src/dom3d';

describe('Display List:', function()
{
	var stage, element1, group1, group2;
	
	describe('Stage3D Manipulations:', function()
	{
		it("Creating Stage3D...", function()
		{
			stage = new Stage3D('<div></div>', false);
		})
		
		it("Adding Element3D...", function()
		{
			element1 = new Element3D('<div id="element1"></div>');
			stage.add(element1);
			assert.include(stage.children, element1);
		})
		
		it("Adding Element3D again shouldn't error.", function()
		{
			stage.add(element1);
		})
		
		it("Checking Stage3D contains.", function()
		{
			var contains = stage.contains(element1);
			assert.equal(contains, true);
			assert.equal(typeof contains, 'boolean');
		})
		
		it("Checking Stage3D numChildren.", function()
		{
			assert.equal(stage.numChildren, 1);
		})
		
		it("Checking Stage3D getChildById.", function()
		{
			var elem = stage.getChildById('element1');
			assert.equal(elem, element1);
		})
		
		it("Checking Stage3D getChildByElement.", function()
		{
			var elem = stage.getChildByElement(element1.element);
			assert.equal(elem, element1);
		})
		
		it("Checking Element3D has stage and parent references correct.", function()
		{
			assert.equal(element1.stage, stage);
			assert.equal(element1.parent, stage);
		})
		
		it("Removing Element3D...", function()
		{
			stage.remove(element1);
			assert.notInclude(stage.children, element1);
		})
		
		it("Removing Element3D that's not actually contained shouldn't error.", function()
		{
			stage.remove(element1);
		})
		
		it("Removing Element3D should remove stage and parent references.", function()
		{
			assert.equal(element1.stage, null);
			assert.equal(element1.parent, null);
		})
	})
	
	// should be completely clean again before moving on, nothing contains anything

	describe('Group3D Manipulations:', function()
	{
		it("Creating/Adding Group3D...", function()
		{
			group1 = new Group3D();
			stage.add(group1);
			assert.include(stage.children, group1);
		})
		
		it("Adding Element3D...", function()
		{
			element1 = new Element3D('<div id="element1"></div>');
			group1.add(element1);
			assert.include(group1.children, element1);
		})
		
		it("Adding Element3D again shouldn't error.", function()
		{
			group1.add(element1);
		})
		
		it("Checking Group3D contains.", function()
		{
			var contains = group1.contains(element1);
			assert.equal(contains, true);
			assert.equal(typeof contains, 'boolean');
		})
		
		it("Checking Group3D numChildren.", function()
		{
			assert.equal(group1.numChildren, 1);
		})
		
		it("Checking Group3D getChildById.", function()
		{
			var elem = group1.getChildById('element1');
			assert.equal(elem, element1);
		})
		
		it("Checking Group3D getChildByElement.", function()
		{
			var elem = group1.getChildByElement(element1.element);
			assert.equal(elem, element1);
		})
		
		it("Checking Element3D has stage and parent references correct.", function()
		{
			assert.equal(element1.stage, stage);
			assert.equal(element1.parent, group1);
		})
		
		it("Removing Element3D...", function()
		{
			group1.remove(element1);
			assert.notInclude(group1.children, element1);
		})
		
		it("Removing Element3D that's not actually contained shouldn't error.", function()
		{
			group1.remove(element1);
		})
		
		it("Removing Element3D should remove stage and parent references.", function()
		{
			assert.equal(element1.stage, null);
			assert.equal(element1.parent, null);
		})
		
		it("Removing Group3D...", function()
		{
			stage.remove(group1);
			assert.notInclude(stage.children, group1);
		})
	})
	
	// should be completely clean again before moving on, nothing contains anything
	
	describe('Complex Manipulations:', function()
	{
		it("Adding group that already has children should work.", function()
		{
			group1.add(element1);
			stage.add(group1);
			
			assert.include(stage.children, group1);
			assert.include(group1.children, element1);
			assert.equal(stage.numChildren, 1);
			assert.equal(group1.numChildren, 1);
			assert.equal(element1.parent, group1);
			assert.equal(element1.stage, stage);
			assert.equal(group1.parent, stage);
			assert.equal(group1.stage, stage);
			
			group1.remove(element1);
			stage.remove(group1);
		})
		
		it("Adding to new parent removes from old parent (Stage3D -> Group3D).", function()
		{
			stage.add(group1);
			stage.add(element1);
			group1.add(element1);
			
			assert.include(stage.children, group1);
			assert.include(group1.children, element1);
			assert.equal(stage.numChildren, 1);
			assert.equal(group1.numChildren, 1);
			assert.equal(element1.parent, group1);
			assert.equal(element1.stage, stage);
			assert.equal(group1.parent, stage);
			assert.equal(group1.stage, stage);
			
			group1.remove(element1);
			stage.remove(group1);
		})
		
		it("Adding to new parent removes from old parent (Group3D -> Stage3D).", function()
		{
			stage.add(group1);
			group1.add(element1);
			stage.add(element1);
			
			assert.include(stage.children, group1);
			assert.include(stage.children, element1);
			assert.equal(stage.numChildren, 2);
			assert.equal(group1.numChildren, 0);
			assert.equal(element1.parent, stage);
			assert.equal(element1.stage, stage);
			assert.equal(group1.parent, stage);
			assert.equal(group1.stage, stage);
			
			stage.remove(element1);
			stage.remove(group1);
		})
		
		it("Adding to new parent removes from old parent (Group3D -> Group3D).", function()
		{
			group2 = new Group3D();
			
			stage.add(group1, group2);
			group1.add(element1);
			group2.add(element1);
			
			assert.include(group2.children, element1);
			assert.equal(stage.numChildren, 2);
			assert.equal(group1.numChildren, 0);
			assert.equal(group2.numChildren, 1);
			assert.equal(element1.parent, group2);
			assert.equal(element1.stage, stage);
			
			stage.remove(group1, group2);
			group2.remove(element1);
		})
		
		it("Removing Group3D with children should remove stage refs from them.", function()
		{
			stage.add(group1);
			group1.add(element1);
			
			assert.equal(element1.stage, stage);
			
			stage.remove(group1);
			
			assert.equal(element1.stage, null);
			
			stage.remove(group1);
		})
	})
})
