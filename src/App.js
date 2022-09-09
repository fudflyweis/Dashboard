import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import History from "./components/pages/history/History";
import Gallery from "./components/pages/gallery/gallery";
import ManageProfiles from "./components/pages/manageProfiles/ManageProfiles";
import Payments from "./components/pages/payments/Payments";
import UploadServices from "./components/pages/uploadservices/UploadServices";
import AcceptRequest from "./components/pages/acceptrequest/AcceptRequest";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/pages/products/Products";
import Categories from "./components/pages/categories/Categories";
import Banner from "./components/pages/banner/Banner";
import Orders from "./components/pages/orders/Orders";
import Terms from "./components/pages/terms/Terms";
import Privacy from "./components/pages/privacyPolicy/Privacy";
import Support from "./components/pages/support/Support";
import Wishlist from "./components/pages/wishlist/Wishlist";
import AddProduct from "./components/pages/products/AddProduct";
import VendorLogin from "./vendorPanel/components/forms/VendorLogin.jsx";
import VendorHistory from "./vendorPanel/components/pages/history/VendorHistory";
import VendorProducts from "./vendorPanel/components/pages/products/VendorProducts";
import VendorServices from "./vendorPanel/components/pages/serviceregistration/ServiceRegistration";
import VendorCategories from "./vendorPanel/components/pages/categories/VendorCategories";
import VendorTask from "./vendorPanel/components/pages/tasks/TaskAllotment";
import VendorTaskPerformed from "./vendorPanel/components/pages/tasks/TaskPerformed";
import VendorAcceptRequest from "./vendorPanel/components/pages/acceptrequest/AcceptRequest";
import ManageProducts from "./vendorPanel/components/pages/manageProducts/ManageProducts";
import ManagePartnerMerchant from "./vendorPanel/components/pages/partnermerchant/ManagePartnerMerchant";
import ManageCategoryDetails from "./vendorPanel/components/pages/managecategorydetails/CategoryDetails";
import PaidAdsFeature from "./vendorPanel/components/pages/paidAds/AdsFeature";
import VendorOrders from "./vendorPanel/components/pages/orders/VendorOrders";
import VendorSupport from "./vendorPanel/components/pages/support/VendorSupport";
import Commission from "./vendorPanel/components/pages/commission/Commission";
import VendorReports from "./vendorPanel/components/pages/reports/VendorReports";
import VendorComplaints from "./vendorPanel/components/pages/complaints/VendorComplaints";
import VendorComments from "./vendorPanel/components/pages/comments/VendorComments";
import VendorTransactions from "./vendorPanel/components/pages/transactions/VendorTransactions";
import VendorUsers from "./vendorPanel/components/pages/users/VendorUsers";
import VendorDashboard from "./vendorPanel/components/pages/VendorDashboard";
import VendorPrivacy from "./vendorPanel/components/pages/privacyPolicy/VendorPrivacy";
import VendorFavorites from "./components/pages/favorites/VendorFavorites";
import CouponsDiscount from "./vendorPanel/components/pages/couponsDiscount/CouponsDiscount";
import Forgot from "./components/forms/Forgot";
import Vendors from "./components/pages/vendors/Vendors";
import AdsFeature from "./vendorPanel/components/pages/paidAds/AdsFeature";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/manageprofiles" element={<ManageProfiles />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/uploadservices" element={<UploadServices />} />
        <Route path="/acceptrequest" element={<AcceptRequest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/banners" element={<Banner />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacyPolicy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addProduct" element={<AddProduct />} />
        {/* ---------------Vendor Panel----------------------- */}
        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/vendorHistory" element={<VendorHistory />} />
        <Route path="/vendorProducts" element={<VendorProducts />} />
        <Route path="/serviceregistration" element={<VendorServices />} />
        <Route path="/taskallotment" element={<VendorTask />} />
        <Route path="/taskperformed" element={<VendorTaskPerformed />} />
        <Route path="/request" element={<VendorAcceptRequest />} />
        <Route path="/manageproducts" element={<ManageProducts />} />
        <Route
          path="/managepartnermerchant"
          element={<ManagePartnerMerchant />}
        />
        <Route
          path="/managecategorydetails"
          element={<ManageCategoryDetails />}
        />
        <Route path="/paidAdsFeature" element={<AdsFeature />} />
        <Route path="/vendorCategories" element={<VendorCategories />} />
        <Route path="/vendorOrders" element={<VendorOrders />} />
        <Route path="/vendorSupport" element={<VendorSupport />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/vendorReports" element={<VendorReports />} />
        <Route path="/vendorComplaints" element={<VendorComplaints />} />
        <Route path="/vendorComments" element={<VendorComments />} />
        <Route path="/vendorTransactions" element={<VendorTransactions />} />
        <Route path="/vendorUsers" element={<VendorUsers />} />
        <Route path="/vendorPrivacy" element={<VendorPrivacy />} />
        <Route path="/vendorFavorites" element={<VendorFavorites />} />
        <Route path="/vendorCoupons" element={<CouponsDiscount />} />
        <Route path="/vendorCommission" element={<Commission />} />
      </Routes>
    </>
  );
}

export default App;
