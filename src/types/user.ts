export enum STATUS {
  PENDING = "pending",
  ACTIVE = "active",
  INACTIVE = "inactive",
  BLACKLISTED = "blacklisted",
}

export type Status = STATUS;

export interface User {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  status: Status;
}

export interface BioSectionType {
  category: string;
  content: BioItem[];
}

export interface BioItem {
  label: string;
}
