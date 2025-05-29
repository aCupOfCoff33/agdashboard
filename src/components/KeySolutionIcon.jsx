import React from 'react';
import { Activity, BarChart3, ShieldAlert, DollarSign, Zap, CheckSquare, Info, Lightbulb } from 'lucide-react'; // Added Lightbulb

export const KeySolutionIcon = ({ title, className = "w-8 h-8 text-sky-600 mb-3" }) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("monitoring") || lowerTitle.includes("tracking")) return <Activity className={className} />;
  if (lowerTitle.includes("analytics") || lowerTitle.includes("insights")) return <BarChart3 className={className} />;
  if (lowerTitle.includes("leak") || lowerTitle.includes("detection") || lowerTitle.includes("alert")) return <ShieldAlert className={className} />;
  if (lowerTitle.includes("cost") || lowerTitle.includes("saving")) return <DollarSign className={className} />;
  if (lowerTitle.includes("efficiency") || lowerTitle.includes("speed") || lowerTitle.includes("rapid")) return <Zap className={className} />;
  if (lowerTitle.includes("safety") || lowerTitle.includes("security") || lowerTitle.includes("compliance")) return <CheckSquare className={className} />;
  if (lowerTitle.includes("solution") || lowerTitle.includes("feature")) return <Lightbulb className={className} />; // Generic for "Key Features"
  return <Info className={className} />;
};
