import { useState } from "react"

import PropTypes from "prop-types"
import { OtpItems } from "./otpItem";

export const OTPBoxes = ({ length, label }) => {


    const [value, setValue] = useState(new Array(length).fill(""));

    return (
        <>
            <h1>{label}</h1>

            {value.map((e, i) => (
                <OtpItems key={i} />
            ))}
        </>
    );
}

OTPBoxes.prototypes = {
    length: PropTypes.number.isRequired,
    label: PropTypes.string
};

OTPBoxes.defaultProps = {
    label: "Label"
};