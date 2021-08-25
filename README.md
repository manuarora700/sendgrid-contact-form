## Contact form with SendGrid, Next.js and Tailwindcss

A working contact form for your Next.js application - Integrated with SendGrid's API for sending emails.

![Hompage](https://github.com/manuarora700/simple-developer-portfolio-website/blob/main/demos/homepage.png)

![Hompage](https://github.com/manuarora700/simple-developer-portfolio-website/blob/main/demos/email.png)

### Tech Stack

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

## Live Demo and Source Code

[Live Demo](https://sendgrid-contact-form.vercel.app/)
[Source Code](https://github.com/manuarora700/sendgrid-contact-form)

It took me around an hour to build this application from the ground up - all thanks to Next.js, Tailwindcss and SendGrid for their extremely intuitive workflow and API semantics. Also [Tailwind Master Kit](https://tailwindmasterkit.com) for the beautiful Contact Page UI.

# License

This template is completely open source and free to use. Use it for client projects or your own portfolio project. Give me credits at the footer (If you wish, it'll help me a lot :)).

# Support

<a href="https://www.buymeacoffee.com/manuarora" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
