import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import Addon from "./components/Addon";
import Summary from "./components/Summary";
import Finish from "./components/Finish";

import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [jsonData, setJsonData] = useState({
    plan: [],
    addon: []
  });
  const getData = () => {
    fetch(
      "assets/data.json",

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setJsonData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const [currStep, setCurrStep] = useState(2);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    planTitle: "Arcade",
    planPrice: "9",
    isAnnual: false,
    addon: {}
  });

  function updateField(fieldData) {
    setFormData((prevData) => {
      return { ...prevData, ...fieldData };
    });
  }

  const Step = [
    <PersonalInfo {...formData} updateField={updateField} />,
    <Plan {...formData} updateField={updateField} data={jsonData.plan} />,
    <Addon {...formData} updateField={updateField} data={jsonData.addon} />,
    <Summary {...formData} updateField={updateField} />
  ];

  const FormTitle = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up"
  ];
  const FormSubtitle = [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming."
  ];
  // console.log(formData, setFormData);

  return (
    <div className="App">
      <Sidebar />
      <main className="content">
        <form data-multi-step>
          <div className="card" data-step>
            <div className="step-header">
              <h1 className="step-title">{FormTitle[currStep]}</h1>
              <p className="step-subtitle">{FormSubtitle[currStep]}</p>
            </div>
            {Step[currStep]}
            <div className="button-container">
              {currStep > 0 ? (
                <button
                  type="button"
                  data-previous
                  onClick={() => {
                    setCurrStep((prev) => prev - 1);
                  }}
                >
                  Previous
                </button>
              ) : (
                <div></div>
              )}
              <button
                type="button"
                data-next
                onClick={() => {
                  if (currStep < Step.length - 1) {
                    setCurrStep((prev) => prev + 1);
                  }
                }}
              >
                {currStep < Step.length - 1 ? "Next Step" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
