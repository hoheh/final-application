import React from "react";
import { useListVals } from "react-firebase-hooks/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { BookBlock } from "../components";
import { Context } from "../index";

function Main() {
  const { firebase, auth } = React.useContext(Context);
  const [authUser] = useAuthState(auth);
  const [snapshots, loading, error] = useListVals(
    firebase.database().ref("Book").limitToFirst(6),
  );

  return (
    <div className="px-20 py-8">
      <div>
        <div>
          <div className="mb-5">
            <p className="text-3xl font-medium">Вам может понравится</p>
          </div>
          <div>
            <div className="grid grid-cols-6 grid-rows-1">
              {snapshots.map((value) => (
                <BookBlock value={value} key={value.bookId} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Main;
