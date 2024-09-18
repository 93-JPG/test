"use client"; // 将组件标记为客户端组件 
/* eslint-disable @next/next/no-page-custom-font */
import { useEffect, useState } from 'react';
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import type { Metadata, Viewport } from "next";

import PrivacyModal from './components/PrivacyModal'; // 确保路径正确  
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getServerSideConfig } from "./config/server";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { metadata } from './metadata'; // 导入metadata 


// import '../styles/globals.css'; // 引入全局样式


const serverConfig = getServerSideConfig();


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('hasAgreedToPrivacyPolicy');
    if (!hasAgreed) {
      setIsModalVisible(true);
    }
  }, []);

  const handleAgree = () => {
    // localStorage.setItem('hasAgreedToPrivacyPolicy', 'true');
    // setIsModalVisible(false);
    // 在开发模式下清除同意状态  
    if (process.env.NODE_ENV === 'development') {
      localStorage.removeItem('hasAgreedToPrivacyPolicy');
    } else {
      localStorage.setItem('hasAgreedToPrivacyPolicy', 'true');
    }
    setIsModalVisible(false);
  };

  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>
        {isModalVisible && <PrivacyModal onAgree={handleAgree} />}
        {children}
        {serverConfig?.isVercel && (
          <>
            <SpeedInsights />
          </>
        )}
        {serverConfig?.gtmId && (
          <>
            <GoogleTagManager gtmId={serverConfig.gtmId} />
          </>
        )}
        {serverConfig?.gaId && (
          <>
            <GoogleAnalytics gaId={serverConfig.gaId} />
          </>
        )}
      </body>
    </html>
  );
}  