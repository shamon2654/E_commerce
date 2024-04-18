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
  ProductsDetailsPage,
  ProductsPage,
  ProfilePage,
  SignUpPage,
} from "./Routes"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useSelector } from "react-redux"
import store from "./Redux/Store"
import { loadUser } from "./Redux/actions/User"

const App = () => {
  const { loading } = useSelector((state) => state.user)
  
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
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
            <Route path="/products/:name" element={<ProductsDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
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
      )}
    </>
  )
}

export default App
