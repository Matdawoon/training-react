import { useState } from "react";

function App() {
  // state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Peche" },
    { id: 2, nom: "Abricot" },
    { id: 3, nom: "Banane" }
  ]);

  // comportements (événements)
  const handleDelete = (id) => {
    console.log(id);
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    //3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button onClick={() => handleDelete(fruit.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
