import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar";
import { SideBrar } from "../components/SideBrar";


const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: "flex"}}>

       <NavBar drawerWidth={ drawerWidth }/>

        <SideBrar drawerWidth={ drawerWidth }/>

        <Box component="main"
            sx={{flexGrow: 1, p: 3}}
        >
            <Toolbar />

            { children }

        </Box>

    </Box>
  )
}
