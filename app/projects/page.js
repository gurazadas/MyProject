// app/projects/page.js
export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl mb-10">Projects</h1>

      <div className="space-y-6">

        <div className="border p-6 rounded-xl">
          <h2 className="font-semibold">ETL Automation</h2>
          <p>Automated Data Vault pipelines → 60% faster delivery</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="font-semibold">Airflow Framework</h2>
          <p>Reusable DAG architecture for orchestration</p>
        </div>

      </div>
    </div>
  );
}
