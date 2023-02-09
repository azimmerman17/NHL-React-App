
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const ToggleButtons = ({ radioNme, setRadioNme, radios }) => {
  
    // const radios = [
    //   { nme: 'Divisional' },
    //   { nme: 'Wild Card' },
    //   { nme: 'Conference' },
    //   {nme: 'League'},
    //   // { nme: 'Playoffs' },
    // ];
  
    return (
      <>
        <ButtonGroup className='bg-white'>
          {
            radios.map((radio, i) => {
              const { nme} = radio
              return (
                <ToggleButton
                  key={`radio-${nme}`}
                  id={`radio-${nme}`}
                  type="radio"
                  variant={radioNme === nme ? 'outline-primary' : 'outline-secondary'}
                  name="radio"
                  value={nme}
                  checked={radioNme === nme}
                  onChange={(e) => setRadioNme(e.currentTarget.value)}
                >
                  {nme}
                </ToggleButton>
              )
            })
          }
        </ButtonGroup>
      </>
  )
}

export default ToggleButtons