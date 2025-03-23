"use client"
import { ContainerSpacerY, SectionHeadingVariant } from '@/constant'
import ContactTabPanel from '@/shared/components/contact-tab-panel/contactTabPanel'
import { SectionHeading } from '@/shared/global-styling/Ui'
import { Box, Container } from '@mui/material'

const ContactPage = () => {
    return (
        <Container maxWidth={"xl"} sx={{ paddingBlock: "2rem" }}>
            <SectionHeading variant={SectionHeadingVariant}>Contact Me</SectionHeading>

            {/* Form Section */}
            <ContactTabPanel />

        </Container>
    )
}

export default ContactPage
