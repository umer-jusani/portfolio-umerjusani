"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from '@mui/material/styles';
import { styles } from './Ui';

const ContactTabPanel = ({ children }) => {
    const [value, setValue] = React.useState('basic-inquiry');
    const theme = useTheme();

    // Convert children to array to access them by index
    const childrenArray = React.Children.toArray(children);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={styles.tabPanelBox}>
            <TabContext value={value}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="contact inquiry tabs"
                        sx={styles.tabList}
                        centered
                    >
                        <Tab
                            label="Basic Inquiry"
                            value="basic-inquiry"
                            sx={styles.tab}
                        />
                        <Tab
                            label="Project Inquiry"
                            value="project-inquiry-form"
                            sx={styles.tab}
                        />
                        <Tab
                            label="Job Inquiry"
                            value="job-inquiry-form"
                            sx={styles.tab}
                        />
                    </TabList>
                </Box>
                <TabPanel
                    value="basic-inquiry"
                    sx={styles.tabPanel}
                >
                    {childrenArray[0]}
                </TabPanel>
                <TabPanel
                    value="project-inquiry-form"
                    sx={styles.tabPanel}
                >
                    {childrenArray[1]}
                </TabPanel>
                <TabPanel
                    value="job-inquiry-form"
                    sx={styles.tabPanel}
                >
                    {childrenArray[2]}
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default ContactTabPanel
