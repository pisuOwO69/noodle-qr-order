import { useCart } from "./CartContext";
import CardButton from "./CardButton";

export default function Kitchen() {
  const { orders, removeOrder } = useCart();

  return (
    <div
    style={{
    padding: "20px",
    minHeight: "100vh",
    background: "#f2f2f2"
  }}
>
      <h1>หน้าครัว </h1>

      <CardButton
        to="/menu"
        title="ไปหน้าเมนู"
        subtitle="เลือกเมนูอาหาร"
      />

      {orders.length === 0 ? (
        <h2 style={{ marginTop: "20px" }}>ยังไม่มีออเดอร์</h2>
      ) : (
        orders.map(order => (
          <div
            key={order.id}
              style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              fontSize: "20px"
            }}
          >
            <h2 style={{ fontSize: "26px" }}>🪑 โต๊ะ {order.table}</h2>
            <p style={{ fontSize: "18px" }}>เวลา: {order.time}</p>

            {order.items.map((item, i) => (
              <div key={i} style={{ marginLeft: "10px" }}>
                <p>• เมนู: {item.name}</p>
                <p>• ขนาด: {item.size}</p>
                <p>• เผ็ด: {item.spicy}</p>
                <p>• น้ำซุป: {item.soup}</p>
                <p>• เส้น: {item.noodleType}</p>
                <p>• ผัก: {item.vegetable}</p>
                <p>
                  • ท็อปปิ้ง:{" "}
                  {item.toppings.length ? item.toppings.join(", ") : "ไม่มี"}
                </p>
                <strong>ราคา: {item.price} บาท</strong>
                <hr />
              </div>
            ))}

            <button
              onClick={() => removeOrder(order.id)}
              style={{
                marginTop: "15px",
                padding: "15px",
                width: "100%",
                background: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "20px"
              }}
            >
              ทำเสร็จแล้ว
            </button>
          </div>
        ))
      )}
    </div>
  );
}
