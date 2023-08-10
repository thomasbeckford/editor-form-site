# Nyla Challenge Editor

## Introduction

Thanks for your interest! We expect this exercise to take up to 4 hours of your time (there's no timer, you can do it at your own pace, taking as long as you want). Feel free to ask us any questions if something isn't clear.

For domain reference:

- A Visitor is an end-user visiting/shopping on a Nyla Site
- A Merchant is a company that uses the Nyla Editor to create their own ecommerce site with no-code.

### 1. Make the Form submit and the Site read that data

The Editor (Form) currently does not submit the data anywhere, and the Site is rendering mock data at the moment.

You must make the Editor Form store the results (see `lib/db.ts`) and the Site page render the stored data.

- On the Editor side, consider best practices working with forms, as well as error handling.

- On the Site, consider that performance of the site is extremely important for us, and we don't want to have an outage if the Redis provider is temporarily unavailable. However, Merchants expect their Site to update when ever they submit a change.

### 2. Add placeholders and conditional functionality to the form

#### A. Placeholders

Extend the current schema to allow each property to define an optional placeholder to render in the form when the inputs are empty – instead of the current generic "Enter your {fieldName}" placeholder. Implement it on the form.

#### B. Conditional properties

Finally, extend the current schema to allow each property to define an optional condition by which it would start showing in the form. If the condition is true, the input would appear and its value would be submitted; if the condition is not true, the input would not be shown.

Implement it with the following example: "Truncate Description" should only appear if the "Description" field has a current value of more than 100 characters. Consider how you define this condition in the schema, in a way that would allow us to really take advantage of this functionality beyond this one example.

## Submit your result

1. Fork this StackBlitz project.
2. Rename it to something random (it must not include 'n-challenge-editor' in its name).
3. Apply all your changes.
4. Email us the link to it (the Editor URL: `https://stackblitz.com/edit/<your-project-name>`), including a description of how you implemented the changes (as if you were explaining to a peer so they have better context when code reviewing).

If you have any difficulties with the tool, please do reach out – you are free to work locally / any way you see more convenient.

Thanks for your time and good luck!
