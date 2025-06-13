import React from 'react';

const Schema = () => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Glass Action Cleaning",
      "image": "https://glassactioncleaning.com/logo.png",
      "url": "https://glassactioncleaning.com",
      "telephone": "562-280-4661",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Long Beach",
        "addressRegion": "CA",
        "postalCode": "90804",
        "addressCountry": "US"
      },
      "openingHours": "Mo-Sa 08:00-18:00",
      "priceRange": "$$",
      "sameAs": [
        "https://www.instagram.com/glassactioncleaning",
        "https://www.yelp.com/biz/glass-action-cleaning-long-beach",
        "https://g.co/kgs/z2i5wq5"
      ],
      "description": "Glass Action Cleaning offers expert window cleaning, solar panel washing, and pressure washing services in Long Beach and surrounding areas."
    }
    ` }} />
  );
};

export default Schema;
