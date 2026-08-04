const fs = require('fs');
const path = 'src/components/Features.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'What are your opening times this week?',
  'What are your IT support hours and response times?'
);

content = content.replace(
  'We are open Monday to Friday from 9:00 AM to 10:00 PM, and on weekends from 10:00 AM to 11:00 PM. Would you like me to book a table for you?',
  'Our helpdesk is available 24/7. We guarantee a 1-hour response time for critical IT emergencies, and same-day support for general requests. Would you like to schedule a free IT assessment?'
);

// Suggestions replacements
content = content.replace(
  '<span className="px-4 py-2 bg-white rounded-full text-xs text-gray-500 shadow-sm border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">Book a table</span>',
  '<span className="px-4 py-2 bg-white rounded-full text-xs text-gray-500 shadow-sm border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">Emergency IT Support</span>'
);

content = content.replace(
  '<span className="px-4 py-2 bg-white rounded-full text-xs text-gray-500 shadow-sm border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">View menu</span>',
  '<span className="px-4 py-2 bg-white rounded-full text-xs text-gray-500 shadow-sm border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">Network Installation</span>'
);

content = content.replace(
  '<span className="px-4 py-2 bg-white rounded-full text-xs text-gray-500 shadow-sm border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">Contact support</span>',
  '<span className="px-4 py-2 bg-white rounded-full text-xs text-gray-500 shadow-sm border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">Request a Quote</span>'
);

fs.writeFileSync(path, content);
