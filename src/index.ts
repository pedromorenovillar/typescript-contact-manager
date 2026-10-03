import {
  addContact,
  getAllContacts,
  updateContact,
  deleteContact,
} from "./services/contact-service";

const Ann = {
  name: "Ann",
  surname: "Wilson",
  email: "ann.wilson@mail.com",
};

console.log(addContact(Ann));
console.log(getAllContacts());
