import { atom, selector } from "recoil";

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });

// no need to first set data in atom and then get data from api , then use recilState to add that data in atom 

//we can directly call data from api in atom 
export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key : "networkAtomSelector",
    get : async () => {
      const res = await axios.get("");
      return res.data;
    }
  })
});



export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})