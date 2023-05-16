import Dashboard from "..";
import ProspectHeader from "../../../../components/ProspectsHeader";
import ProspectDash from "../../../../components/prospectsdasboard";

const NewProspect = () => {
  return (
    <section className="flex w-4/5 m-auto pt-8">
      <section className="w-1/5 ">
        <Dashboard />
      </section>
      <main className="w-4/5">
        <ProspectHeader />
        <span className="text-xs text-gray-400">Add prospect</span>
        <div className="flex justify-between w-4/5 m-auto border border-primary py-8 px-4">
          <ProspectDash />
          <div>sdsjsfn</div>
        </div>
      </main>
    </section>
  );
};

export default NewProspect;
