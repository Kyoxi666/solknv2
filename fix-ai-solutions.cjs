const fs = require('fs');
const path = 'src/pages/services/AIBusinessSolutionsPage.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/NEVER MISS A LEAD/g, 'AUTOMATE YOUR BUSINESS');
content = content.replace(/Intelligent conversational agents that handle customer inquiries, route calls, and provide support 24\/7\. Eliminate wait times\./g, 'Leverage artificial intelligence to automate customer interactions, streamline operations, and accelerate business growth.');
content = content.replace(/Smart Chatbots <br\/>\s*Made Effortless!/g, 'AI Solutions <br/>\\n            Built to Scale');
content = content.replace(/We create chatbot experiences that ignite growth by reimagining customer connection\./g, 'We deploy AI solutions that ignite growth by reimagining business operations.');
content = content.replace(/Engage <span className="italic font-light">customers<\/span> <span className="italic font-light">instantly<\/span> online/g, 'Scale <span className="italic font-light">operations</span> <span className="italic font-light">instantly</span> with AI');
content = content.replace(/Deploy intelligent agents that provide 24\/7 support, capture leads, and automate routine tasks, ensuring your business never sleeps\./g, 'Deploy intelligent workflows that automate repetitive tasks, analyze complex data, and enhance decision making.');
content = content.replace(/Provide instant, accurate responses to common customer questions/g, 'Automate manual data entry and repetitive administrative tasks');
content = content.replace(/Capture and qualify leads around the clock/g, 'Predictive analytics for data-driven decision making');
content = content.replace(/Reduce support ticket volume and wait times/g, 'Personalized customer experiences at scale');
content = content.replace(/Seamlessly hand off complex queries to human agents/g, 'Intelligent document processing and data extraction');
content = content.replace(/Integrate with your existing CRM and tech stack/g, 'Seamless integration with existing enterprise systems');

content = content.replace(/For years, we've worked alongside businesses to rediscover their customer service essence\. Through AI, we craft chatbots that connect, resolve, and drive real satisfaction\./g, 'For years, we have worked alongside businesses to rediscover their operational efficiency. Through AI, we craft solutions that streamline, automate, and drive real productivity.');
content = content.replace(/Every interaction is a fusion of empathy, accuracy and speed\./g, 'Every solution is a fusion of intelligence, automation and speed.');

content = content.replace(/\(01\) Natural Language/g, '(01) Workflow Automation');
content = content.replace(/Understand human intent\./g, 'Eliminate repetitive tasks.');
content = content.replace(/Advanced NLP algorithms that comprehend nuances, slang, and context, providing natural and human-like interactions\./g, 'Intelligent agents that trigger actions across multiple systems based on complex rules and machine learning.');
content = content.replace(/Contextual Memory/g, 'Process Mining');
content = content.replace(/Multi-language Support/g, 'RPA Integration');
content = content.replace(/Sentiment Analysis/g, 'Event Triggers');
content = content.replace(/Typo Tolerance/g, 'Data Synchronization');

content = content.replace(/\(02\) Lead Generation/g, '(02) Predictive Analytics');
content = content.replace(/Qualify prospects automatically\./g, 'Forecast future trends.');
content = content.replace(/Engage website visitors proactively, ask qualifying questions, and push high-value leads directly into your sales pipeline\./g, 'Machine learning models that analyze historical data to predict customer behavior, inventory needs, and market shifts.');
content = content.replace(/Proactive Engagement/g, 'Demand Forecasting');
content = content.replace(/CRM Integration/g, 'Churn Prediction');
content = content.replace(/Meeting Scheduling/g, 'Risk Modeling');
content = content.replace(/Data Collection/g, 'Dynamic Pricing');

content = content.replace(/\(03\) Customer Support/g, '(03) Intelligent Assistants');
content = content.replace(/Resolve issues instantly\./g, 'Augment human capabilities.');
content = content.replace(/Automate tier-1 support by connecting the chatbot to your knowledge base, allowing for instant resolution of common problems\./g, 'Copilots that assist your team with research, drafting communications, and surfacing relevant information instantly.');
content = content.replace(/FAQ Automation/g, 'Knowledge Retrieval');
content = content.replace(/Knowledge Base Sync/g, 'Drafting & Summary');
content = content.replace(/Ticket Creation/g, 'Code Generation');
content = content.replace(/Human Handoff/g, 'Data Analysis');

content = content.replace(/Queries Handled/g, 'Tasks Automated');
content = content.replace(/1M\+/g, '5M+');
content = content.replace(/Resolution Rate/g, 'Time Saved');
content = content.replace(/85%/g, '10,000h');
content = content.replace(/Response Time/g, 'Error Reduction');
content = content.replace(/<2s/g, '99%');
content = content.replace(/Availability/g, 'ROI');
content = content.replace(/24\/7/g, '400%');

content = content.replace(/From initial mapping to continuous learning, here's how we deploy your chatbot\./g, 'From initial strategy to full deployment, here is how we integrate AI into your business.');

content = content.replace(/Conversation Design/g, 'AI Strategy Assessment');
content = content.replace(/We map out user journeys and design conversation flows that feel natural and align with your brand voice\./g, 'We analyze your business processes to identify the highest-impact opportunities for AI automation.');

content = content.replace(/Training & Integration/g, 'Model Development');
content = content.replace(/We train the AI on your specific data and integrate it seamlessly with your existing website and CRM\./g, 'We build and train custom machine learning models or fine-tune existing foundation models on your data.');

content = content.replace(/Testing & Deployment/g, 'Integration & Testing');
content = content.replace(/Rigorous testing across edge cases before a smooth, monitored launch on your digital channels\./g, 'Rigorous testing and seamless integration of AI capabilities into your existing software infrastructure.');

content = content.replace(/Continuous Learning/g, 'Monitoring & Refinement');
content = content.replace(/We monitor interactions and continuously refine the AI's responses to improve accuracy and resolution rates\./g, 'We continuously monitor model performance and refine algorithms to ensure optimal accuracy and business impact.');

fs.writeFileSync(path, content);
