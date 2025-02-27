"use client"

import React from 'react'
import Link from 'next/link'

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-navy p-8 relative">
      {/* Back Button */}
      <Link 
        href="/"
        className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-6 py-2 text-xl font-bold hover:scale-105 inline-block mb-8"
      >
        ← Back
      </Link>

      <div className="max-w-6xl mx-auto text-white">
        <h1 className="text-5xl font-bold text-salmon mb-10 text-center">ROADMAP TO CHAOS™</h1>

        <div className="flex gap-16">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Phase 1 */}
            <div>
              <h2 className="text-3xl font-bold text-salmon mb-3">Phase 1: The Awakening</h2>
              <ul className="list-none space-y-1.5 text-xl">
                <li>• Launch $SCTO token</li>
                <li>• Establish HQ in front of Starknet's office</li>
                <li>• Release whitepaper written in emojis only</li>
                <li>• Begin systematic opposition protocol</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div>
              <h2 className="text-3xl font-bold text-salmon mb-3">Phase 2: The Take-Over</h2>
              <ul className="list-none space-y-1.5 text-xl">
                <li>• Launch the 'No U' governance framework</li>
                <li>• Launch the Anti-Documentation Initiative</li>
                <li>• Create DAO with coin-flip governance</li>
                <li>• Start the official "soon™" counter</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-8">
            {/* Phase 3 */}
            <div>
              <h2 className="text-3xl font-bold text-salmon mb-3">Phase 3: Peak Chaos</h2>
              <ul className="list-none space-y-1.5 text-xl">
                <li>• Implement reverse-tokenomics</li>
                <li>• Host metaverse meme governance</li>
                <li>• Release chaos-as-a-service platform</li>
                <li>• Reach critical meme mass</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div>
              <h2 className="text-3xl font-bold text-salmon mb-3">Phase 4: ???</h2>
              <p className="text-xl italic">(This phase will be determined by a community poll<br/>using only GIFs as voting options)</p>
            </div>
          </div>
        </div>

        {/* Note - Centered at bottom */}
        <div className="text-lg italic text-salmon border-t-2 border-salmon/30 pt-6 mt-12 text-center">
          *Note: This roadmap is subject to change based on whatever<br/>
          the community feels like doing that day
        </div>
      </div>
    </div>
  )
} 