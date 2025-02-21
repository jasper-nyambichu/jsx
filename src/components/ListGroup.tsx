function ListGroup(){
let code = [
  "Java",
  "Spring Boot",
  "PHP",
  "lavarel",
  "React",
  "Python",
  "Django"
]
code =[];

  return(
    <>
    <h3>Programming Languages</h3>
    {code.length === 0 && <p>No items Found</p>}
    <ul className="list-gruop">
     {code.map((code)=>(
      <li key={code}>{code}</li>
      ))};
    </ul>
    </>
  )
}
export default ListGroup;
