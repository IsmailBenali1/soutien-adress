import Adresse from "./Adresse";

const Personne = ({ propriete }) => {
  const { name, firstname } = propriete;

  return (
    <div>
      <h1>LISTE DES PERSONNES</h1>

      {propriete.map((prop, k) => (
        <p key={k}>
          {prop.name} {prop.firstname}
        </p>
      ))}
      <h1>LISTE DES ADRESSES</h1>
      <Adresse add={propriete} />
    </div>
  );
};

export default Personne;
