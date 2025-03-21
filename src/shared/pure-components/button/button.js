import { Button } from '@mui/material'
import React from 'react'



let stylesOne = {
    fontSize: 13,
    letterSpacing: 1.25,
    py: 1.25,
    px: 3,
    borderRadius: 1.5
}

let stylesTwo = {
    fontSize: 13,
    letterSpacing: 1.25,
    py: 1.25,
    fontWeight: 600,
    px: 4,
    borderRadius: 1.5
}

const UiButton = ({ variant, color, icon, children, sx, ...props }) => {
    return (
        <>
            <Button variant={variant} color={color} sx={{...stylesTwo, ...sx}} endIcon={icon} {...props}>{children}</Button>
        </>
    )
}

export default UiButton
