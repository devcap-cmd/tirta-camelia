import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram} from 'lucide-react';
import { useState } from 'react';
import logoH from '../public/logoH.png'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Fasilitas & Harga', path: '/facilities' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoH} alt="Tirta Camelia" className="h-8 w-auto"/>
              <span className="text-xl font-bold text-gray-900">Tirta Camelia</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"

                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Reservasi via WhatsApp
              </a>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"

                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Reservasi via WhatsApp
              </a>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logoH} alt="Tirta Camelia" className="h-8 w-auto bg-white rounded-full p-1 shadow-sm"/>
                <span className="text-xl font-bold">Tirta Camelia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Destinasi wisata air terbaik untuk keluarga Anda. Nikmati berbagai fasilitas modern dan pelayanan terbaik.
              </p>
              <a
      href="https://www.instagram.com/tirtacameliahotspring?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700"
    >
      <Instagram className="h-5 w-5" />
    </a>
              
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Banjarsari, Pangalengan</li>
                <li>Kabupaten Bandung, Jawa Barat 40378</li>
                <li>Telp: (+62)821-3032-6679</li>
                <li>Email: tirtacameliaofficial@gmail.com</li>
              </ul>
              <a
                href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"

                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Tirta Camelia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
