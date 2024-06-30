import '../../CSS/Mains/Home.css'

const MainHome = () => {
  return (
    <div className='p-5 m-5'>
      <div className="card m-5">
    <div className="card-img"><div>
      <img className='image' src="https://static.vecteezy.com/system/resources/previews/026/133/560/original/hamburger-food-isolated-on-transparent-background-burger-generative-ai-png.png" width={200} alt="" />
      </div></div>
    <div className="card-title">Product title</div>
    <div className="card-subtitle">Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    <hr className="card-divider" />
    <div className="card-footer">
        <div className="card-price me-3"><span>$</span> 123.45</div>
        <button className="card-btn">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
        </button>
    </div>
</div>
    </div>
  )
}

export default MainHome
