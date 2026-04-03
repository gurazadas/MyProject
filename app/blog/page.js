// app/blog/page.js
export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl mb-10">Blog</h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border p-6 rounded-xl">
          <h2>Understanding Data Vault</h2>
        </div>

        <div className="border p-6 rounded-xl">
          <h2>Snowflake vs Oracle</h2>
        </div>

      </div>
    </div>
  );
}
