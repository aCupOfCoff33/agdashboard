// File: src/components/ui/expandable-card-demo-grid.tsx
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import type { Company } from "../../types"; // Ensure this type includes matchingActiveFilterLabels if not already
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ICONS } from "../FilterButtons"; // Import ICONS from FilterButtons

// Add matchingActiveFilterLabels to Company type if it's not there
// This is an example, adjust your src/types.ts accordingly
// export interface Company {
//   // ... other company props
//   matchingActiveFilterLabels?: string[];
// }


interface InternalCard {
  id: string;
  description: string;
  title: string;
  src: string;
  employeeCount?: string;
  regions?: string[];
  overview: string;
  originalCompanyData: Company;
  matchingActiveFilterLabels?: string[]; // Added this
}

interface ExpandableCardGridProps {
  // Ensure Company type used here includes matchingActiveFilterLabels
  companies: (Company & { matchingActiveFilterLabels?: string[] })[];
}


const modalFadeAndScaleTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

const fadeTransition = {
  duration: 0.2,
  ease: "easeOut",
};

export default function ExpandableCardGrid({
  companies,
}: ExpandableCardGridProps) {
  const [active, setActive] = useState<InternalCard | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const componentId = useId();
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const handleClose = () => {
    setIsClosing(true);
    setActive(null);
    setTimeout(() => {
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && active && !isClosing) {
        handleClose();
      }
    }
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active, isClosing]);

  useOutsideClick(ref, () => {
    if (active && !isClosing) {
      handleClose();
    }
  });

  const displayCards: InternalCard[] = companies.map((company) => ({
    id: String(company.id ?? Math.random().toString()),
    title: company.name,
    description: company.subheading,
    src: company.logo || "https://via.placeholder.com/150x150.png?text=No+Logo",
    overview: company.details?.aboutCompanyText || company.details?.overview || "",
    employeeCount: company.details?.employeeCount,
    regions: company.details?.regions,
    originalCompanyData: company,
    matchingActiveFilterLabels: company.matchingActiveFilterLabels || [], // Use passed prop
  }));

  if (!displayCards.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No companies match your filters.
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fadeTransition}
            className="fixed inset-0 bg-black/40 h-full w-full z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-50 p-4 overflow-y-auto">
            <motion.button
              key={`button-close-${active.id}-${componentId}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white/90 hover:bg-white rounded-full h-10 w-10 z-[51] shadow-lg"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              key={`modal-${active.id}-${componentId}`}
              ref={ref}
              className="w-full max-w-lg bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh]"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={modalFadeAndScaleTransition}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              {/* Header Section */}
              <div className="p-6 flex items-start border-b border-gray-200">
                <div
                  className="mr-4 flex-shrink-0 bg-gray-50 rounded-lg p-2 flex items-center justify-center"
                  style={{ width: 80, height: 80 }}
                >
                  <img
                    src={active.src}
                    alt={active.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-grow min-w-0">
                  <motion.a
                    href={active.originalCompanyData.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline group no-underline"
                    initial="rest"
                    whileHover="hovered"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-slate-700 group-hover:underline transition-colors duration-200">
                      {active.title}
                    </h3>
                    <motion.div
                      className="ml-1.5"
                      variants={{
                        rest: { x: 0, y: 0, opacity: 0.6 },
                        hovered: { x: 2, y: -2, opacity: 1 },
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <ExternalLink
                        size={18}
                        className="text-gray-600 group-hover:text-slate-700 transition-colors duration-200"
                      />
                    </motion.div>
                  </motion.a>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {active.description}
                  </p>
                  {(active.employeeCount ||
                    (active.regions && active.regions.length > 0)) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      className="mt-3 text-xs text-gray-500 space-y-0.5"
                    >
                      {active.employeeCount && (
                        <p><strong>Employees:</strong> {active.employeeCount}</p>
                      )}
                      {active.regions && active.regions.length > 0 && (
                        <p><strong>Regions:</strong> {active.regions.join(", ")}</p>
                      )}
                    </motion.div>
                  )}
                </div>
                <button
                  className="hidden lg:flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full h-8 w-8 ml-4 flex-shrink-0 transition-colors"
                  onClick={handleClose}
                  aria-label="Close"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6 overflow-y-auto flex-grow">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Overview</h4>
                  <div className="text-sm text-gray-700 leading-relaxed prose prose-sm max-w-none mb-6">
                    {active.overview}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-200 flex justify-center"
                  >
                    <Link
                      to={`/company/${active.originalCompanyData.id}`} // Use originalCompanyData.id for navigation
                      onClick={handleClose} // Close modal when clicking
                      // target="_blank" // Remove if you want it to navigate in the same tab
                      // rel="noopener noreferrer" // Remove if not target="_blank"
                      className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2 -mr-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid View */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-6">
        {displayCards.map((card) => (
          <motion.li
            key={`card-item-${card.id}-${componentId}`}
            onClick={() => !isClosing && setActive(card)}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col overflow-hidden relative" // Added relative
            style={{
              height: 160,
              opacity: active && active.id === card.id ? 0.3 : 1,
              pointerEvents: isClosing ? "none" : "auto",
            }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* --- ICONS DISPLAY --- */}
            {card.matchingActiveFilterLabels && card.matchingActiveFilterLabels.length > 0 && (
              <div className="absolute top-1.5 right-1.5 flex flex-row-reverse space-x-1 space-x-reverse z-10">
                <AnimatePresence>
                  {card.matchingActiveFilterLabels.map((label, index) => {
                    // Check if label is a valid key in ICONS
                    const IconComponent = label in ICONS ? ICONS[label as keyof typeof ICONS] : null;
                    if (!IconComponent) return null;
                    return (
                      <motion.div
                        key={`${label}-${index}`}
                        initial={{ opacity: 0, scale: 0.5, x: 10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.5, x: 10 }}
                        transition={{ duration: 0.20, delay: index * 0.05, ease: "easeOut" }}
                        className="p-1 bg-white/70 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center ring-1 ring-gray-200/50"
                        style={{ width: '26px', height: '26px' }} // Increased size
                        title={label}
                      >
                        <IconComponent className="w-[14px] h-[14px] text-black" /> {/* Bigger, black icon */}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
            {/* --- END ICONS DISPLAY --- */}

            <div className="p-4 flex flex-col items-center text-center flex-grow justify-center">
              <div
                className="mb-3 bg-gray-50 rounded-md p-1 flex items-center justify-center"
                style={{ width: 56, height: 56 }}
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-center items-center min-w-0 w-full">
                <h3
                  className="font-semibold text-sm text-gray-800 text-center leading-tight"
                  style={{
                    display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                    overflow: "hidden", textOverflow: "ellipsis",
                    minHeight: "2.5em", maxHeight: "2.5em", maxWidth: "100%",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-xs text-gray-500 mt-1 text-center leading-tight"
                  style={{
                    display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                    overflow: "hidden", textOverflow: "ellipsis",
                    minHeight: "2.2em", maxHeight: "2.2em", maxWidth: "100%",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: 90 }}
      transition={{ duration: 0.15 }}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-600"
    >
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};