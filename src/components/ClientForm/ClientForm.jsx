import s from "./ClientForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";

registerLocale("en-GB", enGB);

const Schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  comment: Yup.string(),
  date: Yup.date().required("Date is required"),
});

const ClientForm = () => {
  return (
    <div className={s.formWrapper}>
      <h3 className={s.clientTitle}>Book your campervan now</h3>
      <p className={s.clientText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ errors, values, touched, setFieldValue }) => (
          <Form>
            <div className={s.inputWrapper}>
              <label htmlFor="name"></label>
              <Field
                className={s.inputText}
                name="name"
                type="text"
                placeholder="Name*"
              />
              {touched.name && errors.name ? (
                <div className={s.errorMessage}>{errors.name}</div>
              ) : null}
              <label htmlFor="email"></label>
              <Field
                className={s.inputText}
                name="email"
                type="email"
                placeholder="Email*"
              />
              {touched.email && errors.email ? (
                <div className={s.errorMessage}>{errors.email}</div>
              ) : null}
              <label htmlFor="date"></label>
              <DatePicker
                selected={values.date}
                onChange={(date) => setFieldValue("date", date)}
                className={s.inputText}
                placeholderText="Booking date*"
                locale="en-GB"
              />
              {touched.date && errors.date ? (
                <div className={s.errorMessage}>{errors.date}</div>
              ) : null}
              <label htmlFor="comment"></label>
              <Field
                className={s.inputComment}
                name="comment"
                as="textarea"
                placeholder="Comment"
              />
            </div>
            <button className={s.sendBtn} type="submit">
              {" "}
              Send{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ClientForm;
