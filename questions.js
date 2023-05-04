let questions = [
  {
    question: "You are an accountant at a large firm and you notice some \
    discrepancies in the books. You confront your boss about them who tells \
    you to keep your mouth shut about it if you don't want to get fired. \
    What do you do?",
    options: [
      "Do as your boss says and sweep it under the rug even though you know it's wrong.",
      "Use the discrepancies as leverage against your boss.",
      "Stay silent but quit your job because you can't work at a crooked company.",
      "Report the discrepancies and risk losing your job because of it.",
    ],
  },
  {
    question: "You and your best friend are on a hike in the wilderness. You've \
    become desperately lost with limited supplies left and are afraid you may not \
    make it out alive. You come across another group of hikers who are also lost \
    and have run out of food and water. Your friend wants to help them, but you \
    know that doing so will mean you'll run out of supplies more quickly. What do \
    you do?",
    options: [
      "Help the hikers and share your supplies.",
      "Help the hikers but make them work for their share of your supplies.",
      "Leave the hikers and continue on your own.",
      "Help the hikers but only so that you can eat them if times get truly dire.",
    ],
  },
  {
    question: "You're a doctor in a small town, and you have two patients who are both \
    in desperate need of a rare heart medication. The problem is, you only have enough \
    of the medication to save one of the patients. What do you do?",
    options: [
      "Give the medication to the patient who is younger and has a better chance of survival.",
      "Give the medication to the patient who is older and has a family to support.",
      "Flip a coin to decide which patient gets the medication.",
      "Split the medication among both patients, knowing the chance of survival for each \
      is less than if they could have the full dose."
    ],
  },
  {
    question: "You are a lawyer defending a client you know to be guilty. Your client \
    is a single parent with a young child who will suffer greatly if the client is \
    found guilty. What do you do?",
    options: [
      "Defend the client to the best of your ability.",
      "Tell the truth to the court, regardless of the consequences.",
      "Find a way to defend the client without lying.",
      "Research good foster care programs and discuss worst-case scenarios with the parent.",
    ],
  },
  {
    question: "You witness a coworker stealing from the company. What do you do?",
    options: [
      "Report the theft to your supervisor without talking to your coworker first.",
      "Keep quiet and don't report the theft.",
      "Confront the coworker and ask them to return the stolen item, threatening to report \
      them to your supervisor.",
      "Confront the coworker and ask them to return the stolen item.",
    ],
  },
  {
    question: "You have the opportunity to purchase a piece of clothing made by a designer \
    known for unethical labor practices. What do you do?",
    options: [
      "Buy the clothing because you like it and don't think the designer's practices are that bad.",
      "Refuse to purchase the clothing because of the designer's unethical labor practices.",
      "Buy the clothing, but donate the same amount to a charity that supports workers' rights.",
      "Research the designer's labor practices more thoroughly before deciding.",
    ],
  },
  {
    question: "Your friend has been dating someone for a few months, but they haven't \
    been getting along well lately. They tell you that they think it's time to break up, \
    but are hesitant because their partner is going through a tough time at work. What \
    do you advise?",
    options: [
      "Encourage your friend to break up now before things get worse.",
      "Tell your friend to wait a little longer and see if things get better.",
      "Encourage your friend to try to work through things and stay together.",
      "Suggest that your friend try to help their partner with their work problems instead of breaking up."
    ],
  },
  {
    question: "You're driving down the highway when you notice a car swerve off the \
    road and into a ditch. You pull over and see that the driver is unconscious and \
    bleeding heavily. What do you do?",
    options: [
      "Call 911 and wait for an ambulance to arrive.",
      "Call 911 and then try to administer first aid yourself to stop the bleeding.",
      "Call 911 and then leave since you don't know first aid.",
      "Take the driver to the hospital in your own car."
    ],
  },
  {
    question: "You're at a restaurant with a group of friends when the bill comes. One \
    of your friends claims that they forgot their wallet and asks if you can cover their \
    portion of the bill. What do you do?",
    options: [
      "Cover their portion this time but make it clear that it's a one-time thing.",
      "Cover their portion this time but ask them to pay you back later.",
      "Cover their portion but only if they give you some collateral until they pay you back.",
      "Refuse to cover their portion and accuse them of lying about forgetting their wallet."
    ],
  },
  {
    question: "You're a supervisor at a manufacturing company. Your boss asks you to \
    cut corners on safety inspections to speed up production. What do you do?",
    options: [
      "Refuse and report your boss to HR.",
      "Agree to the request and keep quiet about it.",
      "Agree to the request, but anonymously report it to HR.",
      "Agree to the request, but tell your colleagues to be extra cautious.",
    ],
  },
  {
    question: "You are a new ruler of a small kingdom. You want to make sure that you \
    maintain power and control over your subjects, but you also want them to be prosperous \
    and happy. One of your advisors suggests a plan to build a grand palace that would \
    cost a significant amount of money and require a large portion of your people's labor. \
    Another advisor suggests investing in the economy and creating more job opportunities \
    to increase the overall wealth of your kingdom. What do you do?",
    options: [
      "Build the palace to show off your power and wealth. Your subjects should be honored \
      to contribute to such a grand project.",
      "Invest in the economy to increase the overall wealth of your kingdom. A strong \
      economy will make your people happy and less likely to revolt.",
      "Take both options into account and try to find a balance between them.",
      "Choose neither option and focus on military expansion. Conquering other kingdoms is \
      the only way to ensure long-term power and security."
    ],
  },
  {
    question: "You are the CEO of a company facing financial difficulties. To avoid \
    bankruptcy, you decide to lay off a significant portion of your employees. What do \
    you do?",
    options: [
      "Lay off the employees with the least experience.",
      "Lay off the employees with the lowest performance ratings.",
      "Lay off the employees with the highest salaries.",
      "Lay off the employees who you think are least loyal to the company.",
    ],
  },
  {
    question: "You are the CEO of a large corporation that has recently been accused of \
    committing human rights abuses in a foreign country. The allegations are damaging to \
    your company's reputation, and you fear that they will lead to financial losses. What \
    do you do?",
    options: [
      "Launch an internal investigation to determine if the allegations are true, and if \
      they are, take steps to rectify the situation and compensate the victims.",
      "Publicly deny the allegations and discredit the sources making them, while \
      continuing business as usual.",
      "Pay off the accusers to make the problem go away and avoid any negative publicity.",
      "Acknowledge the allegations and apologize, while taking steps to improve your \
      company's practices and prevent future abuses.",
    ],
  },
  {
    question: "You're a manager at a software development company. One of your \
    employees has been accused of stealing company code and using it for their own \
    personal gain. After a thorough investigation, you discover that they did indeed \
    take the code. What do you do?",
    options: [
      "Terminate the employee immediately and press charges.",
      "Give the employee a warning and place them on probation.",
      "Ask the employee to explain themselves and consider their side of the story.",
      "Ignore the situation and hope it doesn't happen again.",
    ],
  },
  {
    question: "You're the leader of a country that's being threatened by a neighboring \
    nation. The neighboring nation has demanded that you hand over a group of refugees \
    who have fled to your country seeking asylum. The refugees would likely face \
    persecution or even death if they were returned. What do you do?",
    options: [
      "Hand over the refugees to protect your country and its citizens.",
      "Refuse to hand over the refugees and risk war with the neighboring nation.",
      "Negotiate with the neighboring nation to find a compromise.",
      "Sneak the refugees out of the country and relocate them elsewhere.",
    ],
  }
];
