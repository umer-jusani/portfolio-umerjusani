
export const styles = {
    tabPanelBox: {
        width: '100%',
        // bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabList: {
        borderBottom: '1px solid',
        borderColor: 'divider',
        '& .MuiTabs-indicator': {
            backgroundColor: 'primary.main',
            height: 3,
            borderRadius: '3px 3px 0 0',
        },
        mb: 2,
    },
    tab: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        '&.Mui-selected': {
            color: 'primary.main',
        },
    },
    tabPanel: {
        p: 3,
        minHeight: '300px',
        width: '100%',
        textAlign: 'center',
    }
}