# API Documentation

> This documents the full public API of the DOM3D engine in a javadoc manner. If you are looking for more example based documentation [then look here](README.md).

There are 3 general types of classes in the engine: display, event, and effect.

Display type classes are the main classes used in the engine. They are intended to be instantiated directly (with the exception of `DisplayObject3D`, which is an abstract base class for the other display classes) or extended to create your own 3D display objects. They are as follows:

- [DisplayObject3D](#DisplayObject3D) (a base class for the others)
- [Stage3D](#Stage3D) (the stage which you will have as a root of your scene)
- [Element3D](#Element3D) (the basic 3D element for normal usage)
- [PaperElement3D](#PaperElement3D) (a version of Element3D with 2 different sides)
- [Group3D](#Group3D) (a container for grouping elements in a forward kinematic fashion)

Event type classes hold different types of events used within the engine.

- [StageEvent](#StageEvent) (events output by the Stage3D class)

Effect type classes allow you to add effects to the scene.

- [DepthOfField](#DepthOfField) (a blurring depth of field effect)

----------------------

## Classes

<dl>
<dt><a href="#DisplayObject3D">DisplayObject3D</a></dt>
<dd></dd>
<dt><a href="#Stage3D">Stage3D</a> ⇐ <code><a href="#DisplayObject3D">DisplayObject3D</a></code></dt>
<dd></dd>
<dt><a href="#Group3D">Group3D</a> ⇐ <code><a href="#DisplayObject3D">DisplayObject3D</a></code></dt>
<dd></dd>
<dt><a href="#Element3D">Element3D</a> ⇐ <code><a href="#DisplayObject3D">DisplayObject3D</a></code></dt>
<dd></dd>
<dt><a href="#PaperElement3D">PaperElement3D</a> ⇐ <code><a href="#DisplayObject3D">DisplayObject3D</a></code></dt>
<dd></dd>
<dt><a href="#StageEvent">StageEvent</a> ⇐ <code>Event</code></dt>
<dd></dd>
<dt><a href="#DepthOfField">DepthOfField</a></dt>
<dd></dd>
</dl>

<a name="DisplayObject3D"></a>

## *DisplayObject3D*
**Kind**: global abstract class  

* *[DisplayObject3D](#DisplayObject3D)*
    * *[new DisplayObject3D()](#new_DisplayObject3D_new)*
    * *[.id](#DisplayObject3D+id) : <code>String</code>*
    * *[.element](#DisplayObject3D+element) : <code>HTMLElement</code>*
    * *[.stage](#DisplayObject3D+stage) : [<code>Stage3D</code>](#Stage3D)*
    * *[.parent](#DisplayObject3D+parent) : [<code>DisplayObject3D</code>](#DisplayObject3D)*
    * *[.calc](#DisplayObject3D+calc) : <code>Object</code>*
    * *[.x](#DisplayObject3D+x) : <code>Number</code>*
    * *[.y](#DisplayObject3D+y) : <code>Number</code>*
    * *[.z](#DisplayObject3D+z) : <code>Number</code>*
    * *[.rotX](#DisplayObject3D+rotX) : <code>Number</code>*
    * *[.rotY](#DisplayObject3D+rotY) : <code>Number</code>*
    * *[.rotZ](#DisplayObject3D+rotZ) : <code>Number</code>*
    * *[.regX](#DisplayObject3D+regX) : <code>Number</code>*
    * *[.regY](#DisplayObject3D+regY) : <code>Number</code>*
    * *[.style](#DisplayObject3D+style) : <code>Object</code>*
    * *[.addListener(type, listener, [useCapture], [wantsUntrusted])](#DisplayObject3D+addListener)*
    * *[.removeListener(type, listener, [useCapture])](#DisplayObject3D+removeListener)*
    * *[.dispatch(event)](#DisplayObject3D+dispatch)*


* * *

<a name="new_DisplayObject3D_new"></a>

### *new DisplayObject3D()*
The DisplayObject3D class is an abstract class that serves as the base for all 3D capable elements to be used within a dom3d [Stage3D](#Stage3D) scene. It is not meant to be directly instantiated.<br/><br/>All DOM elements associated with any dom3d class that inherits from DisplayObject3D (with the exception of Stage3D class objects) should be assumed to operate with a CSS display of 'block' and a CSS position of 'absolute'.


* * *

<a name="DisplayObject3D+id"></a>

### *displayObject3D.id : <code>String</code>*
Each DisplayObject3D has a unique id property. When the element it represents has an id attribute at the time of instantiation it will match its element's id. Otherwise a unique one will be generated. You can also assign your own.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>generated if the element has no id</code>  

* * *

<a name="DisplayObject3D+element"></a>

### *displayObject3D.element : <code>HTMLElement</code>*
Every DisplayObject3D represents an HTML Element. You can access that element by accessing the object's element property. Conversely any element that has an associated DisplayObject3D will have a property .dom3dObject which references its DisplayObject3D.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+stage"></a>

### *displayObject3D.stage : [<code>Stage3D</code>](#Stage3D)*
Each DisplayObject3D has a stage property that allows it to tell which stage it is currently in the display list of. Is null when not in a display list.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+parent"></a>

### *displayObject3D.parent : [<code>DisplayObject3D</code>](#DisplayObject3D)*
Each DisplayObject3D has a parent property that allows it to tell which object is currently this object's parent in the display list. null if it is not in the display list. This is a reflection of the dom3d display list, not necessarily of the actual HTML parent/child structure.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+calc"></a>

### *displayObject3D.calc : <code>Object</code>*
Each DisplayObject3D has a calc property that allows for easy reading of the final calculated x, y, z, rotX, rotY, and rotZ values.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Read only**: true  
**Note**: The values on this property are only fully accurate immediately after a render/update. If you've changed values between render and reading then readings here may no longer be accurate.  

* * *

<a name="DisplayObject3D+x"></a>

### *displayObject3D.x : <code>Number</code>*
The x property sets the x coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+y"></a>

### *displayObject3D.y : <code>Number</code>*
The y property sets the y coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+z"></a>

### *displayObject3D.z : <code>Number</code>*
The z property sets the z coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotX"></a>

### *displayObject3D.rotX : <code>Number</code>*
The rotX property sets the x-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotY"></a>

### *displayObject3D.rotY : <code>Number</code>*
The rotY property sets the y-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotZ"></a>

### *displayObject3D.rotZ : <code>Number</code>*
The rotZ property sets the z-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+regX"></a>

### *displayObject3D.regX : <code>Number</code>*
The regX property sets the x registration point used for rotation/placement of the DisplayObject3D instance.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+regY"></a>

### *displayObject3D.regY : <code>Number</code>*
The regY property sets the y registration point used for rotation/placement of the DisplayObject3D instance.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+style"></a>

### *displayObject3D.style : <code>Object</code>*
Shortcut for easily setting styles on the element.

**Kind**: instance property of [<code>DisplayObject3D</code>](#DisplayObject3D)  

* * *

<a name="DisplayObject3D+addListener"></a>

### *displayObject3D.addListener(type, listener, [useCapture], [wantsUntrusted])*
Shortcut for adding event listeners to the object's dom element. Works same as `myObj.element.addEventListener(...);`

**Kind**: instance method of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |
| [wantsUntrusted] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+removeListener"></a>

### *displayObject3D.removeListener(type, listener, [useCapture])*
Shortcut for removing event listeners from the object's dom element. Works same as `myObj.element.removeEventListener(...);`

**Kind**: instance method of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+dispatch"></a>

### *displayObject3D.dispatch(event)*
Shortcut for dispatching events from the object's dom element. Works same as `myObj.element.dispatchEvent(...);`

**Kind**: instance method of [<code>DisplayObject3D</code>](#DisplayObject3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| event | Identical to normal event dispatching via `dispatchEvent`. |


* * *

<a name="Stage3D"></a>

## Stage3D ⇐ [<code>DisplayObject3D</code>](#DisplayObject3D)
**Kind**: global class  
**Extends**: [<code>DisplayObject3D</code>](#DisplayObject3D)  

* [Stage3D](#Stage3D) ⇐ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [new Stage3D(element, [autoRender], [FPS])](#new_Stage3D_new)
    * [.stage](#Stage3D+stage) : [<code>Stage3D</code>](#Stage3D)
    * [.distortion](#Stage3D+distortion) : <code>Number</code>
    * [.zoom](#Stage3D+zoom) : <code>Number</code>
    * [.children](#Stage3D+children) : <code>Array</code>
    * [.isGroup](#Stage3D+isGroup) : <code>Boolean</code>
    * [.orthographic](#Stage3D+orthographic) : <code>Boolean</code>
    * [.autoRender](#Stage3D+autoRender) : <code>Boolean</code>
    * [.FPS](#Stage3D+FPS) : <code>Number</code>
    * [.id](#DisplayObject3D+id) : <code>String</code>
    * [.element](#DisplayObject3D+element) : <code>HTMLElement</code>
    * [.parent](#DisplayObject3D+parent) : [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.style](#DisplayObject3D+style) : <code>Object</code>
    * [.effects()](#Stage3D+effects)
    * [.add()](#Stage3D+add) ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.remove()](#Stage3D+remove) ⇒ [<code>Stage3D</code>](#Stage3D)
    * [.contains()](#Stage3D+contains) ⇒ <code>Boolean</code>
    * [.getChildById()](#Stage3D+getChildById) ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.getChildByElement()](#Stage3D+getChildByElement) ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.update()](#Stage3D+update) ⇒ <code>Boolean</code>
    * [.addListener(type, listener, [useCapture], [wantsUntrusted])](#DisplayObject3D+addListener)
    * [.removeListener(type, listener, [useCapture])](#DisplayObject3D+removeListener)
    * [.dispatch(event)](#DisplayObject3D+dispatch)


* * *

<a name="new_Stage3D_new"></a>

### new Stage3D(element, [autoRender], [FPS])
All 3D elements to be rendered are to be added to a Stage3D instance. Even though it inherits from DisplayObject3D it should be treated like a 2D object in the DOM as far as its own positioning/rotating goes. Any x, y, z, rotX, rotY, and rotZ properties are not intended to function; just use CSS positioning. If you want a container for 3D elements that you can move and rotate in 3D space then see [Group3D](#Group3D).<br><br>Also note that a Stage3D needs to be updated each frame. If autoRender is used (as is default) it will just constantly update. This is not as taxing as it would seem since it uses a diry/clean rendering system. For slightly better performance you can update manually as needed using the [update](#Stage3D+update) method.<br><br>In almost all ways the API to the Stage3D is a mimic of the Group3D. You can treat manipulation of display list children within them almost identically (e.g. add, remove, getChildById, etc).


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element |  |  | An argument identifying the HTML Element the display object is to associate with. Can be the actual element object itself, or a query selector string which will identify the intended HTML element already in the DOM. |
| [autoRender] | <code>Boolean</code> | <code>true</code> | Shortcut to the set [autoRender](#Stage3D+autoRender) property. |
| [FPS] | <code>Number</code> | <code>30</code> | Allows you to determine the update rate of the autoRender in frames per second. |


* * *

<a name="Stage3D+stage"></a>

### stage3D.stage : [<code>Stage3D</code>](#Stage3D)
Stage3D inherits the stage property from DisplayObject3D, which identifies the root stage. However, it will simply always point to itself in the case of a Stage3D object.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>this</code>  
**Overrides**: [<code>stage</code>](#DisplayObject3D+stage)  
**Read only**: true  

* * *

<a name="Stage3D+distortion"></a>

### stage3D.distortion : <code>Number</code>
distortion affects how the location of objects are distorted (lesser for further away, more for closer) as they move on the z-axis.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>6</code>  

* * *

<a name="Stage3D+zoom"></a>

### stage3D.zoom : <code>Number</code>
zoom affects how objects are scaled as they move on the z-axis. Experiment to get the effect that works for your use. Any object with a calculated z coordinate higher than the zoom will be considered behind the viewer, and not render.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>5000</code>  

* * *

<a name="Stage3D+children"></a>

### stage3D.children : <code>Array</code>
Allows access to the Array of child objects for this container. Special care should be taken when accessing to not modify the original Array.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>[empty Array]</code>  
**Read only**: true  

* * *

<a name="Stage3D+isGroup"></a>

### stage3D.isGroup : <code>Boolean</code>
A Stage3D will have an isGroup property of true for identification purposes. Both Stage3D and Group3D will have this property as true, as they are both container/group type concepts. This property is made to identify this object as a general concept of grouping/containing 3D elements, as opposed to identifying a certain class.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>true</code>  
**Read only**: true  

* * *

<a name="Stage3D+orthographic"></a>

### stage3D.orthographic : <code>Boolean</code>
Sets whether this stage will render all of its children orthographically or not.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>false</code>  
**Note**: Renders the entire scene orthographically regardless of the settings of groups within the scene.  

* * *

<a name="Stage3D+autoRender"></a>

### stage3D.autoRender : <code>Boolean</code>
Allows you to turn off/on autoRender. If false then you must tell the scene to update manually via the update method.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>true</code>  

* * *

<a name="Stage3D+FPS"></a>

### stage3D.FPS : <code>Number</code>
Allows you to determine the rate at which the scene updates during autoRender.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>30</code>  

* * *

<a name="DisplayObject3D+id"></a>

### stage3D.id : <code>String</code>
Each DisplayObject3D has a unique id property. When the element it represents has an id attribute at the time of instantiation it will match its element's id. Otherwise a unique one will be generated. You can also assign your own.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>generated if the element has no id</code>  

* * *

<a name="DisplayObject3D+element"></a>

### stage3D.element : <code>HTMLElement</code>
Every DisplayObject3D represents an HTML Element. You can access that element by accessing the object's element property. Conversely any element that has an associated DisplayObject3D will have a property .dom3dObject which references its DisplayObject3D.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+parent"></a>

### stage3D.parent : [<code>DisplayObject3D</code>](#DisplayObject3D)
Each DisplayObject3D has a parent property that allows it to tell which object is currently this object's parent in the display list. null if it is not in the display list. This is a reflection of the dom3d display list, not necessarily of the actual HTML parent/child structure.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+style"></a>

### stage3D.style : <code>Object</code>
Shortcut for easily setting styles on the element.

**Kind**: instance property of [<code>Stage3D</code>](#Stage3D)  

* * *

<a name="Stage3D+effects"></a>

### stage3D.effects()
An array that can be filled with effects objects. An effect object must have a `render` method that can take an argumen for the object.

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  

* * *

<a name="Stage3D+add"></a>

### stage3D.add() ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
add allows objects to be added to this Stage3D. Note: Stage3D instances are meant to be roots of a 3D scene. Do not add a Stage3D to another type of group.

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Returns**: [<code>DisplayObject3D</code>](#DisplayObject3D) - Returns this Stage3D object for chaining.  

| Type | Description |
| --- | --- |
| [<code>DisplayObject3D</code>](#DisplayObject3D) | Any object that inherits from DisplayObject3D may be added. |


* * *

<a name="Stage3D+remove"></a>

### stage3D.remove() ⇒ [<code>Stage3D</code>](#Stage3D)
remove allows objects that were added via [add](#Stage3D+add) to be removed.

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Returns**: [<code>Stage3D</code>](#Stage3D) - Returns this Stage3D object for chaining purposes.  

| Type | Description |
| --- | --- |
| [<code>DisplayObject3D</code>](#DisplayObject3D) | Any object that inherits from DisplayObject3D and has been added may be removed. |


* * *

<a name="Stage3D+contains"></a>

### stage3D.contains() ⇒ <code>Boolean</code>
contains allows you to check if a DisplayObject3D is contained (has been added via add) by the Stage3D

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Returns**: <code>Boolean</code> - Returns a Boolean value for whether the Stage3D contains the object or not.  

| Type | Description |
| --- | --- |
| [<code>DisplayObject3D</code>](#DisplayObject3D) | The object to test for. |


* * *

<a name="Stage3D+getChildById"></a>

### stage3D.getChildById() ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
getChildById allows you to get a child of the Stage3D by its id property (which, remember, will match the actual element's id attribute if it had one).

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Returns**: [<code>DisplayObject3D</code>](#DisplayObject3D) - Returns a the DisplayObject3D found if it is found. Returns null of none found.  

| Type | Description |
| --- | --- |
| <code>String</code> | The String id to look for. |


* * *

<a name="Stage3D+getChildByElement"></a>

### stage3D.getChildByElement() ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
getChildByElement allows you to get a child of the Stage3D by its associated HTML Element.

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Returns**: [<code>DisplayObject3D</code>](#DisplayObject3D) - Returns a the DisplayObject3D found if it is found. Returns null of none found.  

| Type | Description |
| --- | --- |
| <code>HTMLElement</code> | The associated HTMLElement of the display object you're looking for. |


* * *

<a name="Stage3D+update"></a>

### stage3D.update() ⇒ <code>Boolean</code>
This method must be called in order for the Stage3D instance to update every time something changes. Normally you let the stage autoRender, which will update 30 fps by default. However, you can turn autoRender off and update manually.

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Returns**: <code>Boolean</code> - Returns true if the update happened, false if it was cancelled on the update event.  

* * *

<a name="DisplayObject3D+addListener"></a>

### stage3D.addListener(type, listener, [useCapture], [wantsUntrusted])
Shortcut for adding event listeners to the object's dom element. Works same as `myObj.element.addEventListener(...);`

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |
| [wantsUntrusted] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+removeListener"></a>

### stage3D.removeListener(type, listener, [useCapture])
Shortcut for removing event listeners from the object's dom element. Works same as `myObj.element.removeEventListener(...);`

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+dispatch"></a>

### stage3D.dispatch(event)
Shortcut for dispatching events from the object's dom element. Works same as `myObj.element.dispatchEvent(...);`

**Kind**: instance method of [<code>Stage3D</code>](#Stage3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| event | Identical to normal event dispatching via `dispatchEvent`. |


* * *

<a name="Group3D"></a>

## Group3D ⇐ [<code>DisplayObject3D</code>](#DisplayObject3D)
**Kind**: global class  
**Extends**: [<code>DisplayObject3D</code>](#DisplayObject3D)  

* [Group3D](#Group3D) ⇐ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [new Group3D(element)](#new_Group3D_new)
    * [.children](#Group3D+children) : <code>Array</code>
    * [.isGroup](#Group3D+isGroup) : <code>Boolean</code>
    * [.orthographic](#Group3D+orthographic) : <code>Boolean</code>
    * [.id](#DisplayObject3D+id) : <code>String</code>
    * [.element](#DisplayObject3D+element) : <code>HTMLElement</code>
    * [.stage](#DisplayObject3D+stage) : [<code>Stage3D</code>](#Stage3D)
    * [.parent](#DisplayObject3D+parent) : [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.calc](#DisplayObject3D+calc) : <code>Object</code>
    * [.x](#DisplayObject3D+x) : <code>Number</code>
    * [.y](#DisplayObject3D+y) : <code>Number</code>
    * [.z](#DisplayObject3D+z) : <code>Number</code>
    * [.rotX](#DisplayObject3D+rotX) : <code>Number</code>
    * [.rotY](#DisplayObject3D+rotY) : <code>Number</code>
    * [.rotZ](#DisplayObject3D+rotZ) : <code>Number</code>
    * [.regX](#DisplayObject3D+regX) : <code>Number</code>
    * [.regY](#DisplayObject3D+regY) : <code>Number</code>
    * [.style](#DisplayObject3D+style) : <code>Object</code>
    * [.add()](#Group3D+add) ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.remove()](#Group3D+remove) ⇒ [<code>Group3D</code>](#Group3D)
    * [.contains()](#Group3D+contains) ⇒ <code>Boolean</code>
    * [.getChildById()](#Group3D+getChildById) ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.getChildByElement()](#Group3D+getChildByElement) ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.addListener(type, listener, [useCapture], [wantsUntrusted])](#DisplayObject3D+addListener)
    * [.removeListener(type, listener, [useCapture])](#DisplayObject3D+removeListener)
    * [.dispatch(event)](#DisplayObject3D+dispatch)


* * *

<a name="new_Group3D_new"></a>

### new Group3D(element)
The Group3D class acts as a container for 3D based elements. Any 3D elements inside a Group3D will move and rotate as the Group3D does in a forward kinematic fashion. Group3D instances can also contain other Group3D instances and create infinitely deep forward kinematics.


| Param | Description |
| --- | --- |
| element | An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM. |


* * *

<a name="Group3D+children"></a>

### group3D.children : <code>Array</code>
Allows access to the Array of child objects for this container. Special care should be taken when accessing to not modify the original Array.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>[empty Array]</code>  
**Read only**: true  

* * *

<a name="Group3D+isGroup"></a>

### group3D.isGroup : <code>Boolean</code>
A Group3D will have an isGroup property of true for identification purposes. Stage3D instances will also have it. This serves to identify the object as the general concept of a 3D group/container, as opposed to identifying it as a specific Group3D class instance.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>true</code>  
**Read only**: true  

* * *

<a name="Group3D+orthographic"></a>

### group3D.orthographic : <code>Boolean</code>
Sets whether this group will render its direct children orthographically or not. Important for the rendering of primitive shapes, because otherwise edge geometry is not precise with neighboring elements.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>false</code>  
**Note**: If a group's orthographic property is set to true, then any groups it contains should also be set to true.  

* * *

<a name="DisplayObject3D+id"></a>

### group3D.id : <code>String</code>
Each DisplayObject3D has a unique id property. When the element it represents has an id attribute at the time of instantiation it will match its element's id. Otherwise a unique one will be generated. You can also assign your own.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>generated if the element has no id</code>  

* * *

<a name="DisplayObject3D+element"></a>

### group3D.element : <code>HTMLElement</code>
Every DisplayObject3D represents an HTML Element. You can access that element by accessing the object's element property. Conversely any element that has an associated DisplayObject3D will have a property .dom3dObject which references its DisplayObject3D.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+stage"></a>

### group3D.stage : [<code>Stage3D</code>](#Stage3D)
Each DisplayObject3D has a stage property that allows it to tell which stage it is currently in the display list of. Is null when not in a display list.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+parent"></a>

### group3D.parent : [<code>DisplayObject3D</code>](#DisplayObject3D)
Each DisplayObject3D has a parent property that allows it to tell which object is currently this object's parent in the display list. null if it is not in the display list. This is a reflection of the dom3d display list, not necessarily of the actual HTML parent/child structure.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+calc"></a>

### group3D.calc : <code>Object</code>
Each DisplayObject3D has a calc property that allows for easy reading of the final calculated x, y, z, rotX, rotY, and rotZ values.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Read only**: true  
**Note**: The values on this property are only fully accurate immediately after a render/update. If you've changed values between render and reading then readings here may no longer be accurate.  

* * *

<a name="DisplayObject3D+x"></a>

### group3D.x : <code>Number</code>
The x property sets the x coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+y"></a>

### group3D.y : <code>Number</code>
The y property sets the y coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+z"></a>

### group3D.z : <code>Number</code>
The z property sets the z coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotX"></a>

### group3D.rotX : <code>Number</code>
The rotX property sets the x-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotY"></a>

### group3D.rotY : <code>Number</code>
The rotY property sets the y-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotZ"></a>

### group3D.rotZ : <code>Number</code>
The rotZ property sets the z-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+regX"></a>

### group3D.regX : <code>Number</code>
The regX property sets the x registration point used for rotation/placement of the DisplayObject3D instance.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+regY"></a>

### group3D.regY : <code>Number</code>
The regY property sets the y registration point used for rotation/placement of the DisplayObject3D instance.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+style"></a>

### group3D.style : <code>Object</code>
Shortcut for easily setting styles on the element.

**Kind**: instance property of [<code>Group3D</code>](#Group3D)  

* * *

<a name="Group3D+add"></a>

### group3D.add() ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
add allows objects to be added to this Group3D. Note: likewise, a Group3D instance is added to another Group3D or to the [Stage3D](#Stage3D) via those instances' `add` methods as well.

**Kind**: instance method of [<code>Group3D</code>](#Group3D)  
**Returns**: [<code>DisplayObject3D</code>](#DisplayObject3D) - Returns this Group3D object for chaining.  

| Type | Description |
| --- | --- |
| [<code>DisplayObject3D</code>](#DisplayObject3D) | Any object that inherits from DisplayObject3D may be added. |


* * *

<a name="Group3D+remove"></a>

### group3D.remove() ⇒ [<code>Group3D</code>](#Group3D)
remove allows objects that were added via [add](#Group3D+add) to be removed.

**Kind**: instance method of [<code>Group3D</code>](#Group3D)  
**Returns**: [<code>Group3D</code>](#Group3D) - Returns this Group3D object for chaining purposes.  

| Type | Description |
| --- | --- |
| [<code>DisplayObject3D</code>](#DisplayObject3D) | Any object that inherits from DisplayObject3D and has been added may be removed. |


* * *

<a name="Group3D+contains"></a>

### group3D.contains() ⇒ <code>Boolean</code>
contains allows you to check if a DisplayObject3D is contained (has been added via add) by the Group3D

**Kind**: instance method of [<code>Group3D</code>](#Group3D)  
**Returns**: <code>Boolean</code> - Returns a Boolean value for whether the Group3D contains the object or not.  

| Type | Description |
| --- | --- |
| [<code>DisplayObject3D</code>](#DisplayObject3D) | The object to test for. |


* * *

<a name="Group3D+getChildById"></a>

### group3D.getChildById() ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
getChildById allows you to get a child of the Group3D by its id property (which, remember, will match the actual element's id attribute if it had one).

**Kind**: instance method of [<code>Group3D</code>](#Group3D)  
**Returns**: [<code>DisplayObject3D</code>](#DisplayObject3D) - Returns a the DisplayObject3D found if it is found. Returns null of none found.  

| Type | Description |
| --- | --- |
| <code>String</code> | The String id to look for. |


* * *

<a name="Group3D+getChildByElement"></a>

### group3D.getChildByElement() ⇒ [<code>DisplayObject3D</code>](#DisplayObject3D)
getChildByElement allows you to get a child of the Group3D by its associated HTML Element.

**Kind**: instance method of [<code>Group3D</code>](#Group3D)  
**Returns**: [<code>DisplayObject3D</code>](#DisplayObject3D) - Returns a the DisplayObject3D found if it is found. Returns null of none found.  

| Type | Description |
| --- | --- |
| <code>HTMLElement</code> | The associated HTMLElement of the display object you're looking for. |


* * *

<a name="DisplayObject3D+addListener"></a>

### group3D.addListener(type, listener, [useCapture], [wantsUntrusted])
Shortcut for adding event listeners to the object's dom element. Works same as `myObj.element.addEventListener(...);`

**Kind**: instance method of [<code>Group3D</code>](#Group3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |
| [wantsUntrusted] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+removeListener"></a>

### group3D.removeListener(type, listener, [useCapture])
Shortcut for removing event listeners from the object's dom element. Works same as `myObj.element.removeEventListener(...);`

**Kind**: instance method of [<code>Group3D</code>](#Group3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+dispatch"></a>

### group3D.dispatch(event)
Shortcut for dispatching events from the object's dom element. Works same as `myObj.element.dispatchEvent(...);`

**Kind**: instance method of [<code>Group3D</code>](#Group3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| event | Identical to normal event dispatching via `dispatchEvent`. |


* * *

<a name="Element3D"></a>

## Element3D ⇐ [<code>DisplayObject3D</code>](#DisplayObject3D)
**Kind**: global class  
**Extends**: [<code>DisplayObject3D</code>](#DisplayObject3D)  

* [Element3D](#Element3D) ⇐ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [new Element3D(element)](#new_Element3D_new)
    * [.lockFacingFront](#Element3D+lockFacingFront) : <code>Boolean</code>
    * [.id](#DisplayObject3D+id) : <code>String</code>
    * [.element](#DisplayObject3D+element) : <code>HTMLElement</code>
    * [.stage](#DisplayObject3D+stage) : [<code>Stage3D</code>](#Stage3D)
    * [.parent](#DisplayObject3D+parent) : [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.calc](#DisplayObject3D+calc) : <code>Object</code>
    * [.x](#DisplayObject3D+x) : <code>Number</code>
    * [.y](#DisplayObject3D+y) : <code>Number</code>
    * [.z](#DisplayObject3D+z) : <code>Number</code>
    * [.rotX](#DisplayObject3D+rotX) : <code>Number</code>
    * [.rotY](#DisplayObject3D+rotY) : <code>Number</code>
    * [.rotZ](#DisplayObject3D+rotZ) : <code>Number</code>
    * [.regX](#DisplayObject3D+regX) : <code>Number</code>
    * [.regY](#DisplayObject3D+regY) : <code>Number</code>
    * [.style](#DisplayObject3D+style) : <code>Object</code>
    * [.addListener(type, listener, [useCapture], [wantsUntrusted])](#DisplayObject3D+addListener)
    * [.removeListener(type, listener, [useCapture])](#DisplayObject3D+removeListener)
    * [.dispatch(event)](#DisplayObject3D+dispatch)


* * *

<a name="new_Element3D_new"></a>

### new Element3D(element)
The Element3D class is simply a 3D plane in the scene. Any DOM elements it contains will be part of that 2D plane, not their own 3D objects.


| Param | Description |
| --- | --- |
| element | An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM. |


* * *

<a name="Element3D+lockFacingFront"></a>

### element3D.lockFacingFront : <code>Boolean</code>
Allows locking of the Element3D facing forward at all times if set to true, regardless or local or global rotation. Can be set to true automatically by a scene made in the DOM by including a CSS class of "dom3d-lockfacingfront" on the Element3D element.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>false</code>  

* * *

<a name="DisplayObject3D+id"></a>

### element3D.id : <code>String</code>
Each DisplayObject3D has a unique id property. When the element it represents has an id attribute at the time of instantiation it will match its element's id. Otherwise a unique one will be generated. You can also assign your own.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>generated if the element has no id</code>  

* * *

<a name="DisplayObject3D+element"></a>

### element3D.element : <code>HTMLElement</code>
Every DisplayObject3D represents an HTML Element. You can access that element by accessing the object's element property. Conversely any element that has an associated DisplayObject3D will have a property .dom3dObject which references its DisplayObject3D.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+stage"></a>

### element3D.stage : [<code>Stage3D</code>](#Stage3D)
Each DisplayObject3D has a stage property that allows it to tell which stage it is currently in the display list of. Is null when not in a display list.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+parent"></a>

### element3D.parent : [<code>DisplayObject3D</code>](#DisplayObject3D)
Each DisplayObject3D has a parent property that allows it to tell which object is currently this object's parent in the display list. null if it is not in the display list. This is a reflection of the dom3d display list, not necessarily of the actual HTML parent/child structure.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+calc"></a>

### element3D.calc : <code>Object</code>
Each DisplayObject3D has a calc property that allows for easy reading of the final calculated x, y, z, rotX, rotY, and rotZ values.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Read only**: true  
**Note**: The values on this property are only fully accurate immediately after a render/update. If you've changed values between render and reading then readings here may no longer be accurate.  

* * *

<a name="DisplayObject3D+x"></a>

### element3D.x : <code>Number</code>
The x property sets the x coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+y"></a>

### element3D.y : <code>Number</code>
The y property sets the y coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+z"></a>

### element3D.z : <code>Number</code>
The z property sets the z coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotX"></a>

### element3D.rotX : <code>Number</code>
The rotX property sets the x-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotY"></a>

### element3D.rotY : <code>Number</code>
The rotY property sets the y-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotZ"></a>

### element3D.rotZ : <code>Number</code>
The rotZ property sets the z-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+regX"></a>

### element3D.regX : <code>Number</code>
The regX property sets the x registration point used for rotation/placement of the DisplayObject3D instance.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+regY"></a>

### element3D.regY : <code>Number</code>
The regY property sets the y registration point used for rotation/placement of the DisplayObject3D instance.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+style"></a>

### element3D.style : <code>Object</code>
Shortcut for easily setting styles on the element.

**Kind**: instance property of [<code>Element3D</code>](#Element3D)  

* * *

<a name="DisplayObject3D+addListener"></a>

### element3D.addListener(type, listener, [useCapture], [wantsUntrusted])
Shortcut for adding event listeners to the object's dom element. Works same as `myObj.element.addEventListener(...);`

**Kind**: instance method of [<code>Element3D</code>](#Element3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |
| [wantsUntrusted] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+removeListener"></a>

### element3D.removeListener(type, listener, [useCapture])
Shortcut for removing event listeners from the object's dom element. Works same as `myObj.element.removeEventListener(...);`

**Kind**: instance method of [<code>Element3D</code>](#Element3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+dispatch"></a>

### element3D.dispatch(event)
Shortcut for dispatching events from the object's dom element. Works same as `myObj.element.dispatchEvent(...);`

**Kind**: instance method of [<code>Element3D</code>](#Element3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| event | Identical to normal event dispatching via `dispatchEvent`. |


* * *

<a name="PaperElement3D"></a>

## PaperElement3D ⇐ [<code>DisplayObject3D</code>](#DisplayObject3D)
**Kind**: global class  
**Extends**: [<code>DisplayObject3D</code>](#DisplayObject3D)  

* [PaperElement3D](#PaperElement3D) ⇐ [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [new PaperElement3D(element, [front], [back])](#new_PaperElement3D_new)
    * [.front](#PaperElement3D+front) : <code>HTMLElement</code>
    * [.back](#PaperElement3D+back) : <code>HTMLElement</code>
    * [.frontFacing](#PaperElement3D+frontFacing) : <code>Boolean</code>
    * [.id](#DisplayObject3D+id) : <code>String</code>
    * [.element](#DisplayObject3D+element) : <code>HTMLElement</code>
    * [.stage](#DisplayObject3D+stage) : [<code>Stage3D</code>](#Stage3D)
    * [.parent](#DisplayObject3D+parent) : [<code>DisplayObject3D</code>](#DisplayObject3D)
    * [.calc](#DisplayObject3D+calc) : <code>Object</code>
    * [.x](#DisplayObject3D+x) : <code>Number</code>
    * [.y](#DisplayObject3D+y) : <code>Number</code>
    * [.z](#DisplayObject3D+z) : <code>Number</code>
    * [.rotX](#DisplayObject3D+rotX) : <code>Number</code>
    * [.rotY](#DisplayObject3D+rotY) : <code>Number</code>
    * [.rotZ](#DisplayObject3D+rotZ) : <code>Number</code>
    * [.regX](#DisplayObject3D+regX) : <code>Number</code>
    * [.regY](#DisplayObject3D+regY) : <code>Number</code>
    * [.style](#DisplayObject3D+style) : <code>Object</code>
    * [.addListener(type, listener, [useCapture], [wantsUntrusted])](#DisplayObject3D+addListener)
    * [.removeListener(type, listener, [useCapture])](#DisplayObject3D+removeListener)
    * [.dispatch(event)](#DisplayObject3D+dispatch)


* * *

<a name="new_PaperElement3D_new"></a>

### new PaperElement3D(element, [front], [back])
The PaperElement3D class is a type of Element3D which is meant to hold 2 child DOM elements which represent a front and a back which show depending on which way the object is facing in 3D space. Basically a 2 sided element.<br><br>When assigned an element via the constructor any direct child elements with the class names <code>dom3d-front</code> and <code>dom3d-back</code> will automatically be set up as the object's front and back. If no front/back are given in the constructor, or present as <code>dom3d-front</code> and <code>dom3d-back</code> classed children in the main element, then elements will be created automatically.


| Param | Description |
| --- | --- |
| element | An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM. |
| [front] | An optional argument identifying an HTML Element that is meant to be this object's front side. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM. |
| [back] | An optional argument identifying an HTML Element that is meant to be this object's back side. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM. |


* * *

<a name="PaperElement3D+front"></a>

### paperElement3D.front : <code>HTMLElement</code>
Set to an HTML Element child of this one which will show when its front is facing forward.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>null</code>  

* * *

<a name="PaperElement3D+back"></a>

### paperElement3D.back : <code>HTMLElement</code>
Set to an HTML Element child of this one which will show when its back is facing forward.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>null</code>  

* * *

<a name="PaperElement3D+frontFacing"></a>

### paperElement3D.frontFacing : <code>Boolean</code>
Used to read whether the object considers itself front-facing at the moment.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>true</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+id"></a>

### paperElement3D.id : <code>String</code>
Each DisplayObject3D has a unique id property. When the element it represents has an id attribute at the time of instantiation it will match its element's id. Otherwise a unique one will be generated. You can also assign your own.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>generated if the element has no id</code>  

* * *

<a name="DisplayObject3D+element"></a>

### paperElement3D.element : <code>HTMLElement</code>
Every DisplayObject3D represents an HTML Element. You can access that element by accessing the object's element property. Conversely any element that has an associated DisplayObject3D will have a property .dom3dObject which references its DisplayObject3D.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+stage"></a>

### paperElement3D.stage : [<code>Stage3D</code>](#Stage3D)
Each DisplayObject3D has a stage property that allows it to tell which stage it is currently in the display list of. Is null when not in a display list.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+parent"></a>

### paperElement3D.parent : [<code>DisplayObject3D</code>](#DisplayObject3D)
Each DisplayObject3D has a parent property that allows it to tell which object is currently this object's parent in the display list. null if it is not in the display list. This is a reflection of the dom3d display list, not necessarily of the actual HTML parent/child structure.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>null</code>  
**Read only**: true  

* * *

<a name="DisplayObject3D+calc"></a>

### paperElement3D.calc : <code>Object</code>
Each DisplayObject3D has a calc property that allows for easy reading of the final calculated x, y, z, rotX, rotY, and rotZ values.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Read only**: true  
**Note**: The values on this property are only fully accurate immediately after a render/update. If you've changed values between render and reading then readings here may no longer be accurate.  

* * *

<a name="DisplayObject3D+x"></a>

### paperElement3D.x : <code>Number</code>
The x property sets the x coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+y"></a>

### paperElement3D.y : <code>Number</code>
The y property sets the y coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+z"></a>

### paperElement3D.z : <code>Number</code>
The z property sets the z coordinate value for the DisplayObject3D instance.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotX"></a>

### paperElement3D.rotX : <code>Number</code>
The rotX property sets the x-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotY"></a>

### paperElement3D.rotY : <code>Number</code>
The rotY property sets the y-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+rotZ"></a>

### paperElement3D.rotZ : <code>Number</code>
The rotZ property sets the z-axis rotation value for the DisplayObject3D instance in degrees.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+regX"></a>

### paperElement3D.regX : <code>Number</code>
The regX property sets the x registration point used for rotation/placement of the DisplayObject3D instance.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+regY"></a>

### paperElement3D.regY : <code>Number</code>
The regY property sets the y registration point used for rotation/placement of the DisplayObject3D instance.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  
**Default**: <code>0</code>  

* * *

<a name="DisplayObject3D+style"></a>

### paperElement3D.style : <code>Object</code>
Shortcut for easily setting styles on the element.

**Kind**: instance property of [<code>PaperElement3D</code>](#PaperElement3D)  

* * *

<a name="DisplayObject3D+addListener"></a>

### paperElement3D.addListener(type, listener, [useCapture], [wantsUntrusted])
Shortcut for adding event listeners to the object's dom element. Works same as `myObj.element.addEventListener(...);`

**Kind**: instance method of [<code>PaperElement3D</code>](#PaperElement3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |
| [wantsUntrusted] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+removeListener"></a>

### paperElement3D.removeListener(type, listener, [useCapture])
Shortcut for removing event listeners from the object's dom element. Works same as `myObj.element.removeEventListener(...);`

**Kind**: instance method of [<code>PaperElement3D</code>](#PaperElement3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| type | Identical to normal event listening. |
| listener | Identical to normal event listening. |
| [useCapture] | (optional) Identical to normal event listening. |


* * *

<a name="DisplayObject3D+dispatch"></a>

### paperElement3D.dispatch(event)
Shortcut for dispatching events from the object's dom element. Works same as `myObj.element.dispatchEvent(...);`

**Kind**: instance method of [<code>PaperElement3D</code>](#PaperElement3D)  
**Note**: All events are handled on the `element` property. This is only a shortcut.  

| Param | Description |
| --- | --- |
| event | Identical to normal event dispatching via `dispatchEvent`. |


* * *

<a name="StageEvent"></a>

## StageEvent ⇐ <code>Event</code>
**Kind**: global class  
**Extends**: <code>Event</code>  
**Note**: This is mostly instantiated internally. Externally the important parts are the StageEvent constants, which are used to add listeners, e.g. `myStage.addListener(StageEvent.UPDATE, handleUpdate)`  

* [StageEvent](#StageEvent) ⇐ <code>Event</code>
    * [new StageEvent(type)](#new_StageEvent_new)
    * [.UPDATE](#StageEvent.UPDATE) : <code>String</code>
    * [.AFTER_UPDATE](#StageEvent.AFTER_UPDATE) : <code>String</code>


* * *

<a name="new_StageEvent_new"></a>

### new StageEvent(type)
Constructs a StageEvent. Because on Internet Explorer `Event` is an object, not a function, this isnot a true extension of Event. The constructor creates and returns an Event itself instead of a StageEventwhich extends Event. So things such as `new StageEvent(StageEvent.UPDATE) instanceof StageEvent` will be false.


| Param | Description |
| --- | --- |
| type | The type of StageEvent being created. Must be a valid value from one of the StageEvent class constants. |


* * *

<a name="StageEvent.UPDATE"></a>

### StageEvent.UPDATE : <code>String</code>
Constant for the event that dispatches from the Stage3D element before every update.

**Kind**: static constant of [<code>StageEvent</code>](#StageEvent)  
**Note**: Using `.preventDefault()` within a listener for this event will cancel the upcoming render.  

* * *

<a name="StageEvent.AFTER_UPDATE"></a>

### StageEvent.AFTER_UPDATE : <code>String</code>
Constant for the event that dispatches from the Stage3D element after every update.

**Kind**: static constant of [<code>StageEvent</code>](#StageEvent)  

* * *

<a name="DepthOfField"></a>

## DepthOfField
**Kind**: global class  

* [DepthOfField](#DepthOfField)
    * [new DepthOfField([strength], [trueDistance], [focus])](#new_DepthOfField_new)
    * [.strength](#DepthOfField+strength) : <code>Number</code>
    * [.trueDistance](#DepthOfField+trueDistance) : <code>Boolean</code>
    * [.focus](#DepthOfField+focus) : <code>Object</code>


* * *

<a name="new_DepthOfField_new"></a>

### new DepthOfField([strength], [trueDistance], [focus])
Allows the creation of a DepthOfField instance which can be pushed into the stage's `effects` array to apply the effect to a scene.


| Param | Type | Description |
| --- | --- | --- |
| [strength] | <code>Number</code> | Optional shortcut to set strength. |
| [trueDistance] | <code>Boolean</code> | Optional shortcut to set trueDistance. |
| [focus] | <code>Object</code> | Optional shortcut to set focus. |


* * *

<a name="DepthOfField+strength"></a>

### depthOfField.strength : <code>Number</code>
Sets the strength of the effect.

**Kind**: instance property of [<code>DepthOfField</code>](#DepthOfField)  
**Default**: <code>1</code>  

* * *

<a name="DepthOfField+trueDistance"></a>

### depthOfField.trueDistance : <code>Boolean</code>
Sets whether the effect utilizes true distance from the focus point (true) or simply the object's z location (false) for the effect.

**Kind**: instance property of [<code>DepthOfField</code>](#DepthOfField)  
**Default**: <code>true</code>  

* * *

<a name="DepthOfField+focus"></a>

### depthOfField.focus : <code>Object</code>
Allows you to control the global point of focus for the depth of field. Can be set to a simple object with x, y, and z properties. If trueDistance is false then only the z is relevant.

**Kind**: instance property of [<code>DepthOfField</code>](#DepthOfField)  
**Default**: <code>{x:0,y:0,z:0}</code>  

* * *

