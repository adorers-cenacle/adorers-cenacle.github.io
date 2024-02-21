
  
let currentlyReading = false;
let currentUtterance = null;

function speakText(text, form) {
  if (currentlyReading) {
    // Stop the current reading if it's already in progress
    window.speechSynthesis.cancel();
    currentlyReading = false;
  }

  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  let currentWordIndex = 0;
  currentlyReading = true;
  currentUtterance = utterance;

  utterance.onboundary = function (event) {
    if (!currentlyReading) {
      // Stop highlighting if reading is paused
      return;
    }

    const wordIndex = event.charIndex;
    const wordEndIndex = event.charIndex + event.charLength;

    // Highlight the current word being read
    const highlightedText =
      text.substring(0, wordIndex) +
      '<span style="background-color: yellow;">' +
      text.substring(wordIndex, wordEndIndex) +
      '</span>' +
      text.substring(wordEndIndex);

    form.querySelector('p').innerHTML = highlightedText;

    // Adjust the index for the next word
    currentWordIndex = wordEndIndex;
  };

  utterance.onend = function () {
    // Remove the highlight after reading is complete
    form.querySelector('p').innerHTML = text;
    currentlyReading = false;
  };

  window.speechSynthesis.speak(utterance);
}

function addListenButton(form, text) {
  const listenButton = document.createElement('button');
  listenButton.textContent = 'Listen to Vision';
  listenButton.addEventListener('click', function () {
    speakText(text, form);
  });
  form.appendChild(listenButton);

  const pauseButton = document.createElement('button');
  pauseButton.textContent = 'Pause';
  pauseButton.addEventListener('click', function () {
    if (currentUtterance) {
      window.speechSynthesis.pause();
      currentlyReading = false;
    }
  });
  form.appendChild(pauseButton);

  const unpauseButton = document.createElement('button');
  unpauseButton.textContent = 'Unpause';
  unpauseButton.addEventListener('click', function () {
    if (currentUtterance) {
      window.speechSynthesis.resume();
      currentlyReading = true;
    }
  });
  form.appendChild(unpauseButton);

  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', function () {
    window.speechSynthesis.cancel();
    currentlyReading = false;
    form.remove();
  });
  form.appendChild(cancelButton);
}


function dream1998() {
  var form = document.createElement('form');
  form.innerHTML = `
    <h2>Sacred Dream - August 1998</h2>
    <p>AUGUST 1998 

While asleep, I saw heaven opened and I saw the Almighty God 
sitting on His throne. 
He had in his right hand a chalice and in his left hand, a book. 
He rode towards me on the clouds. As he approached me, I felt 
terribly afraid, shivered and within me, my blood began to cloth. 
Then I noticed that the distance between his throne in the sky and 
the earth were I was, was so vast. When He finally got to were I was, 
he lifted up his right hand and poured the content of the chalice 
over the earth. Immediately, I noticed that the whole earth was 
filled with a large body of bloody water. The bloody sea was 
bubbling like water at 100 degrees Celsius.  
At this terrible sight, the vision faded from my sight. 
</p>
  `;
   addListenButton(form, form.querySelector('p').textContent.trim());
  document.body.appendChild(form);
}

function dreamJuly2000() {
  var form = document.createElement('form');
  form.innerHTML = `
    <h2>Sacred Dream - July 9, 2000</h2>
    <p>July 09, 2000
 
While asleep, I heard a very soft calm voice call out to me "Atem". Immediately, I recognized the voice that it was the Lord calling me and I answered "Yes Lord." 
When I answered the call, I immediately found myself standing at the church yard, in front of the Church. Then the Lord said to me "Look at the wall." I looked at the wall on my right carefully and the Lord questioned me saying "What have you seen?" 
I answered "A small cross with Jesus crucified on it". The Lord then said to me "Go and take it."  Immediately, I left for the crucifix. When I got close to the wall, I saw a great light from the wall. Within the light stood Jesus Christ. I realized that the entire wall was Jesus Christ himself filled with intense bright light. I also noticed that the wall was not build of blocks as I had earlier seen but only of light from Jesus Christ. The entire wall was filled with intense bright light. I saw Jesus standing within the light filled wall. His appearance was golden and the light of his countenance was so great to my sight.  
Then, I saw two golden hands protruding from the wall bearing the golden crucifix. Then the Lord said to me "stretch out your hands and receive it."  I stretch out my hands as instructed and opened my palms and the golden crucifix was placed in my palms.
Immediately as I received the crucifix into my palms, I noticed that the intensity of the light from the wall which was Christ himself increased. The beauty of his expression in my sight and the magnificent light from Him kept me in amazement. 
As I stood amazed, blood began to ooze from the crucifix in my palms. Then Jesus said to me "Drink the blood". Immediately I drank the blood from the cross as Jesus instructed me to do. 
The Lord then told me to bow prostrated three times and worship Him. I did and the Lord then made a solemn promise to me saying "Today, I shall grant you a great miracle and this will be the sign of my promise." 
Then He asked me to shake off my feet against the dust. I did and he gave me a sign saying this shall be the sign of my promise to you. Then, He told me to rise and go. </p>
  `;
   addListenButton(form, form.querySelector('p').textContent.trim());
  document.body.appendChild(form);
}

