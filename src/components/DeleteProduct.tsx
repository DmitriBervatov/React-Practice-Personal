import { useDeleteProductMutation } from "@/app/service/dummyData.";

const DeleteProduct = ({ productId }: { productId: number }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();

  if (error) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1>{data?.title ? `${data.title} successfully delted` : ""}</h1>

      <button onClick={handleDelete} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
