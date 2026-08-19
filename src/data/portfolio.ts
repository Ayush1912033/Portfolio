export type EvidenceKind = 'experience' | 'certificate' | 'achievement' | 'project' | 'profile'
export type EvidenceItem = { title:string; eyebrow:string; kind:EvidenceKind; image:string; subtitle?:string; description:string; tags?:string[]; details?:string[]; url?:string; cta?:string; githubUrl?:string; liveUrl?:string }

export const personal = { name:'Ayushkumar Vishwakarma', email:'ayushkumarvishwakarma46@gmail.com', phone:'9076390524', phoneHref:'+919076390524', location:'Mumbai', linkedin:'https://linkedin.com/in/ayushkumar-vishwakarma', github:'https://github.com/Ayush1912033', portfolio:'https://ayushkumar-portfolio.pages.dev/', profileImage:'/media/profile/profile-placeholder.jpeg', profileDescription:'Software Engineer experienced in enterprise retail applications, full-stack development, AI/ML, and data analytics. Currently working as an ETP POS Application Engineer at Tata Trent.' }

export const experience:EvidenceItem[] = [
  {title:'Tata Trent Ltd.',eyebrow:'CURRENT ROLE',kind:'experience',image:'/media/experience/tata-trent.jpg',subtitle:'ETP POS Application Engineer · June 2026 — Present',description:'Support and troubleshoot enterprise POS applications to help maintain reliable retail operations.',tags:['Enterprise applications','SQL','Linux','Java','Python'],details:['Database analysis and data validation using SQL','Log investigation and troubleshooting on Linux','Incident analysis with technical and business teams','Root-cause investigation and application-level resolutions']},
  {title:'Lursell Business Machines',eyebrow:'INTERNSHIP / 2025',kind:'experience',image:'/media/experience/lursell.jpg',subtitle:'Software Development Intern · March 2025 — April 2025',description:'Developed backend functionality for a Gym Management System using Node.js, Express.js, and MongoDB.',tags:['Node.js','Express.js','MongoDB'],details:['Implemented server-side logic','Built database interactions','Assisted with deployment and troubleshooting']}
]

export const certificates:EvidenceItem[] = [
  {title:'Data Science & Analytics Program',eyebrow:'IMARTICUS LEARNING',kind:'certificate',image:'/media/certificates/imarticus-data-science.png',description:''},
  {title:'AWS Academy Machine Learning Foundations',eyebrow:'AWS',kind:'certificate',image:'/media/certificates/aws-ml.png',description:''},
  {title:'Python for Data Science, AI & Development',eyebrow:'IBM',kind:'certificate',image:'/media/certificates/ibm-python.png',description:''},
  {title:'Generative AI & Productivity Skills',eyebrow:'MICROSOFT & LINKEDIN',kind:'certificate',image:'/media/certificates/microsoft-genai.png',description:''}
]

export const achievements:EvidenceItem[] = [
  {title:'IEEE Publication — 2025',eyebrow:'RESEARCH',kind:'achievement',image:'/media/achievements/ieee-publication.png',description:'Research paper accepted and published in IEEE Xplore.'},
  {title:'HealthHack 2025 Finalist',eyebrow:'FINALIST',kind:'achievement',image:'/media/achievements/healthhack-finalist.png',description:'Finalist at the VIT Bhopal & Johns Hopkins University USA Hackathon.'},
  {title:'InspireBiz 5.0 Finalist',eyebrow:'FINALIST',kind:'achievement',image:'/media/achievements/inspirebiz-finalist.png',description:'Finalist at the VESIM Innovation Competition.'}
]

export const projects:EvidenceItem[] = [
  {title:'OncoLens',eyebrow:'FEATURED PROJECT',kind:'project',image:'/media/projects/oncolens.jpg',subtitle:'AI-Based Cancer Prediction Platform',description:'Developed an AI-based cancer prediction platform using clinical and gene-expression data for cancer type classification, stage prediction, and survival risk estimation.',tags:['React','Node.js','Python','TensorFlow','Deep Learning'],details:['Trained and evaluated FNN, DNN, and RNN models','Achieved up to 92% accuracy','Integrated models with a React and Node.js application for interactive predictions']},
  {title:'Manodarpan',eyebrow:'INTELLIGENT PLATFORM',kind:'project',image:'/media/projects/manodarpan.jpg',subtitle:'AI Mental Health Assessment Platform',description:'Developed a multilingual mental health assessment platform using GAD-7, PHQ-9, HAM-A, and HAM-D scales, with MuRIL-based emotion analysis and machine learning models for sentiment analysis.',tags:['Flutter','Flask','Python','NLP','Firebase']},
  {title:'Medicine Authentication System',eyebrow:'BLOCKCHAIN PROJECT',kind:'project',image:'/media/projects/medicine-authentication.jpg',subtitle:'Blockchain-Based Authentication',description:'Developed a blockchain-based medicine authentication system using Ethereum smart contracts, with a React/Vite interface and MetaMask integration for secure verification.',tags:['React','Vite','Ethereum','Solidity','Hardhat','MetaMask']}
]

export const skills = { Languages:['Java','Python','JavaScript','SQL'], Development:['React','Node.js','Express.js','Flask','REST APIs'], 'AI/ML & Data':['TensorFlow','Scikit-learn','Pandas','NumPy','NLP','OCR','Power BI'], 'Databases & Tools':['MySQL','MongoDB','Firebase','Git','GitHub','Linux','Postman','Hardhat','MetaMask'] }

export const education = [
  {institution:'Datta Meghe College of Engineering',program:'Bachelor of Engineering (B.E.) in Information Technology',detail:'CGPA: 8.55',period:'2022 — 2026'},
  {institution:"St. Mary's Jr. College",program:'HSC',detail:'83.67%',period:'2020 — 2022'},
  {institution:"St. Mary's Multipurpose High School",program:'SSC',detail:'92.40%',period:'2020'}
]
