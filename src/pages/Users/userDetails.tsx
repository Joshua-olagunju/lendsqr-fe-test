import "../../styles/userDetails.scss";
import { AiOutlineUser } from "react-icons/ai";
const UserDetails = () => {
  const storedUser = localStorage.getItem("selectedUser");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) return <p>Loading user...</p>;

  return (
    <>
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
          <p>Personal Information</p>
          <div className="personal_infos">
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
          </div>
        </div>
        <div className="education_employment_container">
          <p>Education and Employment</p>
          <div className="education_employment_infos">
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>

            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
          </div>
        </div>
        <div className="socials_container">
          <p>Socials</p>
          <div className="socials_infos">
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
          </div>
        </div>
        <div className="guarantor_container">
          <p>Guarantor</p>
          <div className="guarantor_infos">
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
            <div>
              <p>full Name</p>
              <p>{user.username}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
