import React from "react";

import { BookBlock } from "../components";

function Main() {
  return (
    <div className="px-20 py-8">
      <div>
        <div>
          <div className="py-4">
            <p className="text-3xl font-medium">Новинки</p>
          </div>
          <div className="flex h-80">
            {[1, 2, 3, 4, 5].map(() => (
              <BookBlock />
            ))}
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Main;
