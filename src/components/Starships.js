import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Starship from './Starship';
const fetchStarships = async (page = 1) => {
    const res = await fetch(`http://swapi.dev/api/starships/?page=${page}`);
    return res.json()
}

const Starships = () => {
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const {status, data, isFetching, isPreviousData} = useQuery(
        [`starships`, page],
        () => fetchStarships(page),
        { keepPreviousData: true, staleTime: Infinity }
    )

    React.useEffect(() => {
        if (data?.next){
            queryClient.prefetchQuery(['starships', page + 1], () =>
                Starships(page + 1)
            )
        }
    }, [data, page, queryClient])

    return (
        <div>
            <h2>Starships</h2>
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
                        { data.results.map(starship => <Starship key={starship.name} starship={starship}/>)}
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

export default Starships;