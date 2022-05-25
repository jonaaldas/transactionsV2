import { useEffect } from 'react';
import { Button ,ButtonGroup } from 'react-bootstrap'
import { useTransactions } from '../context/TranContext';
import {useNavigate} from 'react-router-dom'
function FilterButtons() {
  const { tran, setFilteredItems ,activeButtons, setActiveButtons, filteredItems} = useTransactions()

  useEffect(() => {
    if(activeButtons === ''){
      setFilteredItems(tran)
      return
    }
    const filter = tran.filter(tran => tran.transaction.toLowerCase().includes(activeButtons))
    setFilteredItems(filter)
  },[activeButtons])

  const showHowmanyBuyers = (tran) => {
    const newArr = tran.filter(each => {
      if (each.transaction.toLowerCase() === 'buyer') {
        return each
      }
    })
    return newArr.length
  }

  const showHowmanySellers = (tran) => {
    const newArr = tran.filter(each => {
      if (each.transaction.toLowerCase() === 'seller') {
        return each
      }
    })
    return newArr.length
  }

  return (  
    <div className="container my-12">
    <div className='flex w-fit '>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="secondary"
          onClick={() => setActiveButtons('')}
        >
          All {tran.length}
        </Button>
        <Button
          variant="secondary"
          onClick={() => setActiveButtons('buyer')}
        >
          Buyers {showHowmanyBuyers(tran)}
        </Button>

        <Button
          variant="secondary"
          onClick={() => setActiveButtons('seller')}
        >
          Sellers {showHowmanySellers(tran)}
        </Button>
      </ButtonGroup>
    </div>
  </div>
  );
}

export default FilterButtons;