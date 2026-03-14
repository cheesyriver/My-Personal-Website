import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Background from "./components/Background";
import { ThemeProvider } from "./providers/theme-provider";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppinsSans.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme="darkmode"
          themes={["darkmode", "lightmode"]}
        >
          <Background />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
