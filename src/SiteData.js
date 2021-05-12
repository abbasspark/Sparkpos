import salespic from "./images/salespic.jpg";
import reportpic from "./images/reportpic.jpg";
import Restaurantpic from "./images/Restaurantpic.jpg";
import Funsquare from "./images/Funsquare.png";
import Xtremejump from "./images/Xtremejump.png";
import pin from "./images/pin.png";
import phone from "./images/phone.png";
import punctuality from "./images/punctuality.png";
import honesty from "./images/honesty.png";
import impossible from "./images/flaticon/svg/impossible.svg";
import think from "./images/think.png";
import innovation from "./images/innovation.png";
import optimization from "./images/optimization.png";
import company from "./images/company-image.jpg";
import SparkLogo from "./images/SparkLogo.png";
export const Brand = {
  id: 1,
  name: "Spark POS",
  link: "/",
  location: "Lebanon",
  image: SparkLogo,
};
export const navItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "Download", link: "/download" },
  { id: 4, name: "Contact", link: "/contact" },
  { id: 5, name: "About", link: "/about" },
];
export const HomePage = {
  header: {
    title: "Perfection is always in our mind.",
  },
  body: {
    section1: {
      title: "What is SparkPOS?",
      description: `SparkPOS is the ultimate restaurant POS software. 
      Our advanced features provide you with the means to serve your valued customers in a practical,
      productive manner, all the while collecting data that can be used to make important business decisions.`,
      getQuotation: "Get Quotation",
      txtName: "Name",
      txtEmail: "Email",
      txtmessage: "Message",
      btnLable: "Send Message",
    },
    section2: {
      title: "We are Leader In The Retail World",
      tabs: [
        {
          id: 1,
          name: "Sales",
          title: "We are Leader In The Retail World",
          description: `Easy to use for all kinds of business, this POS can be set up to do just what your business needs—it’s already worked for more than 2 million businesses globally.`,
          image: salespic,
          className: "nav-one",
        },
        {
          id: 2,
          name: "Reporting",
          title: "Real-time Data at Your Fingertips",
          description: `Don’t leave your restaurant’s potential success in the hands of fate. Decide which aspects of your business need attention and effortlessly create reports that will aid you in making informed decisions.`,
          image: reportpic,
          className: "nav-two",
        },
        {
          id: 3,
          name: "Restaurant",
          title: "We are Leader In The Retail World",
          description: `Work with an infrastructure that was specifically built for high-functioning restaurants. Instantly send orders to the kitchen display or printer. Print and split bills right at the table.`,
          image: Restaurantpic,
          className: "nav-three",
        },
      ],
    },
    section3: {
      title: "Our Clients",
      clients: [
        {
          id: 1,
          name: "FUN SQUARE",
          image: Funsquare,
          client_from: "Client From Facebook",
          description: `Fun Square Leabnon the indoor trampoline park is a playground for all ages with features such as dodge-ball courts, slam dunk hoops, a free jumping arena, foam pit and a designated kids zone!`,
        },
        {
          id: 2,
          name: "Xtreme Jump Brasil",
          image: Xtremejump,
          client_from: "Client From Facebook",
          description: `EXTREME JUMP Brazil is not just stepping stones, it is inspiring everyone to forget the serious stuff for a while and immerse themselves in an atmosphere of adventure and fun.`,
        },
      ],
    },
  },
};
export const ServicePage = {
  header: {
    title: "Our Services",
    description: `SPARK POS values attitude and aptitude and handles its business with
    a commitment to providing quality service and a quality product.`,
  },
  body: {
    items: [
      {
        id: 1,
        title: "Pace-Setting and Punctuality",
        description: `We are always one step ahead while maintaining a commitment to deadlines`,
        image: punctuality,
      },
      {
        id: 2,
        title: "Honesty and Openness",
        description: `Transparency is the essence of all our transactions, both internal and external`,
        image: honesty,
      },
      {
        id: 3,
        title: "nothing is impossible",
        description: `Nothing is out of reach, as we passionately work towards it`,
        image: impossible,
      },
      {
        id: 4,
        title: "thinking big and acting big",
        description: `We create big dreams, and make them deep rooted realities`,
        image: think,
      },
      {
        id: 5,
        title: "Improvement and Innovation",
        description: `We work with the intention to constantly improve and innovate our processes`,
        image: innovation,
      },
      {
        id: 6,
        title: "Optimization",
        description: `Whatever we do, we do flawlessly`,
        image: optimization,
      },
    ],
  },
};
export const ContactPage = {
  header: {
    title: "Contact Us",
    description: "We are available at any time",
  },
  body: {
    postForm: {
      txtFirstName: "First Name",
      txtLastName: "Last Name",
      txtEmail: "Email address",
      txtmessage: "Write your message",
      btnSend: "Send Message",
    },
    contactInfo: {
      title: "Contact Info",
      lbladdress: "Address:",
      address: "Liesegangstraße, 40211 Düsseldorf,Germany",
      lblphone: "Phone:",
      phone: "+961 70 73 62 27",
      lblemail: "Email:",
      email: "spark.lb.br@gmail.com",
    },
  },
};
export const AboutPage = {
  header: {
    title: "About Us",
    description: `SparkPOS is a provider of a full spectrum of point-of-sale, and IT solutions for retail management.`,
  },
  body: {
    title: "About Us",
    description1: `The foundation of SparkPOS is comprised of teamwork. To offer software that is second to none, we cooperate with highly qualified team members who continually polish our products. Education and development are at the top of our list. We keep ourselves up-to-date with the latest developments and methods in order to acquire information that can be applied toward the betterment of SparkPOS.`,
    description2: `Together, with our worldwide resellers and supporters, we are making plans for the future. New projects are emerging that will carry SparkPOS a few steps further. Cooperation and collaboration are the keys to growth. Only together, relying on our combined international know-how, can we create a contemporary and forward-looking POS system prepared for use worldwide.`,
    image: company,
  },
};
export const DownloadPage = {
  header: {
    title: "Download Demo Version.",
    description: "You will experince our magic...",
  },
  body: {
    downloadForm: {
      txtFirstName: "First Name",
      txtLastName: "Last Name",
      txtEmail: "Email address",
      btnDownload: "Download Now",
    },
  },
};
export const footer = {
  sitemap: {
    lable: "SITE MAP",
    items: [
      { id: 1, name: "Home", link: "/#body" },
      { id: 2, name: "Services", link: "/services#body" },
      { id: 3, name: "Download", link: "/download#body" },
      { id: 4, name: "Contact", link: "/contact#body" },
      { id: 5, name: "About", link: "/about#body" },
    ],
  },
  software: {
    labale: "software",
    items: [
      { id: 1, name: "Spark POS", link: "/download#body" },
      { id: 2, name: "Restaurant POS", link: "/download#body" },
      { id: 3, name: "Back Office", link: "/download#body" },
      { id: 4, name: "Mobile Solutions", link: "/download#body" },
    ],
  },
  hardware: {
    labale: "Hardware",
    items: [
      { id: 1, name: "POS (Point-of-Sale Terminals)", link: "/download#body" },
      { id: 2, name: "KMS (Kitchen Display Monitor)", link: "/download#body" },
      { id: 3, name: "Tablets & Mobile POS Devices", link: "/download#body" },
      {
        id: 4,
        name: " Peripherals & Hardware Accessories",
        link: "/download#body",
      },
    ],
  },
  contact: {
    lable: "CONTACT US",
    title: "SPARK POS - Germany",
    address1: "North Rhine-Westphalia",
    address2: " Germany",
    address3: "Liesegangstraße, 40211 Düsseldorf, Germany",
    pin,
    googleMap:
      "https://www.google.de/maps/place/Liesegangstra%C3%9Fe+22,+40211+D%C3%BCsseldorf/@51.2257051,6.7862539,19z/data=!4m12!1m6!3m5!1s0x47b8ca2514350bc9:0xf8836f43d7f810ad!2sMRT-Zentrum+D%C3%BCsseldorf!8m2!3d51.2253003!4d6.788162!3m4!1s0x47b8ca24e27733e1:0xb48b973196be7433!8m2!3d51.2257043!4d6.7868024",
    googleLable: " Find us on Google Map",
    hotline: "tel:+9611246111",
    mobile: "+96170736227",
    hotlineLable: "24/7 HOTLINE |",
    phone,
  },
  copyRigth: `SPARK POS GMBH ©${new Date().getFullYear()} All rights reserved`,
};
