# DOM3D

> DOM3D is an open source engine for making 2.5D scenes (e.g. 2D planes moving/rotating in 3D space) in normal HTML/Javascript pages.

### What makes DOM3D different?

There's a lot of 3D engines out there in the world. However, DOM3D isn't quite like any of them. It's unique for a few reasons:

1. **Merger of 2D and 3D** - DOM3D is designed for the purpose of melding 3D abilities into otherwise 2D designs, making it extremely practical. The main way in which this manifests is that the math is manipulated to make all 3D objects display exactly as 2D objects would whenever their z-coordinate is at zero. In a normal 3D scene an object that is left or right of center would be skewed compared to an object at true center in any non-orthographic viewing. In DOM3D this is not the case.

2. **Simple tech** - DOM3D uses affine only transformations applied to normal DOM objects. All 3D effects are created completely through CSS matrix manipulation. This means browsers need not have actual 3D support to utilize it, and more importantly you're working with familiar DOM objects.

3. **Forward kinematics with global sorting** - Most CSS transformation based 3D capabilities are not forward kinematic, or at very least tend to not be able to sort children in different containers against each other properly. Meanwhile most fully forward kinematic engines tend to be complex triangle/texture/camera based engines. DOM3D offers a truly forward kinematic and globally sorting engine while still maintaining the simplicity of working with familiar DOM style elements.

### What is DOM3D for?

DOM3D is not for 3D models, geometry, textures, etc. It's for taking the type of design elements you may have on a normal web page and building them with the ability to easily move in 3D space with full forward kinematic (i.e. parent/child containers) and sorting abilities.

_Long story short: a 1st person shooter game? No. A really cool photo album with complex 3D effects? Yes._

----------------------

## How to use it?

#### Make a Stage3D

Every scene needs a stage at its root. The stage will be associated with a DOM element in your page. So

```html
<div id="my-stage"></div>
```

```javascript
var stage = new Stage3D('#my-stage');
```

We've now created a `stage` object which we can add other DOM3D elements into and associated it with a DOM element on the page. The location of that DOM element will be considered point 0,0,0 for the scene.

#### Make Some Elements

The basic class for DOM elements which will move around in the 3D scene is the `Element3D` class. This represents a normal DOM element that will be put inside `#my-stage` and then be manipulated in 3D by DOM3D.

```javascript
var elem1 = new Element3D();
elem1.style.width = '50px';
elem1.style.height = '50px';
elem1.style.backgroundColor = 'green';
elem1.z = 10;

var elem2 = new Element3D();
elem2.style.width = '50px';
elem2.style.height = '50px';
elem2.style.backgroundColor = 'red';
elem2.z = -10;
```

The `Element3D` objects represent normal DOM elements. Notice that we can give them custom markup, apply CSS, etc. They'll just be 2D planes in a 3D world.

Then we manipulate them in that 3D world via `x`, `y`, and `z` coordinates and `rotX`, `rotY`, and `rotZ` axis. You can also set a `regX` and `regY` to set the registration point that it rotates around.

#### Add Elements to the Stage

Elements can be added right to the `Stage3D` instance. However for our demo we're gonna make a group so that we can spin them around easily.

```javascript
var group = new Group3D();
group.add(elem1, elem2);
stage.add(group);
```

`elem1` and `elem2` are now children of `group`, which is now a child of `stage`. The scene will now render the elements, and the group can be easily manipulated.

#### Move It!

Of course, the scene seems pretty bland without any movement showing off the 3D yet! In this case we can use the render events from `stage` to add a bit of motion:

```javascript
stage.addListener(StageEvent.UPDATE, function(){
    group.rotX += 0.5;
    group.rotY += 0.2;
})
```

## Documentation

The above is a quick example intro of how DOM3D works. But it's not intended to be actual documentation.

DOM3D has 2 basic types of documentation. First it has practical example based docs about usage. Then it also has technical API documentation detailing each class/method/property generated from javadoc style commenting.

- [Example Based Documentation](docs/README.md)
- [Javadoc Style API Documentation](docs/API.md)





