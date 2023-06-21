import React, { useState } from "react";

interface Customer {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  region?: string;
  photo?: string;
  phoneNumber: string;
}

const AddCustomerForm: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>({
    firstName: "",
    lastName: "",
    street: "",
    postalCode: "",
    city: "",
    region: "",
    photo: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<Partial<Customer>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Customer> = {};

    if (customer.firstName.length < 3) {
      newErrors.firstName = "Imię musi zawierać co najmniej 3 litery.";
    }

    if (customer.lastName.length < 3) {
      newErrors.lastName = "Nazwisko musi zawierać co najmniej 3 litery.";
    }

    if (customer.street.length < 5) {
      newErrors.street = "Ulica musi zawierać co najmniej 5 liter.";
    }

    const postalCodeRegex = /^\d{2}-\d{3}$/;
    if (!postalCodeRegex.test(customer.postalCode)) {
      newErrors.postalCode = "Kod pocztowy musi być w formacie XX-XXX.";
    }

    if (customer.city.length < 3) {
      newErrors.city = "Miasto musi zawierać co najmniej 3 litery.";
    }

    const phoneNumberRegex = /^\+\d{11}$/;
    if (!phoneNumberRegex.test(customer.phoneNumber)) {
      newErrors.phoneNumber =
        'Numer telefonu musi zaczynać się od znaku "+" i zawierać 11 cyfr.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (validateForm()) {
      // Tutaj możesz wykonać akcję zapisu klienta do bazy danych lub inną operację
      console.log("Klient został dodany:", customer);
    }
  };

  return (
    <div>
      <h2>Dodaj klienta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imię:</label>
          <input
            type="text"
            name="firstName"
            value={customer.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>

        <div>
          <label>Nazwisko:</label>
          <input
            type="text"
            name="lastName"
            value={customer.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>

        <div>
          <label>Ulica:</label>
          <input
            type="text"
            name="street"
            value={customer.street}
            onChange={handleInputChange}
          />
          {errors.street && <span>{errors.street}</span>}
        </div>

        <div>
          <label>Kod pocztowy:</label>
          <input
            type="text"
            name="postalCode"
            value={customer.postalCode}
            onChange={handleInputChange}
          />
          {errors.postalCode && <span>{errors.postalCode}</span>}
        </div>

        <div>
          <label>Miasto:</label>
          <input
            type="text"
            name="city"
            value={customer.city}
            onChange={handleInputChange}
          />
          {errors.city && <span>{errors.city}</span>}
        </div>

        <div>
          <label>Region:</label>
          <input
            type="text"
            name="region"
            value={customer.region}
            onChange={handleInputChange}
          />
          {errors.region && <span>{errors.region}</span>}
        </div>

        <div>
          <label>Link do zdjęcia:</label>
          <input
            type="text"
            name="photo"
            value={customer.photo}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Numer telefonu:</label>
          <input
            type="text"
            name="phoneNumber"
            value={customer.phoneNumber}
            onChange={handleInputChange}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>

        <button type="submit">Dodaj klienta</button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
