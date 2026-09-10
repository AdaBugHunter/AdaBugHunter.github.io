import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://adabughunter.github.io"),

  title: "Areeba Ali | Frontend Developer",

  description:
    "Frontend Developer building clean, responsive and modern web applications with React, Next.js, JavaScript and Tailwind CSS.",

  openGraph: {
    title: "Areeba Ali | Frontend Developer",
    description:
      "Building clean, responsive and modern web applications with React, Next.js, JavaScript and Tailwind CSS.",
    url: "https://adabughunter.github.io",
    siteName: "Areeba Ali Portfolio",
    images: [
      {
        url: "/og-image.png",
        alt: "Areeba Ali - Frontend Developer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Areeba Ali | Frontend Developer",
    description:
      "Building clean, responsive and modern web applications with React, Next.js, JavaScript and Tailwind CSS.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
