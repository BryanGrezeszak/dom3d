
// determines how to use/create what's supplied as a constructor
// for a given display object as actual HTML

// 1: if nothing given returns empty div
// 2: if an actual HTMLElement is given then just return that
// 3: if an object is given treats as object params for buildElementFromObject (see below)
// 4: if string is given then either treats as literal markup (if starts with '<') or as a query selector for preexisting element
export default function determineElement(content)
{
	// if none given, make a div
	if (!content)
		return document.createElement('div');
	
	// if HTMLElement return as is
	if (content instanceof HTMLElement)
		return content;
	
	// if an object is given, make an element based on the criteria
	if (typeof content === 'object')
		return buildElementFromObject(content);
	
	// if it's a string...
	if (typeof content === 'string') {
		// if it's a piece of HTML parse it and return 1 element
		if (content.charAt(0) === '<') {
			var wrap = document.createElement('div');
			wrap.innerHTML = content;
			return wrap.firstChild;
		}
		// otherwise assume it's a query selector and return the first match
		else {
			return document.querySelector(content);
		}
	}
	
	// otherwise throw
	throw new Error('::DOM3D:: Invalid content given for creation of element.');
}


// type: ['div' or 'img' if has a `src`] the element type to make
// id: specify an id for the element
// className: string class name, or space delimeted list, or Array of class names
// innerHTML or content: specify innerHTML
// src: makes it an img with a source
// alt: should only use on images, but gives an alt tag
function buildElementFromObject(obj)
{
	var elem = document.createElement(obj.type || (obj.src ? 'img':'div'));
	
	if (obj.id)
		elem.setAttribute('id', obj.id);
	
	if (obj.className && typeof obj.className === 'string')
		elem.className = obj.className;
	if (obj.className && Array.isArray(obj.className))
		elem.className = obj.className.join(' ');
	
	if (obj.content)
		elem.innerHTML = obj.content;
	if (obj.innerHTML)
		elem.innerHTML = obj.innerHTML;
	
	if (obj.src)
		elem.src = obj.src;
	if (obj.alt)
		elem.alt = obj.alt;
	
	return elem;
}