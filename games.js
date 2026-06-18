// ============================================
        // GAME DATABASE (Friv Style Array Format)
        // ============================================
        // [name, path1, path2, path3, thumbnail, devices, category, date, desktopPop, androidPop, iPadPop, iPhonePop]  

var games = [
    ["Tap_Arrow_Away", "/games/tap-arrow-away/", "", "", "https://img.gamedistribution.com/07393e2820d1486ca209959528869a5f-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 90, 87, 84, 80, "07393e2820d1486ca209959528869a5f"],
    ["Football_3D", "/games/football-3d/", "", "", "https://img.gamedistribution.com/540d36010bb94e288a660456efaebff9-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Action Top Landscape", "2026-01-01", 98, 95, 92, 90, "540d36010bb94e288a660456efaebff9"],
    ["Jewel_Coloring", "/games/jewel-coloring/", "", "", "https://img.gamedistribution.com/fe81d3ecbf5540ca8d9fe39387635d8a-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", 90, 87, 84, 80, "fe81d3ecbf5540ca8d9fe39387635d8a"],
    ["Bubble_Blasters", "/games/bubble-blasters/", "", "", "https://img.gamedistribution.com/5d8d11e9919245939a57378a02b8fc8b-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 88, 85, 82, 78, "5d8d11e9919245939a57378a02b8fc8b"],
    ["Hole_Puzzle", "/games/hole-puzzle/", "", "", "https://img.gamedistribution.com/7697f626f5224cb284cf463ce1275495-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 90, 87, 84, 80, "7697f626f5224cb284cf463ce1275495"],
    ["Solitaire_Daily", "/games/solitaire-daily/", "", "", "https://img.gamedistribution.com/cacae8dbfe0f4ec598f8f7c29f7e0992-1280x720.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 92, 89, 86, 83, "cacae8dbfe0f4ec598f8f7c29f7e0992"],
    ["Real_Football", "/games/real-football/", "", "", "https://img.gamedistribution.com/0e790569b4c74967923678652de3dbc4-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Action Hot Landscape", "2026-06-13", 95, 92, 89, 86, "0e790569b4c74967923678652de3dbc4"],
    ["Magic_Brick_Wars", "/games/magic-brick-wars/", "", "", "https://img.gamedistribution.com/a9964948ad434acfb106811d323e6464-1280x550.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Strategy New Landscape", "2026-06-13", 91, 88, 85, 82, "a9964948ad434acfb106811d323e6464"],
    ["Kick_Lucky_Boxes_Online", "/games/kick-lucky-boxes-online/", "", "", "https://img.gamedistribution.com/381bb01b67a14e7ea30b5623eb36855e-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 89, 86, 83, 80, "381bb01b67a14e7ea30b5623eb36855e"],
    ["Juice_Merge", "/games/juice-merge/", "", "", "https://img.gamedistribution.com/d4c11a64ed754d71b4671d699c66a9c7-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", 88, 85, 82, 79, "d4c11a64ed754d71b4671d699c66a9c7"],
    ["Solitaire_Farm_Seasons_5", "/games/solitaire-farm-seasons-5/", "", "", "https://img.gamedistribution.com/567ad47ea5d04edaaa29a80cd9f9d1a3-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 91, 88, 85, 82, "567ad47ea5d04edaaa29a80cd9f9d1a3"],
    ["Stickman_Adventure", "/games/stickman-adventure/", "", "", "https://img.gamedistribution.com/fd5ae555f42e4dac872819ed9125616c-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Action New Landscape", "2026-06-13", 90, 87, 84, 81, "fd5ae555f42e4dac872819ed9125616c"],
    ["Nonogram_Daily", "/games/nonogram-daily/", "", "", "https://img.gamedistribution.com/0e26b95603a14b378612f60bfe7069df-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", 92, 89, 86, 83, "0e26b95603a14b378612f60bfe7069df"],
    ["Arrow_Sorting", "/games/arrow-sorting/", "", "", "https://img.gamedistribution.com/2fb1dc3ebec147eeb9d7875354afcc20-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", 89, 86, 83, 80, "2fb1dc3ebec147eeb9d7875354afcc20"],
    ["Mojicon_Garden_JigSolitaire", "/games/mojicon-garden-jigsolitaire/", "", "", "https://img.gamedistribution.com/679c57024b5944f584585244718e1cee-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", 88, 85, 82, 79, "679c57024b5944f584585244718e1cee"],
    ["Bloxorz_Block_Puzzle_3d", "/games/bloxorz-block-puzzle-3d/", "", "", "https://img.gamedistribution.com/1d9ac2ca58b2436ab1e7ce3b83fd709f-512x512.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", 93, 90, 87, 84, "1d9ac2ca58b2436ab1e7ce3b83fd709f"],
    ["Combinations_Daily", "/games/combinations-daily/", "", "", "https://img.gamedistribution.com/c725caf57a5940deb09730cdf322f3a1-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", 90, 87, 84, 81, "c725caf57a5940deb09730cdf322f3a1"],
    ["Math_Stars", "/games/math-stars/", "", "", "https://img.gamedistribution.com/e7e5bb0e6caf47b5965d813736921e76-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 87, 84, 81, 78, "e7e5bb0e6caf47b5965d813736921e76"],
    ["Worm_Puzzle_Snake_Apple", "/games/worm-puzzle-snake-apple/", "", "", "https://img.gamedistribution.com/7e5efdcdc8d84b2291c0febe8de5e638-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", 89, 86, 83, 80, "7e5efdcdc8d84b2291c0febe8de5e638"],
    ["Sugar_Pop_Land", "/games/sugar-pop-land/", "", "", "https://img.gamedistribution.com/5bf8cb720bd147a4b62167eefdf38788-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 88, 85, 82, 79, "5bf8cb720bd147a4b62167eefdf38788"]
];

var gameDetails = {
    "Tap_Arrow_Away": { 
        gameId: "07393e2820d1486ca209959528869a5f",
        desc: "An addictive tap-away puzzle game. Remove arrow blocks to solve puzzles and reveal hidden pixel art & cute animals across hundreds of levels.", 
        players: "1.5k", 
        rating: "4.5" 
    },
    "Football_3D": { 
        gameId: "540d36010bb94e288a660456efaebff9",
        desc: "Take to the pitch in this slick 3D football game. Score, tackle, win!", 
        players: "5.8k", 
        rating: "4.8" 
    },
    "Jewel_Coloring": { 
        gameId: "fe81d3ecbf5540ca8d9fe39387635d8a",
        desc: "Color by number with dazzling jewels! Relax and create stunning pixel art designs.", 
        players: "1.8k", 
        rating: "4.6" 
    },
    "Bubble_Blasters": { 
        gameId: "5d8d11e9919245939a57378a02b8fc8b",
        desc: "Run, jump and blast bubbles in this fun platformer adventure. Collect coins and reach the goal!", 
        players: "2.3k", 
        rating: "4.5" 
    },
    "Hole_Puzzle": { 
        gameId: "7697f626f5224cb284cf463ce1275495",
        desc: "A hungry cat with a magical black-hole mouth eats everything! Move across levels, collect food and grow bigger.", 
        players: "2.5k", 
        rating: "4.7" 
    },
    "Solitaire_Daily": { 
        gameId: "cacae8dbfe0f4ec598f8f7c29f7e0992",
        desc: "Your daily dose of solitaire! Come back every day, relax and play cards. Do you have what it takes to master it?", 
        players: "3.2k", 
        rating: "4.8" 
    },
    "Real_Football": { 
        gameId: "0e790569b4c74967923678652de3dbc4",
        desc: "Build your dream team and become world champions! Free football simulation with leagues, cups and manager mode.", 
        players: "4.1k", 
        rating: "4.7" 
    },
    "Magic_Brick_Wars": { 
        gameId: "a9964948ad434acfb106811d323e6464",
        desc: "Premium tower defence with your favorite characters! Fight wars using Fruit Ninja and Jetpack Joyride heroes.", 
        players: "1.9k", 
        rating: "4.5" 
    },
    "Kick_Lucky_Boxes_Online": { 
        gameId: "381bb01b67a14e7ea30b5623eb36855e",
        desc: "Launch lucky blocks to discover rare Brainrots! Upgrade power, collect rewards and escape before the tsunami hits.", 
        players: "2.8k", 
        rating: "4.6" 
    },
    "Juice_Merge": { 
        gameId: "d4c11a64ed754d71b4671d699c66a9c7",
        desc: "Combine drinks to unlock exotic recipes in this colorful merge puzzle! Relax on a tropical beach as you collect.", 
        players: "1.6k", 
        rating: "4.5" 
    },
    "Solitaire_Farm_Seasons_5": { 
        gameId: "567ad47ea5d04edaaa29a80cd9f9d1a3",
        desc: "4,200+ levels of relaxing solitaire fun! Explore new maps, grow crops and enjoy this charming countryside journey.", 
        players: "2.9k", 
        rating: "4.7" 
    },
    "Stickman_Adventure": { 
        gameId: "fd5ae555f42e4dac872819ed9125616c",
        desc: "Travel through time and space, defeat monsters and rescue your friends. A whole new world awaits, Hero!", 
        players: "2.1k", 
        rating: "4.5" 
    },
    "Nonogram_Daily": { 
        gameId: "0e26b95603a14b378612f60bfe7069df",
        desc: "Draw and solve Japanese logic puzzles every day! Train your brain with fresh nonogram images daily.", 
        players: "1.8k", 
        rating: "4.6" 
    },
    "Arrow_Sorting": { 
        gameId: "2fb1dc3ebec147eeb9d7875354afcc20",
        desc: "Tap arrows to unravel colorful fruit chains across countless levels. Simple to learn, surprisingly addictive!", 
        players: "1.5k", 
        rating: "4.5" 
    },
    "Mojicon_Garden_JigSolitaire": { 
        gameId: "679c57024b5944f584585244718e1cee",
        desc: "Solve beautiful jigsaw solitaire puzzles to restore a dry meadow into a lush blooming garden paradise.", 
        players: "1.3k", 
        rating: "4.4" 
    },
    "Bloxorz_Block_Puzzle_3d": { 
        gameId: "1d9ac2ca58b2436ab1e7ce3b83fd709f",
        desc: "Roll your block across 3D platforms and drop it into the goal hole. Test your logic across mind-bending levels!", 
        players: "2.4k", 
        rating: "4.7" 
    },
    "Combinations_Daily": { 
        gameId: "c725caf57a5940deb09730cdf322f3a1",
        desc: "Connect tiles, make combinations and maintain your daily streaks! Fresh puzzle challenges every single day.", 
        players: "1.7k", 
        rating: "4.5" 
    },
    "Math_Stars": { 
        gameId: "e7e5bb0e6caf47b5965d813736921e76",
        desc: "Travel the galaxy and defeat space bosses by solving math problems! Fun educational adventure for kids ages 6-7.", 
        players: "1.2k", 
        rating: "4.4" 
    },
    "Worm_Puzzle_Snake_Apple": { 
        gameId: "7e5efdcdc8d84b2291c0febe8de5e638",
        desc: "Classic snake meets clever puzzles! Guide worms through tricky levels with funny movements and satisfying solutions.", 
        players: "1.9k", 
        rating: "4.5" 
    },
    "Sugar_Pop_Land": { 
        gameId: "5bf8cb720bd147a4b62167eefdf38788",
        desc: "Match 3 or more sweets to clear them! Create special combos, chain powerful effects and complete every stage.", 
        players: "2.2k", 
        rating: "4.6" 
    }
};