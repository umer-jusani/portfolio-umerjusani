import { ContainerSpacerY } from "@/constant"
import { Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

export const SectionHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.tertiary,
    fontWeight: "550",
    background: `linear-gradient(to right, ${theme.palette.text.tertiary}, #77777b 8ch)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textTransform: "capitalize",
}))


export const ContainerStack = styled(Stack)(({ theme }) => ({
    paddingBlock: ContainerSpacerY,
    alignItems: "center"
}))


export const SubSectionHeading = styled(Typography)(({ theme }) => ({
    position: 'relative',
    width: "fit-content",
    fontWeight: 600,
    marginBottom: "45px",
    color: theme.palette.text.secondary,
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #ffc107 0%, rgba(255, 193, 7, 0.2) 100%)',
        borderRadius: '2px',
    }
}))
