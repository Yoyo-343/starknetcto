"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const fireworksStyle = `
  @keyframes firework {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    25% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  
  .animate-firework {
    animation: firework 1.5s ease-out forwards;
  }
`;

export default function Game() {
  // Game state
  const [gameActive, setGameActive] = useState(false);
  const [gameState, setGameState] = useState({
    takeover: 0,
    community: 50,
    credibility: 50,
    chaos: 30,
    development: 10,
    financial: 100,
    turn: 1,
    actionsRemaining: 13,
    events: [],
    gameOver: false,
    gameOverReason: '',
    currentScenario: null,
    usedScenarios: []
  });

  // Add this state to track changes for visual feedback
  const [resourceChanges, setResourceChanges] = useState({});

  // Add this state variable to track winning animation
  const [showFireworks, setShowFireworks] = useState(false);

  // Scenarios database
  const scenarios = [
    {
      id: 1,
      title: "Community Request",
      description: "Community members want to add a meme feature that will delay the roadmap",
      options: [
        { 
          text: "Approve it", 
          effects: { community: 15, credibility: -5, development: -10, takeover: 5 }
        },
        { 
          text: "Reject it", 
          effects: { community: -10, credibility: 5, development: 15, takeover: 3 }
        },
        { 
          text: "Delay decision", 
          effects: { community: -5, chaos: 10, takeover: 1 }
        }
      ]
    },
    {
      id: 2,
      title: "Social Media Drama",
      description: "A heated debate has broken out between community members and the official team",
      options: [
        { 
          text: "Fuel the fire with spicy memes", 
          effects: { community: 10, credibility: -10, chaos: 20, takeover: 7 }
        },
        { 
          text: "Mediate with reasonable arguments", 
          effects: { community: 5, credibility: 15, development: 5, takeover: 3 }
        },
        { 
          text: "Ignore the drama entirely", 
          effects: { community: -5, chaos: -10, takeover: 0 }
        }
      ]
    },
    {
      id: 3,
      title: "Development Opportunity",
      description: "Frustrated developers from the official team are considering joining your effort",
      options: [
        { 
          text: "Offer them leadership roles", 
          effects: { development: 25, financial: -15, credibility: 10, takeover: 12 }
        },
        { 
          text: "Welcome them as regular contributors", 
          effects: { development: 15, community: 5, takeover: 8 }
        },
        { 
          text: "Reject them as potential spies", 
          effects: { community: 5, development: -10, chaos: 15, takeover: 3 }
        }
      ]
    },
    {
      id: 4,
      title: "Financial Decision",
      description: "The treasury needs allocation. Where should the funds go?",
      options: [
        { 
          text: "Marketing and memes", 
          effects: { community: 20, financial: -20, chaos: 10, takeover: 7 }
        },
        { 
          text: "Development resources", 
          effects: { development: 25, financial: -25, credibility: 5, takeover: 10 }
        },
        { 
          text: "Community incentives", 
          effects: { community: 15, financial: -15, credibility: 5, takeover: 6 }
        }
      ]
    },
    {
      id: 5,
      title: "Official Roadmap Delay",
      description: "The official team has announced another delay to their roadmap",
      options: [
        { 
          text: "Mock them mercilessly", 
          effects: { community: 15, credibility: -5, chaos: 20, takeover: 8 }
        },
        { 
          text: "Announce your accelerated timeline", 
          effects: { development: -5, credibility: 15, takeover: 12 }
        },
        { 
          text: "Offer to collaborate", 
          effects: { community: -10, credibility: 10, development: 10, takeover: 5 }
        }
      ]
    },
    // New scenarios
    {
      id: 6,
      title: "Influencer Approach",
      description: "A crypto influencer with 100k followers offers to promote $SCTO for payment",
      options: [
        { 
          text: "Pay them generously from treasury", 
          effects: { community: 20, financial: -30, takeover: 8 }
        },
        { 
          text: "Negotiate a performance-based deal", 
          effects: { credibility: 10, financial: -10, takeover: 5 }
        },
        { 
          text: "Reject and focus on organic growth", 
          effects: { credibility: 15, community: -5, takeover: 3 }
        }
      ]
    },
    {
      id: 7,
      title: "Exchange Listing Opportunity",
      description: "A mid-tier exchange is considering listing $SCTO but requires integration work",
      options: [
        { 
          text: "Prioritize developers for the integration", 
          effects: { development: -15, credibility: 20, takeover: 15 }
        },
        { 
          text: "Pay for expedited listing", 
          effects: { financial: -30, community: 15, takeover: 12 }
        },
        { 
          text: "Create community pressure campaign", 
          effects: { chaos: 20, community: 10, credibility: -10, takeover: 8 }
        }
      ]
    },
    {
      id: 8,
      title: "Competitive Fork",
      description: "Another group has forked your project claiming they can deliver faster",
      options: [
        { 
          text: "Publicly call them copycats", 
          effects: { community: -10, chaos: 15, takeover: 3 }
        },
        { 
          text: "Accelerate your development", 
          effects: { development: -20, financial: -15, takeover: 12 }
        },
        { 
          text: "Propose a merger of efforts", 
          effects: { community: 15, development: 10, chaos: -10, takeover: 7 }
        }
      ]
    },
    {
      id: 9,
      title: "Wallet Integration Bug",
      description: "Users report a critical bug when connecting to a popular wallet",
      options: [
        { 
          text: "Drop everything to fix it immediately", 
          effects: { development: -15, credibility: 15, takeover: 5 }
        },
        { 
          text: "Downplay the issue while working on it", 
          effects: { community: -15, credibility: -10, takeover: -5 }
        },
        { 
          text: "Ask community for help debugging", 
          effects: { community: 10, development: 5, takeover: 8 }
        }
      ]
    },
    {
      id: 10,
      title: "Meme Contest",
      description: "Community suggests holding a meme contest to boost engagement",
      options: [
        { 
          text: "Fund prizes from treasury", 
          effects: { community: 25, financial: -15, chaos: 15, takeover: 10 }
        },
        { 
          text: "Run contest but with token prizes only", 
          effects: { community: 15, chaos: 10, takeover: 5 }
        },
        { 
          text: "Participate yourself with spicy memes", 
          effects: { credibility: -5, community: 20, chaos: 20, takeover: 8 }
        }
      ]
    },
    {
      id: 11,
      title: "Governance Proposal",
      description: "The DAO needs to vote on prioritizing UX improvements vs new features",
      options: [
        { 
          text: "Advocate strongly for UX improvements", 
          effects: { credibility: 10, development: 5, takeover: 7 }
        },
        { 
          text: "Push for new flashy features", 
          effects: { community: 15, development: -10, takeover: 5 }
        },
        { 
          text: "Remain neutral and respect vote outcome", 
          effects: { credibility: 15, community: 5, takeover: 3 }
        }
      ]
    },
    {
      id: 12,
      title: "Market Downturn",
      description: "The entire crypto market is down 20%, and community is panicking",
      options: [
        { 
          text: "Host an emergency AMA to calm fears", 
          effects: { credibility: 15, community: 10, takeover: 5 }
        },
        { 
          text: "Buy the dip with treasury funds", 
          effects: { financial: -20, community: -5, takeover: 8 }
        },
        { 
          text: "Post diamond hands memes", 
          effects: { chaos: 20, community: 5, takeover: 3 }
        }
      ]
    },
    {
      id: 13,
      title: "Starknet Partnership",
      description: "The official Starknet team reaches out for a collaboration",
      options: [
        { 
          text: "Accept enthusiastically", 
          effects: { credibility: 20, development: 15, takeover: -10 }
        },
        { 
          text: "Negotiate for community control", 
          effects: { credibility: 5, takeover: 15, chaos: 10 }
        },
        { 
          text: "Reject - we're taking over, not partnering", 
          effects: { community: 10, chaos: 20, credibility: -15, takeover: 20 }
        }
      ]
    },
    {
      id: 14,
      title: "Developer Disagreement",
      description: "Two key developers have fundamentally different visions for the next upgrade",
      options: [
        { 
          text: "Side with the more experienced developer", 
          effects: { development: 10, credibility: 5, community: -10, takeover: 3 }
        },
        { 
          text: "Let the community vote", 
          effects: { community: 15, development: -5, takeover: 7 }
        },
        { 
          text: "Force them to compromise", 
          effects: { development: -10, credibility: 10, takeover: 5 }
        }
      ]
    },
    {
      id: 15,
      title: "Competing Standard",
      description: "Starknet is considering a standard that would make your project obsolete",
      options: [
        { 
          text: "Pivot to support the new standard", 
          effects: { development: -20, credibility: 10, takeover: -5 }
        },
        { 
          text: "Rally community opposition", 
          effects: { community: 15, chaos: 25, takeover: 15 }
        },
        { 
          text: "Propose an alternative standard", 
          effects: { development: -15, credibility: 15, takeover: 10 }
        }
      ]
    },
    {
      id: 16,
      title: "VC Funding Offer",
      description: "A venture capital firm offers $500K for 15% of the project",
      options: [
        { 
          text: "Accept the funding", 
          effects: { financial: 50, credibility: -15, takeover: -10 }
        },
        { 
          text: "Counter with 5% for $250K", 
          effects: { financial: 25, credibility: 5, takeover: -5 }
        },
        { 
          text: "Reject - this is a community project", 
          effects: { community: 25, financial: -10, takeover: 15 }
        }
      ]
    },
    {
      id: 17,
      title: "Smart Contract Audit",
      description: "An audit reveals medium security issues in your main contract",
      options: [
        { 
          text: "Immediately fix and disclose", 
          effects: { credibility: 15, development: -15, takeover: 5 }
        },
        { 
          text: "Fix quietly without announcement", 
          effects: { development: -10, credibility: -10, takeover: 0 }
        },
        { 
          text: "Downplay as 'theoretical' risks", 
          effects: { community: 5, credibility: -20, chaos: 10, takeover: -5 }
        }
      ]
    },
    {
      id: 18,
      title: "Discord Raid",
      description: "Scammers have raided your Discord server with phishing links",
      options: [
        { 
          text: "Temporarily lock down the server", 
          effects: { community: -10, credibility: 10, takeover: 0 }
        },
        { 
          text: "Recruit more community mods", 
          effects: { community: 15, chaos: -5, takeover: 5 }
        },
        { 
          text: "Use chaos to lure scammers into a trap", 
          effects: { chaos: 20, credibility: 5, community: 10, takeover: 8 }
        }
      ]
    }
  ];

  // Group scenarios by game stage
  const earlyScenarios = [1, 2, 6, 10, 12, 18]; // early game (0-30%)
  const midScenarios = [3, 4, 7, 9, 11, 14, 17]; // mid game (31-60%)
  const lateScenarios = [5, 8, 13, 15, 16]; // late game (61-100%)

  // Special milestone events
  const milestoneEvents = [
    {
      threshold: 25,
      title: "Community Recognition",
      description: "Your efforts have gained significant community attention!",
      effects: { community: 10, credibility: 5, takeover: 5 }
    },
    {
      threshold: 50,
      title: "Halfway There!",
      description: "The takeover is at 50%! Official team is starting to notice.",
      effects: { credibility: 10, chaos: 15, takeover: 8 }
    },
    {
      threshold: 75,
      title: "Major Milestone",
      description: "The community now considers your project the legitimate path forward!",
      effects: { community: 15, development: 10, takeover: 10 }
    }
  ];

  // Functions to handle game logic
  const startGame = () => {
    setGameActive(true);
    setGameState({
      ...gameState,
      takeover: 0,
      community: 50,
      credibility: 50,
      chaos: 30,
      development: 10,
      financial: 100,
      turn: 1,
      actionsRemaining: 13,
      events: [],
      gameOver: false,
      gameOverReason: '',
      usedScenarios: [],
      currentScenario: getRandomScenario([])
    });
  };

  const getRandomScenario = (usedScenarioIds) => {
    // Determine game stage based on takeover progress
    let candidateIds;
    let gameStage = '';
    
    if (gameState.takeover < 30) {
      candidateIds = earlyScenarios;
      gameStage = 'early';
    } else if (gameState.takeover < 60) {
      candidateIds = midScenarios;
      gameStage = 'mid';
    } else {
      candidateIds = lateScenarios;
      gameStage = 'late';
    }
    
    // Filter out already used scenarios for this stage
    const availableIds = candidateIds.filter(id => !usedScenarioIds.includes(id));
    
    // If all scenarios in this stage have been used, reset and use all again
    if (availableIds.length === 0) {
      // If all have been used, we'll reset the used scenarios for this stage
      console.log(`All ${gameStage} scenarios used, resetting selection pool`);
      const availableScenarios = scenarios.filter(s => candidateIds.includes(s.id));
      const randomIndex = Math.floor(Math.random() * availableScenarios.length);
      return availableScenarios[randomIndex];
    }
    
    // Pick a random scenario from available ones
    const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
    return scenarios.find(s => s.id === randomId);
  };

  const makeDecision = (effects, optionText) => {
    const newState = { ...gameState };
    const changes = {};
    
    // Decrement available actions
    newState.actionsRemaining -= 1;
    
    // Log the decision
    newState.events.push({
      turn: newState.turn,
      text: `Turn ${newState.turn}: ${optionText}`
    });
    
    // Track the current scenario as used
    if (newState.currentScenario) {
      newState.usedScenarios.push(newState.currentScenario.id);
    }
    
    // Apply and track effects
    Object.keys(effects).forEach(key => {
      newState[key] += effects[key];
      changes[key] = effects[key];
      
      // Ensure percentages don't go below 0
      if (key !== 'takeover' && newState[key] < 0) {
        newState[key] = 0;
      }
    });
    
    // Store changes for visual feedback
    setResourceChanges(changes);
    
    // Clear changes after a delay
    setTimeout(() => {
      setResourceChanges({});
    }, 1500);
    
    // Check for milestone events
    const previousTakeover = gameState.takeover;
    
    // Find applicable milestone
    const milestone = milestoneEvents.find(m => 
      previousTakeover < m.threshold && newState.takeover >= m.threshold
    );
    
    // Apply milestone effects if one was triggered
    if (milestone) {
      newState.events.push({
        turn: newState.turn,
        text: `MILESTONE: ${milestone.title}`
      });
      
      Object.keys(milestone.effects).forEach(key => {
        newState[key] += milestone.effects[key];
        
        // Ensure percentages don't go below 0 after milestone effects
        if (key !== 'takeover' && newState[key] < 0) {
          newState[key] = 0;
        }
      });
    }
    
    // Increment turn
    newState.turn += 1;
    
    // Check for win condition
    if (newState.takeover >= 100) {
      newState.gameOver = true;
      newState.gameOverReason = 'You achieved 100% takeover! Congratulations, the community is now in charge.';
      setGameState(newState);
      return;
    }
    
    // Check for running out of actions before winning
    if (newState.actionsRemaining <= 0 && newState.takeover < 100) {
      newState.gameOver = true;
      newState.gameOverReason = `You ran out of actions! The community takeover stalled at ${newState.takeover}%.`;
      setGameState(newState);
      return;
    }
    
    // Check for other failure conditions - values are already at 0 or above due to capping
    if (newState.community <= 20) {
      newState.gameOver = true;
      newState.gameOverReason = 'Community support collapsed. Your revolution has failed.';
    } else if (newState.credibility <= 0) {
      newState.gameOver = true;
      newState.gameOverReason = 'You lost all credibility. Nobody believes in the CTO anymore.';
    } else if (newState.financial <= 0) {
      newState.gameOver = true;
      newState.gameOverReason = 'Financial resources depleted. The takeover has gone bankrupt.';
    }
    
    // Get next scenario if game continues
    if (!newState.gameOver) {
      newState.currentScenario = getRandomScenario(newState.usedScenarios);
    }
    
    setGameState(newState);
  };

  // Reset the game
  const resetGame = () => {
    setGameActive(false);
  };

  // Resource bar component
  const ResourceBar = ({ name, value, resourceKey, color }) => {
    const change = resourceChanges[resourceKey] || 0;
    // Cap the displayed width at 100%
    const displayWidth = Math.min(value, 100);
    
    return (
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1">
          <span>{name}</span>
          <div>
            <span>{value}%</span>
            {change !== 0 && (
              <span className={`ml-2 ${change > 0 ? 'text-green-400' : 'text-red-400'} transition-opacity duration-500`}>
                {change > 0 ? '+' : ''}{change}
              </span>
            )}
          </div>
        </div>
        <div className="w-full bg-navy border border-salmon/30 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${color} transition-all duration-500`} 
            style={{ width: `${displayWidth}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // Add this component to visualize takeover progress
  const TakeoverMap = ({ progress }) => {
    const milestones = [0, 25, 50, 75, 100];
    // Cap the displayed progress at 100%
    const displayProgress = Math.min(progress, 100);
    
    return (
      <div className="mb-8">
        <h3 className="text-lg font-bold text-salmon mb-2">Takeover Progress</h3>
        <div className="relative h-10">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 h-2 bg-salmon rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${displayProgress}%` }}>
          </div>
          
          {/* Milestone markers */}
          {milestones.map(milestone => (
            <div key={milestone} 
              className={`absolute h-4 w-4 rounded-full transition-all duration-300 ${
                progress >= milestone ? 'bg-salmon' : 'bg-navy border border-salmon'
              }`}
              style={{ 
                left: `${milestone}%`, 
                top: '-4px',
                transform: 'translateX(-50%)'
              }}
            >
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-salmon">
                {milestone}%
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Add this effect to trigger fireworks on win
  useEffect(() => {
    if (gameState.takeover >= 100 && gameState.gameOver) {
      setShowFireworks(true);
      
      // Keep fireworks for 5 seconds
      const timer = setTimeout(() => {
        setShowFireworks(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [gameState.takeover, gameState.gameOver]);

  // Create a Fireworks component
  const Fireworks = () => {
    // Generate a random number of fireworks (5-12)
    const fireworksCount = Math.floor(Math.random() * 8) + 5;
    const fireworks = Array.from({ length: fireworksCount });
    
    return (
      <div className="fixed inset-0 pointer-events-none z-10">
        {fireworks.map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 60}%`;
          const size = `${Math.random() * 1.5 + 0.5}rem`;
          const animationDelay = `${Math.random() * 2}s`;
          const animationDuration = `${Math.random() * 1 + 1.5}s`;
          const color = ['#FF7B7B', '#FFD700', '#90EE90', '#87CEFA', '#DDA0DD'][Math.floor(Math.random() * 5)];
          
          return (
            <div 
              key={i} 
              className="absolute animate-firework"
              style={{ 
                left, 
                top, 
                width: size, 
                height: size, 
                backgroundColor: color,
                animationDelay,
                animationDuration,
                borderRadius: '50%',
                boxShadow: `0 0 10px 2px ${color}`,
              }}
            ></div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Inject the CSS */}
      <style jsx>{fireworksStyle}</style>
      
      <div className="min-h-screen bg-navy p-2 sm:p-4 relative">
        {/* Fireworks Animation */}
        {showFireworks && <Fireworks />}

        {/* Back Button - make smaller and less vertical space */}
        <Link 
          href="/"
          className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-3 py-1 text-base font-bold hover:scale-105 inline-block mb-2"
        >
          ← Back
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Reduce margin on title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-salmon mb-3 text-center">CTO Simulator</h1>
          
          <div className="border-2 border-salmon rounded-lg p-4 text-white">
            {!gameActive ? (
              <div className="text-center">
                <p className="mb-3 text-lg">Take control as the Chief Takeover Officer and lead the community revolution!</p>
                <p className="mb-4">Balance community support, development progress, financial resources, and credibility as you work toward 100% takeover.</p>
                <button 
                  onClick={startGame}
                  className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-6 py-2 text-lg font-bold hover:scale-105"
                >
                  Start Takeover
                </button>
              </div>
            ) : (
              <div>
                {/* Make game interface more compact */}
                <div className="mb-3 flex justify-between items-center">
                  <div className="text-lg text-yellow-400 font-bold">Actions Remaining: {gameState.actionsRemaining}</div>
                  <div className="text-xl text-salmon font-bold">Takeover: {gameState.takeover}%</div>
                </div>
                
                {/* Resource meters - reduce gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                  <ResourceBar name="Community Support" value={gameState.community} resourceKey="community" color="bg-green-500" />
                  <ResourceBar name="Credibility" value={gameState.credibility} resourceKey="credibility" color="bg-blue-500" />
                  <ResourceBar name="Chaos Energy" value={gameState.chaos} resourceKey="chaos" color="bg-purple-500" />
                  <ResourceBar name="Development Progress" value={gameState.development} resourceKey="development" color="bg-yellow-500" />
                  <ResourceBar name="Financial Resources" value={gameState.financial} resourceKey="financial" color="bg-salmon" />
                </div>
                
                {/* Current scenario */}
                {!gameState.gameOver && gameState.currentScenario && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-salmon mb-3">{gameState.currentScenario.title}</h3>
                    <p className="mb-6">{gameState.currentScenario.description}</p>
                    
                    <div className="space-y-3">
                      {gameState.currentScenario.options.map((option, index) => (
                        <button 
                          key={index}
                          onClick={() => makeDecision(option.effects, option.text)}
                          className="w-full text-left bg-navy border border-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-4 py-3 text-white"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Game over state */}
                {gameState.gameOver && (
                  <div className={`text-center ${gameState.takeover >= 100 ? 'border-2 border-green-500 bg-green-500/10 rounded-lg p-4' : ''}`}>
                    <h3 className={`text-2xl font-bold mb-4 ${gameState.takeover >= 100 ? 'text-green-500' : 'text-salmon'}`}>
                      {gameState.takeover >= 100 ? '🎉 Takeover Complete! 🎉' : 'Game Over'}
                    </h3>
                    <p className="mb-8 text-xl">{gameState.gameOverReason}</p>
                    <div className="mb-6">
                      <p>Final takeover: {gameState.takeover}%</p>
                      <p>Actions remaining: {gameState.actionsRemaining}</p>
                    </div>
                    <button 
                      onClick={resetGame}
                      className="bg-navy border-2 border-salmon text-salmon hover:bg-salmon/10 transition-all duration-300 rounded-lg px-8 py-3 text-xl font-bold hover:scale-105"
                    >
                      Play Again
                    </button>
                  </div>
                )}

                {/* Takeover Progress */}
                <TakeoverMap progress={gameState.takeover} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
} 