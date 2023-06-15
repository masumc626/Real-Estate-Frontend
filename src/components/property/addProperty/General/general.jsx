import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from  "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import "./general.css";
import PropertyNav from "../../../PropertyNav";

const GeneralFormInfo = () => {
    const navigate = useNavigate();

    const { updateFormData, formData, loginStatus, updateImage, image } = useContext(UserContext);

    // const [username, setUsername] = useState("");
    // const [mobile, setMobile] = useState("");
    // const [postedby, setPostedBy] = useState("owner");
    // const [saletype, setSaleType] = useState("");
    // const [feature, setFeature] = useState("");
    // const [PPDpackage, setPPDPackage] = useState("");
    // const [image, setImage] = useState(null);
    // const [propertyInfo, setpropertyInfo] = useState("");

    useEffect(() => {
        loginStatus ? <></> : navigate('/signin')
      });

    // useEffect(() => {
    //     setpropertyInfo(propertyInfo1)
    // }, [propertyInfo1])


    // const handleClear = () => {
    //     setUsername("")
    //     setMobile("")
    //     setPostedBy("owner")
    //     setSaleType("")
    //     setFeature("")
    //     setPPDPackage("")
    //     setImage(null)
    // }


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append("name", username);
    //     formData.append("mobile", mobile);
    //     formData.append("postedby", postedby);
    //     formData.append("saletype", saletype);
    //     formData.append("feature", feature);
    //     formData.append("PPDpackage", PPDpackage);
    //     formData.append("image", image);
    //     formData.append("propertyInfo", generalContext.id);

    //     fetch("https://real-estate-backend-g14x.onrender.com/property/api/pro/general", {
    //         method: "POST",
    //         body: formData,
    //     }).then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         console.log(data);
    //         if (data && data.generaldetails) {
    //             generalContext.updateId(data.generaldetails._id);
    //           }
    //         navigate("/locationinfo")
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // };

    return (
        <>
             <PropertyNav section={"general"}/>
            <div className="general-form-container">
                <form>
                    <div className="genral-form-flexbox">
                        <div>
                            <label>
                                Username<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={updateFormData}
                                    required
                                />
                            </label>
                            <label>
                                Mobile<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="number"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={updateFormData}
                                    required
                                    minLength="10"
                                    maxLength="12"
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Posted By:
                                <select 
                                value={formData.posted_by}
                                name="posted_by"
                                onChange={updateFormData}>
                                    <option value="owner">Owner</option>
                                    <option value="dealer">Dealer</option>
                                </select>
                            </label>

                            <label>
                                Sale Type:
                                <input
                                    type="text"
                                    name="sale_type"
                                    value={formData.sale_type}
                                    onChange={updateFormData}
                                    placeholder="eg. transaction, loan,etc.."
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Feature <span style={{ color: "red" }}>*</span>:
                                <select 
                                value={formData.featured} 
                                name="featured"
                                onChange={updateFormData} 
                                required>
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
                                    name="ppd_package"
                                    value={formData.ppd_package}
                                    onChange={updateFormData}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Image <span style={{ color: "red" }}>*</span>:
                                <input type="file"
                                    name="image"
                                    accept=".jpeg, .jpg, .png, .mp4"
                                    onChange={(e)=>{
                                        updateImage(e.target.files[0]);
                                    }} required />
                            </label>
                        </div>
                        <div className="general-btn">
                            <div>
                                <Link to={"/propertydetails"}><button>Pervious</button></Link>
                            </div>
                            <div>
                                <Link to={"/locationinfo"}><button type="submit">save & continue </button></Link>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default GeneralFormInfo;