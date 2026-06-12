export const brandsBarTitle = "Trusted partners & affiliations";

export type BrandsBarPartner = {
  name: string;
  src: string;
  height?: number;
  className?: string;
};

export const brandsBarLogos: readonly BrandsBarPartner[] = [
  { name: "Tata AIA", src: "" },
  { name: "Max Life", src: "" },
  { name: "Bajaj Allianz", src: "" },
  { name: "SBI Life", src: "" },
  { name: "Aditya Birla Sun Life", src: "" },
  { name: "Star Health", src: "" },
  { name: "Niva Bupa", src: "" },
  { name: "Lloyd's of London", src: "" },
  { name: "AIG Global", src: "" },
  { name: "Chubb Private Client", src: "" },
  { name: "LIC of India", src: "" },
  { name: "HDFC Life", src: "" },
  { name: "ICICI Prudential", src: "" },
] as const;
