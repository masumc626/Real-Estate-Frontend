import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
// import Header from "../../header/header";
// import Sidebar from "../../sidebar/sidebar";
import "./location.css";
import PropertyNav from "../../../PropertyNav";
import Loading from "../../../../utils/Loading";
const LocationFormInfo = () => {
  const { updateFormData, formData, loginStatus, SERVER_ADDRESS, updateDataRefresh, image } = useContext(UserContext);
  const navigate = useNavigate();
  const [response, setResponse] = useState(false);
  useEffect(() => {
    loginStatus ? <></> : navigate('/signin')
  });


  const handleSubmit = async () => {

    const convertedFormData = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      convertedFormData.append(`${key}`, `${value}`);
      // console.log(convertedFormData.get(`${key}`))
    }

    convertedFormData.append("image", image);

    await fetch(
      `${SERVER_ADDRESS}property`,
      {
        method: "post",
        body: convertedFormData
      }
    )
      .then((res) => {
        setResponse(false);
        if (res.status === 200) {
          return res.json();
        }
        // console.log(res)
        throw new Error('Falied to save data Please try again')
      })
      .then((data) => {
        navigate('/list');
        updateDataRefresh();
      })
      .catch((err) => {
        console.log(err.message);
      })
  }


  // const [formData, setFormData] = useState({
  //   email: "",
  //   city: "",
  //   area: "",
  //   pincode: "",
  //   address: "",
  //   landmark: "",
  //   latitude: "",
  //   longitude: "",
  //   generalInfo: generalInfo,
  //   authorId: locationContext.userData.id,
  // });

  // const handleClear = () => {
  //   setFormData({
  //     email: "",
  //     city: "",
  //     area: "",
  //     pincode: "",
  //     address: "",
  //     landmark: "",
  //     latitude: "",
  //     longitude: "",
  //     generalInfo: generalInfo,
  //     authorId: locationContext.userData.id,
  //   });
  // };

  // const updateFormData = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const dataToSend = { ...formData, generalInfo };

  //   fetch("https://real-estate-backend-g14x.onrender.com/property/api/pro/location", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(dataToSend ),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       locationContext.updateDataRefresh();

  //       navigate("/list");
  //     })
  //     .catch((error) => {
  //       navigate("/list");
  //       console.error(error);
  //     });
  // };

  return (
    <>
      {response ? <Loading/> : <></>}
      <PropertyNav section={"location"} />
      <div className="location-form-container">
        <form onSubmit={(e) => {
          e.preventDefault();
          setResponse(true);
          handleSubmit()
        }}>
          <div className="location-form-flexbox">
            <div>
              <label>
                Email <span style={{ color: "red" }}>*</span>:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={updateFormData}
                  required
                />
              </label>
              <label>
                City <span style={{ color: "red" }}>*</span>:
                <select
                  name="city"
                  value={formData.city}
                  onChange={updateFormData}
                  required
                >
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
                  onChange={updateFormData}
                />
              </label>
              <label>
                Pincode:
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={updateFormData}
                />
              </label>
            </div>
            <div>
              <label>
                Address:
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={updateFormData}
                />
              </label>
              <label>
                Landmark:
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={updateFormData}
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
                  onChange={updateFormData}
                />
              </label>
              <label>
                Longitude:
                <input
                  type="text"
                  name="longitude"
                  value={formData.longitude}
                  onChange={updateFormData}
                />
              </label>
            </div>
            <div>
              <Link to={"/generalinfo"}><button>Previous</button></Link>
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
