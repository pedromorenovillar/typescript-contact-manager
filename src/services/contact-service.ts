import { contactList } from "../data/contacts.js";
import { getById, getIndexById } from "../utils/helpers.js";
import type {
  Contact,
  CreateContact,
  UpdateContact,
} from "../types/contact.js";

export function addContact(newContact: CreateContact): Contact {
  const id = Math.random().toString(36).substring(2, 15);
  const date = new Date();

  const fullContact: Contact = { ...newContact, id, dateAdded: date };

  contactList.push(fullContact);

  return fullContact;
}

export function updateContact(id: string, contact: UpdateContact): Contact {
  const foundContact = getById(contactList, id);
  const updatedContact = { ...foundContact, ...contact };

  const index = getIndexById(contactList, id);
  contactList[index] = updatedContact;

  return updatedContact;
}

export function deleteContact(id: string): Contact {
  const foundContact = getById(contactList, id);

  const index = getIndexById(contactList, id);

  contactList.splice(index, 1);
  return foundContact;
}

export function getContactById(id: string): Contact {
  return getById(contactList, id);
}

export function getAllContacts(): Contact[] {
  return contactList;
}
