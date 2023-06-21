import { FormEvent, useState } from "react";

export const KidsInBus = () => {
  const [kids, setKids] = useState([
    {
      name: "Barbara",
      age: "10",
    },
  ]);
  const [kidName, setKidName] = useState("");
  const [kidAge, setKidAge] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newKid = {
      name: kidName,
      age: kidAge,
    };
    console.log(kids);
    setKids([...kids, newKid]);

    setKidName("");
    setKidAge("");
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-black p-1"
          type="text"
          name="name"
          value={kidName}
          onChange={(e) => setKidName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="border-2 border-black p-1"
          type="text"
          name="age"
          value={kidAge}
          onChange={(e) => setKidAge(e.target.value)}
          placeholder="Age"
        />
        <input
          className="cursor-pointer border-2 border-black p-1"
          type="submit"
          value="Submit"
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {kids.map((kid) => {
            return (
              <tr className="border-t-2 border-t-black">
                <td className="text-center">{kid.name}</td>
                <td className="text-center">{kid.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
