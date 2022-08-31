import type { NextPage } from "next";
import Sample from "../components/Sample/Sample";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <Sample />
    </div>
  );
};

export default Home;
