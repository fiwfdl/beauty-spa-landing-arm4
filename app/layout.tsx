import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Serenity Spa | Calm, considered beauty rituals',
  description:
    'Serenity Spa is a quiet city sanctuary of slow beauty rituals — sculpting facials, restorative massage, and unhurried care. Book your ritual today.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
