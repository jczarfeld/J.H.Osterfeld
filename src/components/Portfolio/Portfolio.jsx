// import './portfolio.scss';
// import { useState, useEffect } from 'react';
// import GitHubIcon from '@material-ui/icons/GitHub';

// import PortfolioList from '../PortfolioList/PortfolioList';
// import{
//     GroupOne,
//     GroupTwo
// } from "../../data";
// export default function Portfolio() {

//     const[selected, setSelected] = useState("one");
//     const[data, setData] = useState([]);
//     const list =[
//         {
//             id:"one",
//             title:"Group One",
//         },
//         {
//             id:"two",
//             title:"Group Two",
//         },
       
//     ]
//     useEffect(()=>{
//         switch (selected) {
//                 case "one":
//                 setData(GroupOne);
//                 break;
//                 case "two":
//                     setData(GroupTwo);
//                 break;
//              default:
//                 setData(GroupOne);
//                 break;
//         }
//     },[selected])
//     return (
//         <div className="portfolio" id="portfolio"> 
//             <h1>Portfolio</h1>
//             <ul>
//                 {list.map(item=>(
//                 <PortfolioList
//                  title = {item.title} 
//                  active={selected===item.id} 
//                  setSelected={setSelected}
//                  id={item.id}
//                  />
//                 ))}
//             </ul>
//             <div className="container">
//                 {data.map((d)=>(
//                     <a href={d.link} target="_blank" rel="noreferrer">
//                 <div className="item">
//                     <img src={d.img} alt="" />
//                     <h3>{d.title}</h3>
                    
//                 </div>
//                 <div className="desc">
//                     <div>
//                     <a href={d.git} target="_blank" rel="noreferrer">
//                     <GitHubIcon className="link"/>
//                     </a>
//                     <div className="gitDesc" >{d.desc}</div>
                    
//                     </div>
//                 </div>
//                 </a>))}
                
//             </div>
//         </div>
//     )
// }

import './portfolio.scss';
import { useState, useEffect } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

import PortfolioList from '../PortfolioList/PortfolioList';
import{
    FrontEnd,
    BackEnd,
    FullStack,
    
} from "../../data";
export default function Portfolio() {

    const[selected, setSelected] = useState("front");
    const[data, setData] = useState([]);
    const list =[
        {
            id:"front",
            title:"Front End",
        },
        {
            id:"back",
            title:"Back End",
        },
        {
            id:"full",
            title:"Full Stack",
        },
    ]
    useEffect(()=>{
        switch (selected) {
                case "front":
                setData(FrontEnd);
                break;
                case "back":
                    setData(BackEnd);
                break;
                case "full":
                setData(FullStack);
                break;
            default:
                setData(FrontEnd);
                break;
        }
    },[selected])
    return (
        <div className="portfolio" id="portfolio"> 
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                <PortfolioList
                 title = {item.title} 
                 active={selected===item.id} 
                 setSelected={setSelected}
                 id={item.id}
                 />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <a href={d.link} target="_blank" rel="noreferrer">
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                    
                </div>
                <div className="desc">
                    <div>
                    <a href={d.git} target="_blank" rel="noreferrer">
                    <GitHubIcon className="link"/>
                    </a>
                    <div className="gitDesc" >{d.desc}</div>
                    
                    </div>
                </div>
                </a>))}
                
            </div>
        </div>
    )
}