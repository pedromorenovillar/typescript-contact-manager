import {
  addContact,
  getContactById,
  getAllContacts,
  updateContact,
  deleteContact,
} from "./services/contact-service.js";
import type { CreateContact, UpdateContact } from "./types/contact.js";
import { getById } from "./utils/helpers.js";

// CREATE
const annWilson: CreateContact = {
  name: "Ann",
  surname: "Wilson",
  email: "ann.wilson@mail.com",
};
const peteWilson: CreateContact = {
  name: "Pete",
  surname: "Wilson",
  email: "pete.wilson@mail.com",
};

const ann = addContact(annWilson);
const pete = addContact(peteWilson);
console.log(ann);

// READ
console.log(getAllContacts());
console.log(getContactById(ann.id));

// UPDATE
const newAnnDetails: UpdateContact = {
  company: "Microsoft",
  jobTitle: "CEO",
};
console.log(updateContact(ann.id, newAnnDetails));
console.log(getAllContacts());

// DELETE
deleteContact(pete.id);
console.log(getAllContacts());

// REUSABLE HELPER
interface Task {
  id: string;
  title: string;
}
const taskList: Task[] = [{ id: "123", title: "Task list item" }];
console.log(getById(taskList, "123"));

// ERRORS
try {
  getContactById("id-inexistente");
} catch (error) {
  console.error(error);
}
