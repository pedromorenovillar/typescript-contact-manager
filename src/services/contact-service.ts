import { contactList } from "../data/contacts";
import { getById } from "../utils/helpers";
import { Contact, CreateContact, UpdateContact } from "../types/contact";

export function addContact(newContact: CreateContact): Contact {
  const id = Math.random().toString(36).substring(2, 15);
  const date = new Date();

  const fullContact: Contact = { ...newContact, id, dateAdded: date };

  contactList.push(fullContact);

  return fullContact;
}

export function updateContact(id: string, contact: UpdateContact): Contact {
  const foundContact: Contact | undefined = contactList.find(
    (item) => item.id === id,
  );
  if (!foundContact) {
    throw new Error("Contact not found");
  }
  const updatedContact = { ...foundContact, ...contact };

  const index = contactList.findIndex((item) => item.id === id);
  contactList[index] = updatedContact;

  return updatedContact;
}

export function deleteContact(id: string): Contact {
  const index = contactList.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error("Contact not found in the list");
  }
  const foundContact = contactList[index];

  contactList.splice(index, 1);
  return foundContact;
}

export function getContactById(id: string): Contact {
  const index = contactList.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error("Contact not found in the list");
  }
  const foundContact = contactList[index];

  return foundContact;
}
