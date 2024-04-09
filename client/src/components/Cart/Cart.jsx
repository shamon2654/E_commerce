import React, { useState } from "react"

import { RxCross1 } from "react-icons/rx"
import { IoBagHandleOutline } from "react-icons/io5"
import { HiOutlineMinus, HiPlus } from "react-icons/hi"

import styles from "../../styles/styles"

const cartData = [
  {
    name: "Mac Air 256gb SSd and 8Gb Ram",
    discription: "test",
    price: 70000,
  },
  {
    name: "Mac Air 256gb SSd and 8Gb Ram",
    discription: "test",
    price: 24000,
  },
  {
    name: "Mac Air 256gb SSd and 8Gb Ram",
    discription: "test",
    price: 11000,
  },
]

const Cart = ({ setOpenCart }) => {
  return (
    <div className="fixed top-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25] bg-white flex flex-col justify-between shadow-sm">
        <dir>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* items length */}
          <div className={`${styles.normalFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]"> 3 Items </h5>
          </div>
          {/* cart single items */}
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </dir>
      </div>
    </div>
  )
}

const CartSingle = ({ data }) => {
    const [value, setValue] = useState(1)
    const totalPrice = data.price * value;
  return (
    <div  className="border-b p-4">
      <div className="w-full items-center flex">
        <div>
          <div
            className={`bg-[#e44343] border-[#753838] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px] "> {value}</span>
          <div
            className={`bg-[#5c585c]  rounded-full w-[25px] h-[25px] items-center justify-center flex cursor-pointer `}
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={18} color="#7d879ac" />
          </div>
              </div>
              <img src="https://m.media-amazon.com/images/I/81PtF30TLUL.AC_UY1100.jpg" alt="" className="w-[50px] h-[50px] ml-2" />
              <div className="pl[5px] ">
                  <h1>{data.name}</h1>
                  <h4 className="font-[400] text-[17px] pt-[3px] text-[#b81c1c]">US${totalPrice}</h4>
              </div>
              <RxCross1 className="cursor-pointer"/>
      </div>
    </div>
  )
}

export default Cart
