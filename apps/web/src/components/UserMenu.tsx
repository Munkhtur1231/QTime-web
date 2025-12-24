'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { logoutAction } from '../app/(auth)/actions';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface UserMenuProps {
  name: string;
  role?: string;
}

// Role-уудын монгол орчуулга
const roleLabels: Record<string, string> = {
  USER: 'Хэрэглэгч',
  ADMIN: 'Админ',
  SUPERADMIN: 'Супер Админ',
};

export default function UserMenu({ name, role }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBusinessAdmin, setIsBusinessAdmin] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { data: session } = useSession();

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

  // Check if user is business admin
  useEffect(() => {
    const checkBusinessAdmin = async () => {
      if (!session?.user?.id || !session?.user?.accessToken) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/businesses?adminUserId=${session.user.id}&limit=1`,
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          setIsBusinessAdmin(data?.data && data.data.length > 0);
        }
      } catch (error) {
        console.error('Error checking business admin:', error);
      }
    };

    checkBusinessAdmin();
  }, [session?.user?.id, session?.user?.accessToken]);

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
        <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg z-50">
          <div className="py-1">
            <div className="px-4 py-2 border-b border-border">
              <div className="text-sm font-medium text-foreground">{name}</div>
              {role && (
                <p className="text-xs text-muted capitalize">
                  {roleLabels[role] || role.toLowerCase()}
                </p>
              )}
            </div>
            <Link
              href="/user/dashboard"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm text-foreground hover:bg-foreground/5 transition-colors"
            >
              Хэрэглэгчийн самбар
            </Link>
            {(isBusinessAdmin || role === 'ADMIN' || role === 'SUPERADMIN') && (
              <Link
                href="/business-dashboard"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-foreground hover:bg-foreground/5 transition-colors"
              >
                Бизнес удирдлага
              </Link>
            )}
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
              className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-foreground/5 transition-colors border-t border-border"
            >
              Гарах
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
