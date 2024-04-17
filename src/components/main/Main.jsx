import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
   

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

            {!showResult?
            <>
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summerize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstrom team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>

                </div>
                </>
                : <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        
                        <p>{recentPrompt}</p>

                    </div>
                    <div className="result-data">

                        <img src={assets.gemini_icon} alt="" />
                        {loading?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>:  <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                       
                    </div>
                </div>
            }
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                           {input?<img onClick={()=>onSent()}src={assets.send_icon} alt="" />:null} 
                        </div>
                        
                    </div>
                    <p className='bottom-info'>
                            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps 
                        </p>
                </div>
            
        </div>

    </div>
  )
}

export default Main


// const Main = () => {
// 	const {
// 		onSent,
// 		recentPrompt,
// 		showResults,
// 		loading,
// 		resultData,
// 		setInput,
// 		input,
// 	} = useContext(Context);

//     const handleCardClick = (promptText) => {
// 			setInput(promptText);
// 		};
// 	return (
// 		<div className="main">
// 			<div className="nav">
// 				<p>Gemini</p>
// 				<img src={assets.user} alt="" />
// 			</div>
// 			<div className="main-container">
// 				{!showResults ? (
// 					<>
// 						<div className="greet">
// 							<p>
// 								<span>Hello , Dev </span>
// 							</p>
// 							<p>How Can i Help You Today?</p>
// 						</div>
// 						<div className="cards">
// 							<div
// 								className="card"
// 								onClick={() =>
// 									handleCardClick("Suggest Some Place To Visit In Kerala")
// 								}
// 							>
// 								<p>Suggest Some Place To Visit In Kerala </p>
// 								<img src={assets.compass_icon} alt="" />
// 							</div>
// 							<div
// 								className="card"
// 								onClick={() =>
// 									handleCardClick(
// 										"Brainstorm team bonding activities for our work retreat"
// 									)
// 								}
// 							>
// 								<p>Brainstorm team bonding activities for our work retreat </p>
// 								<img src={assets.message_icon} alt="" />
// 							</div>
// 							<div
// 								className="card"
// 								onClick={() =>
// 									handleCardClick("How to Create a Gyroscope using Disc?")
// 								}
// 							>
// 								<p>How to Create a Gyroscope using Disc?</p>
// 								<img src={assets.bulb_icon} alt="" />
// 							</div>
// 							<div
// 								className="card"
// 								onClick={() => {
// 									handleCardClick(
// 										"Create a Script for the youtube video about coding "
// 									);
// 								}}
// 							>
// 								<p>Create a Script for the youtube video about coding </p>
// 								<img src={assets.code_icon} alt="" />
// 							</div>
// 						</div>
// 					</>
// 				) : (
// 					<div className="result">
// 						<div className="result-title">
// 							<img src={assets.user} alt="" />
// 							<p>{recentPrompt}</p>
// 						</div>
// 						<div className="result-data">
// 							<img src={assets.gemini_icon} alt="" />
// 							{loading ? (
// 								<div className="loader">
// 									<hr />
// 									<hr />
// 									<hr />
// 								</div>
// 							) : (
// 								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
// 							)}
// 						</div>
// 					</div>
// 				)}

// 				<div className="main-bottom">
// 					<div className="search-box">
// 						<input
// 							onChange={(e) => {
// 								setInput(e.target.value);
// 							}}
// 							value={input}
// 							type="text"
// 							placeholder="Enter the Prompt Here"
// 						/>
// 						<div>
// 							<img src={assets.gallery_icon} alt="" />
// 							<img src={assets.mic_icon} alt="" />
// 							<img
// 								src={assets.send_icon}
// 								alt=""
// 								onClick={() => {
// 									onSent();
// 								}}
// 							/>
// 						</div>
// 					</div>
// 					<div className="bottom-info">
// 						<p>
// 							Gemini may display inaccurate info, including about people, so
// 							double-check its responses. Your privacy & Gemini Apps
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Main;