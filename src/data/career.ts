export interface CareerEntry {
  id: string;
  company: { hu: string; en: string };
  role: { hu: string; en: string };
  period: { start: string; end: string | null };
  scope: { hu: string; en: string };
  achievements: { hu: string[]; en: string[] };
  impact: { hu: string; en: string };
}

export const careerData: CareerEntry[] = [
  {
    id: "miniszterelnokseg-2",
    company: {
      hu: "Miniszterelnökség / Közigazgatási és Területfejlesztési Minisztérium",
      en: "Prime Minister's Office / Ministry of Public Administration and Regional Development",
    },
    role: {
      hu: "Főosztályvezető",
      en: "Head of IT Department",
    },
    period: { start: "2020. feb.", end: null },
    scope: {
      hu: "Nemzeti szintű IT vezetés · 500 fős IT szervezet · 300+ rendszer · Évi 16M+ ügyfélinterakció",
      en: "National IT leadership · 500-member IT organization · 300+ systems · 16M+ customer interactions annually",
    },
    achievements: {
      hu: [
        "Milliárdos IT programok irányítása (12,5 Mrd Ft – Virtuális kormányablak, 1,87 Mrd Ft – e-értesítő)",
        "Fővárosi és Megyei Kormányhivatalok IT működésének koordinálása, 100+ kormányzati és piaci partnerrel",
        "A területi közigazgatás IT stratégiájának kidolgozása",
        "Monitoring Bizottsági tag, együttműködés az Európai Bizottsággal",
        "Magyarország nemzetközi képviselete (V4 Good Governance Fórumok, EUPAN)",
      ],
      en: [
        "Directing major IT programs (HUF 12.5B – Virtual Government Window, 1.87B – e-Notifier)",
        "Coordinating IT operations for all Capital City and County Government Offices with 100+ partners",
        "Led the creation of the regional public administration's IT strategy",
        "Serving as Monitoring Committee member, engaging with the European Commission",
        "Representing Hungary internationally (V4 Good Governance Forums, EUPAN)",
      ],
    },
    impact: {
      hu: "A nemzeti digitális közigazgatás megerősítése egységes stratégiával, irányítási keretrendszerekkel és skálázható szolgáltatásnyújtással.",
      en: "Strengthened national digital public administration through unified strategy, governance frameworks and scalable service delivery.",
    },
  },
  {
    id: "sda-dms",
    company: {
      hu: "SDA DMS Zrt.",
      en: "SDA DMS Zrt.",
    },
    role: {
      hu: "Informatikai igazgató (CIO)",
      en: "Chief Information Officer",
    },
    period: { start: "2017. júl.", end: "2020. feb." },
    scope: {
      hu: "Országos fejlesztési és integrációs programok",
      en: "Nationwide development and integration programs",
    },
    achievements: {
      hu: [
        "A vállalat IT szervezetének vezetése, országos fejlesztési, integrációs és migrációs projektek megvalósítása",
        "Stratégiai szerep a vállalat átszervezésében és működési transzformációjában",
        "Folyamatautomatizálási keretrendszerek bevezetése a hatékonyság javítására",
      ],
      en: [
        "Led the company's IT organization and delivered nationwide development, integration and migration projects",
        "Played a strategic role in the company's reorganization and operational transformation",
        "Introduced process automation frameworks improving operational efficiency",
      ],
    },
    impact: {
      hu: "A vállalat működési modelljének és technológiai alapjainak megerősítése egy kritikus transzformációs időszakban.",
      en: "Strengthened the company's operational model and technological foundation during a critical transformation period.",
    },
  },
  {
    id: "miniszterelnokseg-1",
    company: {
      hu: "Miniszterelnökség",
      en: "Prime Minister's Office",
    },
    role: {
      hu: "Főosztályvezető",
      en: "Head of IT Department",
    },
    period: { start: "2015. aug.", end: "2017. márc." },
    scope: {
      hu: "A területi kormányhivatalok nemzeti szintű IT koordinációja",
      en: "National IT coordination for regional government offices",
    },
    achievements: {
      hu: [
        "A területi kormányhivatalok nemzeti IT működésének koordinálása",
        "EU-finanszírozású fejlesztési projektek megvalósítása, új rendszerek és elektronikus szolgáltatások bevezetése",
        "A Miniszterelnökség többmilliárdos EU projekt portfóliójának megtervezése a következő költségvetési időszakra",
      ],
      en: [
        "Coordinated national IT operations for regional government offices",
        "Delivered EU-funded development projects introducing new systems and electronic services",
        "Designed the Prime Minister's Office's multi-billion-forint EU project portfolio for the next budget period",
      ],
    },
    impact: {
      hu: "A következő EU költségvetési ciklus digitális közigazgatási alapjainak megteremtése.",
      en: "Established the digital foundations for the next EU budget cycle's public administration.",
    },
  },
  {
    id: "jnszm-kormhiv",
    company: {
      hu: "Jász-Nagykun-Szolnok Megyei Kormányhivatal",
      en: "Jász-Nagykun-Szolnok County Government Office",
    },
    role: {
      hu: "Főosztályvezető",
      en: "Head of IT Department",
    },
    period: { start: "2011. feb.", end: "2015. júl." },
    scope: {
      hu: "Regionális IT vezetés és infrastruktúra üzemeltetés",
      en: "Regional IT leadership and infrastructure operations",
    },
    achievements: {
      hu: [
        "Az IT szervezet vezetése és az infrastruktúra üzemeltetés irányítása",
        "Belső fejlesztési projektek megvalósítása a rendszerképességek és működési célok támogatására",
      ],
      en: [
        "Led the IT organization and managed infrastructure operations",
        "Delivered internal development projects to enhance system capabilities and support operational goals",
      ],
    },
    impact: {
      hu: "A regionális közigazgatás működési stabilitásának és digitális érettségének javítása.",
      en: "Improved operational stability and digital maturity across the regional administration.",
    },
  },
  {
    id: "err",
    company: {
      hu: "E - R & R Kft.",
      en: "E - R & R Kft.",
    },
    role: {
      hu: "Ügyvezető igazgató",
      en: "Managing Director",
    },
    period: { start: "2009. okt.", end: "2011. jan." },
    scope: {
      hu: "Vállalatvezetés és innovációmenedzsment",
      en: "Company leadership and innovation management",
    },
    achievements: {
      hu: [
        "Vállalatirányítás és innovációs kezdeményezések vezetése",
        "Szabadalmaztatott védelmi rendszer fejlesztése (HUP0900476)",
        "Közreműködés a Magyar Telekom CRM és Billing rendszerének megújításában",
      ],
      en: [
        "Directed company operations and innovation initiatives",
        "Led the development of a patented protection system (HUP0900476)",
        "Contributed to Magyar Telekom's CRM and Billing system renewal",
      ],
    },
    impact: {
      hu: "Szabadalmaztatott nemzeti innováció megvalósítása és nagyvállalati rendszermodernizáció megerősítése.",
      en: "Delivered a patented national innovation and strengthened enterprise-level system modernization.",
    },
  },
];
