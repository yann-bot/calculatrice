import clsx from "clsx";

const buttons = [
    ["C", "( )", "%", "del"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "x"],
    ["1", "2", "3", "+"],
    ["=", ".", "0", "-"],
    //Text et symbole du bouton
  ];
  
  const symboleSpecial = ["( )", "+", "-", "x", "/", "%"];
  export default function CalculatorGrid() {
    //grille qui affiche les boutons de notre calculatrice
    return (
      <div className="h-full flex flex-col justify-center items-center p-2">
      <div className="grid grid-rows-4 grid-cols-4 gap-5 w-full max-w-sm">
        {buttons.flat().map((symbol, index) => (
          <button
            key={index}
            className={clsx(
              "border border-gray-300 h-14 w-16 rounded-lg flex items-center justify-center ",
              "shadow-md shadow-gray-200 hover:shadow-lg  text-xl font-semibold",
              symbol === "=" ? "bg-green-500 text-white" : "bg-white",
              symboleSpecial.includes(symbol) ? "text-green-500" : "",
            )}
          >
            {symbol}
          </button>
        ))}
      </div>
      </div>
    );
  }
  
  