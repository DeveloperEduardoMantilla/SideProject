import { Box, Container } from "@mui/material";
import HeaderAdmin from "../../../components/shared/HeaderAdmin.jsx";
import TableUser from "../../../components/admin/admin/TableUser.jsx";
import TablePermitApplication from "../../../components/admin/admin/TablePermitApplication.jsx";
import TableValidateCv from "../../../components/admin/admin/TableValidateCv.jsx";
import Statistics from "../../../components/admin/admin/Statistics.jsx";
export default function DashboardTest() {
  return (
    <>
      <HeaderAdmin />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Container>
          <Statistics />
          <TableValidateCv />
          <TableUser />
          <TablePermitApplication />
        </Container>
      </Box>
    </>
  );
}
