
# Example Based DOM3D Documentation

> This is a practical example-based documentation of using DOM3D. If you're looking for more technical documentation (i.e. javadoc style API documentation) [then look here](API.md).

## Getting DOM3D

#### Bower

To import DOM3D via bower use this command:

```
bower install dom3d
```

You can then include the dom3d library in your project files from `bower_components/dom3d/dist/dom3d.min.js`

#### npm

To import DOM3D via npm use this command:

```
npm install --save dom3d
```

#### Manual

You may also manually grab the DOM3D files from the `dist` folder of this project and include them in your project that way.

## General Access to DOM3D Classes

After getting DOM3D into your project you'll need access to the DOM3D classes.

#### Traditional:

When loaded into a web page DOM3D creates a global `dom3d` object which namespaces each available class (e.g. `dom3d.Stage3D`). DOM3D classes can always be accessed this way.

DOM3D also provides a `dom3d.spread()` method as a shortcut which allows you to remove the namespace and make all the intended public classes global:

```javascript
dom3d.spread();

// now classes are available globally:
var elem = new Element3D();
```

#### ES6 Modules:

If your project uses ES6 modules you can instead just import classes via standard syntax:

```javascript
import {Element3D} from 'dom3d';

// you now have access to the Element3D class:
var elem = new Element3D();
```

-------------

## Working With Stage3D

