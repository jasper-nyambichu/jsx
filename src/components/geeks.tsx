function Geeks()
{
    const myDev =[
        "My name is Moseti Dickson and I have decided to go back  to my code as I did get used in entire of my life",
        "Have been commiting myself to fall in love but it turns out to be dissapoint.I don't care anymore rather I want to mylife to be full of coding, Nothing else",
        "My ambition currently is to code badly and I don't think if anything is gonna stop me from doin so as I look forward to generate many cofdes as much as possible"
    ]

    return(
        <>
        <h3>My Aim and My Current State</h3>
        {myDev.map((myDev, index)=>myDev.includes("n") ? <p key={index}>{myDev}</p> : null)}
        </>
        
        
    )
}
export default Geeks;