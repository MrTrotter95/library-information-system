import React from "react";
import './Profile.css';
import CardSmall from '../../components/Cards/CardSmall';
import profile_bg from '../../assets/images/profile_bg.png';
import userImage from '../../assets/images/userImage.png';
import profile_selected from '../../assets/images/profile_selected.png';

const Profile = () => {
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
                        <button type="cancel" className="profile_selected profile-nav1">Personal Info</button>
                        <button type="cancel" className="profile-button profile-nav2">Loan History</button>
                        <button type="cancel" className="profile-button profile-nav3">Edit Password</button>
                    </div>
                </div>
                <div className="ml-200 mr-200">
                    <h1 className="h4 fw-400 text-center mb-50">Personal Information</h1>
                        <form>
                            <div className="flex flex-column mb-30">
                                <label className="label red fw-400">First Name</label>
                                <input className="input"/>
                            </div>
                            <div className="flex flex-column mb-30">
                                <label className="label red fw-400">Last Name</label>
                                <input className="input"/>
                            </div>
                            <div className="flex flex-column mb-30">
                                <label className="label red fw-400">Email Address</label>
                                <input className="input" type="email"/>
                            </div>
                            <div className="flex flex-column mb-30">
                                <label className="label red fw-400">Date of Birth</label>
                                <input className="input" type="date"/>
                            </div>

                            <button className="primary-button__full-width" type="submit">Confirm & Save</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;