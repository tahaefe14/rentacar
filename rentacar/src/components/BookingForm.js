import { useState } from "react";

export default function BookingForm() {
  const [cars] = useState([
    { id: 1, name: "Renault Clio", plate: "34ABC01", daily_price: 40 },
    { id: 2, name: "VW Passat", plate: "34DEF02", daily_price: 70 },
    { id: 3, name: "Ford Transit", plate: "34GHI03", daily_price: 90 },
  ]);

  const [bookings, setBookings] = useState([]);
  const [carId, setCarId] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [msg, setMsg] = useState(null);

  const handleSubmit = () => {
    if (!carId || !startAt || !endAt || !name) {
      setMsg({ type: "error", text: "Lütfen gerekli alanları doldurun." });
      return;
    }

    const start = new Date(startAt);
    const end = new Date(endAt);
    if (isNaN(start) || isNaN(end) || start >= end) {
      setMsg({ type: "error", text: "Tarihleri kontrol edin." });
      return;
    }

    // Çakışma kontrolü
    const hasConflict = bookings.some(
      (b) =>
        b.carId === parseInt(carId) &&
        !(new Date(b.endAt) <= start || new Date(b.startAt) >= end)
    );
    if (hasConflict) {
      setMsg({
        type: "error",
        text: "Seçilen tarih aralığında bu araç dolu.",
      });
      return;
    }

    // Fiyat hesaplama
    const car = cars.find((c) => c.id === parseInt(carId));
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const total = (car.daily_price * (days || 1)).toFixed(2);

    // Yeni rezervasyonu kaydet
    const newBooking = {
      id: bookings.length + 1,
      carId: parseInt(carId),
      carName: car.name,
      startAt,
      endAt,
      name,
      phone,
      notes,
      total,
    };
    setBookings([...bookings, newBooking]);

    setMsg({
      type: "success",
      text: `Rezervasyon başarılı ✅ Araç: ${car.name}, Toplam: ${total}₺`,
    });

    // Form sıfırla
    setCarId("");
    setStartAt("");
    setEndAt("");
    setName("");
    setPhone("");
    setNotes("");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Araç Kiralama Randevu Sistemi
      </h2>

      <label className="block mb-2 text-gray-600">Araç Seç</label>
      <select
        value={carId}
        onChange={(e) => setCarId(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      >
        <option value="">Seçiniz...</option>
        {cars.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name} ({c.plate}) - {c.daily_price}₺/gün
          </option>
        ))}
      </select>

      <label className="block mb-2 text-gray-600">Başlangıç</label>
      <input
        type="datetime-local"
        value={startAt}
        onChange={(e) => setStartAt(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />

      <label className="block mb-2 text-gray-600">Bitiş</label>
      <input
        type="datetime-local"
        value={endAt}
        onChange={(e) => setEndAt(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />

      <label className="block mb-2 text-gray-600">Ad Soyad</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />

      <label className="block mb-2 text-gray-600">Telefon</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />

      <label className="block mb-2 text-gray-600">Not</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Rezervasyon Yap
      </button>

      {msg && (
        <div
          className={`mt-4 p-3 rounded-lg ${
            msg.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {msg.text}
        </div>
      )}

      {bookings.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Yapılan Rezervasyonlar</h3>
          <ul className="space-y-3">
            {bookings.map((b) => (
              <li
                key={b.id}
                className="border rounded-lg p-3 bg-gray-50 text-gray-700"
              >
                <strong>{b.carName}</strong> ({b.startAt} → {b.endAt})  
                <br />
                {b.name} / {b.phone}  
                <br />
                Toplam: {b.total}₺
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
