"use client";
import { useState } from "react";
import Chevron from "../../public/images/chevron.svg";
import Image from "next/image";

type FaqProps = {
  title: string;
};

export const Faq = ({ title }: FaqProps) => {
  const [openQuestionId, setOpenQuestionId] = useState(1);

  const entries: Array<{ id: number; question: string; answer: string }> = [
    {
      id: 1,
      question: "Who can participate in the hackathon?",
      answer:
        "Anyone passionate about coding, designing, or problem-solving is welcome! Whether you’re a beginner or a pro, there’s a place for everyone.",
    },
    {
      id: 2,
      question: "Do I need a team to register?",
      answer:
        "You can register solo or as part of a team. If you're solo, don't worry—team formation opportunities will be available before the event.",
    },
    {
      id: 3,
      question: "What is the theme of the hackathon?",
      answer:
        "The theme will be announced at the start of the hackathon to keep things fair and exciting!",
    },
    {
      id: 4,
      question: "How much does it cost to participate?",
      answer:
        "Participation is completely free! Just bring your creativity and enthusiasm.",
    },
    {
      id: 5,
      question: "What are the judging criteria?",
      answer:
        "Projects will be judged on innovation, impact, technical execution, and presentation.",
    },
    {
      id: 6,
      question: "Can I use pre-built code or libraries?",
      answer:
        "Yes, you can use open-source libraries or your own pre-written code, as long as you declare them during submission.",
    },
    {
      id: 7,
      question: "Will there be mentors available?",
      answer:
        "Yes! Experienced mentors will be on hand throughout the event to guide and support you.",
    },
    {
      id: 8,
      question: "How do I submit my project?",
      answer:
        "You'll need to submit your project through our platform before the deadline. Detailed instructions will be provided during the event.",
    },
  ];

  const showEntries = () => {
    return entries.map((entry, index) => {
      return (
        <div
          key={`question-${entry.id}`}
          className={`cursor-pointer pb-6 ${index !== 0 ? "mt-6" : ""} ${index !== entries.length - 1 ? "border-b border-neutral-800" : ""}`}
          onClick={() => {
            setOpenQuestionId(entry.id);
          }}
        >
          <div className={"flex flex-row"}>
            <span className={"grow text-neutral-100"}>{entry.question}</span>
            <div
              className={`transition-all ease-in-out ${
                openQuestionId === entry.id ? "rotate-0" : "rotate-180"
              }`}
            >
              <Image
                src={Chevron.src}
                alt={"Chevron icon"}
                width={20}
                height={20}
              />
            </div>
          </div>
          <div
            className={`overflow-hidden text-lg text-neutral-300 transition-all duration-500 ease-in-out ${
              openQuestionId === entry.id
                ? "mt-4 max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            {entry.answer}
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className={
        "flex flex-col gap-16 md:flex-row md:items-start md:gap-0 xl:w-[1200px]"
      }
    >
      <h2 className={"w-64 shrink-0 text-3xl text-neutral-50"}>{title}</h2>
      <div className={"grow"}>{showEntries()}</div>
    </div>
  );
};
