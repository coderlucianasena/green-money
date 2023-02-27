import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/inputArea';
import github from './assets/images/github.png';
import linkedin from './assets/images/linkedin.png';
// import logo from './assets/images/logo-1.png';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList( (list) );
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
      {/* <C.Logo>
        <img src={logo} className="App-logo" alt="logo" height="100"width="100"/>
      </C.Logo> */}
      <C.HeaderText>Sistema Financeiro <br/> Green Money</C.HeaderText> 
      </C.Header>
      <C.Body>

       <InfoArea 
       currentMonth={currentMonth}
       onMonthChange={handleMonthChange}
       income={income}
       expense={expense}
       />

      <InputArea onAdd={handleAddItem} />

       <TableArea list={filteredList} />

      </C.Body>
      <C.Footer>

      <a href='https://github.com/englucianasena' target='blank'>
      <img src={github} 
      className="App-logo" 
      alt="logo" 
      height="50"
      width="50"
      />
      </a>
      <a href='https://www.linkedin.com/in/englucianasena/' target='blank'>
        <img src={linkedin} 
        className="App-logo" 
        alt="logo" 
        height="50"
        width="50"
        />
      </a>
      
      </C.Footer>
    </C.Container>
  );
}

export default App;