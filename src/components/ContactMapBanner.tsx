import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Phone, Mail, MapPin } from 'lucide-react';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  {
    markerOffset: -30,
    name: "Harrow, London",
    coordinates: [-0.3340, 51.5806] as [number, number]
  },
  {
    markerOffset: -30,
    name: "Gujarat, India",
    coordinates: [71.1924, 22.2587] as [number, number]
  }
];

export function ContactMapBanner() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20 mb-8">
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#E0E0E0] flex flex-col lg:flex-row items-center gap-12">
        
        {/* Contact Info */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <h3 className="text-3xl font-medium tracking-tight text-[#000000]">Global Reach,<br/>Local Focus.</h3>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 group">
              <div className="bg-[#F7F7F7] p-3 rounded-full text-[#000000] group-hover:bg-[#E87722] group-hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#6B6B6B] mb-1">Give us a call</p>
                <a href="tel:+447540319866" className="text-lg font-medium text-[#000000] hover:text-[#E87722] transition-colors">+44 7540 319866</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-[#F7F7F7] p-3 rounded-full text-[#000000] group-hover:bg-[#E87722] group-hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#6B6B6B] mb-1">Send an email</p>
                <a href="mailto:info@solkn.com" className="text-lg font-medium text-[#000000] hover:text-[#E87722] transition-colors">info@solkn.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-[#F7F7F7] p-3 rounded-full text-[#000000] group-hover:bg-[#E87722] group-hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#6B6B6B] mb-1">Our locations</p>
                <p className="text-lg font-medium text-[#000000]">Harrow, London</p>
                <p className="text-lg font-medium text-[#000000] mt-1">Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="lg:w-2/3 w-full bg-[#F7F7F7] rounded-3xl overflow-hidden relative flex items-center justify-center border border-[#E0E0E0]" style={{ height: '400px' }}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 250,
              center: [40, 35] // Centered between UK and India
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#F7F7F7"
                    stroke="#E0E0E0"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#EFEFEF" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <g
                  fill="#E87722"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                  <circle cx="12" cy="10" r="3" fill="white" />
                </g>
                <text
                  textAnchor="middle"
                  y={markerOffset}
                  style={{ fontFamily: "inherit", fill: "#111827", fontSize: "12px", fontWeight: 600, filter: "drop-shadow(0px 1px 2px white)" }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>

      </div>
    </div>
  );
}
