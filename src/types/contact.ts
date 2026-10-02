export interface Contact {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  dateAdded: Date;
  lastContact?: Date;
}

export type CreateContact = Omit<Contact, "id" | "dateAdded">;

export type UpdateContact = Partial<CreateContact>;
