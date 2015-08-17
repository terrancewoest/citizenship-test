new Vue({
	el: '#app',

	data: {
		questions : [
			{
				question: 'What is the supreme law of the land?',
				answer: 'The Constitution',
				number: 1,
			},
			{
				question: 'What does the Constitution do?',
				answer: 'Defines the Government <br/> Sets up the Government <br/> Protects the basic rights of Americans.',
				number: 2,
			},
			{
				question: 'The idea of self government is in the first three words of the Constitution. What are these words?',
				answer: '"We the people.."',
				number: 3,
			},
			{
				question: 'What is an amendment?',
				answer: 'And addition or change to the Constitution',
				number: 4,
			},
			{
				question: 'What do we call the first 10 amendments to the Constitution?',
				answer: 'The Bill of Rights.',
				number: 5,
			},
			{
				question: 'What is one right or freedom from the first ammendment.',
				answer: 'Freedom of Speech <br/> Freedom of Religion <br/> Fredom of Assembly<br/> Freedom of Press<br/> Freedom to Petition the Government.',
				number: 6,
			},
			{
				question: 'How many amendments does the Constitution currently have',
				answer: '27',
				number: 7,
			},
			{
				question: 'What did the Decleration of Independence do?',
				answer: 'Declared America\'s independence from Great Britian',
				number: 8,
			},
			{
				question: 'What are 2 rights in the deleration of independence.',
				answer: 'Life <br/>  Liberty <br/> Pursuit of Happiness',
				number: 9,
			},
			{
				question: 'What is Freedom of Religion?',
				answer: 'You can practice any Religion or not practice a Religion.',
				number: 10,
			},
			{
				question: 'What is the economic system in the US?',
				answer: 'Capitalis and Market Economy',
				number: 11,
			},
			{
				question: 'What is the rule of Law?',
				answer: 'Everyone must follow the law including Leader, Government, etc.. No one is above it.',
				number: 12,
			},
			{
				question: 'Name 1 branch or part of the government.',
				answer: 'Executive (President) <br/> Legislative (Congress) <br/> Judical (Supreme Courts)',
				number: 13,
			},
			{
				question: 'What stops 1 branch of government from becoming to powerful?',
				answer: 'Checks and Balances <br/> Seperation of powers.',
				number: 14,
			},
			{
				question: 'Who is in charge of the Executive Branch?',
				answer: 'The President.',
				number: 15,
			},
			{
				question: 'Who makes federal laws?',
				answer: 'Congress <br/> Senate and House of Representatives <br/> U.S or National Legislature',
				number: 16,
			},
			{
				question: 'What are 2 parts of the U.S. Congress?',
				answer: 'The Senate and the House of Representatives.',
				number: 17,
			},
			{
				question: 'How many U.S. Senators are there?',
				answer: '100',
				number: 18,
			},
			{
				question: 'We elect a U.S. Senator for how many years?',
				answer: '6 years.',
				number: 19,
			},
			{
				question: 'Who is one of your State Senators now?',
				answer: 'Jeff Merkley <br/> Ron Wyden',
				number: 20,
			},
			{
				question: 'The House of Representatives has how many voting members?',
				answer: '435',
				number: 21,
			},
			{
				question: 'We elect a U.S. Representative for how many years?',
				answer: '2',
				number: 22,
			},
			{
				question: 'What is the name of your U.S. Representative?',
				answer: 'Suzanne Bonamici',
				number: 23,
			},
			{
				question: 'Who does a U.S. Senator represent?',
				answer: 'All people of the state.',
				number: 24,
			},
			{
				question: 'Why do some States have more Representatives?',
				answer: 'Because of the state\'s population.',
				number: 25,
			},
			{
				question: 'We elect a President for how many years?',
				answer: '4',
				number: 26,
			},
			{
				question: 'In what month do we vote for President?',
				answer: 'November',
				number: 27,
			},
			{
				question: 'What is the name of the current President of the United States?',
				answer: 'Barack Obama',
				number: 28,
			},
			{
				question: 'What is the name of the vice President of the United States.',
				answer: 'Joseph Biden',
				number: 29,
			},
			{
				question: 'If the president can no longer server, who becomes President?',
				answer: 'The Vice President.',
				number: 30,
			},
			{
				question: 'If the President and the Vice President can no longer serve, who becomes President?',
				answer: 'The Speaker of the House.',
				number: 31,
			},
			{
				question: 'Who is the commander-in-cheif of the military?',
				answer: 'The President.',
				number: 32,
			},
			{
				question: 'Who signs bills to becomes laws.',
				answer: 'The President.',
				number: 33,
			},
			{
				question: 'Who Vetoes bills?',
				answer: 'The President.',
				number: 34,
			},
			{
				question: 'What does the President\'s cabinet do?',
				answer: 'Advises the President.',
				number: 35,
			},
			{
				question: 'What are 2 Cabinet level positions?',
				answer: 'Secretary of State <br/> Secretary or the Treasury <br/>Secretary of Agriculture <br/> Secretary of Commerce <br/> Secretary of Defense <br/> Secretary of Education <br/> Secretary of Energy <br/> Secretary of Health and Human Services <br/> Secretary of Homeland Security  <br/> Secretary of Housing and Urban Development <br/> Secretary of the Interior <br/> Secretary of Labor <br/> Secretary of Transportation <br/> Secretary of Veterans affairs <br/>Attorney General <br/>Vice President',
				number: 36,
			},
			{
				question: 'What does the Judical Branch do?',
				answer: 'Reviews Laws<br/> Explains Laws<br/>Resolves Disputes(Disagreements)<br/>Decides if a law goes agains the Constitution',
				number: 37,
			},
			{
				question: 'What is the highest court in the United States?',
				answer: 'The Supreme Court.',
				number: 38,
			},
			{
				question: 'How many Justices are on the supreme court?',
				answer: '9',
				number: 39,
			},
			{
				question: 'Who is the Cheif Justice of the United States now?',
				answer: 'John Roberts',
				number: 40,
			},
			{
				question: 'Under our Constitution some powers belong to the Federal Government. What are they?',
				answer: 'To Print Money<br/>To Declare War<br/>To Create an Army<br/>To Make Treaties.',
				number: 41,
			},
			{
				question: 'Under our Constitution some powers belong to the State Government. What are they?',
				answer: 'Give a Driver\'s License<br/>Provide Schooling and Education<br/>Provide Protection(Police)<br/>Provide Saftey(Fire Department)<br/>Approve Zoning and Land Use',
				number: 42,
			},
			{
				question: 'Who is the Governor of the state now?',
				answer: 'Kate Brown',
				number: 43,
			},
			{
				question: 'What is the capital of your state?',
				answer: 'Salem.',
				number: 44,
			},
			{
				question: 'What are the two major political parties in the united states?',
				answer: 'Democrats and Republicans',
				number: 45,
			},
			{
				question: 'What is the politcal party of the current President?',
				answer: 'The Democratic Party.',
				number: 46,
			},
			{
				question: 'What is the name of the Speaker of the House of Representatives right now?',
				answer: 'John Boehner',
				number: 47,
			},
			{
				question: 'There are four ammendments to the Constitution of who can vote. Describe one of them?',
				answer: 'Citizens 18 and older can vote.<br/>You don\'t have to pay a tax (poll tax) to vote.<br/>Any Citizen can Vote (Women and Men). <br/>A male citizen of any race can vote.',
				number: 48,
			},
			{
				question: 'What is one reponsibility that is only for United States Citizens',
				answer: 'To Vote in a federal election<br/>To serve on a jury.',
				number: 49,
			},
			{
				question: 'Name one right for only United States Citizens',
				answer: 'To Vote in a Federal Election.<br/>Run for federal office.',
				number: 50,
			},
			{
				question: 'What are 2 rights of everyone living in the United States?',
				answer: 'Freedom of Expression<br/>Freedom of Speech<br/>Freedom of Assembly<br/>Freedom to Petition the Government<br/>Freedom of Worship<br/>The right to bear Arms.',
				number: 51,
			},
			{
				question: 'What do we show loyalty to when we say the pledge of allegiance',
				answer: 'The Flag<br/>The United States',
				number: 52,
			},
			{
				question: 'What is one promise you make when you become a united states citizen.',
				answer: 'To serve (do important work for) the nation (if needed)<br/>Give up loyalty to other countries<br/>Defend the Constitution and laws of the United States<br/>Obey the laws of the United States.<br/>Serve in the US military (If needed)<br/>Be loyal to the United States',
				number: 53,
			},
			{
				question: 'How old do citizens have to be to vote for the President.',
				answer: '18 and older.',
				number: 54,
			},
			{
				question: 'What are two ways that americans can participate in their democracy.',
				answer: 'Vote<br/>Join a political party<br/>Help with a campaign<br/>Join a Civic group<br/>Join a community group.<br/>Give an elected official your opinion on an issue.<br/>Call senators and representatives.<br/>Run for office.<br/>Right to a newspaper',
				number: 55,
			},
			{
				question: 'When is the last day you can send in federal income tax forms.',
				answer: 'April 15th',
				number: 56,
			},
			{
				question: 'When must all men register for the selective services.',
				answer: 'At age 18<br/>Between 18 and 26',
				number: 57,
			},
			{
				question: 'What is one reason Colonists came to America?',
				answer: 'Freedom<br/>Political Liberty<br/>Religious Freedom<br/>Economic Opportunity<br/>Practice their Religion<br/>Escaper Persecution',
				number: 58,
			},
			{
				question: 'Who lived in America before the Europeans arrived?',
				answer: 'Native Americans<br/>American Indians',
				number: 59,
			},
			{
				question: 'What group of people was taken to America and sold as slaves?',
				answer: 'Africans<br/>People from Africa.',
				number: 60,
			},
			{
				question: 'Why did the Colonists fight the British?',
				answer: 'High Taxes<br/>Because the British Army stayed in their houses (boarding, quartering)<br/>Because they didn\'nt have self government.',
				number: 61,
			},
			{
				question: 'Who wrote the Decleration of Independence?',
				answer: 'Thomas Jefferson',
				number: 62,
			},
			{
				question: 'When was the Decleration of Independence adopted?',
				answer: 'July 4th, 1776',
				number: 63,
			},
			{
				question: 'There were 13 origional States. Name three.',
				answer: 'New Hampshire<br/>Massachusettes<br/>Rhode Island<br/>Connecticut<br/>New York<br/>New Jersey<br/>Pennsylvania<br/>Delaware<br/>Maryland<br/>Virginia<br/>North Carolina<br/>South Carolina<br/>Georgia',
				number: 64,
			},
			{
				question: 'What happened at the Constitutional Convention?',
				answer: 'The Constitution was written.<br/>The Founding Fathers wrote the Constitution.',
				number: 65,
			},
			{
				question: 'When was the Constitution written?',
				answer: '1787',
				number: 66,
			},
			{
				question: 'The Federalists Papers supported the passage of the U.S. Constitution. Name one of the writers.',
				answer: 'James Madison<br/>Alexander Hamilton<br/>John Jay<br/>Publius',
				number: 67,
			},
			{
				question: 'What is one thing Benjamin Franklin is famous for?',
				answer: 'U.S. Diplomat<br/>Oldest member of the Constitutional Convention<br/>First Post Master General of the United States<br/>Writer of the "poor richards alamnac"<br/>Started the first free libraries.',
				number: 68,
			},
			{
				question: 'Who is the "father" of our country.',
				answer: 'George Washington',
				number: 69,
			},
			{
				question: 'Who was the first President?',
				answer: 'George Washington',
				number: 70,
			},
			{
				question: 'What territory did the United States by from France in 1803?',
				answer: 'The Louisiana Territory<br/>Louisiana',
				number: 71,
			},
			{
				question: 'Name one war fought by the United States in the 1800\'s?',
				answer: 'War of 1812.<br/>Mexican American War<br/>Civil War<br/>Spanish American War',
				number: 72,
			},
			{
				question: 'Name the U.S. war against the North and the South.',
				answer: 'The Civil War<br/>The War between states.',
				number: 73,
			},
			{
				question: 'Name one problem that led to the Civil War.',
				answer: 'Slavery<br/>Economic Reasons<br/>States\' rights',
				number: 74,
			},
			{
				question: 'What was one important thing that Abraham Lincoln did?',
				answer: 'Freed the slaves (Emancipation Proclamation)<br/>Saved (or preserved) the Union<br/>Let the United States during the Civil War.',
				number: 75,
			},
			{
				question: 'What did the Emancipation Proclamation do?',
				answer: 'Freed the slaves<br/>Freed the slaves in the Confederacy<br/>Freed slaves in the Confederate states.<br/>Freed slaves in most Southern states.',
				number: 76,
			},
			{
				question: 'What did Susan B. Anthony do?',
				answer: 'Fought for women\'s rights.<br/>Fought for civil rights.',
				number: 77,
			},
			{
				question: 'Name one war that was fought by the United States in the 1900\'s',
				answer: 'World War I<br/>World War II<br/>Korean War<br/>Vietnam War<br/>(Persian) Gulf War',
				number: 78,
			},
			{
				question: 'Who was the President during World War I?',
				answer: 'Woodrow Wilson',
				number: 79,
			},
			{
				question: 'Who was the President during the Great Depression and World War II?',
				answer: 'Franklin Roosevelt',
				number: 80,
			},
			{
				question: 'Who did the United States fight in World War II?',
				answer: 'Japan, Germany, and Italy',
				number: 81,
			},
			{
				question: 'Before he was President, Eisenhower was a general. What war was he in?',
				answer: 'World War II',
				number: 82,
			},
			{
				question: 'During the Cold War, what was the main concern of the United States?',
				answer: 'Communisim.',
				number: 83,
			},
			{
				question: 'What movement tried to end racial discrimination?',
				answer: 'civil rights (movement)',
				number: 84,
			},
			{
				question: 'What did Martin Luther King, Jr. do?',
				answer: 'Fought for civil rights<br/>Worked for equality for all Americans.',
				number: 85,
			},
			{
				question: 'What mahor event happened on September 11, 2001, in the United States.',
				answer: 'Terrorists attacked the United States.',
				number: 86,
			},
			{
				question: 'Name one American Indian tribe in the United States.',
				answer: 'Cherokee<br/>Navajo<br/>Sioux<br/>Chippewa<br/>Choctaw<br/>Pueblo<br/>Apache<br/>Iroquois<br/>Creek<br/>Blackfeet<br/>Seminole<br/>Cheyenne<br/>Arawak<br/>Shawnee<br/>Mohegan<br/>Huron<br/>Oneida<br/>Lakota<br/>Crow<br/>Teton<br/>Hopi<br/>Inuit',
				number: 87,
			},
			{
				question: 'Name one of the two longest rivers in the United States.',
				answer: 'Missouri (River)<br/>Mississippi (River)',
				number: 88,
			},
			{
				question: 'What ocean is on the West Coast of the United States?',
				answer: 'Pacific (Ocean)',
				number: 89,
			},
			{
				question: 'What ocean is on the East Coast of the United Sates?',
				answer: 'Atlantic (Ocean)',
				number: 90,
			},
			{
				question: 'Name one U.S. territory.',
				answer: 'Puerto Rico<br/>U.S. Virgin Islands<br/>American Samoa<br/>Norther Mariana Islands<br/>Guam',
				number: 91,
			},
			{
				question: 'name one state that borders with Canada.',
				answer: 'Maine<br/>New Hampshire<br/>Vermont<br/>Pennsylvania<br/>Ohio<br/>Michigan<br/>Minnesota<br/>North Dakota<br/>Montana<br/>Idaho<br/>Washington<br/>Alaska',
				number: 92,
			},
			{
				question: 'Name one state that borders with Mexico.',
				answer: 'California<br/>Arizona<br/>New Mexico<br/>Texas',
				number: 93,
			},
			{
				question: 'What is the capital of the United States?',
				answer: 'Washington D.C.',
				number: 94,
			},
			{
				question: 'Where is the Statue of Liberty?',
				answer: 'New York (Harbor)<br/>Liberty Island',
				number: 95,
			},
			{
				question: 'Why does the flag have 13 stripes?',
				answer: 'Because there were 13 origional colonies.<br/>Becuase the stripes represent the origional colonies.',
				number: 96,
			},
			{
				question: 'Why does the flag have 50 stars?',
				answer: 'Because there is one star for each state.<br/>Because each star represents a state<br/>Because there are 50 states.',
				number: 97,
			},
			{
				question: 'What is the name of the national anthem?',
				answer: 'The Star-Spangled Banner',
				number: 98,
			},
			{
				question: 'When do we celebrate independence day?',
				answer: 'July 4',
				number: 99,
			},
			{
				question: 'Name two national holidays.',
				answer: 'New Year\'s Day<br/>Martin Luther King, Jr. Day<br/>Presidents\' Day<br/>Memorial Day<br/>Independence Day<br/>Labor Day<br/>Columbus Day<br/>Veterans Day<br/>Thanksgiving Day<br/>Christmas',
				number: 100,
			},
		],
		usedAnswers: [],
		currentQuestion: '',
		currentAnswer: '',
		currentNumber: '',
		questionCount: 0,
		testSize: '',
		score: 0,
		passed: true,

		// Data for hiding and showing different screens.
		hideIntroScreen: false,
		hideTestScreen: true,
		hideResultsScreen: true,

		// Data for hiding different parts of the test screen.
		hideAnswer: true,
		hideButton: false,
		
	},

	methods: {

		/**
		 * All Intro screen functions!
		 */
		beginTest: function() {
			if(!this.testSize) {
				return;
			}
			this.nextQuestion();
			this.hideIntroScreen = true;
			this.hideTestScreen = false;
		 	this.hideResultsScreen = true;
		},

		/**
		* All test screen functions!
		*/
		showAnswer: function() {
			this.hideAnswer = false;
			this.hideButton = true;
		},
		correctAnswer: function() {
			this.score = this.score + 1;
			this.nextQuestion();
		},
		wrongAnswer: function() {
			this.nextQuestion();
		},

		nextQuestion: function() {
			this.hideAnswer = true;
			this.hideButton = false;
			if (this.questionCount == this.testSize) {
				this.endTest();
				return;
			}
			this.questionCount = this.questionCount + 1;
			this.updateQuestion();
		},

		updateQuestion: function() {
			var length = this.questions.length;
			var key = Math.floor(Math.random()*length); // Random number between 0 and the total amount of questions.

			this.currentQuestion = this.questions[key].question;
			this.currentAnswer = this.questions[key].answer;
			this.currentNumber = this.questions[key].number;
			this.removeOldQuestion(this.questions[key], key);
		},
		getRandomKey: function(length) {
			return Math.floor(Math.random()*length);
		},
		removeOldQuestion: function(question, index) {
			var newQuestions = this.questions;
			newQuestions.splice(index, 1);
			this.questions = newQuestions;
			this.usedAnswers.push(question);
		},
		resetQuestions: function() {
			this.questionCount = 0;
			this.questions = this.usedAnswers;
			this.usedAnswers = [];
		},
		endTest: function() {
			if ( (parseInt(this.score) / parseInt(this.testSize)) >= (6 / 10) ) {
				this.passed = true;
			} else {
				this.passed = false;
			}
			this.hideIntroScreen = true;
			this.hideTestScreen = true;
			this.hideResultsScreen = false;
		},
		/**
		* All results screen functions!
		*/
		resetEverything: function() {
			this.hideIntroScreen = false;
			this.hideTestScreen = true;
			this.hideResultsScreen = true;
			this.questionCount = 0;
			this.score = 0;

			this.questions = this.questions.concat(this.usedAnswers);
			this.usedAnswers = [];
			console.log(this.questions);
			console.log(this.usedAnswers);
		},
	}
});