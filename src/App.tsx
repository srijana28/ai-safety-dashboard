import { useState } from "react";
import { Incident, SortOption, FilterOption } from "./types/incident";
import { IncidentCard } from "./components/IncidentCard";
import { IncidentForm } from "./components/IncidentForm";
import { FilterControls } from "./components/FilterControls";
import { filterIncidents, sortIncidents } from "./utils/helpers";
import { initialIncidents } from "./mockData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [incidents, setIncidents] = useLocalStorage<Incident[]>(
    "incidents",
    initialIncidents
  );
  const [filter, setFilter] = useState<FilterOption>("All");
  const [sort, setSort] = useState<SortOption>("newest");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredIncidents = filterIncidents(incidents, filter);
  const sortedIncidents = sortIncidents(filteredIncidents, sort);

  const handleAddIncident = (incident: Omit<Incident, "id">) => {
    const newIncident = {
      ...incident,
      id: Math.max(0, ...incidents.map((i) => i.id)) + 1,
    };
    setIncidents([newIncident, ...incidents]);
    setIsFormOpen(false);
  };

  const handleDeleteIncident = (id: number) => {
    setIncidents(incidents.filter((incident) => incident.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            AI Safety Incident Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor and report safety incidents in AI systems
          </p>
        </motion.div>

        <div className="flex justify-end mb-6">
          {!isFormOpen && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsFormOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Report New Incident
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {isFormOpen && (
            <IncidentForm
              onSubmit={handleAddIncident}
              onCancel={() => setIsFormOpen(false)}
            />
          )}
        </AnimatePresence>

        <FilterControls
          filter={filter}
          sort={sort}
          onFilterChange={setFilter}
          onSortChange={setSort}
        />

        <div className="space-y-4">
          <AnimatePresence>
            {sortedIncidents.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8 text-gray-500 dark:text-gray-400"
              >
                No incidents found matching your criteria.
              </motion.div>
            ) : (
              sortedIncidents.map((incident) => (
                <IncidentCard
                  key={incident.id}
                  incident={incident}
                  onDelete={handleDeleteIncident}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}