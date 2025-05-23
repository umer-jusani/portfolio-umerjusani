import { socialMediaIcons } from '@/constant'
import { ShareIcon } from '@/shared/assets'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'

const SocialMediaSpeedDial = () => {
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{
                    position: 'fixed',
                    bottom: 25,
                    right: { md: 35, xs: 20 },
                    '& .MuiFab-primary': {
                        width: { xs: 40, md: 56 }, // smaller on mobile
                        height: { xs: 40, md: 56 },
                    },
                }}
                icon={<ShareIcon sx={{ fontSize: { md: "1.7rem", xs: "1.3rem" } }} />}
            >
                {socialMediaIcons.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => {
                            window.open(action.link, '_blank')
                        }}
                    />
                ))}
            </SpeedDial>
        </>
    )
}

export default SocialMediaSpeedDial
