import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css';

import '@/assets/css/animate.css';
import '@/assets/css/elegant-icons.css';
import '@/assets/css/flaticon-set.css';

import '@/assets/css/validnavs.css';
import '@/assets/css/unit-test.css';
import '@/assets/css/spacing.css';
import '@/assets/css/style.css';

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Dependency from '@/components/utilities/Dependency';

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Dilabs - Creative Digital Agency React - NextJs Template"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Dependency />
        {children}
      </body>
    </html>
  );
}
