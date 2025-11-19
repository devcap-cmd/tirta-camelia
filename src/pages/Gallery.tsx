import { Helmet } from 'react-helmet-async';
import { Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// --- TIPE DATA ---
type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryCategory = {
  title: string;
  images: GalleryImage[];
};

// --- DATA GAMBAR ---
// Pastikan file-file ini ada di folder: public/kolamReguler, public/gallery, dst

const kolamRenangImages: GalleryImage[] = [
  {
    src: '../public/kolamReguler/kolamReguler1.jpg',
    alt: 'Kolam reguler Tirta Camelia 1',
  },
  { src: '/gallery/kolam-2.jpg', alt: 'Kolam renang Tirta Camelia 2' },
  { src: '/gallery/kolam-3.jpg', alt: 'Kolam renang Tirta Camelia 3' },
  { src: '/gallery/kolam-4.jpg', alt: 'Kolam renang Tirta Camelia 4' },
  { src: '/gallery/kolam-5.jpg', alt: 'Kolam renang Tirta Camelia 5' },
  { src: '/gallery/kolam-6.jpg', alt: 'Kolam renang Tirta Camelia 6' },
];

const cafeImages: GalleryImage[] = [
  { src: '/gallery/cafe-1.jpg', alt: 'Cafe & foodcourt Tirta Camelia 1' },
  { src: '/gallery/cafe-2.jpg', alt: 'Cafe & foodcourt Tirta Camelia 2' },
  { src: '/gallery/cafe-3.jpg', alt: 'Cafe & foodcourt Tirta Camelia 3' },
  { src: '/gallery/cafe-4.jpg', alt: 'Cafe & foodcourt Tirta Camelia 4' },
];

const fasilitasImages: GalleryImage[] = [
  { src: '/gallery/fasilitas-1.jpg', alt: 'Fasilitas Tirta Camelia 1' },
  { src: '/gallery/fasilitas-2.jpg', alt: 'Fasilitas Tirta Camelia 2' },
  { src: '/gallery/fasilitas-3.jpg', alt: 'Fasilitas Tirta Camelia 3' },
  { src: '/gallery/fasilitas-4.jpg', alt: 'Fasilitas Tirta Camelia 4' },
];

const categories: GalleryCategory[] = [
  {
    title: 'Kolam Renang',
    images: kolamRenangImages,
  },
  {
    title: 'Cafe & Foodcourt',
    images: cafeImages,
  },
  {
    title: 'Fasilitas',
    images: fasilitasImages,
  },
];

// --- VARIANTS FRAMER MOTION ---

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
    },
  },
};

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Galeri - Tirta Camelia</title>
        <meta
          name="description"
          content="Lihat galeri foto Tirta Camelia. Kolam renang modern, cafe, foodcourt, dan berbagai fasilitas wisata air untuk keluarga."
        />
        <meta
          name="keywords"
          content="galeri Tirta Camelia, foto kolam renang, fasilitas"
        />
      </Helmet>

      {/* HERO GALERI – tetap */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-sky-700">
              Galeri Tirta Camelia
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
              Galeri
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-500 max-w-xl mx-auto">
              Lihat keindahan dan berbagai fasilitas yang tersedia di Tirta
              Camelia, dari area kolam renang hingga cafe dan fasilitas lainnya.
            </p>
          </div>
        </div>
      </section>

      {/* KONTEN GALERI */}
      <section className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className="mb-16 last:mb-0"
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {category.title}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Dokumentasi area {category.title.toLowerCase()} Tirta Camelia
                  </p>
                </div>
                <span className="hidden md:inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm">
                  {category.images.length} foto
                </span>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={image.src ?? imageIndex}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-400 p-[1px] shadow-lg shadow-sky-900/10 hover:shadow-2xl aspect-[4/3]"
                  >
                    <div className="relative h-full w-full rounded-[1.35rem] overflow-hidden">
                      {/* Background image */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      {/* Overlay */}
                      <div className="relative flex h-full w-full flex-col items-center justify-center bg-slate-950/30 px-6 py-5 backdrop-blur-sm">
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10 flex flex-col items-center text-center text-white">
                          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black/30 backdrop-blur group-hover:scale-110 group-hover:bg-black/40 transition-all duration-300">
                            <ImageIcon className="h-8 w-8 text-white/90" />
                          </div>
                          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-sky-100/80 mb-1">
                            Tirta Camelia
                          </p>
                          <p className="text-lg font-semibold">
                            {category.title} {imageIndex + 1}
                          </p>
                          <p className="mt-1 text-xs text-slate-100/80">
                            Klik untuk memperbesar
                          </p>
                        </div>

                        <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-slate-50 backdrop-blur group-hover:bg-black/60 transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Preview</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* CTA WHATSAPP */}
          <motion.div
            className="mt-16 rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 p-[1px] shadow-xl shadow-sky-900/20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-[1.4rem] bg-slate-950/5 px-6 py-8 md:px-10 md:py-10 text-white flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-100/80 mb-2">
                  Kunjungan Langsung
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Ingin lihat langsung suasana Tirta Camelia?
                </h2>
                <p className="text-sm md:text-base text-sky-100 max-w-xl">
                  Hubungi kami melalui WhatsApp untuk menanyakan ketersediaan,
                  informasi harga, atau melakukan reservasi kunjungan.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://wa.me/6282130326679?text=Halo%20Admin%20Tirta%20Camelia%2C%20saya%20ingin%20reservasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm md:text-base font-bold text-sky-700 hover:bg-sky-50 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
