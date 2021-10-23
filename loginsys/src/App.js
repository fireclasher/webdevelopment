
import React,{userState} from 'react';
function App() {
  const aminUser={
    email:"admin@admin.com",
    password:"admin123"
  }
  const [user,setUser]=userState({name:"",email:""});
  const [errormsetError]=useState("");

  const Login=details=>{
    console.log(details);
  }
  const Logout=()==>{
    console.log("logout");

  }
  return (
    <div className="App">
    {(user.email!="")?(
      <h2> welcome , <span>{user.name}</span></h2>
      <button>Logout</button>
    )}
    </div>
  );
}

export default App;
