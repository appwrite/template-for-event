"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { loginWithGithub } from "@/tools/account";

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
          <h2 className={"mb-8 w-64 text-center text-3xl text-neutral-50"}>
            Welcome to
            <br />
            Dev Hackathon
          </h2>
          <div
            className={
              "flex w-96 flex-col items-center rounded-lg border border-neutral-800 bg-neutral-850 p-8"
            }
          >
            <span className={"mb-2 text-sm font-medium text-neutral-250"}>
              Sign in with GitHub to continue
            </span>

            <button
              className={
                "flex w-full flex-row justify-center gap-1.5 rounded-lg border border-neutral-750 p-2.5"
              }
              onClick={() => {
                loginWithGithub();
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2.5C5.85625 2.5 2.5 5.94114 2.5 10.1897C2.5 13.5924 4.64687 16.4664 7.62812 17.4853C8.00312 17.5526 8.14375 17.3219 8.14375 17.12C8.14375 16.9374 8.13438 16.3319 8.13438 15.6878C6.25 16.0435 5.7625 15.2168 5.6125 14.7843C5.52812 14.5632 5.1625 13.8808 4.84375 13.6981C4.58125 13.5539 4.20625 13.1983 4.83438 13.1887C5.425 13.1791 5.84688 13.7462 5.9875 13.9769C6.6625 15.1399 7.74063 14.8131 8.17188 14.6113C8.2375 14.1115 8.43437 13.775 8.65 13.5828C6.98125 13.3905 5.2375 12.7273 5.2375 9.78599C5.2375 8.94974 5.52813 8.25767 6.00625 7.71939C5.93125 7.52714 5.66875 6.73895 6.08125 5.68161C6.08125 5.68161 6.70938 5.47976 8.14375 6.46981C8.74375 6.29679 9.38125 6.21028 10.0188 6.21028C10.6563 6.21028 11.2938 6.29679 11.8938 6.46981C13.3281 5.47015 13.9563 5.68161 13.9563 5.68161C14.3688 6.73895 14.1063 7.52714 14.0313 7.71939C14.5094 8.25767 14.8 8.94013 14.8 9.78599C14.8 12.7369 13.0469 13.3905 11.3781 13.5828C11.65 13.8231 11.8844 14.2845 11.8844 15.0054C11.8844 16.0339 11.875 16.8605 11.875 17.12C11.875 17.3219 12.0156 17.5622 12.3906 17.4853C13.8795 16.97 15.1733 15.9889 16.0898 14.6801C17.0064 13.3714 17.4996 11.8009 17.5 10.1897C17.5 5.94114 14.1438 2.5 10 2.5Z"
                  fill="#C3C3C6"
                />
              </svg>

              <span>GitHub</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
