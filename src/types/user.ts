export enum STATUS {
  PENDING = "pending",
  ACTIVE = "active",
  INACTIVE = "inactive",
  BLACKLISTED = "blacklisted",
}

export type Status = STATUS;


export interface BioSectionType {
  category: string;
  content: BioItem[];
}

export interface BioItem {
  label: string;
  value: (user: User) => string;
}

interface Profile {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Guarantor {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

interface Education {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: string[];
  officeEmail: string;
  sector: string;
}


export interface User {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  status?: Status;
  accountBalance: string;
  accountNumber: string;
  createdAt: Date;
  id: string;
  profile: Profile;
  socials: Socials;
  guarantor: Guarantor;
  education: Education;
  lastActiveDate: string;
}
