import { useState } from "react";
import { AiOutlineUser, AiOutlineCreditCard } from "react-icons/ai";
import { MdOutlineAirlineSeatReclineNormal, MdOutlineEvent } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { FaGasPump, FaCogs } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";


export default function Cart() {
    const [openModalId, setOpenModalId] = useState(null);

    const cars = [
        {
            id: 1,
            name: "Peugeot",
            img: "/images/foto5.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 2,
            name: "Ford",
            img: "/images/foto6.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 3,
            name: "Bmw",
            img: "/images/foto7.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 4,
            name: "Bmw",
            img: "/images/foto8.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 5,
            name: "Bmw",
            img: "/images/foto9.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 6,
            name: "Bmw",
            img: "/images/foto10.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 7,
            name: "Bmw",
            img: "/images/foto11.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 8,
            name: "Bmw",
            img: "/images/foto12.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 9,
            name: "Bmw",
            img: "/images/foto13.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 10,
            name: "Bmw",
            img: "/images/foto14.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 11,
            name: "Mercedes",
            img: "/images/foto15.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 12,
            name: "Mercedes",
            img: "/images/foto16.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 13,
            name: "Audi",
            img: "/images/foto17.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 14,
            name: "Audi",
            img: "/images/foto18.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 15,
            name: "Audi",
            img: "/images/foto19.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        },
        {
            id: 16,
            name: "Audi",
            img: "/images/foto20.png",
            details: [
                "5 Yetişkin",
                "2 Büyük Bavul",
                "Yolcu Airbag",
                "ABS",
                "Benzin",
                "Otomatik",
                "Kiralama Koşulları: 21 Yaş ve üstü, Ehliyet Yaşı 1 ve üzeri"
            ]
        }
    ];


    return (
        <div id="cart" className="p-6 mt-40">
            <h1 className="text-4xl font-bold mb-6 text-left">Kiralık Araçlar</h1>

            <div className="flex flex-wrap justify-center items-center gap-6 mt-20">
                {cars.map((car) => (
                    <div
                        key={car.id}
                        className="flex flex-col w-84 h-96 justify-center bg-gray-200 rounded-md gap-4 relative"
                    >
                        <img src={car.img} alt={car.name} />
                        <div className="flex justify-between items-center px-4">
                            <p className="text-3xl">{car.name}</p>
                            <button
                                className="bg-slate-600 rounded-md font-medium p-2 px-4 text-white hover:bg-slate-500 duration-100"
                                onClick={() => setOpenModalId(car.id)}
                            >
                                Detaylar
                            </button>
                        </div>

                        {/* Modal */}
                        {openModalId === car.id && (
                            <div
                                className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                                onClick={() => setOpenModalId(null)}
                            >
                                <div
                                    className="bg-white p-6 rounded shadow-lg w-[90%] max-w-4xl h-auto relative flex flex-col gap-4 animate-fadeIn"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Kapatma X butonu */}
                                    <button
                                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold"
                                        onClick={() => setOpenModalId(null)}
                                    >
                                        &times;
                                    </button>

                                    {/* Araç görseli */}
                                    <img
                                        src={car.img}
                                        alt={car.name}
                                        className="w-full h-auto max-h-80 sm:max-h-96 object-cover rounded mb-4"
                                    />


                                    <h2 className="text-xl font-bold mb-4">{car.name} Detayları</h2>

                                    {/* İki sütun */}
                                    <div className="grid grid-cols-2 gap-6">
                                        {/* Araç Özellikleri */}
                                        <div>
                                            <h3 className="font-semibold mb-2">Araç Özellikleri</h3>
                                            <div className="flex flex-col gap-2 text-gray-700">
                                                <div className="flex items-center gap-2"><AiOutlineUser /> 5 Yetişkin</div>
                                                <div className="flex items-center gap-2"><MdOutlineAirlineSeatReclineNormal /> 2 Büyük Bavul</div>
                                                <div className="flex items-center gap-2"><GiCarDoor /> Yolcu Airbag</div>
                                                <div className="flex items-center gap-2"><FaCogs /> ABS</div>
                                                <div className="flex items-center gap-2"><FaGasPump /> Benzin</div>
                                                <div className="flex items-center gap-2"><FaCogs /> Otomatik</div>
                                            </div>
                                        </div>

                                        {/* Kiralama Koşulları */}
                                        <div>
                                            <h3 className="font-semibold mb-2">Kiralama Koşulları</h3>
                                            <div className="flex flex-col gap-2 text-gray-700">
                                                <div className="flex items-center gap-2"><MdOutlineEvent /> 21 Yaş ve Üstü</div>
                                                <div className="flex items-center gap-2"><BsPersonWorkspace /> Ehliyet Yaşı 1 ve Üzeri</div>
                                                <div className="flex items-center gap-2"><AiOutlineCreditCard /> 1 Kredi Kartı</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>
                ))}
            </div>

            {/* Tailwind fade-in animasyonu */}
            <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
