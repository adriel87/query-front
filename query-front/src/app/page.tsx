export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-around w-full gap-2">
        <SelectModelContainer />
        <SelectColumnsContainer />
        <WhereContainer />
      </div>
    </main>
  );
}
const SelectModelContainer = async () => {
  const models = await fetch("localhost:8080/models/53");
  return <div className="bg-slate-500 w-full">seleccionar modelos</div>;
};

const SelectColumnsContainer = () => {
  return <div className="bg-slate-500 w-full">seleccionar columnas</div>;
};

const WhereContainer = () => {
  return <div className="bg-slate-500 w-full">hacer el where</div>;
};
