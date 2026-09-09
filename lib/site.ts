export const companyName = "State Life Insurance Corporation of Pakistan";
export const companyShortName = "State Life";
export const productName = "Golden Endowment";

export const officialWebsites = [
  {
    label: "www.statelifelife.com.pk",
    href: "http://www.statelifelife.com.pk",
  },
  {
    label: "www.stathealth.com.pk",
    href: "http://www.stathealth.com.pk",
  },
] as const;

export const contactPlaceholders = {
  phone: "[Official phone number to be provided]",
  email: "[Official email to be provided]",
  address: "[Official office address to be provided]",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/plans/golden-endowment", label: "Golden Endowment" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const additionalPlanNavItems = [
  { href: "/plans/platinum-plus", label: "Platinum Plus" },
  { href: "/plans/jeevan-sathi", label: "Jeevan Sathi" },
  {
    href: "/plans/child-education-marriage",
    label: "Child Education & Marriage",
  },
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
