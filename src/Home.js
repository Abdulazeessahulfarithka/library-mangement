import React from "react";
import BarChart from "./Barchart";
import Card from "./Card";
import ReportCard from "./Reportcard";
import NavBar from "./Navbar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Card />

      <hr />
      <ReportCard />
      <hr />
      <section className="container my-5">
        <div className="row shadow center py-3">
          <BarChart />
        </div>
      </section>
    </div>
  );
};

export default Home;
