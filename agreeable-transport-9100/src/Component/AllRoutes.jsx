import { Routes, Route } from "react-router-dom";
import Bus from "../Pages/Bus";
import Home from "../Pages/Home";
import Car from "../Pages/Car";
import Flight from "../Pages/Flight";
import Login from "../Pages/Login";
import PaymentForm from "../Pages/PaymentForm";
import Hotel from "../Pages/Hotel";
import SignUp from "../Pages/SignUp";
import OrderSuccessfull from "../Pages/OrderSuccessfull";
import SingleProductPage from "../Pages/SingleProductPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        <Route path="/bus" element={<Bus />} />
        <Route path="/car" element={<Car />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/paymentForm" element={<PaymentForm />} />
        <Route path="/ordersucccessfull" element={<OrderSuccessfull />} />
        <Route
          path="/products/:id"element={<SingleProductPage />}/>

        <Route path="/hotel" element={<Hotel />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
