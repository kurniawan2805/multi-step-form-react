export default function Plan({ planTitle, data, isAnnual, updateField }) {
  const optionPlan = data.map((plan) => {
    const { title, price } = plan;
    const priceShow = isAnnual ? price * 10 : price;
    return (
      <label key={title}>
        <input
          name="plan"
          className="plan-radio"
          type="radio"
          checked={planTitle === title}
          onChange={(e) =>
            updateField({ planTitle: title, planPrice: priceShow })
          }
        />
        <div className="plan-details card">
          <img
            src={`assets/images/icon-${title.toLowerCase()}.svg`}
            alt={`${title.toLowerCase()} plan`}
            className="plan-logo"
          />
          <h1 className="plan-title">{title}</h1>
          <p className="plan-subtitle">{`$${priceShow}/mo`}</p>
          {isAnnual ? <p className="plan-bonus">2 months free</p> : ""}
        </div>
      </label>
    );
  });

  return (
    <>
      <div className="plan-container">{optionPlan}</div>
      <label className="toggle">
        <span className="toggle-label">Monthly</span>
        <input
          type="checkbox"
          className="toggle-checkbox"
          name="toggle-checkbox"
          id="toggle-checkbox"
          checked={isAnnual}
          onChange={(e) => updateField({ isAnnual: e.target.checked })}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label">Yearly</span>
      </label>
    </>
  );
}
