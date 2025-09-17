export default function Hakkimizda() {
    return (
        <div id="hakkimizda" className="flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-10 px-4 md:px-20 py-10 md:py-0 h-screen">

            <div className="text-center md:text-center">
                <p className="text-2xl sm:text-3xl md:text-3xl font-sans font-medium">
                    Hakkımızda
                </p>
                <p className="text-base sm:text-lg md:text-2xl font-sans font-medium max-w-screen-sm md:max-w-md mt-4">
                    Firmamız, geniş araç filosu ve müşteri memnuniyetini ön planda tutan hizmet
                    anlayışıyla faaliyet göstermektedir. Kısa dönem ya da uzun dönem kiralama
                    ihtiyaçlarınızda, şehir içi veya şehir dışı yolculuklarınızda güvenle tercih
                    edebileceğiniz araç çözümleri sunuyoruz. Amacımız, kolay rezervasyon imkanı,
                    şeffaf fiyat politikası ve 7/24 destek ile yolculuklarınızı daha konforlu hale getirmektir.
                </p>
            </div>

            <img src="/images/foto22.jpg" className="w-96 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl object-cover" alt="Hakkımızda"/>
        </div>
    );
}
