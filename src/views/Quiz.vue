
<script setup>
import { ref, computed } from 'vue'

const questions = ref([
  {
    question: "Where Barbados is situated?",
    answer: 3,
    options:[
      'Africa',
      "Europe",
      "Oceania",
      'Carribean'
    ],
    selected: null
  },
  {
    question: "What is the smallest state on Earth?",
    answer: 1,
    options:[
      'San-Marino',
      "Vatican",
      "Singapore",
      'East Timor'
    ],
    selected: null
  },
  {
    question: "Which continent has parts of it on all 4 Earth's hemispheres?",
    answer: 2,
    options:[
      'Eurasia',
      "Australia",
      "Africa",
      'Antarctica'
    ],
    selected: null
  },
  {
    question: "Which state is Theocratic Republic?",
    answer: 2,
    options:[
      'Saudi Arabia',
      "Brunei",
      "Iran",
      'Vatican'
    ],
    selected: null
  },
  {
    question: "What is the longest mountain range?",
    answer: 1,
    options:[
      'Himalayas',
      "Mid-ocean Ridge",
      "Cordilleras",
      'Atlas Ridge'
    ],
    selected: null
  },
  {
    question: "At which point of altitude above sea level conventionally space begins?",
    answer: 0,
    options:[
      '100 km',
      "50 km",
      "85 km",
      '300 km'
    ],
    selected: null
  },
  {
    question: "A disputed territory between Japan and Russia",
    answer: 0,
    options:[
      'Kuril Isles',
      "Sakhalin",
      "Kamchatka",
      'Hokkaido'
    ],
    selected: null
  },
  {
    question: "What is Geography?",
    answer: 3,
    options:[
      'A discipline which studies both inner and outer layer of Earths surface',
      "A discipline which studies interactions between biological species and its habitats",
      "A discipline which studies disposition of all things",
      'A discipline which studies spacial peculiarities of Earths outer layer'
    ],
    selected: null
  },
  {
    question: "Kamerun used to be which European power colony?",
    answer: 2,
    options:[
      'French',
      "German",
      "Both German and French",
      'British'
    ],
    selected: null
  },
  {
    question: "Which lake is situated in Eurasia and has both fresh and salt water parts?",
    answer: 3,
    options:[
      'Aral Sea',
      "Caspian Sea",
      "Lake Baikal",
      'Lake Balkhash'
    ],
    selected: null
  },
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
	let value = 0
	questions.value.map(q => {
		if (q.selected != null && q.answer == q.selected) {
			value++
		}
	})
	return value
})

const getCurrentQuestion = computed(() => {
	let question = questions.value[currentQuestion.value]
	question.index = currentQuestion.value
	return question
})

const SetAnswer = (e) => {
	questions.value[currentQuestion.value].selected = e.target.value
	e.target.value = null
}

const NextQuestion = () => {
	if (currentQuestion.value < questions.value.length - 1) {
		currentQuestion.value++
		return
	}
	
	quizCompleted.value = true
}
</script>

<template>
	<transition-group tag="main" appear name="quizz" class="app">
		
		
		<section class="quiz" v-if="!quizCompleted">
			<div class="quiz-info">
				<span class="question">{{ getCurrentQuestion.question }}</span>
				<span class="score">Score {{ score }}/{{ questions.length }}</span>
			</div>
			
			<div class="options">
				<label 
					v-for="(option, index) in getCurrentQuestion.options" 
					:for="'option' + index"
          :key="index" 
					:class="`option ${
						getCurrentQuestion.selected == index 
							? index == getCurrentQuestion.answer 
								? 'correct' 
								: 'wrong'
							: ''
					} ${
						getCurrentQuestion.selected != null &&
						index != getCurrentQuestion.selected
							? 'disabled'
							: ''
					}`">
					<input 
						type="radio" 
						:id="'option' + index" 
						:name="getCurrentQuestion.index" 
						:value="index" 
						v-model="getCurrentQuestion.selected" 
						:disabled="getCurrentQuestion.selected"
						@change="SetAnswer" 
					/>
					<span>{{ option }}</span>
				</label>
			</div>
			
			<button 
				@click="NextQuestion" 
				:disabled="!getCurrentQuestion.selected">
				{{ 
					getCurrentQuestion.index == questions.length - 1 
						? 'Finish' 
						: getCurrentQuestion.selected == null
							? 'Select an option'
							: 'Next question'
				}}
			</button>
		</section>

		<section v-else class="res">
			<h2>You have finished the quiz!</h2>
			<p>Your score is {{ score }}/{{ questions.length }}</p>
		</section>
	</transition-group>
</template>

<style scoped>


.app {
  color: white;
  margin-top: 25vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	height: 100vh;
}

.title {
	
	font-size: 2rem;
	margin-bottom: 2rem;
}

.quiz {
	background-color: #4600a9;
  border-radius: 4px;
	padding: 1rem;
	width: 100%;
	max-width: 640px;
}

.quiz-info {
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
}

.quiz-info .question {
	color: white;
	font-size: 1.25rem;
}

.quiz-info.score {
	color: #FFF;
	font-size: 1.25rem;
}

.options {
	margin-bottom: 1rem;
}

.option {
	padding: 1rem;
	display: block;
	background-color: #271c36;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.option:hover {
	background-color: #2d213f;
}

.option.correct {
	background-color: #2cce7d;
}

.option.wrong {
	background-color: #ff5a5f;
}

.option:last-of-type {
	margin-bottom: 0;
}

.option.disabled {
	opacity: 0.5;
}

.option input {
	display: none;
}

button {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background-color: #2cce7d;
	color: #2d213f;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.2rem;
	border-radius: 0.5rem;
}

button:disabled {
	opacity: 0.5;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
}

p {
	color: #8F8F8F;
	font-size: 1.5rem;
	text-align: center;
}
/* animations */

.quizz-enter-from{
	opacity: 0;
	transform: translateX(100px)
}
.quizz-enter-to{
	opacity: 1;
	transform: translateX(0px)
}
.quizz-enter-active{
	transition: all 1s ease;
}
.quizz-leave-from{
	opacity: 1;
	transform: translateX(0px)
}
.quizz-leave-to{
	opacity: 1;
	transform: translateX(100px)
}
.quizz-leave-active{
	transition: all 1s ealeave
}


</style>