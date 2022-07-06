import { useState } from "react";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  const [crumbs, setCrumbs] = useState(['Home', 'Category', 'Sub Category']);

  const selected = crumb => {
    console.log(crumb);
  }

  return (
    <div className="App">
      <Breadcrumb crumbs={ crumbs } selected={ selected } />
    </div>
  );
}

export default App;
