import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { BillboardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  const formattedProducts: BillboardColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(item.createAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
