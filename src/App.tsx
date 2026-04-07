/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  ArrowDownCircle, 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp,
  CheckCircle2,
  ExternalLink,
  Info
} from 'lucide-react';
import { CONTENT } from './constants';

const IconMap: Record<string, any> = {
  Droplets,
  ArrowDownCircle,
  Wrench,
  MapPin,
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-5'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Droplets size={24} />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-blue-900">JBALB</span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-blue-600">Sarawak</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {['Perkhidmatan', 'Tentang Kami', 'Aduan', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {item}
              </a>
            ))}
            <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-blue-300 active:scale-95">
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="rounded-lg p-2 text-slate-600 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 top-full w-full border-t bg-white p-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {['Perkhidmatan', 'Tentang Kami', 'Aduan', 'FAQ'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-lg font-medium text-slate-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="mt-4 w-full rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-200">
                  Hubungi Kami
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-900 pt-20">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1541944743827-e04bb645f996?q=80&w=2000&auto=format&fit=crop" 
            alt="Water infrastructure" 
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 ring-1 ring-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Berkhidmat Untuk Rakyat
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {CONTENT.hero.headline}
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-slate-300 sm:text-xl">
              {CONTENT.hero.subheadline}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95">
                {CONTENT.hero.ctaPrimary}
                <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="flex items-center justify-center rounded-full bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95">
                {CONTENT.hero.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats/Quick Info */}
        <div className="absolute bottom-0 left-0 w-full bg-white/5 py-8 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {[
              { label: 'Kawasan Liputan', value: '100+' },
              { label: 'Projek Aktif', value: '45' },
              { label: 'Rakyat Dilayani', value: '1.2M+' },
              { label: 'Hotline 24 Jam', value: 'Aktif' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs font-medium uppercase tracking-widest text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24" id="masalah">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {CONTENT.problems.title}
            </h2>
            <div className="mx-auto h-1.5 w-20 rounded-full bg-blue-600"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CONTENT.problems.items.map((item, i) => {
              const Icon = IconMap[item.icon];
              return (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="group rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl hover:ring-blue-100"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-slate-900 py-24 text-white" id="tentang-kami">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-600/20 blur-3xl"></div>
              <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {CONTENT.solutions.title}
              </h2>
              <div className="space-y-8">
                {CONTENT.solutions.items.map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-bold">{item.title}</h4>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[40px] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" 
                alt="Engineering" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                    <Info className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-blue-400">Fokus Utama</div>
                    <div className="text-lg font-medium">Kualiti Air & Kestabilan Bekalan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" id="perkhidmatan">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {CONTENT.services.title}
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Segala urusan bekalan air kini lebih mudah dengan perkhidmatan digital kami.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTENT.services.items.map((service, i) => (
              <a 
                key={i} 
                href={service.link}
                className="group flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-2 hover:shadow-2xl hover:ring-blue-600"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-6 text-sm text-slate-600">{service.description}</p>
                <span className="text-sm font-bold text-blue-600 group-hover:underline">Klik Untuk Info &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-blue-600 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Visi & Misi Kami</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">
              <h3 className="mb-4 text-2xl font-bold text-blue-100">Visi</h3>
              <p className="text-lg leading-relaxed">{CONTENT.trust.vision}</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-md">
              <h3 className="mb-4 text-2xl font-bold text-blue-100">Misi</h3>
              <p className="text-lg leading-relaxed">{CONTENT.trust.mission}</p>
            </div>
          </div>
          <div className="mt-16 rounded-3xl border border-white/20 bg-white/5 p-10">
            <p className="text-xl font-medium italic">"{CONTENT.trust.commitment}"</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" id="faq">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Soalan Lazim (FAQ)</h2>
            <p className="text-slate-600">Jawapan pantas untuk kemusykilan anda.</p>
          </div>

          <div className="space-y-4">
            {CONTENT.faq.map((item, i) => (
              <div 
                key={i} 
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button 
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-50"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-bold text-slate-900">{item.question}</span>
                  {activeFaq === i ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-100 bg-slate-50/50 p-6 text-slate-600"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24" id="aduan">
        <div className="absolute inset-0 bg-blue-900">
          <img 
            src="https://images.unsplash.com/photo-1518005020250-68594932097c?q=80&w=2000&auto=format&fit=crop" 
            alt="Water drop" 
            className="h-full w-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900"></div>
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">Perlukan Bantuan Segera?</h2>
          <p className="mb-10 text-xl text-blue-100">
            Jangan tunggu lagi. Laporkan sebarang gangguan atau mohon bekalan air baru hari ini.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-10 py-4 font-bold text-blue-900 shadow-xl transition-all hover:bg-blue-50 active:scale-95">
              Buat Aduan Sekarang
            </button>
            <button className="rounded-full border-2 border-white/30 bg-transparent px-10 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95">
              Hubungi JBALB
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-20 text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Droplets size={24} />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">JBALB Sarawak</span>
              </div>
              <p className="mb-8 text-sm leading-relaxed">
                Jabatan Bekalan Air Luar Bandar (JBALB) Sarawak komited menyediakan perkhidmatan air terbaik untuk kesejahteraan rakyat luar bandar.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-blue-600">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-white">Pautan Pantas</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white">Laman Utama</a></li>
                <li><a href="#" className="hover:text-white">Profil Jabatan</a></li>
                <li><a href="#" className="hover:text-white">Projek Pembangunan</a></li>
                <li><a href="#" className="hover:text-white">Tender & Sebut Harga</a></li>
                <li><a href="#" className="hover:text-white">Pusat Media</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-white">Hubungi Kami</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 text-blue-500" />
                  <span>Ibu Pejabat JBALB Sarawak, Tingkat 1, 4 & 5, Menara STC, Jalan Song, 93350 Kuching, Sarawak.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-blue-500" />
                  <span>+60 82-263 000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-blue-500" />
                  <span>jbalb@sarawak.gov.my</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-white">Waktu Operasi</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between">
                  <span>Isnin - Khamis</span>
                  <span className="text-white">8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Jumaat</span>
                  <span className="text-white">8:00 AM - 11:45 AM</span>
                </li>
                <li className="border-t border-white/10 pt-4 text-xs italic">
                  *Tutup pada Sabtu, Ahad & Cuti Umum. Hotline aduan aktif 24 jam.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 border-t border-white/5 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Jabatan Bekalan Air Luar Bandar (JBALB) Sarawak. Hak Cipta Terpelihara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
