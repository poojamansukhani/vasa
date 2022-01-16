import type {VercelRequest, VercelResponse} from '@vercel/node';

export default async function(req:VercelRequest, res:VercelResponse){
    return res.status(200).send([
        {
            name: "Joe",
            email: "joe@gmail.com",
            skills:"Java, PHP, mySQL",
            availability:"2PM, 3PM, 4PM",
            ratings:"****"
        },
        {
            name: "Danny",
            email: "danny@gmail.com",
            skills:"Java",
            availability:"2.30PM, 4PM, 7PM",
            ratings:"*****"
        },
        {
            name: "Malinda",
            email: "malinda@gmail.com",
            skills:"Angular, HTML, CSS",
            availability:"4PM, 5PM, 6PM, 8PM",
            ratings:"***"
        },
        {
            name: "Zahab",
            email: "zahab@gmail.com",
            skills:"Java, PHP, mySQL",
            availability:"6PM, 7PM, 9PM",
            ratings:"****"
        },
        {
            name: "Rubina",
            email: "rubina@gmail.com",
            skills:"Springboot, Python",
            availability:"6PM, 7PM, 9PM",
            ratings:"*****"
        },
        {
            name: "Noshin",
            email: "noshin@gmail.com",
            skills:"HTMl, CSS, PHP, mySQL",
            availability:"4PM, 7PM, 9PM",
            ratings:"****"
        },
        {
            name: "Rio",
            email: "rio@gmail.com",
            skills:"Java, PHP, mySQL",
            availability:"6PM, 7PM, 8PM",
            ratings:"****"
        },
        {
            name: "Kartik",
            email: "kartik@gmail.com",
            skills:"Java, PHP, mySQL",
            availability:"6PM, 7.30PM, 9PM",
            ratings:"****"
        },
        {
            name: "Lavina",
            email: "lavina@gmail.com",
            skills:"Java, PHP, React",
            availability:"4PM, 7.30PM, 9PM",
            ratings:"*****"
        },
        {
            name: "Pradeep",
            email: "pradeepa@gmail.com",
            skills:"Java, Angular, React",
            availability:"4PM, 7.30PM, 9PM",
            ratings:"****"
        },
        {
            name: "Zoya",
            email: "zoyaa@gmail.com",
            skills:"Angular, React",
            availability:"4.30PM, 7.30PM, 9.30PM",
            ratings:"****"
        },
        {
            name: "Vicky",
            email: "vicky@gmail.com",
            skills:"Angular, React",
            availability:"4PM, 8.30PM, 9.30PM",
            ratings:"****"
        }  
    ])
}