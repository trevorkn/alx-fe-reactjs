import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be atleast 6 characters").required("password is required"),
});

function FormikForm() {
    return (
        <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
            console.log(values);
            alert("Form submitted successfully with Formik!");
            resetForm();
        }}
        >
            <Form>
                <div>
                    <label htmlFor="username">Username</label>
                    <Field type="text" id="username" name="username" />
                    <ErrorMessage name="username" component="p" style={{ color: "red" }} />
                </div>

                <div>
                     <label htmlFor="email">Email:</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="p" style={{ color: "red" }} />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="p" style={{ color: "red" }} />
                </div>

                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}

export default FormikForm;