import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import config from '@/config';


export const metadata = {
  title: 'Claire Aid Foundation',
  description: 'Helping people',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* icons and fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        {/* graph tags */}
        <meta property="og:title" content="Claire Aid Foundation" />
        <meta property="og:description" content="Helping people" />
        <meta property="og:url" content={config.websiteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${config.websiteUrl}/logo.png`} />
        <meta property="og:site_name" content="Claire Aid Foundation" />
        <meta property="og:image:secure_url" content="/logo.png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="twitter:card" content="Helping people" />
        <meta property="twitter:description" content="Helping people" />
        <meta property="twitter:url" content={config.websiteUrl} />
        <meta property="twitter:image" content={`${config.websiteUrl}/logo.png`} />
        <meta property="twitter:site" content="Claire Aid Foundation" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
