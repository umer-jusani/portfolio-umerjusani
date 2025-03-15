import Sidebar from "@/shared/components/sidebar/Sidebar";
import { Box } from "@mui/material";


export default function DashboardLayout({ children }) {
    return (
        <Box>
            {/* Sidebar */}
            <Sidebar />
            {/* header */}
            {/* <Header /> */}
            {/* main content */}
            {children}
        </Box>
    );
}
