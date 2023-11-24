import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from './providers';
import { Routes } from './routes';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Providers>
            <Routes />
        </Providers>
    </StrictMode>
);
