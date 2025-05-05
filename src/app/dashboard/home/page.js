"use client"
import { flowSpacer, SectionHeadingVariant, skills } from '@/constant'
import { ContainerStack, SectionHeading } from '@/shared/global-styling/Ui'
import UiButton from '@/shared/pure-components/button/button'
import { IconButton, Stack, Tooltip, Typography } from '@mui/material'
import Image from 'next/image'
import { Background, CodeTag } from './Ui'



const HomePage = () => {
    return (
        <>
            {/* Hero Section */}
            <Background spacing={2} sx={{ paddingInline: { xs: "2rem", md: "4rem" }, textAlign: { xs: "center", md: "center" }, height: "90vh" }}>
                <Stack
                    spacing={6}
                    sx={{
                        // flex: '0 1 auto',
                        maxWidth: '900px',
                        alignItems: { xs: "center", md: "center" },
                        zIndex: 1,
                    }}
                >
                    <Typography variant="h2" fontWeight={"900"} color={"text.tertiary"}>Discover my Amazing Development Space!</Typography>
                    <CodeTag sx={{ display: "flex", gap: "0.5rem" }}>
                        <span className="code-tag">
                            <span className="bracket">&lt;</span>
                            <span className="tag-name">code</span>
                            <span className="bracket">&gt;</span>
                        </span>
                        I build progressive and scalable Web Apps.
                        <span className="code-tag">
                            <span className="bracket">&lt;/</span>
                            <span className="tag-name">code</span>
                            <span className="bracket">&gt;</span>
                        </span>
                    </CodeTag>
                    <UiButton variant='contained' sx={{ width: "fit-content" }}>Explore Now</UiButton>
                </Stack>
            </Background>


            {/* Skills Moving Cards Section */}
          
        </>
    )
}

export default HomePage
