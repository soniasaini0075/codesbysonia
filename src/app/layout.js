// layout.js
import './globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ClickSpark from './widgets/clickSpark/ClickSpark';

export const metadata = {
  title: 'Codes by Sonia',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*<meta name="theme-color" content="#e9d2f4">*/}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <ClickSpark
          sparkColor="#FFD700"
          sparkSize={16}
          sparkRadius={16}
          sparkCount={8}
          duration={400}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
