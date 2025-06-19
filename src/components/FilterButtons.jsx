// src/components/FilterButtons.jsx
import { AnimatePresence, motion } from "framer-motion";
import {
  Droplets, Flame, Home, Handshake, UserX, HardHat, CloudLightning,
  PenTool, Wrench, Boxes, ClipboardList, Camera, Radar, CalendarClock,
  PackageSearch, Database, Ruler, CircuitBoard,
} from "lucide-react";

// These are from your version 17 of FilterButtons.jsx
// Ensure these are EXACTLY as you need them.
export const ICONS = {
  Water: Droplets,
  Fire: Flame,
  "General Property Damage": Home,
  "Third Party – Property Damage": Handshake,
  "Third Party - Bodily Injury": UserX,
  "Worker Injury/Safety": HardHat,
  "Natural Catastrophes": CloudLightning,
  "Design Error": PenTool,
  "Structural Integrity/Faulty Workmanship": Wrench,
  "Supply Chain Intelligence & Counter Party Risk": Boxes, // Uses '&'
  "Project Management Technology": ClipboardList,
  "Reality Capture": Camera,
  "External Event Monitoring": Radar,
  "Scheduling Analytics": CalendarClock,
  "Pre-Construction Technologies": Ruler,
  RMIS: Database,
  "Project IoT Backbone": CircuitBoard,
};

export const TECH_CATEGORIES = [
  "Water", "Fire", "Natural Catastrophes", "Third Party – Property Damage",
  "Structural Integrity/Faulty Workmanship",
  "Supply Chain Intelligence & Counter Party Risk", // Uses '&'
  "Worker Injury/Safety", "Design Error", "General Property Damage",
];

export const DIGITAL_CATEGORIES = [
  "Project Management Technology", "Reality Capture", "External Event Monitoring",
  "Project IoT Backbone",
  // "Scheduling Analytics", // This was commented out in your v17
  "Supply Chain Intelligence & Counter Party Risk", // Uses '&'
  "Pre-Construction Technologies",
];

export default function FilterButtons({
  categoryType,
  showFilters,
  selected,
  toggleSelection,
}) {
  const currentCategories =
    categoryType === "tech" ? TECH_CATEGORIES : DIGITAL_CATEGORIES;

  // Variants from your v17 FilterButtons.jsx
  const container = {
    hidden: {}, // As per v17
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerDirection: -1,
        staggerChildren: 0.03,
      },
    },
  };

  const chip = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } }, // v17 used 0.2s
    exit: { opacity: 0, y: -5, scale: 0.95, transition: { duration: 0.15 } }, // v17 used 0.15s
  };

  return (
    // This AnimatePresence is from your v17 FilterButtons.jsx
    // It handles the animation of the button group when showFilters changes
    // AND when categoryType changes (due to the key on motion.div)
    <AnimatePresence mode="popLayout" initial={false}>
      {showFilters && (
        <motion.div
          key={categoryType} // This key is crucial for re-animating when tabs switch
          layout
          // Define the transition for the layout animation itself (height change).
          // Match duration and easing of HomePage's layout="position" transition.
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          initial="hidden"
          animate="visible"
          exit="exit" // This will use the 'exit' defined in 'container' variants
          variants={container}
          className="flex flex-wrap gap-3 w-full" // As per v17
          style={{ overflow: "hidden" }} // Clips content as height animates
        >
          {currentCategories.map((label) => {
            const isSelected = selected.has(label);
            const Icon = ICONS[label] || null;
            return (
              <motion.button
                key={label}
                variants={chip}
                layout // As per v17
                onClick={() => toggleSelection(label)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-base border transition-colors
                  ${
                    isSelected
                      ? categoryType === "tech"
                        ? "bg-blue-300 text-black border-blue-400"
                        : "bg-green-300 text-black border-green-400"
                      : "bg-gray-100 text-black border-transparent hover:bg-gray-200"
                  }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {label}
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}