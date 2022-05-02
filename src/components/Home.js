import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from './cisco.jpg';

const HomeSection = styled.div`
    background: #100A30;
`

const Title = styled.h1`
    color:#fff;
    font-size: 55px;
    line-height: 64px;
    text-align: center;
    letter-spacing: 0.56px;
    padding-top:62px;
` 

const Description = styled.div`
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.18px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom:48px;
`

const ButtonReg = styled.div`
    margin-bottom:62px;
    a{
        color:#fff;
        background: #624DE3;
        border-radius: 6px;
        padding:15px 36px;
        border:none;
        outline:none;
        margin-right:16px;
        text-decoration:none;
    }
`

const ButtonLogin = styled.div`
    margin-bottom:62px;
    a{
        color:#fff;
        border: 1px solid #C3C1CB;
        border-radius: 8px;
        padding:15px 36px;
        background:transparent;
        outline:none;
        text-decoration:none;
    }
` 

const InformationSection = styled.section`
    padding-top:71px;
`

const InformationName = styled.div`
    color: #624DE3;
    font-weight:700;
    font-size: 16px;
    margin-bottom:10px;
`

const InformationTitle = styled.div`
    color: #100A30;
    font-size:48px;
    line-height:56px;
    margin-bottom:54px;
`;

const InformationText = styled.div`
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.18px;
    color: #4C4764;
    margin-bottom:27px;
`;

const InformationLink = styled.span`
    font-weight:700;
    font-size:16px;
    color: #624DE3;
    letter-spacing: 0.18px;
    line-height: 30px;
    border-bottom:2px solid #624DE3;
`;  

const CourseSection = styled.div`
    padding-top:100px;
`;

const CourseTitle = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: #100A30;
    margin-bottom:32px;
`;

const CourseItems = styled.div`
    margin-bottom:120px;
`;

const CourseItem = styled.div`
    width:290px;
    height:208px;
    background: #FFFFFF;
    box-shadow: -1px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    text-align:center;
    margin-bottom:24px;
`;

const CourseItemImg = styled.div`
    text-align:center;
    margin-top:32px;
    margin-bottom:24px;
`;

const CourseItemText = styled.div`
text-align:center;
`;

const PriceSection = styled.div``

const PriceTitle = styled.div`
    font-weight: 700;
    font-size: 48px;
    text-align: center;
    color: #100A30;
`

const PriceSale = styled.div``

const PriceTag = styled.div`
    font-size: 14px;
    color: #FFFFFF;
    line-height:22px;
    background: #624DE3;
    border-radius: 200px;
    padding: 0 20px;
`

const PriceSaleText = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #4C4764;
`

const PriceItems = styled.div`
    margin-top:80px;
`

const PriceItem = styled.div`
    width:395px;
`

const PriceItemTitle = styled.div`
    color:#fff;
    font-weight:700;
    font-size:14px;
`

const PriceItemName = styled.div`
    font-size: 24px;
    line-height: 24px;
    margin-top:13px;
`

const PriceItemPrice = styled.div`
    position:absolute;
    right:37px;
    bottom:24px;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
    span{
        font-size: 15px;
        line-height: 32px;
        color: #FFFFFF;
    }
`;

const PriceItemAdvantages = styled.div`
    background: rgba(16, 10, 48, 0.03);
    border-radius: 8px;
    padding:26px;
`;

const PriceItemAdvan = styled.div`
    margin-bottom:16px;
`;

const PriceItemAdvanImg = styled.div`
    margin-right:10px;
`;

const PriceItemAdvanText = styled.div`
font-weight: 700;
font-size: 14px;
color: #100A30;`

const QuestionsSection = styled.div`
    margin-top:147px;
`

const QuestionItems = styled.div``

const QuestionTitle = styled.div`
    font-weight: 700;
    font-size: 48px;
    width:596px;
    color: #100A30;
`

const QuestionItem = styled.div`
    width:596px;
    height:298px;
    border-radius:8px;
    margin-bottom:40px;
`

const QuestionItemQuestion = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #100A30;    
    margin-top:30px;
    margin-left:35px;
    margin-bottom:30px;
`

const QuestionItemAnswer = styled.div`
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    letter-spacing: 0.18px;
    color: #4C4764;
    margin-bottom:20px;
    margin-left:35px;
    padding-right:53px;
`;

const QuestionItemLink = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #100A30;
    margin-left:35px;
`;



