import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestHome() {

    const a_style = {
        backgroundColor: "black",
        color: "white",
        textDecoration: "none",
        padding: "10px",
        borderRadius: "10px",
    }

    const a_div_style = {
        margin: "20px",
    }

    return (
        <div>Guest Home page<br />

            <div style={a_div_style}>
                <a href='/guest-view-appointment' style={a_style}>View My Appointments</a>
            </div>
            <div style={a_div_style}>
                <a href='/add-appointment' style={a_style}>Book A Appointment</a>
            </div>
            <div style={a_div_style}>
                <a href='/guest-find-item' style={a_style}>Find Locations</a>
            </div>

        </div>
    )

}