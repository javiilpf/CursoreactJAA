import ProductList from "./components/ProductList";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </AuthProvider>
  );
};
export default App;
