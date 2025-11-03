import { Helmet } from 'react-helmet-async';
import { Ticket, Home, CheckCircle, Clock, Sparkles } from 'lucide-react';

export default function Facilities() {
  const regularTickets = [
    {
      category: 'Dewasa',
      weekdays: 'Rp 40.000',
      weekend: 'Rp 45.000',
      note: 'Tiket Reguler',
    },
    {
      category: 'Anak-anak',
      weekdays: 'Rp 35.000',
      weekend: 'Rp 35.000',
      note: 'Weekdays/Weekend',
    },
    {
      category: 'Gazebo',
      weekdays: 'Rp 45.000',
      weekend: 'Rp 45.000',
      note: 'Per 2 jam',
    },
  ];

  const currentFacilities = [
    'Kolam Reguler',
    'Rain Pool',
    'Cafe',
    'Foodcourt',
    'Live Music (Setiap hari Sabtu)',
    'Oleh-oleh Tirta (Merchandise)',
  ];

  const comingSoonFacilities = [
    'Hotel',
    'Water Sport',
    'Restoran',
    'Fitnes & Wellness',
    'Tempat Pemancingan',
  ];

  return (
    <>
      <Helmet>
        <title>Fasilitas & Harga - Tirta Camelia</title>
        <meta
          name="description"
          content="Lihat daftar lengkap fasilitas dan harga tiket masuk Tirta Camelia. Kolam reguler mulai Rp 35.000, kolam private Gold Ticket Rp 300.000 untuk 3 orang."
        />
        <meta
          name="keywords"
          content="harga tiket Tirta Camelia, kolam private, kolam reguler, fasilitas wisata air"
        />
      </Helmet>

      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Fasilitas & Harga</h1>
          <p className="text-xl text-blue-50">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <Ticket className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Tiket Masuk & Sewa</h2>
            </div>
            <p className="text-center text-lg text-gray-600 mb-12">
              Harga terjangkau untuk pengalaman tak terlupakan
            </p>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                      <th className="px-6 py-4 text-left text-lg font-semibold">Kategori</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold">Weekdays</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold">Weekend</th>
                      <th className="px-6 py-4 text-center text-lg font-semibold">Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regularTickets.map((ticket, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {ticket.category}
                        </td>
                        <td className="px-6 py-4 text-center text-blue-600 font-semibold">
                          {ticket.weekdays}
                        </td>
                        <td className="px-6 py-4 text-center text-blue-600 font-semibold">
                          {ticket.weekend}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600 text-sm">
                          {ticket.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <Home className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Kolam Private (Gold Ticket)</h2>
            </div>

            <div className="max-w-3xl mx-auto bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-yellow-400">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full font-bold text-lg mb-4">
                  PAKET PREMIUM
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">Rp 300.000</div>
                <p className="text-gray-600 text-lg">per kamar (maks. 3 orang)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Durasi</h3>
                    <p className="text-gray-600">2 jam penggunaan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fasilitas Termasuk</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Handuk</li>
                      <li>• Coffee Welcome Drink</li>
                      <li>• Toilet Pribadi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block"
                >
                  Reservasi Gold Ticket
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Tersedia Sekarang</h2>
              </div>
              <ul className="space-y-3">
                {currentFacilities.map((facility, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Segera Hadir</h2>
              </div>
              <ul className="space-y-3">
                {comingSoonFacilities.map((facility, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Butuh Informasi Lebih Lanjut?</h2>
            <p className="text-xl mb-6 text-blue-50">
              Tim kami siap membantu Anda dengan informasi detail dan reservasi
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block"
            >
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
