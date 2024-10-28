"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // Any other error handling you want to add can go here
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
