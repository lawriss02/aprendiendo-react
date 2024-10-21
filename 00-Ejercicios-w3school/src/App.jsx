import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './AppEx.css'
import {ExerciseCard} from './ExerciseCard.jsx'
import { AsideNav } from './AsideNav.jsx'


const exercises = [
  {
    id: '0',
    enunciado: 'The <button> element should do something when someone clicks on it. Try to fix it!',
    ex_input: (
      <>
      <div>
        <span> &lt;button </span> 
        <input type="text" />
        <span> = "alert('Hello')"&gt;Click me.&lt;/button&gt; </span>
      </div>
      </>
    ),
    answer: ['onclick']
  },
  {
    id: '1',
    enunciado: 'When the button is clicked, the function "myFunction" should be executed.',
    ex_input: (
      <>
      <div>
        <span>&lt;button </span>
        <input type="text" />
        <span>="</span>
        <input type="text" />
        <span>"&gt;Click me.&lt;/button&gt;</span>
      </div>
      </>
    ),
    answer: ['onclick', 'myFunction']
  },
  {
    id: '2',
    enunciado: 'The <div> element should turn red when someone moves the mouse over it.',
    ex_input: (
      <>
        <div>
        <span>&lt;div </span>
        <input type="text" />
        <span>="this.style.backgroundColor='red'"&gt;myDIV.&lt;/div&gt;</span>
      </div>
      </>
    ),
    answer: ['onmouseover']
  }
]

function App() {
  return (
    <>
    <div className='global'>

    
    <nav className='Nav'>
      {exercises.map(({id}) => (
        <AsideNav
          key={id}
          id={id}
          exercises={exercises}
        ></AsideNav>
      ))}
    </nav>
    <section className='App'>
      {
        exercises.map(({id, enunciado, ex_input, answer}) => (
          <ExerciseCard
            key={id}
            id={id}
            enunciado={enunciado}
            exercise_input={ex_input}
            answer={answer}
            initialAnswer={true}
          ></ExerciseCard>
          
        ))
      }
      
    </section>
    </div>
    </>
  )
}

export default App




