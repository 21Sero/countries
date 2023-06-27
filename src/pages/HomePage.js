import React, {useState, useEffect} from 'react';
import {ALL_COUNTRIES} from "../config";
import List from "../components/List";
import Card from "../components/Card";
import axios from "axios";
import Controls from "../components/Controls";
import {useNavigate, useParams} from "react-router-dom";

const HomePage = ({countries,setCountries}) => {
    const [filtredCountries, setFiltredCountries] = useState(countries)

    useEffect(() => {
        if (!countries.length)
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data)

        )
    }, [])

    const navigate = useNavigate()
    const handleSearch = (search, region) => {
            let data = [...countries]

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFiltredCountries(data)
    }
    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {
                    filtredCountries.map((c) => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: "Population",
                                    description: c.population.toLocaleString()
                                },
                                {
                                    title: "Region",
                                    description: c.region
                                },
                                {
                                    title: "Capital",
                                    description: c.capital
                                },
                            ],

                        }
                        return (
                            <Card
                                key={c.name}
                                onClick={() => {
                                    navigate(`/country/${c.name}`);
                                }}
                                {...countryInfo}
                            />
                        )
                    })
                }
            </List>
        </>
    );
};

export default HomePage;