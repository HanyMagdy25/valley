import imageSwiper from "../assets/hero.jpg";
import heroImage1 from "../assets/hero1.jpg";
import heroImage from "../assets/hero.jpg";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpeg";
import stat from "../assets/stat.jpg";
import homeIcon from "../assets/home.png";
import homesIcon from "../assets/homes.png";
import blocksIcon from "../assets/blocks.png";
// Image guarntee
import electIcon from "../assets/guarantee/plug.png";
import shield2Icon from "../assets/guarantee/shield1.png";
import elevator1Icon from "../assets/guarantee/elevator1.png";
import structureIcon from "../assets/guarantee/structure.png";
import pipeIcon from "../assets/guarantee/pipe.png";
// Image
import floorImage from "../assets/advantages/floor.png";
import doorImage from "../assets/advantages/door.png";
import plugImage from "../assets/advantages/plug.png";
import quarantineImage from "../assets/advantages/quarantine.png";
import roofImage from "../assets/advantages/roof.png";
import rollerImage from "../assets/advantages/roller.png";
import faucetImage from "../assets/advantages/faucet.png";
import paintImage from "../assets/advantages/paint.png";
export const cards = [
  {
    id: 1,
    title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    imageUrl: heroImage,
  },
  {
    id: 2,
    title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",

    imageUrl: heroImage1,
  },
  {
    id: 3,
    title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",

    imageUrl: stat,
  },
];

export const hoverCardsData = [
  {
    id: 1,
    title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    smallDescription:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد ",

    bigDescription:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى المساحة، لقد تم توليد هذا النص من مولد النص العربى",
    imageUrl: bg,
  },
  {
    id: 2,
    title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    smallDescription:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد ",
    bigDescription:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى المساحة، لقد تم توليد هذا النص من مولد النص العربى",

    imageUrl: bg2,
  },
  {
    id: 3,
    title: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
    smallDescription:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد ",
    bigDescription:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى المساحة، لقد تم توليد هذا النص من مولد النص العربى",

    imageUrl: bg3,
  },
];

export const advData = [
  {
    id: 1,
    image: floorImage,
    title: "الأرضيات",
    desc: "رخام وسيراميك",
  },
  {
    id: 2,
    image: doorImage,
    title: "الأبواب",
    desc: "خشب",
  },
  {
    id: 3,
    image: plugImage,
    title: "الكهرباء",
    desc: "الفنار",
  },
  {
    id: 4,
    image: quarantineImage,
    title: "العزل",
    desc: "مائي حرارى",
  },
  {
    id: 5,
    image: roofImage,
    title: "الأسقف",
    desc: "جيبس",
  },
  {
    id: 6,
    image: paintImage,
    title: "الدهان الخارجى",
    desc: "الجزيرة",
  },
  {
    id: 7,
    image: roofImage,
    title: "النوافذ",
    desc: "دبل جيلاتين",
  },
  {
    id: 8,
    image: faucetImage,
    title: "المواد الصحية",
    desc: "مائي حرارى",
  },
  {
    id: 9,
    image: rollerImage,
    title: "الدهان الداخلى",
    desc: "الجزيرة",
  },
];
export const cardProvideData = [
  {
    id: 1,
    image: blocksIcon,
    title: "عدد المبانى",
    num: 3,
  },
  {
    id: 2,
    image: homesIcon,
    title: "عدد الوحدات",
    num: 35,
  },
  {
    id: 3,
    image: homeIcon,
    title: "عدد الفلل ",
    num: 2,
  },
];
export const cardGuaranteeData = [
  {
    id: 1,
    image: electIcon,
    title: "طيلون كهرباء",
    num: 10,
  },
  {
    id: 2,
    image: shield2Icon,
    title: "ضمان شامل",
    num: 2,
  },
  {
    id: 3,
    image: elevator1Icon,
    title: "المصعد",
    num: 3,
  },
  {
    id: 4,
    image: structureIcon,
    title: "الهيكل الانشائي",
    num: 10,
  },
  {
    id: 5,
    image: pipeIcon,
    title: "المواسير",
    num: 5,
  },
];

export const afterPurchaseData = [
  {
    id: 1,
    title: "صيانة المصاعد وضخ المياه",
  },
  {
    id: 2,
    title: "حارس للخدمات والنظافة لمدة سنة",
  },
  {
    id: 3,
    title: "صيانة المصاعد وضخ المياه",
  },
  {
    id: 4,
    title: "اعادة بيع الوحدة السكنية مجانا",
  },
  {
    id: 5,
    title: "صيانة المصاعد وضخ المياه",
  },
  {
    id: 6,
    title: "عقود صيانة رمزية بعد انتهاء السنة الاولى",
  },
  {
    id: 7,
    title: "صيانة المصاعد وضخ المياه",
  },
  {
    id: 8,
    title: "صيانة المصاعد وضخ المياه",
  },
];
