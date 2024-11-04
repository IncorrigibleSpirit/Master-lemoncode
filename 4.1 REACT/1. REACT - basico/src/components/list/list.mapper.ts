import { MemberDetail } from "./list.model";
import { ApiMemberDetail } from "./api/api.model";

export const mapMemberApiToVm = (data: ApiMemberDetail[]): MemberDetail[] =>
  data.map((member) => ({
    avatarUrl: member.avatar_url,
    id: member.id,
    login: member.login,
  }));
