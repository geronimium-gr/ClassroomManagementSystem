import React, { useState } from "react";
import AddEquipment from '../src/AddEquipment/AddEquipment'
import ViewEquipments from './ViewEquipments/ViewEquipments';

function App() {
  const [refreshData, setRefreshData] = useState(false);
  const refreshToggle = () => setRefreshData(!refreshData);

  return (
    <div>
      <AddEquipment refreshData={refreshData} refreshToggle={refreshToggle} />
      <ViewEquipments refreshData={refreshData} />
    </div>
  );
}

export default App;
