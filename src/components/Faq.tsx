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
      question: "Quis primus orator erit?",
      answer:
        "Primus orator, Marcus Tullius, de historia Romana disseret, praecipue de effectibus civilis belli ad culturam populorum.",
    },
    {
      id: 2,
      question: "Ubi congressus habebitur?",
      answer:
        "Congressus in aula magna urbis Romae habebitur, quae iuxta forum antiquum sita est, die Solis hora septima.",
    },
    {
      id: 3,
      question: "Quis cibus eventui praebebitur?",
      answer:
        "Cibum ex variis regionibus praeparatum, inter quas Etruria et Sicilia, ad gustum omnium participantium, praebebitur.",
    },
    {
      id: 4,
      question: "Quales workshops praesto erunt?",
      answer:
        "Workshops includunt calligraphiam Latinam, studium rhetoricae, et cursum brevem historiae architecturae Romanae.",
    },
    {
      id: 5,
      question: "Quomodo nomen registrari potest?",
      answer:
        "Ad registrandum nomen, oportet formam electronicam implere in pagina eventus vel nomen in die congressus ipso tradere.",
    },
    {
      id: 6,
      question: "Quae argumenta in colloquiis tractabuntur?",
      answer:
        "In colloquiis tractabuntur argumenta de cultura antiqua, litteris, et mutationibus socialibus temporibus recentibus.",
    },
    {
      id: 7,
      question: "Quae linguae in usu erunt?",
      answer:
        "Lingua Latina erit primaria, sed interpretatio in Anglicum et Italicum praesto erit ut participes plures comprehendere possint.",
    },
    {
      id: 8,
      question: "Estne ingressus liber?",
      answer:
        "Ita vero, ingressus liber est, sed donatio voluntaria ad sustinendam operam organizationis grata erit.",
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
    <div className={"flex max-w-screen-xl flex-row gap-4"}>
      <h2 className={"w-64 text-3xl text-neutral-50"}>{title}</h2>
      <div className={"grow"}>{showEntries()}</div>
    </div>
  );
};
