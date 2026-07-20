import { useEffect, useState } from 'react';

export type CVVersion = 'rh' | 'infantil';

const STORAGE_KEY = 'cv-version';

export function useVersion() {
    const [version, setVersion] = useState<CVVersion>(() => {
        if (typeof window !== 'undefined') {
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved === 'rh' || saved === 'infantil') return saved;
            } catch {
                // swallow error, fall back to default
            }
        }
        return 'rh';
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, version);
        } catch {
            // swallow error silently
        }
    }, [version]);

    const toggleVersion = () => {
        setVersion((prev) => (prev === 'rh' ? 'infantil' : 'rh'));
    };

    return { version, toggleVersion };
}
