import AppHeader from '../../components/AppHeader';
import Footer from '../../components/Footer';
import 'leaflet/dist/leaflet.css';

export default function YellowBooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
