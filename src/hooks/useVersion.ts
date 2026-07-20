import { useState, useEffect } from 'react';

export type CVVersion = 'rh' | 'infantil';

const STORAGE_KEY = 'cv-version';

export function useVersion() {
    const [version, setVersion] = useState<CVVersion>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'rh' || saved === 'infantil') return saved;
        }
        return 'rh';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, version);
    }, [version]);

    const toggleVersion = () => {
        setVersion((prev) => (prev === 'rh' ? 'infantil' : 'rh'));
    };

    return { version, toggleVersion };
}
