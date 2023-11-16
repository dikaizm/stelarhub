import './bootstrap';
// import '../css/app.css';
import '../sass/app.scss'

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import  { Toaster } from 'react-hot-toast';

const appName = import.meta.env.VITE_APP_NAME || 'Stelar';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<>
            <App {...props} />
            <Toaster />
        </>);
    },
    progress: {
        color: '#4B5563',
    },
});