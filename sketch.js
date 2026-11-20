let numoflets = 23;
let letters = new Array(numoflets);
let trigger = 0;
let grab = 0;
let openIndex = -1;
let hand;

let senders = [
  "Leah Gelfand",
  "Maggie BG",
  "self",
  "Eden Cha",
  "Jamie Kruse",
  "Leslie Kepner",
  "Ms Massoff",
  "Margaret O Sullivan",
  "Ellie Marchessault",
  "Lots of love,\nMargaret",
  "Mark + Mai\n€50 enclosed",
  "Dr. Ibokette",
  "Edie Harrington",
  "XOXO,\nJackie",
  "Carmen\n(P.S, my gift sucks bc I\nknew you were too\ncool for anything I bought)",
  "Pat, Karen, Luke\nBrickley, Jennifer, Laurie\n+ Bean",
  "Biz O Sullivan",
  "Anna Scales",
  "Denise Lim",
  "Gyun Hur",
  "Todd R Young",
  "Ivonne Borrero",
  "Osco Pharmacy"
];

let date = [
  "2023",
  "2023",
  "2021",
  "2024",
  "2026",
  "2025",
  "2025",
  "2022",
  "2025",
  "2026",
  "2025",
  "2025",
  "2025",
  "2025",
  "unknown",
  "2025",
  "June 13th, 25.",
  "unknown",
  "2026",
  "2026",
  "Friday, June 6, 2025",
  "3/5/2010",
  "2021"
];

let contents = [
  "My dearest John, HAPPY 16th!!\nI have enjoyed your company and your general\nawesomeness for almost 1/3 of our lives!!",
  "Happy birthday silly pants!\nJohn you are so funny so awesome so epic and I am\nso greatful that youre my friend. I love you sooo much John-face",
  "Dear John,\nToday is June 17, 2021. Im in eighth grade,\nI get my second COVID vaccination tomorrow, and Lorde\nis about to come out with a new album. Im five foot five.\nMy closest friends are nicole, eden, & Tija.\nI hope youre taller, cooler, smarter, and happier.",
  "Dear John\nHi. Guessing you will trash this before\nyou read it but its worth writing I guess.\nI dont miss you. I guess a little\nmaybe. I just wanted you to know not a day has gone by without\nme thinking about you. I just moved and\nrealized you will probably never meet this\nnew place. Uh thanks for making me who I am\ntoday, wish I could have spent my highschool\nwith you. See you in the halls?",
  "Sustainable Systems - Have A good Summer",
  "John,\nThank you SO much for all your help\nthis year with APAH graphics!\nI feel like youve become my unofficial TA\nthis semester! Best of luck at Parsons!",
  "dearest John,\nYou are one of a kind!! I am so proud of you!\nI have enjoyed watching you grow\nand explore these past few years!",
  "I hope you can get to come see us\nat our house in Passage West. There are lots of cows\nin the field behind and the garden is getting too big for\nus to manage. We inherited our neighbours dog\nBailey who looks like Lassie! But he can be very bold\nand hard to get in at night when he is roaming.",
  "John, I m so grateful we reconnected in senior year\nWe were such an amazing duo.\nI m really just so grateful that we\nstill get along so well and just our\nvibe is so amazing. love you so freaking much.",
  "To John,\nEnjoy the last of your teen days.\nHope your summer is colourful",
  "Isosongo-o... Thank you for helping",
  "Hello John, Thank you very much for your help\nand professionalism...\nMuch appreciated. Have a wonderful summer",
  "happy graduation!",
  "Happy birthday, Babe!\nThanks for being you.",
  "Dear John\nHoly shit you are 18!!!\nYou are one of the funniest kindest and coolest people\nI know. You deserve the WORLD!! So never\never settle for less! Have a good birthday!\nlove,",
  "Congratulations John.\nWe are all so proud of you. You pushed\nthrough when the going got rough.\nWe can t wait to see what the\nnext year brings your way.",
  "Happy Graduation!",
  "Happy 18th Birthday!",
  "Congrats on finishing the semester!",
  "Have a good summer!",
  "John O Donovan\nRecipient of the Liv Pangburn Memorial Scholarship",
  "CABOT KINDERGARTEN PLACEMENT PROFILE\nStudent Name: John Patrick O Donovan\nDate of Birth: 7/19/2007\nPreschool: Parkside\nSpecial Parent Requests: Julia (From Parkside)",
  "COVID-19 Vaccination Record Card\nLast Name: O Donovan\nFirst Name: John\nDate of birth: 7/19/07\n1st Dose COVID-19 Pfizer 5/22/21\n2nd Dose COVID-19 Pfizer 6/18/21"
];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < numoflets; i++) {
    letters[i] = new Envelope(random(100, width - 100), random(100, 350));
  }
  hand = new Hand(300, height - 100);
}

