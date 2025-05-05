"use client"
import { flowSpacer, SectionHeadingVariant } from '@/constant'
import BasicInquiryForm from '@/shared/components/contact-form/basic-inquiry-form/basicInquiryForm'
import { SectionHeading } from '@/shared/global-styling/Ui'
import { Container, Stack, Box } from '@mui/material'

const ContactPage = () => {
    return (
        <Container maxWidth={"xl"} sx={{ paddingBlock: "2rem" }}  >
            <Stack spacing={flowSpacer} alignItems={"center"} justifyContent={"center"} >
                <SectionHeading variant={SectionHeadingVariant}>Contact Me</SectionHeading>

                {/* Form Section */}
                <Box width={"min(650px, 100%)"}>
                <BasicInquiryForm />
                </Box>
                 
            </Stack>

        </Container>
    )
}

export default ContactPage
