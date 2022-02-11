import React , {useState} from 'react';
import CurrencyDropdown from '../currency-dropdown/currency-dropdown-component';
import classes from  './convert-section.module.css';
import { FaExchangeAlt } from 'react-icons/fa';
import { Button } from 'semantic-ui-react';


function ConvertSection() {

  const [showResult, setshowResult] = useState(false);

  const [fromCurrency, setfromCurrency] = useState(null);
  const [toCurrency, settoCurrency] = useState(null);

  const [amount, setamount] = useState(-1); 

  const [conversionValue, setconversionValue] = useState(0);

  const [isInvalidInput, setisInvalidInput] = useState(false);

  const convertCurrency = async () => {
    if(fromCurrency === null || toCurrency === null || amount=== -1){
      return
    }

    const jsonData = await fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=92b962e0-8460-11ec-a770-697cd1f97345&base_currency=${fromCurrency}`)

    const result = await jsonData.json()

    setconversionValue(result.data[toCurrency]);
    
    setshowResult(true);



  }

  const updateInput = (e) => {
    let newValue = parseFloat(e.target.value);

    if(isNaN(newValue)) {
      setisInvalidInput(true)
    }
    else {
      setisInvalidInput(false)
      setamount(newValue)
    }
  }

  const switchCurrencies = () => {
    let tmp = fromCurrency ;
    setfromCurrency(toCurrency);
    settoCurrency(tmp);
    setconversionValue(1/conversionValue)
  }
  return <div className={classes.convertSection}>
    <div className={classes.convertInputSection}>
      <div id="amount-field" className={classes.field}>
          <label><b>Amount</b></label>
          <input type="text"  placeholder='Amount'   className={classes.amountInputField}  onChange={updateInput}/>
          <p className={classes.invalidErrorMessage} style={{
            display:(isInvalidInput)? "block" : "none",
            color:"red",
            alignSelf: "self-start"
          }}>Please Input a valid amount</p>
        </div>

        <div id="from-currency-field" className={classes.field}>
          <label><b>From</b></label>
          <Button size='big' className={classes.currencyDropdownContainer} ><CurrencyDropdown className={classes.currencyDropdown} setvalue={setfromCurrency} value={fromCurrency}></CurrencyDropdown></Button>
        </div>

        <button   className={classes.field} className={classes.switchBtn} onClick={switchCurrencies}>
          <FaExchangeAlt></FaExchangeAlt>
        </button>

        <div id="to-currency-field" className={classes.field}>
          
          <label><b>To</b></label>
          <Button size='big' className={classes.currencyDropdownContainer}><CurrencyDropdown className={classes.currencyDropdown} setvalue={settoCurrency} value={toCurrency}></CurrencyDropdown></Button>
          
          {!showResult && <div className={classes.convertBtn}><Button primary  size='large'  id="convert_btn" onClick={convertCurrency}>Convert</Button></div>}
        </div>

    </div>
      

      <div className={classes.resultSection} style={{
        display:(showResult)? "flex" : "none"
      }}>   
        <div className='result-right'>
          <div>
            Result
          </div>
          <div>

          {amount}&nbsp; <b> {fromCurrency} </b>&nbsp; = &nbsp;<span className={classes.outputConversion}> {(amount * conversionValue).toFixed(4)}&nbsp; <b>{toCurrency}</b></span>
          </div>
        </div>

        <div className={classes.resultLeft}>
          <Button id="view-transfer-btn" className={classes.viewTransferBtn}>View Transfer Quote</Button>
        </div>
      </div>
  </div>;
}

export default ConvertSection;
