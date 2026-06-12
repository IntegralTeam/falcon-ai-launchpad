/** LearnWorlds LMS base URL (no trailing slash). Override via VITE_LEARNWORLDS_BASE_URL in .env */
const learnWorldsBaseUrl = (
  import.meta.env.VITE_LEARNWORLDS_BASE_URL || "https://falcon.academy"
).replace(/\/$/, "");

/** All courses catalog */
export const learnWorldsCoursesUrl = `${learnWorldsBaseUrl}/courses`;

/** Course 01 — AI Fundamentals for Business Decision-Makers */
export const learnWorldsAiFundamentalsUrl =
  `${learnWorldsBaseUrl}/course/ai-fundamentals-for-business-decision-makers`;
