import { Box, List, ListItem, ListItemIcon, ListItemText, Modal, Paper, Typography, IconButton } from '@mui/material'
import React from 'react';
import { EmojiEvents, Rocket, Close } from '@mui/icons-material';

const ModalWrapper = ({ open, close = () => { }, title = "", children = null, style = {} }) => {
    return (
        <>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="level-up-modal"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...style
                }}
            >
                <Paper
                    elevation={24}
                    sx={{
                        // pb: 3,
                        maxWidth: '600px',
                        width: '90%',
                        maxHeight: '90vh',
                        overflow: 'auto',
                        // bgcolor: 'background.light',
                        borderRadius: 2,
                        position: 'relative'
                    }}
                >
                    {title && (
                        <>
                            <IconButton
                                onClick={close}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: 'text.secondary'
                                }}
                            >
                                <Close />
                            </IconButton>
                            <Typography variant="h5" textAlign={'center'} fontWeight={600} gutterBottom sx={{ color: 'text.secondary', backgroundColor: 'background.paper', py: 2.5 }}>{title}</Typography>
                        </>
                    )}
                    <Box sx={{ p: 3, backgroundColor: 'background.default' }}>
                        {children}
                    </Box>
                </Paper>
            </Modal>
        </>
    )
}

export default ModalWrapper
