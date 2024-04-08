import React from 'react'

const cards=[
    {
        name:"John Doe1",
        total:20,
        description: "I am a developer",
        footer:"Completed: 13"
    },
    {
        name:"John Doe2",
        total:20,
        description: "I am a developer",
        footer:"Completed: 13"
    },
    {
        name:"John Doe3",
        total:20,
        description: "I am a developer",
        footer:"Completed: 13"
    }
]

const Cards = () => {

  return (
<div className="card">
    {cards.map((item,index)=>{
        <label key={item.name} id={item.name}>
            <input type="checkbox" />
            <div className="card">
                <div className="front">
                    <header>
                        <h2>{item.name}</h2>
                        <span>more_vert</span>
                    </header>
                    <var>{item.total}</var>
                    <h3>{item.description}</h3>
                    <h4>{item.footer}</h4>
                </div>
                <div className="back">
                    <header>
                        <h2>{item.name}</h2>
                        <span>close</span>
                    </header>
                    <p>More Information</p>
                </div>
            </div>
        </label>
    })}
</div>  )
}

export default Cards