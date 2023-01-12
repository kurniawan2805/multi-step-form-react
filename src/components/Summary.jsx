export default function Summary({
  planTitle,
  planPrice,
  addonTitel,
  addonPrice,
  isAnnual
}) {
  // const paymentTerm = ;
  return (
    <div className="card summary">
      <div className="summary-title">
        <h1>{`${planTitle} (${isAnnual ? "Yearly" : "Monthly"})`}</h1>
        <p>{`$${planPrice}/${isAnnual ? "yr" : "mo"}`} </p>
      </div>

      <p className="total-summary">
        {`Total (${isAnnual ? "per year" : "per month"})`}
      </p>
    </div>
  );
}
