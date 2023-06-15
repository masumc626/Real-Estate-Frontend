import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
// import { Link } from "react-router-dom";
// import Header from "../../header/header";
// import ";
import "./basic.css";
import PropertyNav from "../../../PropertyNav";

const BasicInfoForm = () => {

    const { updateFormData, formData, cancelFormFilling, loginStatus } = useContext(UserContext);
    // console.log(basicContext);

    const navigate = useNavigate();
    useEffect(() => {
        loginStatus ? <></> : navigate('/signin')
    }, []);

    // const [formData, setFormValues] = useState({
    //     property: "plot",
    //     negotable: "yes",
    //     price: "",
    //     ownership: "self",
    //     propertyAge: "",
    //     propertyApproved: "yes",
    //     propertyDescription: "",
    //     bankLoan: "no",
    // });

    // const updateFormData = (event) => {
    //     const { name, value } = event.target;
    //     setFormValues({ ...formData, [name]: value });
    // };

    // const handleClear = () => {
    //     setFormValues({
    //         property: "plot",
    //         negotable: "yes",
    //         price: "",
    //         ownership: "self",
    //         propertyAge: "",
    //         propertyApproved: "yes",
    //         propertyDescription: "",
    //         bankLoan: "no",
    //     });
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     await fetch('https://real-estate-backend-g14x.onrender.com/property/api/pro/basic', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     }).then(res => {
    //         return res.json();
    //     }).then(data => {
    //         console.log(data);
    //         basicContext.updateId(data.basicdetails._id);
    //         navigate("/propertydetails")
    //     }).catch(e => {
    //         console.log(e)
    //     })
    // };

    return (

        <>
            {/* <Header />
            <Sidebar /> */}
            {/* <h3>ADD NEW PROPERTY</h3> */}
            {/* <div className="basic-info-row">
                <ul className="basic-ul-row">
                    <li className="basic-li">Basic info</li>
                    <li>Property Details</li>
                    <li>General Info</li>
                    <li>Location Info</li>
                </ul>
            </div> */}
            <PropertyNav section={"basic"} />
            <div className="basic-form-container txt-clr">
                <form>
                    <div className="basic-form-flexbox">
                        <div>
                            <label>
                                Property Type  <span style={{ color: "red" }}>*</span>:
                                <select name="property_type" value={formData.property_type} onChange={updateFormData} required>
                                    <option value="plot">Plot</option>
                                    <option value="house">House</option>
                                    <option value="flat">Flat</option>
                                </select>
                            </label>

                            <label> Negotiable:
                                <select name="negotiable" value={formData.negotiable} onChange={updateFormData}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Price <span style={{ color: "red" }}>*</span>:
                                <input type="number" name="price" value={formData.price} onChange={updateFormData} required />
                            </label>

                            <label>
                                Ownership:
                                <select name="ownership" value={formData.ownership} onChange={updateFormData}>
                                    <option value="dealer">Dealer</option>
                                    <option value="self">Self</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Property Age <span style={{ color: "red" }}>*</span>:
                                <input type="number" name="property_age" value={formData.property_age} onChange={updateFormData} required />
                            </label>

                            <label>
                                Property Approved:
                                <select name="property_approved" value={formData.property_approved} onChange={updateFormData}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Property Description:
                                <textarea name="property_description" value={formData.property_description} onChange={updateFormData} />
                            </label>

                            <label>
                                Bank Loan:
                                <select name="bank_loan" value={formData.bank_loan} onChange={updateFormData}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>

                        <div className="button-container">
                            <div >
                                <button onClick={() => {
                                    cancelFormFilling();
                                    navigate('/list');
                                }}>cancel</button>
                            </div>
                            <div>
                                <Link to={"/propertydetails"}><button type="submit">Save & continue</button></Link>
                            </div>
                        </div>

                    </div>
                </form>
            </div >
        </>
    );
}


export default BasicInfoForm;