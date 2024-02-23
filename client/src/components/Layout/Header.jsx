import React, { useState } from "react"
import styles from "../../styles/styles"
import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import { productData } from "../../static/data"

import { IoIosArrowForward } from "react-icons/io"

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchData, setSearchData] = useState("")
  const handleSearchCgange = (e) => {
    const term = e.target.value
    setSearchTerm(term)

    const filleredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      )
    term.length == 0 ? setSearchData("") : setSearchData(filleredProducts)
  }
  return (
    <div className={`${styles.section}`}>
      <div className=" hidden lg:flex lg:h-[50px] lg:my-[20px] items-center justify-between ">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg "
              alt=""
            />
          </Link>
        </div>
        {/* search Box */}
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="search Product..."
            value={searchTerm}
            onChange={handleSearchCgange}
            className="h-[40px] w-full px-2 border-[#ebf21e] border-[2px] rounded-md"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
          {searchData && searchData.length !== 0 ? (
            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
              {searchData &&
                searchData.map((i, index) => {
                  const d = i.name
                  console.log(d)
                  const product_name = d.replace(/\s+/g, "-")
                  return (
                    <Link to={`/product/${product_name}`}>
                      <div className="w-full flex items-start py-3">
                        <img
                          src={i.image_Url[0].url}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  )
                })}
            </div>
          ) : null}
        </div>
        <div className={`${styles.button}`}>
          <Link to="/seller">
            <h1 className="text-[#fff] flex items-center">
              {" "}
              Become Seller <IoIosArrowForward className="ml-1" />{" "}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
