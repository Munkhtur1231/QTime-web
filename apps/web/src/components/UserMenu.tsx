'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { logoutAction } from '../app/(auth)/actions';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  name: string;
  role?: string;
}

export default function UserMenu({ name, role }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Get first letter of first name
  const getInitials = (name: string): string => {
    const parts = name.trim().split(' ');
    // Get first letter of first name (first word)
    if (parts.length > 0 && parts[0].length > 0) {
      return parts[0][0].toUpperCase();
    }
    // Fallback to first letter of email if no name
    return name.substring(0, 1).toUpperCase();
  };

  const initials = getInitials(name);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSignOut = async () => {
    await logoutAction();
    router.refresh();
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-foreground font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
        aria-label="User menu"
      >
        {initials}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
          <div className="py-1">
            <div className="px-4 py-2 border-b border-border">
              <p className="text-sm font-medium text-foreground">{name}</p>
              {role && (
                <p className="text-xs text-muted capitalize">
                  {role.toLowerCase()}
                </p>
              )}
            </div>
            {role === 'SUPERADMIN' && (
              <Link
                href="/editor"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-foreground hover:bg-foreground/5 transition-colors"
              >
                Editor
              </Link>
            )}
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-foreground/5 transition-colors"
            >
              Гарах
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
