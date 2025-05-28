export const categories = [
  {
    id: 1,
    title: "Project Management Technology",
    description: "Tools for managing construction projects",
    icon: "ClipboardList",
  },
  {
    id: 2,
    title: "Reality Capture",
    description: "Capturing real‑world conditions",
    icon: "Camera",
  },
  {
    id: 3,
    title: "External Event Monitoring",
    description: "Monitoring external events affecting projects",
    icon: "SatelliteDish",
  },
  {
    id: 4,
    title: "Scheduling Analytics",
    description: "Analyzing project schedules",
    icon: "BarChart2",
  },
  {
    id: 5,
    title: "Supply Chain Intelligence and Counter Party Risk",
    description: "Understanding supply chain and counter‑party risks",
    icon: "Shield",
  },
  {
    id: 6,
    title: "Pre‑Construction Technology",
    description: "Technologies used before construction",
    icon: "HardHat",
  },
  {
    id: 7,
    title: "Project IoT Backbone",
    description: "IoT infrastructure for projects",
    icon: "Cpu",
  },
];

export const companies = [
  {
    id: 1,
    name: "Alert Labs",
    subheading: "Smart water monitoring for property protection.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGejiDJOS62zg/company-logo_200_200/company-logo_200_200/0/1719945615754/alert_labs_inc__logo?e=1753920000&v=beta&t=Jy31TM9WQDjeeLsXOFbM6iAtFJXaHpx451GJePrRPc0",
    categoryId: 7,
    details: {
      overview: "Alert Labs' mission is to protect company assets, reduce operating costs, and enhance sustainability in buildings. They design, manufacture, distribute, and support smart building sensors (to monitor water leaks, water pressure, temperature, and humidity) and automatic shutoff valves. Their AlertAQ platform analyzes over 6.7 billion gallons of water each year, saving customers more than $20 million, and reducing CO2e emissions by over 80 million pounds. The company also aims for sustainability in its operations and is a certified B Corporation.",
      regions: ["US", "Canada"],
      risksTreatedOriginal: ["Water", "Natural Catastrophes", "Third Party – Property Damage"],
      stakeholdersImpacted: ["General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Construction", "Testing & Commissioning", "Post-Construction"],
      costOriginal: "Alert Labs solution experts work with each client to determine their specific needs and the types of challenges they're looking to solve to recommend the best combination of equipment and software for their buildings. The sensor equipment is purchased upfront, as a one-time hardware expense, while the software is covered by an annually recurring platform fee.",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "Alert Labs provides smart water management solutions that help construction companies reduce water waste, prevent leaks, and lower costs. Their technology offers real-time monitoring and detailed analytics to optimize water usage and improve sustainability.",
      keySolutions: [
        { title: "Real-time Water Monitoring", description: "Track water consumption in real-time to identify unusual patterns and potential leaks." },
        { title: "Detailed Usage Analytics", description: "Gain insights into water usage trends to optimize efficiency and reduce waste." },
        { title: "Leak Detection and Alerts", description: "Receive immediate alerts for leaks to prevent potential damage and minimize water loss." },
        { title: "Cost Savings", description: "Reduce water bills and insurance premiums with proactive water management." }
      ],
      projectIntegrationPhases: ["Phase of Construction", "Testing and Commissioning", "Post-Construction"],
      risksTreatedWeb: ["Water Damage", "Project Delays", "Cost Overruns", "Environmental Impact", "Regulatory Non-Compliance"],
      costModel: {
        type: "Subscription-Based Pricing",
        description: "Alert Labs offers flexible subscription plans tailored to project size and complexity. Contact us for a custom quote."
      },
      impactMetrics: [
        { metricName: "Water Waste Reduction", value: "Up to 40%" },
        { metricName: "Leak Prevention", value: "95% Success Rate" },
        { metricName: "Cost Savings", value: "Average 20%" }
      ],
      aboutCompanyText: "Alert Labs is a leading provider of smart water management solutions for commercial and residential properties. Their innovative technology helps property owners and managers monitor water usage, detect leaks, and prevent water damage, leading to significant cost savings and improved sustainability.",
      customerSuccessStories: [
        { title: "Office Building Reduces Water Waste by 30%", description: "A large office building implemented Alert Labs' solutions and reduced water waste by 30% within the first year.", imageURL: "https://via.placeholder.com/300x200.png?text=Office+Success" },
        { title: "Apartment Complex Prevents Major Water Damage", description: "An apartment complex detected and fixed a major leak using Alert Labs' technology, preventing significant water damage.", imageURL: "https://via.placeholder.com/300x200.png?text=Apartment+Success" }
      ]
    }
  },
  {
    id: 2,
    name: "Aren",
    subheading: "AI for infrastructure risk and optimization.",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQG_iz-mvSlMlQ/company-logo_200_200/company-logo_200_200/0/1630543101240/aren_logo?e=1753920000&v=beta&t=aJHYQUjTD2cUKKGGOqMAdgXg6zZ2pbpoaAQtqFM77bo",
    categoryId: 2,
    details: {
      overview: "Aren is a B2B SaaS platform designed for engineering firms and asset owners, aiming to reduce the risk of infrastructure failure and optimize spending. Their platform merges artificial intelligence with civil engineering to analyze raw data from diverse sources—including images, videos, laser scanners, and sensors—to conduct a thorough examination of structures. The technology identifies and precisely measures cracks, as well as tracks their rate of change over time in critical materials used across bridges, roads, dams, and buildings. This process produces a 3D visualization that not only details the current state of the infrastructure but also chronicles its condition over time, providing insights into its structural integrity.",
      regions: ["US", "Canada", "Europe", "Asia", "UK&I", "LATAM", "Pacific"],
      risksTreatedOriginal: ["Water", "Structural Integrity/Faulty Workmanship", "Third Party – Property Damage"],
      stakeholdersImpacted: ["Architects/Engineers", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Testing & Commissioning", "Post-Construction"],
      costOriginal: "The pricing changes based on asset size and length of contract. Unitary price per total superficial area will need to be assessed to provide accurate pricing.",
      originalDigitalCategory: ["Reality Capture"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "Aren's AI platform empowers engineering firms to predict infrastructure failures and optimize maintenance spending through advanced data analytics.",
      keySolutions: [
        { title: "AI-Powered Structural Analysis", description: "Leverage AI to identify and track defects in critical infrastructure like bridges and dams." },
        { title: "Predictive Maintenance Planning", description: "Optimize spending by predicting failures and scheduling maintenance proactively." },
        { title: "3D Visualization & Reporting", description: "Gain clear insights into infrastructure health with detailed 3D models and reports." }
      ],
      projectIntegrationPhases: ["Data Collection", "AI Analysis", "Reporting & Action Planning"],
      risksTreatedWeb: ["Structural Failure", "Budget Overruns", "Unforeseen Maintenance", "Safety Hazards"],
      costModel: {
        type: "Platform Subscription & Per-Asset Analysis",
        description: "Aren offers tiered subscriptions with options for per-asset deep-dive analysis. Custom enterprise packages available."
      },
      impactMetrics: [
        { metricName: "Maintenance Cost Reduction", value: "Up to 25%" },
        { metricName: "Risk Prediction Accuracy", value: "Improved by 30%" },
        { metricName: "Inspection Efficiency", value: "Increased by 50%" }
      ],
      aboutCompanyText: "Aren leverages cutting-edge AI and civil engineering expertise to provide unparalleled insights into infrastructure integrity, helping owners reduce risk and optimize lifecycle costs.",
      customerSuccessStories: [
        { title: "City Extends Bridge Lifespan with Aren", description: "A major city utilized Aren's AI to identify critical repair needs, extending a key bridge's operational life by 10 years.", imageURL: "https://via.placeholder.com/300x200.png?text=Aren+Bridge+Success" }
      ]
    }
  },
  {
    id: 3,
    name: "Brickeye",
    subheading: "IoT-driven job site monitoring and automation.",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQE0ofbs9ANVzA/company-logo_200_200/company-logo_200_200/0/1642793315661/brickeye_logo?e=1753920000&v=beta&t=ROkmeRTav8EM9P5MJbLRxiL1LiVIGW_3OkEjonhJZxE",
    categoryId: 7,
    details: {
      overview: "Brickeye aims to transform the AEC industry with IoT-driven job site monitoring, intelligent automations, and data analytics. They offer a unified IoT technology solution for construction which consolidates it's in-house IoT hardware solutions into one risk mitigation platform. Brickeye has IoT devices that are built around water mitigation, concrete curing, and environmental risk management. This digital connectivity provides general contractors with jobsite insights, encompassing real-time alerts and intelligent risk management tools, all accessible remotely via a cloud app or dashboard.",
      regions: ["US", "Canada", "Europe", "LATAM", "UK&I", "Asia"],
      risksTreatedOriginal: ["Water", "Structural Integrity/Faulty Workmanship"],
      stakeholdersImpacted: ["General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Pre-Construction", "Construction", "Testing & Commissioning", "Post-Construction"],
      costOriginal: "Each service or component of the project-specific plan is billed as a turnkey annual subscription service fee, inclusive of all hardware, connectivity, software, installation, and support services. Plans can be tailored and customized in terms of scope and cost to meet client and project-specific requirements for risk mitigation coverage and budget.",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "Brickeye delivers real-time job site intelligence through its unified IoT platform, enhancing safety, efficiency, and risk management in construction.",
      keySolutions: [
        { title: "Environmental Monitoring", description: "Real-time tracking of temperature, humidity, and air quality to ensure optimal conditions." },
        { title: "Concrete Curing Management", description: "Optimize concrete strength and durability with IoT-enabled curing monitoring." },
        { title: "Water Leak Detection & Mitigation", description: "Prevent costly water damage with smart sensors and automated alerts." }
      ],
      projectIntegrationPhases: ["Site Setup & Sensor Deployment", "Real-time Monitoring", "Data Analytics & Reporting"],
      risksTreatedWeb: ["Water Damage", "Material Spoilage", "Suboptimal Concrete Strength", "Environmental Non-Compliance"],
      costModel: {
        type: "Turnkey Annual Subscription",
        description: "Brickeye provides an all-inclusive annual subscription covering hardware, software, connectivity, and support, tailored to project needs."
      },
      impactMetrics: [
        { metricName: "Reduction in Material Waste", value: "Up to 15%" },
        { metricName: "Improved Project Timelines", value: "By 10%" },
        { metricName: "Insurance Claim Reduction (Water Damage)", value: "Up to 70%" }
      ],
      aboutCompanyText: "Brickeye is transforming construction with its comprehensive IoT solutions, providing actionable insights for better project outcomes from pre-construction to post-construction.",
      customerSuccessStories: [
        { title: "Major Contractor Achieves Zero Water Damage Incidents", description: "Using Brickeye's water mitigation system, a large contractor reported zero water damage incidents across five major projects.", imageURL: "https://via.placeholder.com/300x200.png?text=Brickeye+Water+Success" },
        { title: "Concrete Quality Assured for High-Rise", description: "Brickeye's concrete monitoring ensured optimal curing conditions for a landmark high-rise, meeting all quality specifications.", imageURL: "https://via.placeholder.com/300x200.png?text=Brickeye+Concrete+Success" }
      ]
    }
  },
  {
    id: 4,
    name: "Construction Industry Resources' Construction Labor Market Analyzer (CLMA)",
    subheading: "Labor risk analytics for construction projects.",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHvyL67ZTNruw/company-logo_200_200/B4DZWljqF9G4AQ-/0/1742239343436/myclma_logo?e=1753920000&v=beta&t=bbmy9GrGU8uXc1Or9O1vW8l2tqkpCJwU5PQxIlR-G4U",
    categoryId: 5,
    details: {
      overview: "Construction Industry Resources (CIR) is a company that specializes in managing labor risks within the construction sector. Founded and led by CEO Daniel Groves, CIR is closely aligned with the Construction Users Roundtable (CURT), an organization that assists construction owners in effectively using capital. CIR's primary focus is on skilled labor challenges in the construction industry, offering solutions for preconstruction planning to mitigate these risks. Their main tool, the Construction Labor Market Analyzer (CLMA), is a sophisticated platform providing detailed risk analytics. It leverages data from various sources, including construction owners, contractors, labor providers, and Dodge Data & Analytics. The CLMA allows users to understand labor availability by trade & location and what the risk of labor is for future projects, thus aiding in better planning and decision-making within the client's pipeline. This technology is not only valuable for construction companies but also beneficial for labor unions and the insurance industry. It helps in improving loss ratios by providing accurate data for underwriting premiums. CIR's approach involves assessing the labor market in detail, understanding both current and future supply and demand, and planning for potential gaps. By utilizing CIR's tools and methodologies, companies can make informed decisions about project timelines, budgeting, and labor utilization, effectively minimizing labor-related risks and ensuring the successful completion of construction projects.",
      regions: ["US"],
      risksTreatedOriginal: ["Supply Chain Intelligence and Counter Party Risk"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Architects/Engineers", "Owners"],
      phaseOfConstructionOriginal: ["Pre-Construction", "Construction"],
      costOriginal: "CIR's data and analytics are based on an annual platform subscription, which is $18,000 USD.",
      originalDigitalCategory: ["Supply Chain Intelligence and Counter Party Risk"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "CLMA by CIR provides detailed labor market analytics to help construction projects mitigate risks associated with skilled labor shortages and availability.",
      keySolutions: [
        { title: "Labor Availability Analysis", description: "Understand labor supply and demand by trade and location for future projects." },
        { title: "Labor Risk Assessment", description: "Identify potential labor shortages and cost impacts early in the planning phase." },
        { title: "Strategic Workforce Planning", description: "Develop strategies to secure necessary skilled labor and optimize project timelines." }
      ],
      projectIntegrationPhases: ["Pre-Construction Planning", "Project Bidding", "Execution Strategy"],
      risksTreatedWeb: ["Skilled Labor Shortages", "Project Delays due to Labor", "Increased Labor Costs", "Geographic Labor Misallocation"],
      costModel: {
        type: "Annual Platform Subscription",
        description: "Access to the CLMA platform and its comprehensive labor market data is available via an annual subscription."
      },
      impactMetrics: [
        { metricName: "Reduction in Labor-Related Delays", value: "Up to 20%" },
        { metricName: "Improved Labor Cost Forecasting Accuracy", value: "By 15%" },
        { metricName: "Enhanced Bid Competitiveness", value: "Measurable improvement" }
      ],
      aboutCompanyText: "Construction Industry Resources (CIR) empowers the construction sector with data-driven insights into labor market dynamics, helping stakeholders make informed decisions and mitigate risks.",
      customerSuccessStories: [
        { title: "National Contractor Optimizes Bids with CLMA Data", description: "A national contractor leveraged CLMA insights to accurately forecast labor costs and availability, winning several key bids.", imageURL: "https://via.placeholder.com/300x200.png?text=CLMA+Bid+Success" }
      ]
    }
  },
  {
    id: 5,
    name: "Compass by Bespoke Metrics",
    subheading: "Subcontractor prequalification and risk management.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQE9hdnz0eECeQ/company-logo_200_200/B56ZX.5SJQGoAM-/0/1743738185098/bespoke_metrics_inc_logo?e=1753920000&v=beta&t=qMPLc-kjmLz4F7gX98mvSjaQYhSfyn3FKRZdO8IRR3M",
    categoryId: 5,
    details: {
      overview: "Compass by Bespoke Metrics is a leading prequalification platform that supports data collection, verification, and analytics across the entire construction supply chain. Unique to Compass, Subcontractor information is collected through their standard 1Form. General contractors receive data driven analytics to support decision making to mitigate project and default risk. The platform aims to provide transparency and insights into the capabilities and reliability of subcontractors, which can be crucial for general contractors and project owners. They typically aggregate data from multiple sources to provide a comprehensive view of subcontractors. This can include financial data, past performance records, safety metrics, and other relevant information. Using proprietary algorithms, the platform can then assess, and rank subcontractors based on their risk profile.",
      regions: ["Canada", "US"],
      risksTreatedOriginal: ["Supply Chain Intelligence and Counter Party Risk"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors"],
      phaseOfConstructionOriginal: ["Pre-Construction"],
      costOriginal: "Yearly subscription fee based on annual revenue.",
      originalDigitalCategory: ["Supply Chain Intelligence and Counter Party Risk"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "Compass streamlines subcontractor prequalification, providing data-driven insights to mitigate project and default risks for general contractors.",
      keySolutions: [
        { title: "Standardized Data Collection (1Form)", description: "Efficiently gather comprehensive subcontractor information through a standardized process." },
        { title: "Risk Assessment & Analytics", description: "Utilize proprietary algorithms to assess and rank subcontractors based on their risk profile." },
        { title: "Enhanced Decision Making", description: "Empower GCs with reliable data to select the most qualified and financially stable subcontractors." }
      ],
      projectIntegrationPhases: ["Subcontractor Onboarding", "Bid Evaluation", "Project Award"],
      risksTreatedWeb: ["Subcontractor Default", "Poor Performance", "Financial Instability of Partners", "Project Delays due to Subcontractor Issues"],
      costModel: {
        type: "Annual Subscription (Revenue-Based)",
        description: "Compass offers an annual subscription fee based on the general contractor's annual revenue."
      },
      impactMetrics: [
        { metricName: "Reduction in Subcontractor Defaults", value: "Significant decrease" },
        { metricName: "Prequalification Time Savings", value: "Up to 60%" },
        { metricName: "Improved Project Outcomes", value: "Demonstrable quality increase" }
      ],
      aboutCompanyText: "Compass by Bespoke Metrics is dedicated to bringing transparency and efficiency to the construction supply chain through its advanced prequalification platform.",
      customerSuccessStories: [
        { title: "GC Reduces Default Risk by 80%", description: "A leading general contractor implemented Compass and saw an 80% reduction in subcontractor default incidents within two years.", imageURL: "https://via.placeholder.com/300x200.png?text=Compass+Risk+Reduction" }
      ]
    }
  },
  {
    id: 6,
    name: "Impairment Science - Druid",
    subheading: "Cognitive impairment detection for worker safety.",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFMB5sm0Gl5cQ/company-logo_200_200/company-logo_200_200/0/1694442141079/impairmentscience_logo?e=1753920000&v=beta&t=1CPq-ncAE-YxZzTx7Qttieu3YabnPbfp8ivCwXLcgpo",
    categoryId: 5,
    details: {
      overview: "Leveraging neuroscience, Druid quickly (in just 1 minute) and accurately detect cognitive and psychomotor impairments stemming from various causes, such as drugs, alcohol, fatigue, illnesses, injuries, chronic ailments, or intense emotional stress. Druid's main application is to evaluate the job readiness of employees and contractors, enhancing productivity and minimizing injury-related costs. Assessments in the app include tasks that evaluate reaction time, decision making, hand-eye coordination, balance, and time estimation. The results can then be used to gauge the level of a person's impairment.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Worker Injury/Safety", "Structural Integrity/Faulty Workmanship"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Construction"],
      costOriginal: "The current price is $3-$10 USD per worker, licensed per month and the price range is dependent on the volume of workers enrolled.",
      originalDigitalCategory: ["Supply Chain Intelligence and Counter Party Risk"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "Druid's rapid impairment testing app helps ensure worker readiness, enhancing safety and productivity on job sites.",
      keySolutions: [
        { title: "1-Minute Impairment Test", description: "Quickly assess cognitive and psychomotor functions before shifts or critical tasks." },
        { title: "Multi-Factor Impairment Detection", description: "Identifies impairment from fatigue, substances, illness, or stress." },
        { title: "Actionable Readiness Insights", description: "Provides clear indicators for supervisors to make informed decisions about worker deployment." }
      ],
      projectIntegrationPhases: ["Pre-Shift Check-in", "Post-Incident Assessment", "High-Risk Task Preparation"],
      risksTreatedWeb: ["Workplace Accidents", "Reduced Productivity", "Errors in Workmanship", "Safety Non-Compliance"],
      costModel: {
        type: "Per Worker Monthly License",
        description: "Druid is priced per worker per month, with volume discounts available for larger teams."
      },
      impactMetrics: [
        { metricName: "Reduction in Safety Incidents", value: "Up to 30%" },
        { metricName: "Productivity Increase", value: "Average 5-10%" },
        { metricName: "Improved Worker Well-being", value: "Reported increase" }
      ],
      aboutCompanyText: "Impairment Science - Druid utilizes neuroscience to provide a fast, reliable, and non-invasive way to check for cognitive impairment, promoting safer and more productive workplaces.",
      customerSuccessStories: [
        { title: "Construction Firm Sees 25% Drop in Minor Injuries", description: "After implementing Druid for pre-shift checks, a construction firm reported a 25% decrease in minor on-site injuries.", imageURL: "https://via.placeholder.com/300x200.png?text=Druid+Safety+Success" }
      ]
    }
  },
  {
    id: 7,
    name: "Exodigo",
    subheading: "Non-intrusive subsurface mapping platform.",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFJgzPcKb3VbQ/company-logo_200_200/company-logo_200_200/0/1633337594950?e=1753920000&v=beta&t=edNFS2SemzOenO4sSqCIJBsrNrYgk4DQXr_Gq_9D6Vg",
    categoryId: 2,
    details: {
      overview: "Exodigo engages in non-invasive subsurface exploration. It uses a fusion of advanced sensors, 3D imaging, and Al to offer a comprehensive view of what lies beneath, providing vital information to ensure safe and confident design and construction. The solution harnesses an Al combined with multi-sensor technology to craft a comprehensive underground map. Their method integrates data sensors in electromagnetics, gravitation, light, ground penetrating radar (GDR), lidar, and seismic, offering an undisturbed, clear underground view. With this detailed underground insight, their customers can confidently and safely plan, design, and implement their capital projects.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Third Party – Property Damage", "Design Error"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Planning & Design", "Pre-Construction", "Construction"],
      costOriginal: "Exodigo prices per acre for their core mapping services. If potholing, utility relocation, and/or traffic control is required, they price per pothole, utility line, and day, respectively.",
      originalDigitalCategory: ["Reality Capture"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "Exodigo provides a clear, comprehensive map of the underground, reducing risks and costs associated with subsurface utilities and geohazards.",
      keySolutions: [
        { title: "AI-Powered Subsurface Imaging", description: "Fuse data from multiple sensors to create accurate 3D maps of underground utilities and geology." },
        { title: "Risk Reduction for Excavation", description: "Minimize utility strikes and unforeseen ground conditions, enhancing project safety and timelines." },
        { title: "Optimized Design & Planning", description: "Enable confident design and planning with precise knowledge of what lies beneath the surface." }
      ],
      projectIntegrationPhases: ["Site Assessment", "Pre-Design Survey", "Pre-Excavation Verification"],
      risksTreatedWeb: ["Utility Strikes", "Unexpected Ground Conditions", "Project Delays from Subsurface Issues", "Design Reworks"],
      costModel: {
        type: "Per-Acre Mapping & Add-on Services",
        description: "Core mapping is priced per acre, with additional services like potholing and traffic control priced separately."
      },
      impactMetrics: [
        { metricName: "Reduction in Utility Strikes", value: "Up to 90%" },
        { metricName: "Project Cost Savings (Subsurface Issues)", value: "Average 5-15%" },
        { metricName: "Improved Project Schedule Adherence", value: "Significant reduction in delays" }
      ],
      aboutCompanyText: "Exodigo is revolutionizing subsurface discovery with its non-intrusive AI and multi-sensor platform, making the underground knowable and manageable for capital projects.",
      customerSuccessStories: [
        { title: "Major Infrastructure Project Avoids Costly Delays", description: "Exodigo's subsurface mapping identified critical utility conflicts early, saving a major infrastructure project millions in potential delays and redesigns.", imageURL: "https://via.placeholder.com/300x200.png?text=Exodigo+Infra+Success" }
      ]
    }
  },
  {
    id: 8,
    name: "Firmus",
    subheading: "AI-driven pre-construction risk analysis.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGVQynaS2d-5w/company-logo_200_200/company-logo_200_200/0/1714499520640/firmusai_logo?e=1753920000&v=beta&t=-Q55LPRzaEhgZrsKNlxASEdfoyp2SbjJ2gNVNMEVR34",
    categoryId: 6,
    details: {
      overview: "Firmus helps preconstruction teams to reduce risks at the outset of projects and submit more precise bids. Using its Al algorithms, Firmus autonomously scrutinizes PDF drawing sets, pinpoints design-related risks, and enhances pre-construction decision-making. They ensure a thorough design review, addressing crucial architectural, MEP, and document health concerns within a 72-hour period. When done manually, such assessments could take pre-construction teams between 2-4 weeks. Through its cloud-based interface, Firmus equips customers with the tools to swiftly generate insights, raise RFIs, and foster effective communication within their teams, thereby enhancing collaboration with all project stakeholders.",
      regions: ["US", "Canada"],
      risksTreatedOriginal: ["Design Error"],
      stakeholdersImpacted: ["Architects/Engineers", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Pre-Construction"],
      costOriginal: "Depending on the scope of the analysis, FIRMUS charges anywhere from $1,000 to $2,500 USD per analysis (depending on number of analyses included in the annual plan).",
      originalDigitalCategory: ["Pre‑Construction Technology"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "Firmus uses AI to automate design reviews, identifying risks and discrepancies in pre-construction documents to ensure smoother project execution.",
      keySolutions: [
        { title: "Automated PDF Drawing Analysis", description: "AI scrutinizes architectural and MEP drawings to pinpoint design-related risks and inconsistencies." },
        { title: "Rapid Risk Identification", description: "Receive comprehensive design review reports within 72 hours, significantly faster than manual methods." },
        { title: "Enhanced Bid Precision", description: "Submit more accurate bids by identifying potential issues and their cost implications upfront." }
      ],
      projectIntegrationPhases: ["Pre-Bid Design Review", "Value Engineering", "Constructability Analysis"],
      risksTreatedWeb: ["Design Errors & Omissions", "Constructability Issues", "Cost Overruns due to Design Flaws", "RFIs & Change Orders"],
      costModel: {
        type: "Per-Analysis or Annual Plan",
        description: "Firmus offers pricing per design analysis or bundled annual plans with a set number of analyses."
      },
      impactMetrics: [
        { metricName: "Reduction in Design-Related RFIs", value: "Up to 50%" },
        { metricName: "Time Saved on Design Review", value: "Up to 90%" },
        { metricName: "Improved Bid Accuracy", value: "By 5-10%" }
      ],
      aboutCompanyText: "Firmus empowers pre-construction teams with AI-driven insights, transforming design review processes to mitigate risks and improve project outcomes from the very start.",
      customerSuccessStories: [
        { title: "Contractor Avoids Major MEP Clash", description: "Firmus's AI review identified a critical MEP clash in a complex hospital project, saving an estimated $200,000 in rework.", imageURL: "https://via.placeholder.com/300x200.png?text=Firmus+MEP+Success" }
      ]
    }
  },
  {
    id: 9,
    name: "InEight",
    subheading: "Integrated project controls platform.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFb5AGiodlT1g/company-logo_200_200/company-logo_200_200/0/1727778248256/ineight_logo?e=1753920000&v=beta&t=H6pFkqWy2pBukSfmRePYmk0KWrQt7hn1fPIWmBcL5oM",
    categoryId: 1,
    details: {
      overview: "InEight's project management software offers real-time insights for risk management, operational efficiency, and cost control, with features for planning, execution, cost estimation, and forecasting. The platform includes tools for top-down planning, schedule and cost risk analysis, and design progress tracking. Additionally, it ensures environment, health, and safety compliance, and facilitates quality assurance and control. The software also streamlines field execution management, document workflows, and contract management. Its analytics capabilities reduce data analysis time, improve portfolio visibility, and support informed decision-making. InEight's virtual design and construction tools aid in clash resolution, leveraging digital twins and model-based technologies for efficient project management across various construction stages.",
      regions: ["US", "Canada", "UK&I", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Supply Chain Intelligence and Counter Party Risk", "Design Error", "Structural Integrity/Faulty Workmanship"],
      stakeholdersImpacted: ["Subcontractors", "Architects/Engineers", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Planning & Design", "Pre-Construction", "Construction", "Testing & Commissioning", "Post-Construction"],
      costOriginal: "InEight offers several enterprise-level solutions, the pricing for these solutions can vary depending on the specific products, the number of users and the length of the subscription.",
      originalDigitalCategory: ["Project Management Technology"],
      employeeCount: "201-500 employees",
      solutionsImpactSummary: "InEight provides a comprehensive suite of project controls software, connecting all project phases and stakeholders for improved predictability and performance.",
      keySolutions: [
        { title: "Advanced Planning & Scheduling", description: "Develop and manage complex project schedules with integrated risk analysis." },
        { title: "Cost Estimation & Control", description: "Ensure budget adherence with robust estimating, forecasting, and change management tools." },
        { title: "Field Execution Management", description: "Streamline field operations with mobile tools for progress tracking, quality, and safety." },
        { title: "Virtual Design & Construction (VDC)", description: "Leverage BIM and digital twins for clash detection, model-based workflows, and progress visualization." }
      ],
      projectIntegrationPhases: ["Planning & Design", "Pre-Construction", "Construction Execution", "Testing & Commissioning", "Post-Construction & Handover"],
      risksTreatedWeb: ["Schedule Slippage", "Cost Overruns", "Poor Productivity", "Lack of Visibility", "Communication Gaps"],
      costModel: {
        type: "Modular Enterprise Subscription",
        description: "InEight offers flexible, modular subscriptions based on selected products, user count, and contract duration. Enterprise agreements available."
      },
      impactMetrics: [
        { metricName: "Improved Project Margin", value: "Up to 5%" },
        { metricName: "Schedule Performance Index (SPI) Improvement", value: "Average 0.1-0.2 points" },
        { metricName: "Reduced Data Analysis Time", value: "By up to 40%" }
      ],
      aboutCompanyText: "InEight solutions provide project-driven companies with the visibility and control needed to manage complex projects on time and on budget, from concept to completion.",
      customerSuccessStories: [
        { title: "Global EPC Achieves Predictability on Mega-Projects", description: "A leading global EPC firm standardized on InEight, resulting in significantly improved cost and schedule predictability across their portfolio of mega-projects.", imageURL: "https://via.placeholder.com/300x200.png?text=InEight+EPC+Success" },
        { title: "Contractor Streamlines Field Operations", description: "By implementing InEight's field execution tools, a regional contractor improved daily reporting efficiency by 75% and reduced rework.", imageURL: "https://via.placeholder.com/300x200.png?text=InEight+Field+Success" }
      ]
    }
  },
  {
    id: 10,
    name: "Latium Technologies",
    subheading: "Scalable IoT solutions for industrial operations.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGrBtD-gTOw1Q/company-logo_200_200/company-logo_200_200/0/1686259345530/latium_group_of_companies_logo?e=1753920000&v=beta&t=OhjDGKjSsLFqoV4w851ED9nOFor0lQHU5LpE-bAUnVw",
    categoryId: 7,
    details: {
      overview: "Latium Technologies offers a scalable suite of IoT and industrial solutions, designed to help businesses optimize their operations and increase efficiency. Their technology solutions include IoT (Internet of Things) sensors, cloud computing, and analytics platforms. These technologies collect vast amounts of data from vehicles and assets, which is then processed and presented in user-friendly dashboards and reports. The goal is to give managers and operators actionable insights into their operations. Latium has a wide array of sensors including Air Quality monitoring, Asset Tracking, Concrete Maturity, Leak Detection, Vibration, Temperature and Humidity.",
      regions: ["Canada", "US", "Europe", "UK&I", "Asia", "Pacific", "LATAM"],
      risksTreatedOriginal: ["Water", "Fire", "Structural Integrity/Faulty Workmanship", "Third Party – Property Damage", "Natural Catastrophes", "General Property Damage"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Pre-Construction", "Construction", "Post-Construction"],
      costOriginal: "Latium provides a rental model structure that can scale up and down depending on project size. Cost is dependent on type of sensors and number of sensors used. The cost is determined on a project-by-project basis.",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "Latium Technologies delivers versatile IoT sensor solutions and analytics platforms to enhance operational efficiency and safety across various industries, including construction.",
      keySolutions: [
        { title: "Multi-Sensor IoT Platform", description: "Deploy a wide range of sensors for air quality, asset tracking, concrete maturity, leak detection, vibration, and more." },
        { title: "Real-time Data & Analytics", description: "Access actionable insights through user-friendly dashboards and reports for proactive decision-making." },
        { title: "Scalable & Customizable Solutions", description: "Tailor sensor deployments and data monitoring to specific project needs and sizes." }
      ],
      projectIntegrationPhases: ["Asset Management", "Environmental Monitoring", "Site Safety & Security", "Material Tracking"],
      risksTreatedWeb: ["Asset Theft/Loss", "Environmental Hazards", "Equipment Failure", "Suboptimal Material Conditions", "Safety Incidents"],
      costModel: {
        type: "Rental Model & Project-Based Pricing",
        description: "Latium offers a flexible rental model for sensors, with overall project cost determined by the type and number of sensors used."
      },
      impactMetrics: [
        { metricName: "Operational Efficiency Gains", value: "Average 10-15%" },
        { metricName: "Reduction in Asset Downtime", value: "Up to 20%" },
        { metricName: "Improved Environmental Compliance", value: "Demonstrable" }
      ],
      aboutCompanyText: "Latium Technologies empowers businesses with actionable data from the physical world through its advanced IoT sensors and analytics, driving smarter operations.",
      customerSuccessStories: [
        { title: "Construction Site Enhances Asset Security", description: "A large construction project utilized Latium's asset tracking, significantly reducing equipment theft and improving utilization.", imageURL: "https://via.placeholder.com/300x200.png?text=Latium+Asset+Success" }
      ]
    }
  },
  {
    id: 11,
    name: "MegaSecur",
    subheading: "Flexible flood protection barriers.",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEGtD46n7I2vw/company-logo_200_200/company-logo_200_200/0/1630550552663/megasecur_inc_logo?e=1753920000&v=beta&t=gzO6rgr-fxncULvdX2GOckbYtV9TJfHfYD6YyD3EvK8",
    categoryId: 3,
    details: {
      overview: "MegaSecur manufactures a Water-Gate barrier, which is a flexible and self-locking water barrier which can be used for flood protection, water retention, and diversions. The Water-Gate barrier is known for its portability, ease of deployment, and effectiveness in various scenarios. It uses a unique design that relies on the weight of the water to keep the barrier in place. As water fills the barrier, it becomes more secure, preventing any overflow or leakage. Made from strong, durable materials, its designed to withstand wear and tear and its flexibility allows for adaptation to various terrains and conditions.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Water", "Natural Catastrophes"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Owner"],
      phaseOfConstructionOriginal: ["Construction", "Post-Construction"],
      costOriginal: "[TBD - waiting to connect with company.]",
      originalDigitalCategory: ["N/A"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "MegaSecur's Water-Gate barriers offer rapidly deployable and effective flood protection for construction sites and critical infrastructure.",
      keySolutions: [
        { title: "Rapidly Deployable Flood Barriers", description: "Quickly set up flexible, self-locking water barriers for flood protection, water retention, and diversions." },
        { title: "Reusable & Durable Design", description: "Made from strong materials, Water-Gate barriers are reusable and adapt to various terrains." },
        { title: "Efficient Water Management", description: "Prevent overflow and leakage, relying on water weight for stability and effectiveness." }
      ],
      projectIntegrationPhases: ["Emergency Preparedness", "Site Protection During Construction", "Temporary Water Diversion"],
      risksTreatedWeb: ["Flood Damage", "Site Inundation", "Project Delays due to Weather", "Water Intrusion"],
      costModel: {
        type: "Product Purchase (TBD)",
        description: "Pricing information for Water-Gate barriers to be confirmed. Likely based on barrier size and quantity."
      },
      impactMetrics: [
        { metricName: "Reduction in Flood-Related Damages", value: "Significant, project-dependent" },
        { metricName: "Deployment Time vs. Sandbags", value: "Up to 90% faster" },
        { metricName: "Project Downtime Avoidance", value: "Measurable" }
      ],
      aboutCompanyText: "MegaSecur provides innovative and reliable flood control solutions with its Water-Gate barriers, known for ease of use and effectiveness in protecting assets.",
      customerSuccessStories: [
        { title: "Construction Site Saved from Flash Flood", description: "Rapid deployment of Water-Gate barriers protected a critical construction zone from an unexpected flash flood, preventing costly damage and delays.", imageURL: "https://via.placeholder.com/300x200.png?text=MegaSecur+Flood+Success" }
      ]
    }
  },
  {
    id: 12,
    name: "MindForge",
    subheading: "Digital platform for construction communication & training.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGJTJT5bNaaDw/company-logo_200_200/company-logo_200_200/0/1695215671095/mindforgellc_logo?e=1753920000&v=beta&t=nl3yJCUVO9zwGTfroKK2DY3l21BIZVBsTHRslrG_eI0",
    categoryId: 5,
    details: {
      overview: "MindForge offers a digital platform dedicated to enhancing communication, training, and engagement. Acknowledging the persistent challenges that plague the construction realm, such as worker safety concerns, project efficiency, and employee engagement issues, MindForge commits to addressing and mitigating these concerns through its comprehensive platform. They offer a unified platform with various tools and features tailored for the construction industry that includes training modules, communication tools, and engagement solutions. MindForge leverages technology to bring a digital solution to the construction site. Using a cloud-based platform, they provide access to their suite of tools on various devices, considering the on-the-go nature of many construction workers. Their solutions are tailored specifically to the challenges and needs of the construction industry, making them relevant and effective.",
      regions: ["USA"],
      risksTreatedOriginal: ["Worker Injury/Safety", "Structural Integrity/Faulty Workmanship"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Pre-Construction", "Construction"],
      costOriginal: "Mindforge charges $3,000 USD per year for up to 200 users or provides a pay as you go credit system for pre-packaged content.",
      originalDigitalCategory: ["Supply Chain Intelligence and Counter Party Risk"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "MindForge enhances construction site communication, training, and worker engagement through its tailored digital platform, improving safety and efficiency.",
      keySolutions: [
        { title: "Targeted Training Modules", description: "Deliver specific training content to workers, addressing safety protocols and skill development." },
        { title: "Real-time Communication Tools", description: "Facilitate seamless communication across the job site for better coordination and issue resolution." },
        { title: "Worker Engagement Platform", description: "Boost worker morale and involvement through interactive tools and feedback mechanisms." }
      ],
      projectIntegrationPhases: ["Worker Onboarding", "Safety Briefings", "Ongoing Skill Development", "Incident Reporting"],
      risksTreatedWeb: ["Worker Injuries", "Skill Gaps", "Poor Communication", "Low Productivity", "Faulty Workmanship"],
      costModel: {
        type: "Annual Subscription or Pay-As-You-Go",
        description: "MindForge offers an annual subscription for up to 200 users or a flexible pay-as-you-go credit system for pre-packaged content."
      },
      impactMetrics: [
        { metricName: "Reduction in Reportable Incidents", value: "Up to 15%" },
        { metricName: "Improved Training Completion Rates", value: "Over 90%" },
        { metricName: "Enhanced Worker Engagement Scores", value: "Average 20% increase" }
      ],
      aboutCompanyText: "MindForge is committed to revolutionizing the construction industry by providing digital tools that empower workers, improve safety, and drive project success.",
      customerSuccessStories: [
        { title: "Contractor Improves Safety Record with MindForge Training", description: "A mid-sized contractor implemented MindForge's safety training modules and saw a 20% improvement in their safety record within one year.", imageURL: "https://via.placeholder.com/300x200.png?text=MindForge+Safety+Success" }
      ]
    }
  },
  {
    id: 13,
    name: "OneConcern",
    subheading: "AI-powered resilience solutions for natural disasters.",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQGaaZsAaQVYCg/company-logo_200_200/company-logo_200_200/0/1630657782036/oneconcern_logo?e=1753920000&v=beta&t=Mr2htVDjd1vhaB85KjUVmeyOR9Z8Z61HSDuqavgXa0Q",
    categoryId: 3,
    details: {
      overview: "One Concern is a tech company focused on building resilience solutions by harnessing the power of artificial intelligence (AI). Founded by Stanford University alumni, the company aims to make disaster-resilient communities a reality by predicting and mitigating the impacts of natural disasters. They provide a resilience-as-a-service solution that utilizes Al to predict and analyze the impacts of various natural disasters, such as: Seismic impacts, Flood, Climate events, and Fire. By providing this information, One Concern enables cities, businesses, and other entities to prepare and respond more effectively to natural disasters. One Concern uses artificial intelligence, big data analytics, and a wealth of geological, climatic, and urban data to predict the impacts of various natural disasters. Their platform ingests vast amounts of data from various sources, processes it using advanced Al algorithms, and produces predictive models that offer actionable insights.",
      regions: ["US", "Japan"],
      risksTreatedOriginal: ["Natural Catastrophes", "Third Party – Property Damage", "General Property Damage"],
      stakeholdersImpacted: ["Architects/Engineers", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Planning & Design", "Pre-Construction", "Construction", "Post-Construction"],
      costOriginal: "[TBD - waiting on response from company.]",
      originalDigitalCategory: ["External Event Monitoring"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "OneConcern uses AI to predict and mitigate the impacts of natural disasters, enabling businesses and communities to build resilience and respond effectively.",
      keySolutions: [
        { title: "AI-Powered Disaster Prediction", description: "Utilize AI to analyze seismic, flood, climate, and fire risks for specific locations." },
        { title: "Resilience-as-a-Service Platform", description: "Access predictive models and actionable insights to prepare for and respond to natural disasters." },
        { title: "Impact Mitigation Strategies", description: "Develop data-driven strategies to minimize damage and downtime from catastrophic events." }
      ],
      projectIntegrationPhases: ["Site Selection & Risk Assessment", "Business Continuity Planning", "Emergency Response Coordination"],
      risksTreatedWeb: ["Earthquake Damage", "Flood Damage", "Wildfire Impact", "Climate Change Vulnerabilities", "Business Interruption"],
      costModel: {
        type: "Custom Enterprise Solutions (TBD)",
        description: "OneConcern typically provides tailored solutions for large enterprises and public sector entities. Pricing details to be confirmed."
      },
      impactMetrics: [
        { metricName: "Improved Disaster Preparedness", value: "Significant" },
        { metricName: "Reduced Recovery Time", value: "Up to 30%" },
        { metricName: "Optimized Resource Allocation for Response", value: "Enhanced efficiency" }
      ],
      aboutCompanyText: "OneConcern is dedicated to making disasters less disastrous by leveraging AI to build a more resilient future for communities and businesses worldwide.",
      customerSuccessStories: [
        { title: "City Enhances Earthquake Response with OneConcern", description: "A major city integrated OneConcern's seismic impact predictions into their emergency response plans, improving resource deployment and post-event recovery.", imageURL: "https://via.placeholder.com/300x200.png?text=OneConcern+Seismic+Success" }
      ]
    }
  },
  {
    id: 14,
    name: "OpenSpace",
    subheading: "AI-powered 360° construction photo documentation.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGEQ2fZIICtUQ/company-logo_200_200/company-logo_200_200/0/1688566602003/openspaceai_logo?e=1753920000&v=beta&t=z6FVqfSP-JUNikdgCJ8GSlluW-oj5sfj5-eeF-q0OBc",
    categoryId: 2,
    details: {
      overview: "OpenSpace is a tech company that leverages computer vision and artificial intelligence to provide photo documentation solutions for the construction industry. By automatically capturing and mapping 360-degree photos to project plans, OpenSpace aims to create a visual record of construction progress over time. There primary offering is a visual documentation platform, which has several features: 360-degree wearable photo capture, automatic mapping, time-lapse creation, and integration with other construction software platforms. As workers walk the site with a camera (like a GoPro or similar device), photos are captured and then uploaded to the cloud. OpenSpace's algorithms process these photos, stitching them together and aligning them with the project plans. The result is an interactive, visual timeline of construction progress that stakeholders can navigate and analyze.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Structural Integrity/Faulty Workmanship", "Third Party – Property Damage", "General Property Damage"],
      stakeholdersImpacted: ["Subcontractors", "Architects/Engineers", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Pre-Construction", "Construction", "Post-Construction"],
      costOriginal: "The typical cost for OpenSpace is between 0.02% to 0.1% of the Contract Value.",
      originalDigitalCategory: ["Reality Capture"],
      employeeCount: "201-500 employees",
      solutionsImpactSummary: "OpenSpace automates construction site photo documentation using AI and 360° cameras, creating comprehensive visual records for progress tracking and dispute resolution.",
      keySolutions: [
        { title: "Automated 360° Photo Capture", description: "Effortlessly capture job site conditions by walking the site with a 360° camera." },
        { title: "AI-Powered Image Processing & Mapping", description: "Automatically map photos to floor plans and create interactive visual timelines." },
        { title: "Enhanced Collaboration & Transparency", description: "Share visual progress with all stakeholders, improving communication and reducing disputes." }
      ],
      projectIntegrationPhases: ["Progress Monitoring", "Quality Control", "As-Built Documentation", "Dispute Resolution"],
      risksTreatedWeb: ["Construction Defects", "Rework", "Schedule Disputes", "Lack of Progress Visibility", "Communication Issues"],
      costModel: {
        type: "Contract Value Percentage",
        description: "OpenSpace pricing is typically a small percentage (0.02% to 0.1%) of the total project contract value."
      },
      impactMetrics: [
        { metricName: "Reduction in Rework", value: "Up to 50%" },
        { metricName: "Time Saved on Documentation", value: "Up to 80%" },
        { metricName: "Improved Dispute Resolution Time", value: "Faster by 2-3x" }
      ],
      aboutCompanyText: "OpenSpace is making construction more efficient and transparent with its easy-to-use, AI-driven photo documentation platform, trusted by builders worldwide.",
      customerSuccessStories: [
        { title: "GC Saves $1M in Rework with OpenSpace", description: "A general contractor used OpenSpace to identify and resolve a critical installation error early, saving an estimated $1 million in potential rework.", imageURL: "https://via.placeholder.com/300x200.png?text=OpenSpace+Rework+Success" }
      ]
    }
  },
  {
    id: 15,
    name: "ReConstruct",
    subheading: "Visual command center for construction projects.",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGbsN5Y5TgrEg/company-logo_200_200/company-logo_200_200/0/1630576189963/reconstruct_inc_logo?e=1753920000&v=beta&t=e4SzieEaQwFZvmNvptDvAEAIFJ2S8WChLKWdwlXy78g",
    categoryId: 2,
    details: {
      overview: "Reconstruct's Visual Command Center transforms all sources of reality data into a walkable, mappable, timestamped digital twin of the project. By ingesting data from any third-party device such as smart phones, 360 cameras, drones, or laser scanners, Reconstruct offers a capital asset lifecycle management (CALM) platform including complete virtual site visibility over time. ReConstruct has several features for construction project management including Visual Documentation by combining 3D models with reality capture, progress tracking, predictive analytics, remote Inspection, and integration with other construction software platforms. Their platform uses cloud computing to process and store large amounts of visual data. By leveraging artificial intelligence and advanced data analytics, the platform can automatically detect discrepancies between planned models and the actual construction, providing actionable insights to project managers and stakeholders. Users can access the platform via web browsers, in order to collaborate and share insights with team members and other stakeholders.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia"],
      risksTreatedOriginal: ["Structural Integrity/Faulty Workmanship", "Third Party – Property Damage", "General Property Damage"],
      stakeholdersImpacted: ["Subcontractors", "Architects/Engineers", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Planning & Design", "Construction"],
      costOriginal: "Reconstruct charges an annual subscription of 0.015% of construction value per year (subject to a min of $10,000 USD). For example, a $100,000,000 project would be a subscription fee of $15,000 USD per year.",
      originalDigitalCategory: ["Reality Capture"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "ReConstruct creates a timestamped digital twin of construction projects, integrating reality capture with 3D models for enhanced visual documentation, progress tracking, and remote inspection.",
      keySolutions: [
        { title: "Integrated Digital Twin Platform", description: "Combine reality data (photos, scans) with BIM models to create a comprehensive visual command center." },
        { title: "AI-Powered Progress Tracking & Analytics", description: "Automatically detect discrepancies and track progress against planned models." },
        { title: "Remote Site Visibility & Inspection", description: "Enable stakeholders to virtually visit and inspect the job site from anywhere." }
      ],
      projectIntegrationPhases: ["Design Validation", "Construction Progress Monitoring", "Quality Assurance/Control", "Remote Inspections", "Facility Management"],
      risksTreatedWeb: ["Construction Defects", "Schedule Deviations", "Quality Issues", "Lack of Remote Oversight", "Documentation Gaps"],
      costModel: {
        type: "Annual Subscription (Percentage of Construction Value)",
        description: "ReConstruct's annual subscription is 0.015% of the construction value, with a minimum fee (e.g., $10,000 USD)."
      },
      impactMetrics: [
        { metricName: "Reduction in Travel Costs for Inspections", value: "Up to 75%" },
        { metricName: "Improved Schedule Adherence", value: "By 5-10%" },
        { metricName: "Enhanced Defect Detection Rate", value: "Increased by 30%" }
      ],
      aboutCompanyText: "ReConstruct empowers project teams with a visual command center, transforming how construction projects are managed, monitored, and documented through the power of digital twins.",
      customerSuccessStories: [
        { title: "Industrial Project Achieves On-Time Completion with ReConstruct", description: "By using ReConstruct for remote progress monitoring and issue tracking, a complex industrial project maintained its schedule and avoided costly delays.", imageURL: "https://via.placeholder.com/300x200.png?text=ReConstruct+Schedule+Success" }
      ]
    }
  },
  {
    id: 16,
    name: "Everstream",
    subheading: "Predictive analytics for supply chain risk.",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEfNSHSzeWonw/company-logo_200_200/company-logo_200_200/0/1647870029262/everstreamai_logo?e=1753920000&v=beta&t=CY7K9aOKocBLVhHWWA6wkqVW_kP3HwvGzP454cFfL2U",
    categoryId: 5,
    details: {
      overview: "Everstream Analytics helps by providing an in-depth view of supply chain data, they offer more complete information, sharper analysis, and accurate predictions for supply chain operations. The platform amasses data from a varied mix of sources, such as news portals, meteorological predictions, social media, and proprietary DHL datasets. Through rigorous data analysis, they anticipate potential roadblocks and deliver actionable insights to their customers. Operating on a cloud-based framework, the system guarantees instantaneous collaboration and decision-making, enabling businesses to promptly counter any supply chain threats.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Supply Chain Intelligence and Counter Party Risk"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Planning & Design", "Pre-construction", "Construction"],
      costOriginal: "Everstream Analytics is a SaaS offering for an annual subscription. The costs are driven by the size of the network we are monitoring for supply chain risks.",
      originalDigitalCategory: ["Supply Chain Intelligence and Counter Party Risk"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "Everstream Analytics provides predictive insights into supply chain risks, enabling proactive mitigation of disruptions for global construction projects.",
      keySolutions: [
        { title: "End-to-End Supply Chain Visibility", description: "Gain a comprehensive view of your supply network, from raw materials to site delivery." },
        { title: "Predictive Risk Analytics", description: "Anticipate disruptions from weather, geopolitical events, supplier issues, and logistical challenges." },
        { title: "Actionable Mitigation Strategies", description: "Receive timely alerts and recommendations to proactively address potential supply chain threats." }
      ],
      projectIntegrationPhases: ["Material Procurement Planning", "Logistics Management", "Supplier Risk Assessment", "Construction Phase Execution"],
      risksTreatedWeb: ["Material Delays", "Supplier Insolvency", "Logistical Bottlenecks", "Geopolitical Disruptions", "Natural Disasters impacting Supply"],
      costModel: {
        type: "Annual SaaS Subscription (Network Size Dependent)",
        description: "Everstream's subscription cost is based on the size and complexity of the supply chain network being monitored."
      },
      impactMetrics: [
        { metricName: "Reduction in Supply Chain Disruptions", value: "Up to 25%" },
        { metricName: "Improved On-Time Material Delivery", value: "By 10-15%" },
        { metricName: "Cost Savings from Proactive Mitigation", value: "Significant, project-dependent" }
      ],
      aboutCompanyText: "Everstream Analytics helps companies build more resilient and agile supply chains through the power of predictive analytics, ensuring project continuity and success.",
      customerSuccessStories: [
        { title: "Global Contractor Mitigates Port Congestion Delays", description: "Using Everstream, a global contractor rerouted critical material shipments proactively, avoiding major delays due to port congestion.", imageURL: "https://via.placeholder.com/300x200.png?text=Everstream+Logistics+Success" }
      ]
    }
  },
  {
    id: 17,
    name: "RodRadar",
    subheading: "Live Dig Radar (LDR) for underground utility detection.",
    logo: "https://via.placeholder.com/100.png?text=RodRadar",
    categoryId: 7,
    details: {
      overview: "RodRadar offers its Live Dig Radar (LDR) technology, which automatically detects underground utility infrastructure in real-time, on location, without the need for expert analysis. Its product, LDR Excavate, an excavator digging bucket with integrated LDR technology, detects all types of pipes and utilities, including gas, power, communications, fiber-optics, water, oil, and chemicals - in different soils and types of substrates. The system works by having the driver use the digging bucket to scan a section of the ground, then being provided a visual mapping of underground utilities. LDR technology overcomes existing GPR limitations, detecting underground utilities during excavation at any depth.",
      regions: ["US", "Canada", "UK&I", "Europe", "Pacific"],
      risksTreatedOriginal: ["Third Party – Property Damage"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Construction"],
      costOriginal: "RodRadar's retail price (MSRP) for customers ranges between $40,000 to $50,000 USD, which is dependant on the bucket size and type. The price includes a 1-year warranty, installation, training, and technical support.",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "RodRadar's LDR Excavate technology provides real-time, on-location detection of underground utilities during excavation, preventing costly and dangerous strikes.",
      keySolutions: [
        { title: "Integrated Live Dig Radar (LDR)", description: "Excavator bucket with built-in radar detects all types of utilities in real-time." },
        { title: "Automated Utility Mapping", description: "Provides operators with immediate visual mapping of underground utilities during excavation." },
        { title: "Enhanced GPR Capabilities", description: "Overcomes limitations of traditional GPR, detecting utilities at any depth and in various soil types." }
      ],
      projectIntegrationPhases: ["Excavation", "Trenching", "Site Preparation", "Utility Installation/Repair"],
      risksTreatedWeb: ["Utility Strikes", "Worker Safety Hazards", "Project Delays from Utility Damage", "Repair Costs", "Environmental Contamination"],
      costModel: {
        type: "Product Purchase (MSRP)",
        description: "RodRadar's LDR Excavate bucket is sold at an MSRP between $40,000 to $50,000 USD, including warranty, installation, and training."
      },
      impactMetrics: [
        { metricName: "Reduction in Utility Strikes", value: "Up to 95%" },
        { metricName: "Improved Excavation Safety", value: "Significant" },
        { metricName: "Cost Savings from Averted Strikes", value: "Substantial, varies by project" }
      ],
      aboutCompanyText: "RodRadar is revolutionizing excavation safety with its groundbreaking Live Dig Radar technology, making the unseen underground visible to operators in real-time.",
      customerSuccessStories: [
        { title: "Utility Contractor Eliminates Strikes in High-Risk Area", description: "A utility contractor equipped their fleet with LDR Excavate and reported zero utility strikes over a year in a congested urban environment.", imageURL: "https://via.placeholder.com/300x200.png?text=RodRadar+Strike+Prevention" }
      ]
    }
  },
  {
    id: 18,
    name: "SafetyCulture",
    subheading: "Mobile-first operations platform for safety & quality.",
    logo: "https://via.placeholder.com/100.png?text=SafetyCulture",
    categoryId: 1,
    details: {
      overview: "Safety Culture's customers use its solution by leveraging its mobile application and platform to conduct inspections, audits, and checks, digitizing traditional paper processes for efficiency. Frontline workers utilize the app for real-time incident reporting and issue notification, which promotes both proactive and reactive safety measures. Task management features enable users to assign and follow up on action items, ensuring that issues are resolved promptly. The platform also includes a training module for microlearning, which targets specific learning needs like reminding employees of protocols after an absence. Customers use the platform's data analytics to identify trends and areas for improvement, informing training and risk mitigation strategies. Additionally, Safety Culture's platform has a broad set of tools that integrate with APIs for additional functionalities like asset tracking and temperature monitoring. This allows businesses to monitor equipment and environmental conditions, further contributing to safety and compliance. The system's flexibility allows users to tailor the platform to their specific industry needs and operational challenges, helping them to manage risks effectively and streamline their safety processes.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Worker Injury/Safety"],
      stakeholdersImpacted: ["Subcontractors", "Architects/Engineers", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Construction"],
      costOriginal: "Safety Culture costs can range in price up to $24 USD per user per month, depending on which of the 3 plan options clients choose.",
      originalDigitalCategory: ["Project Management Technology"],
      employeeCount: "501-1000 employees",
      solutionsImpactSummary: "SafetyCulture's iAuditor app empowers frontline workers to manage safety and quality inspections, report issues, and conduct audits efficiently from their mobile devices.",
      keySolutions: [
        { title: "Digital Checklists & Inspections", description: "Conduct safety, quality, and operational inspections using customizable digital checklists on mobile devices." },
        { title: "Real-time Issue Reporting & Tracking", description: "Capture and report issues instantly with photos and notes, and track actions to resolution." },
        { title: "Microlearning & Training", description: "Deliver targeted training modules to reinforce safety protocols and best practices." },
        { title: "Data Analytics & Insights", description: "Identify trends, track performance, and make data-driven decisions to improve safety and quality." }
      ],
      projectIntegrationPhases: ["Daily Site Inspections", "Safety Audits", "Quality Control Checks", "Incident Management", "Equipment Maintenance"],
      risksTreatedWeb: ["Workplace Accidents", "Quality Defects", "Compliance Violations", "Inefficient Paper Processes", "Lack of Operational Visibility"],
      costModel: {
        type: "Per User Monthly Subscription",
        description: "SafetyCulture offers various subscription plans, with pricing up to $24 USD per user per month, depending on features."
      },
      impactMetrics: [
        { metricName: "Reduction in Lost Time Injuries (LTIs)", value: "Up to 40%" },
        { metricName: "Time Saved on Inspections & Reporting", value: "Average 5-10 hours/week per user" },
        { metricName: "Improved Compliance Rates", value: "By 25%" }
      ],
      aboutCompanyText: "SafetyCulture provides a simple, mobile-first platform that helps businesses around the world improve workplace safety, quality, and operational efficiency.",
      customerSuccessStories: [
        { title: "Construction Firm Digitizes Safety, Reduces Incidents by 30%", description: "A large construction firm rolled out SafetyCulture's iAuditor for all site inspections, leading to a 30% reduction in safety incidents and improved compliance.", imageURL: "https://via.placeholder.com/300x200.png?text=SafetyCulture+Success" }
      ]
    }
  },
  {
    id: 19,
    name: "Taiyō.Al",
    subheading: "Infra-intelligence platform for construction & procurement.",
    logo: "https://via.placeholder.com/100.png?text=Taiyo.Al",
    categoryId: 5,
    details: {
      overview: "Taiyō.Al is an advanced infra-intelligence platform designed to revolutionize the infrastructure construction and public procurement sector, which is often plagued by inefficiencies and high upfront costs. Utilizing a proprietary data mesh, it aggregates a vast array of specific fields to form intelligent analyses for early stage project decisions. This includes detailed information on infrastructure projects, tenders, brownfield assets, and risk conditions gathered from official government announcements, marketplace data, and real-time contract opportunities. By integrating external data on macro and micro activities, alongside news and media mentions, Taiyō.Al offers a comprehensive view of each project's landscape. This enables clients to incorporate their internal data, such as claims or bid data, to analyze alongside external information. The platform also provides insights into project failure rates, sector activities, key project sponsors, contractor performance, and risk analysis. It's equipped with tools for benchmarking and similar project analysis, crucial for decision-making. Taiyō.Al's real-time updates ensure the latest information is always at hand, significantly benefiting contractors and owners by improving visibility of opportunities, aiding in risk management, and enhancing decision-making in the largest yet most inefficient sector of the global economy.",
      regions: ["US", "Canada", "LATAM", "Europe", "Asia", "Pacific", "UK&I"],
      risksTreatedOriginal: ["Supply Chain Intelligence and Counter Party Risk"],
      stakeholdersImpacted: ["Architects/Engineers", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Planning & Design", "Pre-Construction", "Post-Construction"],
      costOriginal: "Taiyo's subscription fees are dependant on the regional coverage a client requires and varies from $40,000 USD to $160,000 USD. Agreements can vary based on the scope and scale of the subscription required by customers.",
      originalDigitalCategory: ["Supply Chain Intelligence and Counter Party Risk"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "Taiyō.Al leverages a proprietary data mesh to provide deep insights into infrastructure projects, tenders, and market risks, empowering strategic decision-making.",
      keySolutions: [
        { title: "Comprehensive Project & Tender Intelligence", description: "Access detailed information on infrastructure projects, tenders, brownfield assets, and risk conditions." },
        { title: "Contractor & Sponsor Performance Analysis", description: "Gain insights into project failure rates, sector activities, and key stakeholder performance." },
        { title: "Real-time Market & Risk Monitoring", description: "Stay updated with real-time contract opportunities and integrated macro/micro activity data." }
      ],
      projectIntegrationPhases: ["Market Research & Opportunity Identification", "Bid Strategy & Preparation", "Risk Assessment & Due Diligence", "Portfolio Management"],
      risksTreatedWeb: ["Missed Opportunities", "Inefficient Bidding", "High Upfront Costs", "Poor Counterparty Selection", "Market Volatility"],
      costModel: {
        type: "Regional Subscription (Scoped)",
        description: "Subscription fees range from $40,000 to $160,000 USD based on regional coverage, scope, and scale required by the client."
      },
      impactMetrics: [
        { metricName: "Improved Bid Win Rate", value: "Up to 10%" },
        { metricName: "Reduction in Research Time", value: "By 50%" },
        { metricName: "Enhanced Risk Mitigation in Procurement", value: "Demonstrable" }
      ],
      aboutCompanyText: "Taiyō.Al is an advanced infra-intelligence platform designed to bring efficiency and data-driven decision-making to the global infrastructure and public procurement sectors.",
      customerSuccessStories: [
        { title: "Investment Firm Identifies Undervalued Infrastructure Assets", description: "Using Taiyō.Al's market intelligence, an investment firm successfully identified and acquired several undervalued brownfield assets, yielding significant returns.", imageURL: "https://via.placeholder.com/300x200.png?text=Taiyo.Al+Investment+Success" }
      ]
    }
  },
  {
    id: 20,
    name: "Tomorrow.io",
    subheading: "Weather and climate intelligence platform.",
    logo: "https://via.placeholder.com/100.png?text=Tomorrow.io",
    categoryId: 3,
    details: {
      overview: "Tomorrow.io is a weather intelligence and climate adaptation platform. From early warning systems to actionable insights, organizations can predict impact, mitigate risk, and ensure operational resilience with Tomorrow.io. They provide highly localized weather predictions that can cater to specific business needs on construction sites. Their proprietary technology merges data from various sources, including wireless communication networks, street cameras, satellites, traditional weather stations, and IoT devices. Using advanced data analytics and machine learning algorithms, they process this data to provide hyper-local weather predictions with higher accuracy than traditional methods. Additionally, Tommorrow.io offers protocols for various asset types, scopes of work and best practices that get pushed out when specific weather conditions are prevalent.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Natural Catastrophes"],
      stakeholdersImpacted: ["General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Construction"],
      costOriginal: "Tomorrow.io offers a yearly or multi-year subscription with a flat fee of $25,000 USD for the first site. Additional Sites would be $10,000 to $15,000 USD. The cost is driven by the of number sites monitored per year and their requirements.",
      originalDigitalCategory: ["External Event Monitoring"],
      employeeCount: "201-500 employees",
      solutionsImpactSummary: "Tomorrow.io provides hyper-local weather intelligence and climate adaptation insights, helping construction projects mitigate weather-related risks and optimize operations.",
      keySolutions: [
        { title: "Hyper-Local Weather Forecasting", description: "Access highly accurate, site-specific weather predictions using proprietary data fusion and AI." },
        { title: "Actionable Weather Insights & Alerts", description: "Receive timely alerts and operational protocols based on predicted weather conditions." },
        { title: "Climate Adaptation Planning", description: "Understand long-term climate risks and develop strategies for resilient infrastructure." }
      ],
      projectIntegrationPhases: ["Daily Work Planning", "Safety Management", "Resource Scheduling", "Long-term Site Viability Assessment"],
      risksTreatedWeb: ["Weather-Related Delays", "Safety Hazards due to Weather", "Material Damage", "Inefficient Scheduling", "Climate Change Impacts"],
      costModel: {
        type: "Site-Based Annual/Multi-Year Subscription",
        description: "Flat fee of $25,000 USD for the first site, with additional sites costing $10,000-$15,000 USD, based on monitoring needs."
      },
      impactMetrics: [
        { metricName: "Reduction in Weather-Related Downtime", value: "Up to 30%" },
        { metricName: "Improved Safety Incident Rates (Weather)", value: "Significant decrease" },
        { metricName: "Optimized Resource Allocation", value: "By 10-15%" }
      ],
      aboutCompanyText: "Tomorrow.io is the world’s leading weather and climate intelligence platform, empowering organizations to proactively manage weather-related challenges.",
      customerSuccessStories: [
        { title: "Contractor Minimizes Delays During Rainy Season", description: "By using Tomorrow.io's hyper-local forecasts, a contractor effectively planned outdoor work around rain events, significantly reducing project delays.", imageURL: "https://via.placeholder.com/300x200.png?text=Tomorrow.io+Rain+Success" }
      ]
    }
  },
  {
    id: 21,
    name: "Trusstor",
    subheading: "IoT platform for construction operations and safety.",
    logo: "https://via.placeholder.com/100.png?text=Trusstor",
    categoryId: 7,
    details: {
      overview: "Trusstor's construction operations platform combines zero-intrusion IoT technology with advanced oversight and reporting capabilities, transforming how construction sites are managed and monitored. The platform uses personal smart badges, location beacons, and equipment locators, integrating into the on-site environment to provide real-time insights. The personal smart badge and location beacons can work in unison to identify safety alerts such as tracking repeating patterns of workers to specific areas, enhancing workflow optimization. The system can also alert the worker if they are entering high risk zones based on their compliance certifications and training. Additionally, the technology identifies the exact floors where workers or equipment are located, aiding in precise site management for vertical builds. This data assists in time management and efficiency analysis, enabling managers to identify and address operational bottlenecks and streamline construction processes.",
      regions: ["US", "LATAM", "Canada", "UK&I", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Worker Injury/Safety", "Structural Integrity/Faulty Workmanship", "General Property Damage"],
      stakeholdersImpacted: ["Subcontractors", "General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Construction"],
      costOriginal: "The cost of Trusstor is 2.5 cents USD per sq.ft, per month which includes all products and services offered. This translates to roughly 0.35% of the construction value.",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "Trusstor's zero-intrusion IoT platform enhances construction site management and safety through real-time worker and equipment tracking, and automated alerts.",
      keySolutions: [
        { title: "Personal Smart Badges & Location Beacons", description: "Track worker location, identify high-risk zone entries, and monitor equipment." },
        { title: "Real-time Safety Alerts & Workflow Optimization", description: "Receive instant alerts for safety incidents and analyze worker patterns to improve efficiency." },
        { title: "Precise Floor-Level Tracking for Vertical Builds", description: "Accurately locate workers and equipment within multi-story buildings." }
      ],
      projectIntegrationPhases: ["Worker Safety Management", "Productivity Tracking", "Equipment Utilization", "Emergency Response"],
      risksTreatedWeb: ["Worker Injuries", "Inefficient Workflows", "Lost/Stolen Equipment", "Unauthorized Zone Access", "Poor Time Management"],
      costModel: {
        type: "Per Sq.Ft. Monthly Fee (Construction Value Percentage)",
        description: "Trusstor charges 2.5 cents USD per sq.ft. per month, or roughly 0.35% of the construction value, inclusive of all products and services."
      },
      impactMetrics: [
        { metricName: "Reduction in Safety Incidents", value: "Up to 25%" },
        { metricName: "Improved Labor Productivity", value: "By 10-20%" },
        { metricName: "Enhanced Emergency Response Time", value: "Faster by 30%" }
      ],
      aboutCompanyText: "Trusstor is transforming construction operations with its advanced IoT platform, providing real-time insights for safer, more efficient, and better-managed job sites.",
      customerSuccessStories: [
        { title: "High-Rise Project Improves Evacuation Time with Trusstor", description: "A contractor on a high-rise project used Trusstor's location tracking to significantly reduce evacuation drill times and improve worker accountability.", imageURL: "https://via.placeholder.com/300x200.png?text=Trusstor+Evacuation+Success" }
      ]
    }
  },
  {
    id: 22,
    name: "Vita",
    subheading: "Intelligent lifting solutions for cranes.",
    logo: "https://via.placeholder.com/100.png?text=Vita",
    categoryId: 7,
    details: {
      overview: "Vita's innovative technology empowers on-site teams, letting them lift more swiftly, streamline installation, and prioritize safety. They provide an intelligent lifting solution for cranes, amplifying the control, efficiency, and safety of load handling tasks. Their technology, the Vita Load Navigator (VLN) sits in between the crane hook and the load. The VLN uses jets to counteract the unpredictable effects of wind and weather, thereby minimizing delays. Furthermore, Vita emphasizes safety, allowing workers to operate at a safe distance and diminish reliance on taglines. They also offer precision autonomous lifting paths that can be programmed to save the crane operator time.",
      regions: ["US", "Canada", "UK&I", "Europe", "Asia", "Pacific", "LATAM"],
      risksTreatedOriginal: ["Third Party – Property Damage", "General Property Damage", "Worker Injury/Safety"],
      stakeholdersImpacted: ["General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Construction"],
      costOriginal: "Vita's customers can either buy or rent the Vita Load Navigator unit. Each unit MSPR starts from $150,000 USD - $175,000 USD for purchase. Rentals are also available from Vita and Vita's dealers that range between $5,900 USD - $8,200 USD per month.",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "Vita's Load Navigator enhances crane lifting operations, improving safety, precision, and efficiency by counteracting wind and enabling autonomous paths.",
      keySolutions: [
        { title: "Vita Load Navigator (VLN)", description: "Intelligent lifting device that uses jets to stabilize loads and counteract wind effects." },
        { title: "Enhanced Lifting Safety", description: "Allows workers to operate at a safe distance, reducing reliance on taglines." },
        { title: "Precision Autonomous Lifting", description: "Program precise, repeatable lifting paths to optimize crane operations and save time." }
      ],
      projectIntegrationPhases: ["Heavy Lifting Operations", "Material Installation", "Windy Condition Operations", "Repetitive Lifting Tasks"],
      risksTreatedWeb: ["Load Swing Accidents", "Worker Injuries from Taglines", "Weather-Related Lifting Delays", "Damage to Materials During Lift", "Inefficient Crane Operations"],
      costModel: {
        type: "Purchase or Rental",
        description: "VLN units available for purchase (MSRP $150k-$175k) or rental ($5.9k-$8.2k per month)."
      },
      impactMetrics: [
        { metricName: "Reduction in Lifting-Related Incidents", value: "Up to 70%" },
        { metricName: "Increased Lifting Speed/Efficiency", value: "By 25-50% in windy conditions" },
        { metricName: "Reduction in Crane Downtime (Weather)", value: "Significant" }
      ],
      aboutCompanyText: "Vita Inclinata Technologies is dedicated to making hazardous operations safer and more efficient through innovative load stabilization and control systems.",
      customerSuccessStories: [
        { title: "Wind Farm Construction Speeds Up with Vita VLN", description: "A wind farm construction project utilized the Vita Load Navigator to continue turbine blade installations in windy conditions, significantly reducing weather delays.", imageURL: "https://via.placeholder.com/300x200.png?text=Vita+Wind+Success" }
      ]
    }
  },
  {
    id: 23,
    name: "ClimaTwin",
    subheading: "Climate risk intelligence for infrastructure digital twins.",
    logo: "https://via.placeholder.com/100.png?text=ClimaTwin",
    categoryId: 3,
    details: {
      overview: "ClimaTwin is a climate risk intelligence solution for infrastructure assets and the built environment. By connecting complex climate models and infrastructure digital twins, their solution enables owner-operators, investors, governments, and engineers to aggregate, visualize, and analyze disparate datasets, revealing site-specific insights at the hyper-local scale of assets. ClimaTwin aggregates physical infrastructure datasets with climate models to visualize and assess how the asset will perform under acute and chronic climate hazards. Customers can create an enhanced BIM-GIS digital twin for buildings and civil projects to simulate and identify vulnerabilities to weather variables. Their goal is to help customers adapt for climate resilience to assess the asset's lifecycle.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Natural Catastrophes", "General Property Damage"],
      stakeholdersImpacted: ["Architects/Engineers", "Owners"],
      phaseOfConstructionOriginal: ["Planning & Design", "Pre-Construction", "Construction", "Post-Construction"],
      costOriginal: "The cost for ClimaTwin is a function of the quantum of data, frequency of use, and the scope and distribution of assets. ClimaTwin will work with their customers to come up with a pricing plan that fits the services required.",
      originalDigitalCategory: ["External Event Monitoring"],
      employeeCount: "1-10 employees",
      solutionsImpactSummary: "ClimaTwin integrates climate models with infrastructure digital twins to provide hyper-local climate risk intelligence, enabling resilient design and adaptation.",
      keySolutions: [
        { title: "Climate-Enhanced Digital Twins", description: "Overlay climate model data onto BIM-GIS digital twins to simulate asset performance under climate hazards." },
        { title: "Hyper-Local Climate Risk Assessment", description: "Analyze site-specific vulnerabilities to acute and chronic weather variables." },
        { title: "Resilience & Adaptation Planning", description: "Develop strategies to adapt infrastructure for long-term climate resilience throughout its lifecycle." }
      ],
      projectIntegrationPhases: ["Infrastructure Design & Planning", "Asset Management", "Climate Resilience Audits", "Investment Due Diligence"],
      risksTreatedWeb: ["Climate Change Impacts (Flooding, Heat Stress, etc.)", "Asset Vulnerability", "Infrastructure Obsolescence", "Investment Risks", "Regulatory Non-Compliance (Climate)"],
      costModel: {
        type: "Custom Pricing (Data & Scope Dependent)",
        description: "ClimaTwin pricing is tailored based on the quantum of data, frequency of use, and the scope/distribution of assets."
      },
      impactMetrics: [
        { metricName: "Improved Accuracy of Climate Risk Assessments", value: "Significant" },
        { metricName: "Enhanced Long-Term Asset Value", value: "Demonstrable through resilience planning" },
        { metricName: "Reduction in Climate-Related Losses", value: "Potential, project-dependent" }
      ],
      aboutCompanyText: "ClimaTwin provides cutting-edge climate risk intelligence, helping organizations understand and adapt to the impacts of climate change on their infrastructure assets.",
      customerSuccessStories: [
        { title: "Port Authority Assesses Sea Level Rise Impact with ClimaTwin", description: "A major port authority used ClimaTwin to model the impact of sea level rise on their assets, informing their long-term resilience strategy.", imageURL: "https://via.placeholder.com/300x200.png?text=ClimaTwin+Port+Success" }
      ]
    }
  },
  {
    id: 24,
    name: "Wint",
    subheading: "AI-powered water management and leak prevention.",
    logo: "https://via.placeholder.com/100.png?text=Wint",
    categoryId: 7,
    details: {
      overview: "Wint water management system detects and stops leaks at the source using Artificial Intelligence. It alerts you when water is leaking and can automatically shut it off. Intelligent real-time monitoring identifies sources of leaks and wastewater preventing damage, reducing consumption, and cutting the resulting carbon emissions. Wint also integrates artificial intelligence with real-time water flow analytics; its devices are installed at water ingress points and main branches, where they analyze the flow and consumption patterns. The Al has been trained on vast amounts of data and can understand typical usage patterns. Any deviation from the norm, like a sudden spike in water usage, is flagged as a potential leak, leading to an alert being sent out. The system is cloud-connected, allowing for remote monitoring and control. The system is based on technology supporting water leak detection, water waste prevention, water flow analysis, and automatic shutoff.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Water"],
      stakeholdersImpacted: ["General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Planning & Design", "Pre-Construction", "Construction", "Post-Construction"],
      costOriginal: "The cost structure includes plumbing hardware-valves, meters, WINT devices-and an annual subscription, with clients covering installation. For a typical construction project needing 10 systems, costs are approximately 0.5% contract value.",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "Wint uses AI to detect and stop water leaks at the source, preventing damage, reducing water waste, and cutting carbon emissions for construction projects and buildings.",
      keySolutions: [
        { title: "AI-Powered Leak Detection & Auto Shutoff", description: "Intelligently identify leaks and automatically shut off water to prevent damage." },
        { title: "Real-time Water Flow Analytics", description: "Monitor water consumption patterns to identify inefficiencies and abnormal usage." },
        { title: "Cloud-Connected Monitoring & Control", description: "Remotely monitor and control water systems via a cloud platform." }
      ],
      projectIntegrationPhases: ["During Construction (Water On)", "Testing & Commissioning", "Post-Construction (Operational)", "Building Management"],
      risksTreatedWeb: ["Water Damage", "High Water Bills", "Construction Delays due to Leaks", "Mold Growth", "Sustainability Non-Compliance"],
      costModel: {
        type: "Hardware + Annual Subscription (Approx. 0.5% Contract Value)",
        description: "Includes hardware (valves, meters, WINT devices) and an annual subscription. Installation covered by client. Costs typically 0.5% of contract value for 10 systems."
      },
      impactMetrics: [
        { metricName: "Reduction in Water Damage Incidents", value: "Up to 90%" },
        { metricName: "Water Consumption Savings", value: "Average 20-25%" },
        { metricName: "Insurance Premium Reduction Potential", value: "Significant" }
      ],
      aboutCompanyText: "Wint is a leader in AI-powered water management solutions, helping facilities and construction sites prevent water damage, conserve water, and operate more sustainably.",
      customerSuccessStories: [
        { title: "New Commercial Building Avoids Major Leak Catastrophe", description: "Wint's system detected a major pipe burst during off-hours in a newly constructed building, automatically shutting off water and preventing millions in damages.", imageURL: "https://via.placeholder.com/300x200.png?text=Wint+Leak+Prevention" }
      ]
    }
  },
  {
    id: 25,
    name: "Kwant",
    subheading: "Workforce management and safety platform for construction.",
    logo: "https://via.placeholder.com/100.png?text=Kwant",
    categoryId: 7,
    details: {
      overview: "Kwant is a workforce management & safety platform built to accelerate construction through productivity and safety. Using smart wearables and plug-n-play sensors, Kwant connects jobsite data and provides real-time insights & actionable reports. They deploy smart badges and wearables that capture real-time data with minimal infrastructure and combine it with workforce data (skills, training, compliance, and safe alerts), project data (schedule, BIM, and production rate), and provide actionable insights. Using a proprietary algorithm, Kwant prioritizes high-risk operations, workers, activities, and zones for stakeholders to take proactive action. While leveraging these data points, Kwant delivers a suite of functionalities designed to optimize construction and industrial project outcomes which includes, real-time analytics, productivity tracking, safety monitoring, decision-making insights, and integrative capabilities.",
      regions: ["US", "Canada", "Europe", "Asia"],
      risksTreatedOriginal: ["Worker Injury/Safety", "Third Party – Property Damage", "General Property Damage"],
      stakeholdersImpacted: ["General Contractors", "Owners"],
      phaseOfConstructionOriginal: ["Construction"],
      costOriginal: "Cost per worker, per month ranges based on the options selected. The lowest tiered price ranges from $0.50 to $11.20 USD per worker, per month and the highest tier which includes all options ranges from $1.95 to $17 USD per worker, per month. Pricing is dependant on features, number of workers, contract duration, and level of data collection with reporting.",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "11-50 employees",
      solutionsImpactSummary: "Kwant's smart wearable and sensor platform enhances construction workforce productivity and safety through real-time data, analytics, and alerts.",
      keySolutions: [
        { title: "Smart Wearables & Badges", description: "Capture real-time worker location, activity, and safety data with minimal site infrastructure." },
        { title: "AI-Powered Safety & Productivity Analytics", description: "Prioritize high-risk operations, track productivity, and identify bottlenecks using proprietary algorithms." },
        { title: "Actionable Insights & Reporting", description: "Provide stakeholders with real-time reports and alerts for proactive decision-making." }
      ],
      projectIntegrationPhases: ["Worker Onboarding & Tracking", "Site Safety Management", "Productivity Monitoring", "Emergency Evacuation", "Compliance Reporting"],
      risksTreatedWeb: ["Worker Injuries", "Low Productivity", "Inefficient Resource Allocation", "Safety Non-Compliance", "Slow Emergency Response"],
      costModel: {
        type: "Per Worker Monthly Subscription (Tiered)",
        description: "Tiered pricing from $0.50-$11.20 (basic) to $1.95-$17 (premium) USD per worker/month, based on features, worker count, duration, and data needs."
      },
      impactMetrics: [
        { metricName: "Reduction in Recordable Safety Incidents", value: "Up to 30%" },
        { metricName: "Improved Labor Productivity", value: "Average 15-20%" },
        { metricName: "Faster Emergency Mustering", value: "By up to 60%" }
      ],
      aboutCompanyText: "Kwant connects the jobsite with real-time data through its innovative workforce management and safety platform, driving efficiency and safety in construction.",
      customerSuccessStories: [
        { title: "Industrial Project Boosts Productivity by 20% with Kwant", description: "An industrial construction project implemented Kwant for workforce tracking and productivity analysis, achieving a 20% increase in overall labor productivity.", imageURL: "https://via.placeholder.com/300x200.png?text=Kwant+Productivity+Success" }
      ]
    }
  },
  {
    id: 26,
    name: "RamTech",
    subheading: "Wireless fire alarm systems for construction sites.",
    logo: "https://via.placeholder.com/100.png?text=RamTech",
    categoryId: 7,
    details: {
      overview: "Ramtech Electronics specializes in advanced technological solutions, and with their WES3 system, they have established a foothold in the realm of fire safety for construction sites and buildings. Ramtech's WES3 system is a temporary wireless fire alarm system designed primarily for construction sites. Utilizing advanced wireless technology, WES3 ensures swift communication in emergency scenarios, bolstering onsite safety. With features like medical alerts, fire detection, and evacuation functionalities, it provides comprehensive protection. The system's design is rooted in the understanding of the dynamic nature of construction sites, emphasizing easy installation, mobility, and scalability.",
      regions: ["US", "Canada", "UK&I", "LATAM", "Europe", "Asia", "Pacific"],
      risksTreatedOriginal: ["Fire"],
      stakeholdersImpacted: ["Owners", "General Contractors", "Subcontractors"],
      phaseOfConstructionOriginal: ["Construction"],
      costOriginal: "[TBD - waiting on response from company.]",
      originalDigitalCategory: ["Project IoT Backbone"],
      employeeCount: "51-200 employees",
      solutionsImpactSummary: "Ramtech's WES3 system provides robust, temporary wireless fire alarm and emergency communication solutions specifically designed for dynamic construction environments.",
      keySolutions: [
        { title: "WES3 Wireless Fire Alarm System", description: "Deploy a temporary, scalable wireless system for fire detection, medical alerts, and evacuation." },
        { title: "Swift Emergency Communication", description: "Ensure rapid communication and alerts across the job site in emergency scenarios." },
        { title: "Easy Installation & Mobility", description: "Designed for the dynamic nature of construction sites with easy setup, mobility, and scalability." }
      ],
      projectIntegrationPhases: ["Temporary Site Setup", "Ongoing Construction Phases", "Renovation Projects"],
      risksTreatedWeb: ["Fire Damage", "Slow Emergency Response", "Worker Safety in Emergencies", "Property Loss", "Regulatory Non-Compliance (Fire Safety)"],
      costModel: {
        type: "System Purchase/Rental (TBD)",
        description: "Pricing for WES3 system likely involves purchase or rental options. Specifics to be confirmed."
      },
      impactMetrics: [
        { metricName: "Improved Emergency Evacuation Times", value: "Significant reduction" },
        { metricName: "Reduction in Fire-Related Losses", value: "Substantial, project-dependent" },
        { metricName: "Enhanced Site Safety Compliance", value: "Demonstrable" }
      ],
      aboutCompanyText: "Ramtech Electronics is a leader in wireless safety solutions, with its WES3 system providing critical fire detection and emergency communication for construction sites globally.",
      customerSuccessStories: [
        { title: "Large Urban Development Site Maintains Flawless Fire Safety Record", description: "A complex urban development project utilized the WES3 system throughout its multi-year construction, ensuring rapid alerts and maintaining a perfect fire safety record.", imageURL: "https://via.placeholder.com/300x200.png?text=RamTech+Fire+Safety" }
      ]
    }
  }
];
