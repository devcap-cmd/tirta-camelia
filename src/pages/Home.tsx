import { Helmet } from 'react-helmet-async';
import { Waves, Coffee, Music, Gift, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pengalamanTakTerlupakan from '../public/pengalamanTakTerlupakan.jpg';

export default function Home() {
  const highlights = [
    {
      icon: Waves,
      title: 'Kolam Modern',
      description: 'Kolam reguler dan private dengan fasilitas premium',
    },
    {
      icon: Coffee,
      title: 'Cafe & Foodcourt',
      description: 'Nikmati berbagai pilihan makanan dan minuman',
    },
    {
      icon: Music,
      title: 'Live Music',
      description: 'Hiburan musik live setiap hari Sabtu',
    },
    {
      icon: Gift,
      title: 'Merchandise',
      description: 'Oleh-oleh khas Tirta Camelia',
    },
  ];

  const comingSoon = [
    'Resort',
    'Hotel',
    'Rain Pool',
    'Water Sport',
    'Restoran',
    'Fitnes & Wellness',
    'Tempat Pemancingan',
  ];

  return (
    <>
      <Helmet>
        <title>Tirta Camelia - Destinasi Wisata Air Terbaik</title>
        <meta
          name="description"
          content="Tirta Camelia menawarkan kolam renang modern, cafe, foodcourt, live music, dan berbagai fasilitas wisata air untuk keluarga Anda. Reservasi sekarang!"
        />
        <meta
          name="keywords"
          content="kolam renang, wisata air, Tirta Camelia, rekreasi keluarga, kolam private"
        />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
        <div className="absolute inset-0 bg-black/20"></div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Selamat Datang di Tirta Camelia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Destinasi wisata air terbaik untuk keluarga Anda
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Reservasi Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              to="/facilities"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Lihat Fasilitas
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* FASILITAS UNGGULAN */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fasilitas Unggulan</h2>
            <p className="text-lg text-gray-600">
              Nikmati berbagai fasilitas modern untuk kenyamanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PENGALAMAN TAK TERLUPAKAN */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pengalaman Tak Terlupakan
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Tirta Camelia menghadirkan pengalaman wisata air yang sempurna untuk seluruh
                keluarga. Dengan fasilitas modern, suasana nyaman, dan pelayanan terbaik, kami
                siap membuat momen liburan Anda menjadi istimewa.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Kolam reguler dan private untuk privasi maksimal
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Fasilitas lengkap dan terawat
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Harga terjangkau untuk semua kalangan
                </li>
              </ul>
              <Link
                to="/facilities"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Lihat Harga & Fasilitas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              className="rounded-3xl h-96 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <img
                src={pengalamanTakTerlupakan}
                alt="Pengalaman tak terlupakan di Tirta Camelia"
                className="w-full h-full object-cover"
                loading="lazy"              // LAZY LOAD
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-100 rounded-full p-4 mb-6">
            <Sparkles className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Segera Hadir!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Kami terus berinovasi untuk memberikan pengalaman terbaik. Nantikan fasilitas baru
            yang akan segera hadir:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {comingSoon.map((item, index) => (
              <motion.span
                key={index}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-medium shadow-md"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Siap untuk Pengalaman Tak Terlupakan?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Hubungi kami sekarang untuk reservasi dan informasi lebih lanjut
          </p>
          <a
            href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Reservasi via WhatsApp
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </motion.div>
      </section>
    </>
  );
}
