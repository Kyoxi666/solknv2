export function Brands() {
  const brands = [
    { name: "Ubiquiti", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ubiquiti_Logo_Horizontal.png" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "Fortinet", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg" },
    { name: "TP-Link", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/TPLINK_Logo_2.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Cloudflare", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg" }

  ];

  return (
    <section className="hidden md:block py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">Deploying Enterprise-Grade Technology</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, idx) => (
            <img key={idx} src={brand.logo} alt={brand.name} className="h-8 md:h-10 object-contain max-w-[120px]" />
          ))}
        </div>
      </div>
    </section>
  );
}
