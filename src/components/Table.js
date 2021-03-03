import {Table} from 'react-bootstrap';


const TableData = [
    {
        Year:'2020',
        Degree:'B.Tech(2nd Semester)',
        Institution:'TIET,Patiala',
        CGPA:'9.54',

    },
    {
        Year:'2020',
        Degree:'B.Tech(1st Semester)',
        Institution:'TIET,Patiala',
        'CGPA':'9.22',
        
    },
    {
        Year:'2019',
        Degree:'XII',
        Institution:'CBSE',
        'CGPA':'92.00%',
        
    },
    {
        Year:'2017',
        Degree:'X',
        Institution:'CBSE',
        'CGPA':'9.8',
        
    },
]


const TableforEducation = (props)=>{
    return (
        <Table striped bordered hover variant={`${props.bg}`} className="table-responsive-md">
  <thead className="h5">
    <tr>
      <th>Year</th>
      <th>Degree/Examination</th>
      <th>Institution/Board</th>
      <th>CGPA/%</th>
    </tr>
  </thead>
  <tbody className="h6">
    {
        TableData.map((data)=>{
            return (
                <tr>
      <td>{data.Year}</td>
      <td>{data.Degree}</td>
      <td>{data.Institution}</td>
      <td>{data.CGPA}</td>
    </tr>)
        })
       }
  </tbody>
</Table>
    )
}

export default TableforEducation;