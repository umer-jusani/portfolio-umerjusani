import { socialMediaIcons } from '@/constant'
import { ShareIcon } from '@/shared/assets'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'

const SocialMediaSpeedDial = () => {
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 25, right: 35, }}
                icon={<ShareIcon />}
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
