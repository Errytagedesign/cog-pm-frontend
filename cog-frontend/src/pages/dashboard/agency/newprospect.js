import Dashboard from "..";
import ProspectHeader from "../../../../components/prospect/ProspectsHeader";
import ProspectForm from "../../../../components/prospect/prospectform";
import ProspectDash from "../../../../components/prospect/prospectsdasboard";

const NewProspect = () => {
  return (
    <section className="flex w-4/5 m-auto pt-8 mb-8">
      <section className="w-1/5">
        <Dashboard />
      </section>
      <main className="w-full ">
        <ProspectHeader />
        <span className="text-xs text-gray-400 font-bold">Add prospect</span>
        <div className="flex justify-between w-full  border border-primary py-8 px-4 mt-8">
          <span className=" w-11/12 ">
            {" "}
            <ProspectForm />
          </span>
        </div>
      </main>
    </section>
  );
};

export default NewProspect;
