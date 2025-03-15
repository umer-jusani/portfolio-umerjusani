"use client"
import { ArticleIcon, FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MediumIcon, user } from '@/shared/assets';
import routes from '@/shared/route';
import { Badge, styled, Stack, IconButton } from '@mui/material';
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

const drawerWidth = 280;

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

export default function Sidebar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: 'background.dark',
                        color: 'text.tertiary',
                    },
                }}
                variant="permanent"
                anchor="left"
            >







                <Stack>
                    {/* User Profile */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            py: 4,
                            bgcolor: 'background.light',
                            position: 'relative',
                            gap: 1,
                            // boxShadow: '0 8px 25px 0 #12121a',
                            // backdropFilter: 'blur(2px)',
                            // borderRadius: '10px',
                            // border: '1px solid rgba(255, 255, 255, 0.18)'
                        }}
                    >

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
                    </Box>

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
                    </Stack>
                    <Divider />

                    {/* Routes */}
                    <List sx={{ height: "30rem", overflow: "auto" }}>
                        {routes.map((route, index) => (
                            <ListItem key={route.name} disablePadding>
                                <ListItemButton sx={{ py: 1.4 }}>
                                    <ListItemIcon sx={{ color: 'text.tertiary' }}>
                                        {route.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={route.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />


                    {/* Social Media Icons */}
                    <Stack
                        bgcolor={"background.light"}
                        direction="row"
                        justifyContent={"center"}
                        p={0.8}
                        position={"sticky"}
                        bottom={0}
                        width={"100%"}
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

                </Stack>
            </Drawer>
        </Box >
    );
}
