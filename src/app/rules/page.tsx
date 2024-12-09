import { Navbar } from "@/components/Navbar";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Rules() {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-between px-6 lg:px-0"
      }
    >
      <Navbar selectedRoute={"rules"} />
      <section className={"mt-20 flex w-full flex-col items-center"}>
        <div
          className={
            "mb-20 flex w-full max-w-5xl flex-col items-center p-4 md:py-28 lg:p-0"
          }
        >
          <Faq title={"Hackathon rules"} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
