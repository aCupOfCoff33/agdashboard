import * as Icons from "lucide-react";

export default function CategoryCard({ title, description, icon }) {
  const Icon = Icons[icon] || Icons.Box;
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-md">
      <Icon className="h-6 w-6 text-gray-700" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-5">
        {title}
      </h3>
      <p className="mt-1 text-xs text-gray-500 leading-4 line-clamp-3">
        {description}
      </p>
    </div>
  );
}
