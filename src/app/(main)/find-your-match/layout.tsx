import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Best HRT Provider Match - Free Quiz",
  description:
    "Answer a few quick questions and get a personalized HRT provider recommendation. Compare online providers based on your needs, budget, and location.",
  alternates: {
    canonical: "https://www.hrtwomen.com/find-your-match",
  },
  openGraph: {
    title: "Find Your Best HRT Provider Match",
    description:
      "Take our free quiz and get matched with the best HRT provider for your needs and budget.",
    url: "https://www.hrtwomen.com/find-your-match",
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Find Your Best HRT Provider Match</h1>
      {children}
    </>
  );
}
