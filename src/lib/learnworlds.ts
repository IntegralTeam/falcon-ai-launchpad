/** LearnWorlds LMS base URL (no trailing slash). Override via VITE_LEARNWORLDS_BASE_URL in .env */
const learnWorldsBaseUrl = (
  import.meta.env.VITE_LEARNWORLDS_BASE_URL || "https://learn.falcon.academy"
).replace(/\/$/, "");

/** All courses catalog */
export const learnWorldsCoursesUrl = `${learnWorldsBaseUrl}/courses`;

/** Individual course pages */
export const learnWorldsCourseUrls = {
  aiFundamentals: `${learnWorldsBaseUrl}/course/ai-fundamentals-for-business-decision-makers`,
  aiTools: `${learnWorldsBaseUrl}/course/ai-tools-practical-cases`,
  aiAgents: `${learnWorldsBaseUrl}/course/ai-agents-automation-design-a-safe-humansupervised-pilot`,
  aiStrategy: `${learnWorldsBaseUrl}/course/ai-strategy-governance-implementation`,
} as const;

/** Course 01 — AI Fundamentals for Business Decision-Makers */
export const learnWorldsAiFundamentalsUrl = learnWorldsCourseUrls.aiFundamentals;
