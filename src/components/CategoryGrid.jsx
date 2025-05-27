import { useEffect, useState } from "react";
import { fetchCategories } from "../services/api";
import CategoryCard from "./CategoryCard";
import Container from "./Container";

export default function CategoryGrid() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((d) => {
      setCategories(d);
      setLoading(false);
    });
  }, []);

  return (
    <section className="w-full mt-10">
      <Container>
        <h2 className="text-lg font-bold text-gray-900">Explore by Category</h2>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {loading
            ? Array.from({ length: 7 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-32 animate-pulse rounded-xl bg-gray-100"
                />
              ))
            : categories.map((cat) => <CategoryCard key={cat.id} {...cat} />)}
        </div>
      </Container>
    </section>
  );
}
