## Contact form with SendGrid, Next.js and Tailwindcss

A working contact form for your Next.js application - Integrated with SendGrid's API for sending emails.
Read the complete blog at [freeCodeCamp](https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/)

![Hompage](https://github.com/manuarora700/sendgrid-contact-form/blob/main/demos/homepage.png)

![Hompage](https://github.com/manuarora700/sendgrid-contact-form/blob/main/demos/email.png)

## Tech Stack

- [Next.js](https://nextjs.org) for creating a contact form landing page
- [Tailwindcss](https://tailwindcss.com) for styling the components
- [SendGrid](https://sendgrid.com) for sending emails using their APIs
- [Vercel](https://vercel.com) for hosting our application and CI/CD

## Application Flow

- The end-user fills in the mandotary 4 fields and clicks on submit.
- On submit, `handleSubmit` function gets triggered.
- `handleSubmit` validates the form for input fields and checks if they are not empty.
- If the form fields are not empty, an API call is made to `api/sendgrid` where the logic of sending emails live.
- In `api/sendgrid`, `@sendgrid/mail` modules initializes a `send` function, that takes it your application's API keys and send' the email with the required fields.
- If email is successfully delivered, a `200` response is sent to the client, else a `400` response is sent to the client.
- Responses are handled at frontend and appropriate messages are displayed.

## Environment Variables

Please not that we are using the API keys and the keys are sensitive. Which means that we should always store secret or API keys in environment variables. As we already have .env.local for our local environment, The hosting provider needs to know about the API keys too.

Vercel provides an easy way to store api keys on the hosting panel itself.

To store the API keys securely on your Vercel account.

- Goto your projects page
- Goto settings
- Goto Environment variables
- Add the name of the environment variable, in our case it is SENDGRID_API_KEY and add the corresponding API key in the value field.
- Redeploy your application and your project will work in the production environment.

## Live Demo and Source Code

[Live Demo](https://sendgrid-contact-form.vercel.app/)
[Source Code](https://github.com/manuarora700/sendgrid-contact-form)

It took me around an hour to build this application from the ground up - all thanks to Next.js, Tailwindcss and SendGrid for their extremely intuitive workflow and API semantics. Also [Tailwind Master Kit](https://tailwindmasterkit.com) for the beautiful Contact Page UI.

# License

This template is completely open source and free to use. Use it for client projects or your own portfolio project. Give me credits at the footer (If you wish, it'll help me a lot :)).

# Support

<a href="https://www.buymeacoffee.com/manuarora" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
