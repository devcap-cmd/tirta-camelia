import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const operatingHours = [
    { day: 'Senin - Jumat', hours: '24 Jam' },
    { day: 'Sabtu - Minggu', hours: '24 Jam' },
  ];

  return (
    <>
      <Helmet>
        <title>Kontak - Tirta Camelia</title>
        <meta
          name="description"
          content="Hubungi Tirta Camelia untuk reservasi dan informasi. Berlokasi di Banjarsari, Pangalengan, Kabupaten Bandung. Buka setiap hari 24 jam."
        />
        <meta
          name="keywords"
          content="kontak Tirta Camelia, alamat, jam operasional, reservasi"
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
              Kontak & Lokasi
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Hubungi Kami
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-500 max-w-xl mx-auto">
              Tim Tirta Camelia siap membantu Anda untuk informasi, reservasi,
              maupun pertanyaan seputar fasilitas dan layanan.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* INFORMASI KONTAK & JAM OPERASIONAL */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 md:gap-12"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Card Informasi Kontak */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Informasi Kontak
              </h2>

              <div className="space-y-6 text-sm md:text-base">
                <div className="flex items-start">
                  <div className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50">
                    <MapPin className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Alamat</h3>
                    <p className="text-slate-600">
                      Banjarsari, Pangalengan, Kabupaten Bandung
                      <br />
                      Jawa Barat, 40378
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50">
                    <Phone className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Telepon</h3>
                    <p className="text-slate-600">(+62) 821-3032-6679</p>
                    <a
                      href="tel:+6282130326679"
                      className="text-sky-700 hover:text-sky-800 font-medium"
                    >
                      +62 821-3032-6679
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50">
                    <Mail className="h-5 w-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:tirtacameliaofficial@gmail.com"
                      className="text-sky-700 hover:text-sky-800"
                    >
                      tirtacameliaofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                    <MessageCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">WhatsApp</h3>
                    <p className="text-slate-600 mb-2">
                      Chat langsung untuk reservasi dan informasi cepat.
                    </p>
                    <a
                      href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
                    >
                      Chat via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card Jam Operasional */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-50">
                  <Clock className="h-5 w-5 text-violet-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Jam Operasional
                </h2>
              </div>

              <div className="space-y-4">
                {operatingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <div className="flex justify-between items-center text-sm md:text-base">
                      <span className="font-semibold text-slate-900">
                        {schedule.day}
                      </span>
                      <span className="text-sky-700 font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50 px-4 py-3">
                <p className="text-xs md:text-sm text-slate-700">
                  <span className="font-semibold">Catatan:</span> Jam operasional dapat
                  menyesuaikan kondisi tertentu. Silakan hubungi kami untuk
                  konfirmasi jadwal terbaru sebelum berkunjung.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* GMAPS – embed lokasi Tirta Camelia Hot Spring & Resort */}
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50">
                  <MapPin className="h-5 w-5 text-sky-700" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                    Peta Lokasi
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    Tirta Camelia Hot Spring &amp; Resort – Banjarsari, Pangalengan
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/8L3y8jKKN1eVJYnR9"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex text-xs font-medium text-sky-700 hover:text-sky-800"
              >
                Buka di Google Maps
              </a>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-[16/9]">
              <iframe
                title="Lokasi Tirta Camelia Hot Spring & Resort"
                src="https://www.google.com/maps?q=Tirta%20Camelia%20Hot%20Spring%20%26%20Resort&output=embed"
                loading="lazy" // LAZY LOAD MAP
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/8L3y8jKKN1eVJYnR9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex md:hidden text-xs font-medium text-sky-700 hover:text-sky-800"
            >
              Buka di Google Maps
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 p-8 text-white text-center shadow-md"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Siap Mengunjungi Tirta Camelia?
            </h2>
            <p className="text-sm md:text-lg mb-6 text-sky-100 max-w-2xl mx-auto">
              Lakukan reservasi sekarang atau hubungi kami untuk memastikan
              ketersediaan dan mendapatkan informasi terbaru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm md:text-base font-bold text-sky-700 hover:bg-sky-50 transition-colors"
              >
                Reservasi via WhatsApp
              </a>
              <a
                href="tel:+6282130326679"
                className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm md:text-base font-bold text-white hover:bg-white/10 transition-colors"
              >
                Hubungi via Telepon
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
