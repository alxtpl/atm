const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const action = isDeposit ? "Deposit" : "Cash Back";
  return (
    <label className="label huge">
      <h3>{action}</h3>
      <input
        id="number-input"
        type="number"
        width="200"
        onChange={onChange}
        placeholder="Enter amount"
      />
      <input
        type="submit"
        disabled={!isValid}
        width="200"
        value="Submit"
        id="submit-input"
      />
    </label>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $${totalState}`;

  const handleChange = (event) => {
    const value = Number(event.target.value);
    if (value <= 0 || (atmMode === "Cash Back" && value > totalState)) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validTransaction) return;

    const newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    setDeposit(0); // Reset deposit after submit
  };

  const handleModeSelect = (event) => {
    const mode = event.target.value;
    setAtmMode(mode);
    setIsDeposit(mode === "Deposit");
    setValidTransaction(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label>
      <select onChange={handleModeSelect} name="mode" id="mode-select">
        <option id="no-selection" value="">
          Select...
        </option>
        <option id="deposit-selection" value="Deposit">
          Deposit
        </option>
        <option id="cashback-selection" value="Cash Back">
          Cash Back
        </option>
      </select>
      {atmMode && (
        <ATMDeposit
          onChange={handleChange}
          isDeposit={isDeposit}
          isValid={validTransaction}
        />
      )}
    </form>
  );
};

ReactDOM.render(<Account />, document.getElementById("root"));
