import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, unknown>;
}

const serializeJsonLd = (value: Record<string, unknown>) =>
  JSON.stringify(value).replace(/</g, '\\u003c');

export function PageSEO({ title, description, canonicalUrl, jsonLd }: PageSEOProps) {
  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // 2. Meta Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }

      // OG Description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      } else {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        ogDesc.setAttribute('content', description);
        document.head.appendChild(ogDesc);
      }
    }

    // 3. OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', title);
      document.head.appendChild(ogTitle);
    }

    // 4. Canonical URL
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonicalUrl);
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        linkCanonical.setAttribute('href', canonicalUrl);
        document.head.appendChild(linkCanonical);
      }
    }

    // 5. JSON-LD Schema
    let scriptJsonLd: HTMLScriptElement | null = null;
    if (jsonLd) {
      scriptJsonLd = document.createElement('script');
      scriptJsonLd.type = 'application/ld+json';
      scriptJsonLd.id = 'page-jsonld-schema';
      scriptJsonLd.text = serializeJsonLd(jsonLd);
      
      const existingScript = document.getElementById('page-jsonld-schema');
      if (existingScript) {
        existingScript.replaceWith(scriptJsonLd);
      } else {
        document.head.appendChild(scriptJsonLd);
      }
    }

    return () => {
      if (scriptJsonLd && scriptJsonLd.parentNode) {
        scriptJsonLd.parentNode.removeChild(scriptJsonLd);
      }
    };
  }, [title, description, canonicalUrl, jsonLd]);

  return null;
}

export function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ITService",
    "name": "SOLKN",
    "url": "https://solkn.com",
    "logo": "https://solkn.com/solknlogo.png",
    "description": "Managed IT support, secure cloud hosting, custom web development, and AI-powered business solutions.",
    "telephone": "+447540319866",
    "email": "info@solkn.com",
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Gujarat",
        "addressCountry": "IN"
      }
    ],
    "sameAs": [
      "https://github.com/Kyoxi666"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schemaData) }}
    />
  );
}
