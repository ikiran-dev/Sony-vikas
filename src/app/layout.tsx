import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Expert Sony TV repair services in hyderabad, offering quick solutions for Sony TVs with professional technicians and affordable prices."
        />
        <meta
          name="keywords"
          content="Sony TV Service, Sony TV Repair, Sony LED TV Repair, Sony LCD TV Service, TV Service in hyderabad, Sony TV repair in hyderabad, affordable Sony TV repair, quality Sony TV service, Sony specialist engineers, TV installation, TV wall mounting"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="=https://sony-care.in/" />
        <meta
          property="og:title"
          content="Sony TV Repair Services in hyderabad"
        />
        <meta
          property="og:description"
          content="Professional Sony TV repair service in hyderabad with expert technicians. Get quick, affordable solutions for your Sony TV problems."
        />
        <meta property="og:image" content="=https://sony-care.in/favicon.jpg" />
        <meta property="og:site_name" content="Sony TV Repair" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="=https://sony-care.in/" />
        <meta
          property="twitter:title"
          content="Sony TV Repair Services in hyderabad"
        />
        <meta
          property="twitter:description"
          content="Professional Sony TV repair service in hyderabad with expert technicians. Quick and affordable Sony TV solutions."
        />
        <meta property="twitter:image" content="=https://sony-care.in/favicon.jpg" />
        <link href="/favicon.jpg" rel="icon" />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16931522972"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16835133025');
            `,
          }}
        /> */}
        <title>Sony TV Repair Services in hyderabad</title>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}> 
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
}

