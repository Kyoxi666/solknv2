export function Brands() {
  // Two rows with different scroll speeds create depth
  const row1 = [
    { name: 'Ubiquiti',    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Ubiquiti_Logo_Horizontal.png' },
    { name: 'Cisco',       logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'Fortinet',    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg' },
    { name: 'Anthropic',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/330px-Anthropic_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
    { name: 'Microsoft',   logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'AWS',         logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'SolarWinds',  logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Official_SolarWinds_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' },
    { name: 'Cloudflare',  logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg' },
    { name: 'TP-Link',     logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/TPLINK_Logo_2.svg' },
  ];

  const row2 = [
    { name: 'SolarWinds',  logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Official_SolarWinds_Logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' },
    { name: 'Cloudflare',  logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg' },
    { name: 'Anthropic',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/330px-Anthropic_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail' },
    { name: 'TP-Link',     logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/TPLINK_Logo_2.svg' },
    { name: 'Ubiquiti',    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Ubiquiti_Logo_Horizontal.png' },
    { name: 'AWS',         logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Fortinet',    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg' },
    { name: 'Cisco',       logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'Microsoft',   logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
          Trusted technology partners
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative w-full overflow-hidden mb-3">
        <div className="marquee-track">
          {[...row1, ...row1].map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center px-10 md:px-14 shrink-0">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 md:h-8 object-contain max-w-[100px] md:max-w-[120px] grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reversed) */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track-reverse">
          {[...row2, ...row2].map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center px-10 md:px-14 shrink-0">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-5 md:h-7 object-contain max-w-[90px] md:max-w-[110px] grayscale opacity-30 hover:opacity-60 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
