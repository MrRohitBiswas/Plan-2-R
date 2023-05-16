function getBotResponse(input) {
    function sendMail(email){

      fetch(`/sendMail?email=${email}`)
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

    }




    if (/love tour cirkit|&#128150;/i.test(input)) {
        return "We're glad to hear that you love Tour Cirkit! We strive to provide the best travel experiences. How can I assist you further?";
      }else if (/^(hi|hello|hey|greetings|salut|hola)$/i.test(input)) {
        return `${input.charAt(0).toUpperCase() + input.slice(1)}! How can I assist you today?`;
      }else if (/services|service|offer|offerings|advantages|benefits|options|option|programs|program|packages|package|deliver|deliverable|treatment|deliveries|intervention|performance|task|duties|duty|assignment|job|project|engagement|contract|output|caregiving|supervision|attendance|expertise|consultation|advisory|guidance|management|solution/i.test(input)) {
        return "You can explore our services page on our website to discover the various travel services we offer. Simply visit <a href='https://www.tourcirkit.com/Services'>Services</a> to learn more.";
      } else if (/contact|connect|get in touch|reach out|get hold of|communicate|help|interact|establish contact|contact us|drop a line|message|give us a shout|get ahold of us|get in reach|get in touch with us|establish communication|establish connection|reach us|assist|reach us out|connect to us/i.test(input)) {
        return "We value your interest! Please provide your email, and our team will be happy to connect with you shortly. You can also reach out to us at <a href='https://www.tourcirkit.com/Contact'>Contact Us</a> for immediate assistance.";
      } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)) {
        sendMail(input);
        return "You should receive an email from us &#128512;";
      }else if (/thank|gracias|merci|ty/i.test(input)) {
        return "You're welcome! If you have any more questions or need further assistance, feel free to ask. Have a great day!";
      } else if (/bye|tata|ta ta|take care|see you|see ya/i.test(input)) {
        return "Goodbye! It was a pleasure assisting you. If you need any help in the future, don't hesitate to reach out. Take care and lots of love to you too!";
      }  else if (/top|best|place|hill|beach|historical|cheap|lovely|view|tour/i.test(input)) {
        return `Sure! I can help you with that. Please click on this <a href='https://www.tourcirkit.com/search/${input}'>link</a> to navigate.`;
      }  else {
        return "Try asking something else!";
    }
}