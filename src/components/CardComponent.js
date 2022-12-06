import "./CardComponent.css";
const CardComponent = ({ teammate }) => {
    const { photo, name, company, designation, linkedinProfile } = teammate;
    return (
      <div id="card" className="card">
        <div className="banner-img"></div>
        <img className="photo" alt='profile image' src={photo}></img>
        <h1>{name}</h1>
         <p class="designation">{designation}</p>
         <p>{company}</p>
         <div className="linkedin-info">
             <a href={linkedinProfile}><i className="fa fa-linkedin"></i></a>  
         </div>
      </div>
      
    );
  };
  
export default CardComponent;
  