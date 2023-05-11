import { React } from "react";
import "../styles.css";
import Input from "./Input";
import SittingColumn from "./SittingColumn";

const Home = () => {
  return (
    <div className="Home">
      <Input />
      <div className="Aeroplane-Front">Aeroplane - Front</div>
      <div className="sitting-container">
        <SittingColumn columnName="Column A" />
        <SittingColumn columnName="Column B" />
        <SittingColumn columnName="Column C" />
      </div>
    </div>
  );
};
export default Home;
