import "./globals.css";
import { ThemeProvider } from "../components/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Navneeth's Portfolio",
  description: "Welcome to Navneeth's personal portfolio. Explore projects, skills, and connect via social media!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
