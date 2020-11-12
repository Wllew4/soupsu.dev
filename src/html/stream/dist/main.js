"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var https=require("https"),get=t=>new Promise((a,e)=>{https.get(t,t=>{if(t.statusCode>=400)return e(new Error(`Bad Request: ${t.statusCode}`));const i=t.headers["num-records"];let s="";t.on("data",t=>{s+=t}),t.on("end",()=>a(void 0!==i?{totalRecords:parseInt(i),records:JSON.parse(s)}:JSON.parse(s)))}).on("error",e)});const BASE_URL="https://www.extra-life.org/api",buildQueryString=(t,a)=>{const e=parseInt(t),i=parseInt(a);return`?limit=${t=e||100}&offset=${1===(a=i||1||1)?1:t*(a-1)}`},getParticipants=async(t,a)=>await get(`${BASE_URL}/participants${buildQueryString(t,a)}`),getParticipant=async t=>await get(`${BASE_URL}/participants/${t}`),getParticipantActivity=async t=>await get(`${BASE_URL}/participants/${t}/activity`),getParticipantBadges=async t=>await get(`${BASE_URL}/participants/${t}/badges`),getParticipantDonations=async(t,a,e)=>await get(`${BASE_URL}/participants/${t}/donations${buildQueryString(a,e)}`),getParticipantDonors=async(t,a,e)=>await get(`${BASE_URL}/participants/${t}/donors${buildQueryString(a,e)}`),getTeams=async(t,a)=>await get(`${BASE_URL}/teams${buildQueryString(t,a)}`),getTeam=async t=>await get(`${BASE_URL}/teams/${t}`),getTeamActivity=async t=>await get(`${BASE_URL}/teams/${t}/activity`),getTeamBadges=async t=>await get(`${BASE_URL}/teams/${t}/badges`),getTeamDonations=async(t,a,e)=>await get(`${BASE_URL}/teams/${t}/donations${buildQueryString(a,e)}`),getTeamDonors=async(t,a,e)=>await get(`${BASE_URL}/teams/${t}/donors${buildQueryString(a,e)}`),getTeamParticipants=async(t,a,e)=>await get(`${BASE_URL}/teams/${t}/participants${buildQueryString(a,e)}`);exports.getParticipant=getParticipant,exports.getParticipantActivity=getParticipantActivity,exports.getParticipantBadges=getParticipantBadges,exports.getParticipantDonations=getParticipantDonations,exports.getParticipantDonors=getParticipantDonors,exports.getParticipants=getParticipants,exports.getTeam=getTeam,exports.getTeamActivity=getTeamActivity,exports.getTeamBadges=getTeamBadges,exports.getTeamDonations=getTeamDonations,exports.getTeamDonors=getTeamDonors,exports.getTeamParticipants=getTeamParticipants,exports.getTeams=getTeams;
