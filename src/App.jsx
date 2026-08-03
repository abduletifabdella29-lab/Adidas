import React from "react"
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import PromotionalBanner from "./Components/PromotionalBanner"
import HistorySection from "./Components/HistorySection.jsx"
import InterestingSection from "./Components/InterestingSection.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
    return (
        <>
        <Header />
        <HeroSection />
        <PromotionalBanner />
        <HistorySection />
        <InterestingSection />
        <Footer />
        </>
    )
}

export default App