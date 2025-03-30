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
            <Stack component={"section"} overflow={"hidden"}>
                <ContainerStack spacing={flowSpacer}>
                    <SectionHeading variant={SectionHeadingVariant}>my skills</SectionHeading>
                    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} gap={3}>
                        {skills.map((item, idx) => (
                            <Tooltip title={item.title} placement='top' arrow>
                                <IconButton
                                    key={idx}
                                    sx={{
                                        mx: 3,
                                        transition: 'all 0.3s ease-in-out',
                                        borderRadius: '16px',
                                        padding: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '12px',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            scale: '1.05',
                                            boxShadow: `0 0px 10px  ${item.color} `,
                                        }
                                    }}
                                >

                                    <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                                        <Image
                                            src={item.icon}
                                            alt={`${item.title.toLowerCase()}-icon`}
                                            fill
                                            style={{
                                                objectFit: 'contain',
                                                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
                                            }}
                                        />
                                    </div>
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Stack>
                </ContainerStack>
            </Stack>
        </>
    )
}

export default HomePage
