const TitleComponent = () => (
  <div>
    <h1>How Do You Like Front End?</h1>
  </div>
);

const VolumComponent = () => (
  <div>
    <label>How Much you love front end?</label>
    <datalist id="step-list">
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </datalist>
    <input type="range" id="points" min="1" max="3" step="1" list="step-list" />
  </div>
);

const InputComponent = () => (
  <div className="input-style">
    <label>What is your favourite front end feature/topic?</label>
    <input type="text" id="text" name="text" />
  </div>
);

const App = () => (
  <div className="border-style">
    <TitleComponent />
    <VolumComponent />
    <InputComponent />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
