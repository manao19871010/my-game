// ============================================
// GAME DATABASE (Friv Style Array Format)
// ============================================
// Field Index Reference:
// [0] name        Unique game identifier (underscore format, matches detail data key)
// [1] path1       Main path for game detail page
// [2] path2       Backup path (reserved)
// [3] path3       Backup path (reserved)
// [4] thumbnail   Game cover thumbnail URL
// [5] devices     Supported device list (space-separated)
// [6] category    Category + tags + orientation (space-separated, main category is first word)
// [7] publishDate Game release date
// [8] desktopPop  Desktop popularity score
// [9] androidPop  Android popularity score
// [10] iPadPop    iPad popularity score
// [11] iPhonePop  iPhone popularity score
// [12] gameId     Unique GameDistribution platform ID
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
    ["Sugar_Pop_Land", "/games/sugar-pop-land/", "", "", "https://img.gamedistribution.com/5bf8cb720bd147a4b62167eefdf38788-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", 88, 85, 82, 79, "5bf8cb720bd147a4b62167eefdf38788"],
    
     ["Meme_Myth_Wukong", "/games/meme-myth-wukong/", "", "", "https://img.gamedistribution.com/e4af90c070cf499da371b44232a6aaca-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "90", "91", "93", "87", "e4af90c070cf499da371b44232a6aaca"],
    ["Hill_Climb_Pixel_Car", "/games/hill-climb-pixel-car/", "", "", "https://img.gamedistribution.com/6d493125b300434fad9be4cf8c858bbd-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Action New Landscape", "2026-06-13", "93", "93", "88", "95", "6d493125b300434fad9be4cf8c858bbd"],
    ["Bubble_Game_3", "/games/bubble-game-3/", "", "", "https://img.gamedistribution.com/27673bc45d2e4b27b7cd24e422f7c257-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "88", "94", "94", "94", "27673bc45d2e4b27b7cd24e422f7c257"],
    ["Mahjong_Connect", "/games/mahjong-connect/", "", "", "https://img.gamedistribution.com/a7f5393b417346268657f3bd67eac24e-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "87", "87", "91", "90", "a7f5393b417346268657f3bd67eac24e"],
    ["The_Mergest_Kingdom", "/games/the-mergest-kingdom/", "", "", "https://img.gamedistribution.com/b5203bfef51242c39690c761321d769f-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Strategy New Landscape", "2026-06-13", "92", "87", "90", "95", "b5203bfef51242c39690c761321d769f"],
    ["Fireboy_and_Watergirl_1_Forest_Temple", "/games/fireboy-and-watergirl-1-forest-temple/", "", "", "https://img.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Action New Landscape", "2026-06-13", "93", "88", "88", "90", "a55c9cc9c21e4fc683c8c6857f3d0c75"],
    ["Moto_X3M_Bike_Race_Game", "/games/moto-x3m-bike-race-game/", "", "", "https://img.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Action New Landscape", "2026-06-13", "94", "89", "88", "88", "5b0abd4c0faa4f5eb190a9a16d5a1b4c"],
    ["Rummikub", "/games/rummikub/", "", "", "https://img.gamedistribution.com/6bf29e0982a64f898a81c3f3612aba26-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "89", "87", "93", "90", "6bf29e0982a64f898a81c3f3612aba26"],
    ["Candy_Riddles_Free_Match_3_Puzzle", "/games/candy-riddles--free-match-3-puzzle/", "", "", "https://img.gamedistribution.com/639df47033804f18bf39e113ef29f4fa-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "87", "93", "93", "90", "639df47033804f18bf39e113ef29f4fa"],
    ["Snow_Rider_3D", "/games/snow-rider-3d/", "", "", "https://img.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Action New Landscape", "2026-06-13", "95", "91", "91", "95", "3b79a8537ebc414fb4f9672a9b8c68c8"],
    ["Block_Blast", "/games/block-blast/", "", "", "https://img.gamedistribution.com/3a364ed8d075418abb7849e1d63b6015-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "92", "95", "91", "94", "3a364ed8d075418abb7849e1d63b6015"],
    ["Kris_Mahjong", "/games/kris-mahjong/", "", "", "https://img.gamedistribution.com/5ed3b1c510c3400db0ef580c60cbcdca-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "93", "93", "91", "94", "5ed3b1c510c3400db0ef580c60cbcdca"],
    ["Garden_Tales", "/games/garden-tales/", "", "", "https://img.gamedistribution.com/fa29efc197d04cb1bb3074b8255f817f-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "89", "94", "91", "94", "fa29efc197d04cb1bb3074b8255f817f"],
    ["Skydom", "/games/skydom/", "", "", "https://img.gamedistribution.com/ae10263247c44278b33c845ff1c2df80-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "87", "89", "94", "95", "ae10263247c44278b33c845ff1c2df80"],
    ["Tropical_Merge", "/games/tropical-merge/", "", "", "https://img.gamedistribution.com/4eafc18cbceb45ed884f6c5d70df3963-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Merge New Landscape", "2026-06-13", "87", "89", "91", "93", "4eafc18cbceb45ed884f6c5d70df3963"],
    ["Traffic_Jam_3D", "/games/traffic-jam-3d/", "", "", "https://img.gamedistribution.com/337302b23b5943d8bcfc501d81d50cdb-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Racing New Landscape", "2026-06-13", "88", "94", "95", "92", "337302b23b5943d8bcfc501d81d50cdb"],
    ["Jewels_Blitz_5", "/games/jewels-blitz-5/", "", "", "https://img.gamedistribution.com/0dd92ae2a7214f289608049167f2ebd4-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "90", "87", "93", "89", "0dd92ae2a7214f289608049167f2ebd4"],
    ["Jewels_Blitz_6", "/games/jewels-blitz-6/", "", "", "https://img.gamedistribution.com/bbd9c393a8b14f50aa19715f33ea50dc-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "95", "87", "92", "91", "bbd9c393a8b14f50aa19715f33ea50dc"],
    ["Match_Arena", "/games/match-arena/", "", "", "https://img.gamedistribution.com/15e07594984f413f9b578afe16778eb9-512x512.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "93", "93", "87", "92", "15e07594984f413f9b578afe16778eb9"],
    ["Hexa_Stack", "/games/hexa-stack/", "", "", "https://img.gamedistribution.com/ac3276e1819644858f0c8693c219064c-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "87", "94", "89", "89", "ac3276e1819644858f0c8693c219064c"],
    ["Mahjong_Match", "/games/mahjong-match/", "", "", "https://img.gamedistribution.com/fe22c2e8ce44494cbde70fa8b30105d2-512x512.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "89", "91", "91", "87", "fe22c2e8ce44494cbde70fa8b30105d2"],
    ["Arrow_Escape", "/games/arrow-escape/", "", "", "https://img.gamedistribution.com/abda34d396174f6487968885157388e2-512x512.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "87", "93", "89", "91", "abda34d396174f6487968885157388e2"],
    ["Fruit_Sort_Logic", "/games/fruit-sort-logic/", "", "", "https://img.gamedistribution.com/54794eb4734d4c0cb480bc876a5851cf-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "93", "90", "89", "95", "54794eb4734d4c0cb480bc876a5851cf"],
    ["Cooking_Empire", "/games/cooking-empire/", "", "", "https://img.gamedistribution.com/63e4110fb71d4588a8f4b6081fea5bdb-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Casual New Landscape", "2026-06-13", "94", "88", "92", "90", "63e4110fb71d4588a8f4b6081fea5bdb"],
    ["Coffee_Color_Blocks", "/games/coffee-color-blocks/", "", "", "https://img.gamedistribution.com/0904d5fb5d0044fe9fddf1cd5834cff2-512x512.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "88", "89", "87", "87", "0904d5fb5d0044fe9fddf1cd5834cff2"],
    ["Hidden_Objects_Island_Secrets", "/games/hidden-objects--island-secrets/", "", "", "https://img.gamedistribution.com/7ffd63337f514fd1bb16fa54f15d1f68-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "90", "87", "90", "89", "7ffd63337f514fd1bb16fa54f15d1f68"],
    ["Bubble_Shooter_Crystal_Hunt", "/games/bubble-shooter-crystal-hunt/", "", "", "https://img.gamedistribution.com/11abb92c950f4b29a60b36037fde6951-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "89", "91", "89", "94", "11abb92c950f4b29a60b36037fde6951"],
    ["Farm_Blast", "/games/farm-blast/", "", "", "https://img.gamedistribution.com/8e9f68b6765f4c39a4c243c4dc6a4ec5-512x512.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "87", "93", "90", "92", "8e9f68b6765f4c39a4c243c4dc6a4ec5"],
    ["Obby_Football_Soccer_3D", "/games/obby-football-soccer-3d/", "", "", "https://img.gamedistribution.com/7c03475573ec4a31b3926cc32b29bff1-512x512.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Sports New Landscape", "2026-06-13", "91", "88", "85", "82", "7c03475573ec4a31b3926cc32b29bff1"],
    ["Easter_Mahjong_Deluxe", "/games/easter-mahjong-deluxe/", "", "", "https://img.gamedistribution.com/0056b0eab7c141aaaf8d7a5a76c02558-512x384.jpeg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "89", "86", "83", "80", "0056b0eab7c141aaaf8d7a5a76c02558"],
    ["Steal_Brainrot_Eggs", "/games/steal-brainrot-eggs/", "", "", "https://img.gamedistribution.com/e07da43b39e443738d6a84a4a6255c32-512x384.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Action New Landscape", "2026-06-13", "92", "89", "86", "83", "e07da43b39e443738d6a84a4a6255c32"],
    ["Tap_3D_Blocks", "/games/tap-3d-blocks/", "", "", "https://img.gamedistribution.com/2c50bfeecb6c4849b504cfe446bf844e-200x120.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Puzzle New Landscape", "2026-06-13", "87", "84", "81", "78", "2c50bfeecb6c4849b504cfe446bf844e"],
    ["My_Arcade_Center_2", "/games/my-arcade-center-2/", "", "", "https://img.gamedistribution.com/54aca2f7503041c0bd97e74d7e316a67-512x512.jpg", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Strategy New Landscape", "2026-06-13", "90", "87", "84", "81", "54aca2f7503041c0bd97e74d7e316a67"]


];

// ============================================
// GAME DETAILS EXTENSION
// ============================================
// Field Reference:
// gameId     GameDistribution platform ID (matches the last field of the array)
// desc       Short description (used for homepage game cards)
// players    Online player count (display only)
// rating     Game rating (display only)
// overview   Full game description (main copy for detail page, 120-180 words)
// howToPlay  Gameplay instructions for detail page
// features   List of game highlights (displayed on detail page)
// tags       Topic tags (for tag aggregation pages and SEO optimization)
var gameDetails = {
   "Tap_Arrow_Away": {
        gameId: "07393e2820d1486ca209959528869a5f",
        desc: "An addictive tap-away puzzle game. Remove arrow blocks to solve puzzles and relax your mind.",
        players: "1.5k",
        rating: "4.5",
        overview: "Tap Arrow Away is a relaxing yet challenging puzzle game that combines classic arrow removal mechanics with clean, minimal visuals. The board is filled with colorful arrow blocks that only move in the direction they point. Tap each arrow to send it off the board in its facing direction, and clear the entire grid level by level. With hundreds of unique levels, increasing difficulty, and hidden pixel art rewards for perfect clears, it delivers smooth one-tap gameplay perfect for short breaks or longer casual sessions.",
        howToPlay: "Tap on any arrow block to remove it from the grid. Blocks can only be removed if they have a clear path in the direction the arrow is pointing. Plan your tap order carefully to avoid blocking other arrows. Clear all arrows from the board to complete the level and unlock pixel art rewards. Use hints if you get stuck on a tricky level.",
        features: ["Hundreds of unique levels", "Hidden pixel art rewards", "Smooth one-tap controls", "Increasing difficulty curve", "Relaxing minimal visual style"],
        tags: ["Puzzle", "Relaxing", "Pixel Art", "Single Player", "Casual"]
    },
    "Football_3D": {
        gameId: "540d36010bb94e288a660456efaebff9",
        desc: "Take to the pitch in this slick 3D football game. Score, tackle, and lead your team to victory!",
        players: "5.8k",
        rating: "4.8",
        overview: "Football 3D delivers fast-paced soccer action right in your browser with stunning full 3D graphics. Take control of your team across multiple game modes, from quick matches to full tournament brackets. Dribble past defenders, make precise passes, and score amazing goals to win matches and climb the ranks. With intuitive keyboard and touch controls, realistic physics, and dynamic stadium atmosphere, it captures the thrill of real football in an accessible browser format.",
        howToPlay: "Use the arrow keys or WASD to move your player across the pitch. Press the spacebar to shoot, and hold it to increase shot power. Pass the ball to teammates with a short tap, and switch players to defend against your opponent. Score more goals than the opposing team before time runs out to win the match. Unlock new teams and stadiums as you progress.",
        features: ["Full 3D graphics", "Multiple game modes", "Intuitive touch & keyboard controls", "Realistic football physics", "Team & stadium unlock system"],
        tags: ["Sports", "Football", "3D", "Action", "Single Player"]
    },
    "Jewel_Coloring": {
        gameId: "fe81d3ecbf5540ca8d9fe39387635d8a",
        desc: "A calming jewel coloring puzzle game. Fill beautiful patterns with colors and unwind.",
        players: "1.8k",
        rating: "4.6",
        overview: "Jewel Coloring is a relaxing color-by-number puzzle game featuring beautiful jewel-themed designs. Each pattern is divided into numbered sections — simply pick the corresponding color and tap to fill in the area. The game features hundreds of unique coloring pages, from intricate jewel patterns to nature scenes and mandalas. With smooth controls, a calming color palette, and no time pressure, it is the perfect casual game for relaxation and creative expression.",
        howToPlay: "Select a color from the palette at the bottom of the screen. Tap on numbered sections of the image that match the selected color to fill them in. Zoom in and out with pinch or scroll controls to see tiny details. Complete the entire image to unlock it to your gallery. New coloring pages are added regularly for endless creative fun.",
        features: ["Hundreds of coloring pages", "Jewel & nature themed designs", "Smooth pinch-to-zoom controls", "Calming stress-free gameplay", "Regular new content updates"],
        tags: ["Puzzle", "Coloring", "Casual", "Relaxing", "Single Player"]
    },
    "Bubble_Blasters": {
        gameId: "5d8d11e9919245939a57378a02b8fc8b",
        desc: "A fast-paced bubble blasting game. Pop waves of colorful bubbles and chase high scores.",
        players: "2.1k",
        rating: "4.4",
        overview: "Bubble Blasters is an energetic bubble popping game with fast-paced arcade action. Aim your blaster to shoot and match colorful bubbles, clearing them from the board before they reach the bottom line. The game features multiple power-ups, combo multipliers, and increasing difficulty waves that keep the action intense. With bright vibrant visuals, satisfying pop effects, and endless arcade gameplay, it delivers classic bubble shooter fun with a high-energy twist.",
        howToPlay: "Aim your bubble blaster by moving your cursor or finger across the screen. Tap to fire a bubble, and match 3 or more bubbles of the same color to blast them away. Create chain combos to earn bonus points and multipliers. Collect special power-up bubbles for explosive effects. Don’t let the bubble wall reach the bottom line, or the game will end.",
        features: ["Fast-paced arcade bubble action", "Combo multiplier system", "Special power-up bubbles", "Endless wave mode", "Vibrant satisfying visual effects"],
        tags: ["Casual", "Bubble Shooter", "Arcade", "Single Player", "High Score"]
    },
    "Hole_Puzzle": {
        gameId: "7697f626f5224cb284cf463ce1275495",
        desc: "A clever sliding hole puzzle game. Guide the ball into the hole with strategic moves.",
        players: "1.6k",
        rating: "4.5",
        overview: "Hole Puzzle is a minimalist logic puzzle game where you tilt the board to roll a ball into the target hole. Each level features obstacles, walls, and traps that you must navigate around to reach the goal. With simple one-swipe controls, hundreds of unique levels, and increasing difficulty, it tests your spatial reasoning and problem-solving skills. The clean minimal design and smooth physics make it easy to pick up and hard to put down.",
        howToPlay: "Swipe in any direction to tilt the board and roll the ball across the level. Guide the ball into the target hole to complete the level. Avoid falling off the edges or hitting trap holes. Use walls and obstacles to bounce the ball into the right position. Complete levels in as few moves as possible to earn a perfect 3-star rating.",
        features: ["Hundreds of puzzle levels", "Smooth realistic physics", "Minimalist clean design", "3-star rating system", "Increasing difficulty curve"],
        tags: ["Puzzle", "Casual", "Physics", "Brain Teaser", "Single Player"]
    },
    "Solitaire_Daily": {
        gameId: "cacae8dbfe0f4ec598f8f7c29f7e0992",
        desc: "Daily classic solitaire challenges. Play Klondike solitaire with fresh new puzzles every day.",
        players: "3.2k",
        rating: "4.7",
        overview: "Solitaire Daily brings the timeless classic Klondike solitaire game to your browser with a fresh daily challenge system. Play a brand new solitaire hand every day, track your streaks, and compete for the best completion times. The game features customizable card backs, multiple difficulty levels, undo and hint functions, and a clean intuitive interface. Whether you are a casual player or a solitaire expert, the daily challenges offer fun and rewarding gameplay for everyone.",
        howToPlay: "Build tableau columns in descending order with alternating red and black card colors. Move cards between columns and foundations by clicking or dragging. Tap the stock pile to draw new cards. Move all cards to the four foundation piles in ascending order by suit to win. Use the undo and hint functions if you get stuck, and try to beat your best time each day.",
        features: ["Daily new solitaire challenges", "Streak tracking system", "Customizable card themes", "Hint & undo functions", "Clean intuitive interface"],
        tags: ["Card Game", "Solitaire", "Casual", "Daily", "Single Player"]
    },
    "Real_Football": {
        gameId: "0e790569b4c74967923678652de3dbc4",
        desc: "Intense top-down football action. Dribble, pass and score your way to championship glory.",
        players: "4.5k",
        rating: "4.8",
        overview: "Real Football delivers fast-paced top-down soccer action with authentic gameplay feel. Take control of your team across league matches, cup tournaments, and quick play modes. Master dribbling, through passes, and powerful shots to outplay your opponents and win trophies. The game features smooth responsive controls, intelligent AI opponents, and multiple team customization options. With its classic top-down perspective and addictive competitive gameplay, it captures the essence of retro football games with modern polish.",
        howToPlay: "Use the arrow keys to move your selected player across the pitch. Press the spacebar to shoot, and tap another key to pass to nearby teammates. Switch control between players to defend against opponent attacks. Score more goals than your opponent before full time to win the match. Progress through leagues and tournaments to unlock better teams and rewards.",
        features: ["Classic top-down football view", "Multiple game modes & tournaments", "Responsive smooth controls", "Intelligent AI opponents", "Team customization options"],
        tags: ["Sports", "Football", "Action", "Retro", "Single Player"]
    },
    "Magic_Brick_Wars": {
        gameId: "a9964948ad434acfb106811d323e6464",
        desc: "A strategic brick breaking battle game. Destroy enemy bricks and defend your base.",
        players: "2.3k",
        rating: "4.6",
        overview: "Magic Brick Wars puts a strategic twist on the classic brick breaker genre with competitive base vs base gameplay. Launch your ball to destroy the enemy’s brick defenses while protecting your own base from their attacks. Collect power-ups to unlock special abilities like multi-ball, laser shots, and expanded paddles. The game features multiple campaign levels, PvP duel mode, and a variety of magic abilities to master. With fast-paced action and deep strategy, it reimagines the brick breaker formula for competitive play.",
        howToPlay: "Move your paddle left and right to bounce the ball and break bricks on the enemy side. Collect falling power-ups to gain special abilities and advantages. Defend your base from enemy balls to avoid taking damage. Destroy all of your opponent’s bricks and base to win the level. Unlock new magic abilities as you progress through the campaign.",
        features: ["Strategic brick breaker combat", "Multiple power-ups & magic abilities", "Campaign & PvP duel modes", "Base defense mechanics", "Fast-paced competitive action"],
        tags: ["Strategy", "Arcade", "Brick Breaker", "Action", "Multiplayer"]
    },
    "Kick_Lucky_Boxes_Online": {
        gameId: "381bb01b67a14e7ea30b5623eb36855e",
        desc: "A fun casual lucky box kicking game. Kick boxes to reveal prizes and collect big rewards.",
        players: "1.9k",
        rating: "4.4",
        overview: "Kick Lucky Boxes Online is a lighthearted casual game where you kick colorful lucky boxes to reveal hidden prizes and rewards. Time your kicks perfectly to break open boxes filled with coins, gems, and rare bonus items. The game features multiple themed box sets, upgradeable kicking power, and exciting jackpot moments. With simple one-tap gameplay, satisfying reward effects, and endless casual fun, it is perfect for quick relaxing sessions and chasing big wins.",
        howToPlay: "Tap or click at the right moment to kick the box as it moves across the screen. Perfectly timed kicks deal more damage and have a higher chance of rare rewards. Break open boxes to collect coins, gems, and special prizes. Use your coins to upgrade your kicking power and unlock new box themes. Hit the jackpot bonus for massive reward multipliers.",
        features: ["Simple one-tap gameplay", "Multiple themed lucky boxes", "Upgradeable kick power", "Jackpot bonus rewards", "Satisfying casual fun"],
        tags: ["Casual", "Arcade", "Lucky", "Single Player", "Rewards"]
    },
    "Juice_Merge": {
        gameId: "d4c11a64ed754d71b4671d699c66a9c7",
        desc: "A refreshing merge puzzle game. Combine juice fruits to create bigger, more delicious drinks.",
        players: "2.0k",
        rating: "4.5",
        overview: "Juice Merge is a bright and refreshing merge puzzle game with a juicy fruit drink theme. Drop fruits into the glass and merge identical fruits together to create bigger, higher-value fruits and delicious juice drinks. The game features satisfying physics-based merging, colorful fruit designs, and endless high-score gameplay. Try to create the ultimate legendary juice before the glass fills up to the top. With cute visuals and simple controls, it is addictive casual fun for all ages.",
        howToPlay: "Tap anywhere in the glass to drop the current fruit. Two identical fruits that touch each other will automatically merge into a bigger, higher-value fruit. Keep merging fruits to create larger and rarer fruit types. Don’t let the fruits fill up past the top of the glass, or the game will end. Try to reach the highest tier fruit and beat your best score.",
        features: ["Physics-based merge gameplay", "Colorful juicy fruit theme", "Endless high-score mode", "Satisfying merge animations", "Simple one-tap controls"],
        tags: ["Puzzle", "Merge", "Casual", "Fruit", "Single Player"]
    },
    "Solitaire_Farm_Seasons_5": {
        gameId: "567ad47ea5d04edaaa29a80cd9f9d1a3",
        desc: "Farm-themed solitaire adventure. Play solitaire and build your dream farm across the seasons.",
        players: "2.7k",
        rating: "4.7",
        overview: "Solitaire Farm Seasons 5 combines classic solitaire gameplay with charming farm building and seasonal decoration mechanics. Play solitaire levels to earn coins, then use your earnings to build and decorate your very own farm through spring, summer, autumn, and winter. The game features hundreds of solitaire levels, dozens of farm buildings and decorations, and a cozy relaxing atmosphere. It is the perfect blend of casual card game fun and creative farm building.",
        howToPlay: "Play solitaire by matching cards one rank higher or lower than the active card. Clear all cards from the board to complete the level and earn coins. Use your coins to purchase farm buildings, decorations, and seasonal upgrades. Unlock new areas of your farm as you progress through the seasons. Use power-ups and jokers to help you beat tricky levels.",
        features: ["Hundreds of solitaire levels", "Farm building & decoration", "Four seasonal themes", "Power-ups & joker cards", "Cozy relaxing atmosphere"],
        tags: ["Card Game", "Solitaire", "Farm", "Casual", "Building"]
    },
    "Stickman_Adventure": {
        gameId: "fd5ae555f42e4dac872819ed9125616c",
        desc: "An action-packed stickman platform adventure. Run, jump and fight through challenging levels.",
        players: "3.1k",
        rating: "4.6",
        overview: "Stickman Adventure is a classic side-scrolling platform game featuring a brave stickman hero on an epic adventure. Run, jump, slide, and fight your way through dozens of challenging levels filled with enemies, traps, and hidden secrets. Collect coins and power-ups to unlock new abilities and weapons. The game features responsive controls, smooth stickman animations, and a variety of unique environments to explore. It delivers old-school platformer fun with modern polished gameplay.",
        howToPlay: "Use the arrow keys to move left and right, and press up to jump. Press the attack button to fight enemies and break obstacles. Collect coins along the way to earn points and unlock upgrades. Avoid traps and enemy attacks to keep your health up. Reach the end of each level to advance, and defeat boss enemies at the end of each world.",
        features: ["Dozens of platform levels", "Smooth stickman animations", "Combat & power-up system", "Multiple unique environments", "Classic side-scrolling action"],
        tags: ["Action", "Platformer", "Stickman", "Adventure", "Single Player"]
    },
    "Nonogram_Daily": {
        gameId: "0e26b95603a14b378612f60bfe7069df",
        desc: "Daily picross logic puzzles. Solve number clues to reveal hidden pixel art pictures.",
        players: "2.2k",
        rating: "4.7",
        overview: "Nonogram Daily is a classic picture logic puzzle game also known as picross or griddlers. Use the number clues along the rows and columns to determine which cells to fill in, and gradually reveal a hidden pixel art picture. The game features a brand new puzzle every day, multiple difficulty levels from easy to expert, and a clean intuitive interface. Perfect for players who love logic puzzles and pixel art, the daily challenges offer rewarding brain-teasing fun every day.",
        howToPlay: "Study the number clues at the top of each column and left of each row. The numbers tell you how many consecutive filled cells are in that line. Tap cells to fill them in, and mark empty cells with an X to help you solve. Fill in all correct cells to complete the puzzle and reveal the hidden picture. Try to solve the daily puzzle as fast as you can for the best score.",
        features: ["Daily new nonogram puzzles", "Multiple difficulty levels", "Clean intuitive interface", "Hidden pixel art rewards", "Logic brain-teasing gameplay"],
        tags: ["Puzzle", "Nonogram", "Logic", "Pixel Art", "Daily"]
    },
    "Arrow_Sorting": {
        gameId: "2fb1dc3ebec147eeb9d7875354afcc20",
        desc: "A satisfying arrow sorting puzzle. Organize colored arrows into matching tubes to solve each level.",
        players: "1.7k",
        rating: "4.5",
        overview: "Arrow Sorting is a calm and satisfying sorting puzzle game where you organize colored arrows into separate tubes. Each tube contains a mix of different colored arrows — your goal is to move them so each tube holds only arrows of one single color. The game features hundreds of levels with increasing difficulty, smooth satisfying animations, and no time pressure. It is the perfect casual puzzle for relaxing and training your logical thinking skills at your own pace.",
        howToPlay: "Tap on a tube to pick up the top arrow inside it, then tap another tube to place the arrow there. You can only place an arrow on top of another arrow of the same color, or into an empty tube. Sort all arrows so each tube contains only one color to complete the level. Plan your moves carefully to avoid getting stuck, and use undo if you make a mistake.",
        features: ["Hundreds of sorting levels", "Smooth satisfying animations", "No time pressure", "Undo function", "Relaxing logical gameplay"],
        tags: ["Puzzle", "Sorting", "Casual", "Relaxing", "Brain Teaser"]
    },
    "Mojicon_Garden_JigSolitaire": {
        gameId: "679c57024b5944f584585244718e1cee",
        desc: "A cozy garden-themed jigsaw solitaire hybrid. Match tiles and build your peaceful garden.",
        players: "1.9k",
        rating: "4.6",
        overview: "Mojicon Garden JigSolitaire combines relaxing solitaire gameplay with charming jigsaw puzzle elements and a cozy garden setting. Match solitaire cards to progress through levels, and unlock jigsaw pieces that assemble into beautiful garden scenes. Collect cute mojicon characters, decorate your garden, and enjoy the calm, peaceful atmosphere. The game features dozens of levels, lovely hand-drawn art, and slow-paced casual gameplay perfect for unwinding.",
        howToPlay: "Play solitaire by matching cards that are one rank higher or lower than the active card. Clear the board to complete each level and earn jigsaw pieces. Assemble jigsaw puzzles to unlock beautiful garden scenes and decorations. Collect adorable mojicon characters to live in your garden. Use boosters to help you get through harder solitaire levels.",
        features: ["Solitaire & jigsaw hybrid gameplay", "Cozy garden theme", "Cute mojicon characters", "Hand-drawn art style", "Relaxing casual pace"],
        tags: ["Puzzle", "Solitaire", "Jigsaw", "Garden", "Casual"]
    },
    "Bloxorz_Block_Puzzle_3d": {
        gameId: "1d9ac2ca58b2436ab1e7ce3b83fd709f",
        desc: "The classic 3D block rolling puzzle. Roll the block across tiles and drop it into the goal hole.",
        players: "2.4k",
        rating: "4.7",
        overview: "Bloxorz Block Puzzle 3D brings the iconic block rolling puzzle to life with full 3D graphics and smooth physics. Control a rectangular block and roll it across a grid of tiles, navigating gaps, switches, and fragile platforms to reach the square goal hole. The game features dozens of challenging levels that test your spatial reasoning and problem-solving skills. With simple controls, increasing difficulty, and that classic 'just one more level' addictiveness, it is a must-play for puzzle fans.",
        howToPlay: "Use the arrow keys to roll the block one tile at a time across the grid. Carefully navigate around gaps and fragile tiles that break under your weight. Stand on switch tiles to activate bridges and open new paths. Roll the block and drop it perfectly into the square goal hole to complete the level. Don’t roll off the edge of the platform, or you will have to restart.",
        features: ["Classic 3D block rolling gameplay", "Dozens of challenging levels", "Switches & bridge mechanics", "Smooth 3D graphics", "Spatial reasoning puzzle fun"],
        tags: ["Puzzle", "3D", "Block", "Brain Teaser", "Single Player"]
    },
    "Combinations_Daily": {
        gameId: "c725caf57a5940deb09730cdf322f3a1",
        desc: "Daily word combination puzzles. Find all hidden words from the given letters.",
        players: "2.0k",
        rating: "4.6",
        overview: "Combinations Daily is a fun word puzzle game where you find all possible words from a set of letters. A new set of letters is available every day, and you must find every valid word combination to complete the daily challenge. The game features multiple difficulty levels, hint systems, and progress tracking for your daily streaks. It is a great way to expand your vocabulary, train your brain, and enjoy a quick daily word challenge.",
        howToPlay: "Tap and drag across the letter tiles to form valid English words. Find all required words to complete the daily puzzle. Longer words earn more points and bonus rewards. Use hints if you get stuck on a word. Keep a daily streak going to unlock achievements and show off your word skills. New letter combinations are available every single day.",
        features: ["Daily new word puzzles", "Multiple difficulty levels", "Streak & achievement system", "Hint support system", "Vocabulary building gameplay"],
        tags: ["Puzzle", "Word", "Daily", "Brain Teaser", "Single Player"]
    },
    "Math_Stars": {
        gameId: "e7e5bb0e6caf47b5965d813736921e76",
        desc: "Fun math puzzle challenges. Solve quick math problems and become a math star.",
        players: "1.5k",
        rating: "4.4",
        overview: "Math Stars is an engaging educational math game that makes practicing arithmetic fun and rewarding. Solve quick addition, subtraction, multiplication, and division problems to earn stars and progress through difficulty levels. The game features timed challenge modes, multiple difficulty settings, and progress tracking to help you improve your math speed and accuracy. Suitable for both kids learning math and adults looking to keep their mind sharp with quick calculations.",
        howToPlay: "Read each math problem and select the correct answer from the four options. Answer correctly to earn stars and move on to the next problem. Answer as many problems as you can before the timer runs out to get a high score. Choose from different difficulty levels and operation types to match your skill level. Unlock achievements as you improve your math skills.",
        features: ["Multiple math operation types", "Adjustable difficulty levels", "Timed challenge mode", "Star reward system", "Educational & fun gameplay"],
        tags: ["Casual", "Educational", "Math", "Puzzle", "Single Player"]
    },
    "Worm_Puzzle_Snake_Apple": {
        gameId: "7e5efdcdc8d84b2291c0febe8de5e638",
        desc: "A clever snake puzzle game. Guide the worm to eat all apples and solve each level.",
        players: "1.8k",
        rating: "4.5",
        overview: "Worm Puzzle Snake Apple puts a puzzle twist on the classic snake game formula. Control a growing worm as you navigate grid-based levels, collecting all the apples to complete each stage. The worm grows longer with every apple you eat, making movement more challenging as you progress. The game features dozens of levels with obstacles, portals, and tricky layouts that test your planning skills. With simple controls and charming pixel art style, it is fun for casual and puzzle players alike.",
        howToPlay: "Use the arrow keys to move the worm around the grid level. Eat every apple on the level to complete it. The worm grows longer with each apple you eat, so plan your path carefully. Avoid bumping into walls or the worm’s own body, or you will fail the level. Navigate around obstacles and use portals to reach hard-to-get apples.",
        features: ["Dozens of puzzle levels", "Classic snake growth mechanics", "Obstacles & portal mechanics", "Charming pixel art style", "Planning-based puzzle gameplay"],
        tags: ["Puzzle", "Snake", "Casual", "Pixel Art", "Single Player"]
    },
    "Sugar_Pop_Land": {
        gameId: "5bf8cb720bd147a4b62167eefdf38788",
        desc: "A sweet candy popping adventure. Match and pop colorful candies across hundreds of tasty levels.",
        players: "2.5k",
        rating: "4.6",
        overview: "Sugar Pop Land is a vibrant match-3 puzzle game set in a colorful candy land full of sweet treats. Tap groups of matching candies to pop them and earn points, and create bigger groups to unlock powerful candy boosters. The game features hundreds of levels with unique objectives, special power candies, and increasing difficulty. With bright cheerful visuals, satisfying pop animations, and addictive casual gameplay, it is a delicious puzzle adventure for candy game fans of all ages.",
        howToPlay: "Tap on groups of 2 or more adjacent candies of the same color to pop them. Create bigger groups to spawn special power candies with explosive effects. Complete each level’s objective before you run out of taps to advance. Use special boosters to help you beat tricky levels. Progress through Sugar Pop Land and unlock new candy-filled worlds.",
        features: ["Hundreds of candy levels", "Powerful candy boosters", "Colorful sweet theme", "Satisfying pop animations", "Addictive casual gameplay"],
        tags: ["Puzzle", "Match 3", "Candy", "Casual", "Single Player"]
    },


    "Meme_Myth_Wukong": {
        gameId: "e4af90c070cf499da371b44232a6aaca",
        desc: "A hilarious brainrot puzzle game inspired by classic myth and absurd memes. Solve weird puzzles with totally unexpected logic!",
        players: "2.1k",
        rating: "4.6",
        overview: "Meme Myth: Wukong is a wildly creative puzzle game that blends classic Chinese mythology with internet meme culture and absurd, mind-bending logic. Guide the monkey hero through a series of ridiculous challenges where nothing follows normal rules. You will need to think sideways, tap every interactive object, and embrace the chaos to uncover the dumbest-yet-smartest solutions in each level. Featuring quirky hand-drawn visuals, unexpected plot twists, and a healthy dose of humor, this game delivers endless laughs and creative puzzle-solving fun for players who love out-of-the-box experiences.",
        howToPlay: "Tap and interact with objects in each level to trigger events and solve puzzles. There are no fixed rules — think creatively and try every possible interaction. Look for subtle hints in the level design if you get stuck. Complete each absurd challenge to progress through the game and unlock more chaotic levels.",
        features: ["Absurd meme-inspired puzzles", "Creative out-of-the-box gameplay", "Quirky hand-drawn art style", "Unexpected plot twists", "No fixed rules, full creative freedom"],
        tags: ["Puzzle", "Comedy", "Meme", "Creative", "Single Player"]
    },
    "Hill_Climb_Pixel_Car": {
        gameId: "6d493125b300434fad9be4cf8c858bbd",
        desc: "An off-road pixel racing game. Master rough terrains, overcome obstacles, and perform spectacular jumps to become champion.",
        players: "3.5k",
        rating: "4.7",
        overview: "Hill Climb Pixel Car is a fast-paced off-road racing game with a charming retro pixel art style. Take control of your motocross bike and race across challenging terrains including dirt tracks, sand dunes, mud pits, and grassy hills. Master your acceleration and balance to overcome steep obstacles, perform breathtaking jumps, and avoid crashing. With multiple levels of increasing difficulty, responsive controls, and competitive time-based racing action, this game delivers endless adrenaline thrills for racing fans of all skill levels.",
        howToPlay: "Use the arrow keys to control your bike: press up to accelerate, down to brake or reverse, and left/right to adjust your balance mid-air. Time your jumps carefully to avoid flipping over. Race to the finish line as fast as possible to beat the clock and unlock new levels. Collect coins along the way to upgrade your bike’s performance.",
        features: ["Challenging off-road terrains", "Spectacular jump mechanics", "Retro pixel art style", "Multiple difficulty levels", "Bike upgrade system"],
        tags: ["Racing", "Action", "Pixel Art", "Off-Road", "Motocross"]
    },
    "Bubble_Game_3": {
        gameId: "27673bc45d2e4b27b7cd24e422f7c257",
        desc: "A classic bubble shooter game. Clear as many bubbles as you can and beat your high score in relaxing casual gameplay.",
        players: "1.8k",
        rating: "4.5",
        overview: "Bubble Game 3 is a timeless bubble shooter puzzle game that is easy to learn but hard to master. Your goal is to shoot and match bubbles of the same color to pop them and clear the board. The game features dozens of levels with increasing difficulty, special power-up bubbles, and challenging obstacles that will test your aim and strategic thinking. With smooth gameplay, bright colorful visuals, and relaxing yet addictive mechanics, it is the perfect casual game for players of all ages to unwind with.",
        howToPlay: "Aim your bubble shooter at the cluster of bubbles above the screen. Tap to fire a bubble, and match 3 or more bubbles of the same color to pop them. Clear all bubbles from the board to complete the level. Use special power-up bubbles to clear large sections at once. Do not let the bubbles reach the bottom of the screen, or you will lose a life.",
        features: ["Classic bubble shooter gameplay", "Dozens of challenging levels", "Special power-up bubbles", "Colorful bubble visuals", "Relaxing casual gameplay"],
        tags: ["Puzzle", "Bubble Shooter", "Casual", "Match", "Single Player"]
    },
    "Mahjong_Connect": {
        gameId: "a7f5393b417346268657f3bd67eac24e",
        desc: "A classic mahjong connect puzzle game. Match and clear mahjong pieces to complete the board before time runs out.",
        players: "2.2k",
        rating: "4.6",
        overview: "Mahjong Connect is a traditional mahjong puzzle game that tests your observation and pattern-matching skills. The goal is to connect identical mahjong pieces with a clear path that has no more than two turns, then remove them from the board. The game features multiple classic mahjong layouts, varying difficulty levels, and a countdown timer to challenge your speed and accuracy. With beautiful traditional Chinese-style visuals, calming background music, and endless replayability, it is a perfect choice for mahjong fans and puzzle lovers alike.",
        howToPlay: "Tap on two identical mahjong pieces to connect and remove them. The pieces can only be connected if there is a clear path between them with no more than two 90-degree turns. Clear all pieces from the board before the timer runs out to complete the level. Use hints if you get stuck, and try to beat your best time on each layout.",
        features: ["Classic mahjong connect rules", "Multiple traditional layouts", "Timer challenge mode", "Built-in hint system", "Beautiful traditional art style"],
        tags: ["Puzzle", "Mahjong", "Traditional", "Match", "Brain Teaser"]
    },
    "The_Mergest_Kingdom": {
        gameId: "b5203bfef51242c39690c761321d769f",
        desc: "A magical merge puzzle adventure. Merge objects, collect resources, and rebuild your own fantasy kingdom island.",
        players: "4.1k",
        rating: "4.8",
        overview: "The Mergest Kingdom is a magical merge puzzle adventure that combines relaxing merge mechanics with creative kingdom building. Merge hundreds of different objects — from plants and trees to buildings and mythical creatures — to unlock new items and expand your kingdom. Collect resources, complete challenging quests, and design your own unique island kingdom exactly the way you want it. With endless merge combinations, regular new content updates, and a whimsical fantasy world, this game offers hours of creative and relaxing fun for all players.",
        howToPlay: "Drag and drop identical objects to merge them into new, more powerful items. Merge three or more of the same item to unlock higher-tier objects. Collect merged resources to complete quests and unlock new areas of your kingdom. Tap on chests and mystery items to discover rare merge objects. Keep merging to grow your kingdom and uncover all the magical secrets of the Seventh Realm.",
        features: ["Endless merge combinations", "Kingdom building & customization", "Challenging quest system", "Whimsical fantasy world", "Regular content updates"],
        tags: ["Merge", "Strategy", "Fantasy", "Building", "Casual"]
    },
    "Fireboy_and_Watergirl_1_Forest_Temple": {
        gameId: "a55c9cc9c21e4fc683c8c6857f3d0c75",
        desc: "The classic cooperative puzzle adventure. Guide Fireboy and Watergirl through the Forest Temple and collect all diamonds.",
        players: "5.8k",
        rating: "4.9",
        overview: "Fireboy and Watergirl 1: Forest Temple is the iconic cooperative puzzle adventure that started the beloved series. Guide the elemental pair through the mysterious Forest Temple, solving clever puzzles and avoiding deadly traps along the way. Fireboy cannot touch water, and Watergirl cannot touch fire — you will need to switch between the two characters, or play with a friend, to navigate each level, collect all diamonds, and reach the exit safely. With clever level design, smooth controls, and timeless cooperative gameplay, it is a must-play for puzzle fans of all ages.",
        howToPlay: "Use the arrow keys to control Fireboy, and WASD keys to control Watergirl. Switch between characters to solve puzzles and avoid elemental hazards: Fireboy must stay out of water pools, and Watergirl must avoid fire pits. Collect all diamonds in the level to unlock the exit door. Reach the exit with both characters to complete the level. Play solo by switching characters, or play with a friend for cooperative fun.",
        features: ["Classic cooperative puzzle gameplay", "Clever elemental level design", "Solo and 2-player modes", "Diamond collection challenges", "Timeless family-friendly fun"],
        tags: ["Puzzle", "Adventure", "Cooperative", "2 Player", "Platformer"]
    },
    "Moto_X3M_Bike_Race_Game": {
        gameId: "5b0abd4c0faa4f5eb190a9a16d5a1b4c",
        desc: "The iconic off-road motorcycle racing game. Master 25 challenging levels, perform stunts, and beat the clock.",
        players: "6.2k",
        rating: "4.8",
        overview: "Moto X3M Bike Race Game is the legendary off-road motorcycle racing game that defined the browser racing genre. Race through 25 challenging levels filled with ramps, loops, deadly obstacles, and stunning stunt opportunities. Master your bike control to perform breathtaking flips and stunts, beat the level clock, and unlock new tracks. With fast-paced gameplay, smooth realistic physics, and addictive level design, Moto X3M delivers endless adrenaline-fueled racing fun for players of all skill levels.",
        howToPlay: "Press the up arrow to accelerate, down arrow to brake, and left/right arrows to adjust your bike’s balance mid-air. Perform stunts like wheelies and backflips to earn extra time bonuses. Race to the finish line as fast as possible to earn a 3-star rating. Avoid crashing your bike, and use checkpoints to restart if you fail. Unlock new levels by completing the previous tracks.",
        features: ["25 challenging levels", "Breathtaking stunt mechanics", "Smooth bike physics", "3-star rating system", "Addictive fast-paced gameplay"],
        tags: ["Racing", "Action", "Stunt", "Off-Road", "Moto X3M"]
    },
    "Rummikub": {
        gameId: "6bf29e0982a64f898a81c3f3612aba26",
        desc: "The original classic family tile game. Arrange tiles into smart combinations and be the first to empty your rack.",
        players: "3.4k",
        rating: "4.7",
        overview: "Rummikub is one of the most popular family board games in the world, combining tactical thinking, luck, and tense competitive fun. The goal is to be the first player to place all your tiles on the table by creating valid combinations: either runs of consecutive numbers in the same color, or groups of the same number in different colors. With simple rules but deep strategic depth, and the ability to rearrange existing combinations on the table, it is perfect for family game nights and casual players of all ages.",
        howToPlay: "Take turns placing tiles from your rack onto the table to create valid combinations. A valid combination is either a group of 3 or 4 tiles with the same number in different colors, or a run of 3 or more consecutive numbers in the same color. You can also add tiles to existing combinations on the table, or rearrange them to form new sets. Be the first to empty your tile rack to win the match.",
        features: ["Classic Rummikub rules", "Strategic tile placement", "Family-friendly gameplay", "Competitive turn-based mode", "Easy to learn, hard to master"],
        tags: ["Board Game", "Strategy", "Family", "Tile Game", "Classic"]
    },
    "Candy_Riddles_Free_Match_3_Puzzle": {
        gameId: "639df47033804f18bf39e113ef29f4fa",
        desc: "A sweet match-3 puzzle game full of candy riddles. Match delicious treats and complete hundreds of challenging levels.",
        players: "2.8k",
        rating: "4.6",
        overview: "Candy Riddles is a colorful and addictive match-3 puzzle game with a charming candy theme and creative level objectives. Swap adjacent candies to create matches of 3 or more, and complete level goals like reaching a target score, clearing special candies, or collecting sweet ingredients. The game features hundreds of unique levels, powerful candy boosters, and a whimsical candy world to explore. With cute animations, satisfying match effects, and endless puzzle fun, it is the perfect game for match-3 fans.",
        howToPlay: "Click and drag to swap two adjacent candies. Match 3 or more candies of the same type to clear them from the board. Match 4 or more candies to create special booster candies that clear large sections of the board. Complete the level’s objective before you run out of moves to advance. Use boosters to help you beat difficult levels and earn high scores.",
        features: ["Hundreds of unique levels", "Powerful candy boosters", "Challenging level objectives", "Colorful candy theme", "Satisfying match-3 gameplay"],
        tags: ["Match 3", "Puzzle", "Candy", "Casual", "Addictive"]
    },
    "Snow_Rider_3D": {
        gameId: "3b79a8537ebc414fb4f9672a9b8c68c8",
        desc: "A thrilling 3D snow sleigh racing game. Ride down snowy slopes, collect gifts, and set the highest score.",
        players: "1.9k",
        rating: "4.5",
        overview: "Snow Rider 3D is an exciting 3D winter racing game that lets you experience the thrill of sledding down snowy mountain slopes anytime. Race down the hill as fast as you can, perform cool tricks to earn extra points, and collect gift boxes along the way to unlock new sleighs. Avoid obstacles like rocks, trees, and snow mounds to stay on track and keep your speed up. With stunning 3D winter visuals, smooth intuitive controls, and addictive high-score gameplay, it is perfect for winter-themed casual fun.",
        howToPlay: "Use the left and right arrow keys to steer your sleigh. Press the up arrow to accelerate, and the down arrow to brake. Press the spacebar to jump over obstacles. Collect gifts to increase your score and unlock new sleigh skins. Perform tricks while in the air to earn bonus points. The farther you go and the more tricks you perform, the higher your final score will be.",
        features: ["Stunning 3D winter visuals", "Exciting snow racing action", "Trick and stunt mechanics", "Gift collection & unlock system", "High-score challenge mode"],
        tags: ["Racing", "Action", "3D", "Winter", "Snow"]
    },
    "Block_Blast": {
        gameId: "3a364ed8d075418abb7849e1d63b6015",
        desc: "An addictive block puzzle game. Place blocks to clear lines, relax your mind, and challenge your brain.",
        players: "2.4k",
        rating: "4.5",
        overview: "Block Blast is an exciting and relaxing block puzzle game that combines the best of woody puzzle, cube block, and grid game genres. Drag and drop block pieces onto the grid to fill and clear full horizontal and vertical lines. The game features smooth satisfying gameplay, multiple game modes, and increasing difficulty that will test your spatial reasoning and strategic planning. Perfect for unwinding after a long day or giving your brain a quick workout, it offers endless casual puzzle fun.",
        howToPlay: "Drag block pieces from the bottom of the screen and place them onto the grid. Fill an entire horizontal or vertical line to clear it and free up space. The game ends when there is no more room to place the next block. Plan your placements carefully to create chain clears and earn higher scores. There is no time limit, so take your time and think strategically.",
        features: ["Relaxing block puzzle gameplay", "Smooth satisfying clearing effects", "Multiple game modes", "Simple one-finger controls", "Endless casual replay value"],
        tags: ["Puzzle", "Block Puzzle", "Casual", "Relaxing", "Single Player"]
    },
    "Kris_Mahjong": {
        gameId: "5ed3b1c510c3400db0ef580c60cbcdca",
        desc: "A classic mahjong solitaire game. Match pairs of identical tiles and clear the board at your own pace.",
        players: "2.0k",
        rating: "4.5",
        overview: "Kris Mahjong is a straightforward and relaxing mahjong solitaire game for players who love classic tile-matching. Your goal is to clear the entire board by removing all pairs of identical mahjong tiles. You can only select tiles that are not blocked by other tiles and have at least one free side. With clean minimalist visuals, calming background music, and multiple layouts to choose from, it is the perfect casual puzzle game for a quick brain break or a longer relaxing session.",
        howToPlay: "Tap on two identical mahjong tiles to match and remove them from the board. You can only select tiles that have at least one left or right side open and are not covered by other tiles. Clear all tiles from the board to complete the level. Use the hint button if you get stuck, and try to beat your best completion time for each layout.",
        features: ["Classic mahjong solitaire rules", "Multiple tile layouts", "Clean minimalist visuals", "Built-in hint system", "Relaxing casual gameplay"],
        tags: ["Puzzle", "Mahjong", "Solitaire", "Relaxing", "Brain Teaser"]
    },
    "Garden_Tales": {
        gameId: "fa29efc197d04cb1bb3074b8255f817f",
        desc: "A vibrant garden-themed match-3 game. Combine flowers and fruits across over 700 exciting levels.",
        players: "2.6k",
        rating: "4.7",
        overview: "Garden Tales is a colorful match-3 puzzle game set in a beautifully landscaped garden full of flowers, fruit, and mushrooms. Combine and match three or more of the same items to clear them, and create bigger matches to unlock powerful extras that make the game easier. Help the garden gnome Willy keep the beds tidy, remove obstacles like ice, puddles and stones, collect fruit baskets, and go treasure hunting. With over 700 levels, daily missions, and catchy soundtrack, it offers endless garden-themed puzzle fun.",
        howToPlay: "Swap adjacent items to create matches of 3 or more of the same type. The bigger the match, the more powerful boosters you unlock. Complete each level’s objective before you run out of moves. Remove obstacles like ice, stones, and weeds by matching items next to them. Complete daily missions and challenges to earn extra coins and special gifts.",
        features: ["Over 700 exciting levels", "Colorful garden theme", "Powerful match boosters", "Daily missions & challenges", "Charming gnome character story"],
        tags: ["Match 3", "Puzzle", "Garden", "Casual", "Relaxing"]
    },
    "Skydom": {
        gameId: "ae10263247c44278b33c845ff1c2df80",
        desc: "A magical PvP match-3 puzzle game. Compete against real players and prove you are the best match-3 master.",
        players: "3.1k",
        rating: "4.6",
        overview: "Skydom is a bright and exciting match-3 puzzle game set in magical floating kingdoms, featuring truly unique competitive game modes. If you have played through thousands of match-3 levels and want something fresh, this game lets you face off against real players from around the world in live matches. Show off your strategy and skill against opponents or connect with friends for friendly competition across hundreds of levels with unique settings, gorgeous effects, and unexpected gameplay twists.",
        howToPlay: "Swap adjacent gems to create matches of 3 or more of the same color. Create bigger matches to charge powerful boosters. In PvP mode, race against your opponent to score more points before the timer runs out. Use boosters strategically to gain an edge over your rival. Win matches to climb the leaderboards and unlock new magical kingdoms.",
        features: ["Live PvP match-3 gameplay", "Hundreds of unique levels", "Real-time player competition", "Gorgeous magical effects", "Friend match support"],
        tags: ["Match 3", "Puzzle", "PvP", "Multiplayer", "Fantasy"]
    },
    "Tropical_Merge": {
        gameId: "4eafc18cbceb45ed884f6c5d70df3963",
        desc: "A tropical farm merge adventure. Renovate your island, grow crops, and solve island mysteries.",
        players: "2.3k",
        rating: "4.5",
        overview: "Tropical Merge is a relaxing farm merge adventure set on a beautiful paradise island. Help the locals save their bay while renovating the island and growing your very own tropical farm. Merge plants, buildings, and resources to unlock new items and expand your farm. Go on expeditions to explore other nearby islands and solve even more riddles and mysteries. With charming tropical visuals, a heartwarming story, and endless merge possibilities, it is perfect for players who love casual merge and farm games.",
        howToPlay: "Drag and drop identical items to merge them into better, more valuable objects. Merge three or more of the same item to unlock higher-tier crops, buildings, and decorations. Complete tasks to earn coins and unlock new areas of the island. Go on expeditions to discover rare items and solve island mysteries. Keep merging to build your perfect tropical farm paradise.",
        features: ["Tropical island farm setting", "Relaxing merge mechanics", "Island renovation & customization", "Expedition & mystery content", "Charming casual gameplay"],
        tags: ["Merge", "Casual", "Farm", "Tropical", "Adventure"]
    },
    "Traffic_Jam_3D": {
        gameId: "337302b23b5943d8bcfc501d81d50cdb",
        desc: "A thrilling 3D traffic racing game. Speed through busy streets, complete challenges, and beat the clock.",
        players: "2.7k",
        rating: "4.6",
        overview: "Traffic Jam 3D is an outrageous and thrilling street racing game that puts you behind the wheel in busy urban traffic. Take on a variety of challenges: reach checkpoints on time, score a set number of points within a time limit, drive a specified distance before the clock runs out, and much more. Weave through traffic, overtake other cars, and avoid crashes to keep your speed up. With fast-paced 3D action, multiple game modes, and responsive controls, it delivers endless high-speed excitement.",
        howToPlay: "Use the arrow keys to control your car: up to accelerate, down to brake, and left/right to steer. Weave through traffic and overtake other cars to keep your speed up. Complete each level’s objective before the timer runs out. Avoid crashing into other cars or obstacles, as this will slow you down. Unlock new cars and levels by completing challenges.",
        features: ["Thrilling 3D street racing", "Multiple challenge modes", "Busy urban traffic environments", "Responsive car controls", "Unlockable cars & levels"],
        tags: ["Racing", "Action", "3D", "Traffic", "Single Player"]
    },
    "Jewels_Blitz_5": {
        gameId: "0dd92ae2a7214f289608049167f2ebd4",
        desc: "The legendary Mayan-themed match-3 adventure. Explore ancient temples and solve jewel puzzles.",
        players: "2.9k",
        rating: "4.7",
        overview: "Jewels Blitz 5 is the long-awaited fifth installment of the legendary match-3 series, taking you deep into the mystery of ancient Central American cultures. Explore mysterious Mayan Temples as you match sparkling jewels and try to solve their ancient secrets and mysteries. Enjoy hundreds of carefully designed levels, daily missions, and weekly challenges that keep the gameplay fresh. Earn gold and collect magical items to help you on your journey through the ancient ruins.",
        howToPlay: "Swap adjacent jewels to create matches of 3 or more of the same color. Match 4 or more jewels to create special power jewels with explosive effects. Complete each level’s objective before you run out of moves. Complete daily missions and weekly challenges to earn extra gold and magical items. Use boosters to help you get through the toughest temple levels.",
        features: ["Hundreds of match-3 levels", "Ancient Mayan temple theme", "Daily missions & weekly challenges", "Powerful magical boosters", "Atmospheric puzzle adventure"],
        tags: ["Match 3", "Puzzle", "Mayan", "Adventure", "Jewel"]
    },
    "Jewels_Blitz_6": {
        gameId: "bbd9c393a8b14f50aa19715f33ea50dc",
        desc: "The sixth chapter of the iconic jewel match-3 series. Uncover deeper secrets of ancient Mayan temples.",
        players: "3.0k",
        rating: "4.8",
        overview: "Jewels Blitz 6 continues the legendary match-3 saga with even more levels, new mechanics, and deeper mysteries of ancient Central American cultures. Journey further into the Mayan Temples, solve more complex jewel puzzles, and uncover long-lost secrets hidden deep within the ruins. The game features hundreds of brand-new levels, updated daily missions, fresh weekly challenges, and new magical items to collect. With improved visuals, smoother animations, and balanced difficulty, it is the best entry in the series yet.",
        howToPlay: "Swap adjacent jewels to line up matches of 3 or more identical gems. Create larger matches to unlock powerful special jewels with unique effects. Complete each level’s goal before you run out of moves. Take part in daily missions and limited-time weekly challenges to earn exclusive rewards. Use your collected magical items strategically to beat the hardest levels.",
        features: ["All-new match-3 levels", "Deeper Mayan temple lore", "Updated daily & weekly content", "New magical power-ups", "Polished visuals & animations"],
        tags: ["Match 3", "Puzzle", "Mayan", "Adventure", "Jewel"]
    },
    "Match_Arena": {
        gameId: "15e07594984f413f9b578afe16778eb9",
        desc: "The world’s first real-time PvP match-3 game. Climb to the Golden League and prove your match-3 skill.",
        players: "3.3k",
        rating: "4.7",
        overview: "Match Arena is the world’s first match-3 game where you compete against real players in real-time. Step into the arena and test your strategy and skill against live opponents, or connect with friends for friendly match-3 action across hundreds of levels with unique settings, gorgeous effects, and unexpected gameplay twists. Play and climb your way up to the prestigious Golden League by completing exciting challenges on your journey, accompanied by the cutest piggy-magic companion.",
        howToPlay: "Swap tiles to create matches of 3 or more in real-time competition against another player. Score more points than your opponent before the timer runs out to win the match. Create powerful combo matches to gain a big score advantage. Win matches to earn trophies and climb through the leagues. Complete challenges to unlock new levels and rewards.",
        features: ["Real-time PvP match-3", "Hundreds of competitive levels", "League ranking system", "Friend match support", "Charming piggy-magic theme"],
        tags: ["Match 3", "Puzzle", "PvP", "Multiplayer", "Competitive"]
    },
    "Hexa_Stack": {
        gameId: "ac3276e1819644858f0c8693c219064c",
        desc: "A relaxing yet challenging hexagon puzzle game. Sort tiles, stack smart, and create powerful combos.",
        players: "1.7k",
        rating: "4.5",
        overview: "Hexa Stack is an all-new hexagon puzzle game that is equal parts relaxing and challenging. Sort colorful hexagonal tiles by color, stack them strategically to create powerful combos, and think ahead before the board fills up. Each level adds new twists and mechanics that require focus, memory, and clever planning. If you get stuck, you can use boosters like swap and shuffle to keep your run going. With simple controls, satisfying merge effects, and endless brain-teasing fun, it is perfect for casual puzzle fans.",
        howToPlay: "Tap to place incoming hex tiles onto the board. Stack tiles of the same color together to clear them and earn points. Create larger stacks to trigger powerful combos and earn bonus points. Plan your placements carefully to avoid filling up the board. Use boosters like swap and shuffle to rearrange tiles when you get stuck. Keep clearing tiles to keep the game going and beat your high score.",
        features: ["Unique hexagon puzzle gameplay", "Strategic stacking mechanics", "Multiple difficulty twists", "Useful in-game boosters", "Simple controls, satisfying feedback"],
        tags: ["Puzzle", "Hexagon", "Casual", "Relaxing", "Brain Teaser"]
    },
    "Mahjong_Match": {
        gameId: "fe22c2e8ce44494cbde70fa8b30105d2",
        desc: "A fresh take on mahjong puzzles. Match three mahjong tiles of the same color to clear the board.",
        players: "1.9k",
        rating: "4.5",
        overview: "Mahjong Match offers a fresh twist on classic mahjong gameplay, combining traditional tile visuals with modern match-3 mechanics. Immerse yourself in brain-teasing levels, each waiting for your strategic mahjong-matching touch. Your objective is to match three mahjong tiles of the same color to clear them from the board puzzle. With every level presenting a new arrangement of mahjong tiles and fresh challenges, the excitement and puzzle fun never fade for casual and dedicated players alike.",
        howToPlay: "Tap to select mahjong tiles and add them to your matching slot. When you collect three tiles of the same color, they will automatically clear from the board. Clear all tiles from the level to complete it. Plan your selections carefully to avoid filling up your slot with mismatched tiles. The fewer moves you use, the higher your final score will be.",
        features: ["Fresh mahjong match-3 twist", "Dozens of puzzle levels", "Traditional mahjong tile art", "Strategic matching gameplay", "Brain-teasing casual fun"],
        tags: ["Puzzle", "Mahjong", "Match 3", "Traditional", "Brain Teaser"]
    },
    "Arrow_Escape": {
        gameId: "abda34d396174f6487968885157388e2",
        desc: "A fast-paced strategic arrow puzzle game. Clear arrow blocks and solve intense escape challenges.",
        players: "1.5k",
        rating: "4.4",
        overview: "Arrow Escape is an addictive arrow puzzle escape game built for players who love logic puzzles and intense puzzle escape moments. The board is filled with arrow blocks that only move in the direction they point. Your goal is to strategically tap and remove arrows one by one to clear the entire board without getting stuck. With fast-paced gameplay, increasing difficulty across levels, and satisfying chain reactions, it delivers tense and rewarding puzzle fun.",
        howToPlay: "Tap on an arrow block to remove it from the grid. Arrows can only exit the board in the direction they are pointing. Plan your order of removal carefully to avoid blocking other arrows. Clear all arrow blocks from the board to complete the level. Work quickly to earn a higher score, but take time to think so you do not get stuck with no valid moves.",
        features: ["Fast-paced arrow puzzle mechanics", "Dozens of challenging levels", "Strategic logical thinking", "Satisfying chain reactions", "Increasing difficulty curve"],
        tags: ["Puzzle", "Logic", "Arrow", "Escape", "Single Player"]
    },
    "Fruit_Sort_Logic": {
        gameId: "54794eb4734d4c0cb480bc876a5851cf",
        desc: "A fun relaxing fruit sorting puzzle. Match juice bottles on shelves and clear all levels.",
        players: "1.6k",
        rating: "4.5",
        overview: "Fruit Sort Logic is a fun and relaxing puzzle game where you sort colorful fruit juice bottles on shelves. Move the juices around and match three of the same kind to clear a shelf and earn points. Shelf space is limited, so every move matters and requires careful planning. Clear all shelves to finish the level and unlock new ones. With smooth intuitive controls, bright cheerful visuals, and endless levels, the game is easy to play and satisfying to master.",
        howToPlay: "Tap on a shelf to pick up a juice bottle, then tap another shelf to place it down. Group three juice bottles of the same fruit type on the same shelf to clear them. You can only move the top bottle on each shelf. Plan your moves carefully to avoid getting stuck with no space left. Clear all shelves to complete the level and unlock new, more challenging puzzles.",
        features: ["Relaxing fruit sorting gameplay", "Bright cheerful visuals", "Endless puzzle levels", "Simple intuitive controls", "Perfect for calm casual play"],
        tags: ["Puzzle", "Sorting", "Casual", "Fruit", "Relaxing"]
    },
    "Cooking_Empire": {
        gameId: "63e4110fb71d4588a8f4b6081fea5bdb",
        desc: "A fast-paced cooking restaurant game. Fry, boil, bake dishes from around the world and build your cooking empire.",
        players: "2.5k",
        rating: "4.6",
        overview: "Cooking Empire is not just a cooking game — it is a real explosion of flavors and speed! Start frying, boiling, baking and serving delicious dishes from all over the world with simple one-click controls. Serve hungry customers quickly to earn coins, then upgrade your kitchen and unlock new recipes and restaurants. With fast-paced time management gameplay, a huge variety of recipes, and endless restaurant upgrades, you will work your way from a small cook to a chef the whole world remembers.",
        howToPlay: "Tap on ingredients and cooking stations to prepare each dish according to the customer’s order. Serve the finished meal to the customer before they lose patience and leave. Earn coins for every successful order you serve. Use your coins to upgrade your kitchen equipment, unlock new recipes, and open new restaurant locations. Keep customers happy to earn bigger tips and grow your empire.",
        features: ["Fast-paced cooking action", "Dishes from around the world", "Kitchen upgrade system", "Multiple restaurant locations", "Addictive time management gameplay"],
        tags: ["Casual", "Cooking", "Time Management", "Simulation", "Restaurant"]
    },
    "Coffee_Color_Blocks": {
        gameId: "0904d5fb5d0044fe9fddf1cd5834cff2",
        desc: "A bright relaxing color puzzle game. Guide colored shapes to matching gates and fill every coffee cup.",
        players: "1.4k",
        rating: "4.4",
        overview: "Coffee Color Blocks is a bright and relaxing puzzle game with a cozy coffee shop theme. Move colored shapes around the board and guide them to gates of the matching color. Each correct connection fills the coffee cups inside the shape — your ultimate goal is to fill the entire figure without blocking the path. With clever level design, smooth satisfying animations, and a calming color palette, it is the perfect casual puzzle for a quick, relaxing break.",
        howToPlay: "Drag colored shapes around the game board to move them. Guide each shape to the gate that matches its color to fill the coffee cups inside. Plan your moves carefully so that shapes do not block each other’s paths. Fill all coffee cups in every shape to complete the level. Each new level introduces more shapes and trickier layouts to solve.",
        features: ["Cozy coffee shop theme", "Color-matching puzzle mechanics", "Clever level designs", "Smooth satisfying animations", "Relaxing casual gameplay"],
        tags: ["Puzzle", "Color Matching", "Casual", "Relaxing", "Coffee"]
    },
    "Hidden_Objects_Island_Secrets": {
        gameId: "7ffd63337f514fd1bb16fa54f15d1f68",
        desc: "A thrilling hidden object adventure. Search a mysterious island and uncover ancient time-bending secrets.",
        players: "1.8k",
        rating: "4.6",
        overview: "Hidden Objects: Island Secrets is an exciting hidden object game where magic and time intertwine in a thrilling adventure. Everything changed when a mysterious magical crystal activated, scattering lost objects across different time periods. You will enter a world full of riddles, hidden objects, and temporal paradoxes as you explore the island. Search detailed scenes, solve puzzles, and uncover the island’s ancient secrets across hours of immersive hidden object gameplay.",
        howToPlay: "Search each detailed scene for the hidden items listed at the bottom of the screen. Tap on an item when you find it to collect it. Collect all items in the list to complete the scene and advance the story. Use hints if you get stuck and cannot find an item. Solve bonus puzzles to unlock new scenes and learn more about the island’s mysterious secrets.",
        features: ["Dozens of detailed scenes", "Hundreds of hidden objects", "Mystery time-travel story", "Bonus puzzle challenges", "Hint system for tough finds"],
        tags: ["Puzzle", "Hidden Object", "Adventure", "Mystery", "Single Player"]
    },
    "Bubble_Shooter_Crystal_Hunt": {
        gameId: "11abb92c950f4b29a60b36037fde6951",
        desc: "An endless bubble shooter adventure. Pop bubbles, collect magical crystals, and beat the advancing wall.",
        players: "2.1k",
        rating: "4.5",
        overview: "Bubble Shooter Crystal Hunt is an exciting endless bubble-shooting puzzle game where players must collect specific target bubbles along with rare magical crystals hidden among the bubbles. Aim carefully and match three or more bubbles of the same color to clear space while the bubble wall slowly moves toward the border line, increasing tension with every shot. Crystals are hidden within bubble clusters and must also be collected to progress and boost your score. With endless levels and increasing difficulty, it offers addictive bubble-popping fun.",
        howToPlay: "Aim your bubble shooter and tap to fire a bubble. Match 3 or more bubbles of the same color to pop them and clear space. Collect the magical crystals hidden in bubble clusters to increase your score and progress. The bubble wall will slowly move down toward you — do not let it cross the border line, or the game will end. Use special power bubbles to clear large sections and collect crystals faster.",
        features: ["Endless bubble shooter gameplay", "Magical crystal collection", "Slowly advancing bubble wall", "Special power-up bubbles", "Increasing difficulty tension"],
        tags: ["Puzzle", "Bubble Shooter", "Endless", "Crystal", "Casual"]
    },
    "Farm_Blast": {
        gameId: "8e9f68b6765f4c39a4c243c4dc6a4ec5",
        desc: "A vibrant farm-themed blast puzzle game. Complete objectives, unlock boosters, and play hundreds of levels.",
        players: "2.0k",
        rating: "4.5",
        overview: "Farm Blast is a colorful level-based blast puzzle game set on a bright and vibrant farm. Complete exciting level objectives, overcome tricky obstacles, and unlock powerful boosters as you progress through hundreds of engaging levels. With bright cheerful visuals, satisfying chain reaction effects, and strategic gameplay, this addictive casual puzzle game is perfect for fans of match-3 games, farm games, and relaxing yet challenging brain teasers of all kinds.",
        howToPlay: "Tap on groups of 2 or more adjacent farm items of the same type to blast them and earn points. Create bigger groups to trigger powerful boosters and chain reactions. Complete each level’s specific objective before you run out of taps. Unlock new boosters and power-ups as you progress through the game. Use your boosters strategically to beat the most challenging farm levels.",
        features: ["Hundreds of puzzle levels", "Vibrant farm theme", "Satisfying chain blast effects", "Powerful in-game boosters", "Relaxing yet strategic gameplay"],
        tags: ["Puzzle", "Blast", "Farm", "Casual", "Match 3"]
    },
    "Obby_Football_Soccer_3D": {
        gameId: "7c03475573ec4a31b3926cc32b29bff1",
        desc: "A fun 3D football game with obby challenges. Score goals, play with friends, and become a champion.",
        players: "2.2k",
        rating: "4.6",
        overview: "Obby Football Soccer 3D is a fun online football game where you can play with friends or random opponents from around the world. Take part in exciting penalty shootouts and full matches, score amazing goals, make incredible saves, and become your team’s hero. Train your reaction and speed by completing fun obby obstacle courses between matches. With colorful 3D graphics, a real stadium atmosphere, and progression from rookie to champion, it delivers great football fun for all players.",
        howToPlay: "Use the arrow keys to move your player across the pitch. Press the spacebar to kick the ball or make a save. In match mode, work to score more goals than your opponent before time runs out. In obby mode, jump over obstacles and complete the course as fast as possible to train your skills. Win matches to climb the ranks and unlock new gear and stadiums.",
        features: ["Online football matches", "Penalty shootout mode", "Fun obby training courses", "Colorful 3D stadium graphics", "Rookie to champion progression"],
        tags: ["Sports", "Football", "3D", "Multiplayer", "Obby"]
    },
    "Easter_Mahjong_Deluxe": {
        gameId: "0056b0eab7c141aaaf8d7a5a76c02558",
        desc: "A festive Easter-themed mahjong game. Match holiday tiles, beat the clock, and earn bonus points.",
        players: "1.7k",
        rating: "4.4",
        overview: "Easter Mahjong Deluxe is a festive holiday take on the classic mahjong connect game, featuring cheerful Easter-themed tiles and decorations. You can eliminate pairs of similar holiday items, but you can only select pairs which have either the left or right side open. Use hints to help you when you get stuck. Race against the clock to clear the board, and unused hints plus saved time will be awarded as bonus points at the end of each level for a higher final score.",
        howToPlay: "Tap on two identical Easter-themed tiles to connect and remove them. You can only select tiles that have at least one free side with no tile next to it. Clear all tiles from the board before the timer runs out to complete the level. Use your available hints if you cannot find a matching pair. Unused hints and remaining time will be converted into bonus points to boost your final score.",
        features: ["Festive Easter theme", "Classic mahjong connect rules", "Countdown timer challenge", "Hint system with bonus rewards", "Cheerful holiday visuals"],
        tags: ["Puzzle", "Mahjong", "Easter", "Holiday", "Timed"]
    },
    "Steal_Brainrot_Eggs": {
    gameId: "e07da43b39e443738d6a84a4a6255c32",
    desc: "A competitive action game for 1 or 2 players. Hatch brainrot characters, defend your base, and steal from rivals.",
    players: "2.8k",
    rating: "4.6",
    overview: "Steal Brainrot Eggs is a chaotic competitive action game playable in both 1 Player and 2 Player modes. Players buy eggs from a central conveyor belt, carry them back to their base, and hatch random brainrot characters of varying rarity. Hatched characters generate coins over time, granting access to higher-tier eggs with more valuable rewards. You can defend your own base from thieves, or sneak into your rival's base to steal their eggs and characters. With character customization, evolving pets, and timed map events, it delivers endless competitive fun.",
    howToPlay: "Move your character to the central conveyor to purchase eggs, then carry them back to your base to hatch. Collect coins generated by your characters to unlock rarer eggs and upgrades. In 2-player mode, sneak into your opponent's base to steal their eggs and characters, while defending your own base from raids. Complete timed events across the map to earn exclusive rewards and build the strongest brainrot collection.",
    features: ["1 Player & 2 Player competitive modes", "Multiple egg rarities & character hatches", "Base defense & stealing mechanics", "Character customization & pet evolution", "Timed map events & rewards"],
    tags: ["Action", "Competitive", "2 Player", "Casual", "Strategy"]
},
"Tap_3D_Blocks": {
    gameId: "2c50bfeecb6c4849b504cfe446bf844e",
    desc: "A layered 3D block puzzle. Flip, rotate and reveal tiles to clear the stacked board.",
    players: "1.6k",
    rating: "4.5",
    overview: "Tap 3D Blocks presents layers upon layers of stacked dice blocks waiting for your skillful touch. Unlike flat puzzle games, this one dares you to see the whole picture from every angle. Flip, rotate and reveal new tiles as you uncover unexpected paths through the 3D stack. Boosters lend a hand when you get stuck, but the core strategy is all yours. With increasing difficulty and immersive 3D visuals, it tests your spatial awareness and delivers satisfying puzzle-solving fun.",
    howToPlay: "Tap on visible tiles to remove them from the stack, unlocking layers underneath. Swipe to rotate the entire block pile and view it from different angles to find matchable tiles. Use boosters like hints and shuffle when you get stuck. Clear all blocks from the board to complete the level. Try to finish with as few moves as possible to earn a higher score.",
    features: ["Immersive 3D stacked blocks", "Full rotation & angle control", "Dozens of challenging levels", "Helpful in-game boosters", "Spatial thinking puzzle gameplay"],
    tags: ["Puzzle", "3D", "Block", "Single Player", "Brain Teaser"]
},
"My_Arcade_Center_2": {
    gameId: "54aca2f7503041c0bd97e74d7e316a67",
    desc: "A fast-paced arcade management tycoon game. Build, upgrade and expand your arcade empire.",
    players: "2.4k",
    rating: "4.7",
    overview: "My Arcade Center 2 is a fast-paced arcade management tycoon game with deep business simulation mechanics. Build, customize, and expand your very own arcade across 7 unique maps. Earn revenue from customers during the day, then spend your earnings on upgrades at night: unlock new arcade machines, hire staff, and optimize your floor layout to maximize profits. Switch between centers anytime, unlock new characters and skins, complete daily missions, and grow your business with rewarding long-term progression.",
    howToPlay: "Purchase arcade machines and place them around your hall to attract customers and earn coins. Reinvest your earnings to unlock new machines, upgrade facilities, and hire staff to improve efficiency. Complete daily missions for bonus rewards. Unlock new maps to open more arcade branches, and switch between them anytime to manage your empire. Keep optimizing your layout and upgrades to build the biggest arcade business.",
    features: ["7 unique arcade maps", "Dozens of unlockable arcade machines", "Staff hiring & layout optimization", "Multi-center management system", "Daily missions & permanent upgrades"],
    tags: ["Strategy", "Simulation", "Tycoon", "Management", "Casual"]
}

    
};

// ============================================
// New Game Template (copy and modify)
// ============================================
/*
["Game_Name_Here", "/games/game-name-here/", "", "", "thumbnail-url", "Desktop iPadOld iPadNew iPhone AndroidLow AndroidMid AndroidHigh", "Category New Landscape", "2026-06-13", 90, 87, 84, 80, "game-id-here"],

"Game_Name_Here": { 
    gameId: "game-id-here",
    desc: "Short description for homepage card", 
    players: "1.5k", 
    rating: "4.5",
    overview: "Full detailed description, around 120-180 words",
    howToPlay: "Gameplay instruction text",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    tags: ["Tag 1", "Tag 2", "Tag 3"]
}
*/