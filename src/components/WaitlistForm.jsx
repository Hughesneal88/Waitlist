import ReactFlagsSelect from 'react-flags-select';
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { useState } from "react";
import PHONECODESEN from "./countryCodes";

function WaitlistForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [countryCode, setCountryCode] = useState("GH");
  const [error, setError] = useState(""); 

  const [isSignedUp, setIsSignedUp] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/waitlist", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
      name,
      phone: `${PHONECODESEN[countryCode]["secondary"]}${phone}`,
      institution,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      setIsSignedUp(true);
    }
    alert(result.message);
  }


  return (
    <Card className="rounded-2xl shadow-xl w-full max-w-md m-4">
      <CardContent className="p-8 md:p-12 text-center">
        {!isSignedUp ? (
          <>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Join the <span className="primary-gradient-text">Waitlist</span>
            </h1>
            <p className="text-gray-600 mb-8">Be the first to know when we launch.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex space-x-4">
                <ReactFlagsSelect
                  selected={countryCode}
                  onSelect={(code) => setCountryCode(code)}
                  countryCode={countryCode}
                  searchable
                  className="w-1/3"
                  customLabels={PHONECODESEN}
                  showSelectedLabel={false} // Hides the full country name in the selected value
                  showOptionLabel={false} // Shows the full country name in the dropdown options
                  />
                <input
                  className="w-2/3 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Phone number"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    // Allow only numeric input
                    let value = e.target.value;
                    if (value.length > 9) {
                      value = value.slice(0, 9); // Limit to 9 digits
                    }
                    setPhone(value);

                    // Validate phone number length
                    if (value.length !== 9) {
                      setError("Phone number must be exactly 9 digits.");
                    } else {
                      setError(""); // Clear error if valid
                    }
                  }}
                  required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}              </div>
              <div>
                <input
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Institution"
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Join Now
              </Button>
            </form>
          </>
        ) : (
          <p className="text-gray-500 mt-6 text-sm">Thanks for signing up!</p>
        )}
      </CardContent>
    </Card>
  );
}

export default WaitlistForm;