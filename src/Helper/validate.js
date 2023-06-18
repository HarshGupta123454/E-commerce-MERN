import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// validate register form

export async function registervalidation(values) {
    const error = usernameVerify({}, values)
    passwordVerify(error, values)
    emailVerify(error, values)
    return error

}




// validate username
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = "username must be provide"
        toast.error(error.username)
    } else if (values.username.includes(" ")) {
        error.username = "it dosent include any spaces"
        toast.error(error.username)
    }
    return error
}

//validate email
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

//validate password

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