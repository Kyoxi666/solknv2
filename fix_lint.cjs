const fs = require('fs');
let content = fs.readFileSync('src/pages/CaseStudyPage.tsx', 'utf8');
content = content.replace(`              )}
              )}
            </div>`, `              )}
            </div>`);
fs.writeFileSync('src/pages/CaseStudyPage.tsx', content);
