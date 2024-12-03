import { Navbar } from "@/components/Navbar";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Rules() {
  return (
    <main className={"flex min-h-screen flex-col items-center justify-between"}>
      <Navbar />
      <Faq title={"Hackathon rules"} />
      <Footer />
    </main>
  );
}
