// src/pages/CompanyDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fetchCompanyById } from '../services/companyService'; // Ensure path is correct
import Container from '../components/Container';
import { KeySolutionIcon } from '../components/KeySolutionIcon';

const waterDropletImageUrl = "https://www.svgrepo.com/download/33644/money-bag.svg";

export default function CompanyDetailPage() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);
      fetchCompanyById(id)
        .then(data => {
          if (data) {
            setCompany(data);
          } else {
            setError('Company not found.');
          }
          setLoading(false);
        })
        .catch(e => {
          setError('Failed to load company data.');
          console.error("Error fetching company details on CompanyDetailPage", e);
          setLoading(false);
        });
    }
  }, [documentId]);

  const companyCategoryDisplay = company?.details?.originalDigitalCategory
    ? (Array.isArray(company.details.originalDigitalCategory) ? company.details.originalDigitalCategory.join(', ') : company.details.originalDigitalCategory)
    : 'N/A';

  const keySolutionsCount = company?.details?.keySolutions?.length || 0;
  let keySolutionsGridCols = "lg:grid-cols-4";
  if (keySolutionsCount === 3) keySolutionsGridCols = "lg:grid-cols-3";
  else if (keySolutionsCount === 2) keySolutionsGridCols = "lg:grid-cols-2";
  else if (keySolutionsCount === 1) keySolutionsGridCols = "lg:grid-cols-1";

  const companyWebsite = company?.details?.website || "#"; // Assuming 'website' might be in details

  if (loading) return <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10"><p className="text-xl font-semibold text-slate-700 ">Loading...</p></div>;
  if (error) return <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10"><p className="text-xl text-red-600 font-semibold ">{error}</p></div>;
  if (!company) return <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10"><p className="text-xl text-slate-700 ">Company data unavailable.</p></div>;


  return (
    <div className="bg-gray-50 min-h-screen ">
      <Container className="py-8 md:py-12">
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
            <img
              className="w-28 h-28 md:w-36 md:h-36 rounded-xl object-contain bg-slate-100 p-2 ring-1 ring-slate-200"
              src={company.logo || "https://via.placeholder.com/144x144.png?text=Logo"}
              alt={`${company.name} logo`}
            />
            <div className="pt-1 flex-grow">
              <motion.a
                href={companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline group no-underline mb-1"
                initial="rest"
                whileHover="hovered"
                animate="rest"
              >
                <h1 className="text-slate-800 text-3xl md:text-4xl font-bold leading-tight group-hover:text-slate-600 group-hover:underline transition-colors duration-200">
                  {company.name}
                </h1>
                <motion.div
                  className="ml-2"
                  variants={{
                    rest:    { x: 0, y: 0, opacity: 0.6 },
                    hovered: { x: 3, y: -3, opacity: 1 }
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-slate-700 transition-colors duration-200" />
                </motion.div>
              </motion.a>

              <p className="text-slate-600 text-lg font-normal leading-normal mt-1">
                {company.subheading}
              </p>
              <p className="text-slate-500 text-sm font-normal leading-normal mt-1">
                {companyCategoryDisplay}
                {company.details.employeeCount && ` | ${company.details.employeeCount}`}
              </p>
              {company.details.regions && company.details.regions.length > 0 && (
                <p className="text-slate-500 text-sm font-normal leading-normal mt-1">
                  Regions: {company.details.regions.join(', ')}
                </p>
              )}
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-8">
            <div className="border-b border-slate-200 flex items-start gap-8">
              {[
                { key: 'about', label: `About ${company.name}` },
                { key: 'solutions', label: 'Solutions & Impact' }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-3 text-sm font-semibold transition-colors duration-150 focus:outline-none
                    ${activeTab === tab.key
                      ? 'border-b-2 border-slate-700 text-slate-800'
                      : 'text-slate-500 hover:text-slate-700 border-b-2 border-transparent'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'about' && (
              <section aria-labelledby="about-tab-heading">
                <h2 id="about-tab-heading" className="text-slate-800 text-2xl font-bold mb-4">
                  About {company.name}
                </h2>
                <div className="text-slate-700 text-base leading-relaxed prose prose-slate max-w-none mb-10">
                  <p>{company.details.overview || company.details.aboutCompanyText || "No detailed overview available."}</p>
                </div>

                {company.details.keySolutions && keySolutionsCount > 0 && (
                  <div className="mb-10">
                    <h3 className="text-slate-800 text-xl font-bold mb-5">
                      Key Features
                    </h3>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 ${keySolutionsGridCols} gap-5`}>
                      {company.details.keySolutions.map((solution, index) => (
                        <div key={index} className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col items-start text-left">
                          <KeySolutionIcon title={solution.title} />
                          <h4 className="text-slate-800 text-md font-semibold leading-tight mb-1.5">
                            {solution.title}
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {solution.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {company.details.customerSuccessStories && company.details.customerSuccessStories.length > 0 && (
                  <div>
                    <h3 className="text-slate-800 text-xl font-bold mb-5">
                      Customer Success Stories
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {company.details.customerSuccessStories.map((story, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white flex flex-col">
                          <img
                            className="w-full h-48 object-cover"
                            src={story.imageURL || "https://via.placeholder.com/300x180.png?text=Story"}
                            alt={story.title}
                          />
                          <div className="p-5 flex flex-col flex-grow">
                            <h4 className="text-slate-800 text-md font-semibold leading-snug mb-1.5">
                              {story.title}
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                              {story.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {activeTab === 'solutions' && (
              <section aria-labelledby="solutions-tab-heading">
                <h2 id="solutions-tab-heading" className="text-slate-800 text-2xl font-bold mb-4">
                  Solutions & Impact
                </h2>
                <div className="text-slate-700 text-base leading-relaxed prose prose-slate max-w-none mb-8">
                  <p>{company.details.solutionsImpactSummary || "Detailed solutions and impact summary will be provided here."}</p>
                </div>

                {company.details.phaseOfConstructionOriginal && company.details.phaseOfConstructionOriginal.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Phase of Construction</h3>
                    <div className="flex flex-wrap gap-2">
                      {company.details.phaseOfConstructionOriginal.map((phase, index) => (
                        <span key={index} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
                          {phase}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {company.details.stakeholdersImpacted && company.details.stakeholdersImpacted.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Stakeholders Impacted</h3>
                    <div className="flex flex-wrap gap-2">
                      {company.details.stakeholdersImpacted.map((stakeholder, index) => (
                        <span key={index} className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
                          {stakeholder}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {company.details.risksTreatedWeb && company.details.risksTreatedWeb.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Risks Treated</h3>
                    <div className="flex flex-wrap gap-2">
                      {company.details.risksTreatedWeb.map((risk, index) => (
                        <span key={index} className="bg-sky-100 text-sky-800 text-xs font-medium px-3 py-1.5 rounded-full">
                          {risk}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {company.details.costModel && (company.details.costModel.type || company.details.costModel.description) && (
                  <div className="mb-8 p-6 bg-slate-100 rounded-lg flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Cost</h3>
                      {company.details.costModel.type && <p className="text-md text-slate-900 font-semibold">{company.details.costModel.type}</p>}
                      {company.details.costModel.description && <p className="text-sm text-slate-600 mt-1 leading-relaxed">{company.details.costModel.description}</p>}
                    </div>
                    <div className="flex-shrink-0">
                      <img
                        src={waterDropletImageUrl}
                        alt="Cost model illustration"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-75"
                      />
                    </div>
                  </div>
                )}

                {company.details.impactMetrics && company.details.impactMetrics.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Impact</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {company.details.impactMetrics.map((metric, index) => (
                        <div key={index} className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm text-center">
                          <p className="text-sm font-medium text-slate-600 mb-1">{metric.metricName}</p>
                          <p className="text-2xl font-bold text-slate-800">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}