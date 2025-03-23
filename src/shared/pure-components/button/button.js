"use client"
import { Button, CircularProgress } from '@mui/material'
import React from 'react'



let stylesOne = {
    fontSize: 13,
    letterSpacing: 1.25,
    py: 1.25,
    px: 3,
    borderRadius: 1.5
}

let stylesTwo = {
    letterSpacing: 1.25,
    py: 1.25,
    fontWeight: "bold",
    px: 4,
    borderRadius: 1.5
}

const UiButton = ({ variant, color, icon, children, sx, isLoading, startIcon, ...props }) => {
    return (
        <>
            <Button variant={variant} color={color} sx={{ ...stylesTwo, ...sx }} endIcon={icon}
                startIcon={
                    isLoading ? (
                        <CircularProgress size="1rem" pr="0.4rem" />
                    ) : (
                        startIcon
                    )
                }
                disabled={isLoading}
                {...props} >{children}</Button>
        </>
    )
}

export default UiButton
