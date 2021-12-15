const FormSurveryComponent = ({
  formDetails,
  handleChange,
  handleContinue,
}) => {
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formDetails.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formDetails.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <select
          name="age"
          id="age"
          value={formDetails.age}
          onChange={handleChange}
        >
          <option value="0-15">0-15</option>
          <option value="16-30">16-30</option>
          <option value="31-45">31-45</option>
          <option value="46-60">46-60</option>
          <option value="61-75">61-75</option>
          <option value="76-90">76-90</option>
          <option value="91-105">91-105</option>
          <option value="106-120">106-120</option>
        </select>
        <div>
          <label htmlFor="freeText">Free Text</label>
          <textarea
            value={formDetails.freeText}
            name="freeText"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </form>
  );
};

const FormReviewComponent = ({ formDetails, handleBack, handleSubmit }) => {
  return (
    <div>
      <div>First Name: {formDetails.firstName}</div>
      <div>Last Name: {formDetails.lastName}</div>
      <div>Age: {formDetails.age}</div>
      <div>Free Text: {formDetails.freeText}</div>
      <button name="back" type="button" onClick={handleBack}>
        back
      </button>
      <button name="submit" type="button" onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
};

const App = () => {
  const [showForm, setShowForm] = React.useState(true);
  const [formDetails, setFormDetails] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
    freeText: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDetails((oldState) => {
      return { ...oldState, [name]: value };
    });
  };

  const handleContinue = (event) => {
    event.preventDefault();
    setShowForm(() => {
      return false;
    });
  };
  const handleBack = (event) => {
    event.preventDefault();
    setShowForm(() => {
      return true;
    });
  };
  const handleSubmit = (event) => {
    alert("Form was successfully submitted");
  };

  return (
    <div className="container">
      {showForm ? (
        <FormSurveryComponent
          formDetails={formDetails}
          handleChange={handleChange}
          handleContinue={handleContinue}
          setFormDetails={setFormDetails}
        />
      ) : (
        <FormReviewComponent
          formDetails={formDetails}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
