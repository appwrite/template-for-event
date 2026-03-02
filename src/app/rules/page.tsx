import { Navbar } from "@/components/Navbar";
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
          <div
            className={
              "mt-4 flex max-w-screen-xl flex-col gap-4 md:mt-0 md:flex-row"
            }
          >
            <h2 className={"w-64 text-3xl text-neutral-50"}>Hackathon rules</h2>
            <div className={"grow"}>
              <span className={"font-medium text-neutral-100"}>
                Build From Scratch
              </span>
              <p className={"mb-6 mt-4 text-neutral-300"}>
                All projects must be created entirely during the hackathon.
                Pre-existing projects are not allowed, ensuring a fair and
                creative competition.
              </p>

              <span className={"font-medium text-neutral-100"}>
                Team Size Limit
              </span>
              <p className={"mb-6 mt-4 text-neutral-300"}>
                Teams can have up to 4 members. Collaborate effectively and
                bring diverse skills to the table to maximize your potential!
              </p>

              <span className={"font-medium text-neutral-100"}>
                Follow the Theme
              </span>
              <p className={"mb-6 mt-4 text-neutral-300"}>
                All submissions must align with the announced theme or challenge
                to qualify for judging. Stay creative while sticking to the
                guidelines.
              </p>

              <span className={"font-medium text-neutral-100"}>
                Submission Deadline
              </span>
              <p className={"mb-6 mt-4 text-neutral-300"}>
                All projects must be submitted by the final deadline. Late
                submissions will not be accepted, so plan your time wisely!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
