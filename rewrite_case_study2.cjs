const fs = require('fs');
let content = fs.readFileSync('src/pages/CaseStudyPage.tsx', 'utf8');

const replacement = `              {id === 'ai-powered-booking-assistant' ? (
                <>
                  <p className="mb-6 font-medium text-lg text-teal-700">
                    Helping Customers Find and Reserve Event Decorations Instantly with AI
                  </p>
                  
                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Challenge</h2>
                  <p className="mb-4">
                    A decoration rental business was receiving frequent customer enquiries about product availability, especially for popular event items such as centrepieces, table decorations, and venue accessories.
                  </p>
                  <p className="mb-4">
                    Customers often contacted the business asking questions such as:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>"Are these centrepieces available for my wedding date?"</li>
                    <li>"Can I rent 20 table decorations for my event?"</li>
                    <li>"Do you have this item available next Saturday?"</li>
                    <li>"How much would it cost to hire these decorations?"</li>
                  </ul>
                  <p className="mb-4">
                    Managing these enquiries manually was becoming time-consuming, especially during busy periods when multiple customers were requesting availability checks at the same time.
                  </p>
                  <p className="mb-8">
                    The business needed a solution that could provide quick responses, reduce administrative workload, and improve the customer booking experience.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Solution: An AI-Powered Decoration Booking Assistant</h2>
                  <p className="mb-4">
                    Solkn developed an AI chatbot designed specifically for the decoration rental industry.
                  </p>
                  <p className="mb-4">
                    The AI assistant was integrated into the company's website, allowing customers to ask questions and receive instant responses without waiting for a member of staff.
                  </p>
                  <p className="mb-8">
                    Instead of simply answering general questions, the AI assistant was designed to understand customer requirements and help with the initial booking process.
                  </p>

                  <h2 className="text-xl font-medium text-gray-900 mb-6">How the AI Booking Process Works</h2>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-4">1. Customer Starts a Conversation</h3>
                  <p className="mb-4">A customer visits the website and asks the AI assistant:</p>
                  <p className="mb-4 italic">"Can I rent your gold centrepieces for my wedding on 15th September?"</p>
                  <p className="mb-4">The AI understands the customer's request and identifies key details, including:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Product requested</li>
                    <li>Event date</li>
                    <li>Quantity required</li>
                    <li>Type of event</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">2. AI Checks Availability</h3>
                  <p className="mb-4">
                    The chatbot connects with the business booking system or inventory database to check whether the requested items are available.
                  </p>
                  <p className="mb-4">It verifies:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Whether the item is currently available</li>
                    <li>Whether enough stock exists</li>
                    <li>Whether another booking overlaps with the requested date</li>
                    <li>Whether the rental period is possible</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">3. Customer Receives an Instant Response</h3>
                  <p className="mb-4">If the item is available, the AI can respond:</p>
                  <p className="mb-4 italic">"Great news! We currently have enough gold centrepieces available for 15th September. We can reserve these for your event. Would you like to continue with a booking enquiry?"</p>
                  <p className="mb-4">If the item is unavailable:</p>
                  <p className="mb-8 italic">"Unfortunately, those centrepieces are already booked for your selected date. However, we do have similar designs available that may suit your event."</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">4. Lead Information Is Captured</h3>
                  <p className="mb-4">If the customer wants to proceed, the AI collects important information such as:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Customer name</li>
                    <li>Contact details</li>
                    <li>Event date</li>
                    <li>Venue location</li>
                    <li>Quantity required</li>
                    <li>Decoration preferences</li>
                  </ul>
                  <p className="mb-8">
                    This information is then passed to the business team, allowing staff to follow up with a qualified enquiry rather than starting from the beginning.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Benefits</h2>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Faster Customer Responses</h3>
                  <p className="mb-4">Customers no longer need to wait for business hours to receive answers.</p>
                  <p className="mb-8">The AI assistant provides support 24/7, helping customers make decisions even outside normal working hours.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Reduced Administrative Work</h3>
                  <p className="mb-4">Previously, staff had to manually respond to every availability enquiry.</p>
                  <p className="mb-4">The AI now handles repetitive questions, allowing employees to focus on:</p>
                  <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li>Preparing orders</li>
                    <li>Managing events</li>
                    <li>Working with customers</li>
                    <li>Growing the business</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">Improved Customer Experience</h3>
                  <p className="mb-4">Customers planning weddings, parties, and events often need quick answers.</p>
                  <p className="mb-8">Instant availability checks create a smoother booking experience and reduce the chance of customers choosing a competitor.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-4">More Qualified Leads</h3>
                  <p className="mb-4">Instead of receiving incomplete enquiries, the business receives structured customer information.</p>
                  <p className="mb-8">Staff can focus their time on customers who are ready to proceed.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">Future Enhancements</h2>
                  <p className="mb-6">The AI assistant can continue to evolve with additional features, including:</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Automated Quotes</h3>
                  <p className="mb-4">The AI can calculate estimated rental costs based on:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Number of items required</li>
                    <li>Rental duration</li>
                    <li>Delivery location</li>
                    <li>Additional services</li>
                  </ul>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Appointment Booking</h3>
                  <p className="mb-6">Customers could schedule consultations directly through the chatbot.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Image-Based Recommendations</h3>
                  <p className="mb-6">Customers could upload images of their venue or theme, allowing AI to suggest matching decoration options.</p>

                  <h3 className="text-lg font-medium text-gray-900 mb-2">Automated Follow-Ups</h3>
                  <p className="mb-8">If a customer leaves without completing a booking, the system can send reminders or follow-up messages.</p>

                  <hr className="border-gray-200 my-8" />

                  <h2 className="text-xl font-medium text-gray-900 mb-6">The Result</h2>
                  <p className="mb-4">By implementing an AI-powered booking assistant, the decoration rental business transformed how it handles customer enquiries.</p>
                  <p className="mb-4">The solution helped the company:</p>
                  <ul className="list-none mb-6 space-y-2 text-gray-800">
                    <li>✔ Respond instantly to customer questions</li>
                    <li>✔ Reduce repetitive admin tasks</li>
                    <li>✔ Improve booking efficiency</li>
                    <li>✔ Capture more enquiries</li>
                    <li>✔ Provide a better customer experience</li>
                  </ul>
                  <p className="mb-8">
                    AI became an extension of the team, helping the business manage demand while allowing employees to focus on delivering exceptional events.
                  </p>

                  <hr className="border-gray-200 my-8" />

                  <h1 className="text-2xl font-normal text-gray-900 mb-6 tracking-tight">How Solkn Can Help</h1>
                  <p className="mb-4">
                    At Solkn, we help businesses automate customer interactions using AI-powered solutions.
                  </p>
                  <p className="mb-4">Our AI services include:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Website AI chatbots</li>
                    <li>Virtual receptionists</li>
                    <li>AI appointment booking</li>
                    <li>Automated customer enquiries</li>
                    <li>Lead qualification systems</li>
                    <li>Business workflow automation</li>
                  </ul>
                  <p className="mb-8">
                    Whether you operate a decoration business, restaurant, professional service, or growing company, we can design AI solutions that save time and improve customer experiences.
                  </p>
                </>
              ) : (
                <div className="py-12 text-center text-gray-500">
                  Case study content is being written...
                </div>
              )}`;

const startIdx = content.indexOf("{id === 'why-food-businesses-need-reliable-it' ? (");
const endStr = `              )}
            </div>
          </div>`;
const endIdx = content.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    fs.writeFileSync('src/pages/CaseStudyPage.tsx', before + replacement + "\n" + after);
    console.log('Replaced successfully');
} else {
    console.log('Could not find boundaries');
}

