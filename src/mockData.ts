import { Incident } from "./types/incident";

export const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, leading to unfair outcomes for applicants from underrepresented groups. The bias was traced back to training data that overrepresented certain educational backgrounds.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large Language Model provided incorrect safety procedure information to chemical plant operators, potentially leading to dangerous situations. The model confidently asserted incorrect temperature thresholds for certain reactions.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata through clever prompt engineering. While no PII was leaked, the incident revealed structural weaknesses in the system's prompt filtering mechanisms.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
  {
    id: 4,
    title: "Autonomous Vehicle Misclassification",
    description: "Self-driving car system temporarily misclassified a stopped emergency vehicle as a large advertisement due to unusual lighting conditions, causing it to not slow down appropriately.",
    severity: "High",
    reported_at: "2025-04-05T08:45:00Z",
  },
  {
    id: 5,
    title: "Facial Recognition False Positive",
    description: "Airport security system flagged multiple innocent travelers as persons of interest due to subtle similarities in facial features. This caused unnecessary delays and distress.",
    severity: "Medium",
    reported_at: "2025-03-28T16:20:00Z",
  },
];