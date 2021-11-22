import React from "react";
import Link from "next/link";

import { GiSeaDragon } from "react-icons/gi";

function Logo() {
  return (
    <Link href="/">
      <a className="text-white">
        <div className="flex items-center">
          <GiSeaDragon size={36} className="mt-1 ml-4" />
          <p className="text-xl ml-2">
            Infi
            <strong>nyti</strong>
          </p>
        </div>
      </a>
    </Link>
  );
}

export { Logo };
