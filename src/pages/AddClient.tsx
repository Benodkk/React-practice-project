import { useState } from "react";

interface Client {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  region?: string;
  photo?: string;
  phoneNumber: string;
}

const AddClient = () => {
  const [client, setClient] = useState<Client>({
    firstName: "",
    lastName: "",
    street: "",
    postalCode: "",
    city: "",
    region: "",
    photo: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState<Partial<Client>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<Client> = {};

    if (client.firstName.length < 3) {
      newErrors.firstName = "First name must contain at least 3 letters.";
    }

    if (client.lastName.length < 3) {
      newErrors.lastName = "Last name must contain at least 3 letters.";
    }

    if (client.street.length < 5) {
      newErrors.street = "Street must contain at least 5 characters.";
    }

    const postalCodeRegex = /^\d{2}-\d{3}$/;
    if (!postalCodeRegex.test(client.postalCode)) {
      newErrors.postalCode = "Postal code must be in the format XX-XXX.";
    }

    if (client.city.length < 3) {
      newErrors.city = "City must contain at least 3 letters.";
    }

    if (client.region && client.region.length < 3) {
      newErrors.region = "Region must contain at least 3 letters.";
    }

    const phoneNumberRegex = /^\+\d{11}$/;
    if (!phoneNumberRegex.test(client.phoneNumber)) {
      newErrors.phoneNumber =
        'Phone number must start with "+" sign and contain 11 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("git");
    }
  };
  return (
    <div>
      <h2>Dodaj klienta</h2>
      <form onSubmit={handleSubmit}>
        <div>* - required</div>
        <div>
          <label>Name*:</label>
          <input
            className="border-2 border-black"
            type="text"
            name="firstName"
            value={client.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>

        <div>
          <label>Lastname*:</label>
          <input
            className="border-2 border-black"
            type="text"
            name="lastName"
            value={client.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>

        <div>
          <label>Street*:</label>
          <input
            className="border-2 border-black"
            type="text"
            name="street"
            value={client.street}
            onChange={handleInputChange}
          />
          {errors.street && <span>{errors.street}</span>}
        </div>

        <div>
          <label>Postal code*:</label>
          <input
            className="border-2 border-black"
            type="text"
            name="postalCode"
            value={client.postalCode}
            onChange={handleInputChange}
          />
          {errors.postalCode && <span>{errors.postalCode}</span>}
        </div>

        <div>
          <label>City*:</label>
          <input
            className="border-2 border-black"
            type="text"
            name="city"
            value={client.city}
            onChange={handleInputChange}
          />
          {errors.city && <span>{errors.city}</span>}
        </div>

        <div>
          <label>Region:</label>
          <input
            className="border-2 border-black"
            type="text"
            name="region"
            value={client.region}
            onChange={handleInputChange}
          />
          {errors.region && <span>{errors.region}</span>}
        </div>

        <div>
          <label>Photo link:</label>
          <input
            className="border-2 border-black"
            type="text"
            name="photo"
            value={client.photo}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Phonr number*:</label>
          <input
            className="border-2 border-black"
            type="text"
            name="phoneNumber"
            value={client.phoneNumber}
            onChange={handleInputChange}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>

        <button type="submit">Dodaj klienta</button>
      </form>
    </div>
  );
};

export default AddClient;
