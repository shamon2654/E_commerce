import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

//routes
import {
  ActivationPage,
  BestSellingPage,
  EventPage,
  FAQPage,
  HomePage,
  LoginPage,
  ProductsPage,
  SignUpPage,
} from "./Routes"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { server } from "./server"

const App = () => {
  useEffect(() => {
    axios
      .get(`${server}/getuser`, { withCredentials: true })
      .then((res) => toast.success(res.data.message))
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </BrowserRouter>
  )
}

export default App
