import "../../styles/userDetails.scss";
import { RiArrowLeftLongLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

// ===============================================================
// Call from the local storage to get the selected user details
// ===============================================================
const UserDetails = () => {
  const storedUser = localStorage.getItem("selectedUser");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) return <p>Loading user...</p>;

  // ===================================================
  // Mapping of Personal Info for easy rendering
  // ===================================================
  const personalInfo = [
    {
      title: "FULL NAME",
      value: user.username,
    },
    { title: "Phone Number", value: user.phone },
    { title: "Email Address", value: user.email },
    { title: "BVN", value: user.phone },
    { title: "GENDER", value: "Male" },
    { title: "MARITAL STATUS", value: "Single" },
    { title: "CHILDREN", value: "None" },
    { title: "Type of residence", value: user.username },
  ];

  // ===================================================
  // Mapping of Education and Employment for easy rendering
  // ===================================================
  const EducationAndEmployment = [
    {
      title: "Level of Education",
      value: "B.Sc",
    },
    { title: "Employment Status", value: "Employed" },
    { title: "sector of employment", value: "Fintech" },
    { title: "Duration of employment", value: "2 years" },
    { title: "office email", value: user.email },
    { title: "Monthly income", value: "₦200,000.00- ₦400,000.00" },
    { title: "loan repayment", value: "40,000" },
  ];

  // ===================================================
  // Mapping of Socials Info for easy rendering
  // ===================================================
  const Socials = [
    {
      title: "Twitter",
      value: "@grace_effiom",
    },
    { title: "Facebook", value: "Grace Effiom" },
    { title: "Instagram", value: "@grace_effiom" },
  ];
  // ===================================================
  // Mapping of Guarantor Info for easy rendering
  // ===================================================
  const Guarantor = [
    {
      title: "full Name",
      value: "@gDebby Ogana",
    },
    { title: "Phone Number", value: "Grace Effiom" },
    { title: "Email Address", value: "@grace_effiom" },
    { title: "Relationship", value: "@grace_effiom" },
  ];

  // ===================================================
  // Part that is rendered to the web
  // ===================================================
  return (
    <>
      <div onClick={() => window.history.back()} className="back_to_users">
        <RiArrowLeftLongLine size={24} /> Back to Users
      </div>
      <div className="userDetails">
        <h1 className="userDetails_title">User Details</h1>

        <div className="userDetails_actions">
          <button>Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>
      <div className="userDetails_details_header_container">
        <div className="userDetails_details_header">
          <div>
            <AiOutlineUser size={34} className="profile_icon" />
          </div>
          <div className="header_section_one">
            <p className="name">{user.username}</p>
            <p className="id">LSQFf587g90</p>
          </div>
          <div className="header_section_two">
            <p className="name-two">User’s Tier</p>
            <div className="star_group">
              <img src="/np_star_1208084_000000 1.png" alt="star_filled" />
              <img src="/np_star_1171151_000000 1.png" alt="star_filled" />
              <img src="/np_star_1171151_000000 1.png" alt="star_filled" />
            </div>
          </div>
          <div className="header_section_three">
            <p className="name-three">₦200,000.00</p>
            <p className="id-three">9912345678/Providus Bank</p>
          </div>
        </div>
        <div className="header_section_toggle">
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div className="userDetails_details_body">
        <div className="personal_details_container">
          <p className="personal_info_header">Personal Information</p>
          <div className="personal_infos">
            {personalInfo.map((item, index) => (
              <div key={index} className="personal_info">
                <p className="personal_title">{item.title}</p>
                <p className="personal_value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="education_employment_container">
          <p className="education_employment_header">
            Education and Employment
          </p>
          <div className="education_employment_infos">
            {EducationAndEmployment.map((item, index) => (
              <div key={index} className="personal_info">
                <p className="personal_title">{item.title}</p>
                <p className="personal_value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="socials_container">
          <p className="socials_header">Socials</p>
          <div className="socials_infos">
            {Socials.map((item, index) => (
              <div key={index} className="personal_info">
                <p className="personal_title">{item.title}</p>
                <p className="personal_value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="guarantor_container">
          <p className="guarantor_header">Guarantor</p>
          <div className="guarantor_infos">
            {Guarantor.map((item, index) => (
              <div key={index} className="personal_info">
                <p className="personal_title">{item.title}</p>
                <p className="personal_value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
