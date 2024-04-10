import { useState, useEffect } from 'react'
import { fetchDataFromAPI } from '../../helpers/ApiHelper'
import { Box } from '@chakra-ui/react'

export const ListaPaises = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const url = 'https://restcountries.com/v3.1/lang/spanish';

                const data = await fetchDataFromAPI(url, 'GET', {});
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchAPI();
    }, []);

    if (loading) return <div>Cargando...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            < Box m={4}>
                {data && (
                    <ol>
                        {data.map(item => (
                            <li key={item.name.common}>{item.name.common}</li>
                        ))}
                    </ol>
                )}
            </Box>

        </>
    )
}
