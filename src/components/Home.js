// App.js
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCaracters} from "../redux/charactersSlice";
import Masonry from 'react-masonry-css'
import {showError, showLoading} from "./Helpers";


export const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.characters.items);
    const nextPage = useSelector(state => state.characters.page);
    const status = useSelector(state => state.characters.status);
    const isError = useSelector(state => state.characters.isError);
    const hasNextPage = useSelector(state => state.characters.hasNextPage);

    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchCaracters());
    }, [dispatch, status]);

    if (status === 'failed') {
        showError(isError)
    }

    return (
        <>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {data.map((item) =>
                    <div key={item.char_id}>
                        <Link to={`/char/${item.char_id}`}>
                            <img alt={item.name} src={item.img}/>
                            <div>{item.name}</div>
                        </Link>
                    </div>
                )}
            </Masonry>
            {status === 'loading' && showLoading()}

            {!hasNextPage ?
                <div style={{
                    display: 'flex',
                    justifySelf: 'center',
                    textAlign: 'center',
                    padding: '20px 10px',
                    margin: '5px auto'
                }}>There is nothing to show.</div>
                :
                status !== 'loading' &&
                <button onClick={() => dispatch(fetchCaracters(nextPage))} style={{
                    display: 'flex',
                    justifySelf: 'center',
                    alignSelf: 'center',
                    padding: '20px 10px',
                    margin: '5px auto'
                }}>
                    Load More ({nextPage})
                </button>
            }
        </>
    );
}
