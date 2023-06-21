import { useState } from "react";

import { AsideMenu } from "./components/AsideMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Clients } from "./pages/Clients";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container flex">
      <BrowserRouter>
        <AsideMenu show={show} setShow={setShow} />
        <div
          className={`relative ${
            show ? "left-[20vw] w-[80vw]" : "left-[2vw] w-[98vw]"
          } p-4 transition-all`}
        >
          <Routes>
            <Route path="/" element={<Clients />} />
            {/* <Route path="/clients" element={Clients} />
            <Route path="/clients/add" element={AddClient} />
            <Route path="/clients/:id" element={ClientDetails} />
            <Route path="/clients/:id/edit" element={EditClient} />
            <Route path="/orders" element={Orders} />
            <Route path="/orders/add" element={AddOrder} />
            <Route path="/orders/:id" element={OrderDetails} />
            <Route path="/invoices" element={Invoices} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
