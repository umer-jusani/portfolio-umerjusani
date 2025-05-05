"use client";
import { Card, CardContent, CardMedia, IconButton, Stack, Tooltip, Typography, Grid } from '@mui/material'
import { motion } from 'framer-motion';
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { ProjectCardStyles } from '@/app/dashboard/projects/Ui';
import { LanguageIcon } from '@/shared/assets';
import 'animate.css';

const AnimProjectCard = motion(Card);

const ProjectCard = ({ ele = {} }) => {
    return (
        <Grid item lg={4} sm={6} xs={12}>
            <AnimProjectCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={ProjectCardStyles}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={ele.image}
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
                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <Typography
                            variant="h6"
                            color="text.tertiary"
                            sx={{
                                mb: 1,
                                fontWeight: 600
                            }}
                        >
                            {ele.title}
                        </Typography>
                        <IconButton
                            className='animate__animated animate__shakeX'
                            sx={{
                                color: 'primary.main',
                                opacity: "0.7",
                            }}
                            onClick={() => window.open(ele.link, "_blank")}
                        >
                            <LanguageIcon />
                        </IconButton>
                    </Stack>
                    <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mb: 2 }}
                    >
                        {ele.description}
                    </Typography>
                    <Stack
                        direction="row"
                        // spacing={1} 
                        flexWrap="wrap"
                        gap={1}
                    >
                        {ele.technologies.map((tech) => (
                            <Typography
                                key={tech.title}
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
                                {tech.title}
                            </Typography>
                        ))}
                    </Stack>
                </CardContent>
            </AnimProjectCard>
        </Grid>
    )
}

export default ProjectCard
