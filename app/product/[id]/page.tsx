import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <Navbar />

      <div className="p-10 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-4">
          Product ID: {params.id}
        </h1>

        <p className="text-[#eadbc4]">
          Yahan pe baad me product ka full detail aayega.
        </p>
      </div>

      <Footer />
    </>
  );
}
