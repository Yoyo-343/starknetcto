import React from 'react'
import Link from 'next/link'

export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-navy p-8 relative">
      {/* Back Button */}
      <Link 
        href="/"
        className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-6 py-2 text-xl font-bold hover:scale-105 inline-block mb-8"
      >
        ← Back
      </Link>

      <div className="max-w-7xl mx-auto text-white">
        {/* Header with Total Supply */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-salmon">TOKENOMICS</h1>
          <div className="mt-8">
            <p className="font-bold mb-2">Total Supply: 1,000,000,000 $SCTO</p>
            <p className="text-lg italic">(We chose a billion because it sounds important)</p>
          </div>
        </div>

        <div className="flex gap-16">
          {/* Left Column - Distribution */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-salmon mb-6">Distribution:</h2>
            <div>
              <p className="font-bold">• 40% Community Take-Over Pool</p>
              <p className="text-lg italic ml-6">For those brave enough to join the opposition</p>
            </div>
            <div>
              <p className="font-bold">• 25% Chaos Development Fund</p>
              <p className="text-lg italic ml-6">For strategic deployment of chaos and confusion</p>
            </div>
            <div>
              <p className="font-bold">• 20% Meme Generation Fund</p>
              <p className="text-lg italic ml-6">Because quality opposition needs quality memes</p>
            </div>
            <div>
              <p className="font-bold">• 10% Emergency Opposition Reserve</p>
              <p className="text-lg italic ml-6">For those special moments when Starknet least expects it</p>
            </div>
            <div>
              <p className="font-bold">• 5% Anti-Marketing</p>
              <p className="text-lg italic ml-6">We promise to do the opposite of whatever's trending</p>
            </div>
          </div>

          {/* Right Column - Tax Structure and Special Features */}
          <div className="flex-1 space-y-12">
            {/* Tax Structure */}
            <div>
              <h2 className="text-3xl font-bold text-salmon mb-6">Tax Structure:</h2>
              <div className="space-y-2">
                <p>• Buy Tax: <span className="text-salmon">Yes</span></p>
                <p>• Sell Tax: <span className="text-salmon">Maybe</span></p>
                <p>• Think Tax: <span className="text-salmon">Probably</span></p>
                <p>• Confusion Tax: <span className="text-salmon">Definitely</span></p>
              </div>
            </div>

            {/* Special Features */}
            <div>
              <h2 className="text-3xl font-bold text-salmon mb-6">Special Features:</h2>
              <div className="space-y-2">
                <p>• Reverse Buybacks: <span className="text-salmon">We sell when others buy</span></p>
                <p>• Anti-Dump Protection: <span className="text-salmon">We dump first</span></p>
                <p>• Price Impact: <span className="text-salmon">Totally random</span></p>
                <p>• Liquidity: <span className="text-salmon">As fluid as our opinions</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-lg italic text-salmon border-t-2 border-salmon/30 pt-8 mt-16 text-center">
          *Disclaimer: Numbers generated with a dartboard, three memes, and pure hopium.<br/>
          Not financial advice, just chaos.
        </div>
      </div>
    </div>
  )
} 