import ProductCard from "./components/ProductCard";
import Sidebar3 from "./components/Sidebar3";
import { data } from "./db/data";
import { useFilterStore } from "./store/store2";

interface Product {
  id: string;
  country: string;
  img: Record<string, string>;
  price: number;
}

function App() {
  const {
    selectedCountries,
    clearFilters,
    selectedColors,
    selectedPriceRange,
    setSelectedColors,
    setSelectedCountries,
    setSelectedPriceRange,
  } = useFilterStore();

  const filteredData = data.filter((item: Product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColor && matchesCountry && matchesPrice;
  });

  return (
    <>
      <Sidebar3 />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {filteredData.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
