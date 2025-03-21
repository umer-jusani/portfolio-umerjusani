"use client"
import React, { useEffect, useState } from 'react'
import UiThemeProvider from '../theme-provider/Theme-Provider';
import StoreProvider from '../store-provider/storeContext';


const AppProvider = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <UiThemeProvider>
            <StoreProvider>
                {children}
            </StoreProvider>
        </UiThemeProvider>
    )
}

export default AppProvider
