"use client"
import { belowHeadSpacerBottom, pageTopSpacer, projects, SectionHeadingVariant } from '@/constant'
import ProjectCard from '@/shared/components/project-card/projectCard'
import { SectionHeading, SubSectionHeading } from '@/shared/global-styling/Ui'
import { Container, Stack, Grid } from '@mui/material'


const Page = () => {

    return (
        <Container maxWidth="xl" sx={{ my: pageTopSpacer }}>
            {/* Section Heading */}
            {/* <SectionHeading
                variant={SectionHeadingVariant}
                sx={belowHeadSpacerBottom}
            >
                Featured Projects
            </SectionHeading> */}
            <SubSectionHeading variant="h4">
                Featured Projects
            </SubSectionHeading>

            {/* Projects Grid */}
            {/* <Stack direction={"row"} flexWrap={"wrap"} gap={{ md: 4, xs: 1 }}> */}
            <Grid container spacing={{ md: 3, xs: 2 }}>
                {projects?.map(ele => (
                    <ProjectCard ele={ele} />
                ))}
            </Grid>

            {/* </Stack> */}





        </Container>
    )
}

export default Page
