import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/ContactUs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sendgrid Contact Form</title>
        <meta
          name="description"
          content="A working contact form with Sendgrid integration and form validations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <ContactUs />
      </main>
    </div>
  );
}
