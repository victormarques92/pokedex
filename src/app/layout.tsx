'use client';

import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { ContainerLayout } from './styles';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.title = 'Pokedex';
  }, []);

  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <ContainerLayout>
          {children}

          <Toaster />
        </ContainerLayout>
      </body>
    </html>
  );
}
