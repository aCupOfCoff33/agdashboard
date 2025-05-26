export default function CompanyCard({ name, subheading, logo }) {
  return (
    <div className="flex flex-col">
      <img
        src={logo}
        alt={name}
        className="h-40 w-full rounded-xl object-cover"
      />
      <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5">
        {name}
      </h3>
      <p className="text-xs text-gray-500 leading-4 line-clamp-2">
        {subheading}
      </p>
    </div>
  );
}
