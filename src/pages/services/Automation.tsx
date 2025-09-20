import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Automation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="section-padding">
        <div className="container mx-auto px-4">
          <h1 className="text-primary mb-4">Industrial Automation</h1>
          <p className="text-muted-foreground mb-8">Industrial automation details to be provided (PLC/SCADA not covered in current PDF).</p>

          <section className="mt-10">
            <h2 className="font-semibold text-foreground mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Automation;
