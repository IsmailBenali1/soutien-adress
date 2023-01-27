const Adresse = ({ add }) => {
  const { address } = add;
  return (
    <div>
      {add.map((ad, a) => (
        <p key={a}>{ad.address} </p>
      ))}
    </div>
  );
};

export default Adresse;
