import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SearchPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search.toLocaleLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokemon no encontrado");
      }
      const data = await response.json();
      navigate(`/search/${data.name}`);
    } catch (e) {
      toast.error("Pokemon no encontrado");
    }
  };
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-6">Buscar Pokemon</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nombre pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          />
          <button className="bg-blue-500 text-rose-500 rounded-lg px-4 py-2">Buscar</button>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
