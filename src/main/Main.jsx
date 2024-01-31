import "./main.scss";
import Nav from "./nav/Nav";
import Header from "./header/Header";
import Charts from "./chart/Chart";
import Stats from "./stats/Stats";
import Orders from "./orders/Orders";
import Platforms from "./platform/Platform";

const Main = () => {
  return (
    <main>
      <div className="Main-left">
        <Nav />
      </div>
      <div className="Main-right">
        <div className="Right-top">
          <Header />
        </div>
        <div className="Right-center">
          <div className="Charts">
            <Charts />
          </div>
          <div className="Stats">
            <Stats />
          </div>
        </div>
        <div className="Right-bottom">
          <div className="Orders">
            <Orders />
          </div>
          <div className="Platforms">
            <Platforms />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
