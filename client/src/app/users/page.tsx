"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "E-Mail", width: 200 }, // Translated to German
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4">Wird geladen...</div>; // Translated to German
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">Fehler beim Abrufen der Benutzer</div> 
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Benutzer" /> 
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Users;
