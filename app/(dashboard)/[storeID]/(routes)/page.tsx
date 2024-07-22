import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeID: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: parseInt(params.storeID, 10).toString(),
    },
  });
  return <div>Active Store: {store?.name}</div>;
};
export default DashboardPage;
