const data = [
    {
        name: "Dynamic Kannada Sign Language Recognition",
        details: "Built this for my final year project. This project aims to recognize the sign performed by the user and convert it into text. This project is built using MediaPipe and Tensorflow. Users can use a API call to simply upload the video of the sign and get the text back. This is achieved by hosting the model on a EC2 instance and using a flask API call to get the text back. The model was trained on a dataset of over 2300 samples and achieved a testing accuracy of 91%",
        tag : ['Deep Learning,', ' Computer Vision,', ' Flask,', ' AWS EC2'],
        pic: "/images/Projects/ksl.png",
        link: "https://github.com/HyprerNova/Dynamic-Kannada-Sign-Language-Recognition.git"
    },
    {
        name: "Student Admin Portal",
        details: "Built this website for the college management. This application enabled the college to store essential information (such as mode of admission, KCET rank etc) about the freshers.",
        tag: ['Next.js, ', 'Java Script, ', 'Tailwind CSS'],
        pic: "/images/Projects/admin.png",
        link: "https://github.com/HyprerNova/COE.git"

    },
    {
        name: "Personal Portfolio Website",
        details: "This website is a testament to my skills as a web developer.",
        tag: ['Next.js, ', 'Java Script, ', 'Tailwind CSS'],
        pic: "/images/Projects/portfolio.png",
        link: "yet to be uploaded",
    }
];

export default data;
