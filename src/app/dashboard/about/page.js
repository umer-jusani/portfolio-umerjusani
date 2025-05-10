"use client"
import { pageTopSpacer } from '@/constant';
import SocialMediaSpeedDial from '@/shared/components/socailIcons-speedDial/socialMediaSpeedDial';
import { SubSectionHeading } from '@/shared/global-styling/Ui';
import ModalWrapper from '@/shared/pure-components/modalwrapper/modalWrapper';
import { ArrowRight, ExpandMore, Rocket } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Container, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material';
import { useState } from 'react';


const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Container maxWidth="lg" sx={{ my: pageTopSpacer }}>

      {/* Level Up Chip */}
      <Box
        sx={{
          position: 'fixed',
          top: '50px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <Chip
          icon={<Rocket sx={{ fontSize: 20 }} />}
          label="How I Level Up Every Day"
          onClick={handleOpenModal}
          color="primary"
          sx={{
            p: 2,
            height: 'auto',
            backdropFilter: 'blur(8px)',
            // backgroundColor: 'rgba(25, 118, 210, 0.9)',
            color: 'text.black',
            boxShadow: 3,
            '& .MuiChip-label': {
              fontSize: '0.9rem',
              // py: 0.5
            },
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: 4,
              backgroundColor: 'primary.main'
            }
          }}
        />
      </Box>

      {/* Level Up Modal */}
      {/* <LevelUpModal open={modalOpen} handleClose={handleCloseModal} /> */}

      <ModalWrapper open={modalOpen} close={handleCloseModal} title="How I Level Up Every Day">
        <Typography variant="body2" textAlign={'center'} paragraph>
          For me, coding is more than just writing lines of code—it's about getting better every single day. Here's what keeps me going:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
            </ListItemIcon>
            <Typography sx={{ color: 'text.secondary' }} variant='body2'>Picking up something new daily—because tech never stops evolving.</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
            </ListItemIcon>
            <Typography sx={{ color: 'text.secondary' }} variant='body2'>Finding and implementing smarter, cleaner ways to write code.</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
            </ListItemIcon>
            <Typography sx={{ color: 'text.secondary' }} variant='body2'>Using the right React design patterns where they actually make sense.</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
            </ListItemIcon>
            <Typography sx={{ color: 'text.secondary' }} variant='body2'>Keeping everything consistent, so the project feels polished and professional.</Typography>
          </ListItem>
        </List>
        <Typography variant="body2" textAlign={'center'} sx={{ mt: 2 }}>
          It's all about growing, refining, and making every project better than the last.
        </Typography>
      </ModalWrapper>

      {/* Introduction */}
      <Stack spacing={14}>
        <Stack spacing={{ md: 5, xs: 2 }} alignItems="center">
          <SubSectionHeading variant="h4">
            Introduction
          </SubSectionHeading>
          <Typography variant="body1" paragraph color={'text.secondary'}>
            Hi, I'm Muhammad Umer Jusani, a passionate Frontend Developer with 1.5 years of experience crafting high-performance web and mobile applications. I specialize in React.js, Next.js, React Native, and modern UI libraries like Material UI and Tailwind CSS.
            <br />
            <br />
            My expertise includes responsive design, performance optimization, API integrations, authentication systems, and cloud storage solutions. I've worked with Stripe, Appwrite, Firebase, and Azure Microsoft B2C to create seamless and secure user experiences.
            <br />
            <br />
            As a problem-solver and creative thinker, I thrive on building scalable, user-friendly solutions that drive business success. From developing portfolio websites to building complex web and mobile applications, I'm always eager to learn and contribute to impactful projects.
          </Typography>
        </Stack>

        {/* Learning Platforms */}
        <Stack spacing={{ md: 5, xs: 2 }} alignItems="center">
          <SubSectionHeading variant="h4">
            Learning Platforms
          </SubSectionHeading>
          <Stack spacing={1} width="100%" alignItems="flex-start">
            <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <strong>Codedamn</strong> – Solving challenging problems with the best approaches.
            </Typography>
            <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <strong>Medium</strong> – Reading and writing articles on best coding practices, simplifying code, and making it more readable and scalable.
            </Typography>
            <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <strong>Kevin Powell (YouTube)</strong> – Learning modern CSS techniques and best practices.
            </Typography>
            <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <strong>Cosden Solutions (YouTube)</strong> – Best channel for React developers.
            </Typography>
          </Stack>
        </Stack>

        {/* Tools I Use  */}
        <Stack spacing={{ md: 5, xs: 2 }} alignItems="center">
          <SubSectionHeading variant="h4">
            The Tools I Use
          </SubSectionHeading>
          <Stack spacing={1} width="100%" alignItems="flex-start">
            <Stack spacing={1} width="100%">
              <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <strong>Cursor AI Code Editor</strong> – My go-to coding assistant that has significantly boosted my development speed and productivity.
              </Typography>
              <List sx={{ pl: 8 }}>
                <ListItem sx={{ display: 'flex', alignItems: 'flex-start', p: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: '32px' }}>
                    <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                  </ListItemIcon>
                  <Typography variant="body1">
                    Reduces human effort by suggesting optimized code snippets.
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: 'flex', alignItems: 'flex-start', p: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: '32px' }}>
                    <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                  </ListItemIcon>
                  <Typography variant="body1">
                    I let Cursor write code when I know the approach, helping me focus on logic instead of syntax.
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: 'flex', alignItems: 'flex-start', p: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: '32px' }}>
                    <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                  </ListItemIcon>
                  <Typography variant="body1">
                    No need to constantly look up syntax—Cursor provides smart suggestions on the go.
                  </Typography>
                </ListItem>
              </List>
            </Stack>
            <Typography variant="body1" color={'text.secondary'} sx={{ pl: 8 }}>
              With Cursor AI, I can code faster, stay focused, and build better applications without unnecessary distractions.
            </Typography>
          </Stack>
        </Stack>

        {/* Types of Projects I Have Worked On */}
        <Stack spacing={{ md: 5, xs: 2 }} alignItems="center">
          <SubSectionHeading variant="h4">
            Types of Projects I Have Worked On
          </SubSectionHeading>
          <Stack spacing={1} width="100%" alignItems="flex-start">
            <Accordion sx={{ width: '100%' }}>
              <AccordionSummary expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}>
                <Typography variant="body1" color={'text.secondary'} fontWeight={"bold"}>
                  XtecSoft Experience (ioMovo – Cloud Storage Platform)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* <Stack spacing={10}> */}
                <Stack spacing={3} >
                  <Typography variant="body2" color={'text.secondary'}>
                    At XtecSoft, I played a key role in developing ioMovo, a cloud storage platform similar to Google Drive but with unique capabilities.
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center' }}>
                      <ArrowRight sx={{ color: 'primary.main', fontSize: 22 }} />
                      ioHub – Unified Cloud Storage Integration
                    </Typography>
                    <Typography variant="body2" color={'text.primary'} sx={{ pl: 2 }}>
                      Developed ioHub, which integrates multiple external cloud platforms like AWS, Azure, and Google Drive.
                      Implemented a feature that allows users to authenticate and list all their files from a selected cloud provider.
                    </Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center' }}>
                      <ArrowRight sx={{ color: 'primary.main', fontSize: 22 }} />
                      ioFlow – File Status Tracking System
                    </Typography>
                    <Typography variant="body2" color={'text.primary'} sx={{ pl: 2 }}>
                      Designed and built the ioFlow section, allowing users to assign statuses (Needs Review, In Progress, Approved) to files and track them efficiently.
                    </Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center' }}>
                      <ArrowRight sx={{ color: 'primary.main', fontSize: 22 }} />
                      Advanced React Development
                    </Typography>
                    <Typography variant="body2" color={'text.primary'} sx={{ pl: 2 }}>
                      Created complex features using different React design patterns to ensure scalability and maintainability.
                      Built helper functions to optimize performance and enhance reusability.
                    </Typography>
                  </Stack>
                </Stack>
                {/* </Stack> */}
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ width: '100%' }}>
              <AccordionSummary expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}>
                <Typography variant="body1" color={'text.secondary'} sx={{ fontWeight: 'bold' }}>
                  PNC Solutions Experience
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  <Typography variant="body1" color={'text.secondary'}>
                    At PNC Solutions, I primarily focused on learning from senior developers and working on sample projects to enhance my technical skills.
                  </Typography>
                  <List>
                    <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <Typography variant="body1">
                        Explored different development approaches and best practices.
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <Typography variant="body1">
                        Created small-scale projects for practice.
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: '32px' }}>
                        <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                      </ListItemIcon>
                      <Typography variant="body1">
                        Couldn't continue working there due to a different tech stack from my primary expertise.
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ width: '100%' }}>
              <AccordionSummary expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}>
                <Typography variant="body1" color={'text.secondary'} sx={{ fontWeight: 'bold' }}>
                  Invention & Innovation (Current Role)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>

                <Stack spacing={3}>
                  {/* WindtechPro */}
                  <Stack spacing={1}>
                    <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center' }}>
                      <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                      WintechPro
                    </Typography>
                    {/* <Typography variant="body1" color={'text.secondary'} sx={{ pl: 2 }}>
                    A comprehensive web application focused on providing seamless user experience and modern UI/UX.
                  </Typography> */}
                    <List sx={{ pl: 2, py: 0 }}>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Developed and maintained frontend with focus on performance optimization
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Implemented responsive UI using React.js and Material-UI
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Integrated RESTful APIs and optimized data fetching patterns
                        </Typography>
                      </ListItem>
                    </List>
                  </Stack>

                  {/* TenderPro */}
                  <Stack spacing={1}>
                    <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center' }}>
                      <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                      TenderPro (Under Development)
                    </Typography>
                    {/* <Typography variant="body2" color={'text.secondary'} sx={{ pl: 2 }}>
                    A B2B platform enabling companies to list and participate in tender bidding processes.
                  </Typography> */}
                    <List sx={{ pl: 2, py: 0 }}>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Built robust frontend architecture using Next.js and TypeScript
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Integrated Stripe Payment Gateway with Setup Intent for secure transactions
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Implemented role-based authentication system with multiple user types
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Created interactive dashboards with real-time analytics and statistics.
                        </Typography>
                      </ListItem>
                    </List>
                  </Stack>

                  {/* extension */}
                  {/* TenderPro */}
                  <Stack spacing={1}>
                    <Typography variant="body1" color={'text.secondary'} sx={{ display: 'flex', alignItems: 'center' }}>
                      <ArrowRight sx={{ color: 'primary.main', fontSize: 20 }} />
                      Smart Job Apply Extension (LinkedIn & Indeed)
                    </Typography>
                    {/* <Typography variant="body2" color={'text.secondary'} sx={{ pl: 2 }}>
                    A B2B platform enabling companies to list and participate in tender bidding processes.
                  </Typography> */}
                    <List sx={{ pl: 2, py: 0 }}>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Developed a Chrome extension that automates job applications on LinkedIn and Indeed with a single click.
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Built a companion website to collect user context and preferences.
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Leveraged ChatGPT API to dynamically generate answers to job application questions in real-time.
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                        <Typography variant="body2">
                          Implemented seamless autofill functionality, eliminating the need for manual input during job applications.
                        </Typography>
                      </ListItem>
                    </List>
                  </Stack>
                </Stack>

              </AccordionDetails>
            </Accordion>
          </Stack>
        </Stack>
      </Stack>

      {/* social media links */}
      <SocialMediaSpeedDial />
    </Container>
  )
}

export default About;
