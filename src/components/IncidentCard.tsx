import { useState } from "react";
import { Incident } from "../types/incident";
import { formatDate } from "../utils/helpers";
import { SeverityBadge } from "./SeverityBadge";
import { motion } from "framer-motion";

interface IncidentCardProps {
  incident: Incident;
  onDelete: (id: number) => void;
}

export const IncidentCard = ({ incident, onDelete }: IncidentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {incident.title}
            </h3>
            <div className="mt-1 flex items-center space-x-2">
              <SeverityBadge severity={incident.severity} />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(incident.reported_at)}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              {isExpanded ? "Hide Details" : "View Details"}
            </button>
            <button
              onClick={() => onDelete(incident.id)}
              className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
            >
              Delete
            </button>
          </div>
        </div>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3"
          >
            <p className="text-gray-700 dark:text-gray-300">{incident.description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};