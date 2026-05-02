import { createInertiaApp } from '@inertiajs/react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'T2R Soluções Tecnológicas';

createInertiaApp({
    title: (title) => (title ? `${title}` : appName),
    layout: (name) => {
        switch (true) {
            // Public pages — layout managed by each page
            case name === 'home':
            case name === 'ppk-para-drones':
            case name === 'ppk-produto':
            case name === 'base-gnss':
            case name === 't2r-geotagger':
            case name === 'metashape':
            case name === 'sobre-nos':
            case name === 'blog':
            case name === 'blog-post':
            case name === 'fale-conosco':
            case name === 'produtos':
                return null;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },
    strictMode: true,
    withApp(app) {
        return <TooltipProvider delayDuration={0}>{app}</TooltipProvider>;
    },
    progress: {
        color: '#22d3ee', // t2r-cyan inspired
    },
});

// This will set light / dark mode on load...
initializeTheme();
