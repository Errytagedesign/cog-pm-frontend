import "@/styles/globals.css";
import Layout from "../../components/Layout/Layout";

import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./fonts/Euclid Circular A Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Euclid Circular A Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Euclid Circular A Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Euclid Circular A Light Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Euclid Circular A Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Euclid Circular A Medium Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Euclid Circular A Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Euclid Circular A Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Euclid Circular A SemiBold Italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Euclid Circular A SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={myFont.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
