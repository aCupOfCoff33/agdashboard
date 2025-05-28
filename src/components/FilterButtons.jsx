import { AnimatePresence, motion } from "framer-motion";
import {
  Droplets,
  Flame,
  Home,
  Handshake,
  UserX,
  HardHat,
  CloudLightning,
  PenTool,
  Wrench,
  Boxes,
  ClipboardList,
  Camera,
  Radar,
  CalendarClock,
  PackageSearch,
  Database,
  Ruler,
  CircuitBoard,
} from "lucide-react";

const ICONS = {
  Water: Droplets,
  Fire: Flame,
  "General Property Damage": Home,
  "Third Party – Property Damage": Handshake,
  "Third Party - Bodily Injury": UserX,
  "Worker Injury/Safety": HardHat,
  "Natural Catastrophes": CloudLightning,
  "Design Error": PenTool,
  "Structural Integrity/Faulty Workmanship": Wrench,
  "Supply Chain Intelligence & Counter Party Risk": Boxes,
  "Project Management Technology": ClipboardList,
  "Reality Capture": Camera,
  "External Event Monitoring": Radar,
  "Scheduling Analytics": CalendarClock,
  "Pre-Construction Technologies": Ruler,
  RMIS: Database,
  "Project IoT Backbone": CircuitBoard,
};

export default function FilterButtons({
  categoryType,
  showFilters,
  selected,
  toggleSelection,
}) {
  const TECH_CATEGORIES = [
    "Water",
    "Fire",
    "Natural Catastrophes",
    "Third Party – Property Damage",
    "Structural Integrity/Faulty Workmanship",
    "Supply Chain Intelligence and Counter Party Risk",
    "Worker Injury/Safety",
    "Design Error",
    "General Property Damage",
  ];

  const DIGITAL_CATEGORIES = [
    "Project Management Technology",
    "Reality Capture",
    "External Event Monitoring",
    "Project IoT Backbone",

    //"Scheduling Analytics",
    "Supply Chain Intelligence and Counter Party Risk",
    "Pre-Construction Technologies",
  ];

  const currentCategories =
    categoryType === "tech" ? TECH_CATEGORIES : DIGITAL_CATEGORIES;

  const container = {
    hidden: {},
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
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -5, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {showFilters && (
        <motion.div
          key={categoryType}
          layout
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={container}
          className="flex flex-wrap gap-3 w-full"
        >
          {currentCategories.map((label) => {
            const isSelected = selected.has(label);
            const Icon = ICONS[label] || null;
            return (
              <motion.button
                key={label}
                variants={chip}
                layout
                onClick={() => toggleSelection(label)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-base border transition-colors ${
                  isSelected
                    ? "bg-[#9acff5] text-black border-[#93cdf7]"
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
