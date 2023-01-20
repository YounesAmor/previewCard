import "./App.css";
import ProductPreviewCard from "./components/productPreviewCard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping);
function App() {
  return (
    <div className="App h-screen w-screen">
      <div
        id="productPreviewCardWrapper"
        className="bg-cream w-full h-full flex justify-center items-center "
      >
        <ProductPreviewCard />
      </div>
    </div>
  );
}

export default App;
