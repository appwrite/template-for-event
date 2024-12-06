import { Navbar } from "@/components/Navbar";
import { EventDate } from "@/components/EventDate";
import { Prizes } from "@/components/Prizes";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { GitHubLoginButton } from "@/components/GitHubLoginButton";

export default function Home() {
  return (
    <main className={"flex flex-col items-center"}>
      <div className="absolute right-0 top-0 h-96 w-[47rem] bg-[url('/images/galaxy.svg')] bg-cover bg-no-repeat"></div>
      <div className="absolute right-0 top-0 h-96 w-[47rem] rotate-180 bg-white opacity-5 blur-3xl"></div>
      <Navbar />
      {/* Newsletter section */}
      <section
        className={
          "mb-20 flex w-full max-w-3xl flex-col items-center justify-center px-4 pt-56 md:w-auto md:px-0"
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
          <GitHubLoginButton />
        </div>
        <EventDate />
      </section>
      {/* Prizes section */}
      <section
        className={
          "flex w-full flex-col items-center justify-center bg-gradient-to-t from-neutral-900 to-gradient-homepage p-4 md:p-28"
        }
      >
        <div className={"mb-16 flex flex-col items-center gap-4"}>
          <h2 className={"text-3xl text-neutral-50"}>Prizes</h2>
          <p className={"max-w-lg text-center text-neutral-500"}>
            Lorem ipsum dolor sit amet consectetur. Mauris eu sit gravida
            dignissim semper euismod. Imperdiet eget rhoncus eget purus.
          </p>
        </div>
        <Prizes />
      </section>
      {/* FAQ section */}
      <section className={"mb-20 flex w-full flex-col items-center px-28"}>
        <Faq title={"FAQ"} />
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
