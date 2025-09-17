export default function Bizkimiz() {
  return (
    <div id="bizkimiz" className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-20 px-4 md:mt-52">
      
      <img src="/images/foto21.jpg" className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl object-cover" alt="Biz kimiz"
      />

      <div className="text-center md:text-center">
        <p className="text-2xl sm:text-3xl font-sans font-medium">
          Biz kimiz?
        </p>
        <p className="text-base sm:text-lg md:text-2xl font-sans font-medium max-w-screen-sm md:max-w-md mt-4">
          Biz, müşterilerimizin seyahatlerini kolay, güvenilir ve
          keyifli hale getirmek için kurulmuş profesyonel bir araç
          kiralama platformuyuz. İhtiyacınıza uygun araçları, uygun
          fiyat ve üstün hizmet kalitesiyle buluşturuyoruz.
        </p>
      </div>
    </div>
  );
}
