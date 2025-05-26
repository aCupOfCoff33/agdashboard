import { useEffect, useState } from "react";
import { fetchFeaturedCompanies } from "../services/api";
import CompanyCard from "./CompanyCard";
import Container from "./Container";

export default function FeaturedCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedCompanies().then((d) => {
      setCompanies(d);
      setLoading(false);
    });
  }, []);

  return (
    <section className="w-full mt-12">
      <Container>
        <h2 className="text-lg font-bold text-gray-900">Featured Companies</h2>

        <div className="mt-8 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-56 animate-pulse rounded-xl bg-gray-100"
                />
              ))
            : companies.map((co) => <CompanyCard key={co.id} {...co} />)}
        </div>
      </Container>
    </section>
  );
}
