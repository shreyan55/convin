import {Box, DialogContent, DialogTitle } from "@mui/material";
import React from 'react';

export default function VideoPlayer({ link }) {
    return (
        <>
            <DialogTitle>Video</DialogTitle>
            <DialogContent>
                <Box>
                    <iframe style={{ width: '100%', aspectRatio: '1.78' }} src={link} allowFullScreen></iframe>
                </Box>
            </DialogContent>
        </>
    )
}
