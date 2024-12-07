import Link from "next/link";
import React from "react";

const Cabeza = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link href="/Home">- Home</Link>
        </li>
        <li>
          <Link href="/About">- About</Link>
        </li>
        <li>
          <Link href="/Dashboard">- Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Cabeza;
