import { companies } from "../data/companyData"; // adjust path if needed

const [filteredCompanies, setFilteredCompanies] = useState(companies);

const [searchTerm, setSearchTerm] = useState("");
const [selectedRisks, setSelectedRisks] = useState(new Set());
const [selectedDigitalCategories, setSelectedDigitalCategories] = useState(new Set());
const [categoryType, setCategoryType] = useState("tech"); // or "digital"