const Home = () => {
    const courses = [
        "Gestion de l'ACRE", "Gestion de la TVA", "Calcul des cotisations", "Prélèvement libératoire", "Factures externes",  "Plafonds CA & TVA",  "Import de données",  "Et plus à venir ..."
    ]

    const priceData = [
        {
            title: "Gratuit",
            advantages: ["Gratuit", "Jusqu'à 4 clients", "Chiffre d'affaires jusqu'à 5 000€"]
        },
        {
            title: "Basique",
            price: "5$",
            advantages: ["30 jours d'essai gratuits", "Clients illimités" ,"Chiffre d'affaires jusqu'à 30 000€ "]
        },
        {
            title: "Pro",
            price : "12$",
            advantages: ["Gratuit", "Jusqu'à 4 clients", "Chiffre d'affaires jusqu'à 5 000€"]
        },
    ]

    const questionsData = [
        {
            question: "Как будет проходит оплата?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"payment"
        },
        {
            question: "Что входит в услуги сервиса?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"information"
        },
        {
            question: "Как будет проходит оплата?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"payment"
        },
        {
            question: "Какие гарантии есть?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"guarantee"
        },
        {
            question: "Как будет проходит оплата?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"payment"
        },
       
        {
            question: "Что входит в услуги сервиса?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"information"
        },
     
       
        {
            question: "Какие гарантии есть?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"guarantee"
        },
        {
            question: "Что входит в услуги сервиса?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"information"
        },
        {
            question: "Какие гарантии есть?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae asperiores debitis perspiciatis perferendis nemo tempore distinctio officia commodi et non tempora laudantium culpa nostrum, quidem, quasi ratione itaque nam.",
            about:"guarantee"
        },
    ]

  return (
    <>
        <HomeSection>
            <div className="container">
                <Title>
                    CiscoSDU
                </Title>
                <Description>
                    will help to gain knowledge!
                </Description>
                <div className="d-flex justify-content-center">
                    <ButtonReg>
                        <NavLink to="/register">Register</NavLink>
                    </ButtonReg>
                    <ButtonLogin>
                        <NavLink to="/login">Login</NavLink>
                    </ButtonLogin>
                </div>
            </div>
        </HomeSection>
        <InformationSection>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{width:445}}>
                        <InformationName>
                            Opportunities 
                        </InformationName>
                        <InformationTitle>
                            Opportunities of CiscoSDU!
                        </InformationTitle>
                        <InformationText>
                            Large selection of video lessons and laboratory work! Empowering all people with career possibilities Cisco Networking Academy transforms the lives of learners, educators and communities through the power of technology, education and career opportunities. Available to anyone, anywhere.
                        </InformationText>
                        <InformationLink>
                            Go to labs
                        </InformationLink>
                    </div>
                    <div>
                        <img src={logo} />
                    </div>
                </div>
            </div>
        </InformationSection>
        <CourseSection>
            <div className="container">
                <CourseTitle>
                    Courses
                </CourseTitle>
                <CourseItems className="d-flex flex-wrap justify-content-between">
                    {
                        courses.map((item,index) => (
                            <CourseItem>
                                <CourseItemImg>
                                    <img src={`images/${index+1}.png`}/>
                                </CourseItemImg>
                                <CourseItemText>
                                    {item}
                                </CourseItemText>
                            </CourseItem>
                        ))
                    }
                </CourseItems>
            </div>
        </CourseSection>
        <PriceSection>
            <div className="container">
                <PriceTitle>
                    Price
                </PriceTitle>
                <PriceSale className="d-flex justify-content-center gap-5">
                    <PriceTag>
                        Monthly
                    </PriceTag>
                    <PriceSaleText>
                        Sale -16,5% 🎉
                    </PriceSaleText>
                </PriceSale>
                <PriceItems className="d-flex justify-content-between">
                    {
                        priceData.map((item, index) => (
                            <PriceItem>
                                <div style={{backgroundImage:`url(/images/price-${index+1}.png)`,   backgroundRepeat: 'no-repeat', backgroundCover:"cover", backgroundPosition:"center", width:"395px", height:250, position:"relative", display:"flex" }}>
                                    <div style={{position:"absolute", bottom:39, left:30}}>
                                        <PriceItemTitle>
                                            CiscoSDU
                                        </PriceItemTitle>
                                        <PriceItemName style={{color : item.title === "Gratuit" ? " #FFFFFF" : item.title === "Basique" ? "#19C787" : "#FF9F1C" }}>
                                            {item.title}
                                        </PriceItemName>
                                    </div>
                                    <div>
                                        {
                                            item.price && <PriceItemPrice>{item.price} <span>/month</span></PriceItemPrice>
                                        }
                                    </div>
                                </div>
                                <PriceItemAdvantages style={{background: item.title === "Gratuit" ? "rgba(16, 10, 48, 0.03)" : item.title === "Basique" ? " rgba(25, 199, 135, 0.05)" : " rgba(252, 185, 52, 0.05)" }}>
                                    { 
                                        item.advantages.map(advan => (
                                            <PriceItemAdvan className="d-flex align-items-center ">
                                                <PriceItemAdvanImg>
                                                     <img src={item.title === "Gratuit" ? "/images/correct-1.png" :  item.title === "Basique" ? "/images/correct-2.png" : "/images/correct-3.png"} />   
                                                </PriceItemAdvanImg>
                                                <PriceItemAdvanText>
                                                    {
                                                    advan
                                                    }
                                                </PriceItemAdvanText>
                                            </PriceItemAdvan>
                                        ))
                                    }
                                
                                </PriceItemAdvantages>
                            </PriceItem>
                        ))
                    }
                </PriceItems>
            </div>
        </PriceSection>
        <QuestionsSection>
            <div className="container">
                <QuestionItems className="d-flex flex-wrap justify-content-between">
                <QuestionTitle>
                    FAQ    
                </QuestionTitle>   
                {
                    questionsData.map((item, index) => (
                        <QuestionItem style={{background: item.about === "payment" ? "  #E8E5FB" : item.about === "information" ? "#E8FAF3" : "#FFF5E1"}}>
                            <QuestionItemQuestion>
                                {item.question}
                            </QuestionItemQuestion>
                            <QuestionItemAnswer>
                                {item.answer}
                            </QuestionItemAnswer>
                            <QuestionItemLink>
                                Visit
                            </QuestionItemLink>
                        </QuestionItem>

                    ))
                }
                </QuestionItems>
            </div>
        </QuestionsSection>
    </>
  )
}

export default Home