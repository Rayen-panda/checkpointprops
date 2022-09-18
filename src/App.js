import './App.css';
import Profile from './profile/profile';

function App() {
  var data ={
    fullname:"Chebbi rayen" , 
    bio:"17 years old",
    profession:"artist",
    img:"https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/296359928_1684123758647368_7832196496518206743_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tJFetc1gvukAX9TW0uf&tn=iAQ8O1scsOpQ-l3n&_nc_ht=scontent.ftun2-2.fna&oh=00_AT9-xbZCv-zLg4bzCTgJ4vG6M99yT0-iKVqqBmfWogTbsA&oe=632C223B",
    img2:"https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/125522383_1253004948425920_4753467250455626997_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=19026a&_nc_ohc=HS3xfdZDpL0AX8VB0_K&_nc_ht=scontent.ftun2-2.fna&oh=00_AT87F_TJw6SHIgJBDgpm_QFt7SvNdz3gGkQMjn2WICZJng&oe=634C0B48"
  }

  return (
    <div className="App"  >
      <Profile fullname={data.fullname} bio={data.bio} profession={data.profession} img={data.img}  img2={data.img2} />
      
    </div>
  );
}

export default App;