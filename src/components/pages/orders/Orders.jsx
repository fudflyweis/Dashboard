import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

import HOC from "../../layout/HOC";
import axios from "axios";
import auth from "../../Auth";
import { Oval } from "react-loader-spinner";
import BaseUrl from "../../BaseUrl";
import { toast } from "react-toastify";

const Orders = () => {
  const [popup, setPopup] = useState(false);
  const [edit, setEdit] = useState([]);
  const [img, setImg] = useState(
    "https://media.istockphoto.com/vectors/real-estate-design-element-vector-id1308743863?b=1&k=20&m=1308743863&s=170667a&w=0&h=QlOIRhpsyxG-PM5EJNiNImCF1cJY07YpMbKGZKLFZF8="
  );
  const [image, setImage] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addCat, setAddCat] = useState(false);
  const [name, setName] = useState("");

  const fetchOrders = async () => {
    const url = BaseUrl() + "/order/getordersbyadmin";
    try {
      const res = await axios.get(url, auth);
      console.log("res", res);
      setOrders(res.data.orders);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Orders
          </span>
          {/* <button
            onClick={() => {
              setEdit("");
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[rgb(241,146,46)] text-white tracking-wider"
          >
            Add Orders
          </button> */}
        </div>
        {/* Add Form */}
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
        >
          <div className="bg-slate-100 overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-[rgb(241,146,46)] ">
                Add Orders
              </span>
              <div className="text-[rgb(241,146,46)] py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    setEdit("");
                    setPopup(false);
                  }}
                />{" "}
              </div>
            </div>
            {console.log(edit?.name)}
            {/* form */}

            <form className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4">
              {/*  Image */}

              {/*  Name */}
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Name*
                </label>
                <input
                  value={edit ? edit.category : name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  required
                  type="text"
                  placeholder=""
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>
              <div className="inline-flex  w-full flex-col">
                <label className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm">
                  Category Image
                </label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                  type="file"
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>
              {/*  price */}

              <button
                type="submit"
                className="bg-[rgb(241,146,46)] flex items-center justify-center cursor-pointer w-40 hover:bg-[rgb(241,146,46)] py-1 rounded-full"
              >
                {addCat ? (
                  <Oval height={30} color="black" secondaryColor="black" />
                ) : (
                  "Add"
                )}
              </button>
            </form>
          </div>
        </section>
        <div className=" wcomp overflow-y-auto">
          <table className="table-auto h-full w-full text-left whitespace-no-wrap">
            {/* <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest rounded-tr-lg font-medium md:text-base text-sm  ">
                  Orders
                </th>
              </tr>
            </thead> */}
            {/* {loading ? (
              <Oval />
            ) : (
              <tbody>
                {orders?.map((e, i) => {
                  return (
                    <tr key={i} className="tracking-wider text-gray-900 ">
                      <td className="px-4 py-3 md:text-base text-sm">
                        {e.category}
                      </td>

                      <td className="px-4 py-3  space-x-3">
                        <button
                          onClick={() => {
                            setEdit(e);

                            setPopup(!popup);
                          }}
                          className="font-semibold tracking-widest"
                        >
                          <AiOutlineEdit className="text-lg md:text-2xl" />
                        </button>
                        <button className="font-semibold tracking-widest">
                          <GrFormClose className="text-lg md:text-2xl" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )} */}
            <thead class="text-xs text-gray-700 uppercase h-full bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6 text-white	">
                  Order name
                </th>
                <th scope="col" class="py-3 px-6 text-white	">
                  Order Status
                </th>
                <th scope="col" class="py-3 px-6 text-white	">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Completed
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $2999
                </td>
              </tr>
              <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark"
                >
                  Microsoft Surface Pro
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Pending
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $1999
                </td>
              </tr>
              <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark dark:border-gray-700"
                >
                  Magic Mouse 2
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Completed
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $99
                </td>
              </tr>
              <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark "
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Completed
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $2999
                </td>
              </tr>
              <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark"
                >
                  Microsoft Surface Pro
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Pending
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $1999
                </td>
              </tr>
              <tr class="bg-white border-b dark:border-gray-700 white:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark"
                >
                  Magic Mouse 2
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Completed
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $99
                </td>
              </tr>
              <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark dark:border-gray-700"
                >
                  Apple Ipad
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Completed
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $99
                </td>
              </tr>
              <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark "
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Completed
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $2999
                </td>
              </tr>
              <tr class="bg-white border-b white:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark"
                >
                  Microsoft Surface Pro
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Pending
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  $1999
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Orders);
