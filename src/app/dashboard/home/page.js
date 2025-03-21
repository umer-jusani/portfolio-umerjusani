"use client"
import UiButton from '@/shared/pure-components/button/button'
import { Stack, Typography } from '@mui/material'
import { Background, CodeTag } from './Ui'

const HomePage = () => {
    return (
        <>
            {/* Hero Section */}
            <Background spacing={2} sx={{ paddingInline: { xs: "2rem", md: "4rem" }, textAlign: { xs: "center", md: "center" } }}>
                <Stack 
                    spacing={6} 
                    sx={{ 
                        flex: '0 1 auto',
                        maxWidth: '900px',
                        alignItems: { xs: "center", md: "center" },
                    }}
                >
                    <Typography variant="h2" fontWeight={"900"} color={"text.tertiary"}>Discover my Amazing Development Space!</Typography>
                    <CodeTag sx={{  display: "flex",gap: "0.5rem" }}>
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
                {/* <Stack sx={{ display: { xs: "none", md: "flex" } }}>
                    <Image
                        style={{ width: "25rem", height: "25rem", scale: 1.1, objectFit: "contain", position: "relative", top: "-1rem" }}
                        src={AvatarImage}
                        alt="banner"
                    />
                </Stack> */}
            </Background>
        </>
    )
}

export default HomePage
