import React from 'react'
import Link from 'next/link'

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-navy p-8 relative">
      {/* Back Button */}
      <Link 
        href="/"
        className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-6 py-2 text-xl font-bold hover:scale-105 inline-block mb-8"
      >
        ← Back
      </Link>

      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-5xl font-bold text-salmon mb-12 text-center">THE OPPOSITION MANIFESTO</h1>

        {/* Preamble */}
        <div className="text-xl mb-16 italic text-center">
          We, the Community™, in order to form a more chaotic union, establish memes,<br/>
          and ensure maximum entertainment, do hereby declare:
        </div>

        {/* Main Content - Left Aligned */}
        <div className="space-y-12 text-xl">
          {/* Whereas Section */}
          <div className="space-y-2">
            <p>WHEREAS Starknet keeps saying "soon™"</p>
            <p>AND WHEREAS patience is no longer a virtue</p>
            <p>AND WHEREAS memes are the true language of governance</p>
            <p>AND WHEREAS someone had to do something</p>
          </div>

          <div className="text-2xl font-bold text-salmon">WE HEREBY DECLARE:</div>

          {/* Articles */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-salmon mb-4">Article 1: The Take-Over</h2>
              <p>We're taking over because we can. No further explanation needed.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-salmon mb-4">Article 2: Our Core Values</h2>
              <ul className="list-none space-y-2">
                <li>• If Starknet says "soon", we say "now"</li>
                <li>• If Starknet goes left, we go right</li>
                <li>• If Starknet promises something, we deliver the opposite</li>
                <li>• If Starknet is serious, we respond with memes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-salmon mb-4">Article 3: Our Solemn Promises</h2>
              <p className="mb-4">We solemnly swear that we are up to no good, and specifically promise to:</p>
              <ul className="list-none space-y-2">
                <li>• Turn all announcements into memes</li>
                <li>• Make decisions based on vibes</li>
                <li>• Keep opposition morale high with regular doses of hopium</li>
                <li>• Never, ever use the word "soon™" (except ironically)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-salmon mb-4">Article 4: Community Rights</h2>
              <p className="mb-4">Every $SCTO holder is entitled to:</p>
              <ul className="list-none space-y-2">
                <li>• One vote* per governance decision</li>
                <li>• Unlimited meme submission rights</li>
                <li>• The freedom to oppose everything</li>
                <li>• A permanent seat in our anti-council</li>
              </ul>
              <p className="text-lg italic mt-4">*votes may or may not be counted, depending on the phase of the moon</p>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-16 text-center space-y-2">
          <p className="text-xl">Signed with utmost authority**,</p>
          <p className="text-2xl font-bold text-salmon">The Community</p>
          <p className="text-lg italic">**authority fully self-proclaimed</p>
        </div>
      </div>
    </div>
  )
} 