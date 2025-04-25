export type Severity = "Low" | "Medium" | "High";

export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: Severity;
  reported_at: string;
}

export type SortOption = "newest" | "oldest";
export type FilterOption = Severity | "All";