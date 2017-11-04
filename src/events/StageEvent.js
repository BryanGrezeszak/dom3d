
export default class StageEvent
{
	/**
	* Constant for the event that dispatches from the Stage3D element before every update.
	* @const StageEvent.UPDATE {String}
	* @note Using `.preventDefault()` within a listener for this event will cancel the upcoming render.
	*/
	static get UPDATE() { return 'stageupdate' };
	
	/**
	* Constant for the event that dispatches from the Stage3D element after every update.
	* @const StageEvent.AFTER_UPDATE {String}
	*/
	static get AFTER_UPDATE() { return 'afterstageupdate' };
	
	/**
	* Constructs a StageEvent. Because on Internet Explorer `Event` is an object, not a function, this is
	* not a true extension of Event. The constructor creates and returns an Event itself instead of a StageEvent
	* which extends Event. So things such as `new StageEvent(StageEvent.UPDATE) instanceof StageEvent` will be false.
	* @note This is mostly instantiated internally. Externally the important parts are the StageEvent constants, which are used to add listeners, e.g. `myStage.addListener(StageEvent.UPDATE, handleUpdate)`
	* @class StageEvent
	* @extends Event
	* @arg type - The type of StageEvent being created. Must be a valid value from one of the StageEvent class constants.
	**/
	constructor(type)
	{
		var initObj;
		if (type === StageEvent.UPDATE)
			initObj = {bubbles:false, cancelable:true};
		else if (type === StageEvent.AFTER_UPDATE)
			initObj = {bubbles:false, cancelable:false};
		else
			throw new Error('::DOM3D:: Invalid StageEvent type.')
		
		if (typeof Event === 'function') {
			return new Event(type, initObj);
		} else {
			if (initObj === undefined) initObj = {};
			var evt = document.createEvent('Event');
			evt.initEvent(type, !!initObj.bubbles, !!initObj.cancelable);
			return evt;
		}
	}
}
