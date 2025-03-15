"use client"
import React, { useEffect, useState } from 'react'
import UiThemeProvider from '../theme-provider/Theme-Provider';


const AppProvider = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <UiThemeProvider>
            {children}
        </UiThemeProvider>
    )
}

export default AppProvider
