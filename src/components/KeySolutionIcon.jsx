import React from 'react';
import {
  Activity, BarChart3, ShieldAlert, DollarSign, Zap, CheckSquare, Info, Lightbulb,
  Cpu, Camera, MapPin, HardHat, MessageSquare, Users, Cloud, Droplets,
  FileText, Search, Eye, SlidersHorizontal, Brain, CalendarClock, Building,
  Layers, Truck, Package, Briefcase, GraduationCap, Wind, Thermometer, Flame,
  Globe2, Target, Anchor, Wifi, Scan, ClipboardList, AlertTriangle, Siren,
  Network, Bot, Settings2, Wrench, Map, Lock, UserCheck, EyeOff, ShieldCheck,
  TrendingUp, PieChart, Construction, RotateCw, Building2, RadioTower, Move,
  Bell, Watch, ListChecks, Leaf, LocateFixed, Radar, Signal, CircleDollarSign,
  Percent, Telescope, LandPlot, FileDigit, CloudSun, Route, Warehouse, GitFork,
  Recycle, Ruler, Scale, UserCog, Handshake, Group, Share2, BookOpen, Award,
  Waves, // Added for flood scenarios
  Fingerprint, // For more specific detection/identification
  FileSearch, // Good for document analysis, design review
  ClipboardCheck, // For compliance, audits, or specific checks
  Gauge, // For performance, efficiency metrics
  ShieldQuestion, // For risk assessment, inquiry
  AirVent, // For air quality solutions
  Server, // For platform, backbone, or core systems
  FolderKanban, // For project management, organization
  DraftingCompass, // For pre-construction, design, planning
  Palette, // For visualization, design aspects not covered by Building2
  Webhook, // For integration, API related
  Sparkles // For innovative solutions or AI-enhanced features (alternative to Brain/Bot)
} from 'lucide-react';

// Helper function to create icon mapping
const createIconEntry = (keywords, IconComponent) => ({ keywords, IconComponent });

