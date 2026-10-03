# Contact manager

Small contact-managing application created to practice TypeScript, focused on utility types, generics and narrowing.

## Features

- Create contacts with automatically generated ids and creation dates.
- Retrieve individual contacts or the full contact list.
- Update contacts using partial updates.
- Delete contacts from the contact list.
- Generic helper functions reusable across multiple entity types.

## Technologies

- TypeScript
- Node.js
- tsx

## What I learned

### Utility types used

#### Omit

Picks all the properties from one type and removes certain keys.

```TypeScript
type CreateContact = Omit<Contact, "id" | "dateAdded">;
```

`id` and `dateAdded` are generated automatically, so here I took all the properties from the `Contact` interface and removed those two to use in the `addContact()` function.

#### Partial

`Partial<T>` creates a new type where every property of `T` becomes optional.

```TypeScript
type UpdateContact = Partial<CreateContact>;
```

Needed for the `updateContact()` function, as any property can be updated, but not all of them need to.

### Generics

Once I got the code working, I refactored it to create reusable components, i.e., functions that could be used with future interfaces, not only with an array of contacts.

I created the interface `HasId` with a single property, `id`.

Then, I created two helpers:

- `getById()`: returns an element from a list based on its id.
- `getIndexById()`: returns the index of an element based on its id.

#### Constraints

Both helpers work similarly, but for them to know which type they are receiving, generic constraints need to be used:

```TypeScript
getById<Type extends HasId>(arg: Type[], id: string): Type
```

With this the function will know two things:

1. Which array type it's receiving (the only constraint is that it must have an id)
2. Which type it's returning (a single element of that array)

This makes the function compatible with future types
that have an id, such as `Task`.

To test this, I've used:

```TypeScript
interface Task {
id: string;
title: string;
}
 
const taskList: Task[] = [
{ id: "123", title: "Task list item" }
];
 
getById(taskList, "123");
```

### Narrowing

I practiced type narrowing in the `getById` function, where the initial type of `foundItem` can be either a specific type or undefined:

```TypeScript
  const foundItem: Type | undefined = arg.find((item) => item.id === id);
  if (!foundItem) {
    throw new Error("Item not found in the list");
  }
  return foundItem;
```

After the null check and thrown error, TypeScript knows that
`foundItem` can no longer be `undefined`, so the return type
is narrowed to `Type`.

## Project Structure

```bash
.
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── data
│   │   └── contacts.ts
│   ├── index.ts
│   ├── services
│   │   └── contact-service.ts
│   ├── types
│   │   └── contact.ts
│   └── utils
│       └── helpers.ts
└── tsconfig.json
```

## How to run

Clone repository and run `npm install` to add dependencies.
Run `npx tsx src/index.ts` to see the available CRUD operations.
