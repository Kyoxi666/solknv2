import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description?: string;
}

export function PageSEO({ title, description }: PageSEOProps) {
  useEffect(() => {
    document.title = title;
    
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
    }
  }, [title, description]);

  return null;
}
