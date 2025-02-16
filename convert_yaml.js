const fs = require('fs');
const yaml = require('js-yaml');

// Read the YAML file
const yamlContent = fs.readFileSync('projects.yaml', 'utf8');
const projectData = yaml.load(yamlContent);

// Generate the JavaScript file
const jsContent = `const projectData = ${JSON.stringify(projectData, null, 2)}
export default projectData`;

// Write to the output file
fs.writeFileSync('scripts/projectMeta.js', jsContent);

console.log('Project data generated successfully!');