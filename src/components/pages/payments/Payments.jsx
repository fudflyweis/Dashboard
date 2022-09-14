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
import Table from "react-bootstrap/Table";

const Payments = () => {
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
          Payments
        </span>
      </div>
      {/* <div className="">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Transaction Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Pending</td>
              <td>$1000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Completed</td>
              <td>$999</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Completed</td>
              <td>$10000</td>
            </tr>
          </tbody>
        </Table>
      </div> */}
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 text-white	">
                Product name
              </th>
              <th scope="col" class="py-3 px-6 text-white	">
                Color
              </th>
              <th scope="col" class="py-3 px-6 text-white	">
                Transaction Status
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
                Sliver
              </td>
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
                White
              </td>
              <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                Pending
              </td>
              <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                $1999
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
                Completed
              </td>
              <td class="py-4 px-6 font-medium text-gray-900 dark:text-dark">
                $99
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HOC(Payments);
