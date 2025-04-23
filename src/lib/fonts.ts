import { Poppins, Baloo_2 } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const baloo2 = Baloo_2({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baloo2',
}); 