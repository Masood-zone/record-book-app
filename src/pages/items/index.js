import React from "react";
import { Card } from "../../components/card";
import AddItems from "./add";

const MainApp = () => {
  return (
    <div>
      <Card title="Record Book Application">
        <AddItems />
      </Card>
    </div>
  );
};

export default MainApp;
