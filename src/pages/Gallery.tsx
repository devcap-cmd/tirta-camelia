import { Helmet } from 'react-helmet-async';
import { Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const categories = [
    {
      title: 'Kolam Renang',
      images: Array(6).fill(null),
    },
    {
      title: 'Cafe & Foodcourt',
      images: Array(4).fill(null),
    },
    {
      title: 'Fasilitas',
      images: Array(4).fill(null),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Galeri - Tirta Camelia</title>
        <meta
          name="description"
          content="Lihat galeri foto Tirta Camelia. Kolam renang modern, cafe, foodcourt, dan berbagai fasilitas wisata air untuk keluarga."
        />
        <meta name="keywords" content="galeri Tirta Camelia, foto kolam renang, fasilitas" />
      </Helmet>

      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Galeri</h1>
          <p className="text-xl text-blue-50">
            Lihat keindahan dan fasilitas Tirta Camelia
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((_, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer aspect-[4/3]"
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <ImageIcon className="h-16 w-16 mb-3 opacity-80" />
                      <p className="text-sm font-medium">
                        {category.title} {imageIndex + 1}
                      </p>
                      <p className="text-xs opacity-75 mt-1">Klik untuk memperbesar</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ingin Lihat Langsung?</h2>
            <p className="text-xl mb-6 text-blue-50">
              Kunjungi kami atau hubungi untuk informasi lebih lanjut
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
