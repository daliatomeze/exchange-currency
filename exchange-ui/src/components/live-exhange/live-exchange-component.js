import {DeleteOutlined} from '@ant-design/icons/lib/icons';
import React, {useEffect, useState} from 'react';
import ToggleButton from 'react-toggle-button'
import {Button} from 'semantic-ui-react';
import AddNewCurrencyDropDown from '../add-new-currency-dropdown/add-new-currency-dropdown-component';

import CurrencyDropdown from '../currency-dropdown/currency-dropdown-component';
import "./live-exchange-component.css"
function LiveExhnage() {

    const [data,
        setdata] = useState([]);

    const [baseCurrency,
        setbaseCurrency] = useState("USD");
    const [currencies,
        setcurrencies] = useState(["EUR", "ILS"]);

    const [historyData,
        sethistoryData] = useState({});

    const [toggleInverse,
        settoggleInverse] = useState(false);

    const [editEnabled,
        seteditEnabled] = useState(false);

    const fetchData = async(currency = "USD") => {

        function getYesterdayDate() {
            let s = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);

            return s.getFullYear() + '-' + ((s.getMonth() < 10)
                ? ('0' + (s.getMonth() + 1))
                : (s.getMonth() + 1)) + '-' + ((s.getDate() < 10)
                ? '0' + s.getDate()
                : s.getDate());
        }

        try {
            const jsonData = await fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=92b962e0-8460-11ec-a770-697cd1f97345&base_currency=${currency}`)
            const result = await jsonData.json()
            setdata(result.data)

            const jsonHistoryData = await fetch(`https://freecurrencyapi.net/api/v2/historical?apikey=92b962e0-8460-11ec-a770-697cd1f97345&base_currency=${currency}&date_from=${getYesterdayDate()}`)
            console.log(`https://freecurrencyapi.net/api/v2/historical?apikey=92b962e0-8460-11ec-a770-697cd1f97345&base_currency=${currency}&date_from=${getYesterdayDate()}`)
            const resultHistory = await jsonHistoryData.json()

            sethistoryData(resultHistory.data)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        fetchData()
    }, []);

    const showChangeRate = (curr) => {
        if (!historyData || Object.keys(historyData).length === 0) {
            return ""
        }
        const before = historyData[Object.keys(historyData)[0]][curr]
        const after = historyData[Object.keys(historyData)[1]][curr]

        let per = (((after - before) / before) * 100);
        if (toggleInverse) 
            per = -per;
        
        return ((per < 0)
            ? "-"
            : "") + '%' + Math.abs(per.toFixed(6))
    }

    const loadData = (curr) => {
        if (currencies.includes(curr)) {
            let currIndex = currencies.indexOf(curr)
            let tmp = baseCurrency;

            setbaseCurrency(curr);
            let tmpArray = [...currencies];
            tmpArray[currIndex] = tmp
            console.log(tmpArray)
            setcurrencies(tmpArray)
        }
        fetchData(curr)
    }

    const addNewCurrency = (newCurrency) => {
        setcurrencies([
            ...currencies,
            newCurrency
        ]);
    }

    const toggleEdit = () => {
        seteditEnabled(!editEnabled)
    }


    const duration = 1100; // ms
    const delay = 0; // ms

    const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * i}ms forwards`;

    return <section className='live-exhange-section'>

        
        <h2 className='live-exchange-title'>Live Exchange</h2>
        <table class="ui celled table exhange-table">
            <thead>
                <tr className='table-header currency-data-row'>
                    <th
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 80
                    }}>
                        <span>Inverse</span>
                        &nbsp;
                        <span><ToggleButton
                            
                            value={toggleInverse}
                            onToggle={(value) => {
        settoggleInverse(!value)
    }}/></span>
                    </th>
                    <th >Amount</th>
                    <th>Change(24h)</th>
                    <th>Chart(24h)</th>
                    <th data-label="btn">
                        <Button basic color='blue'   className='edit-btn' onClick={toggleEdit}>{editEnabled?"Save":"Edit"}</Button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th data-label="Name">
                        <Button size='big' className='currency-dropdown-btn'>
                            <CurrencyDropdown
                                setvalue={setbaseCurrency}
                                value={baseCurrency}
                                onChange={loadData}></CurrencyDropdown>
                        </Button>
                    </th>
                    <th data-label="Amount" className={toggleInverse?'currency-data-field-in':"currency-data-field-out"}>{toggleInverse
                            ? "Inverse"
                            : 1}</th>
                </tr>
                
                    
                {currencies.map((curr , index) => {
                    return <tr className='currency-data-row' style={{
                        position:"relative",
                        left:editEnabled?-25:0,
                        animation: animStr(index)
                    }}>
                        <th data-label="Name" className='currecny-th-name' >
                            <i
                                className={"flag " + curr
                                .substring(0, 2)
                                .toLocaleLowerCase()}></i>{curr}</th>
                        <th data-label="Amount" className={toggleInverse?'currency-data-field-in':"currency-data-field-out"}>{(data[curr])
                                ? (toggleInverse)
                                ? (1 / data[curr]).toFixed(3) + " " + baseCurrency
                                : data[curr]
                                : ""}</th>
                        <th data-label="Change(24h)" className={toggleInverse?'currency-data-field-in':"currency-data-field-out"}>{showChangeRate(curr)}</th>
                        <th data-label="Chart(24h)" className={toggleInverse?'currency-data-field-in':"currency-data-field-out"}></th>

                        <th data-label="btn">
                            {editEnabled &&<Button disabled>Send</Button>}
                            {!editEnabled && <Button color='blue'>Send</Button>}
                            {editEnabled &&<Button
                                onClick={() => {
                                setcurrencies(currencies.filter((s) => s !== curr))
                            }}
                            className="remove-currency-btn ">
                                <DeleteOutlined/></Button>}
                        </th>

                    </tr>
                })}
                
                
                <tr>
                    <th data-label="Name">
                        <AddNewCurrencyDropDown baseCurrency={baseCurrency} setvalue={addNewCurrency} removedOptionsValues={[...currencies, baseCurrency]}></AddNewCurrencyDropDown>
                    </th>
                </tr>

            </tbody>
        </table>
    </section>;
}

export default LiveExhnage;
