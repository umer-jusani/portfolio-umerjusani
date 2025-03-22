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
    // textAlign: "center",
}))


export const ContainerStack = styled(Stack)(({ theme }) => ({
    paddingBlock: ContainerSpacerY
}))
