import { useEffect, useState } from "react";

const Home = () => {
  const [userInfo, setUserInfo] = useState([]);

  const getData = async () => {
    try {
      const query = await fetch("https://jsonplaceholder.typicode.com/comments");
      const response = await query.json();
      console.log(response);
      setUserInfo(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Hello, API called</h2>

      {userInfo.map((e, index) => (
        <div key={index}>
          <p>{e?.name}</p>
          <p>{e?.email}</p>
          <p>{e?.body}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
