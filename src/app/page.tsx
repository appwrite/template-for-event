"use client";

import { Navbar } from "@/components/Navbar";
import { EventDate } from "@/components/EventDate";
import { Prizes } from "@/components/Prizes";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { GitHubLoginButton } from "@/components/GitHubLoginButton";
import { useUser } from "@/components/UserProvider";
import { GoToDashboardButton } from "@/components/GoToDashboardButton";

export default function Home() {
  const { user, loading } = useUser();

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
          <span className={"text-neutral-50"}>adventure starts here</span>
        </h1>
        <p className={"text-center text-neutral-500"}>
          Join [Hackathon Name] and push your creativity to new heights! Solve
          the [specific challenge] and create impactful solutions. Whether
          you&#39;re a developer, designer, or enthusiast, this is your
          opportunity to collaborate and showcase your skills.
        </p>

        <div className="mb-16 mt-10 h-6 flex items-center justify-center">
          {loading ? (
            <div className="flex items-center justify-center">
              {/* Tailwind spinner */}
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            </div>
          ) : (
            !user ? <GitHubLoginButton /> : <GoToDashboardButton />
          )}
        </div>
        <EventDate />
      </section>
      {/* Prizes section */}
      <section
        className={
          "flex w-full flex-col items-center bg-gradient-to-t from-neutral-900 to-gradient-homepage"
        }
      >
        <div
          className={
            "flex flex-col items-center justify-center p-4 md:py-28 lg:p-0 xl:w-[1200px]"
          }
        >
          <div className={"mb-16 mt-[120px] flex flex-col items-center gap-4"}>
            <h2 className={"text-3xl text-neutral-50"}>Prizes</h2>
            <p className={"max-w-lg text-center text-neutral-500"}>
              Win amazing prizes for your creativity and innovation! Celebrate
              your hard work with rewards that recognize your achievements.
            </p>
          </div>
          <Prizes />
        </div>
      </section>
      {/* FAQ section */}
      <section className={"mt-20 flex w-full flex-col items-center"}>
        <div
          className={
            "mb-20 flex w-full max-w-5xl flex-col items-center p-4 md:py-28 lg:p-0"
          }
        >
          <Faq title={"FAQ"} />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
