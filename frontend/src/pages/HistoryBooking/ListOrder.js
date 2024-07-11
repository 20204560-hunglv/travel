import { useState } from "react";
import { getUserLocal } from "../../utils/LocalStorage";
import { LinearProgress } from "@mui/material";
import ItemOrder from "../../components/Card/ItemOrder";
import NotFound from "../../components/NotFound/NotFound";

export default function ListOrder({ data, fetchData, status }) {
  const userData = getUserLocal();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-400 w-full">
      {data.length === 0 ? (
        <div className="h-100 w-full">
          <NotFound />
        </div>
      ) : (
        data.map((item) => (
          <ItemOrder
            item={item}
            key={item._id}
            status={status}
            setIsLoading={setIsLoading}
            userData={userData}
            fetchData={fetchData}
          />
        ))
      )}

      <div className="fixed top-0 left-0 w-full z-20">
        {isLoading && <LinearProgress />}
      </div>
    </div>
  );
}
