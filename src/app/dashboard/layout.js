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
            <Box sx={{ width: mediaQuery ? `calc(100% - ${drawerWidth}px)` : "100%", justifySelf: "flex-end", backgroundColor: '#1E1E29' }}>
                {!mediaQuery && (
                    <IconButton sx={{ position: 'fixed', top: 30, right: 30, zIndex: 1000 }} color="text.tertiary" onClick={toggleSidebar}>
                        <MenuIcon sx={{ color: 'text.tertiary' }} fontSize="medium" />
                    </IconButton>
                )}

                <Container maxWidth="xxl" >
                    {children}
                </Container>
            </Box>
        </Box>
    );
}
