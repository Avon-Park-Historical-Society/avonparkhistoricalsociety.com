const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');
const matter = require('gray-matter');

const inFile = path.join(__dirname, '_pages/home.md');
const outFile = path.join(__dirname, '_pages/home.md');

const fileContent = fs.readFileSync(inFile, 'utf8');

// Parse frontmatter
const parsed = matter(fileContent);

// Initialize Turndown
const turndownService = new TurndownService({
	headingStyle: 'atx',
	codeBlockStyle: 'fenced'
});

// Configure elements to keep as raw HTML (to preserve layouts/classes/scripts)
turndownService.keep([
	'div', 'style', 'script', 'form', 'input', 'select', 'option',
	'iframe', 'canvas', 'section', 'article', 'aside', 'header',
	'footer', 'a', 'span', 'button', 'img'
]);

const markdownBody = turndownService.turndown(parsed.content);

// Reassemble with frontmatter
const output = matter.stringify(markdownBody, parsed.data);

fs.writeFileSync(outFile, output, 'utf8');
console.log(`Converted to ${outFile}`);
