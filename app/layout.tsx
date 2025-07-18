import './globals.css';

export const metadata = {
  title: 'UAE Tax Assistant',
  description: 'Automated UAE Corporate Tax Filing Landing Page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}