function draw() {
  background(240);
  fill("#ADD8E6");
  rect(400, 300, 800, 600);

  trigger = 0;
  openIndex = -1;

  for (let i = 0; i < numoflets; i++) {
    letters[i].update();
    letters[i].display();
    letters[i].move();

    if (letters[i].open) {
      trigger++;
      openIndex = i;
    }
  }

  hand.body();
  if (grab == 1) {
    hand.move();
  }

  if (trigger > 0 && openIndex !== -1) {
    push();
    noStroke();
    fill(255, 255, 255, 235);
    rect(width / 2, height / 2, width - 50, height - 50);

    fill("black");
    textSize(18);
    text(date[openIndex], width / 2 - width / 4, height / 2 - 220);

    textSize(20);
    text(contents[openIndex], width / 2, height / 2);

    textSize(18);
    text("- " + senders[openIndex], width / 2 + width / 4, height / 2 + 200);
    pop();
  }
}

class Envelope {
  constructor(x, y) {

    this.x = x;
    this.y = y;
    this.open = false;
    this.speedX = random([-1, 1]);
    this.speedY = random([-1, 1]);
  }

  display() {
    stroke(  color(''#84a5b0));
    if (!this.open) {
      fill("#ffb7ce");
      rect(this.x, this.y, 100, 80);
      triangle(this.x, this.y, this.x + 50, this.y - 40, this.x - 50, this.y - 40);
      fill("#ADD8E6");
      circle(this.x,this.y,10);
    } else {
      //fill("white");
      rect(this.x, this.y, 100, 80);
      triangle(this.x, this.y - 80, this.x + 50, this.y - 40, this.x - 50, this.y - 40);
      triangle(this.x, this.y, this.x + 50, this.y - 40, this.x - 50, this.y - 40);
      
    }
  }

  update() {
    if (
      hand.x > this.x - 50 &&
      hand.x < this.x + 50 &&
      hand.y > this.y - 40 &&
      hand.y < this.y + 40
    ) {
      this.open = true;
      this.speed = 0;
    } else {
      this.open = false;
    }
  }

  move() {
    if (!this.open) {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x <= 60 || this.x >= width - 60) {
        this.speedX *= -1;
      }
      if (this.y <= 60 || this.y >= 350) {
        this.speedY *= -1;
      }
    }
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    if (grab == 0) {
      grab = 1;
    }
  }
}

function papabearpaw(x, y, character) {
  if (character == 1) {
    push();
    noStroke();
    fill(235, 212, 169);
    ellipse(300 + x, y + 500, 150, 900);
    fill("wheat");
    ellipse(300 + x, y + 30, 40, 50);

    push();
    translate(310 + x, 200);
    ellipse(30, y - 160, 40, 50);
    pop();

    push();
    translate(230, 100);
    ellipse(30, y - 60, 40, 50);
    pop();

    push();
    translate(265, 140);
    ellipse(-30, y - 60, -50, 40);
    pop();

    push();
    translate(395, 140);
    fill("wheat");
    ellipse(-30, y - 60, -50, 40);
    pop();

    ellipse(300, y + 100, 120, 120);
    pop();

    push();
    noStroke();
    rectMode(CENTER);
    fill("black");
    translate(0, 450);
    rect(300, y, 150, 500);
    pop();
  }
}

class Hand {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = -2;
    this.character = 1;
  }

  body() {
    papabearpaw(width /400, this.y, 1);
  }

  move() {
    this.y += this.speed;
    if (this.y <= 100) {
      this.speed = abs(this.speed);
    }
    if (this.y >= height - 100) {
      this.y = height - 100;
      this.speed = -abs(this.speed);
      grab = 0;
    }
  }
}
