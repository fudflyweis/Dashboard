import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEdit, AiFillCamera } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { toast } from "react-toastify";
import "./user.css";
import ProfileUi from "react-profile-card";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
import HOC from "../../layout/HOC";
import axios from "axios";
import BaseUrl from "../../BaseUrl";
import auth from "../../Auth";

const ManageProfiles = () => {
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
          Manage Profiles
        </span>
      </div>
      <div className="grid-rows-1 ">
        <ProfileUi
          imgUrl="https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg"
          name="vineet jk"
          designation="designer"
          className="pt-6"
        />
      </div>
      {/* <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Anna Becker</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HOC(ManageProfiles);
