import { Info, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-10">

                {/* Logo ve kısa açıklama */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white">Rentacar</h2>
                    <p className="mt-4 text-sm leading-6">
                        Güvenilir, hızlı ve ekonomik araç kiralama çözümleri sunuyoruz.
                        İhtiyacınıza uygun aracı seçin, hemen yola çıkın!
                    </p>
                </div>

                {/* Kurumsal */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Kurumsal</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Anasayfa</a></li>
                        <li><a href="#" className="hover:text-white">Biz Kimiz</a></li>
                        <li><a href="#" className="hover:text-white">Araçlar</a></li>
                        <li><a href="#" className="hover:text-white">Hakkımızda</a></li>
                    </ul>
                </div>

                {/* Destek */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Destek</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Sıkça Sorulan Sorular</a></li>
                        <li><a href="#" className="hover:text-white">Gizlilik Politikası</a></li>
                        <li><a href="#" className="hover:text-white">Kullanım Şartları</a></li>
                    </ul>
                </div>

                {/* İletişim */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">İletişim</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            📍 İstanbul, Türkiye
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4" /> +90 555 555 55 55
                        </li>
                        <li className="flex items-center gap-2">
                            <Info className="w-4 h-4" /> info@rentacar.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Alt kısım */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Rentacar. Tüm Hakları Saklıdır.
            </div>
        </footer>
    );
}
