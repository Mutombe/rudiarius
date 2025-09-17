import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/nav";
import HomePage from "./components/home";
import AboutPage from "./components/about";
import { ApproachPage } from "./components/approach";
import { StrategiesPage } from "./components/approach";
import TeamPage from "./components/team";
import ContactPage from "./components/contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <Router>
      <>
        <style jsx>{`
          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Light.otf")
              format("opentype");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Medium.otf")
              format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gravesend Sans";
            src: url("./fonts/fonnts.com-Gravesend_Sans_Bold.otf")
              format("opentype");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }

          /* Century Gothic Font Face */
          @font-face {
            font-family: "Century Gothic Custom";
            src: url("./fonts/weezerfont.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Gellix";
            src: url("./fonts/Gellix-Light.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Gellix";
            src: url("./fonts/Gellix-Regular.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          /* Font utility classes */
          .gravesend-sans {
            font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
              Verdana, sans-serif;
          }

          .roboto-font {
            font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }

          .century-gothic {
            font-family: "Century Gothic Custom", "Century Gothic", "Arial",
              sans-serif;
          }

          .gellix-font {
            font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
              sans-serif;
          }

          body {
            overflow-x: hidden;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/approach" element={<ApproachPage />} />
              <Route path="/strategies" element={<StrategiesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </>
    </Router>
  );
};

export default App;
