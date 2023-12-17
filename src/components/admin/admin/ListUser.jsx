import { Box, Button, IconButton } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { useState } from "react";

export default function ListUser() {
  const columns = [
    "Name",
    "Company",
    "City",
    "State",
    {
      name: "Options",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
        return(
            <Button
                variant="contained"
                color="primary"
                onClick={()=>{
                    console.log(tableMeta.rowData[3]);
                }}
            >
            Ver
            </Button>
        )},
      },
    },
  ];

  const [responsive, setResponsive] = useState("standard");

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["Joe James", "Test Corp", "Yonkers", "NY"],
  ];

  const options = {
    filterType: "textField",
    selectableRows: "none",
    viewColumns: true,
    responsive,
    download: "false",
    print: "false",

    customBodyRender: (value, tableMeta, updateValue) => {
      const rowIndex = tableMeta.rowIndex;
      return (
        <>
          <button onClick={() => handleEdit(rowIndex)}>Edit</button>
        </>
      );
    },
  };
  const handleEdit = (rowIndex) => {
    // Lógica para manejar la edición del registro, puedes usar rowIndex para identificar el registro
    console.log(`Editar registro en el índice: ${rowIndex}`);
  };

  return (
    <>
      <Box sx={{ width: "600px" }}>
        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
        />
      </Box>
    </>
  );
}
