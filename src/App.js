import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
        <SearchParams></SearchParams>
        {/*
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />*/}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
