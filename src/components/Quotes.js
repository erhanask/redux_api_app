import {useDispatch, useSelector} from "react-redux";
import {errorSelector, fetchQuotes, quotesSelector, statusSelector} from "../redux/quotesSlice";
import {useEffect} from "react";
import {showError, showLoading} from "./Helpers";
import {QuoteItem} from "./QuoteItem";

export const Quotes = () => {
    const dispatch = useDispatch();
    const quotes = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);

    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchQuotes());
    }, [dispatch, status]);

    if (error) {
        showError(error);
    }

    return <div>
            <h1>Quotes Of Characters</h1>
        {status === 'loading' && showLoading()}
        {status === 'succeeded' && quotes.map(item => <QuoteItem key={item.quote_id} item={item} />)}

    </div>
}
