import { createContext, useEffect, useState } from "react";
import {  API_KEY } from "../../config.js";


export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const fetchAllCoins = async () => {
        const options = {
            headers: {
                'accept': 'application/json',
                'x-cg-demo-api-key': API_KEY
            }
        };
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`;
        fetch(url, options)
            .then(response => response.json())
            .then(response => setAllCoins(response))
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        fetchAllCoins();
    }, [currency]) //add empty array => function will exe. once when component gets loaded

    const contextValue = {
        allCoins, currency, setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;