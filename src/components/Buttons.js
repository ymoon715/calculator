import React, { Component }from 'react';
import './Buttons.css'
import Display from './Display';
import Input from './Input';


class Buttons extends Component {
    state = { register: '0', input: '0', disabled: false, eqdis: false}

    numberHandler = this.numberHandler.bind(this);
    plusminusHandler = this.plusminusHandler.bind(this);
    acHandler = this.acHandler.bind(this);
    zeroHandler = this.zeroHandler.bind(this);
    mdHandler = this.mdHandler.bind(this);
    pointHandler = this.pointHandler.bind(this);

    acHandler() {
        this.setState({ register: '0', input: '0', disabled: false})
    }
    
    plusminusHandler(pm) {
        const currentRegister = this.state.register;
        const currentInput = this.state.input;
        const newRegister = currentRegister.substring(0, currentRegister.length -1)
        if (currentRegister.slice(-1) === '-' || currentRegister.slice(-1) === '+'||currentRegister.slice(-1) === '/' || currentRegister.slice(-1) === '*'){
            this.setState({ register: newRegister + pm.target.value, input: pm.target.value})
        } else if (currentRegister.indexOf('=') >= 0){
            this.setState({ register: currentInput + pm.target.value, input: pm.target.value, disabled: false, eqdis: true})
        } else {
            this.setState({ register: currentRegister + pm.target.value, input: pm.target.value, disabled: false, eqdis: true})
        }
    }
    
    mdHandler(md) {
        const currentRegister = this.state.register;
        const currentInput = this.state.input;
        const newRegister = currentRegister.substring(0, currentRegister.length -1)
        if (currentRegister.slice(-1) === '-' || currentRegister.slice(-1) === '0' || currentRegister.slice(-1) === '+'||currentRegister.slice(-1) === '/' || currentRegister.slice(-1) === '*'){
            this.setState({ register: newRegister + md.target.value, input: md.target.value})
        } else if (currentRegister.indexOf('=') >= 0){
            this.setState({ register: currentInput + md.target.value, input: md.target.value, disabled: false, eqdis: true})
        } else {
            this.setState({ register: currentRegister + md.target.value, input: md.target.value, disabled: false, eqdis: true})
        }
    }
    equalHandler() {
        const currentRegister = this.state.register;
        const inpLength = this.state.length + 1;
        const disDec = currentRegister.slice(currentRegister.length - inpLength)
        this.setState({ register: currentRegister + "=" + eval(currentRegister), input: eval(currentRegister), eqdis: true})
        
        if (disDec.indexOf('.') >=0) {
            this.setState({ disabled: true})
        } else {
            this.setState({ disabled: false})
        }
    }
    
    numberHandler(num) {
        const currentRegister = this.state.register;
        const currentInput = this.state.input;
        if (currentInput === '0' || currentInput === 0) {
            this.setState({ register: num.target.value, input: num.target.value})
        } else if (currentRegister.indexOf('=') >= 0){
            this.setState({ register: currentInput + num.target.value, input: currentInput + num.target.value, disabled: false, eqdis: false})
        } else if (currentInput === '+' || currentInput === '-' || currentInput === '/' || currentInput === '*') {
            this.setState({ register: currentRegister + num.target.value, input: num.target.value, eqdis: false})
        } else {
            this.setState({ register: currentRegister + num.target.value, input: currentInput + num.target.value, eqdis: false})
        }
    }

    zeroHandler() {
        const currentRegister = this.state.register;
        const currentInput = this.state.input;
        
        if (currentInput === '0' || currentInput === 0) {
            this.setState({ register: '0', input: '0', eqdis: false})
        }  else if(currentRegister.indexOf('=') >=0){
            this.setState({ register: currentInput + '0', input: currentInput + '0'})
        }else if (currentInput === '+' || currentInput === '-' || currentInput === '/' || currentInput === 'x') {
            this.setState({ register: currentRegister + '0', input: '0', eqdis: false})
        } else {
            this.setState({ register: currentRegister + '0', input: currentInput + '0' , eqdis: false})
        }
    }

    pointHandler() {
        const currentRegister = this.state.register;
        const currentInput = this.state.input;
        const inpLength = this.state.length + 1;
        const disDec = currentRegister.slice(currentRegister.length - inpLength)
       
        if (currentInput === '0' || currentInput === 0) {
            this.setState({ register: currentRegister + '.', input: currentInput + '.', disabled: true})
        } else if (this.state.input.toString().indexOf('.') !== -1 ){
            this.setState({ input: currentInput })
        } else if (currentInput === '+' || currentInput === '-' || currentInput === '/' || currentInput === 'x') {
            this.setState({ register: currentRegister + '0.', input: '0.',disabled: true})
        } else if(disDec.indexOf('.') >= 0){
            this.setState({register: currentRegister + '.', input: currentInput+'.', disabled: true})
        } else {
            this.setState({ register: currentRegister + '.', input: currentInput + '.' , disabled: true})
        }
    }
    
    render() {
        const disab = this.state.register;
        return (
            <div>
                <Display {...this.state} />
                <Input {...this.state} />
                
                <button className="ACButton" onClick={this.acHandler}>AC</button>
        <button className="DM" value='*' disabled={(disab[0]==='0' || disab[0] === '/' || disab[0] === '+' || disab[0] ==='-')   && disab.length <= 1} onClick={this.mdHandler}>x</button>
                <button className="DM" value='/' disabled={(disab[0]==='0' || disab[0] === '*' || disab[0] === '+' || disab[0] ==='-') && disab.length <= 1} onClick={this.mdHandler}>/</button>
                <button className="Num" value='7' onClick={this.numberHandler}>7</button>
                <button className="Num" value='8' onClick={this.numberHandler}>8</button>
                <button className="Num" value='9' onClick={this.numberHandler}>9</button>
                <button className="DM"  value='-' onClick={this.plusminusHandler}> - </button>
                <button className="Num" value='4' onClick={this.numberHandler}>4</button>
                <button className="Num" value='5' onClick={this.numberHandler}>5</button>
                <button className="Num" value='6' onClick={this.numberHandler}>6</button>
                <button className="DM" value='+' disabled={disab.slice(-1)==='+'} 
                        onClick={this.plusminusHandler}> + </button>
                <button className="Num" value='1' onClick={this.numberHandler}>1</button>
                <button className="Num" value='2' onClick={this.numberHandler}>2</button>
                <button className="Num" value='3' onClick={this.numberHandler}>3</button>
                <button className="Zero" disabled={disab.slice(-2).indexOf('+') === 0 && disab.slice(-2).indexOf('0') === 1} onClick={this.zeroHandler}>0</button>
                <button className="Num" disabled={this.state.disabled} onClick={this.pointHandler}> . </button>
                <button className="Equal" disabled={this.state.eqdis}
                        onClick={this.equalHandler.bind(this)}>=</button>
            </div>
        );
    }
}

export default Buttons;