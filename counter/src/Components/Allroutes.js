import React from 'react';
import Counter from '../Pages/Counter';
import Stopwatch from '../Pages/Stopwatch/Stopwatch';
import Timer from '../Pages/Timer';
import Todo from '../Pages/Todo/Todo';
import Homepage from '../Pages/Homepage';
import Advancetimer from '../Pages/Advancetimer';
import {Routes,Route} from 'react-router-dom'
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/advancetimer' element={<Advancetimer />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
