import { useState } from "react";
import FirstForm from "./firstform";
import SecondForm from "./secondForm";
import ThirdForm from "./thirdForm";
const ProspectForm = () => {
  const [page, setPage] = useState(0);
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FirstForm />;
      case 1:
        return <SecondForm />;
      case 2:
        return <ThirdForm />;
      default:
        return <FirstForm />;
    }
  };
  function handleSubmit() {
    setPage(page + 1);
  }

  return (
    <section>
     <div>
     {conditionalComponent()}
     </div>
      <button onClick={handleSubmit}>
        {page === 0 || page === 1 ? "Next" : "Submit"}
      </button>
      {page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>}
    </section>
  );
};

export default ProspectForm;
