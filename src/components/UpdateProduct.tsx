import { useUpdateProductMutation } from "@/app/service/dummyData.";

interface UpdateProductProps {
  productId: number;
}

const UpdateProduct = ({ productId }: UpdateProductProps) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (error) {
    return (
      <h1>{"status" in error ? `Error: ${error.status}` : error.message}</h1>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "Updated T-Shirt",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>

      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
