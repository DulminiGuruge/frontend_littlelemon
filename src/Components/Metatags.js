import React from 'react';
import { Helmet } from 'react-helmet';

function MyComponent() {
  return (
    <div>
      <Helmet>
        <title>Little Lemon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="author" content="Dulmini Guruge" />
        <meta property="og:title" content="Little Lemon App" />
    
      </Helmet>
     
    </div>
  );
}

export default MyComponent;