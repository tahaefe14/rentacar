export default function Foto() {
  return (
    <div id="foto" className="flex flex-col justify-end items-center h-screen relative">
      <img 
        src="/images/anafoto.jpg" 
        className="w-full h-full object-cover absolute top-0 left-0"
        alt="Ana Fotoğraf"
      />

      <div className="relative z-10 w-full px-4 pb-10 text-center">
        <p className="text-white font-sans font-medium
                      text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                      max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto">
          Araç kiralamada güvenilir, hızlı ve ekonomik çözümler sunuyoruz. İhtiyacınıza uygun aracı kolayca seçin, hemen yola çıkın!
        </p>
      </div>
    </div>
  );
}
