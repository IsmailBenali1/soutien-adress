import "./styles.css";
import Personne from "./components/Personne.js";
import Job from "./components/Job";

const App = () => {
  const renseignements = [
    {
      firstname: "Juliette",
      name: "ANDRÉ",
      address: "8 Blvd de Pierre",
      job: "Assistante dentaire",
    },
    {
      firstname: "Olivier",
      name: "STEW",
      address: "8 Blvd de Pierre",
      job: "Assistante dentaire",
    },
    {
      firstname: "Marc",
      name: "ZUCKERBERG",
      address: "8 Blvd de Pierre",
      job: "Assistante dentaire",
    },
    {
      firstname: "Henry",
      name: "DRÉFUS",
      address: "8 Blvd de Pierre",
      job: "Assistante dentaire",
    },
  ];

  return (
    <div>
      <Personne propriete={renseignements} />
      <Job taffs={renseignements} />
    </div>
  );
};

export default App;
