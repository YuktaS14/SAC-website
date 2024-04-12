import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; 

export default function Login() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const handleCallbackResponse = (response) => {
            console.log("encoded JWT ID token" + response.credential);
            var userObject = jwtDecode(response.credential);
            console.log({userObject});


            if (userObject.iss === "https://accounts.google.com") {
                if (userObject.aud === "Client id") {
                    if (userObject.email.endsWith("@smail.iitpkd.ac.in")) {
                        setUser(userObject);
                        document.getElementById("signInDiv").hidden = true;
                        navigate("/dashboard", { state: {userObject} });

                    } else {
                        console.error("Unauthorized user");
                    }
                } else {
                    console.error("Token is not intended for this application");
                }
            } else {
                console.error("Invalid token issuer");
            }
        };

        /*global google */
        google.accounts.id.initialize({
            client_id: "721926583679-tnkg50k162e8bhc9gg08ma97jnfb9t0c.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });
        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "large",
        });
    }, [navigate]);

    function handleSignout(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    google.accounts.id.prompt();

    return (
        <div className="bg-container d-flex justify-content-center align-items-center">
            <div className="card lgcard rounded-0">
                <div className="card-body">
                    <div className="heading">
                        <p className="h4 my-3" style={{ textAlign: "center" }}>Welcome to SAC Portal</p>
                    </div>
                    <div className="card mb-3 border-0 my-5" style={{ maxwidth: "540px" }}>
                        <div className="row g-0 no-gutters d-flex align-items-center justify-content-center gap-5">
                            <div className="col-md-4" style={{ width: "15rem" }}>
                                <img src="iitlogo.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 p-0" style={{ width: "18rem" }}>
                                <div className="card-body d-flex justify-content-center align-items-center flex-column" style={{ padding: "0" }}>
                                    <h5 className="card-title heading_1" style={{ textAlign: "center" }}>Sign in into your SAC Account</h5>
                                    <div id="signInDiv"></div>
                                    {Object.keys(user).length !== 0 && (
                                        <button onClick={(e) => handleSignout(e)}>signOut</button>
                                    )}
                                    {user && (
                                        <div>
                                            <img src={user.picture} alt="" />
                                            <h3 style={{ textAlign: "center" }}>{user.name}</h3>
                                        </div>
                                    )}
                                    <button type="button" className="btn btn-outline-primary p-1 my-3 pe-3">
                                        <img src="user.png" className="img-fluid rounded-start me-3" alt="..." style={{ maxWidth: "80%", height: "auto" }} />
                                        Continue as a Guest
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
