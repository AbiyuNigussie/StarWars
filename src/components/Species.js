import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Specie from './Specie';
const fetchSpecies = async (page = 1) => {
    const res = await fetch(`http://swapi.dev/api/species/?page=${page}`);
    return res.json()
}

const Species = () => {
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const {status, data, isFetching, isPreviousData} = useQuery(
        [`species`, page],
        () => fetchSpecies(page),
        { keepPreviousData: true, staleTime: Infinity }
    )

    React.useEffect(() => {
        if (data?.next){
            queryClient.prefetchQuery(['species', page + 1], () =>
                fetchSpecies(page + 1)
            )
        }
    }, [data, page, queryClient])

    return (
        <div>
            <h2>Species</h2>
            {status === 'loading' && (
                <div>Loading data</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <>
                    <div>Current Page: {page}</div> <br/>
                        <button
                            onClick={() =>  setPage(old => Math.max(old - 1, 0))}
                            disabled={page === 1}
                        >
                            Previous Page
                        </button>{' '}
                        <button
                            onClick={() => {
                                setPage(old => (data?.next ? old + 1 : old))
                            }}
                            disabled={isPreviousData || !data?.next}
                        >
                            Next Page
                        </button>
                    <div>
                        { data.results.map(specie => <Specie key={specie.name} specie={specie}/>)}
                    </div>
                </>
            )}
            {
                // Since the last page's data potentially sticks around between page requests,
                // we can use `isFetching` to show a background loading
                // indicator since our `status === 'loading'` state won't be triggered
                isFetching ? <span> Loading...</span> : null
      }{' '}
    </div>
  );
}

export default Species;