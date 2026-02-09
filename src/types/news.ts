// ============================================
// Monza Bit The Web — Core Type Definitions
// ============================================

// News categories matching the topic system
export type NewsCategory =
    | "arts-entertainment"
  | "business"
  | "pop-culture"
  | "crime-law"
  | "politics"
  | "science"
  | "sports"
  | "technology"
  | "world";

// Status of a news story
export type StoryStatus = "active" | "cooling" | "archived";

// Political leaning indicator
export type PoliticalLeaning = "left" | "center-left" | "neutral" | "center-right" | "right";

// Timeframe filter options
export type TimeframeFilter = "now" | "7days" | "30days";

// ============================================
// Core News Node — The central data entity
// ============================================
export interface NewsNode {
    id: string;
    slug: string;                    // URL-friendly identifier (e.g., "vonn-crash")
  title: string;                   // Short trending title (e.g., "Vonn Crash")
  headline: string;                // Full headline
  summary: string;                 // AI-generated summary paragraph
  imageUrl: string;                // Featured image
  categories: NewsCategory[];      // Associated categories
  keywords: string[];              // Top keywords/entities

  // Metrics
  rank: number;                    // Position in trending (1-100)
  viralityScore: number;           // 0-10 score
  articleCount: number;            // Number of related articles found
  duration: string;                // How long it's been trending (e.g., "4D")
  status: StoryStatus;
    politicalLeaning: PoliticalLeaning;

  // AI-Generated Content
  breakdown: BreakdownPoint[];     // Key points of the story
  leftPerspective: PerspectiveAnalysis;
    rightPerspective: PerspectiveAnalysis;
    learningQuestions: string[];     // Further learning FAQ

  // Related Articles
  articles: ExternalArticle[];

  // Timestamps
  firstSeen: string;              // ISO date
  lastUpdated: string;            // ISO date
}

// A key point in the story breakdown
export interface BreakdownPoint {
    id: string;
    text: string;
    importance: "high" | "medium" | "low";
}

// Political perspective analysis
export interface PerspectiveAnalysis {
    summary: string;
    articleCount: number;
    sentiment: "positive" | "negative" | "neutral" | "mixed";
}

// External article from a real source
export interface ExternalArticle {
    id: string;
    source: string;                  // e.g., "THE GUARDIAN", "TMZ"
  title: string;
    url: string;
    imageUrl?: string;
    publishedAt: string;             // ISO date
}

// ============================================
// Dashboard & UI Types
// ============================================

// Trending list item (lightweight version for sidebar)
export interface TrendingItem {
    id: string;
    rank: number;
    title: string;
    slug: string;
    isActive: boolean;
}

// Story stats for the metrics panel
export interface StoryStats {
    status: StoryStatus;
    duration: string;
    viralityScore: number;
    articleCount: number;
    politicalLeaning: PoliticalLeaning;
}

// Search suggestion from AI
export interface SearchSuggestion {
    id: string;
    query: string;
    nodeSlug?: string;               // If linked to a specific node
}

// Category with metadata
export interface CategoryInfo {
    key: NewsCategory;
    label: string;
    slug: string;
    icon?: string;
}

// ============================================
// API Response Types
// ============================================

export interface NewsApiResponse {
    timestamp: string;
    stories: NewsNode[];
    totalCount: number;
}

export interface TrendingApiResponse {
    timestamp: string;
    trending: TrendingItem[];
    lastUpdated: string;
}

// ============================================
// Constants
// ============================================

export const CATEGORIES: CategoryInfo[] = [
  { key: "arts-entertainment", label: "Arts & Entertainment", slug: "artsentertainment" },
  { key: "business", label: "Business", slug: "business" },
  { key: "pop-culture", label: "Pop Culture", slug: "culture" },
  { key: "crime-law", label: "Crime & Law", slug: "law" },
  { key: "politics", label: "Politics", slug: "politics" },
  { key: "science", label: "Science", slug: "science" },
  { key: "sports", label: "Sports", slug: "sports" },
  { key: "technology", label: "Technology", slug: "technology" },
  { key: "world", label: "World", slug: "world" },
  ];

export const STATUS_COLORS: Record<StoryStatus, string> = {
    active: "#4ADE80",
    cooling: "#FBBF24",
    archived: "#8B9DC3",
};

export const LEANING_LABELS: Record<PoliticalLeaning, string> = {
    left: "Left",
    "center-left": "Center-Left",
    neutral: "Neutral",
    "center-right": "Center-Right",
    right: "Right",
};
