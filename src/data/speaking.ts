export interface SpeakingEntry {
  id: string;
  event: { hu: string; en: string };
  title: { hu: string; en: string };
  location: string;
  date: string;
  description: { hu: string; en: string };
}

export const speakingData: SpeakingEntry[] = [
  {
    id: "infoparlament-2025",
    event: {
      hu: "Infoparlament 2025",
      en: "Infoparlament 2025",
    },
    title: {
      hu: "Intelligens Magyarország és e-közigazgatás fejlesztése – kerekasztal beszélgetés",
      en: "Smart Hungary and E-Government Development – Panel Discussion",
    },
    location: "Budapest",
    date: "2025",
    description: {
      hu: "Panelbeszélgetés a magyar közigazgatási szolgáltatások digitális fejlesztéséről és az intelligens kormányzati megoldásokról.",
      en: "Panel discussion on digital development of Hungarian administrative services and smart governance solutions.",
    },
  },
  {
    id: "infoter-2015",
    event: {
      hu: "Infoter 6 Konferencia",
      en: "Infoter 6 Conference",
    },
    title: {
      hu: "A területi közigazgatás reformja és az informatika",
      en: "Territorial Public Administration Reform and IT",
    },
    location: "Balatonfüred",
    date: "2015",
    description: {
      hu: "Előadás a decentralizált kormányzati ügynökségekről az integrált kormányhivatali rendszerekre való átállásról, az inhomogén IT környezetek kezeléséről és a felhőalapú infrastruktúráról.",
      en: "Presentation on transitioning from decentralized government agencies to integrated office systems, managing heterogeneous IT environments, and cloud-based infrastructure.",
    },
  },
];
