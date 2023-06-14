import { useContext, useEffect, useState } from "react";
import { useNavigate } from  "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
// import Header from "../../header/header";
// import Sidebar from "../../sidebar/sidebar";
import "./general.css";

const GeneralFormInfo = () => {
    const navigate = useNavigate();

    const generalContext = useContext(UserContext);

    let propertyInfo1 = generalContext.id

    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [postedby, setPostedBy] = useState("owner");
    const [saletype, setSaleType] = useState("");
    const [feature, setFeature] = useState("");
    const [PPDpackage, setPPDPackage] = useState("");
    const [image, setImage] = useState(null);
    const [propertyInfo, setpropertyInfo] = useState("");

    useEffect(() => {
        generalContext.loginStatus ? <></> : navigate('/signin')
      }, []);

    useEffect(() => {
        setpropertyInfo(propertyInfo1)
    }, [propertyInfo1])


    const handleClear = () => {
        setUsername("")
        setMobile("")
        setPostedBy("owner")
        setSaleType("")
        setFeature("")
        setPPDPackage("")
        setImage(null)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", username);
        formData.append("mobile", mobile);
        formData.append("postedby", postedby);
        formData.append("saletype", saletype);
        formData.append("feature", feature);
        formData.append("PPDpackage", PPDpackage);
        formData.append("image", image);
        formData.append("propertyInfo", generalContext.id);

        fetch("https://real-estate-backend-g14x.onrender.com/property/api/pro/general", {
            method: "POST",
            body: formData,
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            if (data && data.generaldetails) {
                generalContext.updateId(data.generaldetails._id);
              }
            navigate("/locationinfo")
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <>
            {/* <Header />
            <Sidebar /> */}
            <div className="general-info-row">
                <h3>ADD NEW PROPERTY</h3>
                <ul className="general-ul-row">
                    <li>Basic info</li>
                    <li >Property Details</li>
                    <li className="general-li">General Info</li>
                    <li>Location Info</li>
                </ul>
            </div>
            <div className="general-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="genral-form-flexbox">
                        <div>
                            <label>
                                Username<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Mobile<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="number"
                                    value={mobile}
                                    onChange={(event) => setMobile(event.target.value)}
                                    required
                                    minLength="10"
                                    maxLength="12"
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Posted By:
                                <select value={postedby} onChange={(event) => setPostedBy(event.target.value)}>
                                    <option value="owner">Owner</option>
                                    <option value="dealer">Dealer</option>
                                </select>
                            </label>

                            <label>
                                Sale Type:
                                <input
                                    type="text"
                                    value={saletype}
                                    onChange={(event) => setSaleType(event.target.value)}
                                    placeholder="eg. transaction, loan,etc.."
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Feature <span style={{ color: "red" }}>*</span>:
                                <select value={feature} onChange={(event) => setFeature(event.target.value)} required>
                                    <option value="gym">Gym</option>
                                    <option value="pool">Pool</option>
                                    <option value="garden">Garden</option>
                                    <option value="auditorium">Auditorium</option>
                                </select>
                            </label>

                            <label>
                                PPD Package:
                                <input
                                    type="text"
                                    value={PPDpackage}
                                    onChange={(event) => setPPDPackage(event.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Image <span style={{ color: "red" }}>*</span>:
                                <input type="file"
                                    accept=".jpeg, .jpg, .png, .mp4"
                                    onChange={(event) => setImage(event.target.files[0])} required />
                            </label>
                        </div>
                        <div className="general-btn">
                            <div>
                                <button onChange={handleClear}>Clear</button>
                            </div>
                            <div>
                                <button type="submit">save & continue </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default GeneralFormInfo;