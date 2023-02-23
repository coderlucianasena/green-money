import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import logo from './assets/images/logo-1.png';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( list );
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
      {/* <C.Logo>
        <img src={logo} className="App-logo" alt="logo" height="100"width="100"/>
      </C.Logo> */}
      <C.HeaderText>Sistema Financeiro <br/> Green Money</C.HeaderText> 
      </C.Header>
      <C.Body>
       {/* Área de informações */}

       {/* Área de inserção */}

       <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;