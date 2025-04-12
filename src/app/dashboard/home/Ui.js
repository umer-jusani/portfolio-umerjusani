import { bannerImage } from "@/shared/assets";

const { styled, Box } = require("@mui/material");

const CodeTag = styled(Box)(({ theme }) => ({
    gap: '4px',
    color: theme.palette.text.tertiary,
    fontSize: '1.2rem',
    fontFamily: 'monospace',
    marginBottom: '1rem',
    '& .code-tag': {
        '& .bracket': {
            color: theme.palette.text.tertiary,
        },
        '& .tag-name': {
            color: theme.palette.primary.main,
        }
    }
}));

const Background = styled(Box)(({ theme }) => ({
    position: 'relative',
    marginTop: "2rem",
    width: '100%',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingBlock: '6rem',
    '&::before': {
        content: '""',
        position: 'absolute',
        borderImage: "linear-gradient(rgba(30 30 40 / .7), rgba(30 30 40 / .7)) fill 1",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('${bannerImage.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // zIndex: -1,
    }
}));

export { CodeTag, Background };