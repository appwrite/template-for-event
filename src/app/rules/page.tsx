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
      <Navbar />
      <div className={"max-w-3xl"}>
        <Faq title={"Hackathon rules"} />
      </div>
      <Footer />
    </main>
  );
}