function dreamDecember2000() {
  var form = document.createElement('form');
  form.innerHTML = `
    <h2>Sacred Dream - December 11, 2000</h2>
    <p>December 11, 2000

 At about 10:00pm. I sat in front of our house and was praying with my head bowed low when suddenly, a breeze blew over me and I raised my head to see what it was. As I looked up to see what it was that blew pass by me, I saw the sky extremely brighter than I had ever seen. This strange sight pulled my attention to continue watching at the sky. As I watch on, I suddenly saw the moon coming out of the sky. I also noticed that there was a strange thing within the moon. It was a lions head as I finally saw it. This lions head began to move round and round within the moon. Finally after a number of turns, I saw the Holy Face of Jesus appearing from within the moon. It appeared fully and covered the whole face of the moon. His expression was filled with pains and sorrow. There were wounds all over his face and the wounds were all bleeding. At this sight, I was terrified and fell on my knees and began to pray and weep saying Lord Jesus have mercy on your people, Lord Jesus have mercy on your people. As I continued to pray this prayer, I saw later that his face had changed and there were no more bleeding wounds on his face again. His face was pure and shining with no spot or stain and his hair was looking very beautiful. At this sight, the vision faded from my sight and I head a voice say to me get up. Then I rose.
</p>
  `;
   addListenButton(form, form.querySelector('p').textContent.trim());
  document.body.appendChild(form);
}

function dreamNovember2010() {
  var form = document.createElement('form');
  form.innerHTML = `
    <h2>Sacred Dream -  November 9, 2010</h2>
    <p>November 9, 2010, 3:30am

In my vision, I heard the Lord saying to me My gift of marriage to man has lost its honor and value as I intended. The painful expressions of my face that you saw are equivalent to the pains couples are inflicting on my sacred heart. The bleeding wounds on my face that you saw, show the extend of infidelity that is existing amongst couples, broken homes and marriages, lack of parental hood in the family, and the absence of true love amongst the couples.  I want my church to take away this pain from my sacred heart, to restore the honor and value of marriage as I had from the beginning when I gave this sacred gift to man. Take this message to my church. As for you, set aside a day of fasting and prayer in your family. On this day, you and your family should fast and pray. On this day of family devotion, you and your wife should abstain from sex. This will enable you to bring up your family in the model of the Holy Family of Nazareth. You must keep this day sacred for the purpose of honoring and sanctifying your marriage and family before me. You should also keep your marriage bond secret. All families on earth should do the same in other to honor and maintain their marriages before me. Once every month, all couples within each community should assemble and pray together. Go and give this message to my church. </p>
  `;
   addListenButton(form, form.querySelector('p').textContent.trim());
  document.body.appendChild(form);
}


function dreamMay2011() {
  var form = document.createElement('form');
  form.innerHTML = `
    <h2>Sacred Dream - May 14, 2011</h2>
    <p>MAY 14, 2011 

On this day at 5:00am the following message came to me in a vision.  

I saw a book open and on the open page, I saw the following message;

Sale! The body of Christ.
The one who made it says; Christian marriage has become a sacrilege. Behold I want to make everything new. Many Christians are practicing Bigamy. The marriage devotion should be a sacramental. Many Christians now have no regards for the Ten Commandments. 
My Commandments should be framed in every home where every member of the household can behold them.</p>
  `;
  addListenButton(form, form.querySelector('p').textContent.trim());
  document.body.appendChild(form);
}


function dreamJuly2019() {
  var form = document.createElement('form');
  form.innerHTML = `
    <h2>Sacred Dream - July 28, 2019</h2>
    <p>July 28, 2019 

In my vision I saw the earth being destroyed by God. God cause the sun to emit extremely hot rays which were burning and killing every thing on earth. The heat rays also cause the earth to split into two halves and when this happened, I saw beneath the earth a huge sea of fire. Then I fell down on my knees and began to cry to God to have mercy on the world saying "Lord Jesus have mercy. Lord Jesus have mercy." As I was crying to Jesus, the destruction increased and the rays became more hotter. Then Jesus said to me "look over". I looked and saw something like a huge alter at the center of the earth. Beneath the alter was a shelter. I said to myself even if I run to the shelter, the heat rays will still destroy it and kill me. But as soon as I finished saying this, Jesus said to me "Atem run as fast as you can into the shelter otherwise the heat rays will kill you." I rose from my knees and ran very fast into the shelter. When I got inside I saw several people who had been saved from the destruction already inside. Then Jesus said to me "The cross I gave you is my message which I gave you to take to my church. Take the message to my church."
This vision occurred again twice two months later in different occasions. 

Copied
>The Apostolic Nuncio, Yaounde, 2012/2013
>The Bishops of the Ecclesiastical province of Bamenda, 2013
>The Ach Bishop of Douala, 2011
>The Moderator of the Presbyterian Church, Buea, 2014
>The Jesuit Community, St. Francis Catholic Church, Idimu, Lagos, Nigeria, 2011


Evaristus, Atemlefeh Mbea-Ncho </p>
  `;
  addListenButton(form, form.querySelector('p').textContent.trim());
  document.body.appendChild(form);
}


function dreamNovember2022() {
  var form = document.createElement('form');
  form.innerHTML = `
    <h2>Sacred Dream - November 2022</h2>
    <p>Some information about marriage and the devil goes here.</p>
  `;
  addListenButton(form, form.querySelector('p').textContent.trim());
  document.body.appendChild(form);
}
       
function dreamSacredSongs() {
  var form = document.createElement('form');
  form.innerHTML = `
    <h2>Sacred Dream - Sacred Songs</h2>
    <p>Some information about marriage and the devil goes here.</p>
  `;
  addListenButton(form, form.querySelector('p').textContent.trim());
  document.body.appendChild(form);
}
       
 // Example usage
dream1998();
dreamJuly2000();
dreamDecember2000();
dreamNovember2010();
dreamMay2011();
dreamJuly2019();
dreamNovember2022();
dreamSacredSongs();     
        