const iconMappings = [
  // --- TOP TIER: Ultra Specific & High Priority (Aim for unique icons) ---
  createIconEntry(["fire alarm", "wes3 system", "fire detection system"], Siren),
  createIconEntry(["fire", "flame"], Flame),
  createIconEntry(["flood barrier", "water-gate", "inundation control"], Waves),
  createIconEntry(["leak detection", "water leak", "spill detection", "water monitoring"], Droplets), // Alert Labs "Real-time Water Monitoring"
  createIconEntry(["earthquake", "seismic event", "ground motion"], AlertTriangle),
  createIconEntry(["wind mitigation", "aerodynamic control", "wind effects"], Wind),
  createIconEntry(["live dig radar", "ldr excavate", "underground utility radar", "rodradar"], Radar),
  createIconEntry(["360° photo", "360 degree capture", "photogrammetry documentation", "openspace"], RotateCw),
  createIconEntry(["vita load navigator", "vln", "crane lifting intelligence", "intelligent lifting", "load stabilization"], Anchor),
  createIconEntry(["subsurface imaging", "underground mapping", "geotechnical survey", "non-intrusive exploration", "exodigo"], LandPlot),
  createIconEntry(["pdf drawing analysis", "automated design review", "mep clash", "firmus"], FileSearch),
  createIconEntry(["smart badge", "wearable sensor", "iot badge", "location beacon", "trusstor", "kwant"], Watch),
  createIconEntry(["concrete curing", "concrete maturity", "brickeye environmental"], Layers), // Brickeye "Concrete Curing Management"
  createIconEntry(["impairment test", "cognitive assessment", "druid app", "impairment science"], UserCheck),
  createIconEntry(["1form", "subcontractor prequalification", "compass", "bespoke metrics"], FileDigit),
  createIconEntry(["clma", "labor availability", "labor risk", "workforce planning"], Users), // CLMA specific
  createIconEntry(["digital twin", "bim integration", "vdc", "reconstruct", "climatwin"], Building2), // Aren, Reconstruct, ClimaTwin

  // --- AI & AUTOMATION ---
  createIconEntry(["ai-powered", "artificial intelligence", "machine learning", "neural network", "aren ai"], Brain),
  createIconEntry(["automation", "automated process", "robotic system", "intelligent automation"], Bot),

  // --- DATA, ANALYTICS, REPORTING ---
  createIconEntry(["analytics", "data analysis", "data visualization", "usage analytics", "detailed analytics"], BarChart3),
  createIconEntry(["reporting", "business intelligence report", "data report", "progress report"], PieChart),
  createIconEntry(["predictive", "forecasting", "trend identification", "predictive maintenance"], TrendingUp),
  createIconEntry(["insights", "business intelligence platform", "actionable data", "data-driven decision"], Lightbulb),

  // --- MONITORING & DETECTION (General) ---
  createIconEntry(["monitoring", "real-time tracking", "status oversight", "event monitoring", "environmental monitoring"], Activity),
  createIconEntry(["detection", "identification", "issue detection", "pattern recognition", "diagnostics"], Fingerprint),
  createIconEntry(["alert", "notification service", "warning system", "real-time alert"], Bell),

  // --- REALITY CAPTURE & VISUALIZATION (General) ---
  createIconEntry(["reality capture", "visual documentation", "site imaging", "photo documentation"], Camera),
  createIconEntry(["visualization tool", "graphical display", "visual interface", "design visualization"], Palette),
  createIconEntry(["scan", "lidar technology", "laser scanning"], Scan),
  createIconEntry(["map generation", "gis services", "utility mapping"], Map),

  // --- IoT & CONNECTIVITY (General) ---
  createIconEntry(["iot platform", "iot backbone", "connected devices", "sensor network", "latium", "alert labs iot", "brickeye iot"], Cpu),
  createIconEntry(["wireless tech", "rfid solutions"], Wifi),
  createIconEntry(["remote access", "cloud-connectivity", "remote operations"], Cloud),

  // --- CONSTRUCTION & PROJECT LIFECYCLE ---
  createIconEntry(["project management software", "project controls", "construction management tool", "ineight", "safetyculture platform"], FolderKanban),
  createIconEntry(["pre-construction planning", "design phase tool", "constructability analysis"], DraftingCompass),
  createIconEntry(["construction operations", "site management", "field execution support"], HardHat),
  createIconEntry(["asset integrity", "infrastructure lifecycle", "structural analysis"], Building), // Less about digital twin, more about physical asset
  createIconEntry(["scheduling tool", "timeline optimization", "project planning system"], CalendarClock),

  // --- RISK, SAFETY, COMPLIANCE ---
  createIconEntry(["risk management solution", "risk mitigation", "hazard analysis", "vulnerability assessment", "oneconcern resilience", "everstream risk"], ShieldQuestion),
  createIconEntry(["safety program", "worker protection", "hse compliance", "ehs system", "injury reduction", "safetyculture safety"], ShieldCheck),
  createIconEntry(["compliance management", "regulatory tool", "standard adherence", "governance platform", "audit tool"], ClipboardCheck),

  // --- FINANCIAL & EFFICIENCY ---
  createIconEntry(["cost savings", "budget reduction", "financial optimization", "economic benefit"], CircleDollarSign),
  createIconEntry(["cost estimation", "pricing strategy", "financial modeling"], DollarSign),
  createIconEntry(["efficiency", "performance", "productivity", "optimization", "streamlining", "speed"], Gauge), // Using Gauge for metrics

  // --- SUPPLY CHAIN & LOGISTICS ---
  createIconEntry(["supply chain visibility", "logistics optimization", "procurement analytics", "material management", "everstream supply"], Truck),
  createIconEntry(["counterparty assessment", "supplier management", "partner vetting", "taiyo.al"], Handshake), // More about relationships

  // --- COMMUNICATION & TRAINING ---
  createIconEntry(["communication platform", "collaboration suite", "team messaging", "mindforge comms"], MessageSquare),
  createIconEntry(["training delivery", "skill enhancement", "learning management", "certification tracking", "mindforge training"], GraduationCap),

  // --- GENERAL PLATFORMS & TOOLS ---
  createIconEntry(["platform solution", "integrated system", "enterprise suite", "digital framework"], Server),
  createIconEntry(["inspection tool", "site audit software", "quality check system"], ClipboardList),
  createIconEntry(["document management", "record system", "form automation", "digital checklist"], FileText),
  createIconEntry(["workflow automation", "process tool", "operational system"], GitFork),
  createIconEntry(["sustainability solution", "environmental tech", "green initiative", "eco-friendly practice", "carbon tracking", "co2e reporting"], Leaf),
  createIconEntry(["resilience tool", "disaster preparedness", "business continuity aid", "climate adaptation", "climatwin resilience"], Recycle),
  createIconEntry(["quality control", "precision tool", "accuracy improvement"], Target),
  createIconEntry(["customization", "configurable options", "tailored features"], Settings2),
  createIconEntry(["location intelligence", "gps service", "geospatial tool", "asset tracking"], MapPin),
  createIconEntry(["air quality monitoring"], AirVent),
  createIconEntry(["api integration", "system connectivity", "data exchange"], Webhook),

  // --- FALLBACKS (Order matters - more generic terms last) ---
  createIconEntry(["solution", "tool", "feature", "capability", "module", "service", "offering", "functionality"], Wrench),
  createIconEntry(["information", "data services", "knowledge platform"], Info),
  createIconEntry(["innovative", "advanced technology", "cutting-edge"], Sparkles), // Changed from Award for more "techy" feel
  createIconEntry(["general", "other"], Lightbulb), // Ultimate generic fallback
];

export const KeySolutionIcon = ({ title, className = "w-8 h-8 text-sky-600 mb-3" }) => {
  const lowerTitle = title.toLowerCase();

  for (const mapping of iconMappings) {
    if (mapping.keywords.some(keyword => lowerTitle.includes(keyword))) {
      const Icon = mapping.IconComponent;
      return <Icon className={className} aria-label={title} />;
    }
  }

  // Default icon if no keywords match - changed to Wrench for "tool/solution"
  return <Wrench className={className} aria-label={title} />;
};