import { useEffect, useState, useRef } from "react";

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search === "") {
      setError("No se puede buscar si no hay nada escrito");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar con numeros");
      return;
    }

    if(search.length < 3){
      setError('Debe ingresar mas de 3 caracteres...')
      return
    }
    setError(null)
  }, [search]);

  return { search, setSearch, error };
}

export { useSearch };
