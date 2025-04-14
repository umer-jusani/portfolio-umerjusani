"use client"
import { pageTopSpacer, SectionHeadingVariant } from '@/constant'
import { DisneyClone } from '@/shared/assets'
import { SectionHeading } from '@/shared/global-styling/Ui'
import { Card, CardContent, CardMedia, Container, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';
import { ProjectCardStyles } from './Ui'

const ProjectCard = motion(Card);

const Page = () => {
    return (
        <Container maxWidth="lg" sx={{ my: pageTopSpacer }}>
            {/* Section Heading */}
            <SectionHeading 
                variant={SectionHeadingVariant} 
                sx={{ 
                    mb: 4,
                    textAlign: 'center',
                    fontSize: { xs: '2rem', md: '2.5rem' }
                }}
            >
                Featured Projects
            </SectionHeading>

            {/* Projects Grid */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        sx={ProjectCardStyles}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={DisneyClone.src}
                            alt="Disney Clone"
                            sx={{
                                objectFit: "cover"
                            }}
                        />
                        <div className="project-overlay" style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.7)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}>
                            <Stack direction="row" spacing={2}>
                                <Tooltip title="View Code">
                                    <IconButton 
                                        sx={{ 
                                            color: 'white',
                                            '&:hover': { color: 'primary.main' }
                                        }}
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Live Demo">
                                    <IconButton 
                                        sx={{ 
                                            color: 'white',
                                            '&:hover': { color: 'primary.main' }
                                        }}
                                    >
                                        <LaunchIcon />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                        </div>
                        <CardContent sx={{ p: 3 }}>
                            <Typography 
                                variant="h6" 
                                color="text.tertiary"
                                sx={{ 
                                    mb: 1,
                                    fontWeight: 600
                                }}
                            >
                                Disney+ Clone
                            </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.primary"
                                sx={{ mb: 2 }}
                            >
                                A pixel-perfect recreation of Disney+ streaming platform with modern UI and seamless user experience.
                            </Typography>
                            <Stack 
                                direction="row" 
                                spacing={1} 
                                flexWrap="wrap"
                                gap={1}
                            >
                                {['React', 'Next.js', 'Material UI', 'Firebase'].map((tech) => (
                                    <Typography
                                        key={tech}
                                        variant="caption"
                                        sx={{
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: '4px',
                                            backgroundColor: 'background.light',
                                            color: 'primary.main',
                                            fontSize: '0.75rem'
                                        }}
                                    >
                                        {tech}
                                    </Typography>
                                ))}
                            </Stack>
                        </CardContent>
                    </ProjectCard>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Page
