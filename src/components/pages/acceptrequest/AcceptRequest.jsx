import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";

const AcceptRequest = () => {
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
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Accept Request from Vendorss
        </span>
      </div>
      <div class="grid grid-cols-3 gap-x-18 gap-y-4">
        <div className="shadow-xl box-content border-2 w-80 ">
          <img
            className="h-40 px-20"
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            alt="Avatar"
          ></img>
          <div class="px-6 py-6">
            <p class="text-gray-700 text-base text-center">John Doe - Engineer</p>
          </div>
          <div class="grid grid-cols-6">
            <button class="bg-transparent col-start-1 col-span-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Accept
            </button>
            <button class="bg-transparent col-end-7 col-span-3 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Reject
            </button>
          </div>
        </div>
        <div className="shadow-xl box-content border-2 w-80 ">
          <img
            className="h-40 px-20"
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            alt="Avatar"
          ></img>
          <div class="px-6 py-6">
            <p class="text-gray-700 text-base pl-16">John Doe - Engineer</p>
          </div>
          <div class="grid grid-cols-6">
            <button class="bg-transparent col-start-1 col-span-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Accept
            </button>
            <button class="bg-transparent col-end-7 col-span-3 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Reject
            </button>
          </div>
        </div>
        <div className="shadow-xl box-content border-2 w-80 ">
          <img
            className="h-40 px-20"
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            alt="Avatar"
          ></img>
          <div class="px-6 py-6">
            <p class="text-gray-700 text-base pl-16">John Doe - Engineer</p>
          </div>
          <div class="grid grid-cols-6">
            <button class="bg-transparent col-start-1 col-span-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Accept
            </button>
            <button class="bg-transparent col-end-7 col-span-3 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Reject
            </button>
          </div>
        </div>
        <div className="shadow-xl box-content border-2 w-80 ">
          <img
            className="h-40 px-20"
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            alt="Avatar"
          ></img>
          <div class="px-6 py-6">
            <p class="text-gray-700 text-base pl-16">John Doe - Engineer</p>
          </div>
          <div class="grid grid-cols-6">
            <button class="bg-transparent col-start-1 col-span-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Accept
            </button>
            <button class="bg-transparent col-end-7 col-span-3 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Reject
            </button>
          </div>
        </div>
        <div className="shadow-xl box-content border-2 w-80 ">
          <img
            className="h-40 px-20"
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            alt="Avatar"
          ></img>
          <div class="px-6 py-6">
            <p class="text-gray-700 text-base pl-16">John Doe - Engineer</p>
          </div>
          <div class="grid grid-cols-6">
            <button class="bg-transparent col-start-1 col-span-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Accept
            </button>
            <button class="bg-transparent col-end-7 col-span-3 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Reject
            </button>
          </div>
        </div>
        <div className="shadow-xl box-content border-2 w-80 ">
          <img
            className="h-40 px-20"
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            alt="Avatar"
          ></img>
          <div class="px-6 py-6">
            <p class="text-gray-700 text-base pl-16">John Doe - Engineer</p>
          </div>
          <div class="grid grid-cols-6">
            <button class="bg-transparent col-start-1 col-span-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Accept
            </button>
            <button class="bg-transparent col-end-7 col-span-3 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(AcceptRequest);
