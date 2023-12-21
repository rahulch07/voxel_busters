import React, {useState} from "react";
import logo from "../logo.svg";
import search from "../search-icon.png";

export default function NavBar(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [form, setForm] = useState(false);
    const [formData, setFormData] = useState({
        Date:'',
        StartupName:'',
        IndustryVertical:'',
        SubVertical:'',
        CityLocation:'',
        InvestorsName:'',
        InvestmentType:'',
        AmountInUSD:'',
        Remarks:'',
      });
    
      const handleChange2 = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit2 = (e) => {
        e.preventDefault();
        // Perform data validation here if needed
        if(formData.StartupName!=''&&formData.IndustryVertical!=''&&formData.Date!=''&&formData.CityLocation!=''&&formData.AmountInUSD!=''){
        props.onSave(formData);
        // Clear the form inputs
  setFormData({
    Date:'',
    StartupName:'',
    IndustryVertical:'',
    SubVertical:'',
    CityLocation:'',
    InvestorsName:'',
    InvestmentType:'',
    AmountInUSD:'',
    Remarks:'',
  });
        }
        else{
            alert('Invalid Data')
        }
      };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchTerm);
    //console.log('clicked');
  }
  function handleForm(){
    setForm(!form);
    // Clear the form inputs
  setFormData({
    Date:'',
    StartupName:'',
    IndustryVertical:'',
    SubVertical:'',
    CityLocation:'',
    InvestorsName:'',
    InvestmentType:'',
    AmountInUSD:'',
    Remarks:'',
  });
  }
  

  return (
    <div>
      <div className="fixed-top" id="navbar" style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img src={logo}  style={{height:50, width:50, marginLeft:20}} />
        </div>
        <div style={{ display: "flex", marginRight: 30, position:'relative' }}>

            <div className="relative" >
            
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} style={{border: 'solid 1px grey', borderRadius:5, position: 'relative', top:15}} />
            <div className="absolute right-0" style={{top:18}} type="submit" onClick={handleSubmit} ><img src={search} /></div>
            
            </div>
          
          <div style={{ padding: 15 }}>
            <a href="/">Home</a>
          </div>
          <div style={{ padding: 15 }}>
            <a href="/signin">SignIn</a>
          </div>
          <div style={{ padding: 15 }}>
            <a href="/signup">SignUp</a>
          </div>
          <div onClick={handleForm} style={{backgroundColor: 'lightgreen', height:35,position:'relative', top:10, borderRadius:5, paddingTop:6}} >
            Submit Startup
          </div>
        </div>
      </div>
      <hr />
        {form && <div className="absolute" style={{border: 'solid 1px black', borderRadius:10, backgroundColor: 'white', top:60, left:200}} >
        
        <div>
        <button onClick={handleForm} className="absolute top-0 right-0" style={{height:20, width:20, backgroundColor: 'red'}} >&times;</button>
        </div>
       
        {/* Display other startup details here */}
        <div>
      <div style={{display: 'flex', justifyContent:'space-between', marginTop:20}} >

    <div className="form" >
      <div>
      <label>StartupName</label>
      <input type="text" name="StartupName" value={formData.StartupName} onChange={handleChange2} />
      </div>
      <div>
      <label>IndustryVertical</label>
      <input type="text" name="IndustryVertical" value={formData.IndustryVertical} onChange={handleChange2} />
      </div>
      <div>
      <label>SubVertical</label>
      <input type="text" name="SubVertical" value={formData.SubVertical} onChange={handleChange2} />
      </div>
      </div>
      <div className="form" >
        <div>
      <label>Date</label>
      <input type="text" name="Date" value={formData.Date} onChange={handleChange2} />
      </div>
      <div>
      <label>CityLocation</label>
      <input type="text" name="CityLocation" value={formData.CityLocation} onChange={handleChange2} />
      </div>
      <div>
      <label>Investors Name</label>
      <input type="text" name="InvestorsName" value={formData.InvestorsName} onChange={handleChange2} />
      </div>
      </div>
      <div className="form" >
        <div>
      <label>Investment Type</label>
      <input type="text" name="InvestmentType" value={formData.InvestmentType} onChange={handleChange2} />
      </div>
      <div>
      <label>Amount in USD</label>
      <input type="text" name="AmountInUSD" value={formData.AmountInUSD} onChange={handleChange2} />
      </div>
      <div>
      <label>Remarks</label>
      <input type="text" name="Remarks" value={formData.Remarks} onChange={handleChange2} />
      </div>
      </div>
      
      
    
        </div>
        <div>
        <button style={{backgroundColor: 'lightgreen', borderRadius:5, padding:5}} type="submit" onClick={handleSubmit2} >Submit</button>
        </div>
        </div>

        </div>
}

    </div>
  );
}
