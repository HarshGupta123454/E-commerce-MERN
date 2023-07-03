import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**validate register form */
export async function registervalidation(values) {
    const error = nameVerify({}, values)
    passwordVerify(error, values)
    emailVerify(error, values)
    return error

}

/**validate login form */
export async function loginValidation(values) {
    const error = emailVerify({}, values)
    passwordVerify(error, values);
    return error
}

/** validatea forgot password form */
export async function forgotValidation(values) {
    const error = emailVerify({}, values)
    return error
}


/**otp validation */
export async function Otpvalidation(valuse) {
    const error = otpverify({}, valuse)
    return error
}

/**reset validation */
export async function resetValidation(values) {
    const error = resetVerify({}, values)
    return error
}

/********************************************************************************************************************************************* */

/**validate username */
function nameVerify(error = {}, values) {
    if (!values.name) {
        error.name = "name must be provide"
        toast.error(error.name)
    } else if (/[0-9]/.test(values.name)) {
        error.name = "your name does not include any numbers"
        toast.error(error.name)
    }
    return error
}

/**validate email */
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = ("email is required")
        toast.error(error.email)
    } else if (values.email.includes(" ")) {
        error.email = "Wrong Email...!"
        toast.error("Wrong Email...!")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = "Invalid email address...!"
        toast.error("Invalid email address...!")
    }
    return error
}


/**validate password */
function passwordVerify(errors, values) {
    // eslint-disable-next-line no-useless-escape
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        errors.password = "Password Required...!"
        toast.error("Password Required...!");
    } else if (values.password.includes(" ")) {
        errors.password = "Wrong Password...!"
        toast.error("Wrong Password...!");
    } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters long"
        toast.error("Password must be more than 4 characters long");
    } else if (!specialChars.test(values.password)) {
        errors.password = "Password must have special character"
        toast.error("Password must have special character");
    }

    return errors;
}

/**validate otp */

function otpverify(error = {}, values) {
    if (!values.otp) {
        error.otp = "otp is required"
        toast.error('OTP IS REQUIRED')
    }
    return error
}

/**validate reset option */
function resetVerify(error = {}, values) {
    // eslint-disable-next-line no-useless-escape
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!values.password && !values.confirm) {
        error.password = "PASSWORD require"
        toast.error('PASSWORD REQUIRE');
    } else if (!specialChars.test(values.password)) {
        error.password = "Password must have special character"
        toast.error("Password must have special character");
    }
    else if (values.password !== values.confirm) {
        error.password = "password and confirm password didn't match"
        toast.error('PASSWORD AND CONFIRM PASSWORD DIDN\'T MATCH');
    }

    return error
}