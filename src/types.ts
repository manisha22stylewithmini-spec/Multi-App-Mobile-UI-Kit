export type AppCategory = 'all' | 'education' | 'finance' | 'social' | 'gamification' | 'health' | 'subscription';

export interface ScreenData {
  id: number;
  screen_name: string;
  app_type: AppCategory;
  color_accent: string;
  description: string;
  bg?: string;
}

export interface GlobalUIState {
  activeScreenId: number;
  viewMode: 'single' | 'gallery' | 'flow';
  selectedCategory: AppCategory;
  searchQuery: string;
  deviceColor: 'titanium' | 'midnight' | 'starlight' | 'coral';
  soundEnabled: boolean;
  theme: 'light' | 'dark';
}

export const SCREENS_LIST: ScreenData[] = [
  {
    id: 1,
    screen_name: "Language Learning App",
    app_type: "education",
    color_accent: "#FF6B35",
    description: "Interactive language lesson launcher with colorful subject grids, gamified progress rings, and rich popular content tabs.",
  },
  {
    id: 2,
    screen_name: "Crypto / Payment Wallet",
    app_type: "finance",
    color_accent: "#FF4D8F",
    description: "Sleek web3 portfolio and fiat balance screen featuring stacked NFT cards, real-time looking line charts, and quick transfer logs.",
  },
  {
    id: 3,
    screen_name: "P2P Payment / Send Money",
    app_type: "finance",
    color_accent: "#FF6B35",
    description: "Playful peer-to-peer payment gateway with bubbly 3D cloud animations, verified security status, and instant action options.",
    bg: "#E0F2FE"
  },
  {
    id: 4,
    screen_name: "Social Invite / Share Screen",
    app_type: "social",
    color_accent: "#FFD700",
    description: "Vibrant community invite view packed with adorable kawaii emoji blobs, customized sharing hooks, and dynamic avatar rings.",
    bg: "#FFFFFF"
  },
  {
    id: 5,
    screen_name: "Streak Completion",
    app_type: "gamification",
    color_accent: "#FFB800",
    description: "Joyful celebration screen featuring comic speech bubbles, confetti micro-interactions, and high-energy motivational badges.",
    bg: "#FFFDE7"
  },
  {
    id: 6,
    screen_name: "Health / Daily Check-in",
    app_type: "health",
    color_accent: "#4CAF50",
    description: "Comprehensive daily biometrics log with an embedded live-rendered Shibuya map, sleep/calorie gauges, and hydration meters.",
  },
  {
    id: 7,
    screen_name: "Budget / Expense Tracker",
    app_type: "finance",
    color_accent: "#7B5EA7",
    description: "Lively financial dashboard adorned with bubbly typography, categorized subscription schedules, and engaging promotional banners.",
  },
  {
    id: 8,
    screen_name: "Premium Subscription",
    app_type: "subscription",
    color_accent: "#FF6B35",
    description: "High-converting premium paywall with sticker showcases, transparent pricing toggles, and feature-rich configuration switches.",
  }
];
