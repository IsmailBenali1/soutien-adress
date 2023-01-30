const Job = ({ taffs }) => {
  const { job } = taffs;
  return (
    <div>
      <h1>LISTE DES JOBS</h1>
      {taffs.map((taff, j) => (
        <p key={j}>{taff.job}</p>
      ))}
    </div>
  );
};

export default Job;
