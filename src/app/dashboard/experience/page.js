"use client";

import { belowHeadSpacerBottom, pageTopSpacer, SectionHeadingVariant } from '@/constant'
import { SectionHeading } from '@/shared/global-styling/Ui'
import { Box, Card, CardContent, Container, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react'
import { motion } from 'framer-motion';
import 'animate.css';

const experiences = [
    {
        company: 'Invention & Innovation',
        role: 'Frontend Developer',
        date: '15 Jan 2025 - Present',
        details: [
            'Built and maintained modern web applications using React.js, Next.js, and TypeScript with a focus on performance and scalability.',
            'Worked on real-time dashboards, secure payment integrations, and authentication systems.',
            'Developed a smart Chrome extension to automate job applications using AI and API integrations.',
        ],
    },
    {
        company: 'XtecSoft',
        role: 'Frontend Developer',
        date: '6 Mar 2024 - 18 Dec 2024',
        details: [
            'Communicated with backend developers to implement API integrations.',
            'Integrated AWS, Azure, and Google Drive with the project.',
            'Used third-party libraries to meet client requirements.',
            'Created reusable helper functions for optimized and readable code.',
        ],
    },
    {
        company: 'PNC Solutions',
        role: 'Frontend Developer Intern',
        date: '19 Oct 2023 - 19 Jan 2023',
        details: [
            'Worked on WordPress customization projects.',
            'Built applications using React frameworks, demonstrating solid understanding of React principles.',
            'Researched and applied modern UI trends and technologies.',
        ],
    },
];

const Experience = () => {
    return (
        <Container maxWidth="xl" sx={{ my: pageTopSpacer }}>
            {/* Section Heading */}
            <SectionHeading variant={SectionHeadingVariant} sx={belowHeadSpacerBottom}>My Experience</SectionHeading>

            <Stack spacing={3}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="animate__animated animate__fadeInUp"
                        transition={{ delay: index * 0.3 }}
                    >
                        <Card sx={{ borderRadius: 3, boxShadow: 3, transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.05)', boxShadow: 8 } }}>
                            <CardContent>
                                <Box display={{ md: "flex" }} justifyContent="space-between" alignItems="center" mb={1}>
                                    <Typography variant="h6" color={"text.tertiary"}>{exp.company}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {exp.date}
                                    </Typography>
                                </Box>
                                <Typography variant="subtitle1" color="text.secondary" fontStyle="italic">
                                    {exp.role}
                                </Typography>
                                <List dense>
                                    {exp.details.map((point, i) => (
                                        <ListItem key={i} disablePadding>
                                            <ListItemText primary={`• ${point}`} />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </Stack>
        </Container>
    );
}

export default Experience;