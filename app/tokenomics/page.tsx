import React from 'react'
import Link from 'next/link'

export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-navy p-4 sm:p-8 relative">
      {/* Back Button */}
      <Link 
        href="/"
        className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-4 sm:px-6 py-2 text-base sm:text-xl font-bold hover:scale-105 inline-block mb-6 sm:mb-8"
      >
        ← Back
      </Link>

      <div className="max-w-7xl mx-auto text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-salmon mb-8 sm:mb-12 text-center">Tokenomics</h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-base sm:text-lg">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            <div className="border-2 border-salmon rounded-lg p-3 sm:p-4 lg:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-salmon mb-3 sm:mb-4">Supply</h2>
              <p>Total: 1,000,000,000 $SCTO</p>
              <p className="text-sm sm:text-base italic mt-2">(We chose a billion because it sounds important)</p>
            </div>
            <div className="border-2 border-salmon rounded-lg p-3 sm:p-4 lg:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-salmon mb-3 sm:mb-4">Vesting Schedule</h2>
              <div className="space-y-2">
                <p>• Team: <span className="text-salmon">What's vesting?</span></p>
                <p>• Advisors: <span className="text-salmon">We don't take advice</span></p>
                <p>• Early Investors: <span className="text-salmon">First come, first serve</span></p>
                <p>• Everyone Else: <span className="text-salmon">YOLO</span></p>
              </div>
            </div>
            <div className="border-2 border-salmon rounded-lg p-3 sm:p-4 lg:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-salmon mb-3 sm:mb-4">Token Utility</h2>
              <div className="space-y-2">
                <p>• Governance: <span className="text-salmon">Democratic memecracy in action</span></p>
                <p>• Staking: <span className="text-salmon">Lock tokens, receive random decisions</span></p>
                <p>• Farming: <span className="text-salmon">Sustainable opposition yields</span></p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-4 sm:space-y-6">
            <div className="border-2 border-salmon rounded-lg p-3 sm:p-4 lg:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-salmon mb-3 sm:mb-4">Tax Structure</h2>
              <div className="space-y-2">
                <p>• Buy Tax: <span className="text-salmon">Yes</span></p>
                <p>• Sell Tax: <span className="text-salmon">Maybe</span></p>
                <p>• Think Tax: <span className="text-salmon">Probably</span></p>
                <p>• Confusion Tax: <span className="text-salmon">Definitely</span></p>
              </div>
            </div>
            <div className="border-2 border-salmon rounded-lg p-3 sm:p-4 lg:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-salmon mb-3 sm:mb-4">Special Features</h2>
              <div className="space-y-2">
                <p>• Reverse Buybacks: <span className="text-salmon">We sell when others buy</span></p>
                <p>• Anti-Dump Protection: <span className="text-salmon">We dump first</span></p>
                <p>• Price Impact: <span className="text-salmon">Totally random</span></p>
                <p>• Liquidity: <span className="text-salmon">As fluid as our opinions</span></p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            <div className="border-2 border-salmon rounded-lg p-3 sm:p-4 lg:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-salmon mb-3 sm:mb-4">Distribution:</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="font-bold text-sm sm:text-base">• <span className="text-salmon">40% Community Take-Over Pool</span></p>
                  <p className="text-xs sm:text-sm lg:text-base italic ml-4 sm:ml-6">For those brave enough to join the opposition</p>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">• <span className="text-salmon">25% Chaos Development Fund</span></p>
                  <p className="text-xs sm:text-sm lg:text-base italic ml-4 sm:ml-6">For strategic deployment of chaos and confusion</p>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">• <span className="text-salmon">20% Meme Generation Fund</span></p>
                  <p className="text-xs sm:text-sm lg:text-base italic ml-4 sm:ml-6">Because quality opposition needs quality memes</p>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">• <span className="text-salmon">10% Emergency Opposition Reserve</span></p>
                  <p className="text-xs sm:text-sm lg:text-base italic ml-4 sm:ml-6">For those special moments when Starknet least expects it</p>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">• <span className="text-salmon">5% Anti-Marketing</span></p>
                  <p className="text-xs sm:text-sm lg:text-base italic ml-4 sm:ml-6">We promise to do the opposite of whatever's trending</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-base sm:text-lg italic text-salmon border-t-2 border-salmon/30 pt-6 sm:pt-8 mt-12 sm:mt-16 text-center">
          *Disclaimer: Numbers generated with a dartboard, three memes, and pure hopium.<br/>
          Not financial advice, just chaos.
        </div>
      </div>
    </div>
  )
} 