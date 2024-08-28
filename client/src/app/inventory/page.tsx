"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef, GridValueGetter } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Produktname", width: 200 },
  {
    field: "price",
    headerName: "Preis",
    width: 110,
    type: "number",
    valueGetter: (params: GridValueGetter) => `$${params.row.price}`, // Changed to GridValueGetter
  },
  {
    field: "rating",
    headerName: "Bewertung",
    width: 110,
    type: "number",
    valueGetter: (params: GridValueGetter) => params.row.rating ? params.row.rating : "Nicht verfügbar", // Changed to GridValueGetter
  },
  {
    field: "stockQuantity",
    headerName: "Lagerbestand",
    width: 150,
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Laden...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Fehler beim Abrufen der Produkte
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Bestand" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Inventory;
