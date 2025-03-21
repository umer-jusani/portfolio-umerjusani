import { drawerWidth } from "@/constant";

const { styled, Badge, Drawer, Box } = require("@mui/material");

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

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.tertiary,
    },
}));

const StyledUserProfile = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBlock: "32px",
    backgroundColor: theme.palette.background.light,
    position: 'relative',
    gap: 1,
}));

export { StyledBadge, StyledDrawer, StyledUserProfile };