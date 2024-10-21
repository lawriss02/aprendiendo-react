import { useState } from 'react'

export function AsideNav ({ id, exercises}) {

    const resetSelectEx = () => {
        exercises.forEach(element => {
            let ex = element.id
            if (document.getElementById('bt-'+ex).classList.contains('ex-selected')) {
                document.getElementById('bt-'+ex).classList.remove('ex-selected'); // Remove the class if present
              }
        })
    }


    const changeExercise = () => {

        resetSelectEx();
        exercises.forEach(element => {
            let ex = element.id
            
            if (ex != id){
                document.getElementById(element.id).style.visibility = "hidden";

            }else{
                document.getElementById(element.id).style.visibility = "visible";
            }
            
        });

        document.getElementById('bt-'+id).classList.toggle('ex-selected');

        
    }

    return(
    <button className='ex-nav' id={`bt-${id}`} onClick={changeExercise}>Exercise {id}</button>
    )
}