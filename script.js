var fortuneList = [
  'in the coming months, you will receive recognition for your dedication and hard work, leading to a well-deserved promotion or achievement.',
  'your ability to adapt to changing circumstances will open doors to new opportunities and unexpected adventures.',
  'a long-awaited journey you have been planning will bring you not only to your destination but also to personal growth and self-discovery.',
  'your creative ideas will find the perfect outlet, resulting in a project or endeavor that is both fulfilling and successful.',
  'patience is your key to success. Do not rush; let your plans mature, and you will see remarkable outcomes.',
  'you must prepare for a delightful surprise that will brighten your day and remind you that life is full of beautiful moments.',
  'your kind and selfless acts will create a ripple effect of goodwill, attracting positive energy into your life.',
  'new friends will enter your life, enriching your experiences and bringing fresh perspectives to your world.',
  'you will soon receive an unexpected invitation or opportunity that will open doors to new connections and personal growth.',
  'you will gain insights and understanding by embracing the moments of quiet reflection.'
];

function generate() {
  var name = document.getElementById('fortune-input').value;
  var output = document.getElementById('fortune-output');

  // check that there is an actual input
  if (name === ""){
  	output.textContent = "You must enter your name! How else can I tell your fortune?"

  } else{

	var randomFortuneIndex = Math.floor(Math.random() * fortuneList.length);
	  output.textContent = name + ', it looks like ' + fortuneList[randomFortuneIndex];
	  restyle(output);
	}

}
  	
  

function restyle(element) {
  var styles = {
    color: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')',
    fontSize: (Math.floor(Math.random() * 10) + 20) + 'px',
    fontStyle: (Math.random() < 0.5) ? 'normal' : 'italic' 
  };

  for (var property in styles) {
    element.style[property] = styles[property];
  }
}