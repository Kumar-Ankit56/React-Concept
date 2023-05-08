function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <h3>Name</h3>
      <p>
        {props.data.map((user) => {
          return <>{user.Name}</>;
        })}
      </p>
    </>
  );
}

export default Home;