> [Stage3D API docs](API.md#Stage3D)

Every scene needs to have a `Stage3D` instance at its root, which associates with a DOM element in your page where the scene will show. The best way to do this is to code your element into the page and then construct a `Stage3D` while passing a CSS query string pointing to the element:

```html
<div id="my-stage"></div>
```

```javascript
var stage = new Stage3D('#my-stage');
```

#### In your page:

The biggest purpose of the `Stage3D` instance is to give you a tangible element in your page that you can use to place your 3D scene where you want via normal HTML/CSS. For example in this case I might have some CSS to position my `Stage3D` instance in the center of its containing element:

```css
#my-stage {
    position: absolute;
    left: 50%;
    top: 50%;
}
```

Don't think of your `Stage3D` instance as an area; think of it as a point. The point at which you place that element in your page will be the 0,0,0 point of the 3D scene. That's why I centered it within its container in the above example.

#### For your scene:

The other main purpose of your `Stage3D` instance is to serve as the root element for your javascript driven creation of the 3D scene.

You do this by adding/removing other instances of DOM3D display type classes to/from your `Stage3D` instance.

For example if I had an `Element3D` instance assigned to a variable named `myElem`, then I could add it to my `stage` from the example above via:

```javascript
stage.add(myElem);
```

At that point `myElem` would begin rendering as a 3D object in `stage`. You would be able to see it in the page. You could manipulate its `x`, `y`, and `z` coordinates as well as `rotX`, `rotY`, `rotZ` axes. You can remove it just as easily with `remove`.

For both `add` and `remove` you can include multiple arguments and it will add all to the scene, e.g., `stage.add(elem1, elem2, elem3);`

#### Rendering:

It's important to understand the basic concept of how rendering works in DOM3D `Stage3D` elements.

It works by recalculating the scene and then updating any changes.

By default the `Stage3D` instance does this 30 times per second for smooth visual rendering of a scene.

However, auto-rendering can be shut off and then you can manually call the `Stage3D` instance's `update` method when you want updating to happen:

```javascript
// the `false` tells it to not auto-render
var stage = new Stage3D('#my-stage', false);

// now we call this every time we want to render the scene
stage.update();
```

You can also call `update()` in an auto-rendering scene any time you simply want the scene updated immediately.

Either way, the rendering engine uses a dirty/clean system to only update actual changes to the scene. So for most people the default auto-rendering will be just fine.

#### Events

`Stage3D` instances have events that dispatch whenever updates happen (either from auto-render or from manually calling for an update). These events are contained in the `StageEvent` class as constants:

```javascript
// runs right before an update happens
stage.addListener(StageEvent.UPDATE, onUpdate);
function onUpdate(evt) {
    something.rotX += 2;
    something.rotY += 3;
}

// runs right after an update happens
stage.addListener(StageEvent.AFTER_UPDATE, onAfterUpdate);
function onAfterUpdate(evt) {
    console.log('updated!');
}
```

#### Note:

It's important to note that `Stage3D` instances are roots for 3D scenes and do not act like 3D objects themselves. They are the bridge between your 3D scene and your normal page. Place them like you would any other element via HTML/CSS, not via trying to manipulate their 3D properties (i.e. x, y, z, rotX, etc.)

-----------------

## Working with Element3D

> [Element3D API docs](API.md#Element3D)

`Element3D` is the class for normal 3D elements within your scene. The basic concept is that the `Element3D` instance will contain normal 2D DOM elements that act as the visuals, and then you can manipulate the `Element3D` instance itself to make it move/rotate in 3D space.

Every `Element3D` instance has a `.element` property which is the actual DOM element that is getting put in the scene and having its transforms manipulated to act as a 3D object. You can access this `.element` to add visuals, or you can use the many shortcuts provided by DOM3D to manipulate it: 

```javascript
// create it, a DOM element is auto-generated and placed on it's `.element` property
var e3d = new Element3D();

// `e3d.style` is a shortcut to the DOM element's style, like writing `e3d.element.style`
// you can manipulat its visuals just like any other DOM element
e3d.style.width = '50px';
e3d.style.height = '50px';
e3d.style.borderRadius = '25px';
e3d.style.backgroundColor = 'green';

// but you determine its placement/rotation/registration point in 3D!
e3d.regX = 25;
e3d.regY = 25;
e3d.rotX = 45;
e3d.rotY = 45;
e3d.x = 10;
e3d.z = 20;
```

The above example makes an `Element3D` instance that is a green circle just through normal CSS manipulation, yet it moves through our scene in 3D.

There are many other ways to manipulate the visuals of an `Element3D` instance:

Simply manipulate the `.element` itself:

```javascript
var e3d = new Element3D();
e3d.element.innerHTML = 'Hello World!';
```

Or give that element class or id and style it with CSS:

```javascript
var e3d = new Element3D({id:'my-elem', className:'elems'});
```

```css
.elems {
    width: 30px;
    height: 30px;
    border-radius: 15px;
}

#my-elem {
    background-color: blue;
}
```

Or even completely determine the markup of it during instantiation:

```javascript
var e3d = new Element3D('<img src="myimg.jpg" />');
```

Or a shortcut for making it an image:

```javascript
var e3d = new Element3D({src:'myimg.jpg', alt:'image text'});
```

Have all sort of normal DOM children within the `Element3D` instance:

```javascript
var e3d = new Element3D();

// the `.element` can have children added like any normal DOM element
e3d.element.appendChild(someOtherElement);
e3d.element.appendChild(anotherElement);
```

#### Locking Orientation

`Element3D` instances can be locked so that they always visually orient to the front regardless of how they or their parents containers have been manipulated. This is useful for many effects and can be accomplished simply by using the `.lockFacingFront` property.

```javascript
e3d.lockFacingFront = true;
```

#### Two Sided Elements

A normal `Element3D` instance, when flipped around 180 degrees, will simply show a reversed image of what it normally looks like.

Sometimes it's useful to have a 2 sided elements which show differently depending on which side is visible. This is accomplished via the `PaperElement3D` class.

```javascript
// where frontElement and backElement represent 2 DOM elements you want to show for the front or back of the `PaperElement3D` instance
var pe3d = new PaperElement3D({id:'my-paper-element'}, frontElement, backElement);
```

> [PaperElement3D API docs](API.md#PaperElement3D)

---------------------

## Containers with Group3D

> [Group3D API docs](API.md#Group3D)

One of the main advantages of working in DOM3D is the forward kinematics (nested containers of elements).

DOM3D containers can be infinitely nested, and every element still globally z-sorts itself against every other element individually.

The class that allows you to do this is `Group3D`. You create and remove/add `Group3D` instances much like you'd remove/add `Element3D` instances with the exception that they don't have any visual of their own. They are solely containers.

```javascript
var group = new Group3D();

stage.add(group);
group.add(e3d1, e3d2);
```

In the above example `group` now contains `e3d1` and `e3d2`. Both of those objects can be moved/rotated around independently, but also their container can be moved/rotated which affects both of them.

This is identical to the concept of a normal 2D `div` holding two other `div`'s. They can both be moved around within their parent, and also the parent can be moved around affecting both of them.

#### .parent and .stage

Elements and groups both have the ability to, at any point, know what their immediate parent is via a `.parent` property as well as their root stage via a `.stage` property. For things added directly to the stage they will both be the same.

```javascript
stage.add(group);
group.add(e3d1, e3d2);

group.parent // points to `stage`
group.stage // points to `stage`

e3d1.parent // points to `group`
e3d1.stage // points to `stage`
```

#### Calculated Positions and Rotations

Since an elements end position and rotation depends on its own and its parents values, you need a way to view the global position and rotation values.

This can be done through the `.calc` property. This holds calculated values for `x`, `y`, `z`, `rotX`, `rotY`, and `rotZ`. Both elements and groups have this.

Note: these numbers are updated after every render. So between renders they many not be fully accurate. You either need to force and update or wait until right after an update (such as with `StageEvent.AFTER_UPDATE`) in order to use them.

---------------------

## Effects

Effects are things that can be added to a `Stage3D` instance in order to modify the end result.

Currently the only effect class in DOM3D is `DepthOfField`, which can apply a blurring effect to simulate focus and add realism.

> [DepthOfField API docs](API.md#DepthOfField)

```javascript
var dof = new DepthOfField();
stage.effects.push(dof);
```

--------------

## Advanced

For a more advanced understanding of how to use DOM3D make sure to use the [API documentation](API.md).
