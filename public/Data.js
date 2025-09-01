const data = [
    {
        name: "Dynamic Kannada Sign Language Recognition",
        details: "Built this for my final year project. This project aims to recognize the sign performed by the user and convert it into text. This project is built using MediaPipe and Tensorflow. Users can use a API call to simply upload the video of the sign and get the text back. This is achieved by hosting the model on a EC2 instance and using a flask API call to get the text back. The model was trained on a dataset of over 2300 samples and achieved a testing accuracy of 91%",
        tag : ['Deep Learning,', ' Computer Vision,', ' Flask,', ' AWS EC2'],
        pic: "/images/Projects/ksl.png",
        videoId: "https://drive.google.com/file/d/1rNcoXXSdrOmFDXNqsM2B9cssP7GWJlIo/view",
        link: "https://github.com/HyprerNova/Dynamic-Kannada-Sign-Language-Recognition.git"
    },
    {
        name: "AI powered Admin Portal",
        details: "Built this website for the college management. This application enabled the college to store essential information (such as mode of admission, KCET rank etc) about the freshers. This application also included AI powered features like marks extractio from the documents and also AI powered data retrieval via natural language.",
        tag: ['Next.js, ', 'PostgreSQL, ', 'Tailwind CSS', 'AWS'],
        pic: "/images/Projects/admin.png",
        videoId: "https://drive.google.com/file/d/1BPRZlwMAQL1KwRRjowiUzrkNE4D3-qn9/view",
        link: "https://github.com/HyprerNova/COE.git"

    },
    {
        name: "MCP Stock Broker",
        details: "Connected my Zerodha trading account to Claude AI to get real time stock market data and also to get the best possible trade recommendations. It allows me to buy and sell stocks with a single click. It also allows me to view my portfolio.",
        tag: ['MCP'],
        pic: "/images/Projects/MCP-Zero.jpeg",
        videoId: "BlFTuiuf430", // YouTube video ID
        link: "https://github.com/HyprerNova/Zerodha_MCP.git",
    }
];

export default data;
