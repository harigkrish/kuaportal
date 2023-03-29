import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";


const Dashboard = () => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
     

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
       

        {/* ROW 2 */}
       

        {/* ROW 3 */}
        
      </Box>
    </Box>
  );
};

export default Dashboard;
