interface ProductInfoProps {
  product: {
    name: string;
    description: string;
    price: string;
    rating: number;
    imageUrl: string;
  };
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { name, description, price, rating, imageUrl } = product;

  const renderStars = (rating: number) => {
    const starts = [];
    for (let i = 0; i < 5; i++) {
      starts.push(
        <span
          key={i}
          className={`text-lg ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          &#9733;
        </span>
      );
    }

    return starts;
  };

  return (
    <div className="flex items-center w-[30rem] m-[2rem] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-52 h-56 bg-cover rounded-t-lg"
      />

      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mt-4 px-4">
          {name}
        </h2>
        <p className="text-sm text-gray-600 mt-2 px-4">{description}</p>
        <p className="text-lg font-bold text-gray-900 mt-3 px-4">{price}</p>
        <div className="flex mt-2 p-4">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
