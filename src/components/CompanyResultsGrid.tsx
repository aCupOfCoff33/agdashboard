// src/components/CompanyResultsGrid.tsx
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click"; // Ensure path is correct
import { cn } from "../utils"; // Ensure path is correct
import { Company } from '../types'; // We'll define this type

// Define the Company type based on your companyData.js structure
// You can expand this in src/types.ts or src/types/index.ts
// For now, a minimal version:
/*
// Example: Create src/types.ts
export interface Company {
  id: number;
  name: string;
  subheading: string;
  logo: string;
  categoryId: number;
  details: {
    overview: string;
    regions?: string[];
    risksTreatedWeb?: string[];
    costModel?: { type: string; description: string };
    keySolutions?: Array<{ title: string; description: string }>;
    customerSuccessStories?: Array<{ title: string; description: string; imageURL?: string }>;
    impactMetrics?: Array<{ metricName: string; value: string }>;
    aboutCompanyText?: string;
    // ... add other fields from companyData.js details as needed
  };
}
*/


// Define the internal Card interface expected by the original demo
interface AppCard {
  id: string; // Use company.id
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink?: string; // Make optional or provide a default
  content: () => React.ReactNode;
}

// Helper to transform Company to AppCard
const transformCompanyToAppCard = (company: Company): AppCard => {
  return {
    id: String(company.id),
    title: company.name,
    description: company.subheading,
    src: company.logo || 'https://via.placeholder.com/400x300.png?text=' + encodeURIComponent(company.name),
    ctaText: "View Website", // You can customize this
    ctaLink: company.details?.aboutCompanyText ? "#" : undefined, // Placeholder, or link to company.details.website if available
    content: () => (
      <div className="text-sm">
        <h4 className="font-semibold mt-2 mb-1">Overview</h4>
        <p className="mb-3">{company.details?.overview || "No overview available."}</p>

        {company.details?.keySolutions && company.details.keySolutions.length > 0 && (
          <>
            <h4 className="font-semibold mt-2 mb-1">Key Solutions</h4>
            <ul className="list-disc pl-5 mb-3">
              {company.details.keySolutions.map((solution, idx) => (
                <li key={idx}>
                  <strong>{solution.title}:</strong> {solution.description}
                </li>
              ))}
            </ul>
          </>
        )}

        {company.details?.regions && company.details.regions.length > 0 && (
          <p className="mb-2">
            <strong>Regions:</strong> {company.details.regions.join(", ")}
          </p>
        )}

        {company.details?.costModel && (
           <p className="mb-2">
            <strong>Cost Model:</strong> {company.details.costModel.type} - {company.details.costModel.description}
          </p>
        )}

        {company.details?.impactMetrics && company.details.impactMetrics.length > 0 && (
          <>
            <h4 className="font-semibold mt-2 mb-1">Impact Metrics</h4>
             <ul className="list-disc pl-5 mb-3">
              {company.details.impactMetrics.map((metric, idx) => (
                <li key={idx}>
                  <strong>{metric.metricName}:</strong> {metric.value}
                </li>
              ))}
            </ul>
          </>
        )}
        {/* Add more details as needed */}
      </div>
    ),
  };
};

interface CompanyResultsGridProps {
  companies: Company[]; // Expect an array of Company objects
}

export default function CompanyResultsGrid({ companies }: CompanyResultsGridProps) {
  const [active, setActive] = useState<AppCard | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const uniqueId = useId(); // Renamed to avoid conflict with company.id

  const appCards: AppCard[] = companies.map(transformCompanyToAppCard);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  if (companies.length === 0) {
    return <div className="py-10 text-center text-gray-500">No companies match your search.</div>;
  }

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4"> {/* Added padding for smaller screens */}
            <motion.button
              key={`button-${active.title}-${uniqueId}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-20" // Increased size slightly
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${uniqueId}`} // Use active.id which is company.id
              ref={ref}
              className="w-full max-w-lg h-full md:h-auto md:max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-2xl overflow-hidden shadow-2xl" // Enhanced shadow
            >
              <motion.div layoutId={`image-${active.id}-${uniqueId}`} className="w-full h-48 md:h-64  bg-gray-100">
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-contain sm:rounded-t-2xl p-4" // Use object-contain for logos
                />
              </motion.div>

              <div className="flex flex-col flex-grow p-6 overflow-y-auto"> {/* Added flex-grow and overflow-y-auto */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.id}-${uniqueId}`}
                      className="font-semibold text-xl text-neutral-800 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}-${uniqueId}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  {active.ctaLink && (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-bold bg-primary-600 text-white rounded-full whitespace-nowrap hover:bg-primary-700 transition-colors"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-700 dark:text-neutral-300 text-sm flex-grow 
                               [scrollbar-width:thin] [scrollbar-color:#888_#f1f1f1] 
                               dark:[scrollbar-color:#555_#333]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
        {appCards.map((card) => (
          <motion.li // Changed div to li for semantic correctness
            layoutId={`card-${card.id}-${uniqueId}`}
            key={`card-item-${card.id}-${uniqueId}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            style={{ minHeight: '250px' }} // Ensure cards have some min height
          >
            <div className="flex flex-col items-center text-center flex-grow">
              <motion.div layoutId={`image-${card.id}-${uniqueId}`} className="w-full h-32 mb-4 bg-gray-50 rounded-md flex items-center justify-center p-2">
                <img
                  src={card.src}
                  alt={card.title}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
              <div className="flex flex-col items-center justify-center flex-grow">
                <motion.h3
                  layoutId={`title-${card.id}-${uniqueId}`}
                  className="font-semibold text-md text-neutral-800 dark:text-neutral-200 mb-1"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.id}-${uniqueId}`}
                  className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

// Make sure the CloseIcon is defined or imported
// If it's from the same file, ensure it's exported or defined above.
// For simplicity, let's include it here.
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// The Company type is imported from '../types'.
// If you need to modify it, do so in the src/types.ts file.
/*
interface Company {
  id: number | string;
  name: string;
  subheading: string;
  logo: string;
  details?: { // Make details optional or ensure it always exists
    overview?: string;
    regions?: string[];
    risksTreatedWeb?: string[];
    costModel?: { type: string; description: string };
    keySolutions?: Array<{ title: string; description: string }>;
    customerSuccessStories?: Array<{ title: string; description: string; imageURL?: string }>;
    impactMetrics?: Array<{ metricName: string; value: string }>;
    aboutCompanyText?: string;
    // ... add other fields from companyData.js details as needed
  };
}
*/