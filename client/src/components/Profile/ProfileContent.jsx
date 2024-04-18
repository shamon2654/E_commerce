import React, { useState } from "react"
import { backend_url } from "../../server"
import { useSelector } from "react-redux"
import { AiOutlineArrowRight, AiOutlineCamera } from "react-icons/ai"
import styles from "../../styles/styles"
import { Link } from "react-router-dom"
import { DataGrid } from "@mui/x-data-grid"

const ProfileContent = ({ active }) => {
    const  user  = useSelector((state) => state.user)

  const [name, setName] = useState(user && user.user.name)
  const [email, setEmail] = useState(user && user.user.email)
  const [zipCode, setZipCode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")

  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full ">
            <div className="relative">
              <img
                src={`${backend_url}${user.user.avatar.public_id}`}
                alt=""
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ae13a]"
              />
              <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className="w-full px-5">
            <form onSubmit={""} aria-required={true}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block"> Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] border border-[#9f9708]`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block"> Email Id</label>
                  <input
                    type="email"
                    className={`${styles.input} !w-[95%] border border-[#9f9708]`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block"> Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] border border-[#9f9708]`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block"> Zip-code</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] border border-[#9f9708]`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block"> Address 1</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] border border-[#9f9708]`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block"> Zip-code</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] border border-[#9f9708]`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  className="w-[250px] h-[40px] border border-[#9f9708] text-center text-[#9f9708] rounded-[3px] mt-8 cursor-pointer "
                  value={"Update"}
                  required
                />
              </div>
            </form>
          </div>
        </>
      )}

      {/* order page */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}
    </div>
  )
}

const AllOrders = () => {
    const orders = [
      {
        _id: "7463hvbfbhfbrtr28820221",
        orderItems: [
          {
            name: "Iphone 14 pro max",
          },
        ],
        totalPrice: 120,
        orderStatus: "Processing",
      },
    ];
  
    const columns = [
      { field: "id", headerName: "ID", width: 300 },
      {
        field: "itemsQty",
        headerName: "itemsQty",
        width: 150,
        editable: true,
      },
      {
        field: "total",
        headerName: "total",
        width: 150,
        editable: true,
      },
      {
        field: "status",
        headerName: "status",
        type: "number",
        width: 110,
        editable: true,
      },
      {
        field: " ",
        flex: 1,
        headerName: "",
        type: "number",
        minWidth: 150,
        editable: true,
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/order/${params.id}`}>
                <button className="cursor-pointer mr-10" title="view Details">
                  <AiOutlineArrowRight size={20} />
                </button>
              </Link>
            </>
          );
        },
      },
    ];
  
    const row = [];
  
    orders &&
      orders.forEach((item) => {
        row.push({
          id: item._id,
          itemsQty: item.orderItems.length,
          total: "US$ " + item.totalPrice,
          status: item.orderStatus,
        });
      });
    return (
      <>
        <div className="pl-8 pt-1">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableRowSelectionOnClick
            autoHeight
          />
        </div>
      </>
    );
  };

export default ProfileContent
