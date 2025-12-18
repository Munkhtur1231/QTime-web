import { auth } from '../../../auth';
import { redirect } from 'next/navigation';

export default async function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Check if user is authenticated
  if (!session?.user) {
    redirect('/signin?callbackUrl=/editor');
  }

  // Check if user has SUPERADMIN role
  if (session.user.role !== 'SUPERADMIN') {
    redirect('/');
  }

  return <div>{children}</div>;
}
