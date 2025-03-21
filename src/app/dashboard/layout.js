"use client"
import { drawerWidth } from "@/constant";
import { MenuIcon } from "@/shared/assets";
import Sidebar from "@/shared/components/sidebar/Sidebar";
import { useStore } from "@/shared/hoc/store-provider/storeContext";
import { Box, Container, IconButton, useMediaQuery } from "@mui/material";


export default function DashboardLayout({ children }) {
    const { toggleSidebar } = useStore();
    const mediaQuery = useMediaQuery('(min-width: 1070px)');

    return (
        <Box>
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <Box sx={{ width: mediaQuery ? `calc(100% - ${drawerWidth}px)` : "100%", justifySelf: "flex-end" }}>
                <IconButton sx={{ position: 'fixed', top: 15, left: 20 }} onClick={toggleSidebar}>
                    <MenuIcon sx={{ color: 'text.primary' }} fontSize="large" />
                </IconButton>
                <Container maxWidth="xxl" >
                    {children}
                </Container>
            </Box>
        </Box>
    );
}
