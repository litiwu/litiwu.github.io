// Skills Icons
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import javaIcon from "./images/java-svgrepo-com.svg"
import cIcon from "./images/icons8-c++.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"
<<<<<<< HEAD
=======

//importing images 
import illustrationPic from "./images/illustration_.png"
import designPic from "./images/design.png"
import photographyPic from "./images/photography_.png"
import aboutMe from "./images/about_me.jpg"

>>>>>>> parent of 0f8e5a3 (pls fix master)

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Lisa",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "",

  //Contact Email
  contactEmail: "lisa.wu@utdallas.edu",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
<<<<<<< HEAD
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Project One", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Project Two", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Project Four", //Project Title - Add Your Project Title Here
=======
      id: 1, 
      title: "ILLUSTRATION", //Project Title - Add Your Project Title Here
>>>>>>> parent of 0f8e5a3 (pls fix master)
      para:
        "A COMPILATION OF MY ILLUSTRATIONS AND INTAGLIO PRINTS", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        illustrationPic,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 2, 
      title: "DESIGN", //Project Title - Add Your Project Title Here
      para:
        "A COMPILATION OF MY DESIGN PROJECTS", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        designPic,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 3, 
      title: "PHOTOGRAPHY", //Project Title - Add Your Project Title Here
      para:
        "AN IMAGE GALLERY", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        photographyPic,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
   
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm Lisa! I am sophomore studying Computer Science at the Univeristy of Texas at Dallas with a passion for illustration and design. Currently based in Taiwan due to the pandemic.",
  aboutParaTwo:
    ["Other than my coding my day away, I also love to design and create illustration in my free time.",
     " Recently I have been learning lots about the front-end development and this portfolio is my little project while I learn:)"
     ]
    ,
  aboutParaThree:
    "In the future, I hope to become an full-stack developer with a focus on UI/UX design!",
  aboutImage:
    aboutMe,
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: javaIcon,
      para:
        "Three years of experience coding in Java 8. Proficient in Object-Oriented Programming.",
    },
    {
      id: 2,
      img: cIcon,
      para:
        "Two years of experience coding in C++.",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "One year of experience coding in JavaScript.",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "Proficient understanding in web developement, including using the react framework.",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "Four years of design and illustration experience. ",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "Also proficient in Python3.",
    },
  ],

  // End Skills Section --------------------------


  //   Contact Section --------------

  contactSubHeading: "find me here!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/litiwu" },
 
    {
      img: instagramIcon,
      url: "https://www.instagram.com/lisaawu_",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
