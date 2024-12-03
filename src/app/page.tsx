import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import Github from "../../public/images/Github.svg";
import Image from "next/image";
import { EventDate } from "@/components/EventDate";
import { Prizes } from "@/components/Prizes";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className={"flex flex-col items-center"}>
      <div className="absolute right-0 top-0 h-96 w-[47rem] bg-[url('/images/galaxy.svg')] bg-cover bg-no-repeat"></div>
      <div className="absolute right-0 top-0 h-96 w-[47rem] rotate-180 bg-white opacity-5 blur-3xl"></div>

      <Navbar />
      {/* Newsletter section */}
      <section
        className={
          "mb-20 flex max-w-3xl flex-col items-center justify-center pt-56"
        }
      >
        <h1 className={"title-large mb-4 text-center"}>
          <span className={"text-neutral-500"}>Your Hackathon</span>
          <br />
          adventure starts here?
        </h1>
        <p className={"text-center text-neutral-500"}>
          Join [Hackathon Name] and push your creativity to new heights! Solve
          the [specific challenge] and create impactful solutions. Whether
          you&#39;re a developer, designer, or enthusiast, this is your
          opportunity to collaborate and showcase your skills.
        </p>
        <div className={"mb-16 mt-10"}>
          <Button>
            <Image
              src={Github.src}
              alt={"Github icon"}
              width={20}
              height={20}
            />
            <span>Login with GitHub</span>
          </Button>
        </div>
        <EventDate />
      </section>

      {/* Prizes section */}
      <section
        className={
          "to-gradient-homepage flex w-full flex-col justify-center bg-gradient-to-t from-neutral-900 p-28"
        }
      >
        <div className={"mb-16 flex flex-col items-center gap-4"}>
          <h2 className={"text-3xl text-neutral-50"}>Prizes</h2>
          <p className={"max-w-lg text-neutral-500"}>
            Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida
            dignissim semper euismod. Imperdiet eget rhoncus eget purus.
          </p>
        </div>
        <Prizes />
      </section>

      {/* FAQ section */}
      <section className={"mb-20 w-full px-28"}>
        <Faq />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
