export default function Addon({ updateField, addon, data }) {
  console.log(data);
  const optionAddon = data.map((addon, index) => {
    const { title, price, desc } = addon;
    return (
      <div className="addon-container" key={index}>
        <label className="addon-label">
          <input
            type="checkbox"
            name={title}
            onChange={(e) => {
              // updateField((prev) => {
              //   return { ...prev,  };
              // });
            }}
          />
          <div className="addon-text">
            <h3 className="addon-title">{title}</h3>
            <p className="addon-subtitle">{desc}</p>
          </div>
          <p className="addon-price">{`+$${price}/mo`}</p>
        </label>
      </div>
    );
  });

  return (
    <div>
      {optionAddon}
      {/* <div className="addon-container">
        <input type="checkbox" name="online" id="online" />
        <label className="addon-label">
          <div className="addon-text">
            <h3 className="addon-title">Online Service</h3>
            <p className="addon-subtitle">Access to multiplayer games</p>
          </div>
          <p className="addon-price">+$1/mo</p>
        </label>
      </div>
      <div className="addon-container">
        <input type="checkbox" name="online" id="online" />
        <label className="addon-label">
          <div className="addon-text">
            <h3 className="addon-title">Larger storage</h3>
            <p className="addon-subtitle">Extra 1TB of cloud save</p>
          </div>
          <p className="addon-price">+$2/mo</p>
        </label>
      </div>
      <div className="addon-container">
        <input type="checkbox" name="online" id="online" />
        <label className="addon-label">
          <div className="addon-text">
            <h3 className="addon-title">Customizable Profile</h3>
            <p className="addon-subtitle">Custom theme on your profile</p>
          </div>
          <p className="addon-price">+2/mo</p>
        </label>
      </div> */}
    </div>
  );
}
