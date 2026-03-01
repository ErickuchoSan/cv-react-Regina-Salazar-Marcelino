import { useState, useRef, useEffect, useCallback } from 'react';

interface DropdownPosition {
    top: number;
    left: number;
}

interface UseDropdownReturn {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    position: DropdownPosition;
}

/**
 * Hook para manejar la lógica de dropdowns posicionados
 * Calcula automáticamente la posición del dropdown basándose en el botón trigger
 */
export const useDropdown = (): UseDropdownReturn => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<DropdownPosition>({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggle = useCallback(() => setIsOpen(prev => !prev), []);
    const close = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + 8,
                left: rect.left,
            });
        }
    }, [isOpen]);

    return { isOpen, toggle, close, buttonRef, position };
};
