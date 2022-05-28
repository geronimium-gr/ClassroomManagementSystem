import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function ViewEquipments({refreshData}) {
  const [equipment, setEquipment] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/get-equipments").then((response) => {
        setEquipment(response.data);
      });    
  }, [refreshData])
  
  const columns = [
    {
      field: "equipmentName",
      headerName: "Equipment Name",
      width: 200,
      flex: 2,
    },
    { field: "quantity", headerName: "Quantity", width: 20, flex: 1 },
    { field: "roomNo", headerName: "Room No.", width: 20, flex: 1 },
    { field: "description", headerName: "Description", width: 200, flex: 2 },
    { field: "remarks", headerName: "Remarks", width: 200, flex: 2 },
  ];
  return (
    <div style={{ height: 400, padding: "40px" }}>
      <DataGrid
        rows={equipment}
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={10}
        rowsPerPageOptions={[10]}
      ></DataGrid>
    </div>
  );
}

export default ViewEquipments;
