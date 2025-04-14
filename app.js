const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }
    
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("engineering college")){
        window.open("https://ait-tumkur.ac.in/", "_blank");
        speak("Akshaya institute of technology one of the best engineering college in karnataka...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }
    else if(message.includes("open instagram")){
        window.open("https://instagram.com", "_blank");
        speak("Opening instagram...")
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if(message.includes("how are you")){
        speak("I am doing well,thanks for asking...")
    }
    else if(message.includes("who are you?")){
        speak("I am jarvis,your personal voice assistant")
    }                
    


    else if(message.includes("programming tip")){
        speak("Keep functions short and focused on a single task for better readability and maintainability.")
    }
    
    else if(message.includes("tell me a joke")){
        speak("Why do Java developers wear glasses? Because they dont C#")
    }
    else if(message.includes('cricket')){
        window.open("https://en.wikipedia.org/wiki/Sachin_Tendulkar", "_blank");
        speak("here is the infomation ...")
    }
     else if(message.includes('believer song ')){
        window.open("https://www.youtube.com/watch?v=W0DM5lcj6mw", "_blank");
        speak("believer song playing ")
    }
    else if(message.includes('abdul kalam')){
        window.open("https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam", "_blank");
        speak(" here is the infomation ")
    }
    else if(message.includes("movie")){
        speak("KALKI AND KGF ARE BEST MOVIES")
    }
    else if(message.includes('music')){
        window.open("https://open.spotify.com/album/0I8IoS2SgNFT24TdTOAfOi?si=Bl5Y75DcRWWMXggXKO7R9Q", "_blank");
        speak(" here is your song ")

    }

   

    else {
        
        const finalText = "SORRY ,SAY IT AGAIN: " ;
        speak(finalText);
    }
}