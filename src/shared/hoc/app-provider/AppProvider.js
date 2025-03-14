"use client"
import React from 'react'
import UiThemeProvider from '../theme-provider/Theme-Provider';


const AppProvider = ({ children }) => {
    return (
        <UiThemeProvider>
            {children}
        </UiThemeProvider>
    )
}

export default AppProvider
