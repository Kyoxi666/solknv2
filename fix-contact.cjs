const fs = require('fs');

const path = 'src/pages/ContactPage.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /<option value="Managed IT">Managed IT<\/option>[\s\S]*<option value="Network Monitoring">Network Monitoring<\/option>/,
  '<option value="Managed IT Support">Managed IT Support</option>\n                <option value="IT Outsourcing">IT Outsourcing</option>\n                <option value="Web Development & Hosting">Web Development & Hosting</option>\n                <option value="AI Business Solutions">AI Business Solutions</option>\n                <option value="Network Infrastructure">Network Infrastructure</option>\n                <option value="Network Monitoring">Network Monitoring</option>'
);

fs.writeFileSync(path, content);
