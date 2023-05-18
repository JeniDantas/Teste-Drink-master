import React, { useState } from "react";
import  './Rodape.css';

const Rodape = () => {
  const [extraInfo, setExtraInfo] = useState(false);

  function handleClick() {
    setExtraInfo(!extraInfo);
  }

  return (
    <footer className="rodape">
      <div>
        <small>Copyright &copy; 2023</small>
      </div>
      <br />
      <button onClick={handleClick}>Mais informações.</button>
      {extraInfo && (
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression.
        </p>
      )}
    </footer>
  );
};

export default Rodape;