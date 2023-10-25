import React, { useState } from 'react'
let foods = [

    {
        id: 1,
        name: "Vairamalikai",
        cuisine: "North Indian , South Indian",
        imgUrl: "images/1.webp",
        rating: "4.2",
        preparetion: "$.150",
        amount: 580,
        units: "Veg & nonveg",
        delivery: 30,
        categoroy: "Non veg",
    },
    {
        id: 2,
        name: "Hotel Anandha",
        cuisine: "North Indian , South Indian",
        imgUrl: "images/20.webp",
        rating: "3.9",
        preparetion: "$.60",
        amount: 280,
        units: "Pure veg",
        delivery: 20,
        categoroy: "Veg",
    },
    {
        id: 3,
        name: "Hotel Nellai Saravana Bavan",
        cuisine: "North Indian , South Indian",
        imgUrl: "images/32.webp",
        rating: "4.3",
        preparetion: "$.130",
        amount: 450,
        units: "Veg & nonveg",
        delivery: 45,
        categoroy: "Non veg",
    },
    {
        id: 4,
        name: "Hotel Sri Arya bavan",
        cuisine: "North Indian , South Indian",
        imgUrl: "images/6.webp",
        rating: "4.2",
        preparetion: "$.50",
        amount: 160,
        units: "Pure veg",
        delivery: 30,
        categoroy: "Non veg",
    },
    {
        id: 5,
        name: "Hote Banu Birndavan..",
        cuisine: "North Indian , South Indian",
        imgUrl: "images/7.webp",
        rating: "4.1",
        preparetion: "$.30",
        amount: 90,
        units: "Pure veg",
        delivery: 20,
        categoroy: "Veg",
    },
    {
        id: 6,
        name: "Hotel Aryaas",
        cuisine: "North Indian , South Indian",
        imgUrl: "images/9.webp",
        rating: "4.4",
        preparetion: "$.120",
        amount: 350,
        units: "Non veg",
        delivery: 45,
        categoroy: "Nonveg",
    }
]

const Card = () => {
    return (
        <div>
            <Menu />
        </div>
    )
}
const Menu = (props) => {
    let [step, setStep] = useState(1)
    let [cont, setCont] = useState({
        id: 1,
        name: "Vairamalikai",
        cuisine: "North Indian , South Indian",
        imgUrl: "images/1.webp",
        rating: "4.2",
        preparetion: "$.150",
        amount: 580,
        units: "Veg & nonveg",
        delivery: 30,
        categoroy: "Non veg",
    })
    const previousBtn = (d) => {
        // console.log(d);
        if (step > 1)
            setStep(step - 1)
        {
            let obj = foods.find((val) => (
                val.id == d
            ))

            if (step>1){
                setCont(obj)
            }
           
            // console.log(obj)
        }

    }

    const nextBtn = (d) => {
        // console.log(d);
        if (step < 6) {
            setStep(step + 1)
        }
        let obj = foods.find((val) => (
            val.id == d
        ))
        if (step<6){
            setCont(obj)
        }
       
        // console.log(obj);


    }
    return (
        <div className='container'>
            <div className='divs'>
                <div className={step >= 1 ? "div" : " "}>1</div>
                <div className={step >= 2 ? "div" : " "}>2</div>
                <div className={step >= 3 ? "div" : " "}>3</div>
                <div className={step >= 4 ? "div" : " "}>4</div>
                <div className={step >= 5 ? "div" : " "}>5</div>
                <div className={step >= 6 ? "div" : " "}>6</div>
            </div>
            <div className='col'>
                <div className='card'>
                    <div className='imd-div'>
                        <img src={cont.imgUrl}></img>
                    </div>
                    <div className='content'>
                        <h1>{cont.name}</h1>
                        <i>{cont.categoroy}</i>
                        <p>{cont.preparetion}</p>
                    </div>
                </div>
            </div>
            <div className='button-div'>
                <button onClick={() => previousBtn(step - 1)}>Previous</button>
                <button onClick={() => nextBtn(step + 1)}>Next</button>
            </div>
        </div>



    )
}
export default Card