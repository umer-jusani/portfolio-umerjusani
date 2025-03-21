"use client"
import { createContext, useContext, useState } from 'react'

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <StoreContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider

export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
}
