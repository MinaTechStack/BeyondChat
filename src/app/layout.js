import './globals.css'

export const metadata = {
  title: 'BeyondChats Panel',
  description: 'Intercom-style Admin UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fafb] text-gray-900">{children}</body>
    </html>
  );
}
