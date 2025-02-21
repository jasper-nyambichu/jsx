function ListGroup(){
let code = [
  "Java",
  "Spring Boot",
  "PHP",
  "lavarel",
  "React",
  "Python",
  "Django",
]


  return(
    <>
    <h3>Programming Languages</h3>
    <ul className="list-group">
     {code.map((code)=>(
      <li className="list-group-item" onClick={()=>console.log("Clicked")} key={code}>{code}</li>
      ))};
    </ul>
    </>
  )
}
export default ListGroup;
