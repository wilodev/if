import React from "react";
import Link from "next/link";
function _error() {
  return (
    <div>
      <p>Error page not found</p>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </div>
  );
}

export default _error;
