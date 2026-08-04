const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'pages', 'services');
const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.tsx'));

const getWaveBackground = (index) => {
  const rotation1 = -20 + (index * 8);
  const rotation2 = -35 - (index * 6);
  const top1 = 50 + (index * 2);
  const left1 = 45 + (index * 3);
  
  return `<section className="py-24 md:py-32 bg-[#090e17] text-white relative overflow-hidden rounded-t-[3rem] md:rounded-[3rem] md:mx-6">
        {/* Background gradients for the blurred wave effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-[150vw] md:w-[120vw] h-[100px] md:h-[150px] bg-[#2b3d5b] rounded-[100%]"
            style={{
              top: '${top1}%',
              left: '${left1}%',
              transform: 'translate(-50%, -50%) rotate(${rotation1}deg)',
              filter: 'blur(60px)',
              opacity: 0.8
            }}
          ></div>
          <div 
            className="absolute w-[120vw] md:w-[90vw] h-[50px] md:h-[80px] bg-[#47638c] rounded-[100%]"
            style={{
              top: '${top1 + 5}%',
              left: '${left1 - 5}%',
              transform: 'translate(-50%, -50%) rotate(${rotation2}deg)',
              filter: 'blur(50px)',
              opacity: 0.7
            }}
          ></div>
          <div 
            className="absolute w-[150vw] md:w-[100vw] h-[100vw] bg-[#05080f] rounded-full"
            style={{
              top: '80%',
              left: '40%',
              filter: 'blur(50px)',
              opacity: 1
            }}
          ></div>
          <div 
            className="absolute w-[100vw] md:w-[80vw] h-[80vw] bg-[#05080f] rounded-full"
            style={{
              top: '-40%',
              left: '-10%',
              filter: 'blur(60px)',
              opacity: 1
            }}
          ></div>
          <div 
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          ></div>
        </div>`;
};

files.forEach((file, idx) => {
  const filePath = path.join(servicesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <section className="... bg-[color]-950 ... rounded-[3rem] ...">
  // Since the classes are: "py-24 md:py-32 bg-[color]-950 text-white relative overflow-hidden rounded-t-[3rem] md:rounded-[3rem] md:mx-6"
  // or "py-24 md:py-32 bg-[color]-950 text-white rounded-t-[3rem] md:rounded-[3rem] md:mx-6 overflow-hidden relative"
  const regex1 = /<section className="py-24 md:py-32 bg-[a-z0-9-]+-950 text-white relative overflow-hidden rounded-t-\[3rem\] md:rounded-\[3rem\] md:mx-6">/g;
  const regex2 = /<section className="py-24 md:py-32 bg-[a-z0-9-]+-950 text-white rounded-t-\[3rem\] md:rounded-\[3rem\] md:mx-6 overflow-hidden relative">/g;
  
  content = content.replace(regex1, getWaveBackground(idx));
  content = content.replace(regex2, getWaveBackground(idx + 10));

  fs.writeFileSync(filePath, content);
  console.log('Updated ' + file);
});
