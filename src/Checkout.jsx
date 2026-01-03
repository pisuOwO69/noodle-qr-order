import { useCart } from "./CartContext";

export default function Checkout() {
  const { cart } = useCart();
  const table = localStorage.getItem("tableNumber");

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  if (cart.length === 0) {
    return <h2>ไม่มีรายการอาหาร</h2>;
  }

  const promptPayNumber = "0812345678"; // เบอร์ร้าน
  const qrUrl = `https://promptpay.io/${promptPayNumber}/${total}`;

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>ชำระเงิน</h1>
      <h2>โต๊ะ {table}</h2>

      {cart.map((item, i) => (
        <p key={i}>
          {item.name} - {item.price} บาท
        </p>
      ))}

      <h2>รวมทั้งหมด: {total} บาท</h2>

      <img
        src={qrUrl}
        alt="QR Payment"
        style={{ width: 250, marginTop: 20 }}
      />

      <p>📱 สแกนเพื่อชำระเงิน</p>
    </div>
  );
}
