import React ,{useState  } from 'react';
import YogaBackgroundArt from '../../assets/Yoga background art.png';
import dashboard from '../../assets/dashboard.png';
import stresschecker from '../../assets/stresschecker.png';
import myday from '../../assets/myday.png';
import movements from '../../assets/movements.png';
import meditation from '../../assets/meditation.png';
import soundscape from '../../assets/soundscape.png';
import workrelief from '../../assets/workrelief.png';
import learnmore from '../../assets/stresschecker.png';
import userprofile from '../../assets/userprofile.png';
import stressfreezoneicon from '../../assets/stressfreezoneicon.png';
import { Link ,useNavigate} from 'react-router-dom';


const StressChecker = () => {
  const navigate = useNavigate();
    // Sample questions
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [answers, setAnswers] = useState([]);
    
      const questions = [
        "I eat at least one hot, balanced meal a day",
        "I get 7-9 hours of least at least four nights a week",
        "I exercise to the point of perspiration at least twice a week",
        "I have a network of friends, family and acquaintances on whom I can rely",
        "I am able to speak openly about my feelings when angry, stressed or worried",
        "I do something for fun at least once a week",
        "I take quiet time for myself during the day",
        "My income covers my daily living costs",
        "I am calm when I am kept waiting/stuck in traffic/late for an appointment",
        "I feel organised and in control",
        "I recognise when I am not coping well under pressure and I know how to deal with it",
        "On average how many cigarettes do you smoke per day?",
        "On average how often do you drink alcohol per week?",
        "On average I drink fewer than two cups of coffee (or tea or cola) a day",
        
      ];
    
      const options = [
        { value: 1, label: "Very Good" },
        { value: 2, label: "Good" },
        { value: 3, label: "Satisfactory" },
        { value: 4, label: "Bad" },
        { value: 5, label: "Very Bad" },
      ];
    
      const stressMapping = {
        1: 0,
        2: 25,
        3: 50,
        4: 75,
        5: 100,
      };
    
      const handleOptionSelect = (value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = value;
        setAnswers(updatedAnswers);
      };
    
      const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        }
      };
    
      const handlePrevious = () => {
        if (currentQuestion > 0) {
          setCurrentQuestion(currentQuestion - 1);
        }
      };
    
      const handleSubmit = () => {
        console.log("Submit button clicked");
    const totalStress = answers.reduce((total, answer) => total + stressMapping[answer], 0);
    const averageStress = (totalStress / answers.length);

    console.log(`Average Stress: ${averageStress}`);
        if (averageStress >= 0 && averageStress <= 10) {
          navigate("/levela"); // Redirect to low-stress page
        } else if (averageStress > 10 && averageStress <= 50) {
          navigate("/levelb"); // Redirect to moderate-stress page
        } else if (averageStress > 50 && averageStress <= 80) {
          navigate("/levelc"); // Redirect to high-stress page
        } else if (averageStress > 80 && averageStress <= 100) {
          navigate("/leveld"); // Redirect to very-high-stress page
        }
      };
  return (
    
    <div className=" min-h-[1100px] w-full  px-4 py-10 bg-gray-800">
          <img src={YogaBackgroundArt} alt=""  className="object-cover opacity-40 absolute pl-72 pt-8 w-auto h-auto size-full bg-no-repeat bg-cover bg-fixed pointer-events-none"/>
      <div className="flex w-full">
       
   {/* Sidebar */}
   <div className='flex'>
  <aside className=" fixed w-1/5 bg-gray-900 text-white p-9 rounded-md shadow-lg mt-5 ml-3 border-2 border-teal-400">
  <nav>
    <ul className="space-y-6 lg:space-y-10"> {/* Adds gap between the list items */}
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={dashboard} alt=""  />
  <Link to="/dashboard"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    DashBoard
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5 bg-teal-700 p-3 rounded-md'>
  <img src={stresschecker} alt="" />
  <Link to="/stresschecker"
    className="relative inline-block  hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Stress Checker
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={myday} alt=""  />
  <Link to="/myday"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    My Day
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={movements} alt=""  />
  <Link to="/movements"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Movements
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={meditation} alt=""  />
  <Link to="/meditation"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Meditation
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={soundscape} alt=""  />
  <Link to="/soundscape"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Soundscape
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={workrelief} alt=""  />
  <Link to="/workrelief"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Work Relief
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={learnmore} alt=""  />
  <Link to="/learnmore"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Learn More
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={userprofile} alt="" />
  <Link to="/userprofile"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
   User Profile
    </Link>
</div>

      </li>
    </ul>
  </nav>
</aside>
</div>


      {/* Main content area */}
        <main className="flex-1 p-6 rounded-md shadow-lg ml-80">
          {/* Top row */}
         <div className="bg-teal-800 p-4 shadow-md rounded-md mb-6">
          <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={stressfreezoneicon} alt=""  />
  <a
    href="#section1" 
    className="relative  font-bold text-3xl text-white ">
    Stress Free Zone
  </a>
</div>

          </div>

        
       
  {/* above */}
  <div className="bg-black/30 p-4 mb-10  shadow-md rounded-md border border-gray-300">
 
   <main className="w-full max-w-[800px] mx-auto text-center">
    <header className="py-px mt-8 text-base leading-6">
   
        <span className="text-3xl font-bold text-white">Find Your Path to Calm with </span>
        <span className="text-3xl font-bold text-green-500">Stress-Free Zone....</span>
        <h1 className='text-white text-xl mt-4 mb-4'>Please select most relevant answer </h1>
    </header>
    
    </main> 
    <div className="flex justify-center items-center mb-8">
      <div className="bg-white shadow-md rounded p-6 w-96 ">
     

        <p className="mb-4">{questions[currentQuestion]}</p>

        <div className="mb-4">
          {options.map((option) => (
            <label key={option.value} className="block mb-2">
              <input
                type="radio"
                name="answer"
                value={option.value}
                checked={answers[currentQuestion] === option.value}
                onChange={() => handleOptionSelect(option.value)}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-purple-500 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
   
  </div>

 

  
  

        </main>
      </div>
    </div>
  );
};

export default StressChecker;
