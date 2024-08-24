import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8,building_9,building_10,
        blog_1,blog_2,blog_3,felix,excelsiortech} from "./assets";
        

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Design-Build Services",
    icon:<FaDrawPolygon/>,
    description:`This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  {
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name:"Site Preparation",
    icon:<AiOutlineFileProtect/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
    as land clearing, excavation, grading, and utility installation to ensure the site is ready 
    for building.`,
  },
  {
    name:"Specialty Construction Services",
    icon:<IoConstructSharp/>,
    description:`This can include services like roofing, concrete work, steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
]

export const teams = [
  {
    name:"Felixic",
    title:"Technician",
    profile:felix,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },

  {
    name:"Eunice",
    title:"Technician",
    profile:excelsiortech,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
 
  {
    name:"Santan Dennisss",
    title:"Technician",
    profile:excelsiortech,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Isabel",
    title:"Technician",
    profile:excelsiortech,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Selinam Donetta",
    title:"Technician",
    profile:excelsiortech,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Daniel Godfred",
    title:"Technician",
    profile:excelsiortech,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Gryphosa",
    title:"Technician",
    profile:excelsiortech,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  
]

export const projects = [
  {
    title:"Residential Development Project",
    image:building_5,
    description:`A comprehensive residential development involving the construction of a new 
        housing community from initial site clearing and preparation to final home construction and landscaping`,
  },
  {
    title:"Commercial Office Building",
    image:building_6,
    description:`The construction of a multi-story office building including all 
       architectural and structural design, coordination of specialized trades for 
       HVAC and electrical systems, and complete project oversight.`,
  },
  {
    title:"Retail Space Renovation",
    image:building_7,
    description:`Transforming an outdated retail store into a modern commercial space, 
    involving interior demolition, new layout design, installation of new fixtures, 
    and updating utilities.`,
  },
  {
    title:"Industrial Warehouse Construction",
    image:building_8,
    description:`Building a large-scale industrial warehouse, including land clearing,
     foundation work, steel structure erection, and complete construction management 
     from start to finish.`,
  },
  {
    title:"Historic Building Restoration",
    image:building_9,
    description:`Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
  },
  {
    title:"Educational Facility Expansion",
    image:building_10,
    description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },
];


export const testimonial = [
  {
    image:profile2,
    name:'Lionel Messi',
    review:` "ExcelsiorTech transformed our vision into reality with impeccable design and attention to detail. Their creativity and professionalism exceeded our expectations. We couldn’t be happier with our new space!" - Lionel Messi.`
  },
  {
    image:profile3,
    name:'Cristiano Ronaldo',
    review:` Working with ExcelsiorTech was a fantastic experience. Their architectural expertise and innovative solutions brought our project to life. Highly recommend them for any architectural needs!" - Cristiano Ronaldo.

`
  },
  {
    image:profile4,
    name:'Jude Bellingham',
    review:` ExcelsiorTech is a true professional team. Their dedication to perfection and unique design perspective made our project a stunning success. We are thrilled with the outcome!" - Jude Bellingham.`
  },
  {
    image:profile5,
    name:'Kylain Mbappe',
    review:` From concept to completion, ExcelsiorTech was exceptional. Their ability to understand our needs and deliver a beautiful, functional design was outstanding. We are grateful for their expertise." - Kylain Mbappe.

`
  }

];


export const blogs = [
  {
      title:"Sustainable Construction: Building for the Future",
      image:blog_1,
      category:"Building",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"The Importance of Quality Craftsmanship in Construction",
      image:blog_2,
      category:"Construction",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"Innovative Technologies Transforming the Construction Industry",
      image:blog_3,
      category:"Innovations",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


export const contacts = [
  {
    name:"Email",
    value:"felixic99@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+233 24 540 2719",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"University of Ghana, Legon, Accra",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


