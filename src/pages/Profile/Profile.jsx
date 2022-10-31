import React, {useState} from "react";
import profile_bg from '../../assets/images/profile_bg.png';
import userImage from '../../assets/images/userImage.png';
import profile_selected from '../../assets/images/profile_selected.png';
import PersonalInfo from "./PersonalInfo";
import LoanHistory from './LoanHistory';
import EditPassword from './EditPassword';

const Profile = () => {
    const [showPersonalInfo, setShowPersonalInfo] = useState(true);
    const [showLoanHistory, setShowLoanHistory] = useState(false);
    const [showEditPass, setShowEditPass] = useState(false);

    const showPersonalInfoHandler = () => {
        setShowPersonalInfo(true);
        setShowLoanHistory(false);
        setShowEditPass(false);
    }

    const showHistoryHandler = () => {
        setShowPersonalInfo(false);
        setShowLoanHistory(true);
        setShowEditPass(false);
    }

    const showEditPassHandler = () => {
        setShowPersonalInfo(false);
        setShowLoanHistory(false);
        setShowEditPass(true);
    }

    return (
        <div className="container">
            <h1 className="h1 red fw-700 text-left mb-0">Your Profile</h1>
            <hr className="hr mb-50"/>
            <div className="flex flex-row align-center justify-center">
                <div className="mr-50">
                    <div className="profile-parent">
                        <img className="profile-bg" src={profile_bg}/>   
                        <img className="profile-img" src={userImage}/>
                        <img className="profile-nav1_bg" src={profile_selected}/>
                        <button type="cancel" className="profile_selected profile-nav1" onClick={showPersonalInfoHandler}>Personal Info</button>
                        <button type="cancel" className="profile-button profile-nav2" onClick={showHistoryHandler}>Loan History</button>
                        <button type="cancel" className="profile-button profile-nav3" onClick={showEditPassHandler}>Edit Password</button>
                    </div>
                </div>
                {showPersonalInfo && <PersonalInfo/>}
                {showLoanHistory && <LoanHistory/>}
                {showEditPass && <EditPassword/>}
            </div>
        </div>
    )
}

export default Profile;