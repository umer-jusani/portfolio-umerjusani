"use client"
import { ContainerSpacerY, flowSpacer, SectionHeadingVariant } from '@/constant'
import BasicInquiryForm from '@/shared/components/contact-form/basic-inquiry-form/basicInquiryForm'
import JobInquiryForm from '@/shared/components/contact-form/job-inquiry-form/jobInquiryForm'
import ProjectInquiryForm from '@/shared/components/contact-form/project-inquiry-form/projectInquiryForm'
import ContactTabPanel from '@/shared/components/contact-tab-panel/contactTabPanel'
import { SectionHeading } from '@/shared/global-styling/Ui'
import { Box, Container, Stack } from '@mui/material'

const ContactPage = () => {
    return (
        <Container maxWidth={"xl"} sx={{ paddingBlock: "2rem" }}  >
            <Stack spacing={flowSpacer} alignItems={"center"} justifyContent={"center"} >
                <SectionHeading variant={SectionHeadingVariant}>Contact Me</SectionHeading>

                {/* Form Section */}
                <ContactTabPanel>
                    {/* Basic Inquiry Form */}
                    <BasicInquiryForm />
                    {/* Project Inquiry Form */}
                    <ProjectInquiryForm />
                    {/* Job Inquiry Form */}
                    <JobInquiryForm />
                </ContactTabPanel>
            </Stack>

        </Container>
    )
}

export default ContactPage
