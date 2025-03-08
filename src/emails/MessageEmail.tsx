import { Html } from "@react-email/components";

interface MessageEmailProps {
  name: string;
  email: string;
  organization: string;
  subject: string;
  body: string;
}

export default function MessageEmail({
  name,
  email,
  organization,
  subject,
  body,
}: MessageEmailProps) {
  return (
    <Html>
      <div>
        <h2>Message from GPF Website</h2>
        <hr />
        <br />
        <p>Sender's Name: {name}</p>
        <p>Sender's Email: {email}</p>
        <p>Sender's Organisation: {organization}</p>
        <p>Sender's Subject: {subject}</p>
        <hr />
        <br />

        <p> {body}</p>
      </div>
    </Html>
  );
}
