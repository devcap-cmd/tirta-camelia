import { Helmet } from 'react-helmet-async';
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

//cafe Merch
import cafeMerch1 from '../public/CafeMerch/cafeMerch1.jpg';
import cafeMerch2 from '../public/CafeMerch/cafeMerch2.jpg';
import cafeMerch3 from '../public/CafeMerch/cafeMerch3.jpg';

//kolam Privat
// import kolamPrivat1 from '../public/KolamPrivat/kolamP1.jpg';
import kolamPrivat2 from '../public/KolamPrivat/kolamP2.jpg';
import kolamPrivat3 from '../public/KolamPrivat/kolamP3.jpg';
import kolamPrivat4 from '../public/KolamPrivat/kolamP4.jpg';

//kolam Reguler
import kolamReguler1 from '../public/KolamReguler/kolamR1.jpg';
import kolamReguler2 from '../public/KolamReguler/kolamR2.jpg';
import kolamReguler3 from '../public/KolamReguler/kolamR3.jpg';

//fasilitas
import fasilitas1 from '../public/Fasilitas/fasilitas1.jpg';
import fasilitas2 from '../public/Fasilitas/fasilitas2.jpg';
import fasilitas3 from '../public/Fasilitas/fasilitas3.jpg';
import fasilitas4 from '../public/Fasilitas/fasilitas4.jpg';
import fasilitas5 from '../public/Fasilitas/fasilitas5.jpg';
import fasilitas6 from '../public/Fasilitas/fasilitas6.jpg';

//spot foto
import spot1 from '../public/SpotFoto/spot1.jpg';
// import spot2 from '../public/SpotFoto/spot2.jpg';
import spot3 from '../public/SpotFoto/spot3.jpg';
import spot4 from '../public/SpotFoto/spot4.jpg';

//tiketGerbang
import tg1 from '../public/TIketGerbang/tg1.jpg';
// import tg2 from '../public/TIketGerbang/tg2.jpg';
import tg3 from '../public/TIketGerbang/tg3.jpg';
import tg4 from '../public/TIketGerbang/tg4.jpg';

// --- DATA GAMBAR ---
// Pastikan file-file ini ada di folder: public/kolamReguler, public/gallery, dst

const cafeImages: GalleryImage[] = [
  { src: cafeMerch1, alt: 'Cafe Merch 1' },
  { src: cafeMerch2, alt: 'Cafe Merch 2' },
  { src: cafeMerch3, alt: 'Cafe Merch 3' },
];

const kolamPrivat: GalleryImage[] = [
  { src: kolamPrivat2, alt: 'Kolam Privat 2' },
  { src: kolamPrivat3, alt: 'Kolam Privat 3' },
  { src: kolamPrivat4, alt: 'Kolam Privat 4' },
];

const kolamReguler: GalleryImage[] = [
  { src: kolamReguler1, alt: 'Kolam Reguler 1' },
  { src: kolamReguler2, alt: 'Kolam Reguler 2' },
  { src: kolamReguler3, alt: 'Kolam Reguler 3' },
];

const fasilitasImages: GalleryImage[] = [
  { src: fasilitas1, alt: 'Fasilitas 1' },
  { src: fasilitas2, alt: 'Fasilitas 2' },
  { src: fasilitas3, alt: 'Fasilitas 3' },
  { src: fasilitas4, alt: 'Fasilitas 4' },
  { src: fasilitas5, alt: 'Fasilitas 5' },
  { src: fasilitas6, alt: 'Fasilitas 6' },
];

const spotFotoImages: GalleryImage[] = [
  { src: spot1, alt: 'Spot Foto 1' },
  { src: spot3, alt: 'Spot Foto 3' },
  { src: spot4, alt: 'Spot Foto 4' },
];

const tiketGerbangImages: GalleryImage[] = [
  { src: tg1, alt: 'Gerbang & Ticketing 1' },
  { src: tg3, alt: 'Gerbang & Ticketing 3' },
  { src: tg4, alt: 'Gerbang & Ticketing 4' },
];

const categories: GalleryCategory[] = [
  {
    title: 'Kolam Privat',
    images: kolamPrivat,
  },
  {
    title: 'Kolam Reguler',
    images: kolamReguler,
  },
  {
    title: 'Fasilitas',
    images: fasilitasImages,
  },
  {
   title: 'Spot Foto',
   images: spotFotoImages, 
  },
  {
    title: 'Cafe & Foodcourt',
    images: cafeImages,
  },
  {
    title: 'Gerbang & Ticketing',
    images: tiketGerbangImages,
  }
  
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
