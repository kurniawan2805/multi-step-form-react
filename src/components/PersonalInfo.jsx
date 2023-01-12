export default function PersonalInfo({ name, email, phone, updateField }) {
  return (
    <>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => updateField({ name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => updateField({ email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => updateField({ phone: e.target.value })}
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </>
  );
}
