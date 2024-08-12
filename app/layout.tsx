import Providers from "./Provider";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>E-Learing</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your app description here" />
      </head>

      <body className="font-poppins bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
