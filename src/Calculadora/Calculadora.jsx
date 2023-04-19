import React, { useState } from 'react'
import './Calculadora.css'
import PropTypes from 'prop-types' 

export const Calculadora = ({titulo}) => {
    
    const [result, setResult] = useState("");

    const handleClick = (event) => {
        setResult(result.concat(event.target.name));
    }

    const clear = () =>
    {
        setResult("");
    }

    const backspace = () =>
    {
        setResult(result.slice(0, - 1));
    }

    const calcular = () =>
    {
        setResult(eval(result));
    }
  
    return (

    <>
        <br /><br />
        <h1 className='h1-album'>{titulo}</h1>
        <br /><br />
        <div className='calculadora-app'>
            <div className='container-calc'>
                <form>
                    <input className='input-calc' type="text" value={result} />
                </form>

                <div className='teclas'>
                    <button className='highlight' onClick={clear} id='clear'>Clear</button>
                    <button className='highlight' onClick={backspace} id='backspace'>C</button>
                    <button className='highlight' name='/' onClick={handleClick}>&divide;</button>
                    <button name='7' onClick={handleClick}>7</button>
                    <button name='8' onClick={handleClick}>8</button>
                    <button name='9' onClick={handleClick}>9</button>
                    <button className='highlight' name='*' onClick={handleClick}>&times;</button>
                    <button name='4' onClick={handleClick}>4</button>
                    <button name='5' onClick={handleClick}>5</button>
                    <button name='6' onClick={handleClick}>6</button>
                    <button className='highlight' name='-' onClick={handleClick}>&ndash;</button>
                    <button name='1' onClick={handleClick}>1</button>
                    <button name='2' onClick={handleClick}>2</button>
                    <button name='3' onClick={handleClick}>3</button>
                    <button className='highlight' name='+' onClick={handleClick}>+</button>
                    <button name='0' onClick={handleClick}>0</button>
                    <button className='highlight' name='.' onClick={handleClick}>.</button>
                    <button className='highlight' onClick={calcular} id='resultado'>=</button>
                </div>
            </div>
        </div>
    </>    
  )
}

Calculadora.propTypes = {
    titulo: PropTypes.string.isRequired
}
