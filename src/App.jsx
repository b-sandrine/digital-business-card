import { FaTwitterSquare, FaInstagramSquare, FaEnvelope, FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image of someone"></img>
      <div className="personal-details">
          <h3 className="full-names">Sandrine Dushimimana</h3>
          <h6 className="role">Front end developer</h6>
          <p className="website">sandrine.website</p>
      </div>

      <div className="buttons">
        <button className="button-first">
          <span className='icon'>
            <FaEnvelope />
          </span>
          Email
        </button>
        <button className="button-second">
          <span className='icon'>
            <FaLinkedin />
          </span>
          LinkedIn
          </button>
      </div>

      <div className="description">
        <div className="description-one">
          <h3 className="heading">About</h3>
          <p className="descripton-details">
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
        </div>
        <div className="description-two">
          <h3 className="heading">Interests</h3>
          <p className="descripton-details">
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="social-icons">
          <span className="icon">
            <FaTwitterSquare />
          </span>
          <span className="icon">
            <FaFacebookSquare />
          </span>
          <span className="icon">
            <FaInstagramSquare />
          </span>
          <span className="icon">
            <FaGithubSquare />
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
