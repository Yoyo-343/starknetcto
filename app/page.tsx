"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const CoinDot = () => (
  <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center border border-salmon relative">
    <span className="text-[8px] font-bold text-navy absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">$</span>
  </div>
)

// First, update or add this CSS at the top if you have a style section
const sequenceStyles = `
  .sequence-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 25, 47, 0.9);
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    padding-top: 10vh;
    overflow-y: auto;
  }

  .sequence-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .sequence-line {
    font-size: 3rem;
    font-weight: bold;
    color: #FF7B7B;
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export default function Home() {
  const [showSequence, setShowSequence] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const sequence = [
    "Initiating Community Take-Over...",
    "Deploying chaos...",
    "Error: Take-Over already in progress",
    "Always has been 🔫"
  ]

  const startSequence = () => {
    // Don't start if already running
    if (showSequence) return

    setShowSequence(true)
    setCurrentStep(0)
    
    // Create sequence timing
    sequence.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index)
      }, index * 1000)
    })

    // Reset everything 2 seconds after the last message
    const totalDuration = (sequence.length - 1) * 1000 + 2000
    setTimeout(() => {
      setShowSequence(false)
      setCurrentStep(0)
    }, totalDuration)
  }

  return (
    <div className="min-h-screen bg-navy p-4 sm:p-8 relative">
      {/* Border Decoration */}
      <div className="absolute inset-4 border-2 border-salmon rounded-lg [border-style:wave]" style={{ borderImage: 'url("data:image/svg+xml,%3Csvg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 2C5 2 5 0 10 0C15 0 15 2 20 2" stroke="%23FF7B7B" stroke-width="0.5" vector-effect="non-scaling-stroke"%3E%3C/path%3E%3C/svg%3E") 1 stretch' }}>
        {/* Coins at corners */}
        <div className="absolute -top-1.5 -left-1.5"><CoinDot /></div>
        <div className="absolute -top-1.5 -right-1.5"><CoinDot /></div>
        <div className="absolute -bottom-1.5 -left-1.5"><CoinDot /></div>
        <div className="absolute -bottom-1.5 -right-1.5"><CoinDot /></div>
        
        {/* Coins on left side */}
        <div className="absolute top-1/4 -left-1.5"><CoinDot /></div>
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2"><CoinDot /></div>
        <div className="absolute top-3/4 -left-1.5"><CoinDot /></div>

        {/* Coins on right side */}
        <div className="absolute top-1/4 -right-1.5"><CoinDot /></div>
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2"><CoinDot /></div>
        <div className="absolute top-3/4 -right-1.5"><CoinDot /></div>

        {/* Coins on top */}
        <div className="absolute -top-1.5 left-1/4"><CoinDot /></div>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2"><CoinDot /></div>
        <div className="absolute -top-1.5 left-3/4"><CoinDot /></div>

        {/* Coins on bottom */}
        <div className="absolute -bottom-1.5 left-1/4"><CoinDot /></div>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2"><CoinDot /></div>
        <div className="absolute -bottom-1.5 left-3/4"><CoinDot /></div>
      </div>

      <div className="relative">
        {/* Header and Title Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start -mb-4">
          {/* Left: Title and Logo */}
          <div className="lg:fixed lg:left-12 flex flex-col items-center mt-4 lg:mt-8">
            <h1 className="font-bold text-3xl sm:text-4xl">
              <span className="text-salmon">Starknet </span>
              <span className="animate-start-cto">CTO</span>
            </h1>
            <img 
              src="/logo.png" 
              alt="SCTO Logo" 
              className="w-24 h-24 sm:w-32 sm:h-32 mt-4"
            />
          </div>

          {/* Center: Message Content */}
          <div className="w-full flex justify-center">
            <div className="w-full lg:w-[800px] text-center text-white space-y-4 sm:space-y-6 text-xl sm:text-2xl px-4 mt-0 lg:mt-8">
              <p>Dear Starknet,</p>
              <p>
                We, the community, have decided to take matters into our own hands.
              </p>
              <p className="space-y-2">
                <span className="block">Nothing personal, we just got tired of waiting.</span>
                <span className="block">We're not saying we can do better,</span>
                <span className="block">but we definitely can't do worse.</span>
              </p>
              <p>
                Sincerely, Everyone<span className="text-salmon">*</span>
              </p>
              <p className="text-xl italic text-salmon -mt-8">*and by everyone, we mean whoever bought $SCTO</p>
            </div>
          </div>

          {/* Right: Navigation Buttons */}
          <div className="mt-8 lg:fixed lg:right-12 flex flex-col items-center lg:items-start gap-4 w-full lg:w-44">
            <Link 
              href="/roadmap"
              className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-8 py-2 text-xl font-bold hover:scale-105 inline-block text-center w-44"
            >
              Roadmap
            </Link>
            <Link 
              href="/tokenomics"
              className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-8 py-2 text-xl font-bold hover:scale-105 inline-block text-center w-44"
            >
              Tokenomics
            </Link>
            <Link 
              href="/manifesto"
              className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-8 py-2 text-xl font-bold hover:scale-105 inline-block text-center w-44"
            >
              Manifesto
            </Link>
            <Link 
              href="/game"
              className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-8 py-2 text-xl font-bold hover:scale-105 inline-block text-center w-44"
            >
              CTO Game
            </Link>
            <button 
              onClick={startSequence}
              className="bg-navy border-2 border-salmon animate-start-cto hover:bg-salmon/10 transition-all duration-300 rounded-lg px-8 py-2 text-xl font-bold hover:scale-105 inline-block text-center w-44"
            >
              Start CTO
            </button>
            
            {/* Sequence Display */}
            {showSequence && (
              <>
                <style jsx>{sequenceStyles}</style>
                <div className="sequence-overlay">
                  <div className="sequence-container">
                    {sequence.slice(0, currentStep + 1).map((text, index) => (
                      <div 
                        key={index}
                        className="sequence-line"
                      >
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Three Boxes at Bottom */}
        <div className="mt-12 lg:fixed lg:bottom-8 lg:left-0 lg:right-0 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8">
          {/* Buy Box */}
          <a 
            href="https://app.avnu.fi/fr/eth-scto" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-navy border-2 border-salmon rounded-lg w-full sm:w-64 lg:w-72 h-64 lg:h-72 flex flex-col items-center justify-center hover:bg-salmon/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-salmon/20"
          >
            <img 
              src="/buy-icon.png"
              alt="Buy"
              className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-contain p-2"
            />
          </a>

          {/* Twitter Box */}
          <a 
            href="https://x.com/StarknetCTO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-navy border-2 border-salmon rounded-lg w-full sm:w-64 lg:w-72 h-64 lg:h-72 flex flex-col items-center justify-center hover:bg-salmon/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-salmon/20"
          >
            <img 
              src="/twitter-icon.png"
              alt="Twitter"
              className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-contain p-2"
            />
          </a>

          {/* Telegram Box */}
          <a 
            href="https://t.me/starkdegenz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-navy border-2 border-salmon rounded-lg w-full sm:w-64 lg:w-72 h-64 lg:h-72 flex flex-col items-center justify-center hover:bg-salmon/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-salmon/20"
          >
            <img 
              src="/telegram-icon.png"
              alt="Telegram"
              className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-contain p-2"
            />
          </a>

          {/* Chart Box */}
          <a 
            href="https://dexscreener.com/starknet/0x03d8694b417850342a93cc8923fba1fbb19482b642fb6e09e37e8ede4abfd014-0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7-1020847100762815390390123822295304634-5982-0x0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-navy border-2 border-salmon rounded-lg w-full sm:w-64 lg:w-72 h-64 lg:h-72 flex flex-col items-center justify-center hover:bg-salmon/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-salmon/20"
          >
            <img 
              src="/chart-icon.png"
              alt="Chart"
              className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-contain p-2"
            />
          </a>
        </div>
      </div>
    </div>
  )
} 