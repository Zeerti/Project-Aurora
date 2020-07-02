import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function Landing(){
    return (
        <div style={{ height: "100vh" }} className="container ">
            <div className="row">
                <div className="video-container">
                    <div className="color-overlay">
                        <video src="aurora.mp4" type="video/mp4"></video>
                    </div>
                </div>
                
                <div className="col s12 center-align primary-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 511.247 511.247" viewBox="0 0 511.247 511.247" width="400" height="400"><g><path fill="#5e6b75" d="m 511.247 413.576 l -249.721 50.553 l -261.526 -50.553 v -319.297 l 49.656 -53.174 l 461.591 53.174 Z" /><path fill="#4d5961" d="m 474.647 190.288 c -1.504 -0.708 -3.02 -1.38 -4.547 -2.017 v 225.305 l 20.573 16.686 l 20.573 -16.686 v -193.02 Z" /><path fill="#a7e7d0" d="m 221.33 0 s -72.094 146.122 -82.996 157.444 c -14.628 15.191 -12.247 39.852 5.018 51.963 c 15.928 11.173 36.731 12.615 54.047 3.745 c 27.841 -14.26 60.439 -15.982 89.628 -4.735 l 12.56 4.84 c 23.496 9.054 49.825 6.998 71.632 -5.591 c 31.686 -18.293 70.322 -19.912 103.427 -4.333 l 36.6 17.224 v -216.442 c 0 -2.272 -1.842 -4.115 -4.115 -4.115 Z" /><path fill="#7ad0df" d="m 221.503 116.023 c 0 6.676 -2.099 13.424 -6.481 19.185 c -6.1 8.024 -15.523 12.529 -25.264 12.529 c -3.045 0 -6.131 -0.442 -9.155 -1.358 c -3.981 -1.193 -8.044 -1.78 -12.066 -1.78 c -11.223 0 -22.178 4.516 -30.202 12.848 c -6.47 6.717 -9.608 15.286 -9.608 23.803 v -102.631 l 1.327 -6.26 c 11.799 -8.301 25.583 -8.149 39.377 -8.149 c 13.208 0 26.437 0.485 37.927 8.149 c 9.217 6.151 14.145 33.429 14.145 43.664 Z" /><path fill="#90dfc3" d="m 507.132 0 h -37.032 v 201.315 c 1.526 0.637 3.042 1.309 4.547 2.017 l 36.6 17.224 v -216.441 c 0 -2.273 -1.842 -4.115 -4.115 -4.115 Z" /><path fill="#b9e4ef" d="m 24.525 413.576 l 83.78 -78.609 l 1.844 -11.862 l 35.534 -40.347 c 2.774 -3.15 7.742 -2.957 10.264 0.399 l 39.458 52.519 l -47.485 97.519 Z" /><path fill="#b9e4ef" d="m 359.012 433.195 l -0.657 -81.418 l 27.155 -27.155 c 1.766 -1.766 4.701 -1.502 6.124 0.551 l 22.841 32.956 c 1.549 2.235 3.451 4.203 5.632 5.827 l 66.615 49.621 Z" /><path fill="#93d8e4" d="m 470.1 413.576 l 2.647 2.147 l 13.975 -2.147 l -16.622 -12.381 Z" /><path fill="#93d8e4" d="m 0 4.115 v 90.164 l 7.745 -3.688 c 17.684 -8.421 38.67 -5.628 53.535 7.126 c 15.534 13.327 38.132 14.409 54.868 2.628 l 13.904 -9.787 c 23.095 -16.257 53.807 -16.649 77.309 -0.987 c 8.208 5.469 13.013 14.058 13.967 23.096 v -112.667 h -217.213 c -2.273 0 -4.115 1.842 -4.115 4.115 Z" /><path fill="#daf1f4" d="m 95.433 78.619 c -2.425 0 -4.813 -1.141 -6.316 -3.276 c -2.452 -3.484 -1.616 -8.297 1.868 -10.749 l 13.903 -9.785 c 18.995 -13.371 41.312 -20.438 64.542 -20.438 c 5.713 0 11.455 0.437 17.066 1.298 c 4.212 0.646 7.102 4.585 6.455 8.796 c -0.646 4.212 -4.586 7.102 -8.796 6.455 c -4.839 -0.742 -9.793 -1.119 -14.726 -1.119 c -20.033 0 -39.28 6.095 -55.66 17.625 l -13.903 9.785 c -1.349 0.95 -2.899 1.408 -4.433 1.408 Z" /><path fill="#d3f1e7" d="m 329.549 185.398 c -6.157 0 -12.193 -1.123 -17.941 -3.337 l -12.558 -4.84 c -16.386 -6.314 -33.594 -9.539 -51.147 -9.586 c -4.261 -0.012 -7.705 -3.475 -7.694 -7.736 c 0.012 -4.253 3.464 -7.694 7.714 -7.694 h 0.022 c 19.443 0.053 38.504 3.625 56.653 10.619 l 12.558 4.839 c 3.971 1.53 8.141 2.305 12.394 2.305 c 6.045 0 12.007 -1.597 17.242 -4.619 c 24.377 -14.073 52.14 -21.512 80.291 -21.512 c 15.215 0 30.417 2.191 45.185 6.511 c 4.09 1.196 6.435 5.481 5.239 9.57 c -1.196 4.09 -5.482 6.436 -9.57 5.239 c -13.36 -3.908 -27.105 -5.89 -40.853 -5.89 c -25.445 0 -50.542 6.723 -72.576 19.444 c -7.581 4.374 -16.21 6.687 -24.959 6.687 Z" /><path fill="#beecdd" d="m 470.1 165.469 c 3.34 0.002 6.42 -2.183 7.405 -5.551 c 1.196 -4.09 -1.149 -8.374 -5.239 -9.57 c -0.721 -0.211 -1.443 -0.417 -2.166 -0.617 Z" /><path fill="#d3f1e7" d="m 409.853 101.008 v -101.008 h 15.43 v 101.008 c 0 4.261 -3.454 7.715 -7.715 7.715 s -7.715 -3.454 -7.715 -7.715 Z" /><path fill="#90dfc3" d="m 482.689 70.903 v -45.186 c 0 -4.261 -3.454 -7.715 -7.715 -7.715 s -7.715 3.454 -7.715 7.715 v 45.186 c 0 4.261 3.454 7.715 7.715 7.715 c 4.26 0 7.715 -3.454 7.715 -7.715 Z" /><path fill="#d3f1e7" d="m 275.692 117.993 c 4.261 0 7.715 -3.454 7.715 -7.715 v -110.278 h -15.43 v 110.278 c 0 4.261 3.455 7.715 7.715 7.715 Z" /><path fill="#90dfc3" d="m 346.631 27.736 c -4.261 0 -7.715 3.454 -7.715 7.715 v 85.833 c 0 4.261 3.454 7.715 7.715 7.715 s 7.715 -3.454 7.715 -7.715 v -85.833 c 0 -4.262 -3.455 -7.715 -7.715 -7.715 Z" /><path fill="#78d0b1" d="m 470.1 76.883 c 1.329 1.084 3.025 1.734 4.874 1.734 c 4.261 0 7.715 -3.454 7.715 -7.715 v -45.185 c 0 -4.261 -3.454 -7.715 -7.715 -7.715 c -1.849 0 -3.545 0.65 -4.874 1.734 Z" /><path fill="#daf1f4" d="m 110.665 32.354 c 4.261 0 7.715 -3.454 7.715 -7.715 v -24.639 h -15.43 v 24.639 c 0 4.261 3.454 7.715 7.715 7.715 Z" /><path fill="#7ad0df" d="m 49.656 64.209 c -4.261 0 -7.715 -3.454 -7.715 -7.715 v -30.777 c 0 -4.261 3.454 -7.715 7.715 -7.715 s 7.715 3.454 7.715 7.715 v 30.778 c 0 4.261 -3.454 7.714 -7.715 7.714 Z" /><path fill="#daf1f4" d="m 392.989 413.576 l -44.134 -78.75 c -1.253 -2.236 -3.616 -3.62 -6.179 -3.62 h -23.335 c -2.074 0 -7.283 0.05 -8.629 -1.529 l -5.566 -11.284 l -42.942 -50.355 c -1.542 -1.808 -4.324 -1.845 -5.913 -0.078 l -73.876 82.161 c -1.02 1.134 -1.753 2.496 -2.139 3.971 l -3.351 12.825 c -1.534 5.868 -4.819 11.13 -9.419 15.083 l -36.74 31.576 l 139.925 23.145 Z" /><path fill="#b9e4ef" d="m 281.818 362.825 l 30.853 -30.854 c 0.494 -0.493 1.151 -0.765 1.849 -0.765 h 4.821 c -2.074 0 -4.044 -0.909 -5.39 -2.487 l -8.805 -10.325 c -1.216 0.742 -2.353 1.634 -3.386 2.666 l -29.956 29.957 h -21.612 c -4.261 0 -7.715 3.454 -7.715 7.715 s 3.454 7.715 7.715 7.715 h 22.881 c 3.306 -0.001 6.413 -1.288 8.745 -3.622 Z" /><path fill="#ecf9f9" d="m 4.115 511.247 h 503.017 c 2.272 0 4.115 -1.842 4.115 -4.115 v -93.556 h -511.247 v 93.556 c 0 2.273 1.842 4.115 4.115 4.115 Z" /><path fill="#daf1f4" d="m 470.1 413.576 v 24.518 c 0 29.039 -23.54 52.579 -52.579 52.579 h -417.521 v 16.459 c 0 2.272 1.842 4.115 4.115 4.115 h 503.017 c 2.272 0 4.115 -1.842 4.115 -4.115 v -93.556 Z" /><g fill="#fff"><path d="m 189.656 452.152 h -44.263 c -4.261 0 -7.715 -3.454 -7.715 -7.715 s 3.454 -7.715 7.715 -7.715 h 44.263 c 4.261 0 7.715 3.454 7.715 7.715 s -3.454 7.715 -7.715 7.715 Z" /><path d="m 119.677 452.152 h -78.597 c -4.261 0 -7.715 -3.454 -7.715 -7.715 s 3.454 -7.715 7.715 -7.715 h 78.596 c 4.261 0 7.715 3.454 7.715 7.715 c 0.001 4.261 -3.453 7.715 -7.714 7.715 Z" /><path d="m 306.211 484.966 h -27.805 c -4.261 0 -7.715 -3.454 -7.715 -7.715 s 3.454 -7.715 7.715 -7.715 h 27.805 c 4.261 0 7.715 3.454 7.715 7.715 c 0 4.262 -3.454 7.715 -7.715 7.715 Z" /><path d="m 432.116 484.966 h -100.188 c -4.261 0 -7.715 -3.454 -7.715 -7.715 s 3.454 -7.715 7.715 -7.715 h 100.188 c 4.261 0 7.715 3.454 7.715 7.715 c 0 4.262 -3.454 7.715 -7.715 7.715 Z" /></g></g></svg>
                </div>
            </div>
            <div className="row valign-wrapper">
                <div className="col s12 center-align">                    
                    <h3 className="" style={{marginTop: "0", marginBottom: "0"}}>
                        <span><span className="fc-nord14">Start</span> finding</span>
                    </h3>
                    <h3 className="" style={{marginTop: "0", marginBottom: "0"}}>
                        Stop <span className="fc-nord14">looking</span>
                    </h3>
                    <p className="flow-text">
                        Start finding the data you need, not looking for it
                    </p>
                    <br/>
                    <div className="col s6">
                        <Link to="/register"
                            style={{ 
                                borderRadius: "3px",
                                letterSpacing: "1.5px" }}
                            id="register-btn"
                            className="btn btn-large btn-flat waves-effect waves-light hoverable bg-nord15">
                                Register
                        </Link>
                    </div>
                    <div className="col s6">
                        <Link to="/Login" 
                            style={{ 
                                borderRadius: "3px",
                                letterSpacing: "1.5px" }}
                            id="login-btn"
                            className="btn btn-large btn-flat waves-effect waves-light hoverable bg-nord15">
                                Log In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;


