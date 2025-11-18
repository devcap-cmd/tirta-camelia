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
      weekdays: 'Rp 350.000',
      weekend: 'Rp 35.000',
      note: 'Tiket Reguler',
    },
    {
      category: 'Gazebo',
      weekdays: 'Rp 45.000',
      weekend: 'Rp 45.000',
      note: 'Per 2 jam',
    },
  ];

  const currentFacilities = [
    'Cafe',
    'Food Court',
    'Oleh-oleh Tirta (Merchandise)',
    'Live Music (Setiap hari Sabtu)',
    'Kolam Reguler (Sudah Termasuk Tiket)',
    'Kolam Private',
  ];

  const comingSoonFacilities = [
    'Resort',
    'Water Sport',
    'Rain Pool',
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

      {/* HERO – versi clean */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-sky-700">
              Informasi Fasilitas & Harga
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Fasilitas & Harga
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-500 max-w-xl mx-auto">
              Pilih paket yang paling sesuai untuk kunjungan Anda ke Tirta
              Camelia, dari tiket reguler hingga kolam private.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* TIKET MASUK & SEWA */}
          <div className="mb-16">
            <div className="flex flex-col items-center mb-6">
              <div className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 mb-3">
                <Ticket className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-700">
                  Tiket Masuk & Sewa
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Harga Tiket & Sewa Fasilitas
              </h2>
              <p className="text-center text-sm md:text-base text-gray-600 mt-3">
                Harga terjangkau untuk pengalaman rekreasi yang nyaman dan
                menyenangkan.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">
                        Kategori
                      </th>
                      <th className="px-6 py-4 text-center font-semibold">
                        Weekdays
                      </th>
                      <th className="px-6 py-4 text-center font-semibold">
                        Weekend
                      </th>
                      <th className="px-6 py-4 text-center font-semibold">
                        Catatan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {regularTickets.map((ticket, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                        } hover:bg-blue-50/60 transition-colors`}
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
                        <td className="px-6 py-4 text-center text-gray-600 text-xs md:text-sm">
                          {ticket.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* KOLAM PRIVATE */}
          <div className="mb-16">
            <div className="flex flex-col items-center mb-6">
              <div className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 mb-3">
                <Home className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-sky-700">
                  Kolam Private
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Paket Kolam Private
              </h2>
              <p className="text-center text-sm md:text-base text-gray-600 mt-3 max-w-xl">
                Nikmati pengalaman lebih eksklusif bersama keluarga atau
                sahabat dengan paket Kolam Private Gold dan Silver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* KOTAK GOLD */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-yellow-400 flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full font-bold text-lg mb-4">
                    Kolam Private Gold
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    Rp 350.000
                  </div>
                  <p className="text-gray-600 text-lg">per 3 orang</p>
                </div>

                <div className="grid md:grid-cols-1 gap-6 mt-2">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Durasi
                      </h3>
                      <p className="text-gray-600">2 jam penggunaan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Fasilitas Termasuk
                      </h3>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Tiket Masuk</li>
                        <li>• Handuk</li>
                        <li>• Coffee Welcome Drink</li>
                        <li>• Toilet Pribadi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center md:mt-auto">
                  <a
                    href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi%20Kolam%20Private%20Gold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block"
                  >
                    Reservasi Gold Ticket
                  </a>
                </div>
              </div>

              {/* KOTAK SILVER */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl shadow-xl p-8 border-2 border-gray-300 flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-gray-300 to-gray-500 text-white px-6 py-2 rounded-full font-bold text-lg mb-4">
                    Kolam Private Silver
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    Rp 250.000
                  </div>
                  <p className="text-gray-600 text-lg">per 3 orang</p>
                </div>

                <div className="grid md:grid-cols-1 gap-6 mt-2">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Durasi
                      </h3>
                      <p className="text-gray-600">2 jam penggunaan</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Fasilitas Termasuk
                      </h3>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Tiket Masuk</li>
                        <li>• Handuk</li>
                        <li>• Coffee Welcome Drink</li>
                        <li>• Toilet Pribadi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center md:mt-auto">
                  <a
                    href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi%20Kolam%20Private%20Silver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block"
                  >
                    Reservasi Silver Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FASILITAS SEKARANG & SEGERA HADIR */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Tersedia Sekarang
                </h2>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                {currentFacilities.map((facility, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Segera Hadir
                </h2>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                {comingSoonFacilities.map((facility, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA WHATSAPP */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="text-sm md:text-xl mb-6 text-blue-50 max-w-2xl mx-auto">
              Tim kami siap membantu dengan informasi detail, ketersediaan
              paket, dan reservasi kunjungan Anda ke Tirta Camelia.
            </p>
            <a
              href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"
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
