import {Carousel} from 'react-bootstrap';
import AcademicsPhoto from '../Assets/academics.jpg'
import CollegePhoto from '../Assets/college.jpg';
import CodingPhoto from '../Assets/coding.jpg';

const SliderData = [

  {title:'Academic Journey',
  imgUrl:AcademicsPhoto,
  listData:[
  'Class X Boards: Secured 9.8 CGPA',
  'Class XII Boards(Non Medicak Stream):Secured 92%',
  'JEE Mains 2019 - 33k Rank',
  'JEE Advanced - 16k Rank',
]},
{
  title:'Current Journey',
  imgUrl:CollegePhoto,
  listData:[
  'I am currently Undergraduate student pursuing B.Tech in Computer Science  from Thapar Institute of Engineering and Technology,Patiala.'
]},
{
  title:'Areas of Interest',
  imgUrl:CodingPhoto,
  listData:[
    'App Development',
    'Web Development',
    'Competitive Programming',
    'Cyber Security',
    'Machine Learning',
]}

]

const Slider = ()=> {

    return (
        <Carousel >
        {
        SliderData.map((item)=>{
            return (
              <Carousel.Item >
    <img
      className="d-block w-100"
      src={item.imgUrl}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="d-none d-md-block responsive container-fluid bg-dark py-3">
      <h3 className="font-weight-bold">{item.title}</h3>
      <ul className="h5">
      {item.listData.map((data)=><li>{data}</li>)}
      </ul>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
            )
          }) 
        }
</Carousel>

    )
}

export default Slider;