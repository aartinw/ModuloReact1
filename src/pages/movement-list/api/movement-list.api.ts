import Axios from "axios";
import { Movement } from "./movement-list.api-model";

export const getAMovementList = (accountId: string): Promise<Movement[]> =>
  Axios({
    method: "get",
    url: "http://localhost:3000/movements",
    params: {
      accountId: accountId,
    },
  }).then((response) => response.data);
