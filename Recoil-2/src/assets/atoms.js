import {atom} from "recoil"

export const networkAtom = atom({
  key : "networkAtom",
  default : 10
});

export const jobsAtom = atom({
  key : "jobsAtom",
  default : 0
});

export const notificationAtom = atom({
  key : "notificationAtom",
  default : 12
});

export const messagingAtom = atom({
  key : "messagingAtom",
  default : 0
});


export const totalNotificationSelector = selector({
  key : "totalNotificationSelector",
  get : ({get})=>{
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);
    return networkAtomCount+jobAtomCount + messagingAtomCount+notificationAtomCount;
  }
})