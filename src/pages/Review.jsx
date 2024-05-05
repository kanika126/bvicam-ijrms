import React from 'react';

const Review = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center  py-4">Review policy </h2>
        <p className="text-center mt-2 px-4 pb-4"></p>
        <p className="text-lg ">
        We follow a double blind peer review system and carry out two rounds of review process. In the first round, all the submitted papers are first reviewed at editorial board level and assessed on the basis of their technical suitability of the paper for the journal, scope of work, plagiarism and other ethical compliances. If selected by the editorial board, the paper shall be subjected to a fair and unbiased double blind peer review by at-least three referees on the basis of their originality, novelty, clarity, completeness, relevance, significance and research contribution. Based on the Review Remarks, the papers may be placed in any one of the categories like Clear Reject, Reconsider After Major Revision, Reconsider After Minor Revision, Accept as it is. If recommended by the Board of Referees (BoR), the papers may undergo multiple cycles of review, before finally being accepted. The corresponding authors of qualifying submissions shall be intimated accordingly. Final acceptance of a paper is based on the review remarks by the referees and decision of the Editorial Board. The review process may take 02 to 12 months depending upon the cycles of review required, before the paper is finally accepted. Publication of papers in IJRMS is FREE OF COST. We do not charge any publication fee from the authors for the papers to be published in IJRMS, if the author accepts the publication of the paper under No Show Policy (Subscription Mode) of the Journal, in which the author need not to pay any publication fee, however, the readers will need to pay to download the full version of the papers.
        </p>
      </div>
    </div>
  );
};

export default Review;
