/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Top() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <div>
            <p>
                TopPage
            </p>
        </div>
    );
}

export default Top;