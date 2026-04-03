// components/ProjectsPreview.js
export function ProjectsPreview() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl mb-10">Featured Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold">ETL Automation</h3>
          <p className="text-sm text-gray-600 mt-2">
            Built VaultSpeed pipelines → 60% faster delivery
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold">Data Consistency</h3>
          <p className="text-sm text-gray-600 mt-2">
            Standardized Data Vault model
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-semibold">Airflow Framework</h3>
          <p className="text-sm text-gray-600 mt-2">
            Reusable DAG orchestration
          </p>
        </div>

      </div>
    </section>
  );
}
