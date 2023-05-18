import Dashboard from "..";
import ProspectHeader from "../../../../components/prospect/ProspectsHeader";
import ProspectForm from "../../../../components/prospect/prospectform";
import ProspectDash from "../../../../components/prospect/prospectsdasboard";

const NewProspect = () => {
  return (
    <section className="flex w-4/5 m-auto pt-8">
      <section className="w-1/5">
        <Dashboard />
      </section>
      <main className="w-4/5">
        <ProspectHeader />
        <span className="text-xs text-gray-400">Add prospect</span>
        <div className="flex justify-between w-4/5 m-auto border border-primary py-8 px-4">
          <span className="border-2 w-1/5">
            {" "}
            {/* <ProspectDash /> */}
          </span>
          <span className="border-2 w-4/5">
            {" "}
            <ProspectForm />
          </span>
        </div>
      </main>
    </section>
  );
};

export default NewProspect;
