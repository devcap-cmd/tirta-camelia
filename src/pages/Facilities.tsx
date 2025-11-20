import { Helmet } from 'react-helmet-async';
import { Ticket, Home, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
      weekdays: 'Rp 30.000',
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

      {/* HERO – clean + motion */}
      <section className="bg-white border-b border-slate-100">
        <motion.div
          className="max-w-6xl mx-auto px-4 py-12 md:py-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
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
        </motion.div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* TIKET MASUK & SEWA */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
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

            {/* card tabel minimal */}
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-6 py-4 text-left font-semibold text-slate-700">
                        Kategori
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-slate-700">
                        Weekdays
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-slate-700">
                        Weekend
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-slate-700">
                        Catatan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {regularTickets.map((ticket, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                        } hover:bg-sky-50 transition-colors`}
                      >
                        <td className="px-6 py-4 font-medium text-slate-900">
                          {ticket.category}
                        </td>
                        <td className="px-6 py-4 text-center text-sky-700 font-semibold">
                          {ticket.weekdays}
                        </td>
                        <td className="px-6 py-4 text-center text-sky-700 font-semibold">
                          {ticket.weekend}
                        </td>
                        <td className="px-6 py-4 text-center text-slate-500 text-xs md:text-sm">
                          {ticket.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* KOLAM PRIVATE */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
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
              {/* GOLD – card putih minimal */}
              <motion.div
                className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-xs font-semibold text-amber-700 uppercase tracking-[0.18em] mb-4">
                    Gold Package
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-1">
                    Rp 350.000
                  </div>
                  <p className="text-sm md:text-base text-slate-500">
                    per 3 orang / 2 jam
                  </p>
                </div>

                <div className="space-y-5 mt-2">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Durasi
                      </h3>
                      <p className="text-sm text-slate-600">
                        2 jam penggunaan kolam private.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Fasilitas Termasuk
                      </h3>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Tiket Masuk</li>
                        <li>• Handuk</li>
                        <li>• Coffee Welcome Drink</li>
                        <li>• Toilet Pribadi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-auto text-center">
                  <a
                    href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi%20Kolam%20Private%20Gold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-sm md:text-base font-semibold text-white hover:bg-sky-700 transition-colors"
                  >
                    Reservasi Gold Ticket
                  </a>
                </div>
              </motion.div>

              {/* SILVER – card putih minimal */}
              <motion.div
                className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-700 uppercase tracking-[0.18em] mb-4">
                    Silver Package
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-1">
                    Rp 250.000
                  </div>
                  <p className="text-sm md:text-base text-slate-500">
                    per 3 orang / 2 jam
                  </p>
                </div>

                <div className="space-y-5 mt-2">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Durasi
                      </h3>
                      <p className="text-sm text-slate-600">
                        2 jam penggunaan kolam private.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Fasilitas Termasuk
                      </h3>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {/* kalau Silver juga termasuk tiket, tinggal aktifkan baris ini */}
                        {/* <li>• Tiket Masuk</li> */}
                        <li>• Handuk</li>
                        <li>• Coffee Welcome Drink</li>
                        <li>• Toilet Pribadi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-auto text-center">
                  <a
                    href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi%20Kolam%20Private%20Silver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-sm md:text-base font-semibold text-white hover:bg-sky-700 transition-colors"
                  >
                    Reservasi Silver Ticket
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* FASILITAS SEKARANG & SEGERA HADIR */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex items-center mb-5">
                <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Tersedia Sekarang
                </h2>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                {currentFacilities.map((facility, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <span className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    {facility}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-slate-200 bg-white/90 p-7 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex items-center mb-5">
                <Sparkles className="h-6 w-6 text-purple-600 mr-3" />
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Segera Hadir
                </h2>
              </div>
              <ul className="space-y-3 text-sm md:text-base">
                {comingSoonFacilities.map((facility, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <span className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
                    {facility}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* CTA WHATSAPP */}
          <motion.div
            className="rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 p-8 text-white text-center shadow-md"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
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
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm md:text-base font-bold text-sky-700 hover:bg-sky-50 transition-colors"
            >
              Hubungi Kami via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
