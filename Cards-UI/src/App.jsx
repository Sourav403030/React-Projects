import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    company: "Google",
    role: "Frontend Engineer",
    qualities: ["innovative", "scalable"],
    salaryPerHour: 85,
    location: "Mountain View, USA",
    isSaved: true
  },
  {
    logo:"https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    company: "Microsoft",
    role: "Software Developer",
    qualities: ["reliable", "enterprise"],
    salaryPerHour: 78,
    location: "Redmond, USA",
    isSaved: false
  },
  {
    logo:"https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
    company: "Amazon",
    role: "Backend Engineer",
    qualities: ["fast", "customer-centric"],
    salaryPerHour: 75,
    location: "Seattle, USA",
    isSaved: true
  },
  {
    logo:"https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    company: "Meta",
    role: "React Developer",
    qualities: ["social", "data-driven"],
    salaryPerHour: 82,
    location: "Menlo Park, USA",
    isSaved: false
  },
  {
    logo:"https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
    company: "Netflix",
    role: "UI Engineer",
    qualities: ["creative", "performance"],
    salaryPerHour: 90,
    location: "Los Gatos, USA",
    isSaved: true
  },
  {
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
    company: "Apple",
    role: "Software Engineer",
    qualities: ["premium", "design-focused"],
    salaryPerHour: 88,
    location: "Cupertino, USA",
    isSaved: false
  },
  {
    logo:"https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg",
    company: "Uber",
    role: "Full Stack Developer",
    qualities: ["real-time", "scalable"],
    salaryPerHour: 72,
    location: "San Francisco, USA",
    isSaved: true
  },
  {
    logo:"https://brandlogos.net/wp-content/uploads/2022/07/airbnb-logo_brandlogos.net_vb6uh.png",
    company: "Airbnb",
    role: "Product Engineer",
    qualities: ["user-first", "global"],
    salaryPerHour: 80,
    location: "San Francisco, USA",
    isSaved: false
  }
];
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {jobs.map((elem)=>{
        return <Card company= {elem.company} role={elem.role} qualities={elem.qualities} salaryPerHour={elem.salaryPerHour} location={elem.location} isSaved={elem.isSaved} logo={elem.logo} />
      })}

    </div>
  )
}

export default App