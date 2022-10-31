import React from "react";

const PersonalInfo = () => {
    return (
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

                <button className="primary-button full-width" type="submit">Confirm & Save</button>
            </form>
    </div>
    )
}

export default PersonalInfo;