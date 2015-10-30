/** `bio` contains
            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string 
                  github: string
                  twitter: string 
                  location: string
            welcomeMessage: string 
            skills: array of strings
            biopic: url
            display: function taking no parameters
*/
var bio = {
    "name": "Joseph Cook",
    "role": "Principal Software Engineer",
    "contacts": {
        "mobile": "319-512-9661",
        "email": "joe.cook@sococo.com",
        "github": "https://github.com/nerdvangelist",
        "twitter": "@southpawjoe",
        "location": "Iowa City, Iowa"
    },
    "welcomeMessage": "Hi there! So glad to meet you",
    "skills": [
        "awesomeness",
        "c++",
        "obj-c",
        "JSON Hero",
        "cryogenic sleeper"
    ],
    "biopic": "https://avatars3.githubusercontent.com/u/12993336?v=3&s=460",
    "display": ""
};

/** `education` contains
            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters
*/
var education = {
    "schools": [
        {
            "name": "Iowa State University",
            "location": "Ames, Iowa",
            "degree": "Bachelors",
            "majors": [
                "BSEE"
            ],
            "dates": "1982-1987",
            "url": "http://www.isu.edu",
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Crash Course",
            "school": "Udacity",
            "date": "2015",
            "url": "http://www.udacity.com/course/ud804",
        }
    ],
    "display": ""
};

/** `work` contains
          
            jobs: array of objects with
                 employer: string 
                 title: string 
                 location: string 
                 dates: string (works with a hyphen between them)
                 description: string 
            display: function taking no parameters
*/
var work = {
    "jobs": [
        {
            "employer": "Radio Shack",
            "title": "Sales Representative",
            "location": "Bremerton, Washington",
            "dates": "1988-1989",
            "description": "Sold various merchandise for commission sales. Provide inside customer service. Open and close store"
        },
        {
            "employer": "Norand Data Systems",
            "title": "Software Engineer",
            "location": "Cedar Rapids, Iowa",
            "dates": "1989-2009",
            "description": "onsite customer site surveyor, customer support engineer"
        },
        {
            "employer": "Intermec Technologies",
            "title": "Principal Software Engineer",
            "location": "Cedar Rapids, Iowa",
            "dates": "2009-2012",
            "description": "platform board support package software development"
        },
        {
            "employer": "Sococo",
            "title": "Principal Software Engineer",
            "location": "Iowa City, Iowa",
            "dates": "2012-Present",
            "description": "obj-c, ios, osx development, ios development, win32, javascript"
        }
    ],
    "display": ""
};

/** `projects` contains:

            projects: array of objects with
                  title: string 
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters
*/
var projects = {
    "projects": [
        {
            "title": "Sample project",
            "dates": "2015",
            "description": "Queso Bueno",
            "images": [
                "https://pbs.twimg.com/profile_images/459032186834808832/KTVP38IQ_400x400.png",
                "http://www.catbreedspic.co/wp-content/uploads/2015/04/black-siamese-mix-catsselonjoran-cat-n-dog-page-391-bdunscto.jpg"
            ]
        }
    ],
    "display": ""
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role); $("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name); $("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); $("#header").append(formattedMobile);

var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
$(".work-entry:last").append(formattedLocation);
