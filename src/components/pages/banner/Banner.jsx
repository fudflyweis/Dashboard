import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";

import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";

const Banner = () => {
  const [prop, setProp] = useState([]);
  const [popup, setPopup] = useState(false);
  let token = localStorage.getItem("Shaft");
  const [edit, setEdit] = useState("");
  const [banners, setBanners] = useState([]);

  const [image, setImage] = useState();
  const [name, setName] = useState("");

  const fetchBanners = async () => {
    const url = BaseUrl() + "/banner/get/banner";
    try {
      const res = await axios.get(url, auth);
      console.log("res", res);
      setBanners(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const addBanner = async (e) => {
    e.preventDefault();
    const url = BaseUrl() + "/banner/add/banner";
    const fd = new FormData();
    fd.append("myBanner", image);
    fd.append("bannername", name);

    try {
      const res = await axios.post(url, fd, auth);
      console.log("res", res);
      fetchBanners();
    } catch (err) {
      console.log("err", err);
    }
  };

  const deleteBanner = async (id) => {
    const url = BaseUrl() + `/banner/delete/banner/${id}`;

    try {
      const res = await axios.delete(url, auth);
      toast.success("Deleted Successfully");
      fetchBanners();
    } catch (err) {
      console.log("err", err);
      toast.error("Please try again");
    }
  };

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Banner
          </span>
          <button
            onClick={() => {
              setEdit("");
              setPopup(!popup);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-red-600 text-white tracking-wider"
          >
            Add Banner
          </button>
        </div>
        {/* Add Form */}
        <section
          className={
            popup
              ? "fixed top-0 left-0 wcomp bg-[rgb(0,0,0,0.5)] transition-all duration-150 w-full flex justify-center items-center overflow-y-auto  h-screen "
              : "hidden"
          }
        >
          <div className="bg-slate-100 sm:h-[90vh] h-[80vh] overflow-y-auto  lg:w-3/6  md:w-4/6 w-5/6 mx-auto  rounded-lg">
            <div className="flex sticky top-0 py-3 px-5 bg-slate-100 justify-between">
              <span className=" font-semibold text-black ">Add Banner</span>
              <div className="text-black py-0.5 text-2xl cursor-pointer font-medium tracking-wider">
                <IoMdClose
                  onClick={() => {
                    setEdit("");
                    setPopup(false);
                  }}
                />{" "}
              </div>
            </div>
            {console.log(edit?.name)}

            <form
              className="grid  grid-cols-1 gap-x-7 gap-y-4 p-4"
              onSubmit={addBanner}
            >
              <div className="inline-flex  w-full flex-col">
                {/* <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Banner Name
                </label>
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  className=" text-black-800 tracking-wider text-sm rounded-full py-1 px-2 outline-black"
                /> */}
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-black dark:text-black"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-600  text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="john.doe@company.com"
                  required
                ></input>
              </div>
              <div className="inline-flex  w-full flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 mb-1.5 tracking-wider font-semibold text-sm"
                >
                  Banner Image
                </label>
                <input
                  id="name"
                  required
                  type="file"
                  name="name"
                  placeholder=""
                  onChange={(e) => setImage(e.target.files[0])}
                  className=" text-gray-800 tracking-wider text-sm rounded-full py-1 px-2 outline-[rgb(241,146,46)]"
                />
              </div>

              <button
                type="submit"
                value="Add"
                className="bg-red-600 cursor-pointer w-40 hover:bg-red-900 py-1 rounded-full"
              >
                Add{" "}
              </button>
            </form>
          </div>
        </section>
        {/* <div className=" wcomp overflow-y-auto">
          <table className="table-auto  w-full text-left whitespace-no-wrap">
            <thead>
              <tr className=" border-b bg-slate-200 shadow-xl text-gray-900">
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Banner Image
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Banner Name
                </th>
                <th className="px-4 py-3 title-font tracking-widest font-medium md:text-base text-sm  ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {banners?.map((e, i) => {
                return (
                  <tr key={i} className="tracking-wider text-gray-900 ">
                    <td className=" py-3 w-36 md:text-base text-sm ">
                      <img
                        src={e.bannerimg}
                        alt=""
                        className="xl:w-36 shadow-xl rounded-lg lg:w-32 md:w-28 w-24"
                      />
                    </td>
                    <td className="px-4 py-3 md:text-base text-sm">
                      {e.bannername}
                    </td>
                    <td className="px-4 py-3  space-x-3">
                      <button className="font-semibold tracking-widest">
                        <GrFormClose
                          className="text-lg md:text-2xl"
                          onClick={() => deleteBanner(e._id)}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6 text-white	">
                  Banner name
                </th>
                <th scope="col" class="py-3 px-6 text-white	">
                  Type
                </th>
                <th scope="col" class="py-3 px-6 text-white	">
                  Action
                </th>
                <th scope="col" class="py-3 px-6 text-white	">
                  Status
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
                  Sliver
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Laptop
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Pending
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
                  White
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Laptop PC
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Pending
                </td>
              </tr>
              <tr class="bg-white white:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-dark"
                >
                  Magic Mouse 2
                </th>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Black
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Accessories
                </td>
                <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                  Completed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HOC(Banner);
