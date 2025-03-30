"use client"
import { pageTopSpacer, SectionHeadingVariant } from '@/constant';
import SocialMediaSpeedDial from '@/shared/components/socailIcons-speedDial/socialMediaSpeedDial';
import { SectionHeading } from '@/shared/global-styling/Ui';

import { Stack } from '@mui/material';





const About = () => {
  return (
    <Stack my={pageTopSpacer} justifyContent={"center"} alignItems={"center"}>
      <SectionHeading variant={SectionHeadingVariant}>about me</SectionHeading>


      {/* social media links */}
      <SocialMediaSpeedDial />

    </Stack>
  )
}

export default About;
