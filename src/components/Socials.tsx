import Github from "../../public/images/socials/Github.svg";
import Discord from "../../public/images/socials/Discord.svg";
import Youtube from "../../public/images/socials/Youtube.svg";
import X from "../../public/images/socials/X.svg";
import Link from "next/link";
import Image from "next/image";

export const Socials = () => {
  const socialLinks = [
    { name: "Github", icon: Github, url: "https://Github.com/appwrite" },
    { name: "Discord", icon: Discord, url: "https://appwrite.io/discord" },
    {
      name: "Youtube",
      icon: Youtube,
      url: "https://www.youtube.com/@Appwrite",
    },
    { Name: "X", icon: X, url: "https://x.com/appwrite" },
  ];

  return (
    <div className={"flex flex-row gap-2"}>
      {socialLinks.map((socialLink) => {
        return (
          <Link
            href={socialLink.url}
            key={socialLink.url}
            className={"rounded-lg border border-neutral-750 p-1"}
          >
            <Image
              src={socialLink.icon.src}
              alt={`${socialLink.name} icon`}
              width={20}
              height={20}
            />
          </Link>
        );
      })}
    </div>
  );
};
