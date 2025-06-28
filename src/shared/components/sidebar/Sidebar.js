"use client"
import { drawerWidth } from '@/constant';
import { CloudUploadIcon, FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MediumIcon, user } from '@/shared/assets';
import routes from '@/shared/route';
import { IconButton, Stack, useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { StyledBadge, StyledDrawer, StyledUserProfile } from './Ui';
import { useStore } from '@/shared/hoc/store-provider/storeContext';


export default function Sidebar() {
    const pathname = usePathname();
    const { isSidebarOpen, toggleSidebar } = useStore();
    const mediaQuery = useMediaQuery('(min-width: 1070px)');

    return (
        <Box>
            <CssBaseline />
            <StyledDrawer open={isSidebarOpen} variant={mediaQuery ? "permanent" : "persistant"} anchor="left" onClose={toggleSidebar}>
                <Stack sx={{ position: "relative", justifyContent: 'space-between' }}>
                    <Box>
                        {/* User Profile */}
                        <StyledUserProfile>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={user.src}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
                                    }}
                                />
                            </StyledBadge>
                            <Stack direction="column" spacing={0.05} textAlign="center">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: 'text.tertiary',
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    Umer Jusani
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.primary',
                                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    Front-end Engineer
                                </Typography>
                            </Stack>
                        </StyledUserProfile>

                        {/* Residency */}
                        <Stack p={3} spacing={1}>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="subtitle2">Residence:</Typography>
                                <Typography variant="subtitle2" color='text.primary'>Pakistan</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="subtitle2">City:</Typography>
                                <Typography variant="subtitle2" color='text.primary'>Karachi</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="subtitle2">Age:</Typography>
                                <Typography variant="subtitle2" color='text.primary'>21</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="subtitle2">Resume:</Typography>
                                <Typography variant="subtitle2" color='text.primary'>
                                    <a href="/umer-jusani-cv.pdf" download style={{ textDecoration: 'none' }}>
                                        <IconButton sx={{ padding: 0 }}>
                                            <CloudUploadIcon fontSize='10' sx={{ color: 'text.primary' }} />
                                        </IconButton>
                                    </a>
                                </Typography>
                            </Stack>
                        </Stack>
                        <Divider />

                        {/* Routes */}
                        <List sx={{ mt: 1, }} >
                            {routes.map((route, index) => {
                                const isSelected = pathname === route.path;
                                return (
                                    <ListItem key={route.name} disablePadding>
                                        <Link href={route.path} style={{ width: '100%', textDecoration: 'none' }}>
                                            <ListItemButton
                                                sx={{
                                                    py: 1.4,
                                                    color: isSelected ? 'primary.main' : 'text.tertiary',
                                                    bgcolor: isSelected ? 'background.light' : 'transparent',
                                                    '&:hover': {
                                                        bgcolor: 'background.light',
                                                        color: 'primary.main',
                                                        transition: 'all 0.3s ease-in-out',
                                                        '& .MuiListItemIcon-root': {
                                                            color: 'primary.main',
                                                            transition: 'all 0.3s ease-in-out',
                                                        }
                                                    },
                                                    '& .MuiListItemIcon-root': {
                                                        color: isSelected ? 'primary.main' : 'text.tertiary',
                                                    },
                                                    borderRight: isSelected ? '3px solid' : 'none',
                                                    borderColor: 'primary.main',
                                                }}
                                            >
                                                <ListItemIcon>
                                                    {route.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={route.name}
                                                    sx={{
                                                        '& .MuiTypography-root': {
                                                            fontWeight: isSelected ? 600 : 400,
                                                        }
                                                    }}
                                                />
                                            </ListItemButton>
                                        </Link>
                                    </ListItem>
                                );
                            })}
                        </List>



                    </Box>
                </Stack>

                {/* Social Media Icons */}
                <Stack
                    bgcolor={"background.light"}
                    direction="row"
                    justifyContent={"center"}
                    p={0.8}
                    width={"100%"}
                    position={"sticky"}
                    bottom={0}
                    sx={{ mt: 'auto' }}
                >
                    <IconButton>
                        <InstagramIcon fontSize='10' sx={{ color: 'text.primary' }} />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon fontSize='10' sx={{ color: 'text.primary' }} />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon fontSize='10' sx={{ color: 'text.primary' }} />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon fontSize='10' sx={{ color: 'text.primary' }} />
                    </IconButton>
                    <IconButton>
                        <MediumIcon fontSize='10' sx={{ color: 'text.primary' }} />
                    </IconButton>
                </Stack>
            </StyledDrawer>

        </Box >
    );
}
