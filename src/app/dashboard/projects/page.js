"use client"
import { pageTopSpacer, projects, SectionHeadingVariant } from '@/constant'
import ProjectCard from '@/shared/components/project-card/projectCard'
import { SectionHeading } from '@/shared/global-styling/Ui'
import { Container, Grid, Stack } from '@mui/material'


const Page = () => {

    console.log(projects, "project")

    return (
        <Container maxWidth="xl" sx={{ my: pageTopSpacer }}>
            {/* Section Heading */}
            <SectionHeading
                variant={SectionHeadingVariant}
                sx={{
                    mb: { md: 4, xs: 2 },
                    // textAlign: 'center',
                }}
            >
                Featured Projects
            </SectionHeading>

            {/* Projects Grid */}
            <Stack direction={"row"} flexWrap={"wrap"} gap={{ md: 4, xs: 1 }}>
                {projects?.map(ele => (
                    <ProjectCard ele={ele} />
                ))}
            </Stack>





        </Container>
    )
}

export default Page
