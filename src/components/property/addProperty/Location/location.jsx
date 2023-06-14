import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
// import Header from "../../header/header";
// import Sidebar from "../../sidebar/sidebar";
import "./location.css";
const LocationFormInfo = () => {
  const locationContext = useContext(UserContext);
  const generalInfo = locationContext.id;
  const navigate = useNavigate();
  useEffect(() => {
    locationContext.loginStatus ? <></> : navigate('/signin')
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
    generalInfo: generalInfo,
    authorId: locationContext.userData.id,
  });

  const handleClear = () => {
    setFormData({
      email: "",
      city: "",
      area: "",
      pincode: "",
      address: "",
      landmark: "",
      latitude: "",
      longitude: "",
      generalInfo: generalInfo,
      authorId: locationContext.userData.id,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend = { ...formData, generalInfo };

    fetch("https://real-estate-backend-g14x.onrender.com/property/api/pro/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend ),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        locationContext.updateDataRefresh();

        navigate("/list");
      })
      .catch((error) => {
        navigate("/list");
        console.error(error);
      });
  };

  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      <div className="location-info-row">
        <h3>ADD NEW PROPERTY</h3>
        <ul className="location-ul-row">
          <li>Basic info</li>
          <li>Property Details</li>
          <li>General Info</li>
          <li className="location-li">Location Info</li>
        </ul>
      </div>
      <div className="location-form-container">
        <form onSubmit={handleSubmit}>
          <div className="location-form-flexbox">
            <div>
              <label>
                Email <span style={{ color: "red" }}>*</span>:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                City <span style={{ color: "red" }}>*</span>:
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select city</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Kolhapur">Kolhapur</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Area:
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                />
              </label>
              <label>
                Pincode:
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Address:
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>
              <label>
                Landmark:
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Latitude:
                <input
                  type="text"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                />
              </label>
              <label>
                Longitude:
                <input
                  type="text"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <button onChange={handleClear}>Clear</button>
            </div>
            <div>
              <button type="submit">Add Property</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LocationFormInfo;
