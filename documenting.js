
var jsdoc2md = require('jsdoc-to-markdown');
var fs = require('fs');

var outfile = 'docs/API.md';
var templatefile = 'docs/API.hbs';

console.log(`getting template from ${templatefile}...`)

var template = fs.readFileSync(templatefile)+'';
var files = [
	'src/DisplayObject3D.js',
	'src/Stage3D.js',
	'src/Group3D.js',
	'src/Element3D.js',
	'src/PaperElement3D.js',
	'src/events/StageEvent.js',
	'src/effects/DepthOfField.js',
]

console.log(`beginning render...`);

render();

async function render()
{
	var output = await jsdoc2md.render({files, template, separators:true});
	console.log('render complete; writing...')
	fs.writeFileSync(outfile, output);
	console.log(`saved to ${outfile}`);
}
