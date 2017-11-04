import {assert} from 'chai';
import dom3d from '../src/dom3d';
import {Stage3D} from '../src/dom3d';
import {Group3D} from '../src/dom3d';
import {Element3D} from '../src/dom3d';
import {PaperElement3D} from '../src/dom3d';

describe('Z-Sorting Tests:', function()
{
	var x = 10; // seed of 10 results in no duplicate numbers in range(-500,500) for the amount of times we run it
	function random() {
		x ^= (x << 21);
		x ^= (x >>> 35);
		x ^= (x << 4);
		return (x + 2147483650) / 4294967300;
	}
	function range(min, max) {
		return Math.floor(random() * (max - min)) + min;
	}
	
	var stage = new Stage3D('<div></div>', false);
	var element1 = new Element3D();
	var element2 = new Element3D();
	var element3 = new Element3D();
	var element4 = new Element3D();
	var element5 = new Element3D();
	var element6 = new Element3D();
	var element7 = new Element3D();
	var element8 = new Element3D();
	var element9 = new Element3D();
	
	describe('Accuracy Tests:', function()
	{
		for (var i=1; i<10; i++)
		{
			it(`Accuracy Test ${i}.`, function()
			{
				stage.add(element1, element2, element3, element4, element5, element6, element7, element8, element9);
				
				// give random z values to all children
				stage.children.map((elem)=>
				{
					elem.z = range(-500, 500);
				})
				
				// now render to get the z-sort effect
				stage.update();
				
				// now test that ever child is correct compared to every other
				stage.children.map((elem1, ind1)=>
				{
					stage.children.map((elem2, ind2)=>
					{
						// skip same, and ignore same z value, since we don't care how it sorts them for this test
						if (ind1 === ind2 || elem1.z === elem2.z)
							return;
						
						var elem1ZIndex = parseInt(elem1.style.zIndex);
						var elem2ZIndex = parseInt(elem2.style.zIndex);
						var elem1ZHigher = elem1.z > elem2.z;
						var elem1ZIndexHigher = elem1ZIndex > elem2ZIndex;
						
						// should all have a valid integer z-index, and if the z is higher, the z index should be higher
						assert.equal(typeof elem1ZIndex, 'number');
						assert.equal(typeof elem2ZIndex, 'number');
						assert.equal(isNaN(elem1ZIndex), false);
						assert.equal(isNaN(elem2ZIndex), false);
						assert.equal(elem1ZHigher, elem1ZIndexHigher);
					})
				})
				
				stage.remove(element1, element2, element3, element4, element5, element6, element7, element8, element9);
			})
		}
	})
	
	describe('Other Tests:', function()
	{
		it(`Z Flickering Avoidance.`, function()
		{
			// if multiple occupy the same z then it's not important which is picked, but we don't want it to flicker every other render
			stage.add(element1, element2, element3);
			
			element1.z = element2.z = element3.z = 10;
			stage.update();
			var ind1 = parseInt(element1.style.zIndex);
			var ind2 = parseInt(element2.style.zIndex);
			var ind3 = parseInt(element3.style.zIndex);
			
			stage.update();
			
			assert.equal(ind1, parseInt(element1.style.zIndex));
			assert.equal(ind2, parseInt(element2.style.zIndex));
			assert.equal(ind3, parseInt(element3.style.zIndex));
			
			stage.update();
			
			assert.equal(ind1, parseInt(element1.style.zIndex));
			assert.equal(ind2, parseInt(element2.style.zIndex));
			assert.equal(ind3, parseInt(element3.style.zIndex));
		})
	})
})
