import { useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
// import Header from "../../header/header";
// import Sidebar from "../../sidebar/sidebar";
import "./property.css"
import PropertyNav from "../../../PropertyNav";
const PropertyFormInfo = () => {

    const { updateFormData, formData,  loginStatus } = useContext(UserContext);



    const navigate = useNavigate();
    useEffect(() => {
        loginStatus ? <></> : navigate('/signin')
    });

    // const [formData, setformData] = useState({
    //     length: "",
    //     breadth: "",
    //     totalArea: "",
    //     areaUnit: "sqm",
    //     bhk: "",
    //     floor: "",
    //     attached: "yes",
    //     westernToilet: "yes",
    //     furnished: "no",
    //     parking: "no",
    //     lift: "no",
    //     electricity: "",
    //     facing: "east",
    //     basicInfo: propertyContext.id,
    // });
    // const handleClear = () => {
    //     setformData({
    //         length: "",
    //         breadth: "",
    //         totalArea: "",
    //         areaUnit: "sqm",
    //         bhk: "",
    //         floor: "",
    //         attached: "yes",
    //         westernToilet: "yes",
    //         furnished: "no",
    //         parking: "no",
    //         lift: "no",
    //         electricity: "",
    //         facing: "east",
    //         basicInfo: propertyContext.id,
    //     })
    // }

    // const updateFormData = (event) => {
    //     const { name, value } = event.target;
    //     setformData({ ...formData, [name]: value });
    // };

    // const handleSubmit = async (event) => {
    //     const dataToSend = { ...formData, basicInfo };
    //     event.preventDefault();
    //     // console.log(formData);
    //     await fetch('https://real-estate-backend-g14x.onrender.com/property/api/pro/property', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(dataToSend),
    //     }).then(res => {
    //         return res.json();
    //     }).then(data => {
    //         console.log(data);
    //         propertyContext.updateId(data.propertydetails._id);
    //         navigate("/generalinfo");
    //     }).catch(e => {
    //         console.log(e)
    //     })




    // };

    return (
        <>
            <PropertyNav section={"property"}/>
            <div className="property-form-container">
                <form>
                    <div className="property-form-flexbox">
                        <div>
                            <label>
                                Length:
                                <input
                                    type="number"
                                    name="length"
                                    value={formData.length}
                                    onChange={updateFormData}
                                />
                            </label>
                            <label>
                                Breadth:
                                <input
                                    type="number"
                                    name="breadth"
                                    value={formData.breadth}
                                    onChange={updateFormData}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Total Area <span style={{ color: "red" }}>*</span>:
                                <input
                                    type="number"
                                    name="total_area"
                                    value={formData.total_area}
                                    onChange={updateFormData}
                                    required
                                />
                            </label>

                            <label>
                                Area Unit:
                                <select name="area_unit" value={formData.area_unit} onChange={updateFormData} >
                                    <option value="sqm">sqm</option>
                                    <option value="acres">acres</option>
                                    <option value="hectares">hectares</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                BHK:
                                <input
                                    type="numberr"
                                    name="no_of_bhk"
                                    value={formData.no_of_bhk}
                                    onChange={updateFormData}
                                />
                            </label>

                            <label>
                                Floor:
                                <input
                                    type="number"
                                    name="no_of_floor"
                                    value={formData.no_of_floor}
                                    onChange={updateFormData}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Attached:
                                <select name="attached" value={formData.attached} onChange={updateFormData}    >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>

                            <label>
                                Western Toilet:
                                <select name="western_toilet" value={formData.western_toilet} onChange={updateFormData}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                Furnished:
                                <select name="furnished" value={formData.furnished} onChange={updateFormData}  >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>

                            <label>
                                Parking:
                                <select name="car_parking" value={formData.car_parking} onChange={updateFormData}    >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label>
                                Lift:
                                <select name="lift" value={formData.lift} onChange={updateFormData}    >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>

                            <label>
                                Electricity:
                                <input
                                    type="text"
                                    name="electricity"
                                    value={formData.electricity}
                                    onChange={updateFormData}
                                    placeholder="eg. 3 phase"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Facing:
                                <select name="facing" value={formData.facing} onChange={updateFormData} >
                                    <option value="east">EAST</option>
                                    <option value="west">WEST</option>
                                    <option value="north">NORTH</option>
                                    <option value="south">SOUTH</option>
                                </select>
                            </label>
                        </div>
                        <div></div>
                        <div className="property-btn">
                            <div>
                                <Link to={"/basicinfo"}><button>Pervious</button></Link>
                            </div>
                            <div>
                                <Link to={"/generalinfo"}><button>Save & continue</button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default PropertyFormInfo;