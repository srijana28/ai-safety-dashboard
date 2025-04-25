import { Incident, SortOption, FilterOption } from "../types/incident";

export const filterIncidents = (incidents: Incident[], filter: FilterOption): Incident[] => {
  if (filter === "All") return incidents;
  return incidents.filter(incident => incident.severity === filter);
};

export const sortIncidents = (incidents: Incident[], sort: SortOption): Incident[] => {
  return [...incidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sort === "newest" ? dateB - dateA : dateA - dateB;
  });
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};