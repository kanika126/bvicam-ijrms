import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home-page'>
        
        <header className='h-screen min-h-screen flex items-center justify-center text-white bg-gray-900 relative'>
    <div className='absolute inset-0 z-0'>
      <img src="https://bvicam.ac.in/ijrms/images/IJRMSPoster.jpg" alt="Background" className="w-full h-full object-cover filter blur-sm" />
    </div>
    <div className='container mx-auto text-center relative z-10'> 
                <h2>Welcome To</h2>
                <h1 className='text-4xl font-semibold'>IJRMS</h1>
                <p className='max-w-md mx-auto mt-4'>International Journal of Research in Multidisciplinary Studies (IJRMS) , ISSN 0973-5658, is a bi-annual peer-reviewed refereed research journal of Bharati Vidypeeth’s Institute of Computer Applications and Management (BVICAM), New Delhi, published by The Institution of Media Professionals (IMP), New Delhi.</p>
            </div>
        </header>

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      <div className="w-full md:w-11/12 bg-white rounded-b-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center  py-4">Welcome </h2>
        <p className="mt-2 px-4 pb-4">
Periodicity of the Journal	:	02 isuues in a year; June & December	
<br></br><br></br>
Publication Fee	:	Subscription Mode: (in which authors loose the Copyright)<br></br><br></br>
Free of Cost. No Publication Fee, whatsoever, upto six pages. However, if the length of the paper exceeds six pages, Extra Page Charges (EPC) shall be applicable @ Rs. 2000/- per page (B&W) for Indian authors, and USD 100/- per page (B&W) for International authors, to be paid by the authors, to get the paper included in the specific Vol / Issue and printed in Hard Copy of the Journal. Actual number of pages shall be informed to the author(s), after the paper is typeset, post acceptance, by the production team.<br></br><br></br>
Review Process	:	Double Blind Review by at-least three referees<br></br><br></br>
Acceptance Time Frame	:	02 to 12 months, depending upon the required revision cycles<br></br><br></br>
Submission Time	:	Papers can be submitted round the year 24x7x365. The paper shall be assigned to any specific volume and issue, only after its acceptance <br></br><br></br>
Publication Time	:	Online First, immediately after acceptance and subsequently in any of the forthcoming issues.<br></br><br></br>
Paper Format	:	Click here to download the template.<br></br><br></br>
Paper Submission Link	:	Click here to submit paper.</p>
      </div>
      {/* <div className="w-full md:w-11/12 bg-white rounded-t-lg shadow-lg p-6 mt-4 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-center  py-4">International Journal of Research in Multidisciplinary Studies (IJRMS)</h2>
        <p className="mt-2 px-4 pb-4">ISSN 0973-5658, is a bi-annual peer-reviewed refereed research journal of Bharati Vidypeeth’s Institute of Computer Applications and Management (BVICAM), New Delhi, published by The Institution of Media Professionals (IMP), New Delhi. Original manuscripts in the following domains, but not limited to, are welcome:-
        <br></br><br></br>
Anthropology, Applied Linguistics, Applied Physics, Architecture, Artificial Intelligence, Astronomy, Biological Sciences, Botany, Chemistry, Communication Studies, Computer Sciences, Computing technology, Cultural studies, Design, Earth Sciences, Ecology, Education, Electronics, Energy, Engineering Sciences, Environmental Sciences, Ethics, Ethnicity and Racism Studies, Fisheries, Forestry, Gender Studies, Geography, Health Sciences, History, Interdisciplinary Social Sciences, Labour Studies, Languages and Linguistics, Law, Library Studies, Life sciences, Literature, Logic, Marine Sciences, Materials Engineering, Mathematics, Media Studies, Medical Sciences, Music, Nanotechnology, Nuclear Physics, Optics, Philosophy, Physics, Political Science, Psychology, Publishing and editing, Religious Studies, Social Work , Sociology, Space Sciences, Statistics, Transportation, Visual and Performing Arts, Zoology and all other subject areas.
<br></br><br></br>
We follow a double blind peer review system and carry out two rounds of review process. In the first round, all the submitted papers are first reviewed at editorial board level and assessed on the basis of their technical suitability of the paper for the journal, scope of work, plagiarism and other ethical compliances. If selected by the editorial board, the paper shall be subjected to a fair and unbiased double blind peer review by at-least three referees on the basis of their originality, novelty, clarity, completeness, relevance, significance and research contribution. Based on the Review Remarks, the papers may be placed in any one of the categories like Clear Reject, Reconsider After Major Revision, Reconsider After Minor Revision, Accept as it is. If recommended by the Board of Referees (BoR), the papers may undergo multiple cycles of review, before finally being accepted. The corresponding authors of qualifying submissions shall be intimated accordingly. Final acceptance of a paper is based on the review remarks by the referees and decision of the Editorial Board. The review process may take 02 to 12 months depending upon the cycles of review required, before the paper is finally accepted. Publication of papers in IJRMS is FREE OF COST, upto six pages. We do not charge any publication fee from the authors for the papers to be published in IJRMS, upto six pages, if the author accepts the publication of the paper under No Show Policy (Subscription Mode) of the Journal, in which the author need not to pay any publication fee. However, Extra Page Charges (EPC) shall be applicable @ Rs. 2000/- per page (B&W) for Indian authors, and USD 100/- per page (B&W) for International authors, to be paid by the authors, if it exceeds six pages. Details shall be informed to the author(s) after the paper is accepted and the same is typeset.</p>
      </div> */}
    </div>
        </div>
   
  )
}

export default Home;
