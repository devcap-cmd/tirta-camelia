import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const operatingHours = [
    { day: 'Senin - Jumat', hours: '08:00 - 18:00 WIB' },
    { day: 'Sabtu - Minggu', hours: '07:00 - 19:00 WIB' },
    { day: 'Hari Libur Nasional', hours: '07:00 - 19:00 WIB' },
  ];

  return (
    <>
      <Helmet>
        <title>Kontak - Tirta Camelia</title>
        <meta
          name="description"
          content="Hubungi Tirta Camelia untuk reservasi dan informasi. Alamat: Jl. Raya Tirta Camelia No. 123. Telp: (021) 1234-5678. Buka setiap hari."
        />
        <meta
          name="keywords"
          content="kontak Tirta Camelia, alamat, jam operasional, reservasi"
        />
      </Helmet>

      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-blue-50">
            Kami siap melayani Anda dengan informasi terbaik
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informasi Kontak</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      Jl. Raya Tirta Camelia No. 123
                      <br />
                      Kota, Provinsi 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600">(021) 1234-5678</p>
                    <a
                      href="tel:+6281234567890"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@tirtacamelia.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      info@tirtacamelia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Chat langsung untuk reservasi cepat</p>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition-colors inline-block"
                    >
                      Chat via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-8">
                <Clock className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Jam Operasional</h2>
              </div>

              <div className="space-y-4">
                {operatingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">{schedule.day}</span>
                      <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-100 rounded-xl p-4 border-l-4 border-blue-600">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Catatan:</span> Jam operasional dapat berubah
                  sewaktu-waktu. Hubungi kami untuk informasi terbaru.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
            <div className="text-center text-white">
              <MapPin className="h-32 w-32 mx-auto mb-4 opacity-80" />
              <p className="text-2xl font-semibold mb-2">Peta Lokasi</p>
              <p className="text-lg opacity-90">Google Maps embed akan ditampilkan di sini</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Siap Mengunjungi Kami?</h2>
            <p className="text-xl mb-6 text-blue-50">
              Reservasi sekarang untuk pengalaman tak terlupakan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block"
              >
                Reservasi via WhatsApp
              </a>
              <a
                href="tel:+6281234567890"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors inline-block"
              >
                Hubungi via Telepon
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
