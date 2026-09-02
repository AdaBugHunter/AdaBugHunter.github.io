import "./globals.css";

export const metadata = {
  title: "Areeba | Frontend Developer",
  description:
    "Frontend Developer portfolio focused on React, Next.js, JavaScript and responsive user interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
