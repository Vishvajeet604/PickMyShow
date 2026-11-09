import { useEffect, useState } from "react";
import "./OTPVerify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const OTPVerify = () => {
    const [otp, setotp] = useState(["", "", "", "", "", ""]);
    const [Timer, setTimer] = useState(30);
    const [verifystatus, setVerifyStatus] = useState(false);
    const [resendStatus, setResendStatus] = useState(true);

    const navigate = useNavigate();

    // UPDATE OTP
    const updateOTP = (e, index) => {
        const value = e.target.value;

        if (value !== "" && !/^\d$/.test(value)) {
            return;
        }

        const digit = [...otp];
        digit[index] = value;

        setotp(digit);

        if (value !== "" && index < 5) {
            document.getElementById(`otp${index + 2}`).focus();
        }
    };

    // DELETE OTP
    const removeOTP = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index] !== "") {
                const digit = [...otp];
                digit[index] = "";
                setotp(digit);
            } else if (index > 0) {
                document.getElementById(`otp${index}`).focus();
            }
        }
    };

    // VERIFY OTP
    const handleVerify = async (e) => {
        e.preventDefault();
        const x = otp.join("");
        try {
            const res = await axios.post("http://localhost:5000/VerifyOTP", {
                email: sessionStorage.getItem("email"),
                otp: x
            });
            console.log(res.data);
            alert(res.data.msg);
            if (res.status === 200) {
                navigate("/");
            }
        } catch (error) {
            alert(error.response?.data?.msg || "Verification failed");
        }
    };

    // RESEND OTP
    const handleResend = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/regenerateOTP",
                {
                    email: sessionStorage.getItem("email")
                }
            );

            alert(response.data.msg);

            setotp(["", "", "", "", "", ""]);
            setTimer(30);
            setVerifyStatus(false);
            setResendStatus(true);

            setTimeout(() => {
                document.getElementById("otp1")?.focus();
            }, 500);

        } catch (error) {
            alert(error.response?.data?.msg || "Failed to resend OTP");
        }
    };

    // TIMER
    useEffect(() => {
        if (Timer === 0) {
            setVerifyStatus(true);
            setResendStatus(false);
            return;
        }

        const timerid = setInterval(() => {
            setTimer((value) => value - 1);
        }, 1000);

        return () => clearInterval(timerid);
    }, [Timer]);

    return (
        <>
            <form onSubmit={handleVerify}>
                <p>Your Email id :</p>

                <label id="email">
                    {sessionStorage.getItem("email")}
                </label>

                <p>
                    <label>{Timer}</label>
                </p>

                {/* WRAPPER FOR HORIZONTAL ALIGNMENT */}
                <div className="otp-container">
                    {
                        otp.map((data, index) => (
                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                key={index}
                                value={data}
                                id={`otp${index + 1}`}
                                onChange={(e) => updateOTP(e, index)}
                                onKeyDown={(e) => removeOTP(e, index)}
                            />
                        ))
                    }
                </div>

                {/* VERIFY BUTTON */}
                <button
                    type="submit"
                    disabled={Timer === 0}
                >
                    VERIFY OTP
                </button>

                {/* RESEND BUTTON */}
                <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendStatus}
                >
                    RESEND OTP
                </button>
            </form>

            <Footer />
        </>
    );
};

export default OTPVerify;
