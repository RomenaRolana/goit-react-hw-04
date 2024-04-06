// import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
const searchFormSchema = Yup.object().shape({
  searchTitle: Yup.string().required("Search term is required!"),
});

const FORM_INITIAL_VALUES = {
  searchTitle: "",
};

const FormSearch = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    // if (values.searchTitle.trim() === "") {
    //   toast.error("Please enter a search query!");
    //   return;
    // }
    onSetSearchQuery(values.searchTitle);
  };

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={searchFormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <Field
              type='text'
              name='searchTitle'
              placeholder='Enter search query...'
            />
            {/* <ErrorMessage /> */}
          </label>
          <button type='submit' aria-label='Search'>
            🔍
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormSearch;
