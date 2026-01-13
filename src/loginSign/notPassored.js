import { useState } from "react";

export default function NotPassowrd() {
  const [sendEmail, setSendEmail] = useState("");
  return (
    <>
      <div>
        <form>
          <label>Email</label>
          <input />
          <button>send code</button>
        </form>
      </div>
    </>
  );
}
