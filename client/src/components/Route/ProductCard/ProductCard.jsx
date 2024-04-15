import React, { useState } from "react"
import { Link } from "react-router-dom"
import styles from "../../../styles/styles"
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai"
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard"

const ProductCard = ({ data, index }) => {
  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false)
  const d = data.name
  const product_name = d.replace(/\s+/g, "-")

  return (
    <div
      className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer "
      key={index}
    >
      <div className="flex justify-end"></div>
        <Link to={`/products/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/products/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex ">
            <AiFillStar
              className="mr-2 cursor-pointer "
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer "
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer "
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer "
              color="#F6BA00"
              size={20}
            />
            <AiOutlineStar
              className="mr-2 cursor-pointer "
              color="#F6BA00"
              size={20}
            />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                ${data.price === 0 ? data.price : data.discount_price}
              </h5>
              <h4 className={`${styles.price}`}>
                {data.price ? data.price + "$" : null}
              </h4>
            </div>
            <span className="font-[600] text-[17px] text-[#47c747]">
              {data.total_sell} Sold
            </span>
          </div>
        </Link>
        {/* side option */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Add to Wishlist "
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick View"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => setOpen(!open)}
            color="#444"
            title="Add to Card"
          />
          {open ? <ProductDetailsCard data={data} setOpen={setOpen} /> : null}
        </div>
      
    </div>
  )
}

export default ProductCard
