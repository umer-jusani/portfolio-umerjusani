"use client"
import { pageTopSpacer, projects, SectionHeadingVariant } from '@/constant'
import ProjectCard from '@/shared/components/project-card/projectCard'
import { SectionHeading } from '@/shared/global-styling/Ui'
import { Container, Stack, Grid } from '@mui/material'


const Page = () => {

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
            {/* <Stack direction={"row"} flexWrap={"wrap"} gap={{ md: 4, xs: 1 }}> */}
                <Grid container spacing={3}>
                {projects?.map(ele => (
                    <ProjectCard ele={ele} />
                ))}
                </Grid>
                 
            {/* </Stack> */}





        </Container>
    )
}

export default Page
