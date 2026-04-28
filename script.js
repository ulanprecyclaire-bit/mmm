let rotation = 0;
let score = 0;

/* 🔐 LOGIN */
function unlock() {
  const p = document.getElementById("pass").value;

  if (p === "Babi 0328") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  } else {
    document.getElementById("msg").innerHTML = "❌ Incorrect, try again";
  }
}

function togglePass() {
  const i = document.getElementById("pass");
  i.type = i.type === "password" ? "text" : "password";
}

/* 🎡 WHEEL */
const options = ["💋 Kiss","🤗 Hug","😏 Bite","💜 You decide","😢 Sad","🔁 Try again"];

function spinWheel() {
  const w = document.getElementById("wheel");

  rotation += Math.random()*360 + 1800;
  w.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    let r = options[Math.floor(Math.random()*options.length)];
    document.getElementById("wheelResult").innerHTML = r;
    showOverlay(r);
  }, 4000);
}

/* 💬 TRUTH / DARE */
const truths = [
  "When did you like me? 💜","What do you love most? 💙","Favorite memory? 💜","Do you miss me? 💙",
  "Who loves more? 😏","First impression? 💜","Future plan? 💙","What makes you smile? 💜",
  "Jealous? 😳","Nickname? 💙","Thought when seeing me? 💜","Cutest thing? 💙",
  "When miss me? 💜","Song for me? 🎵","Change anything? 💙","Best trait? 💜",
  "What makes us special? 💙","When love started? 💜","Never told me? 😳","Future vision? 💙"
];

const dares = [
  "Send I miss you 💜","Call me 📞","Heart spam 💙","3 compliments 😏","Selfie 📸",
  "Say I love you 💜","Type my name 💙","Voice note 🎧","Flirt 10 sec 😳","Pickup line 😂",
  "Say something sweet 💜","Pretend hug 🤗","Emoji combo 💙","Love message 💜","What you miss 💙",
  "Cute message 💬","Favorite memory 💙","Say you're mine 😏","Describe me 💜","Promise 💙"
];

function pickTruth(){
  document.getElementById("toldResult").innerHTML =
    truths[Math.floor(Math.random()*truths.length)];
}

function pickDare(){
  document.getElementById("toldResult").innerHTML =
    dares[Math.floor(Math.random()*dares.length)];
}

/* 💜 HEART */
function spawnHeart(){
  const h=document.createElement("div");
  h.innerHTML="💜";
  h.style.position="absolute";
  h.style.left=Math.random()*90+"%";

  document.getElementById("heartArea").appendChild(h);

  setTimeout(()=>h.remove(),2000);

  h.onclick=()=>{
    score++;
    document.getElementById("score").innerHTML=score;
    h.remove();
  };
}
setInterval(spawnHeart,800);

/* 💥 OVERLAY */
function showOverlay(t){
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("overlayText").innerHTML=t;

  setTimeout(()=>{
    document.getElementById("overlay").classList.add("hidden");
  },2000);
}
