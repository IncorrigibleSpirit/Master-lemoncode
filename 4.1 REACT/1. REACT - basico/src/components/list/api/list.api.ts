import Axios from "axios";
import { ApiMemberDetail } from "./api.model";

export const getMemberDetail = (companyName: string): Promise<ApiMemberDetail[]> =>
  Axios.get(`https://api.github.com/orgs/${companyName}/members`).then((response) => response.data);
