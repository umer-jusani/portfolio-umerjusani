"use client"
import { pageTopSpacer, SectionHeadingVariant } from '@/constant';
import SocialMediaSpeedDial from '@/shared/components/socailIcons-speedDial/socialMediaSpeedDial';
import { SectionHeading, SubSectionHeading } from '@/shared/global-styling/Ui';
import { Paper, Stack, Typography, Chip, Modal, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { EmojiEvents, Rocket } from '@mui/icons-material';
import { useState } from 'react';
import ModalWrapper from '@/shared/pure-components/modalwrapper/modalWrapper';

const LevelUpModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="level-up-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={24}
        sx={{
          p: 4,
          maxWidth: '600px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 2,
          position: 'relative'
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.primary' }}>
          <EmojiEvents sx={{ color: 'primary.main' }} /> How I Level Up Every Day
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          For me, coding is more than just writing lines of code—it's about getting better every single day. Here's what keeps me going:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>🔹</ListItemIcon>
            <ListItemText primary="Picking up something new daily—because tech never stops evolving." />
          </ListItem>
          <ListItem>
            <ListItemIcon>🔹</ListItemIcon>
            <ListItemText primary="Finding and implementing smarter, cleaner ways to write code." />
          </ListItem>
          <ListItem>
            <ListItemIcon>🔹</ListItemIcon>
            <ListItemText primary="Using the right React design patterns where they actually make sense." />
          </ListItem>
          <ListItem>
            <ListItemIcon>🔹</ListItemIcon>
            <ListItemText primary="Keeping everything consistent, so the project feels polished and professional." />
          </ListItem>
        </List>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          It's all about growing, refining, and making every project better than the last.
        </Typography>
      </Paper>
    </Modal>
  );
};

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <Stack my={pageTopSpacer} spacing={4}>

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
            <ListItemIcon>🔹</ListItemIcon>
            <Typography sx={{ color: 'text.secondary' }} variant='body2'>Picking up something new daily—because tech never stops evolving.</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>🔹</ListItemIcon>
            <Typography sx={{ color: 'text.secondary' }} variant='body2'>Finding and implementing smarter, cleaner ways to write code.</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>🔹</ListItemIcon>
            <Typography sx={{ color: 'text.secondary' }} variant='body2'>Using the right React design patterns where they actually make sense.</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>🔹</ListItemIcon>
            <Typography sx={{ color: 'text.secondary' }} variant='body2'>Keeping everything consistent, so the project feels polished and professional.</Typography>
          </ListItem>
        </List>
        <Typography variant="body2" textAlign={'center'} sx={{ mt: 2 }}>
          It's all about growing, refining, and making every project better than the last.
        </Typography>
      </ModalWrapper>


      {/* Introduction */}
      {/* <Paper elevation={3} sx={{ p: 4, maxWidth: '800px', width: '100%' }}> */}
      <Stack alignItems={'center'}>
        {/* Introduction Section */}
        <SubSectionHeading
          variant="h4"
        >
          Introduction
        </SubSectionHeading>
        <Typography variant="body1" paragraph>
          Hi, I'm Muhammad Umer Jusani, a passionate Frontend Developer with 1.5 years of experience crafting high-performance web and mobile applications. I specialize in React.js, Next.js, React Native, and modern UI libraries like Material UI and Tailwind CSS.
          <br />
          <br />
          My expertise includes responsive design, performance optimization, API integrations, authentication systems, and cloud storage solutions. I've worked with Stripe, Appwrite, Firebase, and Azure Microsoft B2C to create seamless and secure user experiences.
          <br />
          <br />
          As a problem-solver and creative thinker, I thrive on building scalable, user-friendly solutions that drive business success. From developing portfolio websites to building complex web and mobile applications, I'm always eager to learn and contribute to impactful projects.
        </Typography>

        {/* Learning Platforms Section */}
        <SubSectionHeading
          variant="h4"
          sx={{ mt: 6 }}
        >
          Learning Platforms
        </SubSectionHeading>
        <Stack spacing={2} width="100%" alignItems="flex-start">
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            📌 <strong>Codedamn</strong> – Solving challenging problems with the best approaches.
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            📌 <strong>Medium</strong> – Reading and writing articles on best coding practices, simplifying code, and making it more readable and scalable.
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            📌 <strong>Kevin Powell (YouTube)</strong> – Learning modern CSS techniques and best practices.
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            📌 <strong>Cosden Solutions (YouTube)</strong> – Best channel for React developers.
          </Typography>
        </Stack>

        {/* Tools I Use Section */}
        <SubSectionHeading
          variant="h4"
          sx={{ mt: 6 }}
        >
          The Tools I Use
        </SubSectionHeading>
        <Stack spacing={3} width="100%" alignItems="flex-start">
          <Stack spacing={1} width="100%">
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              🛠️ <strong>Cursor AI Code Editor</strong> – My go-to coding assistant that has significantly boosted my development speed and productivity.
            </Typography>
            <List sx={{ pl: 8 }}>
              <ListItem sx={{ display: 'flex', alignItems: 'flex-start', p: 0.5 }}>
                <ListItemIcon sx={{ minWidth: '32px' }}>✅</ListItemIcon>
                <Typography variant="body1">
                  Reduces human effort by suggesting optimized code snippets.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'flex-start', p: 0.5 }}>
                <ListItemIcon sx={{ minWidth: '32px' }}>✅</ListItemIcon>
                <Typography variant="body1">
                  I let Cursor write code when I know the approach, helping me focus on logic instead of syntax.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'flex-start', p: 0.5 }}>
                <ListItemIcon sx={{ minWidth: '32px' }}>✅</ListItemIcon>
                <Typography variant="body1">
                  No need to constantly look up syntax—Cursor provides smart suggestions on the go.
                </Typography>
              </ListItem>
            </List>
          </Stack>
          <Typography variant="body1" sx={{ pl: 8 }}>
            With Cursor AI, I can code faster, stay focused, and build better applications without unnecessary distractions. 🚀
          </Typography>
        </Stack>

        {/* Types of Projects Section */}
        <SubSectionHeading
          variant="h4"
          sx={{ mt: 6 }}
        >
          Types of Projects I Have Worked On
        </SubSectionHeading>
        
        {/* XtecSoft Experience */}
        <Stack spacing={3} width="100%" alignItems="flex-start">
          <Stack spacing={2} width="100%">
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              📌 <strong>XtecSoft Experience (ioMovo – Cloud Storage Platform)</strong>
            </Typography>
            <Typography variant="body1" sx={{ pl: 4 }}>
              At XtecSoft, I played a key role in developing ioMovo, a cloud storage platform similar to Google Drive but with unique capabilities.
            </Typography>
            
            <Stack spacing={2} sx={{ pl: 4 }}>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                🔹 <strong>ioHub – Unified Cloud Storage Integration</strong>
              </Typography>
              <Typography variant="body1" sx={{ pl: 4 }}>
                Developed ioHub, which integrates multiple external cloud platforms like AWS, Azure, and Google Drive.
                Implemented a feature that allows users to authenticate and list all their files from a selected cloud provider.
              </Typography>

              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                🔹 <strong>ioFlow – File Status Tracking System</strong>
              </Typography>
              <Typography variant="body1" sx={{ pl: 4 }}>
                Designed and built the ioFlow section, allowing users to assign statuses (Needs Review, In Progress, Approved) to files and track them efficiently.
              </Typography>

              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                🔹 <strong>Advanced React Development</strong>
              </Typography>
              <Typography variant="body1" sx={{ pl: 4 }}>
                Created complex features using different React design patterns to ensure scalability and maintainability.
                Built helper functions to optimize performance and enhance reusability.
              </Typography>
            </Stack>
          </Stack>

          {/* PNC Solutions Experience */}
          <Stack spacing={2} width="100%">
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              📌 <strong>PNC Solutions Experience</strong>
            </Typography>
            <Typography variant="body1" sx={{ pl: 4 }}>
              At PNC Solutions, I primarily focused on learning from senior developers and working on sample projects to enhance my technical skills.
            </Typography>
            <List sx={{ pl: 4 }}>
              <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                <Typography variant="body1">
                  Explored different development approaches and best practices.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                <Typography variant="body1">
                  Created small-scale projects for practice.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                <Typography variant="body1">
                  Couldn't continue working there due to a different tech stack from my primary expertise.
                </Typography>
              </ListItem>
            </List>
          </Stack>

          {/* Invention & Innovation Experience */}
          <Stack spacing={2} width="100%">
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              📌 <strong>Invention & Innovation (Current Role)</strong>
            </Typography>
            <Typography variant="body1" sx={{ pl: 4, fontWeight: 500 }}>
              Frontend Developer
            </Typography>
            
            <Stack spacing={2} sx={{ pl: 4 }}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>Projects Worked On:</Typography>
              
              <Stack spacing={1}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  🔹 <strong>WintechPro</strong>
                </Typography>
                <List sx={{ pl: 4 }}>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                    <Typography variant="body1">
                      Developed and maintained the frontend for WintechPro, ensuring a seamless user experience.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                    <Typography variant="body1">
                      Implemented responsive UI using modern web technologies.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                    <Typography variant="body1">
                      Integrated APIs and enhanced the performance of web applications.
                    </Typography>
                  </ListItem>
                </List>

                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mt: 2 }}>
                  🔹 <strong>TenderPro (Under Development)</strong>
                </Typography>
                <List sx={{ pl: 4 }}>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                    <Typography variant="body1">
                      Built the frontend for TenderPro, a B2B platform where companies can list and bid on tenders.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                    <Typography variant="body1">
                      Integrated Stripe Payment Gateway, allowing users to save their bank account details for future payments using Setup Intent.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                    <Typography variant="body1">
                      Developed authentication and role-based access control for Super Admins, Organizations, and Transporters.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: '32px' }}>•</ListItemIcon>
                    <Typography variant="body1">
                      Implemented dashboards displaying statistics like active tenders, bidding analytics, and user engagement.
                    </Typography>
                  </ListItem>
                </List>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>




      {/* social media links */}
      <SocialMediaSpeedDial />
    </Stack>
  )
}

export default About;
