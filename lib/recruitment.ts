export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  qualifications: string;
  deadline: string;
};

// These are illustrative listings only. Replace them with approved vacancies
// before publishing live recruitment information.
export const recruitmentJobs: Job[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Technology",
    location: "Lahore",
    type: "Full Time",
    experience: "2–4 years",
    description:
      "Help shape clear, dependable digital experiences that make it easier for people to understand and access insurance services.",
    responsibilities: [
      "Build and maintain responsive web interfaces with the product and technology teams.",
      "Translate design direction into accessible, high-quality user experiences.",
      "Contribute to code reviews, testing, and a consistent engineering practice.",
    ],
    requirements: [
      "Practical experience with React and modern JavaScript or TypeScript.",
      "Working knowledge of responsive design, accessibility, and version control.",
      "A thoughtful approach to quality, collaboration, and continuous learning.",
    ],
    qualifications: "Bachelor’s degree or equivalent practical experience in Computer Science, Software Engineering, or a related field.",
    deadline: "To be confirmed",
  },
  {
    id: "insurance-officer",
    title: "Insurance Officer",
    department: "Sales",
    location: "Lahore",
    type: "Full Time",
    experience: "1–3 years",
    description:
      "Support customers and field teams with clear, professional guidance throughout the insurance journey.",
    responsibilities: [
      "Explain policy information accurately and help respond to customer questions.",
      "Maintain organized records and coordinate follow-up with relevant teams.",
      "Build trusted relationships through attentive and responsible service.",
    ],
    requirements: [
      "Strong communication and customer service skills.",
      "Comfort working with records, documentation, and structured processes.",
      "Professional judgment and a willingness to learn insurance operations.",
    ],
    qualifications: "Bachelor’s degree in Business, Finance, Marketing, or a related discipline preferred.",
    deadline: "To be confirmed",
  },
  {
    id: "finance-officer",
    title: "Finance Officer",
    department: "Finance",
    location: "Islamabad",
    type: "Full Time",
    experience: "2–5 years",
    description:
      "Contribute to accurate financial operations and reporting in an organization built around long-term trust.",
    responsibilities: [
      "Support reconciliations, reporting, and day-to-day finance operations.",
      "Prepare and maintain clear financial documentation and records.",
      "Work with internal stakeholders to resolve routine finance queries.",
    ],
    requirements: [
      "Understanding of accounting principles and financial controls.",
      "Strong attention to detail and confidence working with spreadsheets.",
      "Reliable organization, communication, and follow-through.",
    ],
    qualifications: "Bachelor’s degree in Accounting, Finance, Commerce, or a related field.",
    deadline: "To be confirmed",
  },
];

export const recruitmentReasons = [
  {
    title: "Career Growth",
    description: "Build experience through meaningful work and a clear focus on professional development.",
  },
  {
    title: "Professional Environment",
    description: "Work with people who value responsibility, respect, and dependable service.",
  },
  {
    title: "Learning & Development",
    description: "Keep strengthening your skills as you take on new challenges and perspectives.",
  },
  {
    title: "Training Opportunities",
    description: "Grow your understanding of the work through practical exposure and continued learning.",
  },
  {
    title: "Meaningful Work",
    description: "Contribute to work that helps individuals and families plan for their future.",
  },
  {
    title: "Long-Term Opportunities",
    description: "Find a place to develop your capabilities and build a purposeful career over time.",
  },
] as const;
