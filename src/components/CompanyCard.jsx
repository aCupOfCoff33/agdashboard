export default function CompanyCard({ name, subheading, logo }) {
  return (
    <div className="flex flex-col">
      <img
        src={logo || 'https://via.placeholder.com/300x200.png?text=No+Logo'} // Added fallback
        alt={name}
        className="h-40 w-full rounded-xl object-contain bg-gray-100 p-2" // Changed to object-contain
      />
      <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5">
        {name}
      </h3>
      <p className="mt-1 text-xs text-gray-500 leading-4 line-clamp-2">
        {subheading}
      </p>
    </div>
  );
}
