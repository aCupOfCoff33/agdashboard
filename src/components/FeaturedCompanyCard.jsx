export default function FeaturedCompanyCard({ company }) {
  if (!company) {
    return (
      <div className="flex flex-col items-start animate-pulse">
        <div className="w-full aspect-square rounded-lg bg-gray-100 mb-2"></div>
        <div className="h-4 bg-gray-100 rounded w-1/2 mb-1"></div>
        <div className="h-3 bg-gray-100 rounded w-3/4"></div>
      </div>
      );
    }
  }

  return (
    <div className="flex flex-col items-start">
      <div className="w-full aspect-square rounded-lg overflow-hidden mb-2">
        <img
          src={company.logo.url}
          alt={company.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-sm font-semibold leading-snug line-clamp-1">
        {company.name}
      </h4>
      {company.tagline && (
        <p className="text-xs text-gray-500 line-clamp-2 leading-snug">
          {company.tagline}
        </p>
      )}
    </div>
  